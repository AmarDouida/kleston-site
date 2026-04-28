export type Produit = {
  id: string
  ref: string
  nom: { fr: string; en: string }
  categorie: string
  description: { fr: string; en: string }
  dimensions: string
  materiaux: string[]
  couleurs: string
  certifications: string[]
  secteurs: string[]
  accessoires?: string[]
  image: string
  featured?: boolean
}

export type Categorie = {
  id: string
  slug: { fr: string; en: string }
  nom: { fr: string; en: string }
  description: { fr: string; en: string }
  image: string
}

export const categories: Categorie[] = [
  {
    id: 'mains-courantes',
    slug: { fr: 'mains-courantes', en: 'mains-courantes' },
    nom: { fr: 'Systèmes de main courante', en: 'Handrail Systems' },
    description: {
      fr: 'Mains courantes en vinyle, inox ou bois. Conformes aux normes internationales. 32 coloris disponibles.',
      en: 'Handrails in vinyl, stainless steel or wood. Compliant with international standards. 32 colors available.',
    },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85&fm=webp',
  },
  {
    id: 'main-courante-protection-murale',
    slug: { fr: 'main-courante-protection-murale', en: 'main-courante-protection-murale' },
    nom: { fr: 'Main courante + protection murale', en: 'Handrail + Wall Protection' },
    description: {
      fr: 'Systèmes combinés pour hôpitaux, CHSLD et établissements institutionnels. Antibactériens.',
      en: 'Combined systems for hospitals, long-term care and institutional facilities. Antibacterial.',
    },
    image: 'https://images.unsplash.com/photo-1631815589068-dac4c3aa4c87?w=1200&q=85&fm=webp',
  },
  {
    id: 'protection-murale-antichoc',
    slug: { fr: 'protection-murale-antichoc', en: 'protection-murale-antichoc' },
    nom: { fr: 'Protection murale antichoc', en: 'Impact Wall Protection' },
    description: {
      fr: 'Bandes de protection pour couloirs à forte circulation. Résistance aux chocs certifiée.',
      en: 'Protection strips for high-traffic corridors. Certified shock resistance.',
    },
    image: 'https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=1200&q=85&fm=webp',
  },
  {
    id: 'protection-angle',
    slug: { fr: 'protection-angle', en: 'protection-angle' },
    nom: { fr: "Protection d'angle", en: 'Corner Protection' },
    description: {
      fr: "Protège les angles des murs et colonnes. Vinyle sur aluminium ou inox 304.",
      en: 'Protects wall and column corners. Vinyl on aluminum or 304 stainless steel.',
    },
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85&fm=webp',
  },
]

