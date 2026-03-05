import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Management Support | AOSEA Manpower Supply Nigeria",
  description:
    "Site managers, project managers, QC officers, HSE managers. 10-25 years Nigerian experience. CSWIP, BGAS certified. One-week matching.",
};

export default function ManagementSupportPage() {
  return (
    <ServiceSubPageTemplate
      title="Management Support"
      parentTitle="Manpower Supply"
      parentHref="/services/manpower"
      number="05"
      heroImage={images.industrial}
      heroAlt="Management support"
      metrics={[
        { label: "Experience range", value: "10-25 yrs" },
        { label: "Matching time", value: "1 week" },
        { label: "Engagement", value: "Contract/secondment" },
      ]}
      ctaText="Discuss your management staffing gaps with our team. We will match you with experienced professionals within one week."
      ctaHref="/contact?service=management-support"
      content={
        <>
          <p>
            Strong management oversight is essential for operational excellence, but not every operator can justify the cost of maintaining full management teams across all locations and projects. Our management support services provide experienced site managers, project managers, quality control officers, HSE managers, and operations superintendents on contract or secondment basis, giving you senior-level leadership without permanent headcount commitments.
          </p>
          <p>
            Our management professionals bring 10–25 years of Nigerian oil and gas experience, including service with IOCs, indigenous E&P companies, and major service companies. They understand Nigerian regulatory requirements, community engagement protocols, labor relations, and the operational decision-making that keeps projects and operations running safely and efficiently.
          </p>
          <p>
            We provide management support tailored to your organizational needs: full-time embedded managers for ongoing operations, project-specific leadership for defined-duration assignments, and part-time advisory support for operators who need experienced guidance without full-time overhead. Our quality control officers are certified to CSWIP, BGAS, or equivalent standards and have inspection experience across welding, coatings, NDT, and mechanical disciplines relevant to Nigerian oil and gas construction and maintenance activities.
          </p>
        </>
      }
    />
  );
}
