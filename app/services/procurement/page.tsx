import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Procurement & Supplies | AOSEA Oil & Gas Nigeria",
  description:
    "Strategic sourcing, chemical supplies, safety equipment. 48-hour quote. Vendor compliance for Nigeria's oil & gas sector.",
};

const subpages = [
  { href: "/services/procurement/strategic-sourcing", label: "Strategic Sourcing" },
  { href: "/services/procurement/chemical-supplies", label: "Chemical Supplies" },
  { href: "/services/procurement/safety-equipment", label: "Safety Equipment" },
];

export default function ProcurementPage() {
  return (
    <>
      <ServicePageTemplate
        title="Procurement & Supplies"
        description="Strategic sourcing, chemical supplies, safety equipment. 48-hour quote. Vendor compliance strength. Supply chain reliability."
        heroImage={images.pipeline}
        heroAlt="Procurement and supply chain"
        problem="Operators need reliable procurement partners who can deliver quality materials on time, with compliance-ready documentation and vendor traceability."
        approach="AOSEA delivers procurement with vendor compliance strength. 48-hour quote turnaround. Supply chain reliability. Traceability and documentation for every order."
        capabilities={[
          "Strategic sourcing",
          "Chemical supplies",
          "Safety equipment",
        ]}
        regulatory="PIA compliant. NUPRC registered. NCDMB certified. NIMASA approved. All procurement includes vendor compliance documentation."
        ctaLabel="Submit Material Requisition"
      >
        <section className="border-t border-gray-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-accent-500/10 p-6">
              <h2 className="font-heading text-xl font-bold text-navy-900">
                48-Hour Quote
              </h2>
              <p className="mt-2 text-gray-600">
                Need a quote fast? Submit your material requisition and we&apos;ll
                respond within 48 hours.
              </p>
              <Link
                href="/contact?type=requisition"
                className="mt-4 inline-block rounded-md bg-accent-500 px-6 py-2 font-semibold text-navy-950 hover:bg-accent-400"
              >
                Get Quote
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
