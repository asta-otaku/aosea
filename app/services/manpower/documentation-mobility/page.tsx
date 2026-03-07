import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Documentation & Mobility | AOSEA Manpower Supply Nigeria",
  description:
    "CERPAC, STR, visas, work permits. NIS relationships. Seafarer docs. NCDMB expatriate quota. Zero documentation delays.",
};

export default function DocumentationMobilityPage() {
  return (
    <ServiceSubPageTemplate
      title="Value-Added Services: Documentation & Mobility"
      parentTitle="Manpower Supply"
      parentHref="/services/manpower"
      number="05"
      heroImage={images.industrial}
      heroAlt="Documentation and mobility"
      ctaText="Outsource your workforce documentation to us. We will ensure your personnel are always mobilization ready."
      ctaHref="/contact?service=documentation-mobility"
      content={
        <>
          <p>
            In a globalized oil and gas industry, workforce mobility requires seamless documentation and administrative support. Our value-added services division handles the administrative burden of passport processing, visa applications, work permit procurement, and related documentation for your Nigerian and expatriate personnel.
          </p>
          <p>
            We process CERPAC (Combined Expatriate Residence Permit and Aliens Card) applications, STR (Subject to Regularization) visas, business visas, and temporary work permits through established relationships with the Nigerian Immigration Service and relevant embassies. For Nigerian personnel being deployed internationally, whether for training, project secondments, or equipment inspection trips, we manage passport renewal, visa applications, travel insurance, and vaccination documentation with the efficiency that comes from processing hundreds of applications annually.
          </p>
          <p>
            Our documentation services extend to NCDMB expatriate quota management, helping operators maintain compliance with Nigerian Content requirements while ensuring that essential expatriate personnel have valid documentation. We also handle seafarer documentation including STCW certificates, seaman&apos;s books, and flag state endorsements for marine personnel. Our administrative team tracks expiration dates and initiates renewal processes proactively, preventing the documentation lapses that can ground personnel at critical project moments.
          </p>
        </>
      }
    />
  );
}
