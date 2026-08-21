"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, useInView, useMotionValue, useSpring } from "framer-motion";

/* ————————————————————————————————————————————————
   Données : un projet = nom, lieu, courte légende, photos avant / après.
   Photos : /public/images/renovations/<projet>/avant|apres/
   ———————————————————————————————————————————————— */
type Projet = {
  id: string;
  nom: string;
  lieu: string;
  legende: string;
  avant: string[];
  apres: string[];
};

const PROJETS: Projet[] = [
  {
    id: "chalet",
    nom: "Le Chalet",
    lieu: "Hérault",
    legende:
      "Chalet entièrement repensé pour la location courte durée : volumes ouverts, bois chaleureux et ambiance authentique.",
    avant: [
      "/images/renovations/chalet/avant/chalet_avant_1.webp",
      "/images/renovations/chalet/avant/chalet_avant_2.webp",
      "/images/renovations/chalet/avant/chalet_avant_3.webp",
      "/images/renovations/chalet/avant/chalet_avant_4.webp",
      "/images/renovations/chalet/avant/chalet_avant_5.webp",
    ],
    apres: [
      "/images/renovations/chalet/apres/chalet_apres_1.webp",
      "/images/renovations/chalet/apres/chalet_apres_2.webp",
      "/images/renovations/chalet/apres/chalet_apres_3.webp",
      "/images/renovations/chalet/apres/chalet_apres_4.webp",
      "/images/renovations/chalet/apres/chalet_apres_5.webp",
    ],
  },
  {
    id: "appart",
    nom: "Arc-en-Ciel Scandinave",
    lieu: "Hérault",
    legende:
      "Appartement transformé dans un esprit scandinave : couleurs fraîches, mobilier épuré et lumière maximisée.",
    avant: [
      "/images/renovations/appart/avant/appart_avant_1.webp",
      "/images/renovations/appart/avant/appart_avant_2.webp",
      "/images/renovations/appart/avant/appart_avant_3.webp",
      "/images/renovations/appart/avant/appart_avant_4.webp",
      "/images/renovations/appart/avant/appart_avant_5.webp",
    ],
    apres: [
      "/images/renovations/appart/apres/appart_apres_1.webp",
      "/images/renovations/appart/apres/appart_apres_2.webp",
      "/images/renovations/appart/apres/appart_apres_3.webp",
      "/images/renovations/appart/apres/appart_apres_4.webp",
      "/images/renovations/appart/apres/appart_apres_5.webp",
    ],
  },
  {
    id: "loveroom",
    nom: "Love Room",
    lieu: "Hérault",
    legende:
      "Suite romantique conçue pour les séjours en couple : atmosphère intimiste, matériaux nobles et équipements bien-être.",
    avant: [
      "/images/renovations/loveroom/avant/loveroom_avant_1.webp",
      "/images/renovations/loveroom/avant/loveroom_avant_2.webp",
    ],
    apres: [
      "/images/renovations/loveroom/apres/loveroom_apres_1.webp",
      "/images/renovations/loveroom/apres/loveroom_apres_2.webp",
      "/images/renovations/loveroom/apres/loveroom_apres_3.webp",
      "/images/renovations/loveroom/apres/loveroom_apres_4.webp",
    ],
  },
  {
    id: "luxuryroom",
    nom: "Luxury Room",
    lieu: "Hérault",
    legende:
      "Chambre haut de gamme aux accents dorés : sophistication, confort hôtelier et finitions soignées.",
    avant: [
      "/images/renovations/luxuryroom/avant/luxuryroom_avant_1.webp",
      "/images/renovations/luxuryroom/avant/luxuryroom_avant_2.webp",
      "/images/renovations/luxuryroom/avant/luxuryroom_avant_3.webp",
    ],
    apres: [
      "/images/renovations/luxuryroom/apres/luxuryroom_apres_1.webp",
      "/images/renovations/luxuryroom/apres/luxuryroom_apres_2.webp",
      "/images/renovations/luxuryroom/apres/luxuryroom_apres_3.webp",
      "/images/renovations/luxuryroom/apres/luxuryroom_apres_4.webp",
    ],
  },
];

