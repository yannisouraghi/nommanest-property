import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Check,
  Minus,
  ShieldCheck,
  Banknote,
  FileText,
  Clock3,
  Star,
  HeartHandshake,
  Plus,
  Zap,
  BadgeCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import CommissionCarousel from "@/components/CommissionCarousel";
import CommissionTicker from "@/components/CommissionTicker";
import HeroEstimator from "@/components/HeroEstimator";
import ServicesShowcase from "@/components/ServicesShowcase";
import { NestDivider, NestWatermark } from "@/components/NestMotif";

export const metadata: Metadata = {
  title: "Conciergerie de location courte durée à Nantes",
  description:
    "Conciergerie et services aux propriétaires à Nantes : annonces, voyageurs, ménage, suivi du logement. Deux formules sans frais fixes — 23 %, ou 25 % dégressif à la nuitée — et vos revenus versés directement.",
};

const BANDE = [
  "Revenus versés directement sur votre compte",
  "0 € de frais fixe",
  "Réponse sous 24 h",
  "Nantes & agglomération",
  "Contrat clair, sans zone grise",
];

const SERVICES: { label: string; standard: boolean }[] = [
  { label: "Création et optimisation de l'annonce (Airbnb, Booking)", standard: true },
  { label: "Suivi du calendrier et des réservations", standard: true },
  { label: "Grille tarifaire ajustée périodiquement", standard: true },
  { label: "Communication voyageurs avant / pendant / après séjour", standard: true },
  { label: "Coordination du ménage et de la blanchisserie (refacturés au réel)", standard: true },
  { label: "Check-in / check-out à distance ou physique", standard: true },
  { label: "Gestion des avis et de la e-réputation", standard: true },
  { label: "Reporting mensuel", standard: true },
  { label: "Accompagnement personnalisé du propriétaire (conseils, experts)", standard: false },
  { label: "Offre d'assurance dédiée à la location courte durée", standard: false },
  { label: "Yield management avancé, tarification ajustée en continu", standard: false },
  { label: "Accueil voyageur premium et recommandations locales", standard: false },
  { label: "Suivi proactif de l'état du logement", standard: false },
  { label: "Tableau de bord détaillé et conseils d'optimisation", standard: false },
  { label: "Accompagnement dans les démarches réglementaires", standard: false },
  { label: "Interlocuteur prioritaire, disponibilité élargie", standard: false },
];

const ETAPES = [
  {
    title: "Échange découverte",
    text: "On discute de votre bien, de vos objectifs et de vos disponibilités.",
  },
  {
    title: "Audit gratuit & simulation",
    text: "Visite du logement et estimation chiffrée de son potentiel locatif.",
  },
  {
    title: "Choix de la formule",
    text: "Nest Standard ou Nomma Performance : vous choisissez le niveau d'accompagnement.",
  },
  {
    title: "Mise en ligne",
    text: "Annonce optimisée, photos, calendrier et tarification en place.",
  },
  {
    title: "Suivi continu",
    text: "Assistance quotidienne, reporting régulier — et vos revenus versés directement.",
  },
];

const POURQUOI = [
  {
    icon: Clock3,
    title: "Votre temps, rendu",
    text: "Messages à toute heure, arrivées tardives, ménage entre deux séjours : la courte durée est un métier à plein temps. Nous le faisons pour vous.",
  },
  {
    icon: TrendingUp,
    title: "Des revenus optimisés",
    text: "Annonce travaillée, tarifs ajustés à la saison et aux événements, calendrier rempli intelligemment : un logement bien piloté rapporte sensiblement plus.",
  },
  {
    icon: Star,
    title: "De meilleurs avis",
    text: "Un accueil soigné et des réponses rapides se lisent dans les commentaires — et les plateformes font remonter les annonces les mieux notées.",
  },
  {
    icon: HeartHandshake,
    title: "La sérénité d'un cadre pro",
    text: "Prestataires fiables, suivi du logement, contrat clair : vous savez qui fait quoi, et votre bien est entre des mains attentives.",
  },
];

