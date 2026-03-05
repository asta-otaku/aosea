import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Technical Training Programs | AOSEA Training Nigeria",
  description:
    "Drilling, well control (IWCF/IADC), process plant ops, pipeline integrity. Simulators, hands-on. Nigerian Content aligned.",
};

export default function TechnicalTrainingPage() {
  return (
    <ServiceSubPageTemplate
      title="Technical Training Programs"
      parentTitle="Training & Compliance"
      parentHref="/services/training"
      number="04"
      heroImage={images.industrial}
      heroAlt="Technical training"
      ctaText="Request our training calendar and discuss customized programs for your team. Group rates available for 10+ participants."
      ctaHref="/contact?service=technical-training"
      content={
        <>
          <p>
            Field operations consistently require competent crews that can execute drilling, maintenance, commissioning, and brownfield tie-ins safely and rightly. AOSEA delivers job-ready technical training portfolio designed around the same work packs we execute across Technical Services and Project Management.
          </p>
          <p>
            Our programs cover drilling/production operations, well control (IWCF and IADC accredited programs), process plant operations, pipeline integrity management, instrumentation and controls, rotating equipment O&M, equipment overhaul, marine logistics interfaces, and engineering deliverables. We provide both theoretical instruction and practical hands-on training using simulators and workshop equipment.
          </p>
          <p>
            Our instructors hold current industry certifications and maintain active field involvement, ensuring that training content reflects current best practices rather than outdated textbook theory. For operators developing indigenous technical capacity, a key requirement under the Nigerian Content Act, our structured competency development programs provide clear progression pathways from entry-level technician to senior engineer. We document all training delivery with verifiable certificates and competency assessment records that satisfy both regulatory and client audit requirements.
          </p>
        </>
      }
    />
  );
}
