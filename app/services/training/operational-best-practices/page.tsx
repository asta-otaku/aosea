import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Operational Best Practices | AOSEA Training Nigeria",
  description:
    "Well integrity, production optimization, maintenance systems. API, ISO, IOGP. Fit-for-purpose. Marginal field SOPs.",
};

export default function OperationalBestPracticesPage() {
  return (
    <ServiceSubPageTemplate
      title="Operational Best Practices"
      parentTitle="Training & Compliance"
      parentHref="/services/training"
      number="04"
      heroImage={images.industrial}
      heroAlt="Operational best practices"
      ctaText="Engage us for an operational excellence assessment. We will identify your highest-impact improvement opportunities."
      ctaHref="/contact?service=operational-best-practices"
      content={
        <>
          <p>
            Our operational best practices consulting helps Nigerian operators adopt proven methodologies that improve safety, production efficiency, and cost performance without the overhead of international consulting firms. We benchmark your operations against industry standards including API recommended practices, ISO management systems, and international oil company (IOC) operating standards, then develop practical implementation plans that account for your organization&apos;s size, maturity level, and resource constraints.
          </p>
          <p>
            Our consulting engagements cover well integrity management systems, production optimization programs, maintenance management systems (including reliability-centered maintenance and condition-based monitoring), pipeline integrity management, and management of change (MOC) processes. We do not impose complex management systems that overwhelm small organizations.
          </p>
          <p>
            Our approach is to implement fit-for-purpose systems that your team can sustain independently after our engagement ends. Our modules are anchored on recognized frameworks like ISO 45001 and IOGP Life-Saving Rules, translated into site-ready tools: SOPs, checklists, daily planning boards, and supervisor observation programs. For marginal field operators building operational systems from scratch, we provide complete operating procedure packages including SOPs, work instructions, and operations manuals tailored to your specific facilities.
          </p>
        </>
      }
    />
  );
}
