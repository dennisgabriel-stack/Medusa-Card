import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medusa Hookah Lounge | Speisekarte",
  description:
    "Entdecke unsere exklusive Auswahl an Shisha, Cocktails, Drinks und Snacks in der Medusa Hookah Lounge.",
  openGraph: {
    title: "Medusa Hookah Lounge | Speisekarte",
    description:
      "Entdecke unsere exklusive Auswahl an Shisha, Cocktails, Drinks und Snacks.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-dark text-white font-body antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
