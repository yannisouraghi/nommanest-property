"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Star,
  Check,
  TrendingUp,
  Sparkles,
  KeyRound,
  Wrench,
} from "lucide-react";

/*
 * Vitrine des services conciergerie : grille de cartes dont les
 * illustrations (petites interfaces stylisées) s'animent à l'entrée
 * dans le viewport — même esprit que la référence Patrimoine du Velay,
 * redessiné aux couleurs Nommanest.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

const cardV: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, staggerChildren: 0.09, delayChildren: 0.25 },
  },
};

const popV: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE } },
};

const riseV: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const slideLeftV: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
};

const slideRightV: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
};

const growV: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.6, ease: EASE } },
};

function SkeletonLine({ className = "" }: { className?: string }) {
  return <span className={`block rounded-full bg-encre/12 ${className}`} />;
}

/* — 1. Annonce optimisée : mini-fiche avec étoiles — */
function IllusAnnonce() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <motion.div variants={riseV} className="absolute w-28 -translate-x-20 scale-90 rounded-xl bg-white/55 p-2">
        <span className="block h-12 rounded-lg bg-encre/8" />
        <SkeletonLine className="mt-2 h-1.5 w-3/4" />
      </motion.div>
      <motion.div variants={riseV} className="absolute w-28 translate-x-20 scale-90 rounded-xl bg-white/55 p-2">
        <span className="block h-12 rounded-lg bg-encre/8" />
        <SkeletonLine className="mt-2 h-1.5 w-2/3" />
      </motion.div>
      <motion.div variants={riseV} className="relative w-36 rounded-xl bg-white p-2.5 shadow-[0_16px_34px_-16px_rgba(0,51,42,0.4)]">
        <span className="block h-16 rounded-lg bg-gradient-to-br from-foret/25 via-foret/45 to-foret/70" />
        <div className="mt-2 flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span key={i} variants={popV}>
              <Star size={11} className="fill-[#f0c869] text-[#f0c869]" aria-hidden />
            </motion.span>
          ))}
        </div>
        <SkeletonLine className="mt-2 h-1.5 w-5/6" />
        <SkeletonLine className="mt-1.5 h-1.5 w-1/2" />
        <motion.span
          variants={popV}
          className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-foret text-sable shadow-md"
        >
          <Sparkles size={13} aria-hidden />
        </motion.span>
      </motion.div>
    </div>
  );
}

