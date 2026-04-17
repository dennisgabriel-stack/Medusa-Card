"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Mail, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface LandingPageProps {
  onOpenMenu: () => void;
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function LandingPage({ onOpenMenu }: LandingPageProps) {
  const { locale, t } = useLanguage();
  const [logoError, setLogoError] = useState(false);

  return (
    <section className="relative flex flex-col items-center min-h-screen px-6 py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,169,94,0.06)_0%,_transparent_70%)]" />

      {/* Decorative circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
        <div className="w-[500px] h-[500px] rounded-full border border-gold" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center w-full max-w-md"
      >
        {/* Logo */}
        <motion.div variants={fadeUp} className="mt-8 mb-4">
          <div className="animate-glow-pulse">
            {!logoError ? (
              <Image
                src="/images/medusa-logo.svg"
                alt="Medusa Hookah Lounge"
                width={240}
                height={240}
                priority
                onError={() => setLogoError(true)}
                className="w-44 h-44 sm:w-56 sm:h-56 object-contain"
              />
            ) : (
              <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full border-2 border-gold/30 flex items-center justify-center bg-gold/5">
                <span className="text-5xl sm:text-6xl font-display font-bold text-gold">
                  M
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={fadeUp} className="text-center mb-2">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-gold tracking-wider">
            MEDUSA
          </h1>
          <p className="text-sm font-display text-gold/50 tracking-[0.35em] mt-1">
            HOOKAH LOUNGE
          </p>
        </motion.div>

        {/* Welcome */}
        <motion.p
          variants={fadeUp}
          className="text-sm tracking-[0.25em] text-gray-400 uppercase mb-2"
        >
          {t("welcome")}
        </motion.p>

        {/* Divider */}
        <motion.div variants={fadeUp} className="gold-gradient-line w-40 mb-10" />

        {/* Main action buttons */}
        <motion.div variants={fadeUp} className="w-full space-y-4 mb-10">
          {/* Menu button */}
          <button
            onClick={onOpenMenu}
            className="group relative w-full h-16 rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center justify-center gap-3">
              <BookOpen className="w-5 h-5 text-black" />
              <span className="text-lg font-display font-bold text-black tracking-wider uppercase">
                {locale === "de" ? "Zur Karte" : "View Menu"}
              </span>
            </div>
          </button>

          {/* Instagram button */}
          <a
            href="https://www.instagram.com/medusa_woerth?igsh=aDdnanBrN242Nzhl"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 w-full h-14 rounded-2xl overflow-hidden border border-white/10 hover:border-gold/30 transition-colors bg-dark-elevated/50"
          >
            <svg className="w-5 h-5 text-white group-hover:text-gold transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span className="text-base font-medium text-white group-hover:text-gold transition-colors tracking-wide">
              Instagram
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-gold/60 transition-colors" />
          </a>
        </motion.div>

        {/* Hiring banner */}
        <motion.div
          variants={fadeUp}
          className="w-full rounded-2xl border border-gold/20 bg-gold/5 p-5 mb-10"
        >
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-display text-gold/70 tracking-[0.2em] uppercase mb-2">
              {locale === "de" ? "Jetzt bewerben" : "Now Hiring"}
            </span>
            <h3 className="text-lg sm:text-xl font-display font-bold text-gold tracking-wide mb-2">
              {locale === "de"
                ? "Wir suchen Servicekräfte!"
                : "We are hiring service staff!"}
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {locale === "de"
                ? "Du möchtest Teil unseres Teams werden? Bewirb dich jetzt bei uns!"
                : "Want to join our team? Apply now!"}
            </p>
            <a
              href="mailto:info.medusa@web.de"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/30 hover:bg-gold/20 transition-colors"
            >
              <Mail className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">
                info.medusa@web.de
              </span>
            </a>
          </div>
        </motion.div>

        {/* Owner credit */}
        <motion.div variants={fadeUp} className="text-center mb-8">
          <div className="gold-gradient-line w-24 mx-auto mb-4" />
          <p className="text-xs text-gray-600">
            {locale === "de" ? "Inhaberin" : "Owner"}: Zeynep Efetürk
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
