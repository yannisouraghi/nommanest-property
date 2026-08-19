// Anti-spam : honeypots + jeton horodaté + détection de motifs suspects.

export function generateFormToken(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  return Buffer.from(`${timestamp}:${random}`).toString("base64");
}

export function verifyFormToken(
  token: string,
  minTime = 3000,
  maxTime = 1800000,
): { valid: boolean; error?: string } {
  if (!token) return { valid: false, error: "Jeton manquant" };
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const timestamp = parseInt(decoded.split(":")[0], 10);
    if (isNaN(timestamp)) return { valid: false, error: "Jeton invalide" };
    const elapsed = Date.now() - timestamp;
    if (elapsed < minTime)
      return { valid: false, error: "Formulaire soumis trop rapidement" };
    if (elapsed > maxTime)
      return { valid: false, error: "Session expirée, veuillez recharger la page" };
    return { valid: true };
  } catch {
    return { valid: false, error: "Jeton invalide" };
  }
}

function detectSpamPatterns(text: string): boolean {
  if (!text) return false;
  const patterns = [
    /(https?:\/\/[^\s]+){3,}/gi,
    /[Ѐ-ӿ]{10,}/g,
    /\b(viagra|casino|lottery|winner|click here|buy now|free money|earn money)\b/gi,
    /[A-Z]{20,}/g,
    /<script|<iframe|javascript:/gi,
  ];
  return patterns.some((p) => p.test(text));
}

export function validateAntiSpam(data: {
  formToken?: string;
  honeypot?: string;
  website?: string;
  allText?: string;
}): { valid: boolean; error?: string } {
  if ((data.honeypot || "").trim() !== "" || (data.website || "").trim() !== "") {
    return { valid: false, error: "Soumission invalide" };
  }
  const tokenCheck = verifyFormToken(data.formToken || "");
  if (!tokenCheck.valid) return tokenCheck;
  if (detectSpamPatterns(data.allText || "")) {
    return { valid: false, error: "Le contenu du message semble suspect" };
  }
  return { valid: true };
}
