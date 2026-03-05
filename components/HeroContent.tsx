"use client";

import { motion } from "framer-motion";

export default function HeroContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.15,
      }}
    >
      {children}
    </motion.div>
  );
}
