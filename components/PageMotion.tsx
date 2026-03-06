"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.97,
    y: 20,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.03,
    y: -16,
    filter: "blur(8px)",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

export default function PageMotion({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-full"
    >
      {children}
    </motion.div>
  );
}
