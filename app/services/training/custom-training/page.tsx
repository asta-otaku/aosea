import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Custom Training Solutions | AOSEA Training Nigeria",
  description:
    "Training needs analysis. Bespoke programs. English & Pidgin. LMS setup. Train-the-trainer. Marginal field to midstream.",
};

export default function CustomTrainingPage() {
  return (
    <ServiceSubPageTemplate
      title="Custom Training Solutions"
      parentTitle="Training & Compliance"
      parentHref="/services/training"
      number="04"
      heroImage={images.industrial}
      heroAlt="Custom training"
      ctaText="Contact us for a training needs assessment. We will design a custom program that builds the exact competencies your team needs."
      ctaHref="/contact?service=custom-training"
      content={
        <>
          <p>
            Every operator&apos;s training needs are different. A marginal field operator bringing a first asset online has fundamentally different competency requirements than an established producer managing multiple concessions. Our custom training solutions bridge this gap by developing tailored programs that address your organization&apos;s specific competency gaps, equipment configurations, and operational challenges.
          </p>
          <p>
            We begin every custom engagement with a training needs analysis (TNA) that assesses your workforce&apos;s current competency levels against the requirements of their roles and your operational risk profile. Based on this analysis, we design bespoke training programs that may combine classroom instruction, practical workshops, on-the-job coaching, e-learning modules, and competency assessments.
          </p>
          <p>
            Our custom programs have been developed for clients including marginal field operators, midstream gas processing companies, and oilfield service companies operating in Nigeria. We develop training in both English and Pidgin English where appropriate. For companies establishing training functions from scratch, we provide complete training management system design: competency frameworks, training matrices, assessment tools, and learning management system (LMS) setup. We also offer train-the-trainer programs that build your internal training capacity.
          </p>
        </>
      }
    />
  );
}
