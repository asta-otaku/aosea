import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Turnkey Project Delivery | AOSEA Project Management Nigeria",
  description:
    "Single point of accountability from concept through commissioning. FEED, engineering, procurement, construction. NIPEX-ready. 10-day execution plan.",
};

export default function TurnkeyDeliveryPage() {
  return (
    <ServiceSubPageTemplate
      title="Turnkey Project Delivery"
      parentTitle="Project Management"
      parentHref="/services/project-management"
      number="02"
      heroImage={images.refinery}
      heroAlt="Turnkey project delivery"
      metrics={[
        { label: "Execution plan turnaround", value: "10 days" },
        { label: "Single contract", value: "Yes" },
        { label: "PIA/NUPRC aligned", value: "Yes" },
      ]}
      ctaText="Brief us on your next capital project. We will deliver a turnkey execution plan with milestone-based pricing within 10 business days."
      ctaHref="/contact?service=turnkey"
      content={
        <>
          <p>
            Delivering oil and gas projects in Nigeria demands more than technical competence; it requires navigating regulatory timelines, community dynamics, supply chain bottlenecks, and unique security considerations in the local operating environment. AOSEA&apos;s turnkey project delivery model provides a single point of accountability from concept through commissioning, eliminating the coordination failures that plague multi-contractor arrangements common in Nigeria&apos;s upstream sector.
          </p>
          <p>
            We manage the full project lifecycle: front-end engineering design (FEED), detailed engineering, procurement, construction, and handover. Our project delivery track record spans brownfield upgrades and greenfield tie-ins; well pad flow station revamps, gas compression installations, pipelines and utility systems, and wellsite facilities.
          </p>
          <p>
            Our procurement is built for Nigeria: NIPEX-ready sourcing, vendor expediting, and import-clearance planning where needed. We embed Nigerian Content execution, community-facing workforce plans, and documentation that supports expectations under the NOGICD Act and NCDMB oversight. We also manage approvals and close-out documentation aligned with the Petroleum Industry Act and NUPRC frameworks, so permits and handover packs do not stall production.
          </p>
        </>
      }
    />
  );
}
