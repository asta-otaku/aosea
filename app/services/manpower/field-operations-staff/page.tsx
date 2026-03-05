import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Field Operations Staff | AOSEA Manpower Supply Nigeria",
  description:
    "Rig crews, production operators, maintenance technicians. IWCF/IADC certified. Compliant Nigerian employment. Dedicated recruitment agreements.",
};

export default function FieldOperationsStaffPage() {
  return (
    <ServiceSubPageTemplate
      title="Field Operations Staff"
      parentTitle="Manpower Supply"
      parentHref="/services/manpower"
      number="05"
      heroImage={images.oilRig}
      heroAlt="Field operations staff"
      ctaText="Share your crew requirements and mobilization timeline. We will deliver qualified personnel ready for deployment."
      ctaHref="/contact?service=field-operations-staff"
      content={
        <>
          <p>
            Reliable field operations staff are the backbone of every successful drilling campaign, production operation, and construction project in Nigeria. Our field operations staffing service provides experienced rig crews, production operators, maintenance technicians, and construction personnel who have worked the rigs, platforms, and flow stations of Nigeria&apos;s producing basins.
          </p>
          <p>
            We recruit and deploy complete rig crews: drillers, derrickmen, mud engineers, motormen, floormen, roustabouts, crane operators, and rig medics, all with verified Nigerian field experience and current IWCF/IADC certifications where applicable. Our production operations staff include control room operators, field operators, process technicians, and instrument technicians experienced in operating separation, compression, and metering systems across Nigerian facilities.
          </p>
          <p>
            We manage the full recruitment lifecycle: candidate sourcing, technical and practical assessment, background verification, medical fitness screening, and regulatory documentation. Our field staff are engaged under compliant Nigerian employment terms, properly insured, and covered under our HSE management system. For clients with ongoing manpower requirements, we offer dedicated recruitment agreements with guaranteed response times and replacement commitments.
          </p>
        </>
      }
    />
  );
}
