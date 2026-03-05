"use client";

const FALLBACK_VIDEO = "https://www.w3schools.com/html/mov_bbb.mp4";

export default function HeroBackgroundVideo() {
  return (
    <div className="absolute inset-0">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src={FALLBACK_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy-950/70" />
    </div>
  );
}
