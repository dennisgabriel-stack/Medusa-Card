"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onFinished: () => void;
}

export default function SplashScreen({ onFinished }: SplashScreenProps) {
  const [phase, setPhase] = useState<"logo" | "text" | "exit">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 800);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(() => onFinished(), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinished]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,169,94,0.06)_0%,_transparent_70%)]" />

          {/* Animated rings */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-gold"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.08 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
            className="absolute w-96 h-96 sm:w-[30rem] sm:h-[30rem] rounded-full border border-gold"
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/medusa-logo.png"
              alt="Medusa"
              width={200}
              height={200}
              priority
              className="w-36 h-36 sm:w-44 sm:h-44 object-contain"
            />
          </motion.div>

          {/* Text */}
          <AnimatePresence>
            {phase === "text" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-6 text-center"
              >
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-gold tracking-wider">
                  MEDUSA
                </h1>
                <p className="text-xs sm:text-sm font-display text-gold/50 tracking-[0.35em] mt-1">
                  HOOKAH LOUNGE
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute bottom-16 w-32 h-[2px] origin-left bg-gradient-to-r from-gold/60 via-gold to-gold/60"
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
