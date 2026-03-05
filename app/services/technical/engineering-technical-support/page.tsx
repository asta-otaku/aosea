import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Engineering & Technical Support | AOSEA Technical Services Nigeria",
  description:
    "Petroleum engineering, field development planning, technical consulting. NUPRC-approved FDPs. Fixed-fee pricing. No learning curve billing.",
};

export default function EngineeringTechnicalSupportPage() {
  return (
    <ServiceSubPageTemplate
      title="Engineering & Technical Support"
      parentTitle="Technical Services"
      parentHref="/services/technical"
      number="01"
      heroImage={images.industrial}
      heroAlt="Engineering and technical support"
      ctaText="Engage our engineering team for your next field development study or technical review. Request a proposal with fixed-fee pricing."
      ctaHref="/contact?service=engineering"
      content={
        <>
          <p>
            Sound engineering decisions upstream prevent expensive problems downstream. Our engineering and technical support division provides practical petroleum energy and process engineering, field development planning, technical consulting, and feasibility studies that turn subsurface and facilities constraints into executable, regulator-ready plans.
          </p>
          <p>
            We support indigenous operators and marginal field licensees through every stage of field development, from subsurface evaluation and reserves estimation through facilities design, regulatory submissions, and production optimization. Our engineers have contributed to field development plans approved by NUPRC for multiple Nigerian assets, and our technical reports have supported successful marginal field bids, farm-in negotiations, and financing discussions with Nigerian banks and DFIs.
          </p>
          <h2 className="mt-8 text-xl font-bold text-navy-900">
            Core Strengths
          </h2>
          <p>
            We bring particular strength in reservoir engineering for Nigeria&apos;s complex multi-layered sandstone reservoirs, process design for associated gas utilization, a critical requirement under the Petroleum Industry Act&apos;s flare gas provisions, and brownfield optimization for mature onshore assets where production decline management is key to asset value.
          </p>
          <p>
            Our consulting engagements are structured for results: clear deliverables, defined timelines, and transparent pricing. We do not bill for learning curves.
          </p>
        </>
      }
    />
  );
}
