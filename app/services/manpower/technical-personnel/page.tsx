import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Technical Personnel | AOSEA Manpower Supply Nigeria",
  description:
    "500+ vetted technical professionals. Petroleum, drilling, process engineers. 72-hour candidate presentation. NOGICD aligned.",
};

export default function TechnicalPersonnelPage() {
  return (
    <ServiceSubPageTemplate
      title="Technical Personnel"
      parentTitle="Manpower Supply"
      parentHref="/services/manpower"
      number="05"
      heroImage={images.rigWorker}
      heroAlt="Technical personnel"
      metrics={[
        { label: "Vetted professionals", value: "500+" },
        { label: "Candidate presentation", value: "72 hrs" },
        { label: "NOGICD aligned", value: "Yes" },
      ]}
      ctaText="Submit your personnel requisitions. We will present pre-screened candidates within 72 hours."
      ctaHref="/contact?service=technical-personnel"
      content={
        <>
          <p>
            Access to qualified technical personnel is one of the most persistent challenges facing Nigerian oil and gas operators. The competition for experienced petroleum engineers, drilling engineers, production technologists, and process engineers intensifies as indigenous operators expand their portfolios under NUPRC&apos;s marginal field programme and PIA-driven divestments.
          </p>
          <p>
            Our technical manpower division maintains a vetted database of over 500 Nigerian technical professionals across all upstream and midstream disciplines. Every candidate in our database has been through a rigorous screening process: credential verification, technical competency assessment, reference checks, and HSE certification validation. We provide short-term project staffing, long-term embedded personnel, and contract-to-permanent placements that match your budget structure and operational requirements.
          </p>
          <p>
            Our technical professionals include petroleum engineers, reservoir engineers, drilling engineers, completion engineers, production engineers, process engineers, facilities engineers, pipeline engineers, instrumentation engineers, and geoscientists with experience across Nigerian basins. We handle all mobilization logistics, including medical fitness certification, survival training, and site-specific inductions, so your personnel arrive ready to work. Our advantage is indigenous responsiveness with mobilization from Nigerian hubs, local terrain familiarity, and cost efficiency, meeting content expectations for employment and training embedded in the NOGICD Act and NCDMB&apos;s Human Capacity Development direction.
          </p>
        </>
      }
    />
  );
}
