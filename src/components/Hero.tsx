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
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 py-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,169,94,0.08)_0%,_transparent_70%)]" />

      {/* Decorative circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-gold/10" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-gold/5" />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 mb-6"
      >
        <div className="animate-glow-pulse">
          {!logoError ? (
            <Image
              src="/images/medusa-logo.png"
              alt="Medusa Hookah Lounge"
              width={280}
              height={280}
              priority
              onError={() => setLogoError(true)}
              className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
            />
          ) : (
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-gold/30 flex items-center justify-center bg-gold/5">
              <span className="text-6xl sm:text-7xl font-display font-bold text-gold">
                M
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Venue name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 text-center mb-6"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gold tracking-wider">
          MEDUSA
        </h2>
        <p className="text-sm sm:text-base font-display text-gold/60 tracking-[0.4em] mt-1">
          HOOKAH LOUNGE
        </p>
      </motion.div>

      {/* Welcome text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 text-sm sm:text-base tracking-[0.3em] text-gray-400 uppercase mb-3"
      >
        {t("welcome")}
      </motion.p>

      {/* Menu title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="relative z-10 text-4xl sm:text-5xl font-display text-gold tracking-wider mb-6"
      >
        - {t("menu")} -
      </motion.h1>

      {/* Gold divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="relative z-10 gold-gradient-line w-48 sm:w-64 mb-12"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.7 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">
          {t("scrollDown")}
        </span>
        <ChevronDown className="w-5 h-5 text-gold animate-bounce-slow" />
      </motion.div>
    </section>
  );
}
