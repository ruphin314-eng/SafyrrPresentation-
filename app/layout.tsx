import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safyrr – Services Financiers en Afrique, specialiste des cartes virtuelles et transferts internationaux afin de démocratiser l'accès au dollar en Afrique centrale et aider les étudiants à gagner de l'argent et faciliter les paiements en ligne.",
  description:
    "Safyrr est une fintech qui démocratise les services financiers en Afrique centrale. Cartes virtuelles sécurisées, transferts internationaux et accès au dollar pour les particuliers et entreprises.",
  keywords: ["fintech", "Afrique", "carte virtuelle", "transfert d'argent", "Cameroun", "Safyrr"],
  openGraph: {
    title: "Safyrr – Services Financiers en Afrique",
    description:
      "Cartes virtuelles, transferts internationaux et accès au dollar pour toute l'Afrique centrale.",
    url: "https://safyrr.com",
    siteName: "Safyrr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
