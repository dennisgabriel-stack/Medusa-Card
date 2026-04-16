"use client";

import { motion } from "framer-motion";
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
