"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SplashScreen from "@/components/SplashScreen";
import LandingPage from "@/components/LandingPage";
import CategoryCard from "@/components/CategoryCard";
import CategoryModal from "@/components/CategoryModal";
import LanguageToggle from "@/components/LanguageToggle";
import BackToTop from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";
import { menuCategories } from "@/data/menu-data";
import type { MenuCategory } from "@/lib/types";

type View = "splash" | "landing" | "menu";

export default function Home() {
  const [view, setView] = useState<View>("splash");
  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategory | null>(null);
  const { locale, t } = useLanguage();

  const handleSplashFinished = useCallback(() => {
    setView("landing");
  }, []);

  return (
    <>
      <LanguageToggle />

      {/* Splash Screen */}
      {view === "splash" && (
        <SplashScreen onFinished={handleSplashFinished} />
      )}

      {/* Landing Page */}
      <AnimatePresence mode="wait">
        {view === "landing" && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LandingPage onOpenMenu={() => setView("menu")} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu View */}
      <AnimatePresence mode="wait">
        {view === "menu" && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <main className="relative min-h-screen">
              {/* Back button */}
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                onClick={() => setView("landing")}
                className="fixed top-4 left-4 z-40 flex items-center gap-1.5 px-3 py-2 rounded-full bg-dark-elevated/80 backdrop-blur-md border border-white/10 hover:border-gold/30 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-gold" />
                <span className="text-xs font-medium text-gray-400">
                  {locale === "de" ? "Zurück" : "Back"}
                </span>
              </motion.button>

              {/* Menu Header */}
              <section className="flex flex-col items-center pt-16 pb-8 px-6">
                <Image
                  src="/images/medusa-logo-small.png"
                  alt="Medusa"
                  width={64}
                  height={64}
                  className="w-12 h-12 object-contain opacity-60 mb-4"
                />
                <h1 className="text-3xl sm:text-4xl font-display text-gold tracking-wider mb-2">
                  - {t("menu")} -
                </h1>
                <div className="gold-gradient-line w-40" />
              </section>

              {/* Category Cards Grid */}
              <section className="px-4 sm:px-6 pb-12 max-w-2xl mx-auto">
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

              {/* Bottom */}
              <section className="flex flex-col items-center gap-3 pb-12 px-6">
                <div className="gold-gradient-line w-32 mb-1" />
                <p className="text-xs text-gray-600 text-center">
                  {t("allPrices")}
                </p>
              </section>
            </main>

            {/* Category Detail Modal */}
            <CategoryModal
              category={selectedCategory}
              onClose={() => setSelectedCategory(null)}
            />

            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
