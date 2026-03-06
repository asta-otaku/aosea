"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

const ease = [0.22, 1, 0.36, 1] as const;

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
      {/* Hero */}
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
          {/* Title clips in from the left */}
          <motion.h1
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0 round 2px)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0 round 2px)" }}
            transition={{ duration: 0.8, ease }}
            className="font-heading text-4xl font-bold text-white"
          >
            {title}
          </motion.h1>
          {/* Description rises up with blur */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-4 max-w-2xl text-gray-300"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* The Challenge / AOSEA Approach — each column enters from its own side */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40, skewX: -3 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              style={{ transformOrigin: "left center" }}
            >
              <h2 className="font-heading text-xl font-bold text-navy-900">
                The Challenge
              </h2>
              <p className="mt-4 text-gray-600">{problem}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, skewX: 3 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              style={{ transformOrigin: "right center" }}
            >
              <h2 className="font-heading text-xl font-bold text-navy-900">
                AOSEA Approach
              </h2>
              <p className="mt-4 text-gray-600">{approach}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities — items stagger in with a flip+slide */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -24, skewX: -4 }}
            whileInView={{ opacity: 1, x: 0, skewX: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease }}
            style={{ transformOrigin: "left center" }}
            className="font-heading text-2xl font-bold text-navy-900"
          >
            Capabilities
          </motion.h2>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
              hidden: {},
            }}
            className="mt-6 flex flex-col gap-3"
          >
            {capabilities.map((cap) => (
              <motion.li
                key={cap}
                variants={{
                  hidden: { opacity: 0, x: -32, skewX: -4 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    skewX: 0,
                    transition: { duration: 0.5, ease },
                  },
                }}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-xs font-bold text-accent-600">
                  ✓
                </span>
                <span className="text-gray-700">{cap}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Regulatory Alignment */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease }}
        className="py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -24, skewX: -4 }}
            whileInView={{ opacity: 1, x: 0, skewX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
            style={{ transformOrigin: "left center" }}
            className="font-heading text-2xl font-bold text-navy-900"
          >
            Regulatory Alignment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mt-4 text-gray-600"
          >
            {regulatory}
          </motion.p>
        </div>
      </motion.section>

      {children}

      {/* CTA — polygon curtain sweep */}
      <motion.section
        initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
        whileInView={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease }}
        className="bg-navy-950 py-16"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="font-heading text-2xl font-bold text-white"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease }}
          >
            <Link
              href={ctaHref}
              className="mt-6 inline-block rounded-md bg-accent-500 px-6 py-3 font-semibold text-navy-950 hover:bg-accent-400"
            >
              {ctaLabel}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
