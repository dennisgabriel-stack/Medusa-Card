"use client";

import { useMemo } from "react";

const PARTICLE_COUNT = 18;

export default function AnimatedBackground() {
  // Generate particles with deterministic positions to avoid hydration mismatch
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const seed = i * 2.37;
      return {
        id: i,
        left: `${(seed * 13) % 100}%`,
        size: 2 + ((seed * 7) % 4),
        delay: (seed * 1.7) % 20,
        duration: 22 + ((seed * 3) % 14),
        drift: (seed * 5) % 40 - 20,
      };
    });
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Base radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />

      {/* Glowing orbs - slow pulsing + drifting */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(200,169,94,0.15)_0%,_transparent_70%)] blur-3xl animate-orb-1" />
      <div className="absolute top-[40%] right-[-15%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(212,175,55,0.12)_0%,_transparent_70%)] blur-3xl animate-orb-2" />
      <div className="absolute bottom-[10%] left-[20%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,_rgba(168,137,62,0.1)_0%,_transparent_70%)] blur-3xl animate-orb-3" />

      {/* Subtle moving gradient shimmer */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_transparent_40%,_rgba(200,169,94,0.03)_50%,_transparent_60%)] bg-[length:200%_200%] animate-shimmer-slow" />

      {/* Floating gold particles (embers/dust) */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10px] rounded-full bg-gold animate-float-up"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: `0 0 ${p.size * 3}px rgba(200,169,94,0.6)`,
            opacity: 0,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
