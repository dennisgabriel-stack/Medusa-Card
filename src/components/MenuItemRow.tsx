"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { MenuItem } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";

interface MenuItemRowProps {
  item: MenuItem;
  index: number;
  isLast: boolean;
}

function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",") + "\u20AC";
}

export default function MenuItemRow({ item, index, isLast }: MenuItemRowProps) {
  const { locale } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      {/* Section Header (e.g. "Extras") */}
      {item.sectionHeader && (
        <div className="pt-4 pb-5">
          {/* Top border */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <Plus className="w-3.5 h-3.5 text-gold/50" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          </div>
          {/* Header text */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-display font-bold text-gold/70 uppercase tracking-[0.2em]">
              {item.sectionHeader[locale]}
            </span>
            {item.sectionSubtitle && (
              <span className="text-[10px] text-gray-500 tracking-wider uppercase">
                {item.sectionSubtitle[locale]}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="py-4">
        {/* Name and Price row */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base sm:text-lg font-semibold text-white flex-1">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-gold whitespace-nowrap font-display">
            {formatPrice(item.price)}
          </span>
        </div>

        {/* Description */}
        {item.description && item.description[locale] && (
          <p className="mt-1 text-sm text-gray-400">
            {item.description[locale]}
          </p>
        )}

        {/* Variants */}
        {item.variants && item.variants.length > 0 && (
          <div className="mt-2 space-y-0.5">
            {item.variants.map((variant, i) => (
              <p key={i} className="text-sm text-gray-500">
                // {variant}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Separator */}
      {!isLast && <div className="gold-gradient-line opacity-30" />}
    </motion.div>
  );
}
