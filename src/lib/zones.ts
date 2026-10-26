/**
 * Zones d'intervention de Nommanest : Nantes, Pays de Retz et alentours.
 * Source unique pour les sections « zones », les pages locales, le JSON-LD et le sitemap.
 */

export type Secteur = {
  /** Nom du secteur affiché (ex. « Côte de Jade ») */
  nom: string;
  communes: string[];
};

export type Zone = {
  slug: string;
  /** Nom court de la zone (ex. « Pornic ») */
  nom: string;
  /** Titre SEO (balise <title>) */
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  /** Pourquoi la courte durée fonctionne ici : 3 atouts propres au territoire */
  atoutsTitre: string;
  atouts: { titre: string; texte: string }[];
  /** Ce que notre présence locale change concrètement */
  terrainTitre: string;
  terrain: string[];
  secteurs: Secteur[];
  faq: { q: string; a: string }[];
  /** Exemple affiché dans le champ « Ville du bien » du formulaire */
  placeholderVille: string;
  /** Pour le JSON-LD areaServed */
  geo: { type: "City" | "AdministrativeArea"; nom: string };
};

/* ————— Communes ————— */

export const COMMUNES_METROPOLE = [
  "Nantes",
  "Rezé",
  "Saint-Herblain",
  "Saint-Sébastien-sur-Loire",
  "Vertou",
  "Orvault",
  "Carquefou",
  "La Chapelle-sur-Erdre",
  "Bouguenais",
  "Couëron",
  "Basse-Goulaine",
  "Les Sorinières",
  "Bouaye",
  "Saint-Jean-de-Boiseau",
  "Indre",
  "Sautron",
];

export const COMMUNES_COTE_DE_JADE = [
  "Pornic",
  "Saint-Brevin-les-Pins",
  "Saint-Michel-Chef-Chef",
  "Tharon-Plage",
  "La Plaine-sur-Mer",
  "Préfailles",
  "La Bernerie-en-Retz",
  "Les Moutiers-en-Retz",
  "Villeneuve-en-Retz",
];

export const COMMUNES_RETZ_TERRES = [
  "Chauvé",
  "Saint-Père-en-Retz",
  "Paimbœuf",
  "Corsept",
  "Frossay",
  "Chaumes-en-Retz",
  "Sainte-Pazanne",
  "Machecoul-Saint-Même",
  "Port-Saint-Père",
  "Saint-Hilaire-de-Chaléons",
];

export const COMMUNES_ALENTOURS = [
  "Saint-Philbert-de-Grand-Lieu",
  "La Chevrolière",
  "Pont-Saint-Martin",
  "Saint-Aignan-Grandlieu",
  "Le Pellerin",
  "La Montagne",
  "Brains",
];

/** Vue d'ensemble utilisée sur l'accueil, la conciergerie et la page hub. */
export const TERRITOIRES = [
  {
    titre: "Nantes & métropole",
    accroche:
      "Centre historique, Île de Nantes, Trentemoult, Erdre : une demande voyageurs soutenue toute l'année, portée par le tourisme d'affaires, les congrès et les événements.",
    communes: COMMUNES_METROPOLE,
    href: "/conciergerie",
    lien: "Conciergerie à Nantes",
    image: "/images/nantes-trentemoult.jpg",
    imageAlt: "Les maisons colorées de Trentemoult, au bord de la Loire",
  },
  {
    titre: "Pays de Retz & Côte de Jade",
    accroche:
      "De Saint-Brevin à Pornic et jusqu'à la baie de Bourgneuf : plages, pêcheries et sentier côtier. Un littoral très recherché en saison, et de plus en plus hors saison.",
    communes: [...COMMUNES_COTE_DE_JADE, ...COMMUNES_RETZ_TERRES],
    href: "/conciergerie/pays-de-retz",
    lien: "Conciergerie en Pays de Retz",
    image: "/images/retz-pornic-jetee.jpg",
    imageAlt: "Pêcherie sur pilotis au coucher du soleil sur la côte de Pornic",
  },
  {
    titre: "Sud-Loire & alentours",
    accroche:
      "Lac de Grand-Lieu, bords de Loire et communes entre Nantes et l'océan : des maisons et gîtes appréciés des familles et des voyageurs en itinérance.",
    communes: COMMUNES_ALENTOURS,
    href: "/zones-intervention#alentours",
    lien: "Voir toutes les communes",
    image: "/images/nantes-loire-sunset.jpg",
    imageAlt: "La Loire au coucher du soleil",
  },
] as const;

