"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedImage from "@/components/AnimatedImage";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  image,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 260, damping: 18 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <Link
        href={href}
        className="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10"
      >
        {image && (
          <div className="relative h-36 overflow-hidden">
            <AnimatedImage
              src={image}
              alt={title}
              fill
              motion="reveal"
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        {icon && !image && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950 text-accent-500">
            {icon}
          </div>
        )}
        <div className="p-6">
          <h3 className="font-heading text-lg font-semibold text-navy-900 group-hover:text-sky-600 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
          <span className="mt-4 inline-flex items-center text-sm font-medium text-sky-600 group-hover:text-sky-500 transition-colors">
            Learn more
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
