import { Resend } from "resend";

const resend = new Resend(process.env.NOMMANEST_RESEND_API || "re_missing_key");
const FROM = process.env.EMAIL_FROM || "Nommanest Property <onboarding@resend.dev>";
const CONTACT = process.env.CONTACT_EMAIL || "nommanest@gmail.com";

export interface LeadData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  /** Champs spécifiques selon le formulaire (ville, type de bien, projet…) */
  details: Record<string, string>;
  /** "conciergerie" | "achat" | "vente" | "contact" */
  kind: string;
}

const KIND_LABELS: Record<string, string> = {
  conciergerie: "Conciergerie — location courte durée",
  achat: "Accompagnement à l'achat",
  vente: "Accompagnement à la vente",
  contact: "Demande de contact",
};

function layout(content: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f8f4e9;font-family:'Century Gothic','Segoe UI',sans-serif;color:#141414;">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">
    <div style="background:#004637;padding:34px 30px;text-align:center;">
      <p style="margin:0;color:#f8f4e9;font-size:22px;letter-spacing:4px;">NOMMANEST</p>
      <p style="margin:6px 0 0;color:#f6dfa5;font-size:11px;letter-spacing:6px;">P R O P E R T Y</p>
    </div>
    <div style="background:#ffffff;padding:32px 30px;border:1px solid #e8e2d0;border-top:none;">
      ${content}
    </div>
    <div style="padding:20px;text-align:center;color:#6b7a74;font-size:12px;line-height:1.7;">
      <p style="margin:0;">Nommanest Property — Nantes &amp; agglomération</p>
      <p style="margin:0;">07 51 26 34 90 · nommanest@gmail.com</p>
    </div>
  </div>
</body>
</html>`;
}

function detailRows(details: Record<string, string>): string {
  return Object.entries(details)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6b7a74;font-size:13px;white-space:nowrap;vertical-align:top;">${k}</td><td style="padding:6px 0;font-size:14px;">${v}</td></tr>`,
    )
    .join("");
}

function clientEmail(data: LeadData) {
  return {
    subject: "Nous avons bien reçu votre demande — Nommanest Property",
    html: layout(`
      <h2 style="margin:0 0 16px;font-size:20px;color:#004637;">Bonjour ${data.name},</h2>
      <p style="line-height:1.7;font-size:15px;">
        Merci pour votre demande concernant
        <strong style="color:#004637;">${KIND_LABELS[data.kind] || data.kind}</strong>.
        Nous revenons vers vous sous <strong>24&nbsp;heures</strong> pour convenir
        d'un échange découverte — sans engagement.
      </p>
      <div style="background:#f8f4e9;padding:18px 22px;margin:22px 0;">
        <p style="margin:0 0 8px;font-size:12px;letter-spacing:2px;color:#004637;text-transform:uppercase;">Récapitulatif</p>
        <table style="border-collapse:collapse;">${detailRows({
          Email: data.email,
          ...(data.phone ? { "Téléphone": data.phone } : {}),
          ...data.details,
          ...(data.message ? { Message: data.message } : {}),
        })}</table>
      </div>
      <p style="line-height:1.7;font-size:15px;">
        En attendant, vous pouvez nous joindre directement au
        <strong style="color:#004637;">07&nbsp;51&nbsp;26&nbsp;34&nbsp;90</strong>.
      </p>
      <p style="line-height:1.7;font-size:15px;margin-bottom:0;">Merci de votre confiance,<br><strong>L'équipe Nommanest Property</strong></p>
    `),
  };
}

function internalEmail(data: LeadData) {
  return {
    subject: `Nouveau lead — ${KIND_LABELS[data.kind] || data.kind} — ${data.name}`,
    html: layout(`
      <p style="background:#f6dfa5;padding:12px 16px;margin:0 0 20px;font-size:13px;color:#00332a;">
        <strong>Nouveau lead ${KIND_LABELS[data.kind] || data.kind}</strong> — à rappeler sous 24&nbsp;h.
      </p>
      <table style="border-collapse:collapse;">${detailRows({
        Nom: data.name,
        Email: `<a href="mailto:${data.email}">${data.email}</a>`,
        ...(data.phone ? { "Téléphone": `<a href="tel:${data.phone}">${data.phone}</a>` } : {}),
        ...data.details,
        ...(data.message ? { Message: data.message } : {}),
        "Reçu le": new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
      })}</table>
    `),
  };
}

export async function sendLeadEmails(data: LeadData) {
  try {
    const internal = internalEmail(data);
    await resend.emails.send({
      from: FROM,
      to: [CONTACT],
      replyTo: data.email,
      subject: internal.subject,
      html: internal.html,
    });

    const client = clientEmail(data);
    await resend.emails.send({
      from: FROM,
      to: [data.email],
      subject: client.subject,
      html: client.html,
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return { success: false, error };
  }
}
