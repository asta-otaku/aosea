import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Strategic Sourcing | AOSEA Procurement Nigeria",
  description:
    "150+ qualified suppliers. Equipment & materials. 48-hour quotes. NIPEX-ready. SONCAP, PAAR, customs clearance.",
};

export default function StrategicSourcingPage() {
  return (
    <ServiceSubPageTemplate
      title="Strategic Sourcing – Equipment & Materials"
      parentTitle="Procurement & Supplies"
      parentHref="/services/procurement"
      number="03"
      heroImage={images.pipeline}
      heroAlt="Strategic sourcing"
      metrics={[
        { label: "Qualified suppliers", value: "150+" },
        { label: "Quote turnaround", value: "48 hrs" },
        { label: "NIPEX ready", value: "Yes" },
      ]}
      ctaText="Share your material requisitions with our sourcing team. We will return competitive quotes with delivery timelines within 48 hours."
      ctaHref="/contact?service=strategic-sourcing"
      content={
        <>
          <p>
            Procurement in Nigeria&apos;s oil and gas sector is a strategic function, not an administrative one. Import duty structures, port congestion, local content requirements, and supplier reliability issues make procurement a minefield for operators who lack established supply chain networks. Our strategic sourcing division eliminates this risk.
          </p>
          <p>
            We maintain qualified supplier databases spanning over 150 Nigerian manufacturers and international OEMs, covering the full spectrum of upstream and midstream equipment and materials: piping and fittings, wellheads, valves, rotating equipment spares, process equipment, electrical systems, instrumentation, and structural steel.
          </p>
          <p>
            Our procurement process is designed for transparency and compliance: competitive bidding, vendor evaluation matrices, and full documentation trails that satisfy both operator governance requirements and NUPRC regulatory expectations. For critical long-lead items, we provide procurement tracking and expediting services. Where import is unavoidable, we plan compliance and clearance upfront including SONCAP-related conformity steps, customs clearance, PAAR processing, and last-mile delivery to your operational sites.
          </p>
        </>
      }
    />
  );
}
