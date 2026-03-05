import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroImageSlider from "@/components/HeroImageSlider";
import ServiceCard from "@/components/ServiceCard";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services | AOSEA Oil & Gas Technical Services Nigeria",
  description:
    "Technical services, project management, procurement, training & compliance, manpower supply for Nigeria's oil & gas sector.",
};

const services = [
  {
    number: "01",
    title: "Technical Services",
    description:
      "Drilling & well services, installation, operations & maintenance, equipment services, marine services, engineering & technical support.",
    href: "/services/technical",
  },
  {
    number: "02",
    title: "Project Management",
    description:
      "Turnkey delivery, construction management, commissioning & start-up, project scheduling, resource optimization.",
    href: "/services/project-management",
  },
  {
    number: "03",
    title: "Procurement & Supplies",
    description:
      "Strategic sourcing, chemical supplies, safety equipment. 48-hour quote. Vendor compliance strength.",
    href: "/services/procurement",
  },
  {
    number: "04",
    title: "Training & Compliance",
    description:
      "Technical training, HSE training, regulatory compliance, operational best practices, custom solutions.",
    href: "/services/training",
  },
  {
    number: "05",
    title: "Manpower Supply",
    description:
      "Technical personnel, field operations staff, management support, documentation & mobility.",
    href: "/services/manpower",
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroImageSlider overlayClassName="bg-navy-950/80" className="min-h-[50vh]">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">
            Service Portfolio
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold text-white sm:text-5xl">
            Indigenous Technical Services for Nigeria&apos;s Oil & Gas Sector
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            AOSEA Global Services Limited
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/" className="text-sm text-gray-400 hover:text-white">
              Website
            </Link>
            <span className="text-gray-600">•</span>
            <a href="mailto:info@aosea.com" className="text-sm text-gray-400 hover:text-white">
              Email
            </a>
            <span className="text-gray-600">•</span>
            <a href="tel:+2348000000000" className="text-sm text-gray-400 hover:text-white">
              Phone
            </a>
          </div>
        </div>
      </HeroImageSlider>

      <AnimatedSection className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimatedCard key={service.href} index={i}>
                <Link
                  href={service.href}
                  className={`group block overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md ${
                    i === 0
                      ? "border-accent-500/50 ring-2 ring-accent-500/20 hover:ring-accent-500/30"
                      : "border-gray-200 hover:border-accent-500/30"
                  }`}
                >
                  <div className="flex items-center gap-3 border-b border-gray-100 p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950 font-heading text-lg font-bold text-accent-400">
                      {service.number}
                    </span>
                    <h2 className="font-heading text-xl font-bold text-navy-900 group-hover:text-accent-600">
                      {service.title}
                    </h2>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{service.description}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-accent-600 group-hover:text-accent-500">
                      Learn more
                      <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            Need a Custom Solution?
          </h2>
          <p className="mt-4 text-gray-600">
            Contact us for technical consultation, proposals, or compliance advisory.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-accent-500 px-6 py-3 font-semibold text-navy-950 hover:bg-accent-400"
          >
            Request Proposal
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
