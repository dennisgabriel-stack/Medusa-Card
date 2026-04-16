"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ALLERGENS } from "@/data/allergens";

interface AllergenBadgeProps {
  allergenId: string;
  showLabel?: boolean;
}

export default function AllergenBadge({
  allergenId,
  showLabel = true,
}: AllergenBadgeProps) {
  const { locale } = useLanguage();
  const allergen = ALLERGENS[allergenId];

  if (!allergen) return null;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${allergen.color}`}
    >
      {showLabel && allergen.label[locale]}
    </span>
  );
}
