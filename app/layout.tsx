import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import ConsoleSignature from "@/components/ConsoleSignature";

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
  title: "LBASSUR - Votre expert en solutions d'assurance au Bénin",
  description: "LBASSUR est votre partenaire de confiance pour la recherche et la négociation des meilleures solutions d’assurance. Particuliers, professionnels et entreprises.",
  keywords: ["assurance", "courtier", "LBASSUR", "Cotonou", "Bénin", "audit assurance", "indemnisation"],
  authors: [{ name: "LBASSUR" }],
  openGraph: {
    title: "LBASSUR - Courtier en Assurance Multi-spécialiste",
    description: "Solutions d'assurance sur mesure pour particuliers et entreprises.",
    url: "https://lbassur.com",
    siteName: "LBASSUR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LBASSUR - Courtier en Assurance",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LBASSUR - Courtier en Assurance Multi-spécialiste",
    description: "Solutions d'assurance sur mesure pour particuliers et entreprises.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/lbassur-logo.jpg" },
      { url: "/lbassur-logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/lbassur-logo.jpg",
    apple: "/lbassur-logo.jpg",
  },
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
        <ConsoleSignature />
        {children}
      </body>
    </html>
  );
}
