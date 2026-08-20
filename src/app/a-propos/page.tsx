import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Flame,
  MapPin,
  Banknote,
  FileText,
  ShieldCheck,
  ArrowRight,
  Phone,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { NestDivider, NestWatermark } from "@/components/NestMotif";

export const metadata: Metadata = {
  title: "Qui sommes-nous — conciergerie & immobilier à Nantes",
  description:
    "Nommanest Property : conciergerie de location courte durée et accompagnement immobilier à Nantes. Trois valeurs guident chacune de nos missions : transparence, engagement, proximité.",
};

const VALEURS = [
  {
    icon: Eye,
    title: "Transparence",
    text: "Une rémunération définie noir sur blanc dès la signature, des prestations refacturées au réel sans marge cachée, un reporting régulier — et vos revenus locatifs versés directement sur votre compte, jamais sur le nôtre.",
  },
  {
    icon: Flame,
    title: "Engagement",
    text: "Pas de frais fixe, pas d'abonnement : notre rémunération dépend de ce que votre bien génère réellement. Votre réussite est littéralement la nôtre — et nous nous y engageons 7 jours sur 7.",
  },
  {
    icon: MapPin,
    title: "Proximité",
    text: "Nous vivons à Nantes, nous connaissons ses quartiers, ses saisons et ses voyageurs. Un interlocuteur unique, joignable et proche de votre bien, du premier échange au quotidien de l'exploitation.",
  },
];

const CADRE = [
  {
    icon: Banknote,
    title: "Vos revenus restent les vôtres",
    text: "Nommanest n'encaisse jamais les loyers ni les dépôts de garantie : les paiements des voyageurs vous sont versés directement, selon les modalités des plateformes.",
  },
  {
    icon: FileText,
    title: "Un contrat de prestations de services",
    text: "Nos missions et notre rémunération sont précisées dès la signature. Aucune zone grise, aucune surprise en fin de mois.",
  },
  {
    icon: ShieldCheck,
    title: "Vous restez maître de votre bien",
    text: "Nous intervenons en assistance opérationnelle : la relation locative reste la vôtre, nous la facilitons à chaque étape.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* ————— Héro ————— */}
      <section className="relative flex min-h-[70svh] flex-col justify-center overflow-hidden bg-foret-nuit pb-16 pt-32 text-creme md:pt-36">
        <NestWatermark className="pointer-events-none absolute -right-24 -top-20 w-[1250px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-sable">Qui sommes-nous</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="font-display mt-6 max-w-3xl text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl">
              Une conciergerie née à Nantes, pensée comme un nid.
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-creme/85 md:text-lg">
              Nommanest Property accompagne les propriétaires nantais&nbsp;:
              conciergerie de location courte durée d&apos;un côté,
              accompagnement à l&apos;achat et à la vente de l&apos;autre.
              Deux métiers, un seul interlocuteur, une même exigence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— L'histoire du nom ————— */}
      <section className="relative overflow-hidden bg-creme py-24 md:py-32">
        <NestWatermark className="pointer-events-none absolute -left-24 top-8 w-[820px] max-w-none text-foret opacity-[0.07]" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.35fr] md:items-center md:px-8">
          <Reveal className="flex justify-center md:justify-start">
            <Image
              src="/logo-green.png"
              alt="Logo Nommanest : un bâtiment posé dans un nid d'oiseau"
              width={330}
              height={240}
              className="w-56 md:w-72"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow rule-sable text-foret">Nomad&nbsp;+&nbsp;Nest</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
                Le voyageur et le nid&nbsp;: tout est dans le nom.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-encre/75">
                <em>Nomad</em>, celui qui voyage. <em>Nest</em>, le nid — un
                espace de repos, de protection et de réconfort. De cette
                rencontre est né Nommanest, avec une vision simple&nbsp;:
                offrir à chaque voyageur un véritable chez-soi, et à chaque
                propriétaire la certitude que son bien est entre de bonnes
                mains.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-base leading-relaxed text-encre/75">
                Notre mission&nbsp;: défendre les intérêts de nos clients —
                propriétaires, acquéreurs ou vendeurs — avec un
                accompagnement clé en main, transparent et optimisé, porté
                par un réseau de partenaires experts&nbsp;: architectes,
                courtiers, artisans, diagnostiqueurs, syndics.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— Nos valeurs ————— */}
      <section aria-labelledby="valeurs-title" className="relative overflow-hidden bg-foret py-24 text-creme md:py-32">
        <NestWatermark className="pointer-events-none absolute -right-24 bottom-0 w-[980px] max-w-none text-foret-clair opacity-30" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow rule-sable rule-sable-center text-sable">
              Nos valeurs
            </p>
            <h2 id="valeurs-title" className="font-display mt-8 text-3xl md:text-4xl">
              Trois mots qui engagent
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {VALEURS.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <div className="text-center">
                  <NestDivider className="mx-auto w-28 text-sable" />
                  <span className="mx-auto mt-7 flex h-14 w-14 items-center justify-center rounded-full bg-sable/12 text-sable">
                    <v.icon size={24} aria-hidden />
                  </span>
                  <h3 className="font-display mt-5 text-2xl">{v.title}</h3>
                  <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-creme/75">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Notre façon de travailler ————— */}
      <section className="bg-sable-doux/40 py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <Reveal>
                <p className="eyebrow rule-sable text-foret">
                  Notre façon de travailler
                </p>
                <h2 className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
                  Un cadre clair, dès le premier jour.
                </h2>
              </Reveal>
              <div className="mt-10 space-y-8">
                {CADRE.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.1}>
                    <div className="flex gap-5">
                      <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foret text-sable">
                        <item.icon size={20} aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-display text-lg text-encre">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-encre/70">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.15}>
              <figure>
                <div className="img-card relative aspect-[4/5]">
                  <Image
                    src="/images/nantes-trentemoult.jpg"
                    alt="Les façades colorées du village de Trentemoult, sur les bords de Loire"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                </div>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-encre/50">
                  Trentemoult — notre terrain de jeu
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— Nos deux métiers ————— */}
      <section className="bg-creme py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
          <Reveal>
            <p className="eyebrow rule-sable rule-sable-center text-foret">
              Nos deux métiers
            </p>
            <h2 className="font-display mt-8 text-3xl text-encre md:text-4xl">
              Par où souhaitez-vous commencer&nbsp;?
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/conciergerie" className="btn btn-foret">
                La conciergerie
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/investissement" className="btn btn-ghost-dark">
                Achat &amp; vente
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— CTA final ————— */}
      <section className="relative overflow-hidden bg-foret-nuit py-24 text-creme md:py-28">
        <NestWatermark className="pointer-events-none absolute -left-24 -bottom-10 w-[900px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl leading-snug md:text-4xl">
              Faisons connaissance.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-creme/80">
              Un premier échange suffit pour savoir ce que Nommanest peut
              apporter à votre projet — sans engagement, en toute
              transparence.
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
