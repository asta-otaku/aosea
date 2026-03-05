import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "HSE Training | AOSEA Training Nigeria",
  description:
    "OSHA, NEBOSH, OPITO aligned. HIRA, permit-to-work, H2S, BOSIET/FOET. Nigerian incident case studies. On-site or classroom.",
};

export default function HSETrainingPage() {
  return (
    <ServiceSubPageTemplate
      title="HSE Training"
      parentTitle="Training & Compliance"
      parentHref="/services/training"
      number="04"
      heroImage={images.industrial}
      heroAlt="HSE training"
      ctaText="Book HSE training for your team. We offer on-site delivery at your facilities or classroom sessions at our training centers."
      ctaHref="/contact?service=hse-training"
      content={
        <>
          <p>
            Health, Safety, and Environment performance is the non-negotiable foundation of responsible oil and gas operations. In Nigeria, HSE performance is shaped by realities on the ground: SIMOPS in brownfields, swamp/offshore logistics, contractor interfaces, and fatigue under tight schedules. AOSEA provides HSE training that is operator-auditable, field-relevant, and aligned with recognized industry standards.
          </p>
          <p>
            We deliver OSHA-aligned, NEBOSH-certified, and locally accredited HSE training programs covering: hazard identification and risk assessment (HIRA), permit-to-work systems, working at heights, confined space entry, hot work safety, hydrogen sulfide (H2S) awareness and escape, fire safety and emergency response, environmental management and spill response, and behavioral-based safety (BBS). For offshore and coastal operations, we support OPITO-aligned offshore safety pathways such as BOSIET/FOET orientation.
          </p>
          <p>
            Our training methodology goes beyond compliance checkbox exercises. We use incident case studies from Nigerian operations to build genuine safety awareness. Our HSE trainers have served as safety managers on Nigerian drilling rigs, production platforms, and construction sites. They understand the specific safety challenges of working in the Niger Delta&apos;s environment.
          </p>
        </>
      }
    />
  );
}
