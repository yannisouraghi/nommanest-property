# Nommanest Property

Site vitrine de **Nommanest Property** — conciergerie de location courte durée et accompagnement immobilier (achat & vente) à Nantes et son agglomération.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS 4
- framer-motion (animations)
- [Resend](https://resend.com) (envoi des emails de leads)

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
```

## Configuration

Copier `.env.local` et renseigner :

| Variable | Rôle |
| --- | --- |
| `NOMMANEST_RESEND_API` | Clé API Resend (obligatoire pour les formulaires) |
| `CONTACT_EMAIL` | Adresse qui reçoit les notifications de leads |
| `EMAIL_FROM` | Expéditeur (domaine à vérifier chez Resend) |

## Structure

- `/` — accueil (diptyque conciergerie / achat-vente, chiffres Loire-Atlantique, valeurs)
- `/conciergerie` — héro avec estimateur et notifications de virements animées, services illustrés, formules Nest Standard 23 % / Nomma Performance 25 % dégressif à la nuitée, carrousel commission, FAQ (données structurées)
- `/investissement` — mandat de recherche (achat) et mandat de vente
- `/a-propos` — histoire du nom, valeurs (transparence, engagement, proximité), cadre de travail
- `/contact` — coordonnées + formulaire général
- `/api/lead` — endpoint unique des formulaires (antispam honeypot + jeton horodaté)

Sans clé Resend configurée, les formulaires répondent proprement par un message d'erreur invitant à appeler — le reste du site fonctionne normalement.

## Déploiement

Déployé sur Vercel (`nommanest-property.vercel.app`), domaine cible : `nommanest.com`. Images optimisées en WebP uniquement (l'encodage AVIF était trop lent au premier chargement).

## Charte graphique

Vert forêt `#004637` · Beige sable `#F6DFA5` · Noir `#141414` — typographies Questrial / Jost (équivalents web de Century Gothic / Gilroy). Logo et déclinaisons dans `public/`.

Les photos proviennent d'Unsplash (libres de droits) — crédits dans `public/images/credits.json`.
