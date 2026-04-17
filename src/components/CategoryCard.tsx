"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { MenuCategory } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";

interface CategoryCardProps {
  category: MenuCategory;
  index: number;
  onClick: () => void;
}

export default function CategoryCard({
  category,
  index,
  onClick,
}: CategoryCardProps) {
  const { locale } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} transition-all duration-500`}
      />

      {/* Greek pattern overlay */}
      <div className="absolute inset-0 greek-pattern-overlay opacity-30" />

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>

      {/* Gold border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-gold/40 transition-colors duration-300" />

      {/* Small logo watermark */}
      <div className="absolute top-3 left-3 opacity-40 group-hover:opacity-60 transition-opacity">
        <Image
          src="/images/medusa-logo.svg"
          alt=""
          width={40}
          height={40}
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Category name */}
      <div className="absolute inset-0 flex items-center justify-start px-6">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide drop-shadow-lg uppercase italic">
          {category.name[locale]}
        </h2>
      </div>

      {/* Item count badge */}
      <div className="absolute bottom-3 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-xs text-gold font-medium">
          {category.items.length}{" "}
          {category.items.length === 1 ? "Item" : "Items"}
        </span>
      </div>
    </motion.button>
  );
}
