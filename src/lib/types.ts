export type Locale = "de" | "en";

export interface MenuItem {
  id: string;
  name: string;
  description?: Partial<Record<Locale, string>>;
  price: number;
  variants?: string[];
  allergens?: string[];
  additives?: string[];
  sectionHeader?: Record<Locale, string>;
  sectionSubtitle?: Record<Locale, string>;
}

export interface MenuCategory {
  id: string;
  name: Record<Locale, string>;
  gradient: string;
  icon: string;
  image?: string;
  items: MenuItem[];
}