const FAQ = [
  {
    q: "Comment est calculée votre rémunération ?",
    a: "Notre rémunération correspond à la facturation de nos prestations de conciergerie, calculée selon un pourcentage convenu sur le chiffre d'affaires locatif réellement généré par votre logement : 23 % avec Nest Standard, 25 % dégressif à la nuitée avec Nomma Performance. Aucun frais fixe, aucun abonnement, aucun frais d'entrée.",
  },
  {
    q: "Que signifie « taux dégressif à la nuitée » ?",
    a: "Avec la formule Nomma Performance, le taux de 25 % diminue à mesure que votre logement cumule des nuitées réservées : plus il performe, moins le pourcentage est élevé. Le barème dégressif précis vous est remis, noir sur blanc, lors de l'audit gratuit.",
  },
  {
    q: "Qui encaisse les revenus des locations ?",
    a: "Vous, directement. Les paiements des voyageurs vous sont versés selon les modalités définies avec les plateformes : Nommanest n'encaisse jamais les loyers ni les dépôts de garantie, et facture uniquement ses prestations.",
  },
  {
    q: "Le ménage et le linge sont-ils inclus dans la commission ?",
    a: "Nous coordonnons le ménage et la blanchisserie avec des prestataires sélectionnés, et ces prestations sont systématiquement refacturées au réel, sans marge cachée — quelle que soit la formule choisie.",
  },
  {
    q: "Suis-je engagé sur la durée ?",
    a: "Notre relation repose sur un contrat de prestations de services qui précise les missions confiées et notre rémunération dès la signature. L'échange découverte et l'audit de votre logement sont, eux, gratuits et sans engagement.",
  },
  {
    q: "Puis-je continuer à profiter de mon logement ?",
    a: "Bien sûr. Vous restez propriétaire de votre calendrier : il vous suffit de bloquer vos dates, et nous organisons les séjours des voyageurs autour de vos venues.",
  },
  {
    q: "M'accompagnez-vous dans les démarches réglementaires ?",
    a: "Oui. La location courte durée obéit à des règles locales (déclaration en meublé de tourisme, changement d'usage selon les communes). Avec Nomma Performance, nous vous accompagnons pas à pas dans ces démarches.",
  },
  {
    q: "Dans quelles zones intervenez-vous ?",
    a: "À Nantes et dans son agglomération. Votre bien est ailleurs en Loire-Atlantique ? Parlons-en : selon sa localisation et son potentiel, nous pouvons étudier votre projet.",
  },
];

