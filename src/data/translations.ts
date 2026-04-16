import type { Locale } from "@/lib/types";

type Translations = Record<Locale, Record<string, string>>;

export const translations: Translations = {
  de: {
    welcome: "HERZLICH WILLKOMMEN",
    menu: "MENU",
    price: "PREIS",
    close: "Schliessen",
    flavors: "Geschmacksrichtungen",
    allergens: "Allergene",
    additives: "Zusatzstoffe",
    allPrices: "Alle Preise in Euro inkl. MwSt.",
    backToTop: "Nach oben",
    scrollDown: "Nach unten scrollen",
  },
  en: {
    welcome: "WELCOME",
    menu: "MENU",
    price: "PRICE",
    close: "Close",
    flavors: "Flavors",
    allergens: "Allergens",
    additives: "Additives",
    allPrices: "All prices in EUR incl. VAT.",
    backToTop: "Back to top",
    scrollDown: "Scroll down",
  },
};