export const produits: Produit[] = [
  // ═══ GAMME 1 — SYSTÈMES DE MAIN COURANTE ═══
  {
    id: 'wg50',
    ref: 'WG50',
    nom: { fr: 'Main courante vinyle WG50', en: 'Vinyl Handrail WG50' },
    categorie: 'mains-courantes',
    description: {
      fr: "Main courante en vinyle avec tube de 35mm. Design ergonomique avec texture décorative chaleureuse. Brevetée (Institut de brevets turc N° 2007 03 639). Support en profilé aluminium continu.",
      en: 'Vinyl handrail with 35mm tube. Ergonomic design with warm decorative texture. Patented (Turkish Patent Institute No. 2007 03 639). Continuous aluminum profile support.',
    },
    dimensions: 'Hauteur: 93mm · Profondeur: 85mm · Tube: 35mm · Longueur: 4m',
    materiaux: ['Vinyle antibactérien', 'Aluminium'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien', 'VOC Free', 'ROHS'],
    secteurs: ['Hôpitaux', 'CHSLD', 'Écoles', 'Hôtels', 'Bâtiments publics'],
    accessoires: ['WG010 Support mural', 'WG011 Coude', 'WG017 Anneau', 'WG018 Bouchon'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85&fm=webp',
    featured: true,
  },
  {
    id: 'wg42',
    ref: 'WG42',
    nom: { fr: 'Main courante inox + vinyle WG42', en: 'Stainless + Vinyl Handrail WG42' },
    categorie: 'mains-courantes',
    description: {
      fr: "Main courante au design esthétique et moderne grâce aux connexions en acier inoxydable. Diamètre 42mm. Grande résistance aux chocs et aux rayures. Combinaison premium inox + vinyle.",
      en: 'Handrail with modern aesthetic design thanks to stainless steel connections. 42mm diameter. High resistance to shocks and scratches. Premium stainless steel + vinyl combination.',
    },
    dimensions: 'Diamètre: 42mm · Hauteur: 81mm · Profondeur: 71mm · Longueur: 4m',
    materiaux: ['Inox 304', 'Vinyle antibactérien'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien', 'VOC Free', 'ROHS'],
    secteurs: ['Hôpitaux', 'Hôtels', 'Centres commerciaux', 'Bureaux'],
    accessoires: ['WG033 Support inox', 'WG034 Coude inox'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85&fm=webp',
    featured: true,
  },
  {
    id: 'wg42-2',
    ref: 'WG42-2',
    nom: { fr: 'Main courante bois + inox WG42-2', en: 'Wood + Stainless Handrail WG42-2' },
    categorie: 'mains-courantes',
    description: {
      fr: "Design élégant avec corps en bois naturel et raccords en acier inoxydable. Finition premium pour espaces haut de gamme. Diamètre 42mm, 4 mètres par profil.",
      en: 'Elegant design with natural wood body and stainless steel fittings. Premium finish for high-end spaces. 42mm diameter, 4 meters per profile.',
    },
    dimensions: 'Diamètre: 42.40mm · Hauteur: 152mm · Longueur: 4m',
    materiaux: ['Bois naturel', 'Inox 304'],
    couleurs: 'Finitions bois naturelles',
    certifications: ['CE', 'ISO 9001'],
    secteurs: ['Hôtels luxe', 'Résidences premium', 'Espaces commerciaux haut de gamme'],
    accessoires: ['WG038 Coude inox', 'WG039 Support inox', 'WG043 Anneau inox'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fm=webp',
  },
  {
    id: 'wg42-4',
    ref: 'WG42-4',
    nom: { fr: 'Main courante vinyle WG42-4 (PMR)', en: 'Vinyl Handrail WG42-4 (Accessibility)' },
    categorie: 'mains-courantes',
    description: {
      fr: "Conforme aux normes d'accessibilité internationales. Distance au mur de 40mm respectant les exigences PMR. Montage facile, design décoratif. Idéal pour les établissements devant répondre aux normes d'accessibilité universelle.",
      en: 'Compliant with international accessibility standards. 40mm wall clearance meeting PMR requirements. Easy installation, decorative design. Ideal for facilities meeting universal accessibility standards.',
    },
    dimensions: 'Diamètre: 42mm · Hauteur: 148mm · Profondeur: 83mm · Distance mur: 40mm · Longueur: 4m',
    materiaux: ['Vinyle antibactérien', 'Aluminium'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien', 'PMR/Accessibilité'],
    secteurs: ['Hôpitaux', 'CHSLD', 'Écoles', 'Bâtiments publics', 'Accessibilité universelle'],
    accessoires: ['WG062 Support', 'WG063 Coude'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=85&fm=webp',
    featured: true,
  },
  {
    id: 'wg42-5',
    ref: 'WG42-5',
    nom: { fr: 'Main courante aluminium WG42-5', en: 'Aluminum Handrail WG42-5' },
    categorie: 'mains-courantes',
    description: {
      fr: "Main courante avec support en aluminium robuste. Idéale pour hôpitaux, bureaux, bâtiments publics, couloirs et escaliers. Diamètre 42mm, 32 coloris.",
      en: 'Handrail with robust aluminum support. Ideal for hospitals, offices, public buildings, corridors and staircases. 42mm diameter, 32 colors.',
    },
    dimensions: 'Diamètre: 42mm · Hauteur: 86mm · Support aluminium · Longueur: 4m',
    materiaux: ['Vinyle antibactérien', 'Aluminium'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien'],
    secteurs: ['Hôpitaux', 'Bureaux', 'Bâtiments publics', 'Couloirs', 'Escaliers'],
    accessoires: ['WG064 Support', 'WG063 Coude'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=85&fm=webp',
  },
  {
    id: 'wg42-ss',
    ref: 'WG42 SS',
    nom: { fr: 'Main courante inox 304 WG42 SS', en: 'Stainless Steel 304 Handrail WG42 SS' },
    categorie: 'mains-courantes',
    description: {
      fr: "Main courante entièrement en acier inoxydable 304. Conçue conformément aux normes internationales. Résistance maximale à la corrosion et aux produits chimiques. Pour environnements exigeants.",
      en: 'Handrail entirely in 304 stainless steel. Designed in compliance with international standards. Maximum resistance to corrosion and chemicals. For demanding environments.',
    },
    dimensions: 'Diamètre: 42mm · Hauteur: 153mm · Profondeur: 74mm · Longueur: 4m',
    materiaux: ['Inox 304'],
    couleurs: 'Inox brossé satiné',
    certifications: ['CE', 'ISO 9001', 'Inox 304'],
    secteurs: ['Cuisine industrielle', 'Pharmacie', 'Laboratoires', 'Zones humides', 'Industrie alimentaire'],
    accessoires: ['WG033 Support inox', 'WG039 Support inox', 'WG034 Coude inox'],
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=85&fm=webp',
    featured: true,
  },

  // ═══ GAMME 2 — MAIN COURANTE + PROTECTION MURALE ═══
  {
    id: 'wg145',
    ref: 'WG145',
    nom: { fr: 'Combiné main courante WG145', en: 'Combined Handrail WG145' },
    categorie: 'main-courante-protection-murale',
    description: {
      fr: "Système combiné main courante et protection murale. Structure ergonomique pour prise en main confortable. Fixation via profilé aluminium continu. Absorption des chocs grâce au joint inférieur. Formulation antibactérienne certifiée.",
      en: 'Combined handrail and wall protection system. Ergonomic structure for comfortable grip. Fixed via continuous aluminum profile. Shock absorption through lower seal. Certified antibacterial formulation.',
    },
    dimensions: 'Largeur: 145mm · Profondeur: 85mm · Longueur: 4m · Espacement supports: 60–75cm',
    materiaux: ['Vinyle antibactérien', 'Aluminium'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien', 'VOC Free', 'ROHS', 'Feu B1'],
    secteurs: ['Hôpitaux', 'CHSLD', 'Cliniques', 'Maisons de retraite'],
    accessoires: ['WG005 Support mural', 'WG007-2 Angle extérieur', 'WG007-1 Angle intérieur', 'WG006 Embouts'],
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=85&fm=webp',
    featured: true,
  },
  {
    id: 'wg145-1',
    ref: 'WG145-1',
    nom: { fr: 'Combiné main courante LED WG145-1', en: 'Combined Handrail LED WG145-1' },
    categorie: 'main-courante-protection-murale',
    description: {
      fr: "Identique au WG145 avec éclairage LED intégré pour une meilleure visibilité dans les couloirs et un design moderne. Parfait pour les établissements de santé cherchant à améliorer la sécurité nocturne.",
      en: 'Identical to WG145 with integrated LED lighting for better visibility in corridors and modern design. Perfect for healthcare facilities looking to improve nighttime safety.',
    },
    dimensions: 'Largeur: 145mm · Profondeur: 85mm · Longueur: 4m',
    materiaux: ['Vinyle antibactérien', 'Aluminium', 'LED intégré'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien', 'VOC Free'],
    secteurs: ['Hôpitaux', 'CHSLD', 'Cliniques', 'Établissements de nuit'],
    accessoires: ['WG005 Support mural', 'WG007-2 Angle extérieur', 'WG007-1 Angle intérieur', 'WG006 Embouts'],
    image: 'https://images.unsplash.com/photo-1631815589068-dac4c3aa4c87?w=800&q=85&fm=webp',
  },
  {
    id: 'wg152',
    ref: 'WG152',
    nom: { fr: 'Combiné main courante WG152 (6 po)', en: 'Combined Handrail WG152 (6 in)' },
    categorie: 'main-courante-protection-murale',
    description: {
      fr: "Système combiné main courante et protection murale en format 6 pouces (152mm). Fixation via profilé aluminium continu. Revêtement supérieur en vinyle anti-rayures avec propriétés antibactériennes certifiées et sans métaux lourds.",
      en: '6-inch (152mm) combined handrail and wall protection system. Fixed via continuous aluminum profile. Anti-scratch vinyl top coating with certified antibacterial properties and heavy metal free.',
    },
    dimensions: 'Largeur: 152mm (6 po) · Profondeur: 85mm · Longueur: 4m · Espacement: 60–75cm',
    materiaux: ['Vinyle antibactérien', 'Aluminium'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien', 'VOC Free', 'ROHS'],
    secteurs: ['Hôpitaux', 'CHSLD', 'Cliniques', 'Établissements institutionnels'],
    accessoires: ['WG005 Support', 'WG026 Embout gauche', 'WG027 Embout droit', 'WG028 Angle extérieur', 'WG029 Angle intérieur'],
    image: 'https://images.unsplash.com/photo-1580130601656-9d076b67320c?w=800&q=85&fm=webp',
    featured: true,
  },
  {
    id: 'dc140',
    ref: 'DC140',
    nom: { fr: 'Combiné compact DC140', en: 'Compact Combined DC140' },
    categorie: 'main-courante-protection-murale',
    description: {
      fr: "Système combiné main courante et protection murale en format compact 140mm. Joints en caoutchouc inférieurs pour absorption des chocs. Embouts assortis inclus. Idéal pour les espaces où la largeur de protection doit être modérée.",
      en: 'Compact 140mm combined handrail and wall protection system. Lower rubber seals for shock absorption. Matching end caps included. Ideal for spaces where protection width should be moderate.',
    },
    dimensions: 'Largeur: 140mm · Profondeur: 75mm · Longueur: 4m · Espacement: 60–75cm',
    materiaux: ['Vinyle antibactérien', 'Aluminium', 'Caoutchouc'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien'],
    secteurs: ['Hôpitaux', 'CHSLD', 'Cliniques', 'Résidences'],
    accessoires: ['DC005 Support', 'DC006-1 Embout gauche', 'DC006-2 Embout droit', 'DC007-1 Angle intérieur', 'DC007-2 Angle extérieur'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=85&fm=webp',
  },

  // ═══ GAMME 3 — PROTECTION MURALE ANTICHOC ═══
  {
    id: 'wg100',
    ref: 'WG100',
    nom: { fr: 'Protection murale WG100 (100mm)', en: 'Wall Protection WG100 (100mm)' },
    categorie: 'protection-murale-antichoc',
    description: {
      fr: "Bande de protection murale 100mm. Idéale pour salles d'attente, bureaux médicaux et salles de classe. Fixation via profilé aluminium continu. Absorbe les chocs grâce au joint inférieur, souvent utilisée comme butée de chaise.",
      en: '100mm wall protection strip. Ideal for waiting rooms, medical offices and classrooms. Fixed via continuous aluminum profile. Absorbs shocks through lower seal, often used as chair bumper.',
    },
    dimensions: 'Largeur: 100mm · Profondeur: 20mm · Longueur: 4m',
    materiaux: ['Vinyle antibactérien', 'Aluminium'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien', 'Feu Bs2d0'],
    secteurs: ["Salles d'attente", 'Bureaux médicaux', 'Salles de classe', 'Cliniques'],
    accessoires: ['WG020 Embouts droit et gauche'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85&fm=webp',
    featured: true,
  },
  {
    id: 'wg150',
    ref: 'WG150',
    nom: { fr: 'Protection murale WG150 (150mm)', en: 'Wall Protection WG150 (150mm)' },
    categorie: 'protection-murale-antichoc',
    description: {
      fr: "Protection murale 150mm pour couloirs de moins de 2 mètres de large. Support fabriqué en PVC totalement recyclé. Fixation via profilé aluminium continu. Absorbe les chocs grâce au joint inférieur.",
      en: '150mm wall protection for corridors less than 2 meters wide. Support made from fully recycled PVC. Fixed via continuous aluminum profile. Absorbs shocks through lower seal.',
    },
    dimensions: 'Largeur: 150mm · Profondeur: 20mm · Longueur: 4m',
    materiaux: ['Vinyle antibactérien', 'PVC recyclé'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien', 'CED recyclable'],
    secteurs: ['Couloirs étroits', 'Hôpitaux', 'CHSLD', 'Écoles'],
    accessoires: ['WG013-1 Embouts', 'WG014 Angle extérieur'],
    image: 'https://images.unsplash.com/photo-1631815589068-dac4c3aa4c87?w=800&q=85&fm=webp',
  },
  {
    id: 'wg200',
    ref: 'WG200',
    nom: { fr: 'Protection murale WG200 (200mm)', en: 'Wall Protection WG200 (200mm)' },
    categorie: 'protection-murale-antichoc',
    description: {
      fr: "Protection murale 200mm pour couloirs à forte circulation. Absorbe efficacement les chocs grâce au joint inférieur et à l'amortisseur de chocs intégré. Format large pour une protection optimale contre chariots, fauteuils roulants et équipements médicaux.",
      en: '200mm wall protection for high-traffic corridors. Effectively absorbs shocks through lower seal and integrated shock absorber. Wide format for optimal protection against carts, wheelchairs and medical equipment.',
    },
    dimensions: 'Largeur: 200mm · Profondeur: 35mm · Longueur: 4m',
    materiaux: ['Vinyle antibactérien', 'Aluminium', 'TPE amortisseur'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien', 'VOC Free', 'ROHS'],
    secteurs: ['Couloirs hôpitaux', 'CHSLD', 'Zones de fort trafic', 'Entrepôts médicaux'],
    accessoires: ['WG001 Embout gauche', 'WG002 Embout droit', 'WG003 Angle externe', 'WG004 Angle interne'],
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=85&fm=webp',
    featured: true,
  },
  {
    id: 'wg201',
    ref: 'WG201',
    nom: { fr: 'Protection murale WG201 slim (200mm)', en: 'Slim Wall Protection WG201 (200mm)' },
    categorie: 'protection-murale-antichoc',
    description: {
      fr: "Version slim de la protection murale 200mm. Profondeur réduite à 20mm pour une installation discrète. Très utilisé dans les hôpitaux et espaces à forte fréquentation. Idéal pour couloirs de moins de 2 mètres.",
      en: 'Slim version of the 200mm wall protection. Reduced depth of 20mm for discreet installation. Widely used in hospitals and high-traffic spaces. Ideal for corridors less than 2 meters.',
    },
    dimensions: 'Largeur: 200mm · Profondeur: 20mm · Longueur: 4m',
    materiaux: ['Vinyle antibactérien', 'Aluminium'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien'],
    secteurs: ['Hôpitaux', 'CHSLD', 'Couloirs étroits', 'Zones forte circulation'],
    accessoires: ['WG030 Embouts gauche et droit'],
    image: 'https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=800&q=85&fm=webp',
  },
  {
    id: 'wg200-ss',
    ref: 'WG200 SS',
    nom: { fr: 'Protection murale inox WG200 SS', en: 'Stainless Wall Protection WG200 SS' },
    categorie: 'protection-murale-antichoc',
    description: {
      fr: "Protection murale en acier inoxydable 304 qualité. Gaine inox 200mm x 1mm d'épaisseur, fixée sur profilés porteurs en aluminium. Absorbe les chocs grâce aux mèches amortissantes. Pour environnements exigeants: cuisine industrielle, pharmacie, laboratoires.",
      en: '304 quality stainless steel wall protection. 200mm x 1mm stainless casing, fixed on aluminum load-bearing profiles. Absorbs shocks through damping wicks. For demanding environments: industrial kitchen, pharmacy, laboratories.',
    },
    dimensions: "Largeur: 200mm · Épaisseur inox: 1mm · Longueur: 4m",
    materiaux: ['Inox 304'],
    couleurs: 'Inox brossé (SS01/SS02/SS03/SS04)',
    certifications: ['CE', 'ISO 9001', 'Inox 304', 'HACCP'],
    secteurs: ['Cuisine industrielle', 'Pharmacie', 'Laboratoires', 'Industrie alimentaire', 'Zones chimiques'],
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=85&fm=webp',
    featured: true,
  },

  // ═══ GAMME 4 — PROTECTION D'ANGLE ═══
  {
    id: 'cg50',
    ref: 'CG50',
    nom: { fr: "Protection d'angle vinyle CG50", en: 'Vinyl Corner Protection CG50' },
    categorie: 'protection-angle',
    description: {
      fr: "Protection d'angle 50mm x 50mm en vinyle indéformable et résistant aux rayures, avec support en aluminium et surface décorative. Conçu pour protéger les angles des murs dans tous types de bâtiments. Disponible en 1m, 1.5m ou toute la hauteur.",
      en: '50mm x 50mm corner protection in non-deformable, scratch-resistant vinyl with aluminum support and decorative surface. Designed to protect wall corners in all building types. Available in 1m, 1.5m or full height.',
    },
    dimensions: '50mm x 50mm · Hauteurs: 1m / 1.5m / toute hauteur',
    materiaux: ['Vinyle antibactérien', 'Aluminium'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien'],
    secteurs: ['Hôpitaux', 'CHSLD', 'Écoles', 'Commerces', 'Bureaux'],
    accessoires: ["WG012 Embout d'angle"],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=85&fm=webp',
    featured: true,
  },
  {
    id: 'cg76',
    ref: 'CG76',
    nom: { fr: "Protection d'angle vinyle CG76", en: 'Vinyl Corner Protection CG76' },
    categorie: 'protection-angle',
    description: {
      fr: "Protection d'angle 76mm x 76mm en vinyle sur aluminium. Format plus large pour une protection renforcée dans les zones à fort trafic. Capuchon de finition supérieur inclus. Disponible en 1m, 1.5m ou toute la hauteur du mur.",
      en: '76mm x 76mm corner protection in vinyl on aluminum. Wider format for enhanced protection in high-traffic areas. Top finishing cap included. Available in 1m, 1.5m or full wall height.',
    },
    dimensions: '76mm x 76mm · Hauteurs: 1m / 1.5m / toute hauteur',
    materiaux: ['Vinyle antibactérien', 'Aluminium'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien'],
    secteurs: ['Hôpitaux', 'CHSLD', 'Zones forte circulation', 'Entrepôts'],
    accessoires: ['WG008 Capuchon de finition'],
    image: 'https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=800&q=85&fm=webp',
  },
  {
    id: 'cg50s',
    ref: 'CG50S',
    nom: { fr: "Protection d'angle inox CG50S", en: 'Stainless Corner Protection CG50S' },
    categorie: 'protection-angle',
    description: {
      fr: "Protection d'angle 50mm x 50mm en acier inoxydable 304, épaisseur 1mm. Pour centres commerciaux, hôtels, restaurants, écoles et bâtiments publics. Fixation par vis ou adhésifs polyuréthane. Hauteur modulable. Aussi disponible en CG75S (75mm) et CG100S (100mm).",
      en: '50mm x 50mm corner protection in 304 stainless steel, 1mm thick. For shopping centers, hotels, restaurants, schools and public buildings. Fixed by screws or polyurethane adhesives. Adjustable height. Also available as CG75S (75mm) and CG100S (100mm).',
    },
    dimensions: "50mm x 50mm · Épaisseur: 1mm inox · Hauteurs: 1m / 1.5m / toute hauteur",
    materiaux: ['Inox 304'],
    couleurs: 'Inox brossé satiné',
    certifications: ['CE', 'ISO 9001', 'Inox 304'],
    secteurs: ['Centres commerciaux', 'Hôtels', 'Restaurants', 'Écoles', 'Bâtiments publics'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85&fm=webp',
    featured: true,
  },
  {
    id: 'cg76b',
    ref: 'CG76B',
    nom: { fr: "Protection d'angle vinyle CG76B", en: 'Vinyl Corner Protection CG76B' },
    categorie: 'protection-angle',
    description: {
      fr: "Protection d'angle 75mm x 75mm en vinyle indéformable et résistant aux rayures. Version sans support aluminium, adhésive ou vissée directement. Pour crèches, dortoirs et hôpitaux où la protection des coins est critique. Disponible en 1.2m, 1.5m ou toute la hauteur.",
      en: '75mm x 75mm non-deformable, scratch-resistant vinyl corner protection. Version without aluminum support, adhesive or directly screwed. For daycares, dormitories and hospitals where corner protection is critical. Available in 1.2m, 1.5m or full height.',
    },
    dimensions: '75mm x 75mm · Hauteurs: 1.2m / 1.5m / toute hauteur',
    materiaux: ['Vinyle antibactérien'],
    couleurs: '32 coloris disponibles',
    certifications: ['CE', 'ISO 9001', 'Antibactérien'],
    secteurs: ['Crèches', 'Dortoirs', 'Hôpitaux pédiatriques', 'Établissements scolaires'],
    image: 'https://images.unsplash.com/photo-1580130601656-9d076b67320c?w=800&q=85&fm=webp',
  },
]

export function getProduitsByCategorie(categorieId: string): Produit[] {
  return produits.filter((p) => p.categorie === categorieId)
}

export function getProduitById(id: string): Produit | undefined {
  return produits.find((p) => p.id === id)
}

export function getFeaturedProduits(): Produit[] {
  return produits.filter((p) => p.featured)
}

export function getCategorieById(id: string): Categorie | undefined {
  return categories.find((c) => c.id === id)
}
