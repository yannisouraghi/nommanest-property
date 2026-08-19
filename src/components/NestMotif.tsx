import { useId } from "react";

/*
 * Motif signature : les brindilles du nid Nommanest.
 * Décliné de la couverture de la charte graphique (arcs fins qui se croisent).
 * Les extrémités des tracés s'estompent via un masque pour ne jamais
 * laisser voir de coupe nette.
 */

export function NestWatermark({
  className = "",
  stroke = "currentColor",
}: {
  className?: string;
  stroke?: string;
}) {
  const maskId = `nestfade-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg
      viewBox="0 0 1400 420"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={`${maskId}-g`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="black" />
          <stop offset="0.18" stopColor="white" />
          <stop offset="0.82" stopColor="white" />
          <stop offset="1" stopColor="black" />
        </linearGradient>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="1400" height="420">
          <rect width="1400" height="420" fill={`url(#${maskId}-g)`} />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <path d="M-40 150 C 320 40, 900 80, 1440 240" stroke={stroke} strokeWidth="10" strokeLinecap="round" />
        <path d="M-60 250 C 380 110, 950 180, 1460 110" stroke={stroke} strokeWidth="7" strokeLinecap="round" />
        <path d="M-30 360 C 420 220, 860 320, 1450 340" stroke={stroke} strokeWidth="12" strokeLinecap="round" />
        <path d="M100 430 C 500 290, 1000 220, 1470 410" stroke={stroke} strokeWidth="8" strokeLinecap="round" />
        <path d="M-80 60 C 300 160, 820 30, 1430 180" stroke={stroke} strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function NestDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 44"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M10 12 C 60 44, 160 44, 210 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 6 C 70 36, 150 38, 196 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
      <path d="M42 20 C 90 42, 140 30, 202 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      <path d="M16 22 C 66 30, 120 44, 178 30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}
