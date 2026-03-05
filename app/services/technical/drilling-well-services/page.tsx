import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Drilling & Well Services | AOSEA Technical Services Nigeria",
  description:
    "End-to-end wellbore solutions for Nigeria's onshore, swamp, and shallow offshore. 50+ wells drilled. 15-25% NPT reduction. NUPRC-aligned.",
};

export default function DrillingWellServicesPage() {
  return (
    <ServiceSubPageTemplate
      title="Drilling & Well Services"
      parentTitle="Technical Services"
      parentHref="/services/technical"
      number="01"
      heroImage={images.oilRig}
      heroAlt="Drilling and well services"
      metrics={[
        { label: "Wells drilled for indigenous operators", value: "50+" },
        { label: "NPT reduction", value: "15-25%" },
        { label: "Mobilization", value: "24-48 hrs" },
      ]}
      ctaText="Contact us to discuss your next drilling campaign. Let us show you how local expertise reduces cost without compromising performance."
      ctaHref="/contact?service=drilling"
      content={
        <>
          <p>
            Our drilling and well services division delivers end-to-end wellbore solutions built on decades of hands-on experience across Nigeria&apos;s onshore, swamp, and shallow offshore terrains. From pre-spud planning through completion and workover, we deploy locally experienced engineers who understand the unique challenges of the Niger Delta&apos;s reactive shales, the Anambra Basin&apos;s pressure regimes, and the deepwater frontier plays.
          </p>
          <p>
            Our drilling optimization protocols, refined across 50+ wells drilled for indigenous operators, reduce non-productive time by 15-25%, translating directly to cost savings that strengthen your field economics. We provide comprehensive well intervention, workover, and completion services using fit-for-purpose technologies, including advanced mud logging, real-time wellbore monitoring, and downhole tool management.
          </p>
          <p>
            We run an optimize-execute-verify workflow with real-time drilling surveillance, bit/bottom-hole-assembly (BHA) and hydraulics tuning, torque & drag checks, and disciplined daily performance reporting. Our completion designs are tailored to Nigeria&apos;s reservoir conditions, maximizing production rates from initial flow.
          </p>
          <h2 className="mt-8 text-xl font-bold text-navy-900">
            Built for Nigerian Operators
          </h2>
          <p>
            We mobilize local crews quickly, work to NUPRC regulatory expectations, and plug into NIPEX/JQS contracting workflows. Our proximity to your operations means faster mobilization, lower logistics costs, and a team that stays accountable from spud to first oil.
          </p>
        </>
      }
    />
  );
}
