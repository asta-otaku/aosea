import type { Metadata } from "next";
import Link from "next/link";
import HeroImageSlider from "@/components/HeroImageSlider";
import AnimatedImage from "@/components/AnimatedImage";
import { TextReveal } from "@/components/TextReveal";
import { StaggerList } from "@/components/StaggerList";
import { AnimatedSection, AnimatedDiv, AnimatedHeading, AnimatedCard } from "@/components/AnimatedSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About AOSEA | Indigenous Oil & Gas Services Nigeria",
  description:
    "AOSEA Global Services Limited - Nigerian-rooted expertise, regulatory fluency, and execution accountability for Nigeria's oil & gas sector.",
};

const coreValues = [
  {
    title: "Indigenous Expertise",
    body: "Nigerian-rooted, regulator-aware. Deep understanding of local operations and compliance requirements.",
  },
  {
    title: "Regulatory Fluency",
    body: "PIA, NUPRC, NCDMB, NIMASA aligned. Compliance-ready documentation and processes.",
  },
  {
    title: "Execution Accountability",
    body: "Fast mobilization. Cost efficiency without compromise. Delivered on time, on spec.",
  },
  {
    title: "Integrity",
    body: "Transparent, ethical conduct. Honest communication with clients and stakeholders.",
  },
  {
    title: "Safety First",
    body: "HSE embedded in every project. From design to handover.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero - rotating sea/machinery imagery */}
      <HeroImageSlider overlayClassName="bg-navy-950/80">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <TextReveal as="h1" split="words" className="font-heading text-4xl font-bold text-white sm:text-5xl">
            About AOSEA
          </TextReveal>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Indigenous technical services for Nigeria&apos;s oil & gas sector.
          </p>
        </div>
      </HeroImageSlider>

      {/* Company Overview - with image */}
      <AnimatedSection className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-3xl">
            <AnimatedHeading className="font-heading text-2xl font-bold text-navy-900">
              Company Overview
            </AnimatedHeading>
            <p className="mt-4 text-gray-600 leading-relaxed">
              AOSEA Global Services Limited is an indigenous technical services
              company committed to advancing Nigeria&apos;s oil & gas sector
              through regulatory fluency, execution accountability, and
              compliance-ready solutions.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We serve indigenous E&P operators, marginal field licensees, IOC
              asset managers, EPC companies, and procurement managers with
              technical services, project execution, procurement, training, and
              manpower supply.
            </p>
          </div>
          <div className="relative h-72 rounded-xl lg:h-80">
            <AnimatedImage
              src={images.powerPlant}
              alt="Oil and gas operations"
              fill
              motion="reveal"
              delay={0.2}
              className="h-full w-full rounded-xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision - with imagery */}
      <AnimatedSection className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <AnimatedImage
                  src={images.deepSeaRig}
                  alt="Offshore operations"
                  fill
                  motion="reveal"
                  className="absolute inset-0 [&_img]:object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
              <h2 className="font-heading text-2xl font-bold text-navy-900">
                Mission
              </h2>
              <p className="mt-4 text-gray-600">
                To deliver trusted technical services and project execution that
                advance Nigeria&apos;s energy security and industrialisation,
                through indigenous expertise and regulatory compliance.
              </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <AnimatedImage
                  src={images.shipAtSea}
                  alt="Maritime operations"
                  fill
                  motion="reveal"
                  delay={0.1}
                  className="absolute inset-0 [&_img]:object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
              <h2 className="font-heading text-2xl font-bold text-navy-900">
                Vision
              </h2>
              <p className="mt-4 text-gray-600">
                To be the leading indigenous technical partner for Nigeria&apos;s
                oil & gas sector, recognised for regulatory fluency, execution
                accountability, and compliance-ready solutions.
              </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Indigenous Advantage - with image */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            Indigenous Advantage
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            AOSEA is Nigerian-rooted. We understand local operations, regulatory
            nuances, and stakeholder expectations. Our team combines technical
            depth with on-the-ground experience across the Niger Delta and
            nationwide. We mobilise fast, deliver on spec, and maintain
            compliance-ready documentation for every project.
          </p>
            </div>
            <div className="relative h-64 rounded-xl lg:h-80">
              <AnimatedImage src={images.platformWorkers} alt="Offshore operations" fill motion="reveal" className="h-full w-full rounded-xl" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Alignment - with background */}
      <section className="relative overflow-hidden bg-navy-900 py-2">
        <div className="absolute inset-0">
          <AnimatedImage src={images.powerPlant} alt="" fill motion="scale" className="absolute inset-0 [&_img]:opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-navy-900/95" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-white">
            Regulatory Alignment
          </h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            PIA compliant. NUPRC registered. NCDMB certified. NIMASA approved.
            Compliance-ready documentation for every project and every client.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {["PIA", "NUPRC", "NCDMB", "NIMASA"].map((reg) => (
              <span
                key={reg}
                className="rounded-full border border-accent-500/50 px-4 py-2 text-sm font-medium text-accent-400"
              >
                {reg}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <AnimatedSection className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedHeading className="font-heading text-2xl font-bold text-navy-900">
            Core Values
          </AnimatedHeading>
          <StaggerList className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08} variant="slide">
            {coreValues.map((v, i) => (
              <AnimatedCard key={v.title} index={i}>
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="font-heading font-semibold text-navy-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{v.body}</p>
                </div>
              </AnimatedCard>
            ))}
          </StaggerList>
        </div>
      </AnimatedSection>

      {/* Geographic Coverage - with imagery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            Geographic Coverage
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600">
            AOSEA operates across Nigeria with offices in Port Harcourt, Lagos,
            and Warri. We serve clients nationwide and across the Niger Delta.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="relative h-56 rounded-xl">
              <AnimatedImage src={images.offshorePlatform} alt="Offshore operations" fill motion="reveal" className="h-full w-full rounded-xl" sizes="50vw" />
            </div>
            <div className="relative h-56 rounded-xl">
              <AnimatedImage src={images.marineEquipment} alt="Marine infrastructure" fill motion="reveal" delay={0.15} className="h-full w-full rounded-xl" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-white">
            Ready to Partner?
          </h2>
          <p className="mt-4 text-gray-300">
            Get in touch for technical consultation, proposals, or compliance
            advisory.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-accent-500 px-6 py-3 font-semibold text-navy-950 hover:bg-accent-400"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
