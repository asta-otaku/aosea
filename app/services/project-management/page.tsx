import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Project Management | AOSEA Oil & Gas Nigeria",
  description:
    "Turnkey delivery, construction management, commissioning & start-up for Nigeria's oil & gas sector.",
};

const subpages = [
  { href: "/services/project-management/turnkey-delivery", label: "Turnkey Delivery" },
  { href: "/services/project-management/construction-management", label: "Construction Management" },
  { href: "/services/project-management/commissioning-startup", label: "Commissioning & Start-up" },
  { href: "/services/project-management/project-scheduling", label: "Project Scheduling & Coordination" },
  { href: "/services/project-management/resource-optimization", label: "Resource Optimization" },
];

export default function ProjectManagementPage() {
  return (
    <>
      <ServicePageTemplate
        title="Project Management"
        description="Turnkey delivery, construction management, commissioning & start-up, project scheduling, and resource optimization for Nigeria's oil & gas sector."
        heroImage={images.refinery}
        heroAlt="Project management and construction"
        problem="Projects require disciplined execution, clear timelines, and compliance-ready handover. Delays and cost overruns erode value and stakeholder confidence."
        approach="AOSEA delivers project management with execution accountability. We combine indigenous expertise with structured methodologies. Fast mobilisation. Clear reporting. Compliance-ready documentation at every stage."
        capabilities={[
          "Turnkey delivery",
          "Construction management",
          "Commissioning & start-up",
          "Project scheduling",
          "Resource optimization",
        ]}
        regulatory="PIA compliant. NUPRC registered. NCDMB certified. NIMASA approved. All project deliverables include compliance-ready documentation."
        ctaLabel="Request Project Proposal"
      >
        <section className="border-t border-gray-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-xl font-bold text-navy-900">
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
