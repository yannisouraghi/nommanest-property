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
    images: [
      {
        url: "/images/nantes-miroir.jpg",
        width: 1200,
        height: 750,
        alt: "Le miroir d'eau de Nantes — Nommanest Property",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nommanest Property",
    description:
      "Conciergerie de location courte durée et accompagnement immobilier à Nantes.",
    images: ["/images/nantes-miroir.jpg"],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nommanest Property",
  description:
    "Conciergerie de location courte durée et accompagnement immobilier à l'achat et à la vente, à Nantes et son agglomération.",
  url: "https://nommanest.com",
  telephone: "+33751263490",
  email: "nommanest@gmail.com",
  image: "https://nommanest.com/images/nantes-miroir.jpg",
  logo: "https://nommanest.com/logo-green.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nantes",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Nantes" },
    { "@type": "AdministrativeArea", name: "Loire-Atlantique" },
  ],
  knowsAbout: [
    "Conciergerie Airbnb",
    "Location courte durée",
    "Investissement locatif",
    "Vente immobilière",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${questrial.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
