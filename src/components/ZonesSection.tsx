import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { TERRITOIRES } from "@/lib/zones";

/** Section « Zones d'intervention » : Nantes, Pays de Retz & alentours. */
export default function ZonesSection({
  className = "bg-creme",
  titre = "Nantes, le Pays de Retz et leurs alentours",
  showAllLink = true,
}: {
  className?: string;
  titre?: string;
  showAllLink?: boolean;
}) {
  return (
    <section aria-labelledby="zones-title" className={`py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow rule-sable text-foret">Zones d&apos;intervention</p>
          <h2 id="zones-title" className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
            {titre}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-encre/75">
            De la métropole nantaise à la Côte de Jade, nous intervenons sur
            place, avec des prestataires locaux. Votre commune n&apos;apparaît
            pas&nbsp;? Appelez-nous&nbsp;: si elle est dans les environs, nous
            étudions votre projet.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TERRITOIRES.map((t, i) => (
            <Reveal key={t.titre} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-foret/10 bg-white shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)] transition-transform duration-500 hover:-translate-y-1.5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display flex items-center gap-2.5 text-xl text-encre">
                    <MapPin size={18} className="shrink-0 text-foret" aria-hidden />
                    {t.titre}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-encre/70">{t.accroche}</p>
                  <p className="mt-5 text-[0.8rem] leading-relaxed text-encre/55">
                    {t.communes.join(" · ")}
                  </p>
                  <Link
                    href={t.href}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-foret underline-offset-4 hover:underline"
                  >
                    {t.lien}
                    <ArrowRight size={15} aria-hidden />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {showAllLink && (
          <Reveal delay={0.2}>
            <p className="mt-10 text-sm text-encre/60">
              Conciergerie à{" "}
              <Link href="/conciergerie/pornic" className="font-medium text-foret underline-offset-4 hover:underline">
                Pornic
              </Link>
              ,{" "}
              <Link href="/conciergerie/saint-brevin-les-pins" className="font-medium text-foret underline-offset-4 hover:underline">
                Saint-Brevin-les-Pins
              </Link>{" "}
              ·{" "}
              <Link href="/zones-intervention" className="font-medium text-foret underline-offset-4 hover:underline">
                Toutes nos zones d&apos;intervention
              </Link>
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
