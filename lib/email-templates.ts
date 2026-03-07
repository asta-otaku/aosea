/**
 * Custom HTML email templates for AOSEA contact inquiries.
 * Used with Brevo transactional API.
 */

const BRAND_COLOR = "#0f172a"; // navy-950
const ACCENT_COLOR = "#15803d"; // leaf green
const ACCENT_LIGHT = "#dcfce7"; // leaf green tint for backgrounds
const BORDER_COLOR = "#e2e8f0";
const TEXT_MUTED = "#64748b";
const TEXT_BODY = "#475569";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Logo in emails. Set EMAIL_LOGO_URL to override; otherwise uses Cloudinary-hosted logo. */
const DEFAULT_EMAIL_LOGO_URL =
  "https://res.cloudinary.com/dbhhupoln/image/upload/v1772726852/logo_vsif1b.jpg";

function getLogoUrl(): string {
  const url = process.env.EMAIL_LOGO_URL;
  if (url && url.startsWith("http")) return url.replace(/\/$/, "");
  return DEFAULT_EMAIL_LOGO_URL;
}

export function getConfirmationEmailHtml(params: {
  name: string;
  company: string;
  service: string;
}) {
  const name = escapeHtml(params.name);
  const company = escapeHtml(params.company);
  const service = escapeHtml(params.service);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aoseaglobal.com";
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for your inquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f1f5f9; color: #334155;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; padding: 32px 20px;">
    <tr>
      <td>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #ffffff; border-radius: 12px 12px 0 0; padding: 32px 32px 24px; border: 1px solid ${BORDER_COLOR}; border-bottom: none;">
          <tr>
            <td>
              <img src="${getLogoUrl()}" alt="AOSEA Global Resources Limited" width="160" height="52" style="display: block; height: 52px; width: 160px; max-width: 160px; border: 0; outline: none;" />
              <p style="margin: 10px 0 0; font-size: 13px; color: ${TEXT_MUTED}; letter-spacing: 0.02em;">Indigenous Technical Services for Nigeria&apos;s Oil &amp; Gas Sector</p>
              <div style="height: 4px; width: 48px; background: ${ACCENT_COLOR}; border-radius: 2px; margin-top: 20px;"></div>
            </td>
          </tr>
        </table>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #ffffff; border: 1px solid ${BORDER_COLOR}; border-top: none; border-radius: 0 0 12px 12px; padding: 0 32px 32px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05);">
          <tr>
            <td style="padding-top: 28px;">
              <h2 style="margin: 0 0 8px; font-size: 22px; font-weight: 700; color: ${BRAND_COLOR}; letter-spacing: -0.02em;">Thank you, ${name}</h2>
              <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6; color: ${TEXT_BODY};">
                We have received your inquiry regarding <strong style="color: ${BRAND_COLOR};">${service}</strong> and will respond within 24–48 hours.
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin: 24px 0; background: ${ACCENT_LIGHT}; border-radius: 8px; border-left: 4px solid ${ACCENT_COLOR};">
                <tr>
                  <td style="padding: 16px 20px; font-size: 14px; line-height: 1.6; color: ${TEXT_BODY};">
                    Our team will review your inquiry and get back to you at the contact details you provided.
                  </td>
                </tr>
              </table>
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top: 28px;">
                <tr>
                  <td style="background: ${ACCENT_COLOR}; padding: 14px 28px; border-radius: 8px;">
                    <a href="${siteUrl}" style="color: #0f172a; text-decoration: none; font-weight: 600; font-size: 15px;">Visit our website</a>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 32px; padding-top: 24px; border-top: 1px solid ${BORDER_COLOR};">
                <tr>
                  <td style="font-size: 13px; color: ${TEXT_MUTED};">
                    AOSEA Global Resources Limited &nbsp;·&nbsp; Port Harcourt &nbsp;·&nbsp; Lagos &nbsp;·&nbsp; Warri
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function getNotificationEmailHtml(params: {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const name = escapeHtml(params.name);
  const company = escapeHtml(params.company);
  const email = escapeHtml(params.email);
  const phone = escapeHtml(params.phone || "—");
  const service = escapeHtml(params.service);
  const message = escapeHtml(params.message);
  const rows = [
    { label: "Name", value: name },
    { label: "Company", value: company },
    { label: "Email", value: email },
    { label: "Phone", value: phone },
    { label: "Service Category", value: service },
  ];

  const sentAt = new Date().toLocaleString("en-NG", { dateStyle: "medium", timeStyle: "short" });
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New inquiry from ${name}</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f1f5f9; color: #334155;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; padding: 32px 20px;">
    <tr>
      <td>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #ffffff; border-radius: 12px 12px 0 0; padding: 32px 32px 24px; border: 1px solid ${BORDER_COLOR}; border-bottom: none;">
          <tr>
            <td>
              <img src="${getLogoUrl()}" alt="AOSEA Global Resources Limited" width="160" height="52" style="display: block; height: 52px; width: 160px; max-width: 160px; border: 0; outline: none; margin-bottom: 20px;" />
              <span style="display: inline-block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: ${ACCENT_COLOR}; margin-bottom: 6px;">New inquiry</span>
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: ${BRAND_COLOR}; letter-spacing: -0.02em; line-height: 1.3;">${name} <span style="color: ${TEXT_MUTED}; font-weight: 500;">—</span> ${company}</h1>
              <div style="height: 4px; width: 48px; background: ${ACCENT_COLOR}; border-radius: 2px; margin-top: 16px;"></div>
            </td>
          </tr>
        </table>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #ffffff; border: 1px solid ${BORDER_COLOR}; border-top: none; border-radius: 0 0 12px 12px; padding: 0 32px 32px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05);">
          <tr>
            <td style="padding-top: 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                ${rows
                  .map(
                    (r) => `
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid ${BORDER_COLOR}; font-size: 13px; color: ${TEXT_MUTED}; width: 140px; vertical-align: top;">${r.label}</td>
                  <td style="padding: 14px 0; border-bottom: 1px solid ${BORDER_COLOR}; font-size: 14px; font-weight: 500; color: ${BRAND_COLOR}; vertical-align: top;">${r.value}</td>
                </tr>
                `
                  )
                  .join("")}
              </table>
              <p style="margin: 24px 0 10px; font-size: 12px; font-weight: 600; color: ${BRAND_COLOR}; text-transform: uppercase; letter-spacing: 0.04em;">Message</p>
              <div style="padding: 18px 20px; background: #f8fafc; border-radius: 8px; border-left: 4px solid ${ACCENT_COLOR}; font-size: 14px; line-height: 1.6; color: ${TEXT_BODY}; white-space: pre-wrap;">${message}</div>
              <p style="margin: 24px 0 0; font-size: 12px; color: ${TEXT_MUTED};">
                Sent via AOSEA contact form &nbsp;·&nbsp; ${sentAt}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
