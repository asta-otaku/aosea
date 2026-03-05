"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  /** "words" splits by word, "lines" by line, "chars" by character */
  split?: "words" | "lines" | "chars" | "none";
}

export function TextReveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  split = "none",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const text = typeof children === "string" ? children : String(children);
  const words = text.split(/\s+/);
  const lines = text.split(/\n/);
  const chars = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      transition: { staggerChildren: split === "words" ? 0.04 : split === "chars" ? 0.02 : 0.06, delayChildren: delay },
    }),
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (split === "none") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        <Tag className="inline">{children}</Tag>
      </motion.div>
    );
  }

  const items = split === "words" ? words : split === "lines" ? lines : chars;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      <Tag className={`inline ${className}`}>
        {items.map((part, i) => (
          <motion.span
            key={i}
            variants={item}
            className="inline-block"
            style={{ marginRight: split === "words" ? "0.25em" : split === "chars" ? "0.03em" : 0 }}
          >
            {part}
            {split === "words" && i < words.length - 1 ? "\u00A0" : split === "lines" && i < lines.length - 1 ? "\n" : ""}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
