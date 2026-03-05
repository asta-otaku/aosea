"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, Children } from "react";

interface StaggerListProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  /** "slide" | "scale" | "blur" | "fade" */
  variant?: "slide" | "scale" | "blur" | "fade";
}

const easeCubic = [0.22, 1, 0.36, 1] as const;
const itemVariants = {
  slide: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeCubic } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeCubic } },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.7, ease: easeCubic } },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
};

export function StaggerList({
  children,
  className = "",
  stagger = 0.08,
  delayChildren = 0.1,
  variant = "slide",
}: StaggerListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const v = itemVariants[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
        hidden: {},
      }}
      className={className}
    >
      {Children.map(children, (child, i) => (
        <motion.div key={i} variants={v}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
