import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Marine Services | AOSEA Technical Services Nigeria",
  description:
    "Nigerian-focused marine support: crew transfer, platform supply, tug/tow, barge support. NIMASA compliant. OPITO/STCW trained crews.",
};

export default function MarineServicesPage() {
  return (
    <ServiceSubPageTemplate
      title="Marine Services"
      parentTitle="Technical Services"
      parentHref="/services/technical"
      number="01"
      heroImage={images.offshorePlatform}
      heroAlt="Marine services"
      metrics={[
        { label: "NIMASA compliant", value: "Yes" },
        { label: "Crew standards", value: "OPITO/STCW" },
        { label: "NCDMB aligned", value: "Yes" },
      ]}
      ctaText="Discuss your marine logistics requirements with our operations team. We will design a support package that reduces your vessel costs and improves reliability."
      ctaHref="/contact?service=marine"
      content={
        <>
          <p>
            Nigeria&apos;s oil and gas operations are inseparable from its waterways. From crew and cargo movements across the creeks and rivers of the Niger Delta to offshore platform supply and anchor handling, reliable marine logistics are critical to operational continuity. AOSEA provides Nigerian-focused marine support that keeps rigs, platforms, and construction spreads supplied, compliant, and on schedule.
          </p>
          <p>
            We support operators and EPCs with marine logistics planning, equipment mobilization, vessel charter/management coordination—platform supply, crew transfer, tug/tow and barge support, and offshore marine supervision to keep deck operations running. Our services are tailored to Nigeria&apos;s unique maritime operating environment including shallow-draft vessel operations in the network of creeks and channels where deep-draft foreign vessels cannot navigate.
          </p>
          <h2 className="mt-8 text-xl font-bold text-navy-900">
            Fully Compliant
          </h2>
          <p>
            We operate under full compliance with NIMASA regulations, Nigerian Ports Authority requirements, and international maritime safety standards. Our marine crew are locally recruited and trained to OPITO and STCW standards, ensuring both competence and compliance with NCDMB&apos;s local content mandates. We understand the security landscape, community engagement requirements, and seasonal weather patterns that affect marine operations in the Niger Delta.
          </p>
        </>
      }
    />
  );
}
