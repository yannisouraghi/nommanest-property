import type { Metadata } from "next";
import { Jost, Questrial } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nommanest.com"),
  title: {
    default: "Nommanest Property — Conciergerie & accompagnement immobilier à Nantes",
    template: "%s — Nommanest Property",
  },
  description:
    "Conciergerie de location courte durée et accompagnement immobilier à Nantes et son agglomération. Deux métiers, une même promesse : prendre soin de votre bien comme d'un nid.",
  openGraph: {
    title: "Nommanest Property",
    description:
      "Conciergerie de location courte durée et accompagnement immobilier à Nantes.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${questrial.variable} ${jost.variable}`}>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
