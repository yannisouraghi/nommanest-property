"use client";

import { useState } from "react";
import LeadForm from "./LeadForm";

export default function InvestFormSwitcher() {
  const [mode, setMode] = useState<"achat" | "vente">("achat");

  return (
    <div>
      <div role="tablist" aria-label="Type de projet" className="mb-8 flex rounded-full border border-sable/40 p-1.5">
        {(["achat", "vente"] as const).map((m) => (
          <button
            key={m}
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={`flex-1 rounded-full px-6 py-3 text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors ${
              mode === m
                ? "bg-sable text-foret-nuit"
                : "text-sable hover:bg-sable/10"
            }`}
          >
            {m === "achat" ? "J'achète" : "Je vends"}
          </button>
        ))}
      </div>

      {mode === "achat" ? (
        <LeadForm
          key="achat"
          kind="achat"
          dark
          extraFields={[
            {
              name: "typeBien",
              label: "Type de bien recherché",
              type: "select",
              required: true,
              options: [
                "Appartement",
                "Maison",
                "Immeuble",
                "Local commercial ou professionnel",
                "Je ne sais pas encore",
              ],
            },
            {
              name: "budget",
              label: "Budget envisagé",
              type: "select",
              options: [
                "Moins de 200 000 €",
                "200 000 – 350 000 €",
                "350 000 – 500 000 €",
                "Plus de 500 000 €",
                "À définir avec vous",
              ],
            },
          ]}
          messageLabel="Votre projet en quelques mots"
          messagePlaceholder="Résidence principale, investissement locatif, courte durée… secteurs recherchés, délais."
          submitLabel="Lancer ma recherche"
        />
      ) : (
        <LeadForm
          key="vente"
          kind="vente"
          dark
          extraFields={[
            {
              name: "typeBien",
              label: "Type de bien à vendre",
              type: "select",
              required: true,
              options: [
                "Appartement",
                "Maison",
                "Immeuble",
                "Local commercial ou professionnel",
                "Autre",
              ],
            },
            {
              name: "secteur",
              label: "Ville / quartier du bien",
              type: "text",
              required: true,
              placeholder: "Nantes — Procé",
            },
          ]}
          messageLabel="Votre bien en quelques mots"
          messagePlaceholder="Surface, état, loué ou libre, échéance envisagée…"
          submitLabel="Demander une estimation"
        />
      )}
    </div>
  );
}
