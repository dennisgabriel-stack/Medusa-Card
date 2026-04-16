"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onClick={toggleLocale}
      className="fixed top-4 right-4 z-40 flex items-center bg-dark-elevated/80 backdrop-blur-md border border-white/10 rounded-full overflow-hidden hover:border-gold/30 transition-colors"
      aria-label="Toggle language"
    >
      <span
        className={`px-3 py-1.5 text-xs font-bold tracking-wider transition-colors duration-300 ${
          locale === "de"
            ? "bg-gold text-black"
            : "text-gray-400"
        }`}
      >
        DE
      </span>
      <span
        className={`px-3 py-1.5 text-xs font-bold tracking-wider transition-colors duration-300 ${
          locale === "en"
            ? "bg-gold text-black"
            : "text-gray-400"
        }`}
      >
        EN
      </span>
    </motion.button>
  );
}
