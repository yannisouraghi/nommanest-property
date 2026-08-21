import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Landmark,
  Search,
  Hammer,
  KeyRound,
  Camera,
  Globe,
  Users,
  ClipboardList,
  Handshake,
  ShieldCheck,
  BadgeCheck,
  Building2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import InvestFormSwitcher from "@/components/InvestFormSwitcher";
import RenovationsGallery from "@/components/RenovationsGallery";
import { NestWatermark } from "@/components/NestMotif";

export const metadata: Metadata = {
  title: "Accompagnement immobilier à Nantes — achat & vente",
  description:
    "Mandat de recherche pour acheter le bon bien, mandat de vente exclusif pour vendre au juste prix. Honoraires dus uniquement en cas de succès, chez le notaire.",
};

const OFFRE_ACHAT = [
  {
    icon: Compass,
    title: "Analyse & stratégie",
    text: "Étude de votre profil, de vos objectifs et de votre capacité d'investissement pour définir la stratégie la plus adaptée.",
  },
  {
    icon: Landmark,
    title: "Financement & négociation",
    text: "Business plan bancaire sur mesure et mise en relation avec nos courtiers partenaires pour défendre votre dossier.",
  },
  {
    icon: Search,
    title: "Recherche du bien",
    text: "Mandat de recherche actif sur tout le marché, y compris off-market, pour des opportunités rentables et alignées avec votre projet.",
  },
  {
    icon: Hammer,
    title: "Travaux & valorisation",
    text: "Étude du potentiel, plans d'aménagement, estimation budgétaire et exécution avec nos architectes et artisans partenaires.",
  },
  {
    icon: KeyRound,
    title: "Mise en location",
    text: "Courte durée, longue durée ou colocation : nous vous accompagnons jusqu'à l'exploitation, avec notre conciergerie si vous le souhaitez.",
  },
];

const OFFRE_VENTE = [
  { icon: Camera, text: "Mise en valeur du bien : photos professionnelles, home staging, annonce soignée" },
  { icon: Globe, text: "Diffusion massive sur plus de 70 plateformes immobilières" },
  { icon: BadgeCheck, text: "Visibilité maximale : remontée intelligente pour garder l'annonce en tête" },
  { icon: Users, text: "Accès direct à notre réseau d'acquéreurs et d'investisseurs qualifiés" },
  { icon: ClipboardList, text: "Organisation complète des visites : planification, accompagnement, suivi" },
  { icon: Handshake, text: "Reporting clair après chaque visite et retours acheteurs transparents" },
];

const PROFILS = [
  {
    title: "L'investisseur",
    text: "Débutant ou expérimenté, à la recherche de rentabilité, de sécurité et d'opportunités à forte valeur ajoutée.",
  },
  {
    title: "Le particulier",
    text: "À la recherche de sa résidence principale ou d'une résidence secondaire, bien accompagné du premier rendez-vous au notaire.",
  },
  {
    title: "L'expatrié ou en mobilité",
    text: "Qui souhaite investir ou vendre à distance, sans contrainte, avec un interlocuteur unique sur place.",
  },
  {
    title: "Le propriétaire vendeur",
    text: "Qui veut toucher rapidement des acheteurs qualifiés — notre spécialisation locative attire les investisseurs.",
  },
  {
    title: "Le propriétaire loueur",
    text: "Dont le bien est destiné à la courte durée et qui veut en augmenter la rentabilité via notre conciergerie.",
  },
  {
    title: "L'entrepreneur",
    text: "Ou l'entreprise en quête d'un local commercial ou professionnel adapté à son activité.",
  },
];

