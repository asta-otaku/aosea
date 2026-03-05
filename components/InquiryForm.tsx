"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const serviceCategories = [
  "Technical Services",
  "Project Management",
  "Procurement & Supplies",
  "Training & Compliance",
  "Manpower Supply",
  "General Inquiry",
];

// Map URL ?service= or ?type= params to form service category
const serviceParamToCategory: Record<string, string> = {
  drilling: "Technical Services",
  iom: "Technical Services",
  marine: "Technical Services",
  equipment: "Technical Services",
  engineering: "Technical Services",
  turnkey: "Project Management",
  construction: "Project Management",
  scheduling: "Project Management",
  commissioning: "Project Management",
  "resource-optimization": "Project Management",
  "strategic-sourcing": "Procurement & Supplies",
  "chemical-supplies": "Procurement & Supplies",
  "safety-equipment": "Procurement & Supplies",
  "technical-training": "Training & Compliance",
  "hse-training": "Training & Compliance",
  "regulatory-compliance": "Training & Compliance",
  "operational-best-practices": "Training & Compliance",
  "custom-training": "Training & Compliance",
  "technical-personnel": "Manpower Supply",
  "field-operations-staff": "Manpower Supply",
  "management-support": "Manpower Supply",
  "documentation-mobility": "Manpower Supply",
  requisition: "Procurement & Supplies",
  training: "Training & Compliance",
  personnel: "Manpower Supply",
  consultation: "General Inquiry",
  audit: "General Inquiry",
};

export default function InquiryForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [defaultService, setDefaultService] = useState<string>("");

  useEffect(() => {
    const service = searchParams.get("service") || searchParams.get("type");
    if (service) {
      const category = serviceParamToCategory[service.toLowerCase()];
      if (category) setDefaultService(category);
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        const msg = data.error || "Something went wrong. Please try again.";
        setErrorMessage(data.details ? `${msg} (${data.details})` : msg);
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg bg-success/10 p-6 text-center text-success">
        <p className="font-semibold">Thank you for your inquiry.</p>
        <p className="mt-2 text-sm">
          We&apos;ve sent a confirmation to your email. We will respond within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy-900">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-accent-500 focus:ring-accent-500"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-navy-900">
          Company *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-accent-500 focus:ring-accent-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy-900">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-accent-500 focus:ring-accent-500"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy-900">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-accent-500 focus:ring-accent-500"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-navy-900">
          Service Category *
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue={defaultService}
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-accent-500 focus:ring-accent-500"
        >
          <option value="">Select a category</option>
          {serviceCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-accent-500 focus:ring-accent-500"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-accent-500 px-6 py-3 font-semibold text-navy-950 transition-colors hover:bg-accent-400 disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
