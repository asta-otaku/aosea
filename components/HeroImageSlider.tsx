"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSliderImages } from "@/lib/images";

const SLIDE_DURATION_MS = 5000;

interface HeroImageSliderProps {
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

export default function HeroImageSlider({
  className = "",
  overlayClassName = "",
  children,
}: HeroImageSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroSliderImages.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={`relative min-h-[60vh] overflow-hidden ${className}`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          // Ken Burns: each slide fades in and slowly zooms from 1.0 → 1.1 over its 5s lifespan
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            opacity: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: SLIDE_DURATION_MS / 1000 + 1, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={heroSliderImages[index]}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
            unoptimized
          />
        </motion.div>
      </AnimatePresence>
      <div className={`absolute inset-0 ${overlayClassName}`} />
      {children && (
        <div className="relative z-10 flex min-h-[60vh] items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
