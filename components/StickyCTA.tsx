"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StickyCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
      <Link
        href="/contact"
        className="flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 font-semibold text-navy-950 shadow-lg transition-colors hover:bg-accent-400"
      >
        <span className="hidden sm:inline">Request Proposal</span>
        <span className="sm:hidden">Contact</span>
        <svg
          className="h-4 w-4"
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
      </Link>
      </motion.div>
    </motion.div>
  );
}
