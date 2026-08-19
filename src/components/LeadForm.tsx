"use client";

import { useEffect, useState } from "react";
import { Check, LoaderCircle } from "lucide-react";

export interface ExtraField {
  name: string;
  label: string;
  type: "text" | "select";
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

export default function LeadForm({
  kind,
  extraFields = [],
  messageLabel = "Votre message",
  messagePlaceholder = "Parlez-nous de votre projet…",
  messageRequired = false,
  submitLabel = "Envoyer ma demande",
  dark = false,
}: {
  kind: "conciergerie" | "achat" | "vente" | "contact";
  extraFields?: ExtraField[];
  messageLabel?: string;
  messagePlaceholder?: string;
  messageRequired?: boolean;
  submitLabel?: string;
  dark?: boolean;
}) {
  const [formToken, setFormToken] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const random = Math.random().toString(36).substring(2, 15);
    setFormToken(btoa(`${Date.now()}:${random}`));
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const details: Record<string, string> = {};
    for (const f of extraFields) {
      details[f.label] = String(fd.get(f.name) || "");
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          message: fd.get("message"),
          details,
          honeypot: fd.get("honeypot"),
          website: fd.get("website"),
          formToken,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "L'envoi a échoué.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "L'envoi a échoué. Réessayez ou appelez-nous.",
      );
    }
  }

  const labelCls = `mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.22em] ${
    dark ? "text-sable" : "text-foret"
  }`;

  if (status === "sent") {
    return (
      <div
        role="status"
        className={`flex flex-col items-center gap-4 rounded-3xl border px-8 py-14 text-center ${
          dark ? "border-sable/40 text-creme" : "border-foret/25 text-encre"
        }`}
      >
        <span className={`flex h-12 w-12 items-center justify-center rounded-full ${dark ? "bg-sable text-foret-nuit" : "bg-foret text-creme"}`}>
          <Check size={22} aria-hidden />
        </span>
        <p className="font-display text-xl">Demande envoyée</p>
        <p className={`max-w-sm text-sm leading-relaxed ${dark ? "text-creme/75" : "text-encre/70"}`}>
          Nous revenons vers vous sous 24&nbsp;h pour convenir d&apos;un échange
          découverte. Un récapitulatif vient de vous être envoyé par email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={dark ? "" : "on-light"} noValidate={false}>
      {/* Honeypots invisibles */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Ne pas remplir
          <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Site web
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${kind}-name`} className={labelCls}>
            Nom et prénom *
          </label>
          <input id={`${kind}-name`} name="name" type="text" required autoComplete="name" className="field" placeholder="Camille Moreau" />
        </div>
        <div>
          <label htmlFor={`${kind}-phone`} className={labelCls}>
            Téléphone
          </label>
          <input id={`${kind}-phone`} name="phone" type="tel" autoComplete="tel" className="field" placeholder="06 12 34 56 78" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${kind}-email`} className={labelCls}>
            Email *
          </label>
          <input id={`${kind}-email`} name="email" type="email" required autoComplete="email" className="field" placeholder="vous@exemple.fr" />
        </div>

        {extraFields.map((f) => (
          <div key={f.name} className={extraFields.length % 2 === 1 && f === extraFields[extraFields.length - 1] ? "sm:col-span-2" : ""}>
            <label htmlFor={`${kind}-${f.name}`} className={labelCls}>
              {f.label}
              {f.required ? " *" : ""}
            </label>
            {f.type === "select" ? (
              <select id={`${kind}-${f.name}`} name={f.name} required={f.required} className="field" defaultValue="">
                <option value="" disabled>
                  Sélectionner…
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={`${kind}-${f.name}`}
                name={f.name}
                type="text"
                required={f.required}
                className="field"
                placeholder={f.placeholder}
              />
            )}
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor={`${kind}-message`} className={labelCls}>
            {messageLabel}
            {messageRequired ? " *" : ""}
          </label>
          <textarea
            id={`${kind}-message`}
            name="message"
            rows={4}
            required={messageRequired}
            className="field resize-y"
            placeholder={messagePlaceholder}
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl border border-red-700/40 bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className={`btn mt-7 w-full sm:w-auto ${dark ? "btn-sable" : "btn-foret"} disabled:opacity-60`}
      >
        {status === "sending" ? (
          <>
            <LoaderCircle size={16} className="animate-spin" aria-hidden />
            Envoi en cours…
          </>
        ) : (
          submitLabel
        )}
      </button>
      <p className={`mt-4 text-xs leading-relaxed ${dark ? "text-creme/50" : "text-encre/50"}`}>
        Vos coordonnées servent uniquement à traiter votre demande. Aucune
        newsletter, aucune revente de données.
      </p>
    </form>
  );
}
