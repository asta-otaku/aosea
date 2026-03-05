import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Safety Equipment | AOSEA Procurement Nigeria",
  description:
    "PPE, fire safety, emergency response. NOSDRA, NUPRC, NFPA aligned. PPE compliance audit. Multi-site delivery.",
};

export default function SafetyEquipmentPage() {
  return (
    <ServiceSubPageTemplate
      title="Safety Equipment"
      parentTitle="Procurement & Supplies"
      parentHref="/services/procurement"
      number="03"
      heroImage={images.industrial}
      heroAlt="Safety equipment"
      ctaText="Request a PPE compliance audit for your facilities. We will identify gaps and provide a complete supply proposal."
      ctaHref="/contact?service=safety-equipment"
      content={
        <>
          <p>
            Safety is not optional: it is a legal requirement, a moral obligation, and increasingly a pre-requisite for access to international financing and insurance for Nigerian oil and gas operations. AOSEA supplies safety equipment with a compliance mindset: correct specifications, traceable documentation, and reliable replenishment delivered by indigenous teams that mobilize fast across Nigeria&apos;s operational hubs.
          </p>
          <p>
            We provide the full range of personal protective equipment (PPE), fire safety systems, and emergency response equipment required for upstream and midstream operations in Nigeria. These include branded, certified PPE from globally recognized manufacturers: hard hats, safety boots, fire-resistant coveralls (FRC), safety glasses, hearing protection, respiratory equipment, fall protection harnesses, and H2S detection systems. Every item we supply meets or exceeds the standards mandated by NOSDRA, DPR/NUPRC, and international frameworks including NFPA, EN, and ANSI standards.
          </p>
          <p>
            Our safety consultants conduct PPE-needs assessments for your facilities, develop equipment replacement schedules, and provide inspection and recertification services that keep your safety inventory audit-ready. For multi-site operators, we offer centralized procurement with distributed delivery to all your operational locations.
          </p>
        </>
      }
    />
  );
}
