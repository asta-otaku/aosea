import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Equipment Services | AOSEA Technical Services Nigeria",
  description:
    "Full lifecycle support: preventive maintenance, corrective repair, overhaul, certification. 30-50% asset life extension. Port Harcourt workshop.",
};

export default function EquipmentServicesPage() {
  return (
    <ServiceSubPageTemplate
      title="Equipment Services"
      parentTitle="Technical Services"
      parentHref="/services/technical"
      number="01"
      heroImage={images.drilling}
      heroAlt="Equipment services"
      metrics={[
        { label: "Asset life extension", value: "30-50%" },
        { label: "Assessment turnaround", value: "5 days" },
        { label: "Workshop location", value: "Port Harcourt" },
      ]}
      ctaText="Request an equipment condition assessment. We will provide a detailed report with cost-saving recommendations within 5 business days."
      ctaHref="/contact?service=equipment"
      content={
        <>
          <p>
            Equipment downtime is the silent profit killer in Nigeria&apos;s upstream and midstream operations. Our equipment services division provides a full lifecycle support model: preventive maintenance, corrective repair, complete overhaul, field service, equipment certification, and component rebuilding.
          </p>
          <p>
            Our preventive maintenance programs are built around asset criticality: route-based inspections, lubrication and filtration discipline, electrical checks, and shutdown work packs that reduce scope creep. When failures happen, we respond with rapid field service; fault isolation, in-situ repairs, alignment, and recommissioning plus workshop-level overhauls. Our component rebuilding program extends asset life by 30-50%, offering a cost-effective alternative to new equipment procurement in a market where foreign exchange constraints and import delays can stall projects for months.
          </p>
          <h2 className="mt-8 text-xl font-bold text-navy-900">
            Certified & Traceable
          </h2>
          <p>
            Every piece of equipment we return to service is certified to OEM specifications and backed by our warranty. From BOP stacks to mud pumps, Christmas trees to safety valves, we deliver equipment readiness you can depend on. Our workshop facilities in Port Harcourt are equipped for precision machining, pressure testing, NDT inspection, and hydraulic system repair.
          </p>
          <p>
            We support equipment certification packages required for safe operations: inspection planning, NDT coordination, pressure/leak testing, calibration and documentation trails suitable for operator audits and regulator-facing records. The result is shorter turnaround time, traceable quality, and predictable costs delivered by indigenous teams that can mobilize quickly and meet Nigerian Content expectations.
          </p>
        </>
      }
    />
  );
}
