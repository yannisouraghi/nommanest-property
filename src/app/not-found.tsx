import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NestDivider, NestWatermark } from "@/components/NestMotif";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-foret-nuit px-5 pb-16 pt-32 text-center text-creme">
      <NestWatermark className="pointer-events-none absolute -right-24 -top-20 w-[1250px] max-w-none text-foret-clair opacity-25" />
      <NestWatermark className="pointer-events-none absolute -left-24 -bottom-14 w-[1100px] max-w-none rotate-180 text-foret-clair opacity-15" />
      <div className="relative">
        <p className="eyebrow text-sable">Erreur 404</p>
        <h1 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">
          Cette page a quitté le nid.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-creme/80">
          L&apos;adresse demandée n&apos;existe pas ou plus. Retrouvez votre
          chemin depuis l&apos;accueil, ou dites-nous ce que vous cherchiez.
        </p>
        <NestDivider className="mx-auto mt-10 w-28 text-sable" />
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn btn-sable">
            Retour à l&apos;accueil
            <ArrowRight size={16} aria-hidden />
          </Link>
          <Link href="/contact" className="btn btn-ghost-light">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
