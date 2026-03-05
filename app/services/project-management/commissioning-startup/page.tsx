import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Commissioning & Start-up | AOSEA Project Management Nigeria",
  description:
    "Systematic verification, testing, activation. Zero commissioning-related startup delays. NUPRC/PIA aligned. Operator training.",
};

export default function CommissioningStartupPage() {
  return (
    <ServiceSubPageTemplate
      title="Commissioning & Start-up"
      parentTitle="Project Management"
      parentHref="/services/project-management"
      number="02"
      heroImage={images.refinery}
      heroAlt="Commissioning and start-up"
      ctaText="Engage our commissioning team early in your project. The earlier we are involved, the smoother your start-up will be."
      ctaHref="/contact?service=commissioning"
      content={
        <>
          <p>
            The transition from construction to production is the highest-risk phase of any oil and gas project as commissioning errors cause startup delays that can cost operators millions of dollars in deferred production. Our commissioning and start-up team specializes in the systematic verification, testing, and activation of production facilities, ensuring that every system performs to design specifications before first oil or first gas.
          </p>
          <p>
            We develop detailed procedures tailored to your facility&apos;s specific configuration, covering mechanical completion and performance testing. Our teams coordinate pre-commissioning (flushing, blowing, hydrotests, drying, leak tests), electrical energization, loop checks, instrument calibration verification, and control logic validation. Our engineers are experienced across a wide range of Nigerian production facilities, from simple wellhead platforms to complex gas processing plants.
          </p>
          <p>
            We manage the critical punch-list process, systematically identifying and resolving deficiencies before they become operational problems. For marginal field operators bringing assets online for the first time, we provide end-to-end start-up support including operator training, procedure development, and the initial production stabilization period. We plan permits, interface with regulators and inspectors, and manage logistics for OEM and specialist crews aligned to upstream regulatory expectations under the NUPRC/PIA framework.
          </p>
          <p className="font-semibold text-navy-900">Our goal: zero commissioning-related startup delays.</p>
        </>
      }
    />
  );
}
