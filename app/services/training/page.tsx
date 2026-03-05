import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Training & Compliance | AOSEA Oil & Gas Nigeria",
  description:
    "Technical training, HSE training, regulatory compliance for Nigeria's oil & gas sector.",
};

const subpages = [
  { href: "/services/training/technical-training", label: "Technical Training Programs" },
  { href: "/services/training/hse-training", label: "HSE Training" },
  { href: "/services/training/regulatory-compliance", label: "Regulatory Compliance Services" },
  { href: "/services/training/operational-best-practices", label: "Operational Best Practices" },
  { href: "/services/training/custom-training", label: "Custom Training Solutions" },
];

export default function TrainingPage() {
  return (
    <>
      <ServicePageTemplate
        title="Training & Compliance"
        description="Technical training, HSE training, regulatory compliance, operational best practices, and custom solutions for Nigeria's oil & gas sector."
        heroImage={images.industrial}
        heroAlt="Training and compliance"
        problem="Operators need training that meets regulatory requirements and operational best practices. Compliance is non-negotiable."
        approach="AOSEA delivers training that is regulatory-aligned and operationally relevant. Technical training. HSE training. Regulatory compliance. Custom solutions for your team."
        capabilities={[
          "Technical training",
          "HSE training",
          "Regulatory compliance",
          "Operational best practices",
          "Custom solutions",
        ]}
        regulatory="PIA compliant. NUPRC registered. NCDMB certified. NIMASA approved. All training programmes include compliance-ready certification."
        ctaLabel="Book Training"
      >
        <section className="border-t border-gray-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-accent-500/10 p-6">
              <h2 className="font-heading text-xl font-bold text-navy-900">
                Training Calendar
              </h2>
              <p className="mt-2 text-gray-600">
                Download our training calendar (coming soon) or book a custom
                session.
              </p>
              <Link
                href="/contact?type=training"
                className="mt-4 inline-block rounded-md bg-accent-500 px-6 py-2 font-semibold text-navy-950 hover:bg-accent-400"
              >
                Book Training
              </Link>
            </div>
            <h2 className="mt-8 font-heading text-xl font-bold text-navy-900">
              Service Subpages
            </h2>
            <ul className="mt-4 space-y-3">
              {subpages.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="flex items-center gap-2 text-accent-600 hover:text-accent-500">
                    <span>→</span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}
