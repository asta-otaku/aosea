"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import AnimatedImage from "@/components/AnimatedImage";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  image,
}: ServiceCardProps) {
  // Separate motion values: percentage coords for glare, normalized [-0.5,0.5] for tilt
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [9, -9]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-9, 9]), {
    stiffness: 220,
    damping: 22,
  });
  const cardScale = useSpring(1, { stiffness: 280, damping: 24 });

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.22) 0%, transparent 62%)`;

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    glareX.set(((e.clientX - rect.left) / rect.width) * 100);
    glareY.set(((e.clientY - rect.top) / rect.height) * 100);
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
    cardScale.set(1.03);
  }

  function onMouseLeave() {
    glareX.set(50);
    glareY.set(50);
    tiltX.set(0);
    tiltY.set(0);
    cardScale.set(1);
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        scale: cardScale,
        transformPerspective: 800,
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10"
      >
        {/* Glare highlight that tracks the cursor */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />

        {image && (
          <div className="relative h-36 overflow-hidden">
            <AnimatedImage
              src={image}
              alt={title}
              fill
              motion="reveal"
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        {icon && !image && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950 text-accent-500">
            {icon}
          </div>
        )}
        <div className="p-6">
          <h3 className="font-heading text-lg font-semibold text-navy-900 transition-colors group-hover:text-sky-600">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
          <span className="mt-4 inline-flex items-center text-sm font-medium text-sky-600 transition-colors group-hover:text-sky-500">
            Learn more
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
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
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
