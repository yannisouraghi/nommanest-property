import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <>
      <section className="bg-foret-nuit pb-14 pt-36 text-creme">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h1 className="font-display text-4xl">Politique de confidentialité</h1>
        </div>
      </section>
      <section className="bg-creme py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-5 text-sm leading-relaxed text-encre/80 md:px-8">
          <div>
            <h2 className="font-display mb-3 text-xl text-foret">Données collectées</h2>
            <p>
              Les formulaires de ce site collectent uniquement les informations
              nécessaires au traitement de votre demande&nbsp;: nom, email,
              téléphone (facultatif) et les éléments que vous choisissez de
              nous transmettre sur votre bien ou votre projet.
            </p>
          </div>
          <div>
            <h2 className="font-display mb-3 text-xl text-foret">Utilisation</h2>
            <p>
              Ces données servent exclusivement à vous recontacter dans le
              cadre de votre demande. Elles ne sont ni revendues, ni utilisées
              à des fins de prospection non sollicitée. Aucune newsletter
              n&apos;est envoyée sans votre accord explicite.
            </p>
          </div>
          <div>
            <h2 className="font-display mb-3 text-xl text-foret">Conservation et droits</h2>
            <p>
              Les demandes sont conservées le temps du traitement commercial,
              puis archivées au maximum 3 ans. Conformément au RGPD, vous
              disposez d&apos;un droit d&apos;accès, de rectification et de
              suppression de vos données&nbsp;: il suffit d&apos;écrire à
              nommanest@gmail.com.
            </p>
          </div>
          <div>
            <h2 className="font-display mb-3 text-xl text-foret">Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies publicitaires ni de
              traceurs tiers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
