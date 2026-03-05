import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Installation, Operations & Maintenance | AOSEA Technical Services Nigeria",
  description:
    "IOM for compressors, pumps, generators, rotating equipment. API-aligned. OEM-certified. 24-48 hour mobilization across Nigeria.",
};

export default function InstallationOperationsMaintenancePage() {
  return (
    <ServiceSubPageTemplate
      title="Installation, Operations & Maintenance"
      parentTitle="Technical Services"
      parentHref="/services/technical"
      number="01"
      heroImage={images.refinery}
      heroAlt="Installation and maintenance"
      metrics={[
        { label: "Mobilization", value: "24-48 hrs" },
        { label: "Locations", value: "PH, Lagos, Warri" },
        { label: "OEM certified", value: "Yes" },
      ]}
      ctaText="Schedule a facility audit today. Our engineers will identify maintenance gaps costing you production uptime."
      ctaHref="/contact?service=iom"
      content={
        <>
          <p>
            Keeping your production facilities running at peak efficiency requires more than routine checks; it demands a maintenance partner who understands your equipment, your environment, and your uptime targets. We specialize in the installation, operation, and maintenance of compressors, pumps, generators, and rotating equipment across onshore and offshore production facilities in Nigeria.
          </p>
          <p>
            We provide end-to-end lifecycle support: installation supervision, baseplate and grout verification, piping stress/interface checks, commissioning and performance run-tests, and operations support. For gas compression, we run vibration diagnostics, lube-oil management, valve and sealing health checks, and controlled start/stop procedures to reduce trips. For pumps and power systems, we deliver reliability upgrades including coupling alignment, seal plans, thermography, and electrical protection checks.
          </p>
          <h2 className="mt-8 text-xl font-bold text-navy-900">
            API-Aligned & OEM-Certified
          </h2>
          <p>
            Our work is executed with API-aligned practices for key rotating assets enabling consistent documentation for operator audits. Our technicians hold OEM-certified competencies and have maintained equipment from major manufacturers including Caterpillar, Waukesha, Cummins, and Nuovo Pignone across Niger Delta flow stations and gas processing plants.
          </p>
          <p>
            Our rapid-response teams are based in Port Harcourt, Lagos, and Warri, enabling 24–48-hour mobilization to any location in Nigeria&apos;s oil-producing regions. We reduce meantime to repair (MTTR) by maintaining strategic spare parts inventories locally, eliminating the weeks-long wait for international procurement.
          </p>
        </>
      }
    />
  );
}
