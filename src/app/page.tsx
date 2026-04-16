"use client";

import { useState } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import CategoryModal from "@/components/CategoryModal";
import LanguageToggle from "@/components/LanguageToggle";
import BackToTop from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";
import { menuCategories } from "@/data/menu-data";
import type { MenuCategory } from "@/lib/types";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(
    null
  );
  const { t } = useLanguage();

  return (
    <>
      <LanguageToggle />

      <main className="relative min-h-screen">
        {/* Hero Section */}
        <Hero />

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

        {/* Bottom section */}
        <section className="flex flex-col items-center gap-4 pb-12 px-6">
          <div className="gold-gradient-line w-32 mb-2" />
          <Image
            src="/images/medusa-logo-small.png"
            alt="Medusa"
            width={48}
            height={48}
            className="w-10 h-10 object-contain opacity-30"
          />
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
    </>
  );
}
