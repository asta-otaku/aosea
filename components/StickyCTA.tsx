"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function StickyCTA() {
  const ref = useRef<HTMLDivElement>(null);

  // Magnetic offset — button drifts toward cursor when nearby
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 180, damping: 18 });
  const y = useSpring(rawY, { stiffness: 180, damping: 18 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // Pull the button up to 14px toward the cursor
    rawX.set((e.clientX - cx) * 0.35);
    rawY.set((e.clientY - cy) * 0.35);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8"
    >
      <motion.div
        ref={ref}
        style={{ x, y }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
      >
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
