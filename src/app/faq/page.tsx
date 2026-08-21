import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Phone, ScrollText, Home, Landmark, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { NestWatermark } from "@/components/NestMotif";

export const metadata: Metadata = {
  title: "FAQ réglementation — location courte durée à Nantes",
  description:
    "Déclaration en mairie, numéro d'enregistrement, 120 nuits, changement d'usage, taxe de séjour, fiscalité : les réponses aux questions réglementaires sur la location courte durée à Nantes.",
};

type FaqItem = { q: string; a: string };
type FaqGroup = {
  icon: typeof ScrollText;
  theme: string;
  items: FaqItem[];
};

const FAQ_GROUPS: FaqGroup[] = [
  {
    icon: ScrollText,
    theme: "Déclaration & enregistrement",
    items: [
      {
        q: "Dois-je déclarer mon logement avant de le louer en courte durée ?",
        a: "Oui. À Nantes comme dans toute la France, tout meublé de tourisme doit être déclaré et obtenir un numéro d'enregistrement, délivré via le téléservice de Nantes Métropole. Ce numéro doit figurer sur toutes vos annonces (Airbnb, Booking, etc.) : sans lui, les plateformes peuvent retirer votre annonce et vous vous exposez à une amende.",
      },
      {
        q: "Qu'est-ce que la loi « Le Meur » change pour les propriétaires ?",
        a: "La loi du 19 novembre 2024, dite « anti-Airbnb », a durci le cadre de la location meublée touristique : enregistrement généralisé à toutes les communes, abattements fiscaux revus à la baisse, exigences de performance énergétique et pouvoirs renforcés pour les mairies et les copropriétés. La plupart de ces mesures sont pleinement applicables depuis 2025-2026 — d'où l'importance de vérifier votre situation avant de vous lancer.",
      },
      {
        q: "Le classement « meublé de tourisme » (étoiles) est-il obligatoire ?",
        a: "Non, le classement de 1 à 5 étoiles est une démarche volontaire. Il reste intéressant : il rassure les voyageurs, ouvre droit à un abattement fiscal plus favorable en micro-BIC et à un tarif de taxe de séjour fixé par étoile plutôt qu'au pourcentage.",
      },
    ],
  },
  {
    icon: Home,
    theme: "Résidence principale & secondaire",
    items: [
      {
        q: "Combien de nuits puis-je louer ma résidence principale ?",
        a: "À Nantes, une résidence principale peut être louée en meublé de tourisme jusqu'à 120 nuits par an, après enregistrement. La loi permet désormais aux communes d'abaisser ce plafond à 90 nuits, mais Nantes a conservé la limite de 120 nuits à ce jour. Au-delà, le logement n'est plus considéré comme votre résidence principale.",
      },
      {
        q: "Et pour une résidence secondaire ou un investissement locatif ?",
        a: "Louer une résidence secondaire en courte durée à Nantes nécessite une autorisation préalable de changement d'usage délivrée par la métropole, avec, selon les secteurs et la surface, une obligation de compensation (transformer une surface équivalente en logement). C'est le point le plus structurant d'un projet d'investissement en courte durée : nous l'étudions systématiquement lors de l'audit.",
      },
      {
        q: "Mon logement doit-il respecter un niveau de performance énergétique (DPE) ?",
        a: "Oui, c'est l'une des nouveautés de la loi Le Meur : les logements nouvellement mis en location touristique après changement d'usage doivent présenter un DPE suffisant (au minimum classe E, puis classe D exigée pour l'ensemble des meublés de tourisme concernés à horizon 2034). La résidence principale louée ponctuellement n'est pas visée par cette exigence.",
      },
      {
        q: "Puis-je louer en courte durée si mon bien est en copropriété ?",
        a: "Dans la plupart des cas oui, mais il faut vérifier le règlement de copropriété : une clause d'habitation bourgeoise exclusive peut interdire l'activité. Depuis la loi Le Meur, les copropriétés peuvent plus facilement encadrer la location touristique et vous devez informer le syndic de votre activité de meublé de tourisme. Une lecture attentive du règlement s'impose avant tout projet.",
      },
    ],
  },
  {
    icon: Landmark,
    theme: "Taxe de séjour & fiscalité",
    items: [
      {
        q: "Qui collecte la taxe de séjour ?",
        a: "Les principales plateformes (Airbnb, Booking…) collectent et reversent automatiquement la taxe de séjour de Nantes Métropole pour les réservations passées chez elles. Pour les locations en direct, c'est à vous de la collecter auprès des voyageurs et de la déclarer via le portail taxe de séjour de la métropole.",
      },
      {
        q: "Comment sont imposés les revenus de la location courte durée ?",
        a: "Les loyers relèvent des bénéfices industriels et commerciaux (BIC). Au régime micro-BIC, l'abattement est désormais de 30 % pour un meublé de tourisme non classé (plafond de recettes de 15 000 €) et de 50 % pour un meublé classé (plafond de 77 700 €). Au-delà, ou sur option, le régime réel permet de déduire les charges et amortissements — souvent plus avantageux. Un échange avec un expert-comptable reste la meilleure façon de choisir.",
      },
      {
        q: "Dois-je payer la CFE ou m'immatriculer ?",
        a: "L'activité de loueur en meublé nécessite une immatriculation (obtention d'un numéro SIRET via le guichet unique de l'INPI), même pour un particulier non professionnel. La cotisation foncière des entreprises (CFE) peut être due selon votre situation, avec des cas d'exonération, notamment pour la location ponctuelle de la résidence principale.",
      },
    ],
  },
  {
    icon: ShieldCheck,
    theme: "Assurance & accompagnement",
    items: [
      {
        q: "Mon assurance habitation couvre-t-elle la location courte durée ?",
        a: "Pas nécessairement : la plupart des contrats classiques excluent l'activité de location meublée touristique. Il faut prévenir votre assureur et adapter votre contrat (garantie propriétaire non-occupant, extension location saisonnière). Les garanties proposées par les plateformes sont un filet complémentaire, pas un substitut.",
      },
      {
        q: "Nommanest peut-il m'accompagner dans ces démarches ?",
        a: "Oui. L'enregistrement, le changement d'usage, la taxe de séjour ou le classement font partie des sujets que nous balisons avec vous : avec la formule Nomma Performance, nous vous guidons pas à pas dans les démarches réglementaires, et nous vous orientons vers les bons interlocuteurs (expert-comptable, syndic, métropole) quand le sujet dépasse notre rôle.",
      },
    ],
  },
];

