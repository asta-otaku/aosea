"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

const ease = [0.22, 1, 0.36, 1] as const;

/** Counts a numeric prefix up from 0, preserving any trailing suffix like "hrs", "%", "+" */
function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/^(\d+\.?\d*)(.*)/);
    if (!match) return;

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const isFloat = match[1].includes(".");
    const decimals = isFloat ? (match[1].split(".")[1]?.length ?? 1) : 0;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setDisplayed(
        (isFloat ? current.toFixed(decimals) : Math.round(current).toString()) +
          suffix,
      );
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{displayed}</span>;
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
      {/* Hero */}
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
          {/* Breadcrumb fades in */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-6 text-sm text-gray-400"
          >
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <Link href={parentHref} className="hover:text-white">
              {parentTitle}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-accent-400">{title}</span>
          </motion.nav>

          {/* Number badge pops in */}
          {number && (
            <motion.span
              initial={{ opacity: 0, scale: 0.75, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease }}
              className="inline-block rounded bg-accent-500/20 px-3 py-1 text-sm font-bold text-accent-400"
            >
              {number}
            </motion.span>
          )}

          {/* Title clips in from the left */}
          <motion.h1
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0 round 2px)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0 round 2px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl"
          >
            {title}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, ease }}
        className="py-16"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none leading-relaxed prose-headings:font-heading prose-headings:text-navy-900 prose-headings:mb-4 prose-p:text-gray-600 prose-p:mb-10 prose-p:leading-[1.75] [&_p+p]:mt-8 prose-li:text-gray-600 prose-li:leading-relaxed">
            {content}
          </div>
        </div>
      </motion.section>

      {/* Metrics — each card counts up and flips in */}
      {metrics && metrics.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.05 },
                },
                hidden: {},
              }}
              className={`grid gap-6 grid-cols-1 sm:grid-cols-2 ${
                metrics.length >= 4
                  ? "lg:grid-cols-4"
                  : metrics.length === 3
                    ? "lg:grid-cols-3"
                    : metrics.length === 2
                      ? "lg:grid-cols-2"
                      : "lg:grid-cols-1"
              }`}
            >
              {metrics.map((m) => (
                <motion.div
                  key={m.label}
                  variants={{
                    hidden: { opacity: 0, y: 28, rotateX: -15, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      scale: 1,
                      transition: { duration: 0.6, ease },
                    },
                  }}
                  style={{ transformPerspective: 600 }}
                  className="rounded-lg border border-gray-200 bg-white p-6 text-center"
                >
                  <p className="font-heading text-2xl font-bold text-accent-600">
                    <AnimatedCounter value={m.value} />
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{m.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* GET STARTED CTA */}
      <motion.section
        initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
        whileInView={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease }}
        className="border-t border-gray-200 bg-white py-16"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3, ease }}
            className="font-heading text-2xl font-bold text-navy-900"
          >
            GET STARTED
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45, ease }}
            className="mt-4 text-gray-600"
          >
            {ctaText}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.6, ease }}
          >
            <Link
              href={ctaHref}
              className="mt-6 inline-block rounded-md bg-accent-500 px-6 py-3 font-semibold text-navy-950 transition-colors hover:bg-accent-400"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
