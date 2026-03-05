import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Regulatory Compliance Services | AOSEA Training Nigeria",
  description:
    "PIA, NUPRC, NMDPRA, NCDMB. Submissions, EIAs, decommissioning plans. 15-day compliance audit. Former agency professionals.",
};

export default function RegulatoryCompliancePage() {
  return (
    <ServiceSubPageTemplate
      title="Regulatory Compliance Services"
      parentTitle="Training & Compliance"
      parentHref="/services/training"
      number="04"
      heroImage={images.refinery}
      heroAlt="Regulatory compliance"
      metrics={[
        { label: "Compliance audit turnaround", value: "15 days" },
        { label: "PIA framework", value: "Aligned" },
        { label: "Team includes", value: "Ex-regulators" },
      ]}
      ctaText="Commission a regulatory compliance audit. We will deliver a comprehensive gap analysis and remediation plan within 15 business days."
      ctaHref="/contact?service=regulatory-compliance"
      content={
        <>
          <p>
            Nigeria&apos;s petroleum regulatory landscape has undergone significant transformation with the Petroleum Industry Act (PIA) 2021 and the establishment of NUPRC and NMDPRA. Staying compliant with evolving regulations is essential for maintaining your operating license and avoiding sanctions that can halt operations.
          </p>
          <p>
            We support operators with regulatory submissions, license renewals, environmental impact assessments (EIA), environmental management plans (EMP), decommissioning plans, and compliance with NUPRC&apos;s technical and commercial regulations. Our compliance team includes former regulatory agency professionals who understand the review process, approval timelines, and documentation standards from the inside.
          </p>
          <p>
            For NCDMB compliance, we prepare Nigerian Content Plans, quarterly compliance reports, and succession plans. Our regulatory monitoring service tracks changes to NUPRC, NMDPRA, NOSDRA, and NCDMB requirements and alerts you to new obligations before they become compliance issues.
          </p>
        </>
      }
    />
  );
}
