"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 48, scale: 0.98 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 48, scale: 0.98 }
      }
      transition={{ duration: 0.8, ease }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedDiv({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 36, filter: "blur(6px)" }
      }
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, x: -28, skewX: -5 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, skewX: 0 }
          : { opacity: 0, x: -28, skewX: -5 }
      }
      transition={{ duration: 0.75, ease }}
      style={{ transformOrigin: "left center" }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}

export function AnimatedCard({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rawRotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rawRotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const rotateX = useSpring(rawRotateX, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(rawRotateY, { stiffness: 200, damping: 20 });
  const cardScale = useSpring(1, { stiffness: 250, damping: 22 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    cardScale.set(1.04);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    cardScale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease }}
      className={className}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale: cardScale,
          transformPerspective: 900,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
