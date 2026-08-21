import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-foret-nuit pb-14 pt-36 text-creme">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h1 className="font-display text-4xl">Mentions légales</h1>
        </div>
      </section>
      <section className="bg-creme py-16">
        <div className="prose-nommanest mx-auto max-w-3xl space-y-8 px-5 text-sm leading-relaxed text-encre/80 md:px-8">
          <div>
            <h2 className="font-display mb-3 text-xl text-foret">Éditeur du site</h2>
            <p>
              Nommanest Property, nom commercial de Lechine Gbai, entrepreneur
              individuel (EI)
              <br />
              SIREN&nbsp;: 889&nbsp;658&nbsp;878 — SIRET (siège)&nbsp;:
              889&nbsp;658&nbsp;878&nbsp;00018
              <br />
              Activité&nbsp;: agences immobilières (code APE 68.31Z)
              <br />
              Siège&nbsp;: Résidence La Grande Voile, 5&nbsp;B boulevard de
              Berlin, 44000 Nantes
              <br />
              Téléphone&nbsp;: 07 51 26 34 90 — Email&nbsp;: nommanest@gmail.com
              <br />
              Directeur de la publication&nbsp;: Lechine Gbai
            </p>
          </div>
          <div>
            <h2 className="font-display mb-3 text-xl text-foret">Nature de l&apos;activité</h2>
            <p>
              Nommanest Property exerce une activité de conciergerie de
              location courte durée et de prestations de services destinées
              aux propriétaires. Dans ce cadre, Nommanest Property n&apos;encaisse
              pas les loyers ou revenus locatifs pour le compte des
              propriétaires et ne perçoit pas les dépôts de garantie versés par
              les voyageurs&nbsp;: les paiements sont directement versés au
              propriétaire selon les modalités définies avec les plateformes de
              réservation. La relation avec le propriétaire repose sur un
              contrat de prestations de services précisant les missions
              confiées et les modalités de rémunération.
            </p>
          </div>
          <div>
            <h2 className="font-display mb-3 text-xl text-foret">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis —{" "}
              <a
                href="https://vercel.com"
                rel="noopener noreferrer"
                className="text-foret underline-offset-4 hover:underline"
              >
                vercel.com
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="font-display mb-3 text-xl text-foret">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus de ce site (textes, logo, charte
              graphique) est la propriété de Nommanest Property. Toute
              reproduction sans autorisation préalable est interdite. Les
              photographies proviennent de la photothèque de Nommanest Property
              et de banques d&apos;images libres de droits (Unsplash).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
