import { NextResponse } from "next/server";
import { getConfirmationEmailHtml, getNotificationEmailHtml } from "@/lib/email-templates";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export type ContactFormPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
};

function getSender() {
  const fromEmail = process.env.BREVO_SENDER_EMAIL || "noreply@aosea.com";
  const fromName = process.env.BREVO_SENDER_NAME || "AOSEA Global Services";
  return { name: fromName, email: fromEmail };
}

function getRecipientEmail() {
  return process.env.CONTACT_RECIPIENT_EMAIL || "info@aosea.com";
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactFormPayload;
    const { name, company, email, phone, service, message } = body;

    if (!name || !company || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, company, email, service, message" },
        { status: 400 }
      );
    }

    const sender = getSender();
    const recipientEmail = getRecipientEmail();

    // 1. Confirmation to user — acknowledges their submission
    const confirmationRes = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender,
        to: [{ email, name }],
        subject: "Thank you for your inquiry — AOSEA Global Services",
        htmlContent: getConfirmationEmailHtml({ name, company, service }),
        tags: ["contact", "inquiry", "confirmation"],
      }),
    });

    const confirmationData = (await confirmationRes.json().catch(() => ({}))) as { message?: string; messageId?: string };
    if (!confirmationRes.ok) {
      const brevoMessage = confirmationData.message || JSON.stringify(confirmationData);
      console.error("Brevo confirmation email failed:", brevoMessage);
      return NextResponse.json(
        {
          error: "Failed to send confirmation email",
          ...(process.env.NODE_ENV === "development" && brevoMessage && { details: brevoMessage }),
        },
        { status: 500 }
      );
    }
    if (confirmationData?.messageId) {
      console.log("[Email] Confirmation sent to", email, "| messageId:", confirmationData.messageId);
    }

    // 2. Notification to admin — full inquiry details
    const notificationRes = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender,
        to: [{ email: recipientEmail, name: "AOSEA Team" }],
        replyTo: { email, name },
        subject: `New inquiry: ${name} — ${service}`,
        htmlContent: getNotificationEmailHtml({
          name,
          company,
          email,
          phone: phone || "",
          service,
          message,
        }),
        tags: ["contact", "inquiry", "notification"],
      }),
    });

    const notificationData = (await notificationRes.json().catch(() => ({}))) as { message?: string; messageId?: string };
    if (!notificationRes.ok) {
      console.error("Brevo notification email failed:", notificationData.message || JSON.stringify(notificationData));
      // Confirmation was sent; still return success
    } else if (notificationData?.messageId) {
      console.log("[Email] Notification sent to", recipientEmail, "| messageId:", notificationData.messageId);
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
