import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Technical Services | AOSEA Oil & Gas Nigeria",
  description:
    "Drilling, well services, IOM, equipment, marine logistics, engineering support for Nigeria's oil & gas sector.",
};

const subpages = [
  { href: "/services/technical/drilling-well-services", label: "Drilling & Well Services" },
  { href: "/services/technical/installation-operations-maintenance", label: "Installation, Operations & Maintenance" },
  { href: "/services/technical/equipment-services", label: "Equipment Services" },
  { href: "/services/technical/marine-services", label: "Marine Services" },
  { href: "/services/technical/engineering-technical-support", label: "Engineering & Technical Support" },
];

export default function TechnicalServicesPage() {
  return (
    <>
      <ServicePageTemplate
        title="Technical Services"
        description="Drilling & Well Services | Installation, Operations & Maintenance | Equipment Services | Marine Services | Engineering & Technical Support"
        heroImage={images.oilRig}
        heroAlt="Drilling and well services"
        problem="Operators need reliable technical partners who can mobilise fast, deliver on spec, and maintain compliance-ready documentation across drilling, IOM, equipment, marine, and engineering services."
        approach="AOSEA combines indigenous expertise with regulatory fluency. We deliver technical services that meet PIA, NUPRC, NCDMB, and NIMASA requirements. Fast mobilisation. Execution accountability. Compliance-ready documentation."
        capabilities={[
          "Drilling & well services",
          "Installation, operations & maintenance (IOM)",
          "Equipment services",
          "Marine services",
          "Engineering & technical support",
        ]}
        regulatory="PIA compliant. NUPRC registered. NCDMB certified. NIMASA approved. All technical services delivered with compliance-ready documentation."
        ctaLabel="Request Technical Proposal"
      >
        <section className="border-t border-gray-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-xl font-bold text-navy-900">
              Service Subpages
            </h2>
            <ul className="mt-4 space-y-3">
              {subpages.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 text-accent-600 hover:text-accent-500"
                  >
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
