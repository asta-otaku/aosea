import Link from "next/link";
import AnimatedImage from "@/components/AnimatedImage";

interface ServicePageTemplateProps {
  title: string;
  description: string;
  problem: string;
  approach: string;
  capabilities: string[];
  regulatory: string;
  ctaLabel: string;
  ctaHref?: string;
  heroImage?: string;
  heroAlt?: string;
  children?: React.ReactNode;
}

export default function ServicePageTemplate({
  title,
  description,
  problem,
  approach,
  capabilities,
  regulatory,
  ctaLabel,
  ctaHref = "/contact",
  heroImage,
  heroAlt = "Oil and gas operations",
  children,
}: ServicePageTemplateProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20">
        {heroImage && (
          <div className="absolute inset-0">
            <AnimatedImage
              src={heroImage}
              alt={heroAlt}
              fill
              motion="scale"
              className="absolute inset-0 [&_img]:opacity-35"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy-950/85" />
          </div>
        )}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">{description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                The Challenge
              </h2>
              <p className="mt-4 text-gray-600">{problem}</p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                AOSEA Approach
              </h2>
              <p className="mt-4 text-gray-600">{approach}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            Capabilities
          </h2>
          <ul className="mt-6 flex flex-col gap-3">
            {capabilities.map((cap) => (
              <li
                key={cap}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-xs font-bold text-accent-600">
                  ✓
                </span>
                <span className="text-gray-700">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            Regulatory Alignment
          </h2>
          <p className="mt-4 text-gray-600">{regulatory}</p>
        </div>
      </section>

      {children}

      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <Link
            href={ctaHref}
            className="mt-6 inline-block rounded-md bg-accent-500 px-6 py-3 font-semibold text-navy-950 hover:bg-accent-400"
          >
            {ctaLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
