import Link from "next/link";
import AnimatedImage from "@/components/AnimatedImage";

interface ServiceSubPageTemplateProps {
  title: string;
  parentTitle: string;
  parentHref: string;
  number?: string;
  content: React.ReactNode;
  metrics?: { label: string; value: string }[];
  ctaText: string;
  ctaHref?: string;
  heroImage?: string;
  heroAlt?: string;
}

export default function ServiceSubPageTemplate({
  title,
  parentTitle,
  parentHref,
  number,
  content,
  metrics,
  ctaText,
  ctaHref = "/contact",
  heroImage,
  heroAlt = "Oil and gas operations",
}: ServiceSubPageTemplateProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-16">
        {heroImage && (
          <div className="absolute inset-0">
            <AnimatedImage
              src={heroImage}
              alt={heroAlt}
              fill
              motion="scale"
              className="absolute inset-0 [&_img]:opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy-950/90" />
          </div>
        )}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <Link href={parentHref} className="hover:text-white">{parentTitle}</Link>
            <span className="mx-2">/</span>
            <span className="text-accent-400">{title}</span>
          </nav>
          {number && (
            <span className="inline-block rounded bg-accent-500/20 px-3 py-1 text-sm font-bold text-accent-400">
              {number}
            </span>
          )}
          <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy-900 prose-p:text-gray-600 prose-li:text-gray-600">
            {content}
          </div>
        </div>
      </section>

      {metrics && metrics.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-lg border border-gray-200 bg-white p-6 text-center">
                  <p className="font-heading text-2xl font-bold text-accent-600">{m.value}</p>
                  <p className="mt-1 text-sm text-gray-600">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            GET STARTED
          </h2>
          <p className="mt-4 text-gray-600">{ctaText}</p>
          <Link
            href={ctaHref}
            className="mt-6 inline-block rounded-md bg-accent-500 px-6 py-3 font-semibold text-navy-950 transition-colors hover:bg-accent-400"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
