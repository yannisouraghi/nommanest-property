"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

/*
 * Barre d'action du héros conciergerie : la ville saisie préremplit le
 * champ « Ville / quartier » du formulaire d'audit (non contrôlé), puis
 * on y amène le visiteur.
 */
export default function HeroEstimator() {
  const [ville, setVille] = useState("");

  function go(e: React.FormEvent) {
    e.preventDefault();
    const input = document.getElementById(
      "conciergerie-ville",
    ) as HTMLInputElement | null;
    if (input && ville.trim()) input.value = ville.trim();

    const target = document.getElementById("formulaire");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
    // Chrome gèle le défilement doux si la fenêtre perd le focus : si la
    // page ne bouge plus avant d'avoir atteint la cible, on saute dessus.
    let lastY = -1;
    let stalls = 0;
    const retry = window.setInterval(() => {
      if (Math.abs(target.getBoundingClientRect().top) < 130) {
        window.clearInterval(retry);
        return;
      }
      if (Math.abs(window.scrollY - lastY) < 2 && ++stalls >= 2) {
        window.clearInterval(retry);
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 88,
          behavior: "instant",
        });
        return;
      }
      lastY = window.scrollY;
    }, 400);
    window.setTimeout(() => window.clearInterval(retry), 6000);
  }

  return (
    <form
      onSubmit={go}
      className="flex flex-col gap-2 rounded-3xl bg-white p-2 shadow-[0_20px_45px_-18px_rgba(0,25,20,0.55)] sm:flex-row sm:items-center sm:rounded-full"
    >
      <input
        type="text"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
        placeholder="Votre ville ou quartier — ex. Île de Nantes"
        aria-label="Ville ou quartier de votre bien"
        className="w-full min-w-0 flex-1 rounded-full bg-transparent px-5 py-3 text-sm text-encre placeholder:text-encre/40 focus:outline-none"
      />
      <button
        type="submit"
        className="btn btn-foret shrink-0 !px-6 !py-3.5 text-[0.75rem]"
      >
        Estimer mes revenus
        <ArrowRight size={15} aria-hidden />
      </button>
    </form>
  );
}
