"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Navigation, Mail, Clock, Phone, Wifi } from "lucide-react";
import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import CategoryModal from "@/components/CategoryModal";
import LanguageToggle from "@/components/LanguageToggle";
import BackToTop from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";
import { menuCategories } from "@/data/menu-data";
import type { MenuCategory } from "@/lib/types";

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategory | null>(null);
  const { locale, t } = useLanguage();

  const handleSplashFinished = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onFinished={handleSplashFinished} />}

      <LanguageToggle />

      <main className="relative min-h-screen">
        {/* ════════════════ HERO ════════════════ */}
        <Hero />

        {/* ════════════════ MENU CATEGORIES ════════════════ */}
        <section className="px-4 sm:px-6 pb-16 max-w-2xl mx-auto">
          <div className="flex flex-col gap-5">
            {menuCategories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
        </section>

        {/* ════════════════ DIVIDER ════════════════ */}
        <div className="flex items-center justify-center gap-4 px-8 pb-12 max-w-md mx-auto">
          <div className="flex-1 gold-gradient-line" />
          <Image
            src="/images/medusa-logo-small.png"
            alt=""
            width={32}
            height={32}
            className="w-6 h-6 object-contain opacity-30"
          />
          <div className="flex-1 gold-gradient-line" />
        </div>

        {/* ════════════════ OPENING HOURS ════════════════ */}
        <section className="px-4 sm:px-6 pb-8 max-w-2xl mx-auto">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-2xl border border-white/10 bg-dark-elevated/50 p-6"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <Clock className="w-5 h-5 text-gold" />
              <h3 className="text-base font-display font-bold text-gold tracking-wider uppercase">
                {locale === "de" ? "Öffnungszeiten" : "Opening Hours"}
              </h3>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">
                  {locale === "de" ? "Mo – Do" : "Mon – Thu"}
                </span>
                <span className="text-sm font-semibold text-white">
                  16:00 – 01:00
                </span>
              </div>
              <div className="gold-gradient-line opacity-15" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">
                  {locale === "de" ? "Fr – Sa" : "Fri – Sat"}
                </span>
                <span className="text-sm font-semibold text-white">
                  16:00 – 02:00
                </span>
              </div>
              <div className="gold-gradient-line opacity-15" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">
                  {locale === "de" ? "Sonntag" : "Sunday"}
                </span>
                <span className="text-sm font-semibold text-white">
                  16:00 – 01:00
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ════════════════ WHATSAPP RESERVATION + WLAN ════════════════ */}
        <section className="px-4 sm:px-6 pb-8 max-w-2xl mx-auto">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex gap-3"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/4917620204084"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 flex items-center justify-center gap-2.5 h-14 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] transition-colors"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-sm font-bold text-white tracking-wide">
                {locale === "de" ? "Reservieren" : "Reserve"}
              </span>
            </a>

            {/* WLAN - WiFi URI scheme auto-connects on mobile */}
            <a
              href="WIFI:T:WPA;S:Medusa;P:Medusa2026;;"
              className="group flex-1 flex items-center justify-center gap-2.5 h-14 rounded-2xl border border-white/10 hover:border-gold/30 bg-dark-elevated/50 transition-colors"
            >
              <Wifi className="w-5 h-5 text-gold" />
              <span className="text-sm font-bold text-white group-hover:text-gold tracking-wide transition-colors">
                WLAN
              </span>
            </a>
          </motion.div>
        </section>

        {/* ════════════════ INSTAGRAM + GOOGLE REVIEW ════════════════ */}
        <section className="px-4 sm:px-6 pb-8 max-w-2xl mx-auto">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex gap-3"
          >
            {/* Instagram */}
            <a
              href="https://www.instagram.com/medusa_woerth?igsh=aDdnanBrN242Nzhl"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 flex items-center justify-center gap-2.5 h-14 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span className="text-sm font-bold text-white tracking-wide uppercase">
                Instagram
              </span>
            </a>

            {/* Google Review */}
            <a
              href="https://www.google.com/maps/place/Marktstra%C3%9Fe+8,+76744+W%C3%B6rth+am+Rhein"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 flex items-center justify-center gap-2.5 h-14 rounded-2xl bg-green-600 hover:bg-green-500 transition-colors"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm font-bold text-white tracking-wide uppercase">
                {locale === "de" ? "Bewerten" : "Review"}
              </span>
            </a>
          </motion.div>
        </section>

        {/* ════════════════ GOOGLE MAPS / NAVIGATION ════════════════ */}
        <section className="px-4 sm:px-6 pb-8 max-w-2xl mx-auto">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Marktstra%C3%9Fe+8,+76744+W%C3%B6rth+am+Rhein"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/10 hover:border-gold/30 bg-dark-elevated/50 overflow-hidden transition-colors"
            >
              <div className="relative h-36 bg-gradient-to-br from-dark-elevated via-dark-card to-dark-elevated flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 greek-pattern-overlay opacity-10" />
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-2 group-hover:bg-gold/20 transition-colors">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-sm font-display text-gold/80 tracking-wider uppercase">
                    {locale === "de" ? "Finde uns" : "Find Us"}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      Medusa Hookah Lounge
                    </h3>
                    <p className="text-sm text-gray-400">
                      Marktstraße 8
                    </p>
                    <p className="text-sm text-gray-400">
                      76744 Wörth am Rhein
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gold text-black font-bold text-xs tracking-wider uppercase group-hover:bg-gold-light transition-colors shrink-0">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Route</span>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </section>

        {/* ════════════════ CONTACT / PHONE ════════════════ */}
        <section className="px-4 sm:px-6 pb-8 max-w-2xl mx-auto">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <a
              href="tel:+4917620204084"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 hover:border-gold/30 bg-dark-elevated/50 p-5 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                  {locale === "de" ? "Reservierung vereinbaren" : "Make a Reservation"}
                </p>
                <p className="text-base font-semibold text-white">
                  +49 176 20204084
                </p>
              </div>
            </a>
          </motion.div>
        </section>

        {/* ════════════════ HIRING BANNER ════════════════ */}
        <section className="px-4 sm:px-6 pb-10 max-w-2xl mx-auto">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-2xl border border-gold/20 bg-gold/[0.03] p-6"
          >
            <div className="flex flex-col items-center text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-[10px] font-bold text-gold tracking-[0.2em] uppercase mb-3">
                {locale === "de" ? "Jetzt bewerben" : "Now Hiring"}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gold tracking-wide mb-2">
                {locale === "de"
                  ? "Wir suchen Servicekräfte!"
                  : "We are hiring service staff!"}
              </h3>
              <p className="text-sm text-gray-400 mb-5 leading-relaxed max-w-xs">
                {locale === "de"
                  ? "Du möchtest Teil unseres Teams werden? Bewirb dich jetzt bei uns!"
                  : "Want to join our team? Apply now!"}
              </p>
              <a
                href="mailto:info.medusa@web.de"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gold/10 border border-gold/30 hover:bg-gold/20 transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-gold">
                  info.medusa@web.de
                </span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* ════════════════ FOOTER ════════════════ */}
        <section className="px-4 sm:px-6 pb-16 max-w-2xl mx-auto">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="gold-gradient-line w-24 mb-6" />
            <Image
              src="/images/medusa-logo-small.png"
              alt="Medusa"
              width={48}
              height={48}
              className="w-10 h-10 object-contain opacity-25 mb-4"
            />
            <p className="text-xs text-gray-500 mb-1">
              Medusa Hookah Lounge
            </p>
            <p className="text-xs text-gray-600 mb-1">
              Marktstraße 8 · 76744 Wörth am Rhein
            </p>
            <p className="text-xs text-gray-600 mb-3">
              {locale === "de" ? "Inhaberin" : "Owner"}: Zeynep Efetürk
            </p>
            <p className="text-[10px] text-gray-700">
              {t("allPrices")}
            </p>
          </motion.div>
        </section>
      </main>

      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />

      <BackToTop />
    </>
  );
}
