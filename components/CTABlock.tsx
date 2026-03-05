"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTABlockProps {
  title: string;
  description: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  variant?: "navy" | "accent" | "light";
}

export default function CTABlock({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "navy",
}: CTABlockProps) {
  const variants = {
    navy: "bg-navy-950 text-white",
    accent: "bg-accent-500 text-navy-950",
    light: "bg-gray-100 text-navy-900",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex min-h-[320px] items-center py-20 ${variants[variant]}`}
    >
      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-2xl font-bold sm:text-3xl"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {primaryAction && (
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={primaryAction.href}
                className={`inline-block rounded-md px-6 py-3 font-semibold transition-colors ${
                  variant === "accent"
                    ? "bg-navy-950 text-white hover:bg-navy-900"
                    : "bg-accent-500 text-navy-950 hover:bg-accent-400"
                }`}
              >
                {primaryAction.label}
              </Link>
            </motion.span>
          )}
          {secondaryAction && (
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={secondaryAction.href}
                className={`inline-block rounded-md border-2 px-6 py-3 font-semibold transition-colors ${
                  variant === "accent"
                    ? "border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white"
                    : "border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-navy-950"
                }`}
              >
                {secondaryAction.label}
              </Link>
            </motion.span>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
