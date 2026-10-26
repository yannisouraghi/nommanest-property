import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import ZonesSection from "@/components/ZonesSection";
import { NestWatermark } from "@/components/NestMotif";
import { pageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import {
  COMMUNES_ALENTOURS,
  COMMUNES_COTE_DE_JADE,
  COMMUNES_METROPOLE,
  COMMUNES_RETZ_TERRES,
} from "@/lib/zones";

export const metadata: Metadata = pageMetadata({
  title: "Zones d'intervention — conciergerie Nantes, Pays de Retz & Côte de Jade",
  description:
    "Nommanest intervient à Nantes et dans sa métropole, en Pays de Retz et sur la Côte de Jade (Pornic, Saint-Brevin-les-Pins, Préfailles…) et dans le Sud-Loire : conciergerie Airbnb et accompagnement immobilier.",
  path: "/zones-intervention",
  image: "/images/retz-pornic-jetee.jpg",
  imageAlt: "Pêcherie sur la côte de Pornic au coucher du soleil",
});

const BLOCS = [
  {
    id: "nantes",
    titre: "Nantes & métropole",
    communes: COMMUNES_METROPOLE,
    lien: { href: "/conciergerie", label: "Conciergerie à Nantes" },
  },
  {
    id: "pays-de-retz",
    titre: "Côte de Jade",
    communes: COMMUNES_COTE_DE_JADE,
    lien: { href: "/conciergerie/pays-de-retz", label: "Conciergerie en Pays de Retz" },
  },
  {
    id: "retz-interieur",
    titre: "Pays de Retz intérieur & estuaire",
    communes: COMMUNES_RETZ_TERRES,
    lien: { href: "/conciergerie/pays-de-retz", label: "Conciergerie en Pays de Retz" },
  },
  {
    id: "alentours",
    titre: "Sud-Loire & Lac de Grand-Lieu",
    communes: COMMUNES_ALENTOURS,
    lien: { href: "/contact#formulaire", label: "Nous contacter" },
  },
];

export default function ZonesInterventionPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Zones d'intervention", path: "/zones-intervention" }])} />

      {/* ————— Héro ————— */}
      <section className="relative overflow-hidden bg-foret-nuit pb-20 pt-36 text-creme md:pb-24 md:pt-44">
        <NestWatermark className="pointer-events-none absolute -right-24 -top-20 w-[1250px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-sable">Zones d&apos;intervention</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="font-display mt-6 max-w-3xl text-[2.4rem] leading-[1.1] sm:text-5xl lg:text-[3.3rem]">
              De Nantes à l&apos;océan,
              <br />
              <span className="text-sable">toujours à proximité de votre bien.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-creme/85 md:text-lg">
              Nommanest accompagne les propriétaires à Nantes et dans sa
              métropole, en Pays de Retz et sur la Côte de Jade, ainsi que dans
              les communes alentour&nbsp;: conciergerie de location courte
              durée, et accompagnement à l&apos;achat comme à la vente.
            </p>
          </Reveal>
        </div>
      </section>

      <ZonesSection titre="Trois territoires, un même interlocuteur" showAllLink={false} />

      {/* ————— Toutes les communes ————— */}
      <section aria-labelledby="communes-title" className="bg-sable-doux/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-sable text-foret">Communes desservies</p>
            <h2 id="communes-title" className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
              Votre bien se trouve-t-il dans notre secteur&nbsp;?
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {BLOCS.map((b, i) => (
              <Reveal key={b.id} delay={i * 0.08}>
                <div
                  id={b.id}
                  className="h-full scroll-mt-28 rounded-3xl border border-foret/10 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)]"
                >
                  <h3 className="font-display flex items-center gap-2.5 text-xl text-encre">
                    <MapPin size={18} className="text-foret" aria-hidden />
                    {b.titre}
                  </h3>
                  <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-encre/75">
                    {b.communes.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <Link
                    href={b.lien.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foret underline-offset-4 hover:underline"
                  >
                    {b.lien.label}
                    <ArrowRight size={15} aria-hidden />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 text-sm leading-relaxed text-encre/65">
              Pages dédiées&nbsp;:{" "}
              <Link href="/conciergerie/pornic" className="font-medium text-foret underline-offset-4 hover:underline">
                conciergerie à Pornic
              </Link>
              ,{" "}
              <Link href="/conciergerie/saint-brevin-les-pins" className="font-medium text-foret underline-offset-4 hover:underline">
                conciergerie à Saint-Brevin-les-Pins
              </Link>
              ,{" "}
              <Link href="/investissement" className="font-medium text-foret underline-offset-4 hover:underline">
                achat &amp; vente immobilière
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— CTA ————— */}
      <section className="relative overflow-hidden bg-foret-nuit py-24 text-creme md:py-28">
        <NestWatermark className="pointer-events-none absolute -left-24 -bottom-10 w-[900px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl leading-snug md:text-4xl">
              Votre commune n&apos;est pas dans la liste&nbsp;?
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-creme/80">
              Si votre bien se trouve dans les environs, parlons-en&nbsp;: selon
              sa localisation et son potentiel, nous étudions votre projet.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact#formulaire" className="btn btn-sable">
                Demander un échange découverte
              </Link>
              <a href="tel:+33751263490" className="btn btn-ghost-light">
                <Phone size={16} aria-hidden />
                07 51 26 34 90
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
