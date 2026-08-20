"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Sparkles,
  LineChart,
  MessagesSquare,
  DoorOpen,
  WashingMachine,
  Wrench,
  Star,
  FileText,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

/*
 * Carrousel « la valeur derrière le taux » — repris du projet Allianza
 * (CommissionValue) et réécrit pour Nommanest : défilement automatique
 * des cartes, pause au survol / au toucher, navigation manuelle conservée.
 */

type Mission = { icon: LucideIcon; title: string; text: string };

const MISSIONS: Mission[] = [
  {
    icon: Sparkles,
    title: "Une annonce qui convertit",
    text: "Création, photos et textes optimisés sur Airbnb et Booking, avec un positionnement travaillé pour votre quartier.",
  },
  {
    icon: LineChart,
    title: "Une tarification pilotée",
    text: "Grille tarifaire ajustée selon la saison, les événements nantais et la demande, pour ne jamais louer en dessous du marché.",
  },
  {
    icon: MessagesSquare,
    title: "Des voyageurs accompagnés 7 j/7",
    text: "Réponses rapides avant, pendant et après chaque séjour : moins de frictions, plus de réservations confirmées.",
  },
  {
    icon: DoorOpen,
    title: "Des arrivées orchestrées",
    text: "Check-in et check-out organisés de bout en bout, à distance ou en personne, sans que vous ayez à vous déplacer.",
  },
  {
    icon: WashingMachine,
    title: "Un ménage coordonné",
    text: "Prestataires sélectionnés, linge géré entre chaque séjour — et toujours refacturé au réel, sans marge cachée.",
  },
  {
    icon: Wrench,
    title: "Un logement suivi de près",
    text: "Interventions techniques coordonnées et suivi opérationnel continu pour que l'exploitation ne s'arrête jamais.",
  },
  {
    icon: Star,
    title: "Une e-réputation entretenue",
    text: "Avis suivis et soignés séjour après séjour : c'est ce qui fait monter votre annonce — et vos revenus.",
  },
  {
    icon: FileText,
    title: "Un reporting transparent",
    text: "Un compte rendu régulier de l'activité de votre bien : vous savez toujours ce qui se passe, noir sur blanc.",
  },
  {
    icon: ShieldCheck,
    title: "Des démarches facilitées",
    text: "Conseils, mise en relation d'experts et accompagnement réglementaire pour louer sereinement, en toute conformité.",
  },
];

const PER_PAGE = 3;
const AUTOPLAY_MS = 4500;

export default function CommissionCarousel() {
  const totalPages = Math.ceil(MISSIONS.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);

  const next = useCallback(
    () => setPage((p) => (p + 1) % totalPages),
    [totalPages],
  );
  const prev = useCallback(
    () => setPage((p) => (p - 1 + totalPages) % totalPages),
    [totalPages],
  );

  /* Défilement automatique — coupé si l'utilisateur interagit ou
     préfère les animations réduites. */
  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    setPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) (diff > 0 ? next : prev)();
    setPaused(false);
  };

  return (
    <div
      role="region"
      aria-roledescription="carrousel"
      aria-label="Ce que couvre notre rémunération"
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Flèches (desktop) */}
      <button
        type="button"
        onClick={prev}
        aria-label="Cartes précédentes"
        className="absolute -left-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-creme/20 bg-foret-nuit/80 text-creme/80 backdrop-blur-sm transition-colors hover:border-sable hover:text-sable lg:flex"
      >
        <ChevronLeft size={20} aria-hidden />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Cartes suivantes"
        className="absolute -right-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-creme/20 bg-foret-nuit/80 text-creme/80 backdrop-blur-sm transition-colors hover:border-sable hover:text-sable lg:flex"
      >
        <ChevronRight size={20} aria-hidden />
      </button>

      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <div
              key={pageIndex}
              className="w-full shrink-0 px-1"
              aria-hidden={pageIndex !== page}
            >
              <div className="grid gap-5 md:grid-cols-3">
                {MISSIONS.slice(
                  pageIndex * PER_PAGE,
                  (pageIndex + 1) * PER_PAGE,
                ).map((m) => (
                  <div
                    key={m.title}
                    className="h-full rounded-3xl border border-creme/12 bg-foret p-7 transition-transform duration-500 hover:-translate-y-1.5 md:p-8"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sable/12 text-sable">
                      <m.icon size={20} aria-hidden />
                    </span>
                    <h3 className="font-display mt-5 text-lg text-creme">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-creme/70">
                      {m.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-9 flex items-center justify-center gap-2.5">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setPage(i)}
            aria-label={`Aller à la page ${i + 1}`}
            aria-current={i === page ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === page ? "w-7 bg-sable" : "w-2 bg-creme/25 hover:bg-creme/45"
            }`}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-creme/45 lg:hidden">
        Glissez pour naviguer
      </p>
    </div>
  );
}