/* — 2. Communication voyageurs : bulles de conversation — */
function IllusChat() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5 px-8">
      <motion.div variants={slideLeftV} className="mr-auto flex max-w-[75%] items-start gap-2">
        <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-encre/15" />
        <div className="rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 shadow-sm">
          <SkeletonLine className="h-1.5 w-24" />
          <SkeletonLine className="mt-1.5 h-1.5 w-16" />
        </div>
      </motion.div>
      <motion.div variants={slideRightV} className="ml-auto rounded-2xl rounded-tr-sm bg-foret px-3.5 py-2.5 shadow-md">
        <span className="block h-1.5 w-20 rounded-full bg-creme/70" />
        <span className="mt-1.5 block h-1.5 w-12 rounded-full bg-creme/45" />
      </motion.div>
      <motion.div variants={slideLeftV} className="mr-auto ml-8 flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 shadow-sm">
        {[0, 0.18, 0.36].map((d) => (
          <motion.span
            key={d}
            className="h-1.5 w-1.5 rounded-full bg-encre/35"
            animate={{ y: [0, -3.5, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: d, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* — 3. Boost du référencement : classement qui remonte — */
function IllusRank() {
  return (
    <div className="flex h-full flex-col justify-center gap-2 px-9">
      <motion.div
        variants={riseV}
        className="relative flex items-center gap-2.5 rounded-xl border-2 border-foret bg-white px-3 py-2.5 shadow-[0_12px_26px_-14px_rgba(0,51,42,0.45)]"
      >
        <span className="h-7 w-7 shrink-0 rounded-lg bg-gradient-to-br from-foret/30 to-foret/60" />
        <div className="flex-1">
          <SkeletonLine className="h-1.5 w-3/4 !bg-foret/40" />
          <SkeletonLine className="mt-1.5 h-1.5 w-1/2" />
        </div>
        <motion.span
          variants={popV}
          className="absolute -right-2.5 -top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-foret text-sable shadow-md"
        >
          <TrendingUp size={13} aria-hidden />
        </motion.span>
      </motion.div>
      {[0, 1].map((i) => (
        <motion.div key={i} variants={riseV} className="flex items-center gap-2.5 rounded-xl bg-white/60 px-3 py-2.5">
          <span className="h-7 w-7 shrink-0 rounded-lg bg-encre/10" />
          <div className="flex-1">
            <SkeletonLine className={`h-1.5 ${i ? "w-1/2" : "w-2/3"}`} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* — 4. Tarification dynamique : barres + étiquette de prix — */
function IllusPrix() {
  const bars = [34, 52, 44, 68, 88];
  return (
    <div className="relative flex h-full items-end justify-center gap-2.5 px-10 pb-9">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          variants={growV}
          style={{ height: `${h}%`, transformOrigin: "bottom" }}
          className={`w-6 rounded-t-lg ${i === bars.length - 1 ? "bg-foret" : "bg-foret/30"}`}
        />
      ))}
      <motion.span
        variants={popV}
        className="absolute right-8 top-6 rounded-full bg-foret px-3 py-1.5 font-display text-xs text-creme shadow-md"
      >
        129&nbsp;€&nbsp;/&nbsp;nuit
      </motion.span>
      <motion.span
        variants={popV}
        className="absolute left-9 top-12 rounded-full bg-white px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.08em] text-encre/55 shadow-sm"
      >
        Basse saison 74&nbsp;€
      </motion.span>
    </div>
  );
}

/* — 5. Ménage & linge : checklist qui se coche — */
function IllusMenage() {
  const items = ["w-24", "w-20", "w-28"];
  return (
    <div className="relative flex h-full items-center justify-center">
      <motion.div variants={riseV} className="w-44 rounded-xl bg-white p-3.5 shadow-[0_16px_34px_-16px_rgba(0,51,42,0.4)]">
        <SkeletonLine className="h-2 w-16 !bg-foret/35" />
        <div className="mt-3 space-y-2.5">
          {items.map((w, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <motion.span
                variants={popV}
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foret text-creme"
              >
                <Check size={11} strokeWidth={3} aria-hidden />
              </motion.span>
              <SkeletonLine className={`h-1.5 ${w}`} />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.span
        variants={popV}
        className="absolute right-12 top-7 text-foret/50"
        animate={{ rotate: [0, 12, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={22} aria-hidden />
      </motion.span>
    </div>
  );
}

/* — 6. Accueil & suivi : notifications d'intervention — */
function IllusSuivi() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5 px-9">
      <motion.div variants={slideRightV} className="flex w-full max-w-[15rem] items-center gap-3 rounded-xl bg-white px-3.5 py-2.5 shadow-sm">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foret/10 text-foret">
          <KeyRound size={15} aria-hidden />
        </span>
        <div className="flex-1">
          <p className="text-[0.66rem] font-semibold text-encre/80">Check-in 16&nbsp;h</p>
          <SkeletonLine className="mt-1 h-1.5 w-2/3" />
        </div>
        <motion.span variants={popV} className="flex h-5 w-5 items-center justify-center rounded-full bg-foret text-creme">
          <Check size={11} strokeWidth={3} aria-hidden />
        </motion.span>
      </motion.div>
      <motion.div variants={slideLeftV} className="flex w-full max-w-[15rem] items-center gap-3 rounded-xl bg-white px-3.5 py-2.5 shadow-sm">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foret/10 text-foret">
          <Wrench size={15} aria-hidden />
        </span>
        <div className="flex-1">
          <p className="text-[0.66rem] font-semibold text-encre/80">Intervention planifiée</p>
          <SkeletonLine className="mt-1 h-1.5 w-1/2" />
        </div>
        <motion.span variants={popV} className="flex h-5 w-5 items-center justify-center rounded-full bg-foret text-creme">
          <Check size={11} strokeWidth={3} aria-hidden />
        </motion.span>
      </motion.div>
    </div>
  );
}

const SERVICES = [
  {
    title: "Création d'une annonce optimisée",
    text: "Titre percutant, photos soignées, description qui donne envie : votre annonce est pensée pour maximiser les clics sur Airbnb et Booking.",
    Illustration: IllusAnnonce,
  },
  {
    title: "Communication avec les voyageurs",
    text: "Réponses rapides et précises 7 j/7, avant, pendant et après chaque séjour — et gestion des avis pour soigner votre e-réputation.",
    Illustration: IllusChat,
  },
  {
    title: "Boost de votre référencement",
    text: "Mise à jour et optimisation continues de l'annonce pour garder votre logement visible et bien classé sur les plateformes.",
    Illustration: IllusRank,
  },
  {
    title: "Tarification dynamique",
    text: "Prix ajustés selon la saison, les événements nantais et la demande, avec une gestion fine du calendrier pour ne jamais louer en dessous du marché.",
    Illustration: IllusPrix,
  },
  {
    title: "Ménage & gestion du linge",
    text: "Nettoyage professionnel entre chaque séjour et linge impeccable, coordonnés avec des prestataires sélectionnés — refacturés au réel, sans marge cachée.",
    Illustration: IllusMenage,
  },
  {
    title: "Accueil & suivi du logement",
    text: "Check-in, check-out, kit de bienvenue et coordination des interventions techniques : votre logement tourne tout seul, séjour après séjour.",
    Illustration: IllusSuivi,
  },
];

export default function ServicesShowcase() {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map(({ title, text, Illustration }) => (
        <motion.article
          key={title}
          variants={cardV}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          className="flex h-full flex-col rounded-3xl border border-foret/10 bg-white p-5 shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)]"
        >
          <div aria-hidden className="h-48 overflow-hidden rounded-2xl bg-sable-doux/45">
            <Illustration />
          </div>
          <div className="flex flex-1 flex-col p-4 pb-2">
            <h3 className="font-display text-lg text-encre">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-encre/70">{text}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
