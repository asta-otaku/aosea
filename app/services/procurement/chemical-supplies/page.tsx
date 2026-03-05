import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Chemical Supplies | AOSEA Procurement Nigeria",
  description:
    "Drilling fluids, production chemicals, lubricants. MSDS, CoA, batch traceability. VMI programs. Port Harcourt & Lagos inventory.",
};

export default function ChemicalSuppliesPage() {
  return (
    <ServiceSubPageTemplate
      title="Chemical Supplies"
      parentTitle="Procurement & Supplies"
      parentHref="/services/procurement"
      number="03"
      heroImage={images.refinery}
      heroAlt="Chemical supplies"
      metrics={[
        { label: "Inventory locations", value: "PH & Lagos" },
        { label: "Documentation", value: "MSDS, CoA" },
        { label: "VMI available", value: "Yes" },
      ]}
      ctaText="Request our chemical supply catalog and pricing schedule. Volume discounts are available for frame agreement commitments."
      ctaHref="/contact?service=chemical-supplies"
      content={
        <>
          <p>
            Chemical supply reliability directly impacts production uptime and operational safety. AOSEA supplies oilfield and industrial chemicals with a quality-first, documentation-ready approach integrated into your project schedule and maintenance plan. From drilling fluid chemicals to production chemicals, lubricants, greases, thread dopes, cleaning solvents, and industrial paints, our chemical supply division delivers consistent quality and availability to oil and gas operators across Nigeria.
          </p>
          <p>
            We source chemicals from approved manufacturers and maintain quality certifications including Material Safety Data Sheets (MSDS), certificates of analysis (CoA), and batch traceability for every product we supply. Our product range covers the full chemical requirements of drilling, production, and maintenance operations.
          </p>
          <p>
            We maintain strategic inventory positions in Port Harcourt and Lagos, enabling rapid supply response without delayed import lead times. For operators with frame agreements, we offer vendor-managed inventory (VMI) programs that eliminate stockout risk while reducing your working capital requirements.
          </p>
        </>
      }
    />
  );
}
