import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Construction Management | AOSEA Project Management Nigeria",
  description:
    "Fabrication, installation, civil works. 5,000–50,000 bopd facilities. ISO 9001 aligned. QA/QC, HSE, site supervision.",
};

export default function ConstructionManagementPage() {
  return (
    <ServiceSubPageTemplate
      title="Construction Management"
      parentTitle="Project Management"
      parentHref="/services/project-management"
      number="02"
      heroImage={images.refinery}
      heroAlt="Construction management"
      metrics={[
        { label: "Facility capacity range", value: "5K–50K bopd" },
        { label: "ISO 9001", value: "Aligned" },
        { label: "Locations", value: "Onshore & swamp" },
      ]}
      ctaText="Engage us as your construction management partner. We will build synergy with your project team and deliver construction excellence."
      ctaHref="/contact?service=construction"
      content={
        <>
          <p>
            Our construction management team brings proven experience in managing fabrication, installation, and civil works across onshore and swamp locations in Nigeria&apos;s producing basins. We provide dedicated site supervisors, QA/QC engineers, HSE officers, and construction managers who are experienced in overseeing Nigerian construction crews and subcontractors to international standards.
          </p>
          <p>
            We run integrated site supervision across civils, mechanical, piping, E&I, and instrumentation: method statements, permit-to-work coordination, lift planning, QA/QC inspection and test plans, weld/NDT tracking, material control, and daily progress measurement.
          </p>
          <p>
            We have managed construction scopes for facilities serving 5,000–50,000 bopd production capacities, including tank farms, manifold platforms, production separators, and associated piping systems. Our quality management systems are aligned with ISO 9001 and client-specific requirements, ensuring that constructed facilities meet operational specifications from day one.
          </p>
        </>
      }
    />
  );
}
