import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Manpower Supply | AOSEA Oil & Gas Nigeria",
  description:
    "Technical personnel, field operations staff, management support for Nigeria's oil & gas sector.",
};

const subpages = [
  { href: "/services/manpower/technical-personnel", label: "Technical Personnel" },
  { href: "/services/manpower/field-operations-staff", label: "Field Operations Staff" },
  { href: "/services/manpower/management-support", label: "Management Support" },
  { href: "/services/manpower/documentation-mobility", label: "Documentation & Mobility" },
];

export default function ManpowerPage() {
  return (
    <>
      <ServicePageTemplate
        title="Manpower Supply"
        description="Technical personnel, field operations staff, management support, documentation & mobility for Nigeria's oil & gas sector."
        heroImage={images.rigWorker}
        heroAlt="Manpower and field operations"
        problem="Operators need qualified personnel who can mobilise quickly and perform to spec. Compliance-ready documentation and mobility are essential."
        approach="AOSEA supplies qualified personnel with compliance-ready documentation. Technical personnel. Field operations staff. Management support. Fast mobilisation. Execution accountability."
        capabilities={[
          "Technical personnel",
          "Field operations staff",
          "Management support",
          "Documentation & mobility",
        ]}
        regulatory="PIA compliant. NUPRC registered. NCDMB certified. NIMASA approved. All personnel supplied with compliance-ready documentation."
        ctaLabel="Submit Personnel Requisition"
      >
        <section className="border-t border-gray-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-accent-500/10 p-6">
              <h2 className="font-heading text-xl font-bold text-navy-900">
                Personnel Requisition
              </h2>
              <p className="mt-2 text-gray-600">
                Submit your personnel requisition and we&apos;ll respond with
                qualified candidates.
              </p>
              <Link
                href="/contact?type=personnel"
                className="mt-4 inline-block rounded-md bg-accent-500 px-6 py-2 font-semibold text-navy-950 hover:bg-accent-400"
              >
                Submit Requisition
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
