import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTABlock from "@/components/CTABlock";
import HeroBackgroundVideo from "@/components/HeroBackgroundVideo";
import HeroContent from "@/components/HeroContent";
import AnimatedImage from "@/components/AnimatedImage";
import { TextReveal } from "@/components/TextReveal";
import { StaggerList } from "@/components/StaggerList";
import {
  AnimatedSection,
  AnimatedDiv,
  AnimatedHeading,
  AnimatedCard,
} from "@/components/AnimatedSection";
import { images } from "@/lib/images";

// One distinct image per service – no repeats; each key maps to a different source image
const serviceImages = [
  "/technicalServices.jpg",
  "/projectManagement.jpg",
  "/procurementSupply.jpeg",
  "/trainingCompliance.jpg",
  "/manpowerSupply.png",
];
const differentiatorImages = [images.workersAtSea, images.deepSeaRig, images.powerPlant];

const services = [
  {
    title: "Technical Services",
    description:
      "Drilling, well services, IOM, equipment, marine logistics, and engineering support.",
    href: "/services/technical",
  },
  {
    title: "Project Management",
    description:
      "Turnkey delivery, construction management, commissioning & start-up.",
    href: "/services/project-management",
  },
  {
    title: "Procurement & Supplies",
    description:
      "Strategic sourcing, chemical supplies, safety equipment. 48-hour quote.",
    href: "/services/procurement",
  },
  {
    title: "Training & Compliance",
    description:
      "Technical training, HSE, regulatory compliance, operational best practices.",
    href: "/services/training",
  },
  {
    title: "Manpower Supply",
    description:
      "Technical personnel, field operations staff, management support.",
    href: "/services/manpower",
  },
];

const differentiators = [
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
];

const industries = [
  "Upstream Operators",
  "Marginal Fields",
  "Midstream Gas",
  "EPC Contractors",
];

export default function Home() {
  return (
    <>
      {/* Hero - video background, centered content */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-navy-950">
        <HeroBackgroundVideo />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center sm:px-8 lg:px-12">
          <HeroContent>
            <TextReveal as="h1" split="words" className="font-heading text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.15]">
              Indigenous Technical Services for Nigeria&apos;s Oil & Gas Sector
            </TextReveal>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-300">
              AOSEA delivers technical services, project execution, procurement, training, and manpower—with regulatory fluency and execution you can count on across Nigeria&apos;s oil & gas value chain.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-accent-500 px-6 py-3 font-semibold text-navy-950 transition-all hover:bg-accent-400 hover:scale-105"
              >
                Request Proposal
              </Link>
              <Link
                href="/contact?type=consultation"
                className="rounded-md border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                Schedule Technical Consultation
              </Link>
            </div>
          </HeroContent>
        </div>
      </section>

      {/* Service Portfolio Overview - with imagery */}
      <AnimatedSection className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center gap-6 md:flex-row md:items-end md:justify-between">
            <div className="text-center md:text-left">
              <AnimatedHeading className="font-heading text-3xl font-bold text-navy-900">
                Service Portfolio
              </AnimatedHeading>
              <AnimatedDiv delay={0.1} className="mt-4">
                <p className="max-w-2xl text-gray-600">
                  Five pillars of expertise: technical services, project management, procurement, training & compliance, and manpower supply—for operators, marginal fields, and EPCs across Nigeria.
                </p>
              </AnimatedDiv>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimatedCard key={service.href} index={i}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  image={serviceImages[i]}
                />
              </AnimatedCard>
            ))}
          </div>
          <AnimatedDiv delay={0.3} className="mt-10 text-center">
            <Link
              href="/services"
              className="font-semibold text-accent-600 transition-colors hover:text-accent-500"
            >
              View all services →
            </Link>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      {/* Why AOSEA - with imagery */}
      <AnimatedSection className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedHeading className="font-heading text-3xl font-bold text-navy-900">
              Why Choose AOSEA?
            </AnimatedHeading>
            <AnimatedDiv delay={0.1}>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                Nigerian-rooted expertise, PIA‑aligned compliance, and on-spec delivery for every project.
              </p>
            </AnimatedDiv>
          </div>
          <StaggerList className="mt-12 grid gap-8 md:grid-cols-3" stagger={0.1} variant="blur">
            {differentiators.map((d, i) => (
              <AnimatedCard key={d.title} index={i}>
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative h-40">
                    <AnimatedImage
                      src={differentiatorImages[i]}
                      alt={d.title}
                      fill
                      motion="reveal"
                      delay={i * 0.1}
                      className="absolute inset-0"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-navy-900">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-gray-600">{d.body}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </StaggerList>
        </div>
      </AnimatedSection>

      {/* Industries Served - with imagery */}
      <AnimatedSection className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <AnimatedHeading className="font-heading text-3xl font-bold text-navy-900">
                Industries Served
              </AnimatedHeading>
              <AnimatedDiv delay={0.1}>
                <p className="mt-4 text-gray-600">
                  Trusted by operators across the value chain.
                </p>
              </AnimatedDiv>
              <div className="mt-8 flex flex-wrap gap-4">
                {industries.map((ind, i) => (
                  <AnimatedCard key={ind} index={i}>
                    <div className="rounded-lg border border-gray-200 bg-white px-6 py-4 font-medium text-navy-900 shadow-sm">
                      {ind}
                    </div>
                  </AnimatedCard>
                ))}
              </div>
              <AnimatedDiv delay={0.4} className="mt-8">
                <Link
                  href="/industries"
                  className="font-semibold text-accent-600 hover:text-accent-500"
                >
                  Learn more about our clients →
                </Link>
              </AnimatedDiv>
            </div>
            <AnimatedDiv delay={0.2} className="relative h-64 rounded-xl lg:h-80">
              <AnimatedImage
                src={images.marineEquipment}
                alt="Oil and gas infrastructure"
                fill
                motion="reveal"
                delay={0.2}
                className="h-full w-full rounded-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </AnimatedDiv>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Blocks */}
      <CTABlock
        title="Ready to Partner?"
        description="Partner with an indigenous technical services company built on compliance, safety, and on-spec delivery. Request a proposal, schedule a consultation, or submit a requisition—we respond within 48 hours."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "About AOSEA", href: "/about" }}
        variant="navy"
      />
    </>
  );
}