/** Libellé court réutilisé partout (bandeaux, footer, contact). */
export const ZONE_LABEL = "Nantes, Pays de Retz & alentours";

/* ————— Pages locales /conciergerie/[slug] ————— */

const REGLES_LOCALES =
  "Partout en France, un meublé de tourisme doit être déclaré en mairie et obtenir un numéro d'enregistrement à afficher sur les annonces. Les communes peuvent ajouter leurs propres règles (plafond de nuitées, changement d'usage pour une résidence secondaire, quotas) : nous vérifions celles de votre commune lors de l'audit, avant toute mise en ligne.";

export const ZONES: Zone[] = [
  {
    slug: "pays-de-retz",
    nom: "Pays de Retz",
    seoTitle: "Conciergerie Airbnb Pays de Retz & Côte de Jade — location courte durée",
    seoDescription:
      "Conciergerie Airbnb en Pays de Retz et sur la Côte de Jade (Pornic, Saint-Brevin, La Plaine-sur-Mer, Préfailles…) : annonces, voyageurs, ménage, linge. 0 € de frais fixe, revenus versés directement.",
    eyebrow: "Conciergerie — Pays de Retz & Côte de Jade",
    h1: "Votre logement en Pays de Retz,",
    h1Accent: "loué sereinement toute l'année.",
    intro:
      "Maison de famille à Préfailles, appartement face à la mer à Saint-Brevin, longère dans les terres : Nommanest assure la conciergerie et l'assistance opérationnelle de votre location courte durée sur tout le Pays de Retz — et vos revenus sont versés directement sur votre compte.",
    image: "/images/retz-pornic-jetee.jpg",
    imageAlt: "Pêcherie sur pilotis au coucher du soleil, sur la côte rocheuse du Pays de Retz",
    imageCaption: "Les pêcheries de la Côte de Jade",
    atoutsTitre: "Un littoral qui attire bien au-delà de l'été",
    atouts: [
      {
        titre: "Une saison qui s'allonge",
        texte:
          "Juillet-août restent le cœur de la demande, mais week-ends prolongés, ponts de mai, vacances d'automne et séjours de télétravail remplissent désormais les ailes de saison. Encore faut-il ajuster les prix au bon moment.",
      },
      {
        titre: "Nantes à moins d'une heure",
        texte:
          "Une clientèle nantaise et francilienne fidèle, qui réserve souvent à la dernière minute dès que la météo s'annonce belle : la réactivité de l'annonce fait la différence.",
      },
      {
        titre: "Des biens de caractère",
        texte:
          "Maisons de pêcheurs, villas balnéaires, longères au calme : des logements qui se démarquent, à condition d'être bien photographiés et décrits pour le bon public.",
      },
    ],
    terrainTitre: "Ce que notre présence sur le littoral change pour vous",
    terrain: [
      "Un réseau de prestataires ménage et blanchisserie locaux, capables d'enchaîner les rotations du samedi en pleine saison.",
      "Une tarification qui suit le calendrier du littoral : vacances scolaires, ponts, grandes marées, événements locaux.",
      "Un suivi du logement pensé pour les résidences secondaires : passages réguliers, contrôle après chaque départ, alerte en cas de souci.",
      "Des recommandations voyageurs locales : plages, sentier côtier, marchés, bonnes tables — de quoi décrocher des avis cinq étoiles.",
    ],
    secteurs: [
      { nom: "Côte de Jade", communes: COMMUNES_COTE_DE_JADE },
      { nom: "Pays de Retz intérieur & estuaire", communes: COMMUNES_RETZ_TERRES },
      { nom: "Lac de Grand-Lieu", communes: COMMUNES_ALENTOURS.slice(0, 4) },
    ],
    faq: [
      {
        q: "Intervenez-vous sur toute la Côte de Jade ?",
        a: "Oui : de Saint-Brevin-les-Pins à Villeneuve-en-Retz, en passant par Saint-Michel-Chef-Chef, Tharon-Plage, La Plaine-sur-Mer, Préfailles, Pornic, La Bernerie-en-Retz et Les Moutiers-en-Retz, ainsi que dans les communes du Pays de Retz intérieur.",
      },
      {
        q: "Ma maison n'est louée que l'été, est-ce intéressant ?",
        a: "Oui. Vous restez maître de votre calendrier : vous bloquez vos périodes d'occupation et nous organisons les séjours autour. Beaucoup de propriétaires découvrent avec l'audit que les ailes de saison (printemps, automne, week-ends) apportent un complément significatif.",
      },
      {
        q: "Quelles règles s'appliquent à la location courte durée sur le littoral ?",
        a: REGLES_LOCALES,
      },
      {
        q: "Comment est calculée votre rémunération ?",
        a: "Comme à Nantes : un pourcentage convenu sur le chiffre d'affaires locatif réellement généré, 19 % avec Nest Standard ou 23 % avec Nomma Performance. Aucun frais fixe ; le ménage et la blanchisserie sont refacturés au réel. Nommanest n'encaisse ni loyers ni dépôts de garantie.",
      },
    ],
    placeholderVille: "Préfailles, Saint-Michel-Chef-Chef…",
    geo: { type: "AdministrativeArea", nom: "Pays de Retz" },
  },
  {
    slug: "pornic",
    nom: "Pornic",
    seoTitle: "Conciergerie Airbnb à Pornic — location courte durée",
    seoDescription:
      "Conciergerie Airbnb à Pornic, Sainte-Marie-sur-Mer et Le Clion-sur-Mer : annonce, accueil des voyageurs, ménage, linge, suivi du logement. 0 € de frais fixe, deux formules (19 % ou 23 %).",
    eyebrow: "Conciergerie — Pornic",
    h1: "Votre location à Pornic,",
    h1Accent: "sans y passer vos week-ends.",
    intro:
      "Vieux port, château, criques et sentier des douaniers : Pornic est l'une des destinations les plus demandées de la Côte de Jade. Nommanest prend en charge l'assistance opérationnelle complète de votre logement — vous gardez la liberté d'en profiter quand vous le souhaitez.",
    image: "/images/retz-pecherie.jpg",
    imageAlt: "Pêcherie en bois au bout de son ponton, sur la mer calme à Pornic",
    imageCaption: "Une pêcherie à Pornic",
    atoutsTitre: "Pourquoi Pornic se loue si bien",
    atouts: [
      {
        titre: "Une destination star",
        texte:
          "Station classée, vieille ville animée, port de plaisance, thalasso et golf : Pornic attire couples, familles et curistes, avec une demande qui dépasse largement juillet-août.",
      },
      {
        titre: "Des quartiers aux publics différents",
        texte:
          "Centre et vieux port pour les courts séjours, Sainte-Marie-sur-Mer pour les familles en quête de plages, Le Clion pour le calme : l'annonce doit parler à la bonne clientèle.",
      },
      {
        titre: "Une concurrence qui se joue sur les détails",
        texte:
          "L'offre est dense : photos, réactivité, propreté irréprochable et avis font la différence entre un calendrier plein et un logement qui attend.",
      },
    ],
    terrainTitre: "Notre méthode à Pornic",
    terrain: [
      "Annonce rédigée et photographiée pour valoriser ce que les voyageurs cherchent ici : vue mer, accès plage, stationnement, proximité du port.",
      "Prix ajustés au fil des vacances scolaires, des ponts et des événements locaux, y compris les week-ends d'arrière-saison.",
      "Ménage et linge coordonnés avec des prestataires du secteur, refacturés au réel.",
      "Accueil des voyageurs et réponses rapides, même pour les réservations de dernière minute.",
    ],
    secteurs: [
      {
        nom: "Pornic et ses quartiers",
        communes: ["Centre & vieux port", "Sainte-Marie-sur-Mer", "Le Clion-sur-Mer", "La Birochère", "Gourmalon"],
      },
      {
        nom: "Communes voisines",
        communes: ["Préfailles", "La Plaine-sur-Mer", "La Bernerie-en-Retz", "Les Moutiers-en-Retz", "Chauvé", "Saint-Père-en-Retz"],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous dans tout Pornic ?",
        a: "Oui : centre et vieux port, Sainte-Marie-sur-Mer, Le Clion-sur-Mer, Gourmalon, La Birochère, ainsi que dans les communes voisines (Préfailles, La Plaine-sur-Mer, La Bernerie-en-Retz, Les Moutiers-en-Retz…).",
      },
      {
        q: "Puis-je continuer à profiter de mon logement ?",
        a: "Bien sûr. Il vous suffit de bloquer vos dates : nous organisons les séjours des voyageurs autour de vos venues, et le logement est prêt à votre arrivée.",
      },
      {
        q: "Quelles démarches pour louer en meublé de tourisme à Pornic ?",
        a: REGLES_LOCALES,
      },
      {
        q: "Qui encaisse les revenus des locations ?",
        a: "Vous, directement, via les plateformes. Nommanest n'encaisse jamais les loyers ni les dépôts de garantie et facture uniquement ses prestations : 19 % (Nest Standard) ou 23 % (Nomma Performance) du chiffre d'affaires locatif généré, sans frais fixe.",
      },
    ],
    placeholderVille: "Pornic — Sainte-Marie-sur-Mer",
    geo: { type: "City", nom: "Pornic" },
  },
  {
    slug: "saint-brevin-les-pins",
    nom: "Saint-Brevin-les-Pins",
    seoTitle: "Conciergerie Airbnb à Saint-Brevin-les-Pins — location courte durée",
    seoDescription:
      "Conciergerie Airbnb à Saint-Brevin-les-Pins, Saint-Brevin-l'Océan et Mindin : annonce, voyageurs, ménage, linge, suivi. 0 € de frais fixe, revenus versés directement sur votre compte.",
    eyebrow: "Conciergerie — Saint-Brevin-les-Pins",
    h1: "Votre logement à Saint-Brevin,",
    h1Accent: "entre pins et océan, entre de bonnes mains.",
    intro:
      "Longues plages, forêt de pins, estuaire de la Loire : Saint-Brevin-les-Pins est une station familiale prisée, aux portes de Saint-Nazaire. Nommanest assure la conciergerie de votre location courte durée, de l'annonce au départ des voyageurs.",
    image: "/images/artdevivre-terrasse.jpg",
    imageAlt: "Terrasse ensoleillée d'un logement de vacances",
    imageCaption: "L'art de vivre en bord de mer",
    atoutsTitre: "Ce qui fait la force de Saint-Brevin",
    atouts: [
      {
        titre: "Une station familiale",
        texte:
          "Plages surveillées, pistes cyclables, pinède : les familles réservent des séjours d'une semaine en été et reviennent d'une année sur l'autre. Les grands logements avec extérieur sont particulièrement recherchés.",
      },
      {
        titre: "Saint-Nazaire juste en face",
        texte:
          "De l'autre côté du pont, chantiers navals et industrie aéronautique génèrent des séjours professionnels en semaine, toute l'année : un relais précieux hors saison.",
      },
      {
        titre: "La Loire à vélo et l'estuaire",
        texte:
          "Point d'arrivée de la Loire à vélo et étape de l'estuaire et de ses œuvres d'art : des voyageurs itinérants pour une ou deux nuits, de mai à octobre.",
      },
    ],
    terrainTitre: "Notre méthode à Saint-Brevin",
    terrain: [
      "Une stratégie qui mêle séjours vacances l'été et séjours professionnels en semaine le reste de l'année.",
      "Des annonces qui mettent en avant ce qui compte ici : distance à la plage, jardin, parking, local vélos.",
      "Ménage, linge et contrôle du logement après chaque départ, avec des prestataires du secteur.",
      "Un interlocuteur unique, disponible pour vous comme pour vos voyageurs.",
    ],
    secteurs: [
      {
        nom: "Saint-Brevin et ses quartiers",
        communes: ["Saint-Brevin-l'Océan", "Saint-Brevin-les-Pins centre", "Mindin", "Le Pointeau", "Les Rochelets"],
      },
      {
        nom: "Communes voisines",
        communes: ["Saint-Michel-Chef-Chef", "Tharon-Plage", "Corsept", "Paimbœuf", "Saint-Père-en-Retz"],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous à Saint-Brevin-l'Océan et à Mindin ?",
        a: "Oui, dans tous les quartiers de Saint-Brevin-les-Pins, ainsi qu'à Saint-Michel-Chef-Chef, Tharon-Plage, Corsept et Paimbœuf.",
      },
      {
        q: "Mon logement peut-il être loué hors saison ?",
        a: "Oui : la proximité de Saint-Nazaire attire des voyageurs professionnels en semaine, et les week-ends d'arrière-saison restent demandés. L'audit gratuit vous donne une estimation chiffrée mois par mois.",
      },
      {
        q: "Quelles démarches pour louer en meublé de tourisme à Saint-Brevin ?",
        a: REGLES_LOCALES,
      },
      {
        q: "Comment est calculée votre rémunération ?",
        a: "Un pourcentage convenu sur le chiffre d'affaires locatif réellement généré : 19 % avec Nest Standard, 23 % avec Nomma Performance. Aucun frais fixe, ménage et blanchisserie refacturés au réel, revenus versés directement sur votre compte.",
      },
    ],
    placeholderVille: "Saint-Brevin-l'Océan",
    geo: { type: "City", nom: "Saint-Brevin-les-Pins" },
  },
];

export function getZone(slug: string) {
  return ZONES.find((z) => z.slug === slug);
}
