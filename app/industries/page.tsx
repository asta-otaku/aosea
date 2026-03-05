import type { Metadata } from "next";
import Link from "next/link";
import HeroImageSlider from "@/components/HeroImageSlider";
import AnimatedImage from "@/components/AnimatedImage";
import { TextReveal } from "@/components/TextReveal";
import { StaggerList } from "@/components/StaggerList";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Industries & Clients | AOSEA Oil & Gas Nigeria",
  description:
    "AOSEA serves upstream operators, marginal fields, midstream gas, and EPC contractors across Nigeria's oil & gas sector.",
};

const industries = [
  {
    title: "Upstream Operators",
    description:
      "Indigenous and international E&P operators. We deliver technical services, project management, procurement, training, and manpower supply with regulatory compliance.",
    image: images.deepSeaRig,
  },
  {
    title: "Marginal Fields",
    description:
      "Marginal field licensees require fast mobilisation and cost efficiency. AOSEA delivers compliance-ready solutions tailored to marginal field economics.",
    image: images.oilRigSunset,
  },
  {
    title: "Midstream Gas",
    description:
      "Gas processing, transportation, and distribution. We support midstream projects with technical services, commissioning, and compliance advisory.",
    image: images.marineEquipment,
  },
  {
    title: "EPC Contractors",
    description:
      "EPC companies need reliable subcontractors. AOSEA delivers technical services, manpower, and procurement with execution accountability.",
    image: images.powerPlant,
  },
];

export default function IndustriesPage() {
  return (
    <>
      <HeroImageSlider overlayClassName="bg-navy-950/80" className="min-h-[40vh]">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <TextReveal as="h1" className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Industries & Clients
          </TextReveal>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Trusted by operators across the value chain.
          </p>
        </div>
      </HeroImageSlider>

      <AnimatedSection className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerList className="grid gap-8 md:grid-cols-2" stagger={0.1} variant="blur">
            {industries.map((ind, i) => (
              <AnimatedCard key={ind.title} index={i}>
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <AnimatedImage
                      src={ind.image}
                      alt={ind.title}
                      fill
                      motion="reveal"
                      delay={i * 0.08}
                      className="absolute inset-0 [&_img]:object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-xl font-bold text-navy-900">
                      {ind.title}
                    </h2>
                    <p className="mt-4 text-gray-600">{ind.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </StaggerList>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            Ready to Partner?
          </h2>
          <p className="mt-4 text-gray-600">
            Contact us for technical consultation, proposals, or compliance
            advisory.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-accent-500 px-6 py-3 font-semibold text-navy-950 hover:bg-accent-400"
          >
            Contact Us
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
