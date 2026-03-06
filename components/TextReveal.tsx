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

const ease = [0.22, 1, 0.36, 1] as const;

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

  const staggerMap: Record<string, number> = {
    words: 0.055,
    chars: 0.025,
    lines: 0.08,
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerMap[split] ?? 0.05,
        delayChildren: delay,
      },
    },
  };

  if (split === "none") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.7, delay, ease }}
        className={className}
      >
        <Tag className="inline">{children}</Tag>
      </motion.div>
    );
  }

  // Words / lines: each word rises up from behind a clip (overflow:hidden container)
  if (split === "words" || split === "lines") {
    const items =
      split === "words" ? text.split(/\s+/) : text.split(/\n/);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={container}
        aria-label={text}
      >
        <Tag className={`inline ${className}`}>
          {items.map((part, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                overflow: "hidden",
                verticalAlign: "bottom",
                lineHeight: 1.3,
                marginRight: split === "words" ? "0.28em" : 0,
              }}
            >
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { y: "115%", rotateZ: 2.5, opacity: 0.01 },
                  visible: {
                    y: "0%",
                    rotateZ: 0,
                    opacity: 1,
                    transition: { duration: 0.75, ease },
                  },
                }}
                style={{ transformOrigin: "bottom left" }}
              >
                {part}
              </motion.span>
            </span>
          ))}
        </Tag>
      </motion.div>
    );
  }

  // Chars: 3D rotateX flip from below
  const chars = text.split("");

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      style={{ perspective: 500 }}
    >
      <Tag className={`inline ${className}`} aria-label={text}>
        {chars.map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 28, rotateX: -70 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: { duration: 0.45, ease },
              },
            }}
            style={{
              marginRight: char === " " ? "0.28em" : "0.01em",
              transformOrigin: "bottom center",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