export default function ConciergeriePage() {
  return (
    <>
      {/* ————— Héro ————— */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-foret-nuit pb-16 pt-32 text-creme md:pt-36">
        <NestWatermark className="pointer-events-none absolute -right-24 -top-20 w-[1250px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 md:grid-cols-[1.1fr_1fr] md:gap-8 md:px-8 lg:gap-12">
          <div>
            <Reveal>
              <p className="eyebrow text-sable">
                Conciergerie — Nantes &amp; agglomération
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="font-display mt-6 text-[2.4rem] leading-[1.1] sm:text-5xl lg:text-[3.3rem]">
                Faites de votre logement une source de revenus.
                <br />
                <span className="text-sable">Sans la charge mentale.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-creme/85 md:text-lg">
                De l&apos;annonce au reporting, Nommanest assure
                l&apos;assistance opérationnelle complète de votre location
                courte durée — et vos revenus sont versés directement sur
                votre compte.
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <div className="mt-9 max-w-xl">
                <HeroEstimator />
                <p className="mt-4 text-sm text-creme/60">
                  Ou découvrez d&apos;abord{" "}
                  <a href="#formules" className="text-sable underline-offset-4 hover:underline">
                    nos formules →
                  </a>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.48}>
              <div className="mt-8 flex flex-col gap-3 border-t border-creme/15 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7">
                <p className="flex items-center gap-2.5 whitespace-nowrap text-sm text-creme/80">
                  <Zap size={16} className="shrink-0 text-sable" aria-hidden />
                  Réponse sous 24&nbsp;h
                </p>
                <p className="flex items-center gap-2.5 whitespace-nowrap text-sm text-creme/80">
                  <Banknote size={16} className="shrink-0 text-sable" aria-hidden />
                  0&nbsp;€ de frais fixe
                </p>
                <p className="flex items-center gap-2.5 whitespace-nowrap text-sm text-creme/80">
                  <BadgeCheck size={16} className="shrink-0 text-sable" aria-hidden />
                  Audit gratuit, sans engagement
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="relative mx-auto mt-6 w-full max-w-[21rem] sm:max-w-sm md:mt-0">
              {/* arche décorative décalée */}
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 h-full w-full rounded-b-[1.7rem] rounded-t-[999px] border border-sable/35"
              />
              {/* photo en arche, clin d'œil à la structure Murfy */}
              <div className="relative h-[52svh] w-full overflow-hidden rounded-b-[1.7rem] rounded-t-[999px] shadow-[0_28px_56px_-22px_rgba(0,25,20,0.65)] md:h-[62svh]">
                <Image
                  src="/images/logement-salon-vert.jpg"
                  alt="Salon contemporain au canapé vert forêt, baigné de lumière naturelle"
                  fill
                  priority
                  quality={95}
                  className="kenburns object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foret-nuit/50 to-transparent" />
              </div>
              {/* badge flottant */}
              <div className="absolute -right-2 bottom-8 flex h-24 w-24 rotate-6 flex-col items-center justify-center rounded-full bg-sable text-center text-foret-nuit shadow-[0_18px_38px_-14px_rgba(246,223,165,0.55)] sm:bottom-auto sm:-right-6 sm:top-14 md:h-28 md:w-28">
                <span className="font-display text-2xl leading-none md:text-3xl">
                  0&nbsp;€
                </span>
                <span className="mt-1 px-2 text-[0.55rem] font-semibold uppercase tracking-[0.14em]">
                  de frais fixe
                </span>
              </div>
              {/* notifications de virement Airbnb / Booking */}
              <div className="absolute inset-x-2 -top-3 sm:inset-x-auto sm:-left-16 sm:-top-20 sm:w-[21rem]">
                <CommissionTicker />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— Bande défilante de réassurance ————— */}
      <div aria-hidden className="overflow-hidden bg-sable py-3.5 text-foret-nuit">
        <div className="marquee-track items-center gap-10">
          {[...BANDE, ...BANDE].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.22em]"
            >
              {t}
              <span className="h-1.5 w-1.5 rounded-full bg-foret-nuit/35" />
            </span>
          ))}
        </div>
      </div>

      {/* ————— Pourquoi une conciergerie ————— */}
      <section aria-labelledby="pourquoi-title" className="bg-creme py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-14 md:grid-cols-[1fr_1.25fr] md:items-center">
            <Reveal className="relative order-last md:order-first">
              <figure>
                <div className="img-card relative aspect-[4/5]">
                  <Image
                    src="/images/artdevivre-fenetre.jpg"
                    alt="Moment de détente près d'une fenêtre lumineuse, dans un logement accompagné"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                </div>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-encre/50">
                  Pendant ce temps, votre logement travaille
                </figcaption>
              </figure>
            </Reveal>
            <div>
              <Reveal>
                <p className="eyebrow rule-sable text-foret">
                  Pourquoi faire appel à une conciergerie&nbsp;?
                </p>
                <h2 id="pourquoi-title" className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
                  Parce que bien louer en courte durée est un métier.
                </h2>
              </Reveal>
              <div className="mt-10 space-y-8">
                {POURQUOI.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.08}>
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
          </div>
        </div>
      </section>

      {/* ————— Approche : commission uniquement ————— */}
      <section className="bg-sable-doux/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-sable text-foret">Notre approche</p>
            <h2 className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
              Ni frais fixe, ni frais d&apos;entrée, ni coût caché.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-encre/75">
              Notre rémunération correspond à la facturation de nos prestations
              de conciergerie, calculée selon un pourcentage convenu sur le
              chiffre d&apos;affaires locatif réellement généré — jamais sur un
              forfait.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Banknote,
                title: "0 € de frais fixe",
                text: "Aucun abonnement, aucun frais d'entrée. Vous ne payez que sur ce que votre bien génère réellement.",
              },
              {
                icon: TrendingUp,
                title: "Un intérêt commun",
                text: "Notre rémunération progresse avec vos revenus : nous n'avons aucun intérêt à sous-performer.",
              },
              {
                icon: FileText,
                title: "Deux formules claires",
                text: "Nest Standard à 23 %, Nomma Performance à 25 % dégressif à la nuitée — détaillées service par service, noir sur blanc.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-foret/10 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)] transition-transform duration-500 hover:-translate-y-1.5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-foret/8 text-foret">
                    <c.icon size={22} aria-hidden />
                  </span>
                  <h3 className="font-display mt-5 text-xl text-encre">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-encre/70">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Nos services ————— */}
      <section aria-labelledby="services-title" className="bg-creme py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow rule-sable rule-sable-center text-foret">
              Ce que nous prenons en charge
            </p>
            <h2 id="services-title" className="font-display mt-8 text-3xl text-encre md:text-4xl">
              Nos services, de l&apos;annonce au dernier détail
            </h2>
          </Reveal>
          <div className="mt-14">
            <ServicesShowcase />
          </div>
        </div>
      </section>

      {/* ————— Formules ————— */}
      <section id="formules" className="scroll-mt-24 bg-sable-doux/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow rule-sable rule-sable-center text-foret">Nos formules</p>
            <h2 className="font-display mt-8 text-3xl text-encre md:text-4xl">
              Deux niveaux d&apos;accompagnement, une même exigence
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-foret/10 bg-white p-9 shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)] md:p-11">
                <p className="eyebrow text-foret">Nest Standard</p>
                <p className="font-display mt-6 text-5xl text-encre">
                  23&nbsp;<span className="text-3xl">%</span>
                </p>
                <p className="mt-1 text-sm text-encre/60">des revenus locatifs générés</p>
                <p className="mt-6 text-sm leading-relaxed text-encre/75">
                  L&apos;essentiel d&apos;une conciergerie fiable et
                  professionnelle, au quotidien. Pour les propriétaires qui
                  veulent déléguer l&apos;opérationnel, sans complexité.
                </p>
                <a href="#formulaire" className="btn btn-ghost-dark mt-8 self-start">
                  Choisir Standard
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-foret-nuit p-9 text-creme shadow-[0_24px_48px_-24px_rgba(0,51,42,0.5)] md:p-11">
                <NestWatermark className="pointer-events-none absolute -right-12 -bottom-14 w-[620px] max-w-none text-foret-clair opacity-30" />
                <div className="relative">
                  <p className="eyebrow text-sable">Nomma Performance</p>
                  <p className="font-display mt-6 text-5xl">
                    25&nbsp;<span className="text-3xl">%</span>
                  </p>
                  <p className="mt-1 text-sm text-creme/60">
                    des revenus locatifs générés —{" "}
                    <span className="text-sable">taux dégressif à la nuitée</span>
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-creme/80">
                    L&apos;accompagnement complet, pour une tranquillité
                    totale&nbsp;: conseil, assurance dédiée, yield management en
                    continu et suivi proactif de votre bien.
                  </p>
                  <p className="mt-4 flex items-start gap-2.5 rounded-2xl bg-creme/8 px-4 py-3 text-[0.83rem] leading-relaxed text-creme/85">
                    <TrendingUp size={16} className="mt-0.5 shrink-0 text-sable" aria-hidden />
                    Plus votre logement cumule de nuitées, plus le taux diminue.
                    Barème précis remis lors de l&apos;audit gratuit.
                  </p>
                  <a href="#formulaire" className="btn btn-sable mt-8 self-start">
                    Choisir Performance
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Comparatif — version mobile : deux cartes empilées */}
          <div className="mt-14 space-y-6 md:hidden">
            <Reveal>
              <div className="rounded-3xl border border-foret/10 bg-white p-7 shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)]">
                <p className="eyebrow text-foret">Inclus dans les deux formules</p>
                <ul className="mt-5 space-y-3.5">
                  {SERVICES.filter((s) => s.standard).map((s) => (
                    <li key={s.label} className="flex items-start gap-3 text-sm leading-relaxed text-encre/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-foret" aria-hidden />
                      {s.label}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-foret-nuit p-7 text-creme shadow-[0_24px_48px_-24px_rgba(0,51,42,0.5)]">
                <p className="eyebrow text-sable">En plus, avec Nomma Performance</p>
                <ul className="mt-5 space-y-3.5">
                  {SERVICES.filter((s) => !s.standard).map((s) => (
                    <li key={s.label} className="flex items-start gap-3 text-sm leading-relaxed text-creme/85">
                      <Check size={16} className="mt-0.5 shrink-0 text-sable" aria-hidden />
                      {s.label}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Comparatif — tableau (desktop) */}
          <Reveal delay={0.1} className="hidden md:block">
            <div className="mt-14 overflow-x-auto rounded-3xl border border-foret/10 bg-white shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)]">
              <table className="w-full min-w-[640px] text-sm">
                <caption className="sr-only">
                  Comparatif détaillé des services inclus dans chaque formule
                </caption>
                <thead>
                  <tr className="bg-foret text-left text-creme">
                    <th scope="col" className="px-6 py-4 font-medium uppercase tracking-[0.12em] text-[0.72rem]">
                      Services inclus
                    </th>
                    <th scope="col" className="px-4 py-4 text-center font-medium uppercase tracking-[0.12em] text-[0.72rem]">
                      Standard · 23 %
                    </th>
                    <th scope="col" className="px-4 py-4 text-center font-medium uppercase tracking-[0.12em] text-[0.72rem] text-sable">
                      Performance · 25 % dégressif
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SERVICES.map((s, i) => (
                    <tr key={s.label} className={i % 2 ? "bg-creme/60" : ""}>
                      <td className="px-6 py-3.5 text-encre/85">{s.label}</td>
                      <td className="px-4 py-3.5 text-center">
                        {s.standard ? (
                          <Check size={17} className="inline text-foret" aria-label="Inclus" />
                        ) : (
                          <Minus size={17} className="inline text-encre/25" aria-label="Non inclus" />
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <Check size={17} className="inline text-foret" aria-label="Inclus" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-sm italic leading-relaxed text-encre/60">
              Le ménage et la blanchisserie, assurés par des prestataires
              sélectionnés, sont systématiquement refacturés au réel, sans
              marge cachée — quelle que soit la formule choisie.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— La valeur derrière le taux : carrousel ————— */}
      <section aria-labelledby="valeur-title" className="relative overflow-hidden bg-foret-nuit py-24 text-creme md:py-32">
        <NestWatermark className="pointer-events-none absolute -right-24 -bottom-16 w-[1050px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-sable text-sable">La valeur derrière le taux</p>
            <h2 id="valeur-title" className="font-display mt-8 text-3xl leading-snug md:text-4xl">
              Ce que votre commission couvre, réellement.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-creme/80">
              Derrière chaque pourcentage, des heures de travail et
              d&apos;attention portées à votre logement. Les voici, une par
              une.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-14">
            <CommissionCarousel />
          </Reveal>
        </div>
      </section>

      {/* ————— Un cadre clair ————— */}
      <section className="bg-sable-doux/40 py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
            <Reveal className="relative">
              <div className="img-card relative aspect-[4/5]">
                <Image
                  src="/images/logement-chambre.jpg"
                  alt="Chambre préparée avec soin avant l'arrivée des voyageurs"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p className="eyebrow rule-sable text-foret">Un cadre clair</p>
                <h2 className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
                  Vous restez maître de votre bien, de bout en bout.
                </h2>
              </Reveal>
              <div className="mt-10 space-y-8">
                {[
                  {
                    icon: Banknote,
                    title: "Vos revenus, directement chez vous",
                    text: "Nommanest n'encaisse jamais les loyers ni les dépôts de garantie : les paiements des voyageurs vous sont versés directement, selon les modalités des plateformes.",
                  },
                  {
                    icon: FileText,
                    title: "Un contrat de prestations de services",
                    text: "Nos missions et notre rémunération sont précisées noir sur blanc dès la signature — aucune zone grise, aucune surprise en fin de mois.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Votre relation locative, votre propriété",
                    text: "Nous intervenons en assistance opérationnelle : la relation avec les voyageurs reste la vôtre, nous la facilitons à chaque étape.",
                  },
                ].map((item, i) => (
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
          </div>
        </div>
      </section>

      {/* ————— 5 étapes ————— */}
      <section className="bg-creme py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow rule-sable rule-sable-center text-foret">
              Mode de fonctionnement
            </p>
            <h2 className="font-display mt-8 text-3xl text-encre md:text-4xl">
              De l&apos;échange découverte au premier séjour
            </h2>
          </Reveal>
          <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
            {ETAPES.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <li className="text-center lg:text-left">
                  <NestDivider className="mx-auto w-24 text-foret lg:mx-0" />
                  <p className="eyebrow mt-5 text-foret/60">Étape {i + 1}</p>
                  <h3 className="font-display mt-2 text-lg text-encre">{e.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-encre/70">{e.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ————— FAQ ————— */}
      <section aria-labelledby="faq-title" className="bg-sable-doux/40 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow rule-sable rule-sable-center text-foret">
              Questions fréquentes
            </p>
            <h2 id="faq-title" className="font-display mt-8 text-3xl text-encre md:text-4xl">
              Tout ce qu&apos;on nous demande, en toute transparence
            </h2>
          </Reveal>
          <div className="mt-14 space-y-4">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <details className="faq-item group rounded-2xl border border-foret/10 bg-white shadow-[0_12px_32px_-22px_rgba(0,51,42,0.3)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 md:px-7">
                    <h3 className="font-display text-base text-encre md:text-lg">
                      {item.q}
                    </h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foret/8 text-foret transition-transform duration-300 group-open:rotate-45">
                      <Plus size={16} aria-hidden />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-encre/70 md:px-7">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 text-center text-sm text-encre/60">
              Une autre question&nbsp;?{" "}
              <a href="#formulaire" className="font-medium text-foret underline-offset-4 hover:underline">
                Écrivez-nous
              </a>{" "}
              ou appelez le{" "}
              <a href="tel:+33751263490" className="font-medium text-foret underline-offset-4 hover:underline">
                07 51 26 34 90
              </a>
              .
            </p>
          </Reveal>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            }),
          }}
        />
      </section>

      {/* ————— Formulaire ————— */}
      <section id="formulaire" className="relative scroll-mt-24 overflow-hidden bg-foret-nuit py-24 text-creme md:py-32">
        <NestWatermark className="pointer-events-none absolute -right-20 -top-12 w-[880px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.3fr] md:px-8">
          <div>
            <Reveal>
              <p className="eyebrow rule-sable text-sable">Audit gratuit</p>
              <h2 className="font-display mt-8 text-3xl leading-snug md:text-4xl">
                Combien votre logement peut-il générer&nbsp;?
              </h2>
              <p className="mt-6 text-base leading-relaxed text-creme/80">
                Décrivez-nous votre bien : nous vous rappelons sous 24&nbsp;h
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
          </div>
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
                  placeholder: "Nantes — Île de Nantes",
                },
                {
                  name: "typeBien",
                  label: "Type de logement",
                  type: "select",
                  options: ["Studio", "T2", "T3", "T4 et plus", "Maison", "Autre"],
                },
              ]}
              messageLabel="Votre logement en quelques mots"
              messagePlaceholder="Surface, étage, extérieur, déjà loué ou non…"
              submitLabel="Demander mon audit gratuit"
            />
          </Reveal>
        </div>
      </section>

      {/* ————— Lien croisé ————— */}
      <section className="bg-creme py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center md:px-8">
          <p className="text-sm uppercase tracking-[0.2em] text-encre/60">
            Vous n&apos;avez pas encore le bien&nbsp;?
          </p>
          <Link href="/investissement" className="font-display text-2xl text-foret underline-offset-8 hover:underline">
            Découvrez notre accompagnement à l&apos;achat →
          </Link>
        </div>
      </section>
    </>
  );
}
