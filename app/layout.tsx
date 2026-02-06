import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LB ASSUR - Courtier en Assurance Multi-spécialiste",
  description: "LB ASSUR est un courtier multi spécialiste qui intervient dans la recherche et la négociation des meilleures solutions d’assurance pour les particuliers, professionnels et entreprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased bg-black text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
