import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { NestWatermark } from "@/components/NestMotif";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Nommanest Property : 07 51 26 34 90, nommanest@gmail.com. Conciergerie et accompagnement immobilier à Nantes et son agglomération.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-foret-nuit pb-20 pt-40 text-creme">
        <NestWatermark className="pointer-events-none absolute -right-20 -top-8 w-[880px] max-w-none text-foret-clair opacity-25" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-sable">Contact</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="font-display mt-6 max-w-2xl text-4xl leading-[1.15] sm:text-5xl">
              Un projet, une question&nbsp;?
              Parlons-en.
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-creme/80">
              Conciergerie, achat, vente ou simple curiosité&nbsp;: nous
              répondons à toutes les demandes sous 24&nbsp;heures, sans
              engagement.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="formulaire" className="scroll-mt-24 bg-creme py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.4fr] md:px-8">
          <div>
            <Reveal>
              <ul className="space-y-7">
                <li>
                  <p className="eyebrow text-foret">Téléphone</p>
                  <a href="tel:+33751263490" className="mt-2 flex items-center gap-3 font-display text-xl text-encre hover:text-foret">
                    <Phone size={19} className="text-foret" aria-hidden />
                    07 51 26 34 90
                  </a>
                </li>
                <li>
                  <p className="eyebrow text-foret">Email</p>
                  <a href="mailto:nommanest@gmail.com" className="mt-2 flex items-center gap-3 font-display text-xl text-encre hover:text-foret">
                    <Mail size={19} className="text-foret" aria-hidden />
                    nommanest@gmail.com
                  </a>
                </li>
                <li>
                  <p className="eyebrow text-foret">Zone d&apos;intervention</p>
                  <p className="mt-2 flex items-center gap-3 font-display text-xl text-encre">
                    <MapPin size={19} className="text-foret" aria-hidden />
                    Nantes &amp; agglomération
                  </p>
                </li>
                <li>
                  <p className="eyebrow text-foret">Disponibilité</p>
                  <p className="mt-2 flex items-center gap-3 text-sm leading-relaxed text-encre/75">
                    <Clock size={19} className="shrink-0 text-foret" aria-hidden />
                    Du lundi au samedi — réponse sous 24&nbsp;h
                  </p>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="img-card relative mt-12 hidden aspect-[4/3] md:block">
                <Image
                  src="/images/artdevivre-fenetre.jpg"
                  alt="Fenêtre ouverte sur une cour d'immeubles anciens"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-foret/10 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(0,51,42,0.25)] md:p-10">
              <h2 className="font-display text-2xl text-encre">Écrivez-nous</h2>
              <p className="mb-8 mt-2 text-sm text-encre/60">
                Les champs marqués d&apos;un * sont obligatoires.
              </p>
              <LeadForm
                kind="contact"
                extraFields={[
                  {
                    name: "sujet",
                    label: "Sujet",
                    type: "select",
                    required: true,
                    options: [
                      "Conciergerie — location courte durée",
                      "Projet d'achat",
                      "Projet de vente",
                      "Autre demande",
                    ],
                  },
                ]}
                messageRequired
                submitLabel="Envoyer le message"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
