/*
 * Motif signature : les brindilles du nid Nommanest.
 * Décliné de la couverture de la charte graphique (arcs fins qui se croisent).
 */

export function NestWatermark({
  className = "",
  stroke = "currentColor",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 600 340"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M-20 120 C 160 40, 400 60, 620 200" stroke={stroke} strokeWidth="10" />
      <path d="M-30 210 C 180 90, 420 140, 630 90" stroke={stroke} strokeWidth="7" />
      <path d="M-10 300 C 200 180, 380 260, 620 280" stroke={stroke} strokeWidth="12" />
      <path d="M60 350 C 240 240, 460 180, 640 340" stroke={stroke} strokeWidth="8" />
      <path d="M-40 40 C 140 130, 360 30, 610 150" stroke={stroke} strokeWidth="5" />
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