export default function InvestissementPage() {
  return (
    <>
      {/* ————— Héro ————— */}
      <section className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden bg-foret-nuit pb-14 pt-32 text-creme md:pt-36">
        <NestWatermark className="pointer-events-none absolute -left-24 -top-20 w-[1250px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:gap-12 md:px-8 lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-sable">
                Accompagnement immobilier — Nantes &amp; agglomération
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="font-display mt-6 text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl">
                Acheter, vendre&nbsp;: le même soin du détail.
              </h1>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-creme/85 md:text-lg">
                De la recherche du bien à la signature chez le notaire, un seul
                interlocuteur défend vos intérêts — et nos honoraires ne sont
                dus qu&apos;en cas de succès.
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#achat" className="btn btn-sable">
                  J&apos;achète
                </a>
                <a href="#vente" className="btn btn-ghost-light">
                  Je vends
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <figure className="relative mx-auto w-full max-w-md md:max-w-none lg:-mr-14">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-[1.7rem] border border-sable/35" />
              <div className="img-card relative h-[52svh] w-full overflow-hidden md:h-[64svh]">
                <Image
                  src="/images/nantes-chateau.jpg"
                  alt="Le château des ducs de Bretagne et ses douves, à Nantes"
                  fill
                  priority
                  quality={90}
                  className="kenburns object-cover object-[68%_38%]"
                  sizes="(max-width: 768px) 100vw, 44vw"
                />
              </div>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-creme/50">
                Château des ducs de Bretagne — Nantes
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ————— Triple expertise ————— */}
      <section className="bg-creme py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1.2fr_1fr] md:items-center md:px-8">
          <div>
            <Reveal>
              <p className="eyebrow rule-sable text-foret">Pourquoi Nommanest</p>
              <h2 className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
                Une triple expertise&nbsp;: achat, vente et location courte
                durée.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-encre/75">
                Parce que nous exploitons des logements en courte durée toute
                l&apos;année, nous savons exactement ce qu&apos;un bien peut
                rapporter — et ce qu&apos;il vaut. Cette vision
                d&apos;exploitant fait la différence, à l&apos;achat comme à la
                vente.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <ul className="mt-8 space-y-4 text-sm leading-relaxed text-encre/80">
                <li className="flex gap-3">
                  <Building2 size={18} className="mt-0.5 shrink-0 text-foret" aria-hidden />
                  Un réseau de partenaires experts&nbsp;: architectes, courtiers,
                  artisans, diagnostiqueurs, syndics.
                </li>
                <li className="flex gap-3">
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-foret" aria-hidden />
                  Un interlocuteur unique, de la première réflexion à la
                  concrétisation.
                </li>
                <li className="flex gap-3">
                  <BadgeCheck size={18} className="mt-0.5 shrink-0 text-foret" aria-hidden />
                  Une spécialisation unique dans les biens à vocation locative.
                </li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="img-card relative aspect-[4/5]">
              <Image
                src="/images/logement-fauteuil-fenetre.jpg"
                alt="Fauteuil ancien devant une porte-fenêtre dans un appartement lumineux"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— ACHAT ————— */}
      <section id="achat" className="relative scroll-mt-24 overflow-hidden bg-foret py-24 text-creme md:py-32">
        <NestWatermark className="pointer-events-none absolute -right-24 -top-14 w-[980px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-sable text-sable">Acheter avec Nommanest</p>
            <h2 className="font-display mt-8 text-3xl leading-snug md:text-4xl">
              Un mandat de recherche clé en main, payé uniquement au succès.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-creme/80">
              Non exclusif&nbsp;: vous restez libre de chercher de votre côté.
              Notre rémunération n&apos;est due qu&apos;à la signature chez le
              notaire.
            </p>
          </Reveal>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {OFFRE_ACHAT.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <li>
                  <s.icon size={24} className="text-sable" aria-hidden />
                  <p className="eyebrow mt-4 text-creme/50">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display mt-1 text-lg">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-creme/70">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.2}>
            <p className="mt-12 border-l-2 border-sable pl-5 text-sm leading-relaxed text-creme/75">
              Modulable selon vos besoins&nbsp;: premier achat, investissement
              locatif ou local professionnel — nous nous adaptons à votre
              projet et à votre rythme.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— Nos rénovations (avant / après) ————— */}
      <RenovationsGallery />

      {/* ————— Respiration : Loire ————— */}
      <section aria-hidden className="relative h-[46vh] overflow-hidden md:h-[56vh]">
        <Image
          src="/images/nantes-loire-sunset.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foret-nuit/30" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-foret-nuit/70 to-transparent" />
        <p className="eyebrow hero-text absolute bottom-6 right-6 text-creme/90">
          La Loire au couchant — Nantes
        </p>
      </section>

      {/* ————— VENTE ————— */}
      <section id="vente" className="scroll-mt-24 bg-creme py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-14 md:grid-cols-[1fr_1.25fr] md:items-start">
            <div className="md:sticky md:top-28">
              <Reveal>
                <p className="eyebrow rule-sable text-foret">Vendre avec Nommanest</p>
                <h2 className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
                  Un mandat exclusif, une commission uniquement à la vente
                  définitive.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-encre/75">
                  L&apos;exclusivité est un gage de sérieux&nbsp;: elle nous
                  permet d&apos;engager tous les moyens — photos, diffusion,
                  réseau d&apos;investisseurs — pour vendre vite et au juste
                  prix. Vous ne payez qu&apos;à la signature de l&apos;acte.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="img-card relative mt-10 aspect-[5/4]">
                  <Image
                    src="/images/immobilier-cles.jpg"
                    alt="Remise des clés d'un logement à son nouveau propriétaire"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </Reveal>
            </div>
            <div className="space-y-5">
              {OFFRE_VENTE.map((s, i) => (
                <Reveal key={s.text} delay={i * 0.06}>
                  <div className="flex items-start gap-5 rounded-2xl border border-foret/10 bg-white p-6 shadow-[0_12px_32px_-20px_rgba(0,51,42,0.25)] transition-transform duration-500 hover:-translate-y-1">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foret text-sable">
                      <s.icon size={18} aria-hidden />
                    </span>
                    <p className="pt-1.5 text-sm leading-relaxed text-encre/80">{s.text}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.3}>
                <p className="border-l-2 border-foret pl-5 text-sm leading-relaxed text-encre/70">
                  Et jusqu&apos;au bout&nbsp;: diagnostics, démarches
                  administratives, aspects juridiques et financiers — nous vous
                  accompagnons jusqu&apos;à la signature de l&apos;acte
                  authentique.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Pour qui ————— */}
      <section className="bg-sable-doux/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow rule-sable rule-sable-center text-foret">Pour qui&nbsp;?</p>
            <h2 className="font-display mt-8 text-3xl text-encre md:text-4xl">
              Chaque projet a son nid
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROFILS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-3xl border border-foret/10 bg-white p-7 shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)] transition-transform duration-500 hover:-translate-y-1.5">
                  <h3 className="font-display text-lg text-foret">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-encre/70">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Formulaire ————— */}
      <section id="formulaire" className="relative scroll-mt-24 overflow-hidden bg-foret-nuit py-24 text-creme md:py-32">
        <NestWatermark className="pointer-events-none absolute -left-20 -bottom-10 w-[880px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.3fr] md:px-8">
          <div>
            <Reveal>
              <p className="eyebrow rule-sable text-sable">Votre projet</p>
              <h2 className="font-display mt-8 text-3xl leading-snug md:text-4xl">
                Dites-nous où vous en êtes, on s&apos;occupe de la suite.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-creme/80">
                Achat ou vente, un premier échange suffit pour cadrer votre
                projet et vous dire, honnêtement, ce que nous pouvons vous
                apporter. Réponse sous 24&nbsp;h.
              </p>
              <p className="mt-8 text-sm text-creme/60">
                En direct&nbsp;:{" "}
                <a href="tel:+33751263490" className="text-sable underline-offset-4 hover:underline">
                  07 51 26 34 90
                </a>
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <InvestFormSwitcher />
          </Reveal>
        </div>
      </section>

      {/* ————— Lien croisé ————— */}
      <section className="bg-creme py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center md:px-8">
          <p className="text-sm uppercase tracking-[0.2em] text-encre/60">
            Votre futur bien se louera en courte durée&nbsp;?
          </p>
          <Link href="/conciergerie" className="font-display text-2xl text-foret underline-offset-8 hover:underline">
            Confiez-le à notre conciergerie →
          </Link>
        </div>
      </section>
    </>
  );
}
