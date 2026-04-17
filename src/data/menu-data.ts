import type { MenuCategory } from "@/lib/types";

export const menuCategories: MenuCategory[] = [
  // ─── 1. SHISHA ─────────────────────────────────────────
  {
    id: "shisha",
    name: { de: "Shisha", en: "Shisha" },
    gradient: "from-orange-900/80 via-red-900/60 to-amber-900/80",
    icon: "💨",
    image: "/images/shisha-bg.jpg",
    items: [
      {
        id: "sh-1",
        name: "TRADI",
        price: 15.9,
        variants: [
          "Doppelapfel",
          "Black Nana",
          "Traube Minze",
          "Zitrone Minze",
          "Orange Minze",
          "Falim",
          "Falim Red",
          "Persischer Apfel",
        ],
      },
      {
        id: "sh-2",
        name: "Wookah",
        price: 16.9,
        variants: [
          "Love 66",
          "Ladykiller",
          "Pistazie",
          "Rasporn",
          "Cold Peach",
          "Black Nana",
          "Persischer Apfel",
          "Dragon Berry",
        ],
      },
      {
        id: "sh-3",
        name: "True Passion",
        price: 16.9,
        variants: [
          "Lemon Chill",
          "Wildberry Chill",
          "Watermelon Chill",
          "Moloko",
        ],
      },
      {
        id: "sh-4",
        name: "Tabacco Al Massiva",
        price: 16.9,
        variants: [
          "Blaulicht",
          "Bruderherz",
          "Löwenherz",
          "Sommer in Beirut",
        ],
      },
      {
        id: "sh-5",
        name: "187 Straßenbande",
        price: 16.9,
        variants: ["Juicy Puzzy", "Sweet Kaktus", "Hamburg", "New Flash"],
      },
      {
        id: "sh-6",
        name: "Holster & O's Tobacco",
        price: 16.9,
        variants: ["African Queen", "Quwi Punch", "Ice Kaktuz", "Ice Bomb"],
      },
      {
        id: "sh-7",
        name: "Aqua Mentha",
        price: 16.9,
        variants: [
          "Black Box",
          "Blueberry",
          "Watermelon",
          "Cherry",
          "Pineapple",
        ],
      },
      {
        id: "se-1",
        name: "Kopfwechsel Tradi",
        price: 8.9,
        sectionHeader: { de: "Extras", en: "Extras" },
        sectionSubtitle: { de: "Optional dazu buchbar", en: "Optional add-on" },
      },
      { id: "se-2", name: "Kopfwechsel Premium", price: 8.9 },
      { id: "se-3", name: "Phunnels", price: 2.0 },
      { id: "se-4", name: "Ice Bazooka", price: 2.0 },
    ],
  },

  // ─── 2. HOTDRINKS ──────────────────────────────────────
  {
    id: "hotdrinks",
    name: { de: "Hotdrinks", en: "Hot Drinks" },
    gradient: "from-amber-950/80 via-yellow-900/50 to-orange-950/80",
    icon: "☕",
    image: "/images/hotdrinks-bg.jpg",
    items: [
      {
        id: "hg-1",
        name: "Espresso",
        price: 3.2,
        additives: ["koffein"],
      },
      {
        id: "hg-2",
        name: "Doppelter Espresso",
        price: 4.5,
        additives: ["koffein"],
      },
      {
        id: "hg-3",
        name: "Kaffee",
        price: 3.9,
        additives: ["koffein"],
      },
      {
        id: "hg-4",
        name: "Cappuccino",
        price: 4.5,
        additives: ["koffein"],
        allergens: ["milch"],
      },
      {
        id: "hg-5",
        name: "Latte Macchiato",
        price: 4.9,
        additives: ["koffein"],
        allergens: ["milch"],
      },
      {
        id: "hg-6",
        name: "Heiße Schokolade",
        description: { de: "optional mit Sahne", en: "optionally with cream" },
        price: 3.9,
        allergens: ["milch"],
      },
      {
        id: "hg-7",
        name: "Tee",
        description: {
          de: "große Auswahl an Sorten",
          en: "large selection of varieties",
        },
        price: 3.6,
      },
    ],
  },

  // ─── 3. SOFTDRINKS ────────────────────────────────────
  {
    id: "softdrinks",
    name: { de: "Softdrinks", en: "Soft Drinks" },
    gradient: "from-blue-950/80 via-cyan-900/50 to-blue-900/80",
    icon: "🥤",
    image: "/images/softdrinks-bg.jpg",
    items: [
      {
        id: "sd-0",
        name: "Wasser",
        description: { de: "Stilles Wasser / Sprudel", en: "Still Water / Sparkling" },
        price: 2.8,
      },
      {
        id: "sd-1",
        name: "Cola",
        description: { de: "Normal oder Zero", en: "Regular or Zero" },
        price: 3.6,
        additives: ["koffein", "farbstoffe", "phosphat"],
      },
      { id: "sd-2", name: "Sprite", price: 3.6 },
      {
        id: "sd-3",
        name: "Mezzo Mix",
        price: 3.6,
        additives: ["koffein"],
      },
      {
        id: "sd-4",
        name: "Fanta",
        price: 3.6,
        additives: ["farbstoffe"],
      },
      {
        id: "sd-5",
        name: "Schweppes",
        description: {
          de: "Tonic, Ginger Ale, Wild Berry",
          en: "Tonic, Ginger Ale, Wild Berry",
        },
        price: 3.5,
        additives: ["chinin", "saeure"],
      },
      {
        id: "mo-1",
        name: "Moloko Blueberry Acai",
        price: 4.4,
        allergens: ["milch"],
      },
      {
        id: "mo-2",
        name: "Moloko Mint",
        price: 4.4,
        allergens: ["milch"],
      },
      {
        id: "mo-3",
        name: "Moloko Mango",
        price: 4.4,
        allergens: ["milch"],
      },
      {
        id: "mo-4",
        name: "Moloko Sugarfree",
        price: 4.4,
        allergens: ["milch"],
        additives: ["suessungsmittel"],
      },
    ],
  },

  // ─── 4. ENERGY DRINKS ─────────────────────────────────
  {
    id: "energy-drinks",
    name: { de: "Energy Drinks", en: "Energy Drinks" },
    gradient: "from-lime-950/80 via-green-900/50 to-emerald-950/80",
    icon: "⚡",
    image: "/images/energy-bg.jpg",
    items: [
      {
        id: "en-1",
        name: "Red Bull",
        price: 4.4,
        note: {
          de: "Special Editions und Farbauswahl rotiert gelegentlich. Einfach das Personal fragen!",
          en: "Special editions and color selection rotates occasionally. Just ask the staff!",
        },
        variants: [
          "Classic",
          "White Edition",
          "Purple Edition",
          "Green Edition",
          "Red Edition",
          "Yellow Edition",
          "Sugarfree",
        ],
      },
    ],
  },

  // ─── 5. ICE TEA ────────────────────────────────────────
  {
    id: "ice-tea",
    name: { de: "Ice Tea", en: "Ice Tea" },
    gradient: "from-emerald-950/80 via-teal-900/50 to-green-950/80",
    icon: "🧊",
    image: "/images/icetea-bg.jpg",
    items: [
      { id: "eb-1", name: "Pfirsich", price: 4.5 },
      { id: "eb-2", name: "Zitrone", price: 4.5 },
      { id: "eb-3", name: "Blaubeere", price: 4.5 },
      { id: "eb-4", name: "Granatapfel", price: 4.5 },
      { id: "eb-5", name: "Wassermelone", price: 4.5 },
      { id: "eb-6", name: "Mango", price: 4.5 },
      { id: "eb-7", name: "Cherry", price: 4.5 },
      {
        id: "eb-8",
        name: "Lime",
        price: 4.5,
        sectionHeader: { de: "Lemonade", en: "Lemonade" },
      },
      { id: "eb-9", name: "Pink Grapefruit", price: 4.5 },
      { id: "eb-10", name: "Exotic", price: 4.5 },
      { id: "eb-11", name: "Mandarin", price: 4.5 },
    ],
  },

  // ─── 6. COCKTAILS ─────────────────────────────────────
  {
    id: "cocktails",
    name: { de: "Cocktails", en: "Cocktails" },
    gradient: "from-pink-950/80 via-rose-900/50 to-fuchsia-950/80",
    icon: "🍸",
    image: "/images/cocktails-bg.jpg",
    items: [
      // Ohne Alkohol
      {
        id: "ca-1",
        name: "Ipanema",
        description: {
          de: "Limetten, Rohrzucker, Ginger Ale, Lime Juice",
          en: "Limes, Cane Sugar, Ginger Ale, Lime Juice",
        },
        price: 7.4,
        badge: { de: "Alkoholfrei", en: "Non-Alcoholic" },
      },
      {
        id: "ca-2",
        name: "Coconut Kiss",
        description: {
          de: "Ananassaft, Orangensaft, Kokossirup, Sahne, Kirschsaft",
          en: "Pineapple Juice, Orange Juice, Coconut Syrup, Cream, Cherry Juice",
        },
        price: 7.4,
        badge: { de: "Alkoholfrei", en: "Non-Alcoholic" },
      },
      {
        id: "ca-3",
        name: "Tropical",
        description: {
          de: "Ananassaft, Orangensaft, Maracujanektar, Lime Juice, Grenadine",
          en: "Pineapple Juice, Orange Juice, Passion Fruit Nectar, Lime Juice, Grenadine",
        },
        price: 7.4,
        badge: { de: "Alkoholfrei", en: "Non-Alcoholic" },
      },
      {
        id: "ca-4",
        name: "Carribean",
        description: {
          de: "Ananassaft, Sahne, Kokossirup, Mangosirup",
          en: "Pineapple Juice, Cream, Coconut Syrup, Mango Syrup",
        },
        price: 7.4,
        badge: { de: "Alkoholfrei", en: "Non-Alcoholic" },
      },
      {
        id: "ca-5",
        name: "Lollipop",
        description: {
          de: "Ananassaft, Sahne, Kokossirup, Erdbeersirup",
          en: "Pineapple Juice, Cream, Coconut Syrup, Strawberry Syrup",
        },
        price: 7.4,
        badge: { de: "Alkoholfrei", en: "Non-Alcoholic" },
      },
      {
        id: "ca-6",
        name: "Huricane",
        description: {
          de: "Ananassaft, Sahne, Kokossirup, Blue Curacao",
          en: "Pineapple Juice, Cream, Coconut Syrup, Blue Curacao",
        },
        price: 7.4,
        badge: { de: "Alkoholfrei", en: "Non-Alcoholic" },
      },
      {
        id: "ca-7",
        name: "Virgin Colada",
        description: {
          de: "Ananassaft, Sahne, Kokossirup",
          en: "Pineapple Juice, Cream, Coconut Syrup",
        },
        price: 7.4,
        badge: { de: "Alkoholfrei", en: "Non-Alcoholic" },
      },
      {
        id: "ca-8",
        name: "Cherry Bull",
        description: {
          de: "Red Bull, Rohrzucker, Kirschsaft, Limetten",
          en: "Red Bull, Cane Sugar, Cherry Juice, Limes",
        },
        price: 7.4,
        badge: { de: "Alkoholfrei", en: "Non-Alcoholic" },
      },
      // Mit Alkohol
      {
        id: "cm-1",
        name: "Pina Colada",
        description: {
          de: "Weißer Rum, Ananassaft, Kokossirup, Sahne",
          en: "White Rum, Pineapple Juice, Coconut Syrup, Cream",
        },
        price: 8.4,
        allergens: ["milch"],
      },
      {
        id: "cm-2",
        name: "Sex on The Beach",
        description: {
          de: "Vodka, Pfirsichlikör, Grenadine, Lime Juice, Ananassaft, Orangensaft",
          en: "Vodka, Peach Liqueur, Grenadine, Lime Juice, Pineapple Juice, Orange Juice",
        },
        price: 8.4,
        additives: ["farbstoffe"],
      },
      {
        id: "cm-3",
        name: "Cuba Libre",
        description: {
          de: "Weißer Rum, Frische Limette, Cola",
          en: "White Rum, Fresh Lime, Cola",
        },
        price: 8.4,
        additives: ["koffein", "phosphat"],
      },
      {
        id: "cm-4",
        name: "Tequila Sunrise",
        description: {
          de: "Tequila, Orangensaft, Grenadine",
          en: "Tequila, Orange Juice, Grenadine",
        },
        price: 8.4,
        additives: ["farbstoffe"],
      },
      {
        id: "cm-5",
        name: "Bellini",
        description: {
          de: "Prosecco, Pfirsichlikör, Pfirsichsirup",
          en: "Prosecco, Peach Liqueur, Peach Syrup",
        },
        price: 8.4,
        additives: ["sulfite"],
      },
      {
        id: "cm-6",
        name: "Caipirinha",
        description: {
          de: "Frische Limetten, Cachaca, Rohrzucker, Lime Juice",
          en: "Fresh Limes, Cachaca, Cane Sugar, Lime Juice",
        },
        price: 8.4,
      },
      {
        id: "cm-7",
        name: "Mojito",
        description: {
          de: "Weißer Rum, Rohrzucker, Frische Limetten, Minze, Soda",
          en: "White Rum, Cane Sugar, Fresh Limes, Mint, Soda",
        },
        price: 8.4,
      },
      {
        id: "cm-8",
        name: "Long Island Iced Tea",
        description: {
          de: "Vodka, Gin, Tequila, Weißer Rum, Zitronensaft, Zuckersirup, Cola",
          en: "Vodka, Gin, Tequila, White Rum, Lemon Juice, Sugar Syrup, Cola",
        },
        price: 9.4,
        additives: ["koffein", "phosphat"],
      },
      {
        id: "cm-9",
        name: "Lynchburg Lemonade",
        description: {
          de: "Jack Daniel's, Triple Sec, Limettensaft, Zitronensaft, Sprite",
          en: "Jack Daniel's, Triple Sec, Lime Juice, Lemon Juice, Sprite",
        },
        price: 8.9,
      },
      {
        id: "cm-10",
        name: "Jack Honey & Lemonade",
        description: {
          de: "Jack Daniel's Honey, Zitronenlimonade",
          en: "Jack Daniel's Honey, Lemonade",
        },
        price: 8.9,
      },
    ],
  },

  // ─── 7. LONGDRINKS ─────────────────────────────────────
  {
    id: "longdrinks",
    name: { de: "Longdrinks", en: "Long Drinks" },
    gradient: "from-amber-950/80 via-orange-900/50 to-yellow-950/80",
    icon: "🥃",
    image: "/images/longdrinks-bg.jpg",
    items: [
      {
        id: "ld-1",
        name: "Jacky Cola",
        price: 6.8,
        additives: ["koffein", "phosphat"],
      },
      {
        id: "ld-2",
        name: "Barcadi Cola",
        price: 6.8,
        additives: ["koffein", "phosphat"],
      },
      {
        id: "ld-3",
        name: "Havana Cola",
        price: 6.8,
        additives: ["koffein", "phosphat"],
      },
      { id: "ld-4", name: "Vodka Mix", price: 6.8 },
      { id: "ld-5", name: "Malibu Mix", price: 8.9 },
      {
        id: "ld-6",
        name: "Batida de Coco",
        price: 8.9,
        allergens: ["milch"],
      },
      { id: "ld-7", name: "Jägermeister Mix", price: 6.8 },
      {
        id: "ld-8",
        name: "Gin Tonic/Wildberry",
        price: 6.8,
        additives: ["chinin"],
      },
      { id: "ld-9", name: "Aperol Spritz", price: 7.4 },
      { id: "ld-10", name: "Lillet Wild Berry", price: 7.4 },
    ],
  },

  // ─── 8. BIER & WEIN ───────────────────────────────────
  {
    id: "bier-wein",
    name: { de: "Bier & Wein", en: "Beer & Wine" },
    gradient: "from-yellow-950/80 via-amber-900/50 to-orange-950/80",
    icon: "🍺",
    image: "/images/beer-wine-bg.jpg",
    items: [
      {
        id: "bw-1",
        name: "Veltins",
        description: { de: "Flaschen Bier 0.5l", en: "Bottled Beer 0.5l" },
        price: 4.2,
        allergens: ["gluten"],
      },
      {
        id: "bw-2",
        name: "Weizen",
        description: { de: "Flaschen Bier 0.5l", en: "Bottled Beer 0.5l" },
        price: 5.4,
        allergens: ["gluten"],
      },
      {
        id: "bw-3",
        name: "Heineken",
        description: { de: "Flaschen Bier 0.33l", en: "Bottled Beer 0.33l" },
        price: 4.5,
        allergens: ["gluten"],
      },
      {
        id: "bw-4",
        name: "Corona",
        description: { de: "Flaschen Bier 0.33l", en: "Bottled Beer 0.33l" },
        price: 4.9,
        allergens: ["gluten"],
      },
      {
        id: "bw-5",
        name: "Desperados",
        description: { de: "Flaschen Bier 0.33l", en: "Bottled Beer 0.33l" },
        price: 4.9,
        additives: ["koffein"],
        allergens: ["gluten"],
      },
      {
        id: "bw-6",
        name: "Rieslingschorle",
        price: 5.5,
        additives: ["sulfite"],
      },
      {
        id: "bw-7",
        name: "Weißherbstschorle",
        price: 5.5,
        additives: ["sulfite"],
      },
      {
        id: "bw-8",
        name: "Gläschen Sekt",
        price: 3.9,
        additives: ["sulfite"],
      },
    ],
  },

  // ─── 9. SHOTS ──────────────────────────────────────────
  {
    id: "shots",
    name: { de: "Shots", en: "Shots" },
    gradient: "from-red-950/80 via-orange-900/50 to-red-900/80",
    icon: "🔥",
    image: "/images/shots-bg.jpg",
    items: [
      { id: "st-1", name: "Vodka", price: 2.8 },
      { id: "st-2", name: "Tequilla", price: 2.8 },
      { id: "st-3", name: "Jäger", price: 2.8 },
      { id: "st-4", name: "Asbach", price: 2.8 },
      { id: "st-5", name: "Ouzo", price: 2.8 },
      { id: "st-6", name: "Sambuca", price: 2.8 },
      {
        id: "st-7",
        name: "Ficken",
        price: 2.8,
        additives: ["farbstoffe"],
      },
      { id: "st-8", name: "Berliner Luft", price: 2.8 },
      {
        id: "st-9",
        name: "Gletscher",
        price: 2.8,
        additives: ["farbstoffe"],
      },
      {
        id: "st-10",
        name: "Erdbeerlimes",
        price: 2.8,
        additives: ["farbstoffe"],
      },
      {
        id: "st-11",
        name: "Baileys",
        price: 2.8,
        allergens: ["milch"],
      },
    ],
  },

  // ─── 10. FLASCHEN ──────────────────────────────────────
  {
    id: "flaschen",
    name: { de: "Flaschen", en: "Bottles" },
    gradient: "from-slate-800/80 via-zinc-700/50 to-gray-800/80",
    icon: "🍾",
    image: "/images/bottles-bg.jpg",
    items: [
      { id: "fl-1", name: "Jacky 0.7", price: 89.0 },
      { id: "fl-2", name: "Three Sixty", price: 79.0 },
      { id: "fl-3", name: "Absolut", price: 89.0 },
      { id: "fl-4", name: "Bombay", price: 89.0 },
      { id: "fl-5", name: "Hendrik Gin", price: 99.0 },
      { id: "fl-6", name: "Grey Goose", price: 120.0 },
      { id: "fl-7", name: "Belvedere Vodka", price: 120.0 },
      { id: "fl-8", name: "Jägermeister", price: 79.0 },
      {
        id: "fl-9",
        name: "Moet Classic",
        price: 100.0,
        sectionHeader: { de: "Champagner & Prosecco", en: "Champagne & Prosecco" },
      },
      { id: "fl-10", name: "Moet Rosé", price: 120.0 },
      { id: "fl-11", name: "Moet Ice", price: 160.0 },
      { id: "fl-12", name: "Moet Ice Rosé", price: 180.0 },
      { id: "fl-13", name: "Mionetto", price: 29.9 },
      {
        id: "fl-14",
        name: "Schwedhelm",
        price: 21.9,
        sectionHeader: { de: "Wein", en: "Wine" },
      },
    ],
  },

  // ─── 11. SNACKS ────────────────────────────────────────
  {
    id: "snacks",
    name: { de: "Snacks", en: "Snacks" },
    gradient: "from-green-950/80 via-lime-900/50 to-emerald-950/80",
    icon: "🍿",
    items: [
      {
        id: "sn-2",
        name: "Baguettes",
        description: {
          de: "Pute / Käse / Suscuk",
          en: "Turkey / Cheese / Suscuk",
        },
        price: 7.8,
        allergens: ["milch", "gluten"],
      },
    ],
  },
];
