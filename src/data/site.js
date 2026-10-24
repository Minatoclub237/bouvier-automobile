// Coordonnées uniques de Bouvier Automobile (sources : ancien site bouvierautomobile.com, fiche Google,
// profils Turo et Getaround, registre des entreprises — relevés le 2026-10-24).
// À confirmer avec le client : capital social, horaires de remise des clés.
export const site = {
  name: 'Bouvier Automobile',
  legal: 'BOUVIER AUTOMOBILE SAS',
  tagline: 'Location de véhicules',
  url: 'https://bouvierautomobile.com',
  phone: '06 33 27 37 61',
  phoneHref: 'tel:+33633273761',
  email: 'fabrice@bouvierautomobile.com',
  city: 'Aix-les-Bains',
  postal: '73100',
  region: 'Savoie',
  zone: ['Aix-les-Bains', 'Chambéry', 'Annecy'],
  // siège social (domiciliation) — ne sert qu'aux mentions légales
  seat: '47 rue Vivienne, 75002 Paris',
  mapsUrl: 'https://www.google.com/maps?cid=12341180839727214371',
  mapQuery: 'Gare d’Aix-les-Bains',
  turo: 'https://turo.com/fr/fr/host/45582106',
  getaround: 'https://fr.getaround.com/users/6883320',
  rating: { value: '4,9', count: 217 },
  ratings: {
    google: { value: '5,0', count: 3 },
    turo: { value: '5,0', count: 91, trips: 96 },
    getaround: { value: '4,9', count: 123, trips: 265 },
  },
  rentals: '+350',
  hours: [
    { days: 'Réservation en ligne', time: '24 h/24, 7 j/7' },
    { days: 'Remise des clés', time: 'Sur rendez-vous' },
  ],
  siren: '105 785 968',
  siret: '105 785 968 00014',
  vat: 'FR09105785968',
  capital: '',
  president: 'Fabrice Bouvier',
  incorporated: 'juin 2026',
};

export const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/flotte', label: 'Nos véhicules' },
  { href: '/services', label: 'Services' },
  { href: '/vendre', label: 'Vendre ma voiture' },
  { href: '/histoire', label: 'Qui sommes-nous' },
  { href: '/contact', label: 'Contact' },
];

export const services = [
  { key: 'citadines', title: 'Citadines', media: { video: '/loops/citadines' }, page: '/media/twingo-face',
    text: 'Twingo, Aygo, C1 et 208 : des petites voitures économiques, faciles à garer, aussi à l’aise en ville que sur les routes de montagne.' },
  { key: 'familiale', title: 'Compacte 5 places', media: { img: '/media/308-route' }, page: '/media/308-interieur',
    text: 'La Peugeot 308 : grand coffre, écran tactile, radar de recul et régulateur. Idéale pour un week-end au bord du lac ou une semaine au ski.' },
  { key: 'utilitaires', title: 'Utilitaires', media: { video: '/loops/kangoo' }, page: '/media/kangoo-cargo',
    text: 'Deux Renault Kangoo de 3 m³ avec girafon de toit : déménagement, meubles, matériaux ou passage à la déchetterie de Drumettaz.' },
  { key: 'montagne', title: 'Équipés pour la montagne', media: { img: '/media/twingo-interieur' }, page: '/media/c1-interieur',
    text: 'Pneus neige, chaînes ou chaussettes, porte-skis, siège bébé ISOFIX et rehausseurs : sur demande, 24 h avant la location.' },
  { key: 'achat-revente', title: 'Achat & revente', media: { img: '/media/c4-cactus' }, page: '/media/megane-interieur',
    text: 'Nous achetons et revendons des véhicules sélectionnés avec soin : des voitures fiables, propres et au meilleur prix.' },
  { key: 'reprise', title: 'Reprise de votre véhicule', media: { img: '/media/308-poste' }, page: '/media/308-banquette',
    text: 'Roulant ou non, en bon état ou à réparer : une estimation rapide, une offre juste et un rachat simplifié.' },
];

export const steps = [
  { n: '01', title: 'Choisissez', text: 'Votre véhicule et vos dates, sur Turo ou Getaround.' },
  { n: '02', title: 'Réservez', text: 'Paiement en ligne, assurance comprise. Dernière minute acceptée.' },
  { n: '03', title: 'Récupérez les clés', text: 'À Aix-les-Bains, près de la gare, ou à Annecy.' },
  { n: '04', title: 'Roulez', text: 'Rendez la voiture propre, avec le même niveau de carburant.' },
];

export const sellSteps = [
  { n: '01', title: 'Décrivez', text: 'Votre véhicule en deux minutes, roulant ou non.' },
  { n: '02', title: 'Estimation rapide', text: 'Nous étudions votre demande et vous rappelons vite.' },
  { n: '03', title: 'Offre juste', text: 'Un prix clair, fondé sur l’état réel et le marché.' },
  { n: '04', title: 'Rachat simplifié', text: 'Paiement et démarches : vous n’avez plus qu’à signer.' },
];

export const pillars = [
  { title: 'Prêtes à partir', video: '/loops/twingo',
    text: 'Des voitures propres, révisées et entretenues. Pneus neige l’hiver, roue de secours, câble USB : tout est prévu pour la route.' },
  { title: 'Réservées en deux minutes', video: '/loops/aygo',
    text: 'Sur Turo ou Getaround, vous choisissez vos dates et payez en ligne, assurance comprise. Les réservations de dernière minute sont acceptées.' },
  { title: 'Un loueur d’ici', video: '/loops/c1',
    text: 'Fabrice répond vite et s’adapte : remise des clés à Aix-les-Bains ou à Annecy. Plus de 350 locations, 4,9 / 5 de moyenne.' },
];
