import type { Locale } from "@/lib/types";

export interface AllergenInfo {
  id: string;
  label: Record<Locale, string>;
  color: string;
}

export const ALLERGENS: Record<string, AllergenInfo> = {
  koffein: {
    id: "koffein",
    label: { de: "Koffein", en: "Caffeine" },
    color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  milch: {
    id: "milch",
    label: { de: "Milch/Laktose", en: "Milk/Lactose" },
    color: "bg-blue-400/20 text-blue-300 border-blue-400/30",
  },
  farbstoffe: {
    id: "farbstoffe",
    label: { de: "Farbstoffe", en: "Colorants" },
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
  phosphat: {
    id: "phosphat",
    label: { de: "Phosphat", en: "Phosphate" },
    color: "bg-red-500/20 text-red-400 border-red-500/30",
  },
  chinin: {
    id: "chinin",
    label: { de: "Chinin", en: "Quinine" },
    color: "bg-teal-500/20 text-teal-400 border-teal-500/30",
  },
  saeure: {
    id: "saeure",
    label: { de: "Säuerungsmittel", en: "Acidifiers" },
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
  taurin: {
    id: "taurin",
    label: { de: "Taurin", en: "Taurine" },
    color: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  suessungsmittel: {
    id: "suessungsmittel",
    label: { de: "Süßungsmittel", en: "Sweeteners" },
    color: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  },
  gluten: {
    id: "gluten",
    label: { de: "Gluten", en: "Gluten" },
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  sulfite: {
    id: "sulfite",
    label: { de: "Sulfite", en: "Sulfites" },
    color: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  },
  geschmack: {
    id: "geschmack",
    label: { de: "Geschmacksverstärker", en: "Flavor Enhancers" },
    color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  },
};
