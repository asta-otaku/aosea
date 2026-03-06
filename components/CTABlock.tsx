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

const ease = [0.22, 1, 0.36, 1] as const;

export default function CTABlock({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "navy",
}: CTABlockProps) {
  const variantStyles = {
    navy: "bg-navy-950 text-white",
    accent: "bg-accent-500 text-navy-950",
    light: "bg-gray-100 text-navy-900",
  };

  return (
    // Polygon clip-path curtain: section sweeps up from the bottom
    <motion.section
      initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
      whileInView={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease }}
      className={`flex min-h-[320px] items-center py-20 ${variantStyles[variant]}`}
    >
      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Heading wipes in from the left via clip-path */}
        <motion.h2
          initial={{ clipPath: "inset(0 100% 0 0 round 2px)", opacity: 1 }}
          whileInView={{ clipPath: "inset(0 0% 0 0 round 2px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25, ease }}
          className="font-heading text-2xl font-bold sm:text-3xl"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.45, ease }}
          className="mt-4 text-lg"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.6, ease }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {primaryAction && (
            <motion.span
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
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
            <motion.span
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
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
