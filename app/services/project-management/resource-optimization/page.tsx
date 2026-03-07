import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Resource Optimization | AOSEA Project Management Nigeria",
  description:
    "10-20% documented savings. Personnel, equipment, materials optimization. ROI visible within first quarter.",
};

export default function ResourceOptimizationPage() {
  return (
    <ServiceSubPageTemplate
      title="Resource Optimization"
      parentTitle="Project Management"
      parentHref="/services/project-management"
      number="02"
      heroImage={images.industrial}
      heroAlt="Resource optimization"
      metrics={[
        { label: "Documented savings", value: "10-20%" },
        { label: "ROI visibility", value: "Q1" },
        { label: "Focus", value: "Capital efficiency" },
      ]}
      ctaText="Let us conduct a resource optimization review of your current operations. ROI is typically visible within the first quarter."
      ctaHref="/contact?service=resource-optimization"
      content={
        <>
          <p>
            Capital efficiency is non-negotiable for Nigerian operators, particularly marginal field licensees working within constrained budgets and tight financing structures. Our resource optimization services help you extract maximum value from every naira invested in your projects and operations.
          </p>
          <p>
            We analyze your project and operational resource requirements (personnel, equipment, materials, and logistics) and develop optimized deployment strategies that reduce waste and eliminate redundancy. For drilling campaigns, we optimize rig scheduling, crew rotation, and material procurement to minimize standby costs and maximize footage per day. For production operations, we right-size your maintenance workforce, optimize spare parts inventories, and identify equipment sharing opportunities across facilities.
          </p>
          <p>
            Our resource optimization engagements have delivered documented savings of 10-20% on total project costs for Nigerian operators by eliminating inefficiencies that accumulate when projects are managed without rigorous resource planning. We bring analytical tools and data-driven methodologies, but what truly differentiates us is our understanding of Nigeria&apos;s supply chain realities.
          </p>
        </>
      }
    />
  );
}
