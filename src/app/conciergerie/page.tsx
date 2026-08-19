import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  LineChart,
  DoorOpen,
  MessagesSquare,
  WashingMachine,
  Wrench,
  Gift,
  Check,
  Minus,
  ShieldCheck,
  Banknote,
  FileText,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { NestDivider, NestWatermark } from "@/components/NestMotif";

export const metadata: Metadata = {
  title: "Conciergerie de location courte durée à Nantes",
  description:
    "Conciergerie et services aux propriétaires à Nantes : annonces, voyageurs, ménage, suivi du logement. Deux formules sans frais fixes — 23 % ou 25 % — et vos revenus versés directement.",
};

const PILIERS = [
  {
    icon: Sparkles,
    title: "Annonce optimisée",
    text: "Photos, textes et positionnement travaillés pour maximiser l'impact de votre annonce sur Airbnb et Booking.",
  },
  {
    icon: TrendingUp,
    title: "Boost du référencement",
    text: "Mise à jour et optimisation continues pour garder votre logement visible et bien classé sur les plateformes.",
  },
  {
    icon: LineChart,
    title: "Yield management",
    text: "Grille tarifaire ajustée selon la saison, les événements et la demande, pour un taux d'occupation optimal.",
  },
  {
    icon: DoorOpen,
    title: "Accueil voyageurs",
    text: "Check-in et check-out organisés de bout en bout, à distance ou en personne, sans contrainte pour vous.",
  },
  {
    icon: MessagesSquare,
    title: "Communication 7 j/7",
    text: "Assistance des voyageurs avant, pendant et après chaque séjour — et gestion des avis pour votre e-réputation.",
  },
  {
    icon: WashingMachine,
    title: "Ménage & linge",
    text: "Nettoyage professionnel entre chaque séjour et gestion complète du linge, refacturés au réel, sans marge cachée.",
  },
  {
    icon: Wrench,
    title: "Suivi du logement",
    text: "Coordination des interventions techniques et suivi opérationnel pour assurer la continuité de l'exploitation.",
  },
  {
    icon: Gift,
    title: "Kit de bienvenue",
    text: "Un accueil soigné et personnalisé qui marque les voyageurs — et se lit dans les commentaires.",
  },
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

export default function ConciergeriePage() {
  return (
    <>
      {/* ————— Héro ————— */}
      <section className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden bg-foret-nuit pb-14 pt-32 text-creme md:pt-36">
        <NestWatermark className="pointer-events-none absolute -right-44 -top-16 w-[680px] text-foret-clair opacity-25" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.15fr_1fr] md:gap-16 md:px-8">
          <div>
            <Reveal>
              <p className="eyebrow text-sable">
                Conciergerie &amp; services aux propriétaires
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="font-display mt-6 text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl">
                Votre location courte durée, sans la charge mentale.
              </h1>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-creme/85 md:text-lg">
                De l&apos;annonce au reporting, Nommanest assure l&apos;assistance
                opérationnelle complète de votre logement à Nantes. Vous restez
                propriétaire de tout — y compris de vos revenus, versés
                directement sur votre compte.
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#formules" className="btn btn-sable">
                  Voir les formules
                </a>
                <a href="#formulaire" className="btn btn-ghost-light">
                  Demander un audit gratuit
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <figure className="relative mx-auto max-w-md md:max-w-none">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-[1.7rem] border border-sable/35" />
              <div className="img-card relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/logement-salon-vert.jpg"
                  alt="Salon contemporain au canapé vert forêt, baigné de lumière naturelle"
                  fill
                  priority
                  quality={90}
                  className="kenburns object-cover"
                  sizes="(max-width: 768px) 100vw, 44vw"
                />
              </div>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-creme/50">
                Un logement accompagné
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ————— Approche : commission uniquement ————— */}
      <section className="bg-creme py-24 md:py-32">
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
                text: "Nest Standard à 23 % et Nomma Performance à 25 %, détaillées service par service, noir sur blanc.",
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

      {/* ————— Les 8 piliers ————— */}
      <section className="relative overflow-hidden bg-foret py-24 text-creme md:py-32">
        <NestWatermark className="pointer-events-none absolute -left-40 -top-16 w-[600px] text-foret-clair opacity-25" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-sable text-sable">Ce que nous prenons en charge</p>
            <h2 className="font-display mt-8 text-3xl leading-snug md:text-4xl">
              Huit piliers, un logement qui tourne tout seul.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {PILIERS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 0.08}>
                <div>
                  <p.icon size={24} className="text-sable" aria-hidden />
                  <h3 className="font-display mt-4 text-lg">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-creme/70">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Formules ————— */}
      <section id="formules" className="scroll-mt-24 bg-creme py-24 md:py-32">
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
                <NestWatermark className="pointer-events-none absolute -right-24 -bottom-20 w-[380px] text-foret-clair opacity-30" />
                <div className="relative">
                  <p className="eyebrow text-sable">Nomma Performance</p>
                  <p className="font-display mt-6 text-5xl">
                    25&nbsp;<span className="text-3xl">%</span>
                  </p>
                  <p className="mt-1 text-sm text-creme/60">des revenus locatifs générés</p>
                  <p className="mt-6 text-sm leading-relaxed text-creme/80">
                    L&apos;accompagnement complet, pour une tranquillité
                    totale&nbsp;: conseil, assurance dédiée, yield management en
                    continu et suivi proactif de votre bien.
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
                      Performance · 25 %
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

      {/* ————— Formulaire ————— */}
      <section id="formulaire" className="relative scroll-mt-24 overflow-hidden bg-foret-nuit py-24 text-creme md:py-32">
        <NestWatermark className="pointer-events-none absolute -right-32 -top-14 w-[540px] text-foret-clair opacity-25" />
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
