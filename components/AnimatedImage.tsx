"use client";

import Image, { ImageProps } from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const REMOTE_ORIGINS = [
  "https://upload.wikimedia.org",
  "https://images.unsplash.com",
];

function isRemoteSrc(src: ImageProps["src"]): boolean {
  if (typeof src !== "string") return false;
  return REMOTE_ORIGINS.some((o) => src.startsWith(o));
}

interface AnimatedImageProps extends Omit<ImageProps, "onLoad"> {
  /** "reveal" (blur+scale) | "parallax" | "scale" | "none" */
  motion?: "reveal" | "parallax" | "scale" | "none";
  delay?: number;
}

export default function AnimatedImage({
  motion: motionType = "reveal",
  delay = 0,
  className = "",
  ...props
}: AnimatedImageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const unoptimized = isRemoteSrc(props.src);

  const easeCubic = [0.22, 1, 0.36, 1] as const;
  const revealVariants = {
    hidden: { opacity: 0, scale: 1.15, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, delay, ease: easeCubic },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay, ease: easeCubic },
    },
  };

  if (motionType === "none") {
    return <Image {...props} className={className} unoptimized={unoptimized} />;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={motionType === "parallax" ? scaleVariants : motionType === "scale" ? scaleVariants : revealVariants}
      className={`relative h-full w-full min-h-0 overflow-hidden ${className}`}
    >
      <Image
        {...props}
        fill
        unoptimized={unoptimized}
        className="object-cover"
        sizes={props.sizes || "100vw"}
      />
    </motion.div>
  );
}
