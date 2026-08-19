import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmails, LeadData } from "@/lib/email";
import { validateAntiSpam } from "@/lib/antispam";

const ALLOWED_KINDS = ["conciergerie", "achat", "vente", "contact"];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, kind, details, honeypot, website, formToken } = body;

    const antiSpam = validateAntiSpam({
      formToken,
      honeypot,
      website,
      allText: `${name || ""} ${message || ""} ${Object.values(details || {}).join(" ")}`,
    });
    if (!antiSpam.valid) {
      return NextResponse.json({ error: antiSpam.error }, { status: 400 });
    }

    if (!name || !email || !kind || !ALLOWED_KINDS.includes(kind)) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Format d'email invalide" }, { status: 400 });
    }

    if (phone) {
      const cleanPhone = String(phone).replace(/[\s.-]/g, "");
      if (!/^(?:(?:\+33|0)[1-9][0-9]{8})$/.test(cleanPhone)) {
        return NextResponse.json({ error: "Format de téléphone invalide" }, { status: 400 });
      }
    }

    const safeDetails: Record<string, string> = {};
    if (details && typeof details === "object") {
      for (const [k, v] of Object.entries(details)) {
        if (typeof v === "string" && v.trim()) {
          safeDetails[String(k).slice(0, 60)] = v.trim().slice(0, 500);
        }
      }
    }

    const lead: LeadData = {
      name: String(name).trim().slice(0, 120),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : undefined,
      message: message ? String(message).trim().slice(0, 3000) : undefined,
      details: safeDetails,
      kind,
    };

    const result = await sendLeadEmails(lead);
    if (!result.success) {
      return NextResponse.json(
        { error: "L'envoi a échoué. Vous pouvez nous joindre au 07 51 26 34 90." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Votre demande a bien été envoyée. Nous revenons vers vous sous 24 h.",
    });
  } catch {
    return NextResponse.json({ error: "Erreur serveur interne" }, { status: 500 });
  }
}
