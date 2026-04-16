"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [logoError, setLogoError] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[75vh] px-6 pt-14 pb-10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,169,94,0.07)_0%,_transparent_70%)]" />

      {/* Decorative circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-gold/[0.07]" />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mb-5"
      >
        <div className="animate-glow-pulse">
          {!logoError ? (
            <Image
              src="/images/medusa-logo.png"
              alt="Medusa Hookah Lounge"
              width={240}
              height={240}
              priority
              onError={() => setLogoError(true)}
              className="w-40 h-40 sm:w-52 sm:h-52 object-contain"
            />
          ) : (
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full border-2 border-gold/30 flex items-center justify-center bg-gold/5">
              <span className="text-5xl sm:text-6xl font-display font-bold text-gold">
                M
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Welcome */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 text-xs sm:text-sm tracking-[0.25em] text-gray-400 uppercase mb-2"
      >
        {t("welcome")}
      </motion.p>

      {/* Menu title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="relative z-10 text-3xl sm:text-4xl font-display text-gold tracking-wider mb-4"
      >
        - {t("menu")} -
      </motion.h1>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 gold-gradient-line w-40 sm:w-52 mb-10"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="absolute bottom-6 z-10"
      >
        <ChevronDown className="w-5 h-5 text-gold/40 animate-bounce-slow" />
      </motion.div>
    </section>
  );
}
