"use client";

import { motion } from "framer-motion";

// Fallback video - plays when /public/hero-video.mp4 is missing
// Replace with your own: add hero-video.mp4 to /public for custom content
const FALLBACK_VIDEO =
  "https://www.w3schools.com/html/mov_bbb.mp4";

export default function HeroVideo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="group relative aspect-video overflow-hidden rounded-xl border-2 border-navy-700/50 bg-navy-900 shadow-2xl ring-2 ring-white/5 transition-all duration-300 hover:ring-accent-500/30"
    >
      <video
        className="h-full w-full object-cover"
        poster="https://images.unsplash.com/photo-1633829131104-e2134f75c6e5?w=800&q=85"
        controls
        preload="auto"
        playsInline
        muted={false}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src={FALLBACK_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}
