import { MapPin, Quote } from "lucide-react";
import Reveal from "./Reveal";

/** Avis transmis par le client (texte tel quel). */
export const AVIS = [
  {
    id: "nantes-appartement",
    texte:
      "Un service au top avec NommaNest ! Nous avons confié la gestion de notre appartement à Nantes à cette conciergerie et nous sommes ravis. La communication est fluide, les voyageurs sont accueillis avec soin et le logement est toujours impeccable. C’est un vrai soulagement de pouvoir déléguer en toute confiance. Nous recommandons NommaNest sans hésiter !",
    auteur: "Propriétaires d’un appartement",
    lieu: "Nantes",
  },
  {
    id: "retz-maison",
    texte:
      "Très belle expérience avec NommaNest pour la gestion de notre maison située dans le Pays de Retz. L’équipe est réactive, sérieuse et professionnelle. Tout est parfaitement organisé, de l’accueil des voyageurs au ménage après chaque séjour. Nous pouvons profiter de notre temps libre sans nous soucier de la gestion de notre location. Merci à NommaNest pour cet accompagnement de qualité !",
    auteur: "Propriétaires d’une maison",
    lieu: "Pays de Retz",
  },
  {
    id: "confiance",
    texte:
      "Nous sommes très satisfaits des services de NommaNest ! Nous recherchions une conciergerie de confiance pour simplifier la gestion de notre bien et nous avons trouvé une équipe à l’écoute, disponible et soucieuse du détail. Le suivi est sérieux et les prestations sont impeccables. Nous recommandons vivement NommaNest aux propriétaires de Nantes et du Pays de Retz qui souhaitent confier leur bien à des professionnels.",
    auteur: "Propriétaires accompagnés",
    lieu: "Nantes & Pays de Retz",
  },
] as const;

export default function Testimonials({
  dark = false,
  className,
  premier,
}: {
  dark?: boolean;
  className?: string;
  /** id de l'avis à afficher en premier (ex. l'avis Pays de Retz sur la page locale) */
  premier?: (typeof AVIS)[number]["id"];
}) {
  const avis = premier
    ? [...AVIS].sort((a, b) => Number(b.id === premier) - Number(a.id === premier))
    : AVIS;
  const bg = className ?? (dark ? "bg-foret" : "bg-sable-doux/40");

  return (
    <section
      aria-labelledby="avis-title"
      className={`relative overflow-hidden py-24 md:py-32 ${bg} ${dark ? "text-creme" : ""}`}
    >
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className={`eyebrow rule-sable rule-sable-center ${dark ? "text-sable" : "text-foret"}`}>
            Ils nous ont confié leur bien
          </p>
          <h2
            id="avis-title"
            className={`font-display mt-8 text-3xl md:text-4xl ${dark ? "" : "text-encre"}`}
          >
            La parole à nos propriétaires
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {avis.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.1}>
              <figure
                className={`flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1.5 ${
                  dark
                    ? "border border-creme/15 bg-foret-nuit/45"
                    : "border border-foret/10 bg-white shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)]"
                }`}
              >
                <Quote
                  aria-hidden
                  size={30}
                  className={dark ? "fill-sable text-sable" : "fill-foret/20 text-foret/20"}
                />
                <blockquote
                  className={`mt-5 flex-1 text-[0.95rem] leading-relaxed ${
                    dark ? "text-creme/85" : "text-encre/75"
                  }`}
                >
                  {a.texte}
                </blockquote>
                <figcaption
                  className={`mt-7 border-t pt-5 ${dark ? "border-creme/15" : "border-foret/10"}`}
                >
                  <p className={`font-display text-base ${dark ? "text-creme" : "text-encre"}`}>
                    {a.auteur}
                  </p>
                  <p
                    className={`mt-1 flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] ${
                      dark ? "text-sable/80" : "text-foret/70"
                    }`}
                  >
                    <MapPin size={12} aria-hidden />
                    {a.lieu}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