/* Chiffres clés (repris du site L'Oc n Keys, page investissement) */
const CHIFFRES: { valeur: number; suffixe?: string; prefixe?: string; label: string }[] = [
  { valeur: 100, suffixe: "+", label: "Projets réalisés" },
  { valeur: 98, suffixe: "%", label: "Taux de réussite" },
  { valeur: 28, suffixe: " j", label: "Délai moyen" },
  { valeur: 24, suffixe: " h", label: "Réactivité" },
];

const LIENS_RAPIDES = [
  { href: "#achat", label: "Acheter avec nous" },
  { href: "#vente", label: "Vendre mon bien" },
  { href: "/conciergerie", label: "Conciergerie courte durée" },
  { href: "#formulaire", label: "Parler de mon projet" },
];

/* ————————————————————————————————————————————————
   Compteur animé
   ———————————————————————————————————————————————— */
function Compteur({ valeur, prefixe = "", suffixe = "" }: { valeur: number; prefixe?: string; suffixe?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });
  const [affiche, setAffiche] = useState(0);

  useEffect(() => {
    if (inView) mv.set(valeur);
  }, [inView, mv, valeur]);

  useEffect(() => spring.on("change", (v) => setAffiche(Math.round(v))), [spring]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefixe}
      {reduce ? valeur : affiche}
      {suffixe}
    </span>
  );
}

/* ————————————————————————————————————————————————
   Carrousel d'un côté (avant ou après)
   ———————————————————————————————————————————————— */
