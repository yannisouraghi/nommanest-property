import type { Metadata, Viewport } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import { COMMUNES_COTE_DE_JADE, COMMUNES_METROPOLE, COMMUNES_RETZ_TERRES } from "@/lib/zones";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Conciergerie Airbnb à Nantes & Pays de Retz — Nommanest Property",
    template: "%s — Nommanest Property",
  },
  description:
    "Conciergerie Airbnb de location courte durée (0 € de frais fixe, revenus versés directement) et accompagnement immobilier à l'achat et à la vente, à Nantes, en Pays de Retz (Pornic, Saint-Brevin…) et alentours.",
  applicationName: SITE_NAME,
  keywords: [
    "conciergerie Airbnb Nantes",
    "conciergerie location courte durée Nantes",
    "conciergerie Pays de Retz",
    "conciergerie Côte de Jade",
    "conciergerie Airbnb Pornic",
    "conciergerie Saint-Brevin-les-Pins",
    "chasseur immobilier Nantes",
    "investissement locatif Nantes",
    "vente immobilière Nantes",
    "meublé de tourisme Nantes",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "real estate",
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Conciergerie Airbnb à Nantes & Pays de Retz — Nommanest Property",
    description:
      "Conciergerie de location courte durée sans frais fixe et accompagnement immobilier à l'achat comme à la vente, à Nantes et en Pays de Retz.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 750,
        alt: "Le miroir d'eau de Nantes — Nommanest Property",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nommanest Property — Conciergerie & immobilier à Nantes et en Pays de Retz",
    description:
      "Conciergerie de location courte durée sans frais fixe et accompagnement immobilier à Nantes et en Pays de Retz.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#00332a",
  width: "device-width",
  initialScale: 1,
};

const AREA_SERVED = [
  { "@type": "City", name: "Nantes" },
  { "@type": "AdministrativeArea", name: "Nantes Métropole" },
  { "@type": "AdministrativeArea", name: "Pays de Retz" },
  { "@type": "AdministrativeArea", name: "Côte de Jade" },
  ...[...COMMUNES_COTE_DE_JADE, ...COMMUNES_RETZ_TERRES, ...COMMUNES_METROPOLE.slice(1)].map((name) => ({
    "@type": "Place",
    name,
  })),
  { "@type": "AdministrativeArea", name: "Loire-Atlantique" },
];

const ORG_ID = `${SITE_URL}/#organization`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "RealEstateAgent", "ProfessionalService"],
      "@id": ORG_ID,
      name: SITE_NAME,
      alternateName: "Nommanest",
      description:
        "Conciergerie de location courte durée et accompagnement immobilier à l'achat et à la vente, à Nantes, en Pays de Retz et alentours.",
      url: SITE_URL,
      telephone: "+33751263490",
      email: "nommanest@gmail.com",
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      logo: `${SITE_URL}/logo-green.png`,
      priceRange: "€€",
      currenciesAccepted: "EUR",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nantes",
        addressRegion: "Pays de la Loire",
        postalCode: "44000",
        addressCountry: "FR",
      },
      geo: { "@type": "GeoCoordinates", latitude: 47.2184, longitude: -1.5536 },
      areaServed: AREA_SERVED,
      knowsAbout: [
        "Conciergerie Airbnb",
        "Location courte durée",
        "Meublé de tourisme",
        "Investissement locatif",
        "Chasse immobilière",
        "Vente immobilière",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services Nommanest Property",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Conciergerie de location courte durée",
              url: `${SITE_URL}/conciergerie`,
              description:
                "Gestion complète de votre logement en location courte durée : annonces, voyageurs, ménage, linge, suivi. Sans frais fixe, revenus versés directement.",
              areaServed: AREA_SERVED,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Accompagnement à l'achat immobilier",
              url: `${SITE_URL}/investissement`,
              description:
                "Mandat de recherche : analyse, financement, recherche du bien, travaux et mise en location, à Nantes et en Pays de Retz.",
              areaServed: AREA_SERVED,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Accompagnement à la vente immobilière",
              url: `${SITE_URL}/investissement#vente`,
              description:
                "Mandat de vente exclusif : estimation, valorisation, commercialisation et honoraires dus uniquement au succès.",
              areaServed: AREA_SERVED,
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "fr-FR",
      publisher: { "@id": ORG_ID },
    },
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