const FAQ_FLAT = FAQ_GROUPS.flatMap((g) => g.items);

export default function FaqPage() {
  return (
    <>
      {/* ————— Héro ————— */}
      <section className="relative overflow-hidden bg-foret-nuit pb-16 pt-36 text-creme md:pb-20">
        <NestWatermark className="pointer-events-none absolute -right-24 -top-20 w-[1100px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-sable">FAQ — Réglementation</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="font-display mt-6 max-w-3xl text-[2.4rem] leading-[1.1] sm:text-5xl">
              La location courte durée à Nantes, en toute légalité.
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-creme/85 md:text-lg">
              Enregistrement, plafond de nuits, changement d&apos;usage, taxe de
              séjour, fiscalité&nbsp;: les réponses claires aux questions que se
              posent les propriétaires nantais avant de se lancer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— Questions par thème ————— */}
      <section aria-label="Questions réglementaires" className="bg-sable-doux/40 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          {FAQ_GROUPS.map((group, gi) => (
            <div key={group.theme} className={gi === 0 ? "" : "mt-16"}>
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foret text-sable">
                    <group.icon size={20} aria-hidden />
                  </span>
                  <h2 className="font-display text-2xl text-encre">{group.theme}</h2>
                </div>
              </Reveal>
              <div className="mt-7 space-y-4">
                {group.items.map((item, i) => (
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
            </div>
          ))}

          <Reveal delay={0.15}>
            <p className="mt-14 rounded-2xl border border-foret/10 bg-white/60 px-6 py-5 text-xs leading-relaxed text-encre/60">
              Informations données à titre indicatif, à jour en août 2026. La
              réglementation de la location courte durée évolue régulièrement et
              peut varier selon la commune&nbsp;: pour votre situation
              particulière, rapprochez-vous de Nantes Métropole, d&apos;un
              expert-comptable ou d&apos;un conseil juridique.
            </p>
          </Reveal>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ_FLAT.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            }),
          }}
        />
      </section>

      {/* ————— CTA final ————— */}
      <section className="relative overflow-hidden bg-foret-nuit py-24 text-creme md:py-28">
        <NestWatermark className="pointer-events-none absolute -left-24 -bottom-10 w-[900px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl leading-snug md:text-4xl">
              Une question sur votre projet&nbsp;?
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-creme/80">
              Chaque logement est un cas particulier. Lors de l&apos;échange
              découverte, nous faisons le point sur la réglementation applicable
              à votre bien — gratuitement et sans engagement.
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
