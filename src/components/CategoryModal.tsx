"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { MenuCategory } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import MenuItemRow from "./MenuItemRow";

interface CategoryModalProps {
  category: MenuCategory | null;
  onClose: () => void;
}

export default function CategoryModal({
  category,
  onClose,
}: CategoryModalProps) {
  const { locale, t } = useLanguage();
  const isOpen = category !== null;

  useBodyScrollLock(isOpen);

  return (
    <AnimatePresence>
      {isOpen && category && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 top-0 sm:top-8 z-50 bg-dark-card rounded-t-3xl sm:rounded-t-3xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex-shrink-0 px-6 pt-6 pb-4">
              {/* Drag handle */}
              <div className="flex justify-center mb-4 sm:hidden">
                <div className="w-10 h-1 bg-gray-600 rounded-full" />
              </div>

              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-gold uppercase tracking-wide">
                  {category.name[locale]}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label={t("close")}
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              {/* Gold line under header */}
              <div className="gold-gradient-line-thick mt-4" />
            </div>

            {/* Sub-header */}
            <div className="flex-shrink-0 px-6 pb-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-display text-gold/70 uppercase tracking-wider">
                  {category.name[locale]}
                </span>
                <span className="text-sm font-display text-gold/70 uppercase tracking-wider">
                  {t("price")}
                </span>
              </div>
            </div>

            {/* Items list */}
            <div className="flex-1 overflow-y-auto px-6 pb-8 modal-scrollbar">
              {category.items.map((item, index) => (
                <MenuItemRow
                  key={item.id}
                  item={item}
                  index={index}
                  isLast={index === category.items.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
