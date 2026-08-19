import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Banknote, BadgeCheck, Clock3, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import { NestDivider, NestWatermark } from "@/components/NestMotif";

const MARQUEE_PHOTOS = [
  { src: "/images/nantes-pommeraye.jpg", caption: "Passage Pommeraye" },
  { src: "/images/logement-salon-lumiere.jpg", caption: "Un logement accompagné" },
  { src: "/images/nantes-trentemoult.jpg", caption: "Trentemoult" },
  { src: "/images/logement-chambre.jpg", caption: "Prêt pour les voyageurs" },
  { src: "/images/nantes-chateau.jpg", caption: "Château des ducs de Bretagne" },
  { src: "/images/artdevivre-terrasse.jpg", caption: "L'art de vivre en terrasse" },
  { src: "/images/nantes-loire-sunset.jpg", caption: "La Loire au couchant" },
  { src: "/images/logement-cuisine.jpg", caption: "Des intérieurs soignés" },
];

export default function Home() {
  return (
    <>
      {/* ————— Héro : texte + carte photo ————— */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-foret-nuit pb-14 pt-32 text-creme md:pt-36">
        <NestWatermark className="pointer-events-none absolute -right-44 -top-16 w-[680px] text-foret-clair opacity-25" />
        <NestWatermark className="pointer-events-none absolute -left-56 bottom-0 w-[560px] rotate-180 text-foret-clair opacity-15" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:gap-12 md:px-8 lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-sable">Nantes &amp; agglomération</p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="font-display mt-6 text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-[3.6rem]">
                Prendre soin de votre bien, comme d&apos;un nid.
              </h1>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-creme/85 md:text-lg">
                Conciergerie de location courte durée et accompagnement
                immobilier à l&apos;achat comme à la vente. Deux métiers, un
                seul interlocuteur, une même exigence.
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/conciergerie" className="btn btn-sable">
                  Conciergerie
                  <ArrowRight size={16} aria-hidden />
                </Link>
                <Link href="/investissement" className="btn btn-ghost-light">
                  Achat &amp; vente
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-12 flex flex-col gap-4 border-t border-creme/15 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
                <p className="flex items-center gap-3 whitespace-nowrap text-sm text-creme/80">
                  <Banknote size={17} className="shrink-0 text-sable" aria-hidden />
                  0&nbsp;€ de frais fixe
                </p>
                <p className="flex items-center gap-3 whitespace-nowrap text-sm text-creme/80">
                  <BadgeCheck size={17} className="shrink-0 text-sable" aria-hidden />
                  Honoraires au succès
                </p>
                <p className="flex items-center gap-3 whitespace-nowrap text-sm text-creme/80">
                  <Clock3 size={17} className="shrink-0 text-sable" aria-hidden />
                  Réponse sous 24&nbsp;h
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <figure className="relative mx-auto w-full max-w-md md:max-w-none lg:-mr-14">
              {/* cadre décoratif sable, décalé */}
              <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-[1.7rem] border border-sable/35" />
              <div className="img-card relative h-[52svh] w-full overflow-hidden md:h-[64svh]">
                <Image
                  src="/images/nantes-miroir.jpg"
                  alt="Le miroir d'eau de Nantes reflétant les façades du centre historique"
                  fill
                  priority
                  quality={90}
                  className="kenburns object-cover"
                  sizes="(max-width: 768px) 100vw, 44vw"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-creme/50">
                Le miroir d&apos;eau — Nantes
                <ChevronDown size={20} aria-hidden className="scroll-cue text-sable" />
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ————— Le nom, le nid : manifeste ————— */}
      <section className="relative overflow-hidden bg-creme py-24 md:py-32">
        <NestWatermark className="pointer-events-none absolute -left-32 top-8 w-[520px] text-foret opacity-[0.07]" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.35fr] md:items-center md:px-8">
          <Reveal className="flex justify-center md:justify-start">
            <Image
              src="/logo-green.png"
              alt="Logo Nommanest : un bâtiment posé dans un nid d'oiseau"
              width={330}
              height={240}
              className="w-56 md:w-72"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow rule-sable text-foret">
                Nomad&nbsp;+&nbsp;Nest
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
                Un nom né de deux idées&nbsp;: le voyage,
                et le refuge.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-encre/75">
                <em>Nomad</em>, le voyageur. <em>Nest</em>, le nid — un espace
                de repos, de protection et de réconfort. Nommanest est né de
                cette rencontre&nbsp;: offrir à chaque voyageur un véritable
                chez-soi, et à chaque propriétaire la certitude que son bien
                est entre de bonnes mains. Que nous accompagnions votre
                logement en location courte durée ou votre projet d&apos;achat
                ou de vente, la promesse ne change pas.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— Diptyque : deux métiers ————— */}
      <section aria-labelledby="metiers-title" className="bg-creme pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow rule-sable rule-sable-center text-foret">
              Deux métiers, une même promesse
            </p>
            <h2 id="metiers-title" className="font-display mt-8 text-3xl text-encre md:text-4xl">
              Choisissez votre porte d&apos;entrée
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {/* Conciergerie */}
            <Reveal>
              <Link
                href="/conciergerie"
                className="img-card group relative block transition-transform duration-500 hover:-translate-y-1.5"
              >
                <div className="relative h-[480px] md:h-[560px]">
                  <Image
                    src="/images/logement-salon-lumiere.jpg"
                    alt="Salon baigné de lumière dorée dans un logement accompagné"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-foret-nuit/15" />
                  <div className="absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-t from-foret-nuit via-foret-nuit/70 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <p className="eyebrow hero-text text-sable">Conciergerie</p>
                  <h3 className="font-display hero-text mt-4 text-2xl text-creme md:text-3xl">
                    Votre logement travaille,
                    <br />
                    vous vivez.
                  </h3>
                  <p className="hero-text mt-4 max-w-sm text-sm leading-relaxed text-creme/90">
                    Annonces, voyageurs, ménage, suivi du logement&nbsp;: une
                    assistance opérationnelle complète pour votre location
                    courte durée. Vos revenus vous sont versés directement.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-sable">
                    Découvrir les formules
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* Transaction */}
            <Reveal delay={0.12}>
              <Link
                href="/investissement"
                className="img-card group relative block transition-transform duration-500 hover:-translate-y-1.5"
              >
                <div className="relative h-[480px] md:h-[560px]">
                  <Image
                    src="/images/nantes-rue-doree.jpg"
                    alt="Rue du centre historique de Nantes dans la lumière du matin"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-foret-nuit/15" />
                  <div className="absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-t from-foret-nuit via-foret-nuit/70 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <p className="eyebrow hero-text text-sable">Achat &amp; Vente</p>
                  <h3 className="font-display hero-text mt-4 text-2xl text-creme md:text-3xl">
                    Le bon bien,
                    <br />
                    au juste prix.
                  </h3>
                  <p className="hero-text mt-4 max-w-sm text-sm leading-relaxed text-creme/90">
                    Mandat de recherche pour trouver et négocier, mandat de
                    vente pour valoriser et diffuser. Honoraires dus uniquement
                    en cas de succès, chez le notaire.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-sable">
                    Découvrir l&apos;accompagnement
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— Pourquoi Nantes : chiffres ————— */}
      <section aria-labelledby="nantes-title" className="relative overflow-hidden bg-foret py-24 text-creme md:py-32">
        <NestWatermark className="pointer-events-none absolute -right-40 bottom-0 w-[620px] text-foret-clair opacity-30" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-14 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <Reveal>
                <p className="eyebrow rule-sable text-sable">
                  Pourquoi Nantes
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 id="nantes-title" className="font-display mt-8 text-3xl leading-snug md:text-4xl">
                  Un territoire qui attire les voyageurs comme les
                  investisseurs.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-creme/80">
                  Métropole créative, littoral à trente minutes, Paris à deux
                  heures&nbsp;: la Loire-Atlantique conjugue dynamisme
                  économique, attractivité touristique et demande locative en
                  croissance constante.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
                  <div className="flex flex-col">
                    <dt className="order-2 mt-2 text-[0.8rem] uppercase tracking-[0.14em] text-creme/65">
                      visiteurs par an en Loire-Atlantique
                    </dt>
                    <dd className="font-display text-4xl text-sable md:text-5xl">
                      +20&nbsp;M
                    </dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="order-2 mt-2 text-[0.8rem] uppercase tracking-[0.14em] text-creme/65">
                      de rendement brut observé en meublé courte durée
                    </dt>
                    <dd className="font-display text-4xl text-sable md:text-5xl">
                      6–10&nbsp;%
                    </dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="order-2 mt-2 text-[0.8rem] uppercase tracking-[0.14em] text-creme/65">
                      logements manquants dans le secteur d&apos;ici 2030
                    </dt>
                    <dd className="font-display text-4xl text-sable md:text-5xl">
                      +2&nbsp;500
                    </dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="order-2 mt-2 text-[0.8rem] uppercase tracking-[0.14em] text-creme/65">
                      de Paris en TGV, aéroport international
                    </dt>
                    <dd className="font-display text-4xl text-sable md:text-5xl">
                      2&nbsp;h
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="relative">
              <figure>
                <div className="img-card relative aspect-[3/4]">
                  <Image
                    src="/images/nantes-quais-nuit.jpg"
                    alt="Les anneaux de Buren illuminés sur les quais de l'île de Nantes, la nuit"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-creme/50">
                  Île de Nantes — les anneaux de Buren
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— Art de vivre nantais : défilé ————— */}
      <section aria-labelledby="artdevivre-title" className="overflow-hidden bg-creme py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-sable text-foret">L&apos;art de vivre nantais</p>
            <h2 id="artdevivre-title" className="font-display mt-8 text-3xl leading-snug text-encre md:text-4xl">
              Ce que vos voyageurs viennent chercher, nous le connaissons par
              cœur.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="mt-14">
          <div className="marquee-track gap-6 pl-6">
            {[...MARQUEE_PHOTOS, ...MARQUEE_PHOTOS].map((p, i) => (
              <figure key={`${p.src}-${i}`} className="w-[260px] shrink-0 sm:w-[320px]" aria-hidden={i >= MARQUEE_PHOTOS.length}>
                <div className="img-card relative aspect-[4/5]">
                  <Image
                    src={p.src}
                    alt={i < MARQUEE_PHOTOS.length ? p.caption : ""}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-encre/55">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ————— Comment ça commence ————— */}
      <section aria-labelledby="debut-title" className="bg-sable-doux/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow rule-sable rule-sable-center text-foret">
              Comment ça commence
            </p>
            <h2 id="debut-title" className="font-display mt-8 text-3xl text-encre md:text-4xl">
              Trois pas suffisent
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Un échange découverte",
                text: "On discute de votre bien ou de votre projet, de vos objectifs et de vos disponibilités. Sans engagement.",
              },
              {
                title: "Un audit gratuit",
                text: "Visite du logement ou analyse du projet, puis estimation chiffrée de son potentiel — noir sur blanc.",
              },
              {
                title: "Un accompagnement sur mesure",
                text: "Conciergerie, recherche ou vente : vous choisissez le niveau d'accompagnement, nous faisons le reste.",
              },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="text-center">
                  <NestDivider className="mx-auto w-28 text-foret" />
                  <h3 className="font-display mt-6 text-xl text-encre">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-encre/70">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— CTA final ————— */}
      <section className="relative overflow-hidden bg-foret-nuit py-24 text-creme md:py-28">
        <NestWatermark className="pointer-events-none absolute -left-36 -bottom-16 w-[560px] text-foret-clair opacity-25" />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl leading-snug md:text-4xl">
              Parlons de votre bien.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-creme/80">
              Un premier échange suffit pour savoir ce que Nommanest peut
              apporter à votre projet — sans engagement, en toute transparence.
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