function Carrousel({
  images,
  label,
  alt,
  tone,
}: {
  images: string[];
  label: string;
  alt: string;
  tone: "avant" | "apres";
}) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const reduce = useReducedMotion();

  // Repart de la première photo quand le projet change
  useEffect(() => setIndex(0), [images]);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  const multiple = images.length > 1;
  const isApres = tone === "apres";
  const src = images[index] ?? images[0];

  return (
    <figure className="group">
      <div className="mb-4 flex items-end justify-between">
        <figcaption className="flex items-center gap-3">
          <span
            aria-hidden
            className={`h-2 w-2 rounded-full ${isApres ? "bg-sable ring-4 ring-sable/30" : "bg-brume/60"}`}
          />
          <span className={`eyebrow ${isApres ? "text-foret" : "text-brume"}`}>{label}</span>
        </figcaption>
        {multiple && (
          <span className="font-display text-xs tabular-nums text-encre/50">
            {String(index + 1).padStart(2, "0")}
            <span className="mx-1 text-encre/30">/</span>
            {String(images.length).padStart(2, "0")}
          </span>
        )}
      </div>

      <div
        className={`img-card on-light relative aspect-[4/3] touch-pan-y select-none bg-sable-doux/40 ${
          isApres ? "" : "ring-1 ring-inset ring-encre/5"
        }`}
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart === null || !multiple) return;
          const diff = touchStart - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) (diff > 0 ? next : prev)();
          setTouchStart(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
        tabIndex={0}
        role="region"
        aria-roledescription="carrousel"
        aria-label={`Photos ${label.toLowerCase()}`}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={reduce ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={src}
              alt={`${alt} — ${label.toLowerCase()}, photo ${index + 1}`}
              fill
              className={`object-cover ${isApres ? "" : "saturate-[0.7] contrast-[0.95]"}`}
              sizes="(max-width: 768px) 100vw, 46vw"
              quality={75}
            />
          </motion.div>
        </AnimatePresence>

        {/* Voile bas pour la lisibilité des pastilles */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foret-nuit/45 to-transparent"
        />

        {/* Étiquette */}
        <span
          className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.28em] backdrop-blur-md ${
            isApres ? "bg-sable text-foret-nuit" : "bg-foret-nuit/60 text-creme"
          }`}
        >
          {label}
        </span>

        {multiple && (
          <>
            {/* Flèches */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
              <button
                type="button"
                onClick={prev}
                aria-label="Photo précédente"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-creme/90 text-foret shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-creme"
              >
                <ChevronLeft size={20} aria-hidden />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Photo suivante"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-creme/90 text-foret shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-creme"
              >
                <ChevronRight size={20} aria-hidden />
              </button>
            </div>

            {/* Pastilles */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Photo ${i + 1}`}
                  aria-current={i === index}
                  className="flex h-6 w-6 items-center justify-center"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-sable" : "w-1.5 bg-creme/70 hover:bg-creme"
                    }`}
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </figure>
  );
}

/* ————————————————————————————————————————————————
   Section complète
   ———————————————————————————————————————————————— */
export default function RenovationsGallery() {
  const [active, setActive] = useState(0);
  const projet = PROJETS[active];
  const reduce = useReducedMotion();

  const prevProjet = () => setActive((a) => (a - 1 + PROJETS.length) % PROJETS.length);
  const nextProjet = () => setActive((a) => (a + 1) % PROJETS.length);

  return (
    <section id="renovations" className="scroll-mt-24 bg-creme py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* En-tête */}
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow rule-sable text-foret">Nos rénovations</p>
            <h2 className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
              Avant, après&nbsp;: le potentiel d&apos;un bien, révélé.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-encre/75 md:pb-1">
            Du premier achat au plus ambitieux, nous pilotons les travaux avec
            nos architectes et artisans partenaires — et nous vous montrons le
            résultat. Quelques transformations signées Nommanest.
          </p>
        </div>

        {/* Chiffres clés */}
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-foret/10 bg-foret/10 shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)] lg:grid-cols-4">
          {CHIFFRES.map((c) => (
            <div key={c.label} className="bg-white px-6 py-7 md:px-8 md:py-9">
              <dt className="eyebrow text-encre/50">{c.label}</dt>
              <dd className="font-display mt-3 text-4xl leading-none text-foret md:text-5xl">
                <Compteur valeur={c.valeur} prefixe={c.prefixe} suffixe={c.suffixe} />
              </dd>
            </div>
          ))}
        </dl>

        {/* Sélecteur de projet */}
        <div className="mt-16 flex flex-col gap-6 border-y border-foret/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div role="tablist" aria-label="Projets rénovés" className="flex flex-wrap gap-2">
            {PROJETS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`on-light rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 ${
                  i === active
                    ? "bg-foret text-creme shadow-[0_10px_24px_-12px_rgba(0,70,55,0.6)]"
                    : "border border-foret/20 text-foret hover:border-foret hover:bg-foret/5"
                }`}
              >
                {p.nom}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="font-display text-sm tabular-nums text-encre/50">
              {String(active + 1).padStart(2, "0")}
              <span className="mx-1.5 text-encre/30">/</span>
              {String(PROJETS.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={prevProjet}
              aria-label="Projet précédent"
              className="on-light flex h-11 w-11 items-center justify-center rounded-full border border-foret/20 text-foret transition hover:border-foret hover:bg-foret hover:text-creme"
            >
              <ChevronLeft size={18} aria-hidden />
            </button>
            <button
              type="button"
              onClick={nextProjet}
              aria-label="Projet suivant"
              className="on-light flex h-11 w-11 items-center justify-center rounded-full border border-foret/20 text-foret transition hover:border-foret hover:bg-foret hover:text-creme"
            >
              <ChevronRight size={18} aria-hidden />
            </button>
          </div>
        </div>

        {/* Projet actif */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={projet.id}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
              <h3 className="font-display text-2xl text-foret">{projet.nom}</h3>
              <p className="eyebrow text-encre/50">{projet.lieu}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <Carrousel images={projet.avant} label="Avant" alt={projet.nom} tone="avant" />
              <Carrousel images={projet.apres} label="Après" alt={projet.nom} tone="apres" />
            </div>

            <p className="mt-8 max-w-2xl border-l-2 border-sable pl-5 text-sm leading-relaxed text-encre/70">
              {projet.legende}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Liens rapides */}
        <div className="mt-16 grid gap-8 border-t border-foret/10 pt-10 md:grid-cols-[1fr_2fr] md:items-start">
          <div>
            <p className="eyebrow text-foret">Liens rapides</p>
            <p className="mt-3 text-sm leading-relaxed text-encre/65">
              Un projet de rénovation commence toujours par le bon bien — ou la
              bonne vente.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {LIENS_RAPIDES.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="on-light group/lien flex items-center justify-between gap-4 rounded-2xl border border-foret/10 bg-white px-5 py-4 text-sm font-medium text-foret shadow-[0_12px_32px_-24px_rgba(0,51,42,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:border-foret/40"
                >
                  {l.label}
                  <ArrowUpRight
                    size={18}
                    aria-hidden
                    className="shrink-0 text-sable transition-transform duration-300 group-hover/lien:translate-x-0.5 group-hover/lien:-translate-y-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
