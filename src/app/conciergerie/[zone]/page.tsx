import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Banknote, BadgeCheck, Check, MapPin, Plus, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { NestWatermark } from "@/components/NestMotif";
import { pageMetadata, breadcrumbJsonLd, JsonLd, SITE_URL } from "@/lib/seo";
import { ZONES, getZone } from "@/lib/zones";

type Props = { params: Promise<{ zone: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ZONES.map((z) => ({ zone: z.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const zone = getZone((await params).zone);
  if (!zone) return {};
  return pageMetadata({
    title: zone.seoTitle,
    description: zone.seoDescription,
    path: `/conciergerie/${zone.slug}`,
    image: zone.image,
    imageAlt: zone.imageAlt,
  });
}

export default async function ZonePage({ params }: Props) {
  const zone = getZone((await params).zone);
  if (!zone) notFound();

  const path = `/conciergerie/${zone.slug}`;
  const autres = ZONES.filter((z) => z.slug !== zone.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Conciergerie de location courte durée — ${zone.nom}`,
    serviceType: "Conciergerie de location courte durée",
    url: `${SITE_URL}${path}`,
    description: zone.seoDescription,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": zone.geo.type, name: zone.geo.nom },
      ...zone.secteurs.flatMap((s) => s.communes).map((c) => ({ "@type": "Place", name: c })),
    ],
    offers: [
      { "@type": "Offer", name: "Nest Standard", description: "19 % du chiffre d'affaires locatif généré, 0 € de frais fixe" },
      { "@type": "Offer", name: "Nomma Performance", description: "23 % du chiffre d'affaires locatif généré, 0 € de frais fixe" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: zone.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Conciergerie", path: "/conciergerie" },
          { name: zone.nom, path },
        ])}
      />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* ————— Héro ————— */}
      <section className="relative overflow-hidden bg-foret-nuit pb-20 pt-32 text-creme md:pb-24 md:pt-40">
        <NestWatermark className="pointer-events-none absolute -right-24 -top-20 w-[1250px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.15fr_1fr] md:gap-10 md:px-8 lg:gap-14">
          <div>
            <Reveal>
              <nav aria-label="Fil d'Ariane" className="text-xs text-creme/55">
                <Link href="/conciergerie" className="hover:text-sable">Conciergerie</Link>
                <span className="mx-2">/</span>
                <span className="text-creme/80">{zone.nom}</span>
              </nav>
              <p className="eyebrow mt-6 text-sable">{zone.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="font-display mt-6 text-[2.3rem] leading-[1.1] sm:text-5xl lg:text-[3.1rem]">
                {zone.h1}
                <br />
                <span className="text-sable">{zone.h1Accent}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-creme/85 md:text-lg">
                {zone.intro}
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#formulaire" className="btn btn-sable">
                  Demander mon audit gratuit
                  <ArrowRight size={16} aria-hidden />
                </a>
                <Link href="/conciergerie#formules" className="btn btn-ghost-light">
                  Voir nos formules
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.48}>
              <div className="mt-9 flex flex-col gap-3 border-t border-creme/15 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7">
                <p className="flex items-center gap-2.5 whitespace-nowrap text-sm text-creme/80">
                  <Banknote size={16} className="shrink-0 text-sable" aria-hidden />
                  0&nbsp;€ de frais fixe
                </p>
                <p className="flex items-center gap-2.5 whitespace-nowrap text-sm text-creme/80">
                  <Zap size={16} className="shrink-0 text-sable" aria-hidden />
                  Réponse sous 24&nbsp;h
                </p>
                <p className="flex items-center gap-2.5 whitespace-nowrap text-sm text-creme/80">
                  <BadgeCheck size={16} className="shrink-0 text-sable" aria-hidden />
                  Revenus versés directement
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <figure className="relative mx-auto w-full max-w-md">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-sable/35" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_28px_56px_-22px_rgba(0,25,20,0.65)]">
                <Image
                  src={zone.image}
                  alt={zone.imageAlt}
                  fill
                  priority
                  quality={90}
                  className="kenburns object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-creme/50">
                {zone.imageCaption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ————— Atouts du territoire ————— */}
      <section aria-labelledby="atouts-title" className="bg-creme py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-sable text-foret">Location courte durée — {zone.nom}</p>
            <h2 id="atouts-title" className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
              {zone.atoutsTitre}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {zone.atouts.map((a, i) => (
              <Reveal key={a.titre} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-foret/10 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)] transition-transform duration-500 hover:-translate-y-1.5">
                  <p className="font-display text-3xl text-foret/30">0{i + 1}</p>
                  <h3 className="font-display mt-4 text-xl text-encre">{a.titre}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-encre/70">{a.texte}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Présence locale + secteurs couverts ————— */}
      <section aria-labelledby="terrain-title" className="relative overflow-hidden bg-foret py-24 text-creme md:py-32">
        <NestWatermark className="pointer-events-none absolute -right-24 bottom-0 w-[980px] max-w-none text-foret-clair opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1.1fr_1fr] md:px-8">
          <Reveal>
            <p className="eyebrow rule-sable text-sable">Sur le terrain</p>
            <h2 id="terrain-title" className="font-display mt-8 text-3xl leading-snug md:text-4xl">
              {zone.terrainTitre}
            </h2>
            <ul className="mt-10 space-y-5">
              {zone.terrain.map((t) => (
                <li key={t} className="flex gap-4 text-base leading-relaxed text-creme/85">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sable text-foret-nuit">
                    <Check size={14} aria-hidden />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-creme/15 bg-foret-nuit/40 p-8 md:p-10">
              <h3 className="font-display flex items-center gap-3 text-2xl text-sable">
                <MapPin size={20} aria-hidden />
                Secteurs couverts
              </h3>
              <div className="mt-8 space-y-8">
                {zone.secteurs.map((s) => (
                  <div key={s.nom}>
                    <p className="eyebrow text-creme/60">{s.nom}</p>
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-creme/85">
                      {s.communes.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-8 border-t border-creme/15 pt-6 text-sm text-creme/60">
                Une autre commune à proximité&nbsp;?{" "}
                <a href="tel:+33751263490" className="text-sable underline-offset-4 hover:underline">
                  07 51 26 34 90
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— Formules (résumé) ————— */}
      <section className="bg-sable-doux/40 py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow rule-sable rule-sable-center text-foret">Nos formules</p>
            <h2 className="font-display mt-8 text-3xl text-encre md:text-4xl">
              Les mêmes engagements, à Nantes comme sur la côte
            </h2>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-foret/10 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)]">
                <p className="eyebrow text-foret">Nest Standard</p>
                <p className="font-display mt-4 text-5xl text-encre">19&nbsp;%</p>
                <p className="mt-4 text-sm leading-relaxed text-encre/70">
                  L&apos;essentiel de la conciergerie&nbsp;: annonce, calendrier,
                  tarification, voyageurs, check-in / check-out, ménage et linge
                  coordonnés, avis, reporting mensuel.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl bg-foret-nuit p-8 text-creme shadow-[0_16px_40px_-24px_rgba(0,51,42,0.5)]">
                <p className="eyebrow text-sable">Nomma Performance</p>
                <p className="font-display mt-4 text-5xl text-sable">23&nbsp;%</p>
                <p className="mt-4 text-sm leading-relaxed text-creme/80">
                  Tout Nest Standard, plus une tarification ajustée en continu,
                  un accueil premium, le suivi proactif du logement et
                  l&apos;accompagnement dans les démarches réglementaires.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-encre/65">
              Rémunération calculée selon un pourcentage convenu sur le chiffre
              d&apos;affaires locatif réellement généré. 0&nbsp;€ de frais fixe,
              ménage et blanchisserie refacturés au réel.{" "}
              <Link href="/conciergerie#formules" className="font-medium text-foret underline-offset-4 hover:underline">
                Le détail service par service →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— FAQ locale ————— */}
      <section aria-labelledby="faq-title" className="bg-creme py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow rule-sable rule-sable-center text-foret">Questions fréquentes</p>
            <h2 id="faq-title" className="font-display mt-8 text-3xl text-encre md:text-4xl">
              Conciergerie à {zone.nom}&nbsp;: vos questions
            </h2>
          </Reveal>
          <div className="mt-14 space-y-4">
            {zone.faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <details className="faq-item group rounded-2xl border border-foret/10 bg-white shadow-[0_12px_32px_-22px_rgba(0,51,42,0.3)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 md:px-7">
                    <h3 className="font-display text-base text-encre md:text-lg">{item.q}</h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foret/8 text-foret transition-transform duration-300 group-open:rotate-45">
                      <Plus size={16} aria-hidden />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-encre/70 md:px-7">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Formulaire ————— */}
      <section id="formulaire" className="relative scroll-mt-24 overflow-hidden bg-foret-nuit py-24 text-creme md:py-32">
        <NestWatermark className="pointer-events-none absolute -right-20 -top-12 w-[880px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.3fr] md:px-8">
          <Reveal>
            <p className="eyebrow rule-sable text-sable">Audit gratuit</p>
            <h2 className="font-display mt-8 text-3xl leading-snug md:text-4xl">
              Combien votre logement à {zone.nom} peut-il générer&nbsp;?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-creme/80">
              Décrivez-nous votre bien&nbsp;: nous vous rappelons sous 24&nbsp;h
              pour convenir d&apos;une visite et vous remettre une simulation
              chiffrée de son potentiel locatif. Gratuit, sans engagement.
            </p>
            <p className="mt-8 text-sm text-creme/60">
              Vous préférez l&apos;oral&nbsp;?{" "}
              <a href="tel:+33751263490" className="text-sable underline-offset-4 hover:underline">
                07 51 26 34 90
              </a>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <LeadForm
              kind="conciergerie"
              dark
              extraFields={[
                {
                  name: "ville",
                  label: "Ville / quartier du bien",
                  type: "text",
                  required: true,
                  placeholder: zone.placeholderVille,
                },
                {
                  name: "typeBien",
                  label: "Type de logement",
                  type: "select",
                  options: ["Studio", "T2", "T3", "T4 et plus", "Maison", "Autre"],
                },
              ]}
              messageLabel="Votre logement en quelques mots"
              messagePlaceholder="Surface, extérieur, distance à la plage, déjà loué ou non…"
              submitLabel="Demander mon audit gratuit"
            />
          </Reveal>
        </div>
      </section>

      {/* ————— Maillage vers les autres zones ————— */}
      <section className="bg-creme py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center md:px-8">
          <p className="text-sm uppercase tracking-[0.2em] text-encre/60">Nous intervenons aussi</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Link href="/conciergerie" className="font-display text-xl text-foret underline-offset-8 hover:underline">
              Conciergerie à Nantes
            </Link>
            {autres.map((z) => (
              <Link
                key={z.slug}
                href={`/conciergerie/${z.slug}`}
                className="font-display text-xl text-foret underline-offset-8 hover:underline"
              >
                Conciergerie {z.slug === "pays-de-retz" ? "en" : "à"} {z.nom}
              </Link>
            ))}
            <Link href="/zones-intervention" className="font-display text-xl text-foret underline-offset-8 hover:underline">
              Toutes nos zones →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
