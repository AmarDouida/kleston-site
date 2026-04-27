# KLESTON — BIBLE DU PROJET SITE VITRINE
## Playbook complet pour Claude Code
## Version 1.0 — Avril 2026

---

## VUE D'ENSEMBLE DU PROJET

**Nom:** Kleston
**Type:** Site vitrine B2B premium — Protection murale et sécurité architecturale
**Domaine:** kleston.ca (acheté sur Cloudflare)
**Stack:** Next.js 16, TypeScript strict, Tailwind v4, shadcn/ui, next-intl, Web3Forms, Vercel Analytics
**Environnement dev:** Windows + WSL2 Ubuntu 24.04 LTS
**Déploiement:** Vercel Pro (auto-deploy sur push main)

---

## IDENTITÉ DE MARQUE

**Positionnement:** Spécialiste québécois en systèmes de protection murale, mains courantes et sécurité architecturale pour établissements de santé, institutionnels et industriels.

**Slogan:** "La conformité livrée et installée"

**Palette de couleurs:**
```
--orange:        #FF5C00   (accent principal, CTA, highlights)
--orange-hover:  #E05200   (hover states)
--silver:        #B0B2B5   (argent, éléments secondaires)
--noir:          #1E1E1E   (header, footer, fonds sombres)
--noir-surface:  #2A2A2A   (surfaces sombres secondaires)
--creme:         #FAFAF8   (fond principal du site)
--blanc:         #FFFFFF   (cartes, sections alternées)
--gris-clair:    #F0F0EE   (sections alternées)
--gris-moyen:    #E0E0DE   (bordures, séparateurs)
--texte-1:       #1A1A1A   (texte principal)
--texte-2:       #4A4A4A   (texte secondaire)
--texte-3:       #7A7A7A   (texte tertiaire, labels)
```

**Typographies:**
- Titres: Barlow Condensed (Bold 700, ExtraBold 800, Black 900)
- Corps: Barlow (Light 300, Regular 400, Medium 500, SemiBold 600)
- Chargement via next/font/google UNIQUEMENT

**Logo SVG (KS monogramme):**
```svg
<svg viewBox="0 0 992 896" xmlns="http://www.w3.org/2000/svg">
  <polygon points="463 507 735 507 735 651 378 651 213 486 153 546 153 743 0 896 0 0 153 0 153 319 472 0 992 0 992 153 556 153 332.5 376.5 463 507" fill="#FF5C00"/>
  <path d="M992,743l-153,153l-713,0l153,-153l560,0l0,-336l-560,0l153,-153l560,0l0,489Z" fill="#B0B2B5"/>
</svg>
```

**Contact:**
- Téléphone: 514 550 8823
- Email: contact@kleston.ca
- Site: kleston.ca
- Contact: Boubekeur Douida — Directeur des ventes

---

## CATALOGUE PRODUITS (extrait du catalogue Dimafroid)

### Gamme 1 — Systèmes de main courante
```
WG50    — Main courante vinyle, Ø35mm, 32 couleurs, breveté
WG42    — Main courante inox + vinyle, Ø42mm, 32 couleurs
WG42-2  — Main courante bois + raccords inox, Ø42mm, premium
WG42-4  — Main courante vinyle, distance mur 40mm conforme normes, 32 couleurs
WG42 SS — Main courante inox 304, Ø42mm, format institutionnel
```

### Gamme 2 — Main courante + protection murale combinée
```
WG145   — Combiné 145mm x 85mm, ergonomique, antibactérien, 32 couleurs
WG145-1 — Identique WG145 avec LED intégré
WG152   — Combiné 152mm (6 pouces) x 85mm, antibactérien, 32 couleurs
DC140   — Combiné 140mm x 75mm, compact, 32 couleurs
```

### Gamme 3 — Protection murale antichoc
```
WG100    — 100mm x 20mm, salles d'attente, bureaux, 32 couleurs
WG150    — 150mm x 20mm, couloirs étroits, 32 couleurs
WG200    — 200mm x 35mm, couloirs forte circulation, amortisseur intégré, 32 couleurs
WG200 SS — 200mm inox 304, cuisine industrielle, pharma
```

### Gamme 4 — Protection d'angle
```
CG50   — 50mm x 50mm, vinyle sur alu, 32 couleurs
CG76   — 76mm x 76mm, vinyle sur alu, plus robuste, 32 couleurs
CG50S  — 50mm inox 304, centres commerciaux, hôtels
```

**Certifications produits:** CE, ISO 9001:2008, VOC Free, ROHS, Antibactérien (TÜBITAK), Résistance au feu B1, CED
**Couleurs disponibles:** 32 coloris (blanc, crème, beiges, gris, pastels, vifs)
**Longueur standard:** 4 mètres par profil
**Fixation:** Profilé aluminium continu, vissage ou collage selon modèle

---

## ARCHITECTURE DU SITE

### Sitemap complet
```
kleston.ca/
├── /fr/                          ← Home FR
│   ├── /fr/produits/             ← Catalogue FR
│   │   ├── /fr/produits/mains-courantes/
│   │   ├── /fr/produits/main-courante-protection-murale/
│   │   ├── /fr/produits/protection-murale-antichoc/
│   │   └── /fr/produits/protection-angle/
│   ├── /fr/services/             ← Services FR
│   ├── /fr/a-propos/             ← À propos FR
│   ├── /fr/blog/                 ← Blog FR
│   │   └── /fr/blog/[slug]/      ← Article FR
│   ├── /fr/contact/              ← Contact FR
│   └── /fr/politique-confidentialite/
├── /en/                          ← Home EN
│   ├── /en/products/
│   │   ├── /en/products/handrails/
│   │   ├── /en/products/handrail-wall-protection/
│   │   ├── /en/products/wall-protection/
│   │   └── /en/products/corner-protection/
│   ├── /en/services/
│   ├── /en/about/
│   ├── /en/blog/
│   │   └── /en/blog/[slug]/
│   ├── /en/contact/
│   └── /en/privacy-policy/
├── sitemap.xml                   ← Auto-généré
└── robots.txt                    ← Auto-généré
```

---

## STRUCTURE DES FICHIERS

```
kleston-site/
├── messages/
│   ├── fr.json
│   └── en.json
├── public/
│   ├── logo/
│   │   ├── ks-monogram.svg
│   │   ├── kleston-full.svg
│   │   └── favicon.ico
│   └── images/
│       ├── hero/
│       │   └── hero.jpg          ← placeholder noir
│       └── produits/
│           ├── mains-courantes/
│           ├── protection-murale/
│           └── protection-angle/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── produits/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [categorie]/
│   │   │   │       └── page.tsx
│   │   │   ├── services/
│   │   │   │   └── page.tsx
│   │   │   ├── a-propos/
│   │   │   │   └── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   └── politique-confidentialite/
│   │   │       └── page.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── CookieBanner.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── IntroSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── CertificationsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── BlogPreviewSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── produits/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── CategoryHeader.tsx
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   └── BlogGrid.tsx
│   │   └── ui/
│   │       ├── ContactForm.tsx
│   │       ├── SectionLabel.tsx
│   │       ├── OrangeButton.tsx
│   │       └── AnimatedCounter.tsx
│   ├── content/
│   │   ├── produits/
│   │   │   ├── mains-courantes.mdx
│   │   │   ├── main-courante-protection-murale.mdx
│   │   │   ├── protection-murale-antichoc.mdx
│   │   │   └── protection-angle.mdx
│   │   └── blog/
│   │       ├── fr/
│   │       │   ├── normes-mains-courantes-quebec.mdx
│   │       │   ├── protection-murale-hopitaux-chsld.mdx
│   │       │   ├── guide-accessibilite-pmr-quebec.mdx
│   │       │   ├── certifications-ce-iso-protection-murale.mdx
│   │       │   └── choisir-main-courante-materiau.mdx
│   │       └── en/
│   │           ├── handrail-standards-quebec.mdx
│   │           ├── wall-protection-hospitals-ltc.mdx
│   │           ├── accessibility-guide-pmr-quebec.mdx
│   │           ├── ce-iso-certifications-wall-protection.mdx
│   │           └── choosing-handrail-material.mdx
│   ├── lib/
│   │   ├── i18n/
│   │   │   ├── routing.ts
│   │   │   └── navigation.ts
│   │   ├── mdx.ts
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
└── .env.local
```

---

## ÉTAPE 0 — INSTALLATION DU SKILL UI UX PRO MAX

**OBLIGATOIRE avant tout code. Exécute ces commandes dans WSL2:**

```bash
npm install -g uipro-cli
uipro init --ai claude
```

Ensuite génère le design system pour Kleston:
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "B2B institutional wall protection handrails healthcare Quebec" --design-system -p "Kleston" --persist
```

Lis entièrement le fichier généré dans `design-system/MASTER.md` avant de coder quoi que ce soit.

---

## ÉTAPE 1 — SETUP INITIAL

### Commandes WSL2 Ubuntu

```bash
# Vérifie Node version
node -v   # doit être 18+ idéalement 20 LTS

# Si besoin d'upgrade Node:
nvm install 20
nvm use 20

# Crée le projet
cd ~/
mkdir kleston-site
cd kleston-site

npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-turbopack

# Installe les dépendances
npm install next-intl
npm install framer-motion
npm install lucide-react
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install gray-matter
npm install @vercel/analytics
npm install clsx tailwind-merge

# shadcn/ui
npx shadcn@latest init
npx shadcn@latest add button input textarea form card badge separator

# Init Git
git init
git add .
git commit -m "feat: init project"

# Crée repo GitHub (si GitHub CLI installé)
gh repo create kleston-site --private --push --source=.
# Sinon: crée manuellement sur github.com et push
```

### .env.local
```bash
# Web3Forms (formulaire gratuit)
# Créer compte sur web3forms.com et récupérer la clé
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here

# Site URL
NEXT_PUBLIC_SITE_URL=https://kleston.ca
```

---

## ÉTAPE 2 — CONFIGURATION DE BASE

### next.config.ts
```typescript
import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin'

const withMDX = createMDX({})
const withNextIntl = createNextIntlPlugin('./src/lib/i18n/routing.ts')

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  experimental: {
    mdxRs: true,
  },
}

export default withNextIntl(withMDX(nextConfig))
```

### middleware.ts
```typescript
import createMiddleware from 'next-intl/middleware'
import { routing } from './src/lib/i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
```

### src/lib/i18n/routing.ts
```typescript
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/produits': {
      fr: '/produits',
      en: '/products'
    },
    '/produits/[categorie]': {
      fr: '/produits/[categorie]',
      en: '/products/[categorie]'
    },
    '/services': '/services',
    '/a-propos': {
      fr: '/a-propos',
      en: '/about'
    },
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/contact': '/contact',
    '/politique-confidentialite': {
      fr: '/politique-confidentialite',
      en: '/privacy-policy'
    }
  }
})
```

### src/styles/globals.css
```css
@import "tailwindcss";

@layer base {
  :root {
    --orange: #FF5C00;
    --orange-hover: #E05200;
    --silver: #B0B2B5;
    --noir: #1E1E1E;
    --noir-surface: #2A2A2A;
    --creme: #FAFAF8;
    --blanc: #FFFFFF;
    --gris-clair: #F0F0EE;
    --gris-moyen: #E0E0DE;
    --texte-1: #1A1A1A;
    --texte-2: #4A4A4A;
    --texte-3: #7A7A7A;

    --font-condensed: var(--font-barlow-condensed);
    --font-body: var(--font-barlow);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--creme);
    color: var(--texte-1);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    background: var(--orange);
    color: white;
  }
}

@layer utilities {
  .font-condensed { font-family: var(--font-condensed); }
  .text-orange { color: var(--orange); }
  .bg-orange { background-color: var(--orange); }
  .bg-noir { background-color: var(--noir); }
  .bg-creme { background-color: var(--creme); }
}
```

### src/app/[locale]/layout.tsx
```typescript
import type { Metadata } from 'next'
import { Barlow_Condensed, Barlow } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/lib/i18n/routing'
import { Analytics } from '@vercel/analytics/react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import '@/styles/globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kleston.ca'),
  title: {
    template: '%s | Kleston',
    default: 'Kleston — Protection murale et mains courantes au Québec',
  },
  description: 'Spécialiste québécois en systèmes de protection murale, mains courantes et sécurité architecturale certifiés. Fourniture, installation et entretien partout au Québec.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    siteName: 'Kleston',
    locale: 'fr_CA',
    type: 'website',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
          <CookieBanner />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

---

## ÉTAPE 3 — TRADUCTIONS (messages/fr.json et messages/en.json)

### messages/fr.json (complet)
```json
{
  "nav": {
    "produits": "Produits",
    "services": "Services",
    "blog": "Blog",
    "about": "À propos",
    "contact": "Contact",
    "devis": "Demander un devis",
    "langue": "EN"
  },
  "hero": {
    "label": "Kleston — Québec",
    "title": "Votre spécialiste en protection murale et sécurité architecturale",
    "slogan": "La conformité livrée et installée",
    "cta_primary": "Demander un devis",
    "cta_secondary": "Découvrir nos produits",
    "scroll": "Défiler"
  },
  "intro": {
    "label": "Qui sommes-nous",
    "title": "Un seul partenaire pour tout votre projet",
    "text": "Kleston distribue, installe et entretient des systèmes de protection murale, de mains courantes et de sécurité architecturale certifiés aux normes internationales. Nous servons les établissements de santé, institutionnels et industriels partout au Québec.",
    "point1": "Produits certifiés CE, ISO 9001, ROHS",
    "point2": "Installation par techniciens qualifiés",
    "point3": "Contrats d'entretien annuels disponibles",
    "point4": "32 coloris disponibles par gamme"
  },
  "stats": {
    "stat1_value": "32",
    "stat1_label": "Coloris disponibles",
    "stat2_value": "4",
    "stat2_label": "Gammes de produits",
    "stat3_value": "100%",
    "stat3_label": "Produits certifiés",
    "stat4_value": "QC",
    "stat4_label": "Province entière desservie"
  },
  "services": {
    "label": "Ce que nous faisons",
    "title": "Un service clé en main complet",
    "subtitle": "De la fourniture à l'entretien, un seul interlocuteur pour tout votre projet.",
    "s1_title": "Fourniture et distribution",
    "s1_desc": "Importation directe de produits certifiés CE et ISO 9001. Prix compétitifs garantis grâce à un approvisionnement sans intermédiaire. Livraison partout au Québec.",
    "s2_title": "Installation professionnelle",
    "s2_desc": "Pose par des techniciens qualifiés, dans les délais convenus. Chaque installation inclut une vérification complète de conformité avant réception des travaux.",
    "s3_title": "Entretien et maintenance",
    "s3_desc": "Contrats d'entretien annuels adaptés à vos équipements. Inspections périodiques, réglage et remplacement de pièces. Prolongez la durée de vie de vos installations.",
    "s4_title": "Service après-vente",
    "s4_desc": "Intervention rapide en cas de défaillance. Un seul interlocuteur pour toutes vos demandes, du diagnostic à la réparation. Délais garantis sous contrat.",
    "cta": "En savoir plus sur nos services"
  },
  "produits": {
    "label": "Nos produits",
    "title": "Quatre gammes certifiées",
    "subtitle": "Des solutions adaptées à chaque environnement, de la clinique à l'entrepôt.",
    "g1_name": "Systèmes de main courante",
    "g1_desc": "Mains courantes en vinyle, inox ou bois. Conformes aux normes internationales. 32 coloris.",
    "g2_name": "Main courante + protection murale",
    "g2_desc": "Systèmes combinés pour hôpitaux, CHSLD et établissements institutionnels. Antibactériens.",
    "g3_name": "Protection murale antichoc",
    "g3_desc": "Bandes de protection pour couloirs à forte circulation. Résistance aux chocs certifiée.",
    "g4_name": "Protection d'angle",
    "g4_desc": "Protège les angles des murs et colonnes. Vinyle sur aluminium ou inox 304.",
    "cta": "Voir tous les produits",
    "badge_certified": "Certifié",
    "badge_colors": "32 couleurs",
    "badge_inox": "Inox 304"
  },
  "certifications": {
    "label": "Nos certifications",
    "title": "Des produits qui respectent les normes les plus strictes",
    "subtitle": "Tous nos produits sont importés directement de fabricants certifiés. Chaque pièce est testée et validée.",
    "c1": "CE",
    "c1_desc": "Conformité européenne",
    "c2": "ISO 9001",
    "c2_desc": "Management qualité",
    "c3": "ROHS",
    "c3_desc": "Sans métaux lourds",
    "c4": "VOC Free",
    "c4_desc": "Absence de gaz nocifs",
    "c5": "Antibactérien",
    "c5_desc": "Certifié TÜBITAK",
    "c6": "Feu B1",
    "c6_desc": "Résistance au feu"
  },
  "testimonials": {
    "label": "Témoignages",
    "title": "Ils nous font confiance",
    "t1_name": "Marc-André Tremblay",
    "t1_title": "Directeur des opérations",
    "t1_company": "Constructions Vézina",
    "t1_text": "Kleston a livré et installé nos systèmes de mains courantes sur 3 étages en moins de deux semaines. Délais respectés, conformité parfaite à l'inspection du bâtiment.",
    "t2_name": "Sophie Gagné",
    "t2_title": "Gestionnaire d'immeubles",
    "t2_company": "Immobilier Laurentien",
    "t2_text": "Un seul fournisseur pour nos mains courantes et nos protections murales. Kleston a tout géré de A à Z. Prix imbattables et équipe sérieuse.",
    "t3_name": "Jean-François Leblanc",
    "t3_title": "Directeur des installations",
    "t3_company": "CHSLD Les Érables",
    "t3_text": "Les systèmes antibactériens de Kleston répondent exactement aux exigences sanitaires de notre établissement. Produits certifiés, installation propre. Nous recommandons."
  },
  "blog": {
    "label": "Ressources",
    "title": "Guides et articles",
    "subtitle": "Tout ce que vous devez savoir sur les normes, la conformité et l'installation.",
    "cta": "Voir tous les articles",
    "read_more": "Lire l'article",
    "min_read": "min de lecture"
  },
  "cta": {
    "title": "Prêt à démarrer votre projet?",
    "subtitle": "Contactez-nous pour un devis gratuit. Réponse garantie sous 24h.",
    "cta_primary": "Nous contacter",
    "phone": "514 550 8823",
    "or": "ou appelez directement"
  },
  "contact": {
    "label": "Nous joindre",
    "title": "Demandez un devis gratuit",
    "subtitle": "Remplissez le formulaire ci-dessous. Un de nos experts vous contacte sous 24h.",
    "field_nom": "Nom complet",
    "field_org": "Organisation",
    "field_email": "Adresse email",
    "field_tel": "Téléphone",
    "field_message": "Votre message",
    "field_message_placeholder": "Décrivez votre projet, les produits qui vous intéressent, la superficie à couvrir...",
    "submit": "Envoyer le message",
    "sending": "Envoi en cours...",
    "success_title": "Message envoyé !",
    "success_text": "Merci pour votre message. Nous vous répondrons dans les 24 heures.",
    "error": "Une erreur est survenue. Veuillez réessayer ou nous appeler directement.",
    "info_title": "Informations de contact",
    "info_phone": "514 550 8823",
    "info_email": "contact@kleston.ca",
    "info_zone": "Province de Québec",
    "info_hours": "Lun–Ven, 8h–17h"
  },
  "footer": {
    "tagline": "La conformité livrée et installée",
    "nav_title": "Navigation",
    "produits_title": "Produits",
    "contact_title": "Contact",
    "copyright": "© 2025 Kleston. Tous droits réservés.",
    "privacy": "Politique de confidentialité",
    "p1": "Systèmes de main courante",
    "p2": "Main courante + protection murale",
    "p3": "Protection murale antichoc",
    "p4": "Protection d'angle"
  },
  "cookie": {
    "text": "Ce site utilise des outils d'analyse pour améliorer votre expérience. Conformément à la Loi 25 du Québec sur la protection des renseignements personnels.",
    "accept": "Accepter",
    "decline": "Refuser",
    "learn_more": "En savoir plus"
  },
  "privacy": {
    "title": "Politique de confidentialité",
    "last_updated": "Dernière mise à jour : janvier 2025"
  }
}
```

### messages/en.json (version anglaise complète)
```json
{
  "nav": {
    "produits": "Products",
    "services": "Services",
    "blog": "Blog",
    "about": "About",
    "contact": "Contact",
    "devis": "Request a quote",
    "langue": "FR"
  },
  "hero": {
    "label": "Kleston — Quebec",
    "title": "Your specialist in wall protection and architectural safety",
    "slogan": "Compliance delivered and installed",
    "cta_primary": "Request a quote",
    "cta_secondary": "Explore our products",
    "scroll": "Scroll"
  },
  "intro": {
    "label": "Who we are",
    "title": "One partner for your entire project",
    "text": "Kleston supplies, installs and maintains wall protection systems, handrails and certified architectural safety products across Quebec. We serve healthcare, institutional and industrial facilities.",
    "point1": "CE, ISO 9001, ROHS certified products",
    "point2": "Installation by qualified technicians",
    "point3": "Annual maintenance contracts available",
    "point4": "32 colors available per product line"
  },
  "stats": {
    "stat1_value": "32",
    "stat1_label": "Available colors",
    "stat2_value": "4",
    "stat2_label": "Product lines",
    "stat3_value": "100%",
    "stat3_label": "Certified products",
    "stat4_value": "QC",
    "stat4_label": "Full province coverage"
  },
  "services": {
    "label": "What we do",
    "title": "Complete turnkey service",
    "subtitle": "From supply to maintenance, one point of contact for your entire project.",
    "s1_title": "Supply and distribution",
    "s1_desc": "Direct import of CE and ISO 9001 certified products. Guaranteed competitive pricing through direct sourcing. Delivery across Quebec.",
    "s2_title": "Professional installation",
    "s2_desc": "Installation by qualified technicians, on time. Each installation includes a full compliance check before project handover.",
    "s3_title": "Maintenance and upkeep",
    "s3_desc": "Annual maintenance contracts tailored to your equipment. Periodic inspections, adjustments and parts replacement. Extend the lifespan of your installations.",
    "s4_title": "After-sales service",
    "s4_desc": "Fast response in case of failure. One contact for all your requests, from diagnosis to repair. Guaranteed response times under contract.",
    "cta": "Learn more about our services"
  },
  "produits": {
    "label": "Our products",
    "title": "Four certified product lines",
    "subtitle": "Solutions for every environment, from clinic to warehouse.",
    "g1_name": "Handrail systems",
    "g1_desc": "Handrails in vinyl, stainless steel or wood. Compliant with international standards. 32 colors.",
    "g2_name": "Handrail + wall protection",
    "g2_desc": "Combined systems for hospitals, long-term care and institutional facilities. Antibacterial.",
    "g3_name": "Impact wall protection",
    "g3_desc": "Protection strips for high-traffic corridors. Certified shock resistance.",
    "g4_name": "Corner protection",
    "g4_desc": "Protects wall and column corners. Vinyl on aluminum or 304 stainless steel.",
    "cta": "View all products",
    "badge_certified": "Certified",
    "badge_colors": "32 colors",
    "badge_inox": "SS 304"
  },
  "certifications": {
    "label": "Our certifications",
    "title": "Products meeting the strictest standards",
    "subtitle": "All our products are imported directly from certified manufacturers. Every piece is tested and validated.",
    "c1": "CE",
    "c1_desc": "European compliance",
    "c2": "ISO 9001",
    "c2_desc": "Quality management",
    "c3": "ROHS",
    "c3_desc": "Heavy metal free",
    "c4": "VOC Free",
    "c4_desc": "No harmful gases",
    "c5": "Antibacterial",
    "c5_desc": "TÜBITAK certified",
    "c6": "Fire B1",
    "c6_desc": "Fire resistance"
  },
  "testimonials": {
    "label": "Testimonials",
    "title": "They trust us",
    "t1_name": "Marc-André Tremblay",
    "t1_title": "Operations Director",
    "t1_company": "Constructions Vézina",
    "t1_text": "Kleston delivered and installed our handrail systems across 3 floors in under two weeks. Deadlines met, full compliance at building inspection.",
    "t2_name": "Sophie Gagné",
    "t2_title": "Property Manager",
    "t2_company": "Immobilier Laurentien",
    "t2_text": "One supplier for our handrails and wall protection. Kleston handled everything from A to Z. Unbeatable pricing and a serious team.",
    "t3_name": "Jean-François Leblanc",
    "t3_title": "Facilities Director",
    "t3_company": "CHSLD Les Érables",
    "t3_text": "Kleston's antibacterial systems meet our facility's sanitary requirements exactly. Certified products, clean installation. Highly recommended."
  },
  "blog": {
    "label": "Resources",
    "title": "Guides and articles",
    "subtitle": "Everything you need to know about standards, compliance and installation.",
    "cta": "View all articles",
    "read_more": "Read article",
    "min_read": "min read"
  },
  "cta": {
    "title": "Ready to start your project?",
    "subtitle": "Contact us for a free quote. Guaranteed response within 24 hours.",
    "cta_primary": "Contact us",
    "phone": "514 550 8823",
    "or": "or call directly"
  },
  "contact": {
    "label": "Get in touch",
    "title": "Request a free quote",
    "subtitle": "Fill in the form below. One of our experts will contact you within 24 hours.",
    "field_nom": "Full name",
    "field_org": "Organization",
    "field_email": "Email address",
    "field_tel": "Phone number",
    "field_message": "Your message",
    "field_message_placeholder": "Describe your project, the products you're interested in, the area to cover...",
    "submit": "Send message",
    "sending": "Sending...",
    "success_title": "Message sent!",
    "success_text": "Thank you for your message. We'll get back to you within 24 hours.",
    "error": "An error occurred. Please try again or call us directly.",
    "info_title": "Contact information",
    "info_phone": "514 550 8823",
    "info_email": "contact@kleston.ca",
    "info_zone": "Province of Quebec",
    "info_hours": "Mon–Fri, 8am–5pm"
  },
  "footer": {
    "tagline": "Compliance delivered and installed",
    "nav_title": "Navigation",
    "produits_title": "Products",
    "contact_title": "Contact",
    "copyright": "© 2025 Kleston. All rights reserved.",
    "privacy": "Privacy policy",
    "p1": "Handrail systems",
    "p2": "Handrail + wall protection",
    "p3": "Impact wall protection",
    "p4": "Corner protection"
  },
  "cookie": {
    "text": "This site uses analytics tools to improve your experience, in compliance with Quebec's Act respecting the protection of personal information in the private sector (Law 25).",
    "accept": "Accept",
    "decline": "Decline",
    "learn_more": "Learn more"
  },
  "privacy": {
    "title": "Privacy Policy",
    "last_updated": "Last updated: January 2025"
  }
}
```

---

## ÉTAPE 4 — HOME PAGE (PRIORITÉ ABSOLUE)

### Animation d'ouverture de portes (Hero intro)

Au chargement du site, une animation de 2.5 secondes simule l'ouverture de deux portes de laboratoire qui révèlent le site. Implémente avec Framer Motion:

```typescript
// src/components/home/DoorAnimation.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function DoorAnimation({ children }: { children: React.ReactNode }) {
  const [doorsOpen, setDoorsOpen] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // Vérifie si l'animation a déjà été jouée dans cette session
    const hasPlayed = sessionStorage.getItem('kleston-doors-played')
    if (hasPlayed) {
      setDoorsOpen(true)
      setAnimationComplete(true)
      return
    }

    // Joue l'animation après 300ms
    const timer = setTimeout(() => {
      setDoorsOpen(true)
      sessionStorage.setItem('kleston-doors-played', 'true')
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      {/* Contenu du site en dessous */}
      <div style={{ opacity: doorsOpen ? 1 : 0, transition: 'opacity 0.5s ease 1.5s' }}>
        {children}
      </div>

      {/* Animation des portes */}
      <AnimatePresence>
        {!animationComplete && (
          <div
            className="fixed inset-0 z-[9999] flex pointer-events-none"
            onAnimationEnd={() => setAnimationComplete(true)}
          >
            {/* Porte gauche */}
            <motion.div
              className="w-1/2 h-full bg-[#1E1E1E] flex items-center justify-end pr-8"
              initial={{ x: 0 }}
              animate={{ x: doorsOpen ? '-100%' : 0 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            >
              {/* Détail visuel porte gauche */}
              <div className="flex flex-col gap-3 opacity-30">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-8 bg-[#FF5C00]" />
                ))}
              </div>
            </motion.div>

            {/* Porte droite */}
            <motion.div
              className="w-1/2 h-full bg-[#1E1E1E] flex items-center justify-start pl-8"
              initial={{ x: 0 }}
              animate={{ x: doorsOpen ? '100%' : 0 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            >
              {/* Détail visuel porte droite */}
              <div className="flex flex-col gap-3 opacity-30">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-8 bg-[#FF5C00]" />
                ))}
              </div>
            </motion.div>

            {/* Logo centré pendant l'animation */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: doorsOpen ? 0 : 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <svg viewBox="0 0 992 896" className="w-24 h-24">
                <polygon points="463 507 735 507 735 651 378 651 213 486 153 546 153 743 0 896 0 0 153 0 153 319 472 0 992 0 992 153 556 153 332.5 376.5 463 507" fill="#FF5C00"/>
                <path d="M992,743l-153,153l-713,0l153,-153l560,0l0,-336l-560,0l153,-153l560,0l0,489Z" fill="#B0B2B5"/>
              </svg>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

### HeroSection.tsx (parallax KS)

```typescript
'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  
  // Parallax sur le KS monogramme
  const ksY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const ksOpacity = useTransform(scrollYProgress, [0, 0.6], [0.07, 0])
  const ksScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  
  // Parallax sur l'image de fond
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  
  // Fade out du contenu texte au scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.4], ['0%', '-10%'])

  const contactPath = locale === 'fr' ? '/fr/contact' : '/en/contact'
  const produitsPath = locale === 'fr' ? '/fr/produits' : '/en/products'

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden bg-[#1E1E1E]">
      
      {/* Image de fond avec parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero/hero.jpg"
          alt="Couloir institutionnel avec mains courantes Kleston"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        {/* Overlay gradient en dégradé */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E]/90 via-[#1E1E1E]/60 to-[#1E1E1E]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/80 via-transparent to-[#1E1E1E]/20" />
      </motion.div>

      {/* KS Monogramme parallax en watermark */}
      <motion.div
        style={{ y: ksY, opacity: ksOpacity, scale: ksScale }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg viewBox="0 0 992 896" className="w-[75vw] max-w-[900px]" fill="white">
          <polygon points="463 507 735 507 735 651 378 651 213 486 153 546 153 743 0 896 0 0 153 0 153 319 472 0 992 0 992 153 556 153 332.5 376.5 463 507"/>
          <path d="M992,743l-153,153l-713,0l153,-153l560,0l0,-336l-560,0l153,-153l560,0l0,489Z"/>
        </svg>
      </motion.div>

      {/* Contenu textuel */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-20 lg:pb-24 px-6 md:px-12 lg:px-20 max-w-5xl"
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="font-condensed font-semibold text-xs tracking-[0.3em] text-[#FF5C00] uppercase mb-5"
        >
          {t('label')}
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          className="font-condensed font-black text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white uppercase leading-[0.95] tracking-tight mb-5 max-w-3xl"
        >
          {t('title')}
        </motion.h1>

        {/* Séparateur orange */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '3rem' }}
          transition={{ duration: 0.6, delay: 3.4 }}
          className="h-0.5 bg-[#FF5C00] mb-5"
        />

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.6 }}
          className="font-body font-light text-base md:text-lg text-[#B0B2B5] italic mb-8"
        >
          {t('slogan')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.8 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href={contactPath}
            className="group inline-flex items-center gap-2 bg-[#FF5C00] hover:bg-[#E05200] text-white font-condensed font-bold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-200"
          >
            {t('cta_primary')}
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
          <Link
            href={produitsPath}
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-condensed font-bold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-200 hover:bg-white/5"
          >
            {t('cta_secondary')}
          </Link>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 4.2 }}
        className="absolute bottom-8 right-8 md:right-12 lg:right-20 flex flex-col items-center gap-2"
      >
        <span className="font-condensed text-xs tracking-[0.2em] text-white/40 uppercase rotate-90 origin-center mb-4">
          {t('scroll')}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-white/40" size={16} />
        </motion.div>
      </motion.div>

    </section>
  )
}
```

### Autres sections de la home

Pour chaque section, utilise ce pattern d'animation au scroll:

```typescript
// Pattern d'animation réutilisable
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
}

// Utilisation:
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: '-100px' })

<motion.div
  ref={ref}
  variants={stagger}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
  <motion.h2 variants={fadeInUp}>Titre</motion.h2>
  <motion.p variants={fadeInUp}>Texte</motion.p>
</motion.div>
```

**SectionLabel (composant réutilisable):**
```typescript
// src/components/ui/SectionLabel.tsx
export function SectionLabel({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-6 h-0.5 bg-[#FF5C00]" />
      <span className={`font-condensed font-semibold text-xs tracking-[0.25em] uppercase ${light ? 'text-[#FF5C00]' : 'text-[#FF5C00]'}`}>
        {label}
      </span>
    </div>
  )
}
```

---

## ÉTAPE 5 — HEADER & FOOTER

### Header.tsx

```typescript
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: `/${locale}/produits`, label: t('produits') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/${locale === 'fr' ? 'a-propos' : 'about'}`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  const headerBg = isHome
    ? scrolled ? 'bg-[#1E1E1E]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    : 'bg-[#1E1E1E]'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <svg viewBox="0 0 992 896" className="w-8 h-7 shrink-0">
              <polygon points="463 507 735 507 735 651 378 651 213 486 153 546 153 743 0 896 0 0 153 0 153 319 472 0 992 0 992 153 556 153 332.5 376.5 463 507" fill="#FF5C00"/>
              <path d="M992,743l-153,153l-713,0l153,-153l560,0l0,-336l-560,0l153,-153l560,0l0,489Z" fill="#B0B2B5"/>
            </svg>
            <span className="font-condensed font-black text-xl tracking-[0.1em] text-white uppercase">
              KLESTON
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-condensed font-semibold text-sm tracking-[0.1em] uppercase text-white/70 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF5C00] group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* Actions desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Switcher langue */}
            <Link
              href={locale === 'fr' ? pathname.replace('/fr', '/en') : pathname.replace('/en', '/fr')}
              className="font-condensed font-semibold text-xs tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-200 border border-white/20 hover:border-white/50 px-3 py-1.5"
            >
              {t('langue')}
            </Link>
            {/* CTA devis */}
            <Link
              href={`/${locale}/contact`}
              className="font-condensed font-bold text-xs tracking-[0.15em] uppercase bg-[#FF5C00] hover:bg-[#E05200] text-white px-5 py-2.5 transition-colors duration-200"
            >
              {t('devis')}
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1E1E1E] border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-condensed font-bold text-lg uppercase tracking-widest text-white hover:text-[#FF5C00] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setMenuOpen(false)}
                  className="text-center font-condensed font-bold text-sm tracking-widest uppercase bg-[#FF5C00] text-white px-6 py-3"
                >
                  {t('devis')}
                </Link>
                <a
                  href="tel:5145508823"
                  className="flex items-center justify-center gap-2 text-white/60 font-body text-sm"
                >
                  <Phone size={14} />
                  514 550 8823
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
```

---

## ÉTAPE 6 — COOKIE BANNER (LOI 25 QC)

```typescript
// src/components/layout/CookieBanner.tsx
'use client'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export function CookieBanner() {
  const t = useTranslations('cookie')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('kleston-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('kleston-cookie-consent', 'accepted')
    setVisible(false)
    // Vercel Analytics s'active automatiquement
  }

  const handleDecline = () => {
    localStorage.setItem('kleston-cookie-consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#1E1E1E] border-t border-white/10 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <p className="font-body text-sm text-white/70 max-w-2xl">
              {t('text')}{' '}
              <Link href="/fr/politique-confidentialite" className="text-[#FF5C00] hover:underline">
                {t('learn_more')}
              </Link>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="font-condensed font-bold text-xs tracking-widest uppercase text-white/50 hover:text-white border border-white/20 hover:border-white/50 px-4 py-2 transition-all"
              >
                {t('decline')}
              </button>
              <button
                onClick={handleAccept}
                className="font-condensed font-bold text-xs tracking-widest uppercase bg-[#FF5C00] hover:bg-[#E05200] text-white px-6 py-2 transition-colors"
              >
                {t('accept')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

---

## ÉTAPE 7 — FORMULAIRE DE CONTACT (Web3Forms gratuit)

```typescript
// src/components/ui/ContactForm.tsx
'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Send } from 'lucide-react'

export function ContactForm() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    nom: '', organisation: '', email: '', tel: '', message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Nouveau message de ${formData.nom} — ${formData.organisation || 'Sans organisation'}`,
          from_name: 'Kleston Site Web',
          ...formData,
        })
      })

      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setFormData({ nom: '', organisation: '', email: '', tel: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center p-12 gap-4"
      >
        <CheckCircle className="text-[#FF5C00]" size={48} />
        <h3 className="font-condensed font-black text-2xl uppercase">{t('success_title')}</h3>
        <p className="font-body text-[#4A4A4A]">{t('success_text')}</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-condensed font-semibold text-xs tracking-widest uppercase text-[#7A7A7A]">
            {t('field_nom')} *
          </label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="border border-[#E0E0DE] bg-white px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#FF5C00] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-condensed font-semibold text-xs tracking-widest uppercase text-[#7A7A7A]">
            {t('field_org')}
          </label>
          <input
            type="text"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            className="border border-[#E0E0DE] bg-white px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#FF5C00] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-condensed font-semibold text-xs tracking-widest uppercase text-[#7A7A7A]">
            {t('field_email')} *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-[#E0E0DE] bg-white px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#FF5C00] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-condensed font-semibold text-xs tracking-widest uppercase text-[#7A7A7A]">
            {t('field_tel')}
          </label>
          <input
            type="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            className="border border-[#E0E0DE] bg-white px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#FF5C00] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-condensed font-semibold text-xs tracking-widest uppercase text-[#7A7A7A]">
          {t('field_message')} *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder={t('field_message_placeholder')}
          className="border border-[#E0E0DE] bg-white px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#FF5C00] transition-colors resize-none placeholder:text-[#7A7A7A]"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600">
          <AlertCircle size={16} />
          <span className="font-body text-sm">{t('error')}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group self-start inline-flex items-center gap-3 bg-[#FF5C00] hover:bg-[#E05200] disabled:opacity-50 text-white font-condensed font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200"
      >
        {status === 'loading' ? t('sending') : t('submit')}
        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  )
}
```

---

## ÉTAPE 8 — SEO TECHNIQUE

### app/sitemap.ts
```typescript
import { MetadataRoute } from 'next'

const baseUrl = 'https://kleston.ca'
const locales = ['fr', 'en']

const routes = {
  fr: ['', '/produits', '/produits/mains-courantes', '/produits/main-courante-protection-murale', '/produits/protection-murale-antichoc', '/produits/protection-angle', '/services', '/a-propos', '/blog', '/contact'],
  en: ['', '/products', '/products/handrails', '/products/handrail-wall-protection', '/products/wall-protection', '/products/corner-protection', '/services', '/about', '/blog', '/contact'],
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    const localeRoutes = routes[locale as keyof typeof routes]
    localeRoutes.forEach((route) => {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route.includes('produits') || route.includes('products') ? 0.9 : 0.7,
        alternates: {
          languages: {
            'fr-CA': `${baseUrl}/fr${route}`,
            'en-CA': `${baseUrl}/en${route}`,
          }
        }
      })
    })
  })

  return entries
}
```

### app/robots.ts
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://kleston.ca/sitemap.xml',
  }
}
```

### JSON-LD Schema (dans layout.tsx de la home)
```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://kleston.ca',
  name: 'Kleston',
  alternateName: 'Kleston Solutions',
  description: 'Spécialiste québécois en systèmes de protection murale, mains courantes et sécurité architecturale certifiés. Fourniture, installation et entretien partout au Québec.',
  url: 'https://kleston.ca',
  telephone: '+15145508823',
  email: 'contact@kleston.ca',
  logo: 'https://kleston.ca/logo/ks-monogram.svg',
  image: 'https://kleston.ca/images/hero/hero.jpg',
  priceRange: '$$',
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Cash, Credit Card, Invoice',
  areaServed: {
    '@type': 'Province',
    name: 'Quebec',
    containedIn: { '@type': 'Country', name: 'Canada' }
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'QC',
    addressCountry: 'CA'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+15145508823',
    contactType: 'sales',
    availableLanguage: ['French', 'English'],
    areaServed: 'CA-QC'
  },
  knowsLanguage: ['fr', 'en'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Systèmes de protection murale et mains courantes',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Systèmes de main courante' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Main courante et protection murale combinée' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Protection murale antichoc' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Systèmes de protection d\'angle' } }
    ]
  }
}
```

---

## ÉTAPE 9 — METADATA PAR PAGE

### Metadata home (src/app/[locale]/page.tsx)
```typescript
export async function generateMetadata({ params }: { params: { locale: string } }) {
  const isFr = params.locale === 'fr'
  return {
    title: isFr
      ? 'Kleston — Protection murale et mains courantes au Québec'
      : 'Kleston — Wall Protection and Handrails in Quebec',
    description: isFr
      ? 'Spécialiste québécois en systèmes de protection murale, mains courantes et sécurité architecturale certifiés CE, ISO 9001. Fourniture, installation et entretien partout au Québec.'
      : 'Quebec specialist in CE and ISO 9001 certified wall protection systems, handrails and architectural safety. Supply, installation and maintenance across Quebec.',
    alternates: {
      canonical: `https://kleston.ca/${params.locale}`,
      languages: { 'fr-CA': 'https://kleston.ca/fr', 'en-CA': 'https://kleston.ca/en' }
    },
    openGraph: {
      title: isFr ? 'Kleston — Votre partenaire d\'accès industriels au Québec' : 'Kleston — Your industrial access partner in Quebec',
      description: isFr ? 'La conformité livrée et installée.' : 'Compliance delivered and installed.',
      url: `https://kleston.ca/${params.locale}`,
      images: [{ url: 'https://kleston.ca/images/og/kleston-og.jpg', width: 1200, height: 630, alt: 'Kleston' }],
    },
  }
}
```

---

## ÉTAPE 10 — ARTICLES BLOG SEO

### Article 1 (src/content/blog/fr/normes-mains-courantes-quebec.mdx)
```mdx
---
title: "Mains courantes au Québec : normes, obligations légales et choix des matériaux"
description: "Guide complet sur les normes du Code de construction du Québec applicables aux mains courantes dans les bâtiments commerciaux, institutionnels et résidentiels."
date: "2025-01-15"
readTime: 8
category: "Normes et conformité"
slug: "normes-mains-courantes-quebec"
---

## Introduction

Les mains courantes sont des éléments de sécurité réglementés par le Code de construction du Québec (CCQ) et le Code national du bâtiment (CNB). Que vous soyez gestionnaire d'immeuble, entrepreneur général ou architecte, comprendre ces obligations est essentiel pour tout projet de construction ou de rénovation commerciale ou institutionnelle au Québec.

## Qu'est-ce qu'une main courante?

Une main courante est un élément de sécurité fixé à un mur ou sur des poteaux, conçu pour être saisi à la main et servir de support lors du déplacement dans un couloir, un escalier ou une rampe. Elle se distingue de la rampe de garde-corps, qui a principalement une fonction de protection contre les chutes.

## Les normes du Code de construction du Québec

### Hauteur réglementaire
Selon le CCQ, les mains courantes doivent être installées à une hauteur comprise entre **865 mm et 965 mm** au-dessus de la surface de marche ou du plancher. Cette hauteur est calculée verticalement depuis le nez de la marche ou le niveau du plancher jusqu'au dessus de la main courante.

### Continuité
Les mains courantes doivent être continues sur toute la longueur des escaliers et des rampes. Dans les couloirs des établissements de santé et des résidences pour aînés, elles doivent également couvrir toute la longueur du corridor.

### Saisie
Le profil de la main courante doit permettre une prise en main sécurisée. Les profils ronds de **35 mm à 50 mm** de diamètre sont généralement conformes. Les profils non ronds (ovales, carrés) doivent respecter des dimensions spécifiques permettant un périmètre de saisie adapté.

### Distance au mur
La main courante doit être installée à une distance minimale de **40 mm** de la surface adjacente (mur ou plafond) pour permettre une prise en main correcte. Certaines normes internationales spécifient 45 mm.

## Obligations selon le type de bâtiment

### Établissements de santé et CHSLD
Dans les hôpitaux, cliniques et résidences pour aînés, les mains courantes sont obligatoires dans tous les couloirs de circulation. Les exigences sont plus strictes :
- Double main courante (des deux côtés du couloir) recommandée
- Système antibactérien fortement conseillé
- Résistance aux produits de nettoyage hospitaliers
- Continuité totale sans interruption aux portes

### Bâtiments institutionnels (écoles, centres communautaires)
Les escaliers comportant plus de 3 marches exigent une main courante. Dans les établissements accueillant des personnes à mobilité réduite, les deux côtés doivent être équipés.

### Bâtiments commerciaux et industriels
La main courante est obligatoire sur les escaliers de 600 mm ou plus de largeur. Dans les zones à fort trafic ou dangereuses, les protections murales combinées sont recommandées.

## Matériaux et certifications

### Acier inoxydable (Inox 304 et 316)
L'inox est le matériau de référence pour les environnements exigeants. Le grade 304 convient aux applications intérieures standard, tandis que le grade 316 (avec ajout de molybdène) est recommandé pour les environnements humides, les cuisines industrielles ou les zones exposées à des produits chimiques.

### Vinyle sur aluminium
Les systèmes en vinyle sur support aluminium offrent un excellent rapport qualité-prix. Disponibles en 32 coloris, ils permettent une intégration esthétique dans tous types d'environnements. Les formulations antibactériennes certifiées sont particulièrement adaptées aux établissements de santé.

### Bois avec raccords inox
Pour les espaces où l'esthétique prime (hôtels, résidences haut de gamme, espaces commerciaux premium), les systèmes combinant corps en bois et raccords en acier inoxydable offrent une finition élégante tout en respectant les normes de sécurité.

## Certifications à exiger

Lors de l'achat de systèmes de mains courantes, vérifiez les certifications suivantes :
- **CE** : conformité aux normes européennes de sécurité
- **ISO 9001** : système de management de la qualité du fabricant
- **ROHS** : absence de métaux lourds
- **VOC Free** : absence de composés organiques volatils nocifs
- **Rapport de test antibactérien** : essentiel pour les établissements de santé

## Installation et entretien

### Installation
L'installation doit être réalisée par des techniciens qualifiés. Les supports muraux doivent être fixés dans des éléments porteurs (montants de mur, béton) et non simplement dans le plâtre ou la gypse. L'espacement des supports est généralement de **60 à 75 cm** pour une stabilité optimale.

### Entretien
Un contrat d'entretien annuel permet de maintenir la conformité aux normes et de prolonger la durée de vie des installations. L'entretien inclut généralement l'inspection des fixations, le nettoyage, la lubrification des mécanismes et le remplacement des pièces d'usure.

## Conclusion

Le respect des normes du Code de construction du Québec en matière de mains courantes est non seulement une obligation légale, mais aussi un enjeu de sécurité pour les occupants de vos bâtiments. Faire appel à un spécialiste certifié garantit une installation conforme dès le départ, évitant les reprises coûteuses lors des inspections.

Pour obtenir un devis personnalisé pour votre projet, [contactez Kleston](/fr/contact).
```

### Article 2 (src/content/blog/fr/protection-murale-hopitaux-chsld.mdx)
```mdx
---
title: "Protection murale en milieu hospitalier et CHSLD : exigences et solutions"
description: "Tout savoir sur les systèmes de protection murale pour hôpitaux, CHSLD et cliniques au Québec. Normes sanitaires, matériaux antibactériens et solutions certifiées."
date: "2025-02-01"
readTime: 7
category: "Secteur santé"
slug: "protection-murale-hopitaux-chsld"
---

## Pourquoi la protection murale est-elle critique en milieu de santé?

Les couloirs et espaces communs des établissements de santé sont soumis à une circulation intense : civières, fauteuils roulants, chariots médicaux et équipements de transport se succèdent toute la journée. Sans protection adéquate, les murs se détériorent rapidement, engendrant des coûts de réparation élevés et des risques sanitaires liés à l'accumulation de bactéries dans les fissures et égratignures.

## Les exigences spécifiques au secteur de la santé

### Résistance aux agents de nettoyage hospitaliers
Les produits désinfectants utilisés en milieu hospitalier (désinfectants chlorés, peroxyde d'hydrogène, alcool) sont particulièrement agressifs. Les matériaux de protection murale doivent résister à ces produits sans se dégrader, se décolorer ou perdre leurs propriétés antibactériennes.

### Propriétés antibactériennes
Les surfaces murales en milieu de santé doivent idéalement intégrer des propriétés antibactériennes actives. Les systèmes certifiés TÜBITAK (certification turque reconnue internationalement) garantissent une inhibition de la croissance bactérienne sur la surface du matériau.

### Absence de composés nocifs
Les produits utilisés doivent être certifiés VOC Free (sans composés organiques volatils) et ROHS (sans métaux lourds). Ces certifications sont essentielles pour préserver la qualité de l'air dans les environnements médicaux.

### Facilité de nettoyage
Les systèmes de protection murale doivent présenter une surface lisse, sans rainures ni anfractuosités où les bactéries pourraient se loger. Les joints entre les profils doivent être parfaitement étanches ou réalisés au silicone assorti.

## Solutions recommandées pour chaque zone

### Couloirs principaux
Pour les couloirs à forte circulation, les systèmes de protection murale de 150 à 200 mm de largeur sont recommandés. Ils protègent efficacement contre les impacts des chariots et fauteuils roulants. Les modèles avec amortisseur de chocs intégré (insert TPE ou joint caoutchouc) réduisent l'impact sonore, particulièrement important en milieu hospitalier.

### Chambres et espaces de soins
Dans les chambres, des protections plus légères (100 mm) suffisent généralement. Des protections spécifiques pour tête de lit protègent les murs contre les impacts des lits médicaux ajustables.

### Zones humides et salles de bains
Les systèmes en acier inoxydable grade 316 ou en vinyle imperméable sont recommandés pour les zones exposées à l'humidité. Ils résistent à la corrosion et aux moisissures.

### Coins et angles
Les coins de murs sont les zones les plus exposées aux chocs. Des protections d'angle en vinyle sur aluminium ou en inox 304 prolongent considérablement la durée de vie des murs.

## Gammes de couleurs et intégration esthétique

Contrairement aux idées reçues, les systèmes de protection murale ne sont pas limités aux teintes hospitalières traditionnelles (blanc, gris). Les fabricants proposent désormais jusqu'à 32 coloris, permettant une intégration harmonieuse dans des environnements conçus pour le bien-être des patients : tons chauds, couleurs apaisantes, nuances naturelles.

La personnalisation par zone peut faciliter l'orientation des patients et du personnel dans l'établissement (color coding par département).

## ROI et durée de vie

Un investissement dans des systèmes de protection murale de qualité se rentabilise généralement en 2 à 4 ans par rapport aux coûts de peinture et de réparation traditionnels. Sur un horizon de 10 à 15 ans (durée de vie typique d'un système de protection murale de qualité), les économies sont considérables.

À titre indicatif : une réparation de peinture tous les 2 ans sur 100 m de couloir représente un coût récurrent significatif, sans parler des perturbations opérationnelles durant les travaux.

## Conclusion

La protection murale en milieu de santé n'est pas un simple accessoire décoratif — c'est un investissement dans la durabilité de l'infrastructure et la sécurité sanitaire de l'établissement. Choisir des produits certifiés, antibactériens et adaptés aux contraintes spécifiques du milieu médical est essentiel.

[Contactez Kleston](/fr/contact) pour une évaluation gratuite de vos besoins en protection murale.
```

### Articles 3, 4 et 5 — Titres et structure (à développer)

**Article 3:** `guide-accessibilite-pmr-quebec.mdx`
- Titre: "Guide d'accessibilité universelle au Québec : mains courantes et PMR"
- Angle: obligations légales, normes PMR, solutions pour personnes à mobilité réduite
- Mots-clés: accessibilité Quebec, PMR mains courantes, normes accessibilité bâtiment Quebec

**Article 4:** `certifications-ce-iso-protection-murale.mdx`
- Titre: "CE, ISO 9001, ROHS : comprendre les certifications des systèmes de protection murale"
- Angle: explication des certifications pour acheteurs B2B, comment les vérifier
- Mots-clés: certification CE protection murale, ISO 9001 bâtiment, ROHS matériaux construction

**Article 5:** `choisir-main-courante-materiau.mdx`
- Titre: "Vinyle, inox ou bois : comment choisir le matériau de votre main courante"
- Angle: comparatif des matériaux selon l'usage, le budget et l'environnement
- Mots-clés: main courante inox Quebec, main courante vinyle, choisir main courante

---

## ÉTAPE 11 — DÉPLOIEMENT VERCEL

### Connexion domaine kleston.ca

1. Dans le dashboard Vercel, va dans Settings > Domains
2. Ajoute `kleston.ca` et `www.kleston.ca`
3. Vercel te donne des records DNS à configurer
4. Dans Cloudflare Dashboard > kleston.ca > DNS, ajoute les records fournis par Vercel
5. La propagation prend 5 à 30 minutes

### Variables d'environnement Vercel

Dans Vercel > Settings > Environment Variables, ajoute:
```
NEXT_PUBLIC_WEB3FORMS_KEY    → ta clé Web3Forms
NEXT_PUBLIC_SITE_URL          → https://kleston.ca
```

### Commandes de déploiement
```bash
# Dans WSL2, dans le dossier du projet:
git add .
git commit -m "feat: complete initial build"
git push origin main
# Vercel détecte le push et déploie automatiquement
```

---

## PROMPTS POUR IMAGES GPT

### Image hero 4K (pour /public/images/hero/hero.jpg)
```
Photorealistic architectural photography of a modern hospital corridor, ultra wide angle shot, cinematic perspective. Long corridor with sleek stainless steel and vinyl handrail systems on both sides, modern wall protection panels visible, clean white walls with subtle grey tones. Dramatic lighting with warm glow from ceiling fixtures creating depth and perspective lines converging at the far end. Dark foreground fading to light at the center. Clinical yet premium aesthetic. Shot at 16mm equivalent, f/2.8, golden hour interior lighting effect. No people. Hyper-realistic, 8K resolution suitable for large format print.
```

### Images produits — Main courante vinyle (WG50)
```
Product photography of a modern vinyl wall handrail system, white background, studio lighting, 3/4 angle view. Sleek cylindrical handrail profile in light grey color, mounted on wall bracket. Clean industrial design. Sharp details showing the mounting bracket and end cap. Professional product photography style, commercial quality.
```

### Images produits — Combiné main courante + protection murale (WG145)
```
Product photography of a combined handrail and wall protection system in a hospital corridor setting. Wide rectangular vinyl panel (145mm) in white/cream color with integrated handrail, mounted on wall. Clean healthcare environment background, slightly blurred. Professional commercial photography.
```

### Images produits — Protection murale antichoc (WG200)
```
Close-up product photography of an impact wall protection system, 200mm wide vinyl on aluminum profile, light grey color. Shown installed on a corridor wall. Professional lighting showing material texture and quality. Commercial product photography style.
```

### Images produits — Protection d'angle (CG50)
```
Product photography of a corner wall protection system in stainless steel. 50mm x 50mm L-shaped profile protecting a wall corner. Studio white background, detailed shot showing material quality and finish. Sharp product photography.
```

---

## ORDRE D'EXÉCUTION POUR CLAUDE CODE

```
SESSION 1 (2-3h) — Fondations
□ 00. Lire le playbook complet
□ 01. Installer skill UI UX Pro Max + générer design system
□ 02. create-next-app + installations npm
□ 03. Configurer next.config.ts, middleware.ts, globals.css
□ 04. Créer messages/fr.json et messages/en.json (coller depuis ce playbook)
□ 05. Configurer src/app/[locale]/layout.tsx avec fonts + i18n
□ 06. Init Git + push GitHub
□ 07. Créer projet Vercel + connecter repo
□ 08. Hello World déployé sur vercel.app

SESSION 2 (3-4h) — Home page
□ 09. Créer DoorAnimation.tsx (animation portes)
□ 10. Créer HeroSection.tsx (parallax KS)
□ 11. Créer StatsSection.tsx
□ 12. Créer ServicesSection.tsx
□ 13. Créer ProductsSection.tsx
□ 14. Créer CertificationsSection.tsx
□ 15. Créer TestimonialsSection.tsx
□ 16. Créer BlogPreviewSection.tsx
□ 17. Créer CTASection.tsx
□ 18. Assembler dans src/app/[locale]/page.tsx
□ 19. npm run build — zéro erreur

SESSION 3 (2h) — Layout global + SEO
□ 20. Créer Header.tsx (scroll transparent → sombre, mobile menu)
□ 21. Créer Footer.tsx
□ 22. Créer CookieBanner.tsx (Loi 25 QC)
□ 23. Créer ContactForm.tsx (Web3Forms)
□ 24. app/sitemap.ts
□ 25. app/robots.ts
□ 26. JSON-LD Schema dans home layout
□ 27. Metadata complètes sur toutes les pages
□ 28. npm run build — zéro erreur

SESSION 4 (2h) — Contenu + pages placeholder
□ 29. Créer 4 fichiers MDX produits avec frontmatter
□ 30. Créer 5 articles MDX blog (FR) avec contenu complet
□ 31. Créer pages /produits, /services, /a-propos en placeholder
□ 32. Créer page /blog avec liste des articles
□ 33. Créer page /contact avec formulaire
□ 34. Créer page /politique-confidentialite
□ 35. npm run build — zéro erreur

SESSION 5 (1h) — Déploiement final
□ 36. Configurer domaine kleston.ca sur Vercel
□ 37. Ajouter variables d'environnement Web3Forms
□ 38. Configurer DNS Cloudflare
□ 39. Tester le formulaire de contact en production
□ 40. Vérifier les Core Web Vitals sur PageSpeed Insights
□ 41. Vérifier le sitemap sur https://kleston.ca/sitemap.xml
□ 42. Soumettre le sitemap à Google Search Console
```

---

## RÈGLES ABSOLUES POUR CLAUDE CODE

1. **Lire le design system** généré par UI UX Pro Max avant toute ligne de code
2. **TypeScript strict** — zéro `any`, zéro `as unknown`
3. **next/image** pour toutes les images, jamais de `<img>`
4. **next/font** pour les fontes, jamais de `<link>` Google Fonts dans le HTML
5. **Server Components** par défaut — `'use client'` uniquement pour interactions (animations, forms, menus)
6. **Mobile first** — breakpoints: 375px → 768px → 1024px → 1440px
7. **`npm run build`** doit passer à zéro erreur et zéro warning TypeScript avant chaque push
8. **Accessibilité** — aria-labels sur boutons icon-only, contraste 4.5:1 minimum, focus states visibles
9. **Pas de lorem ipsum** — tout le contenu est en français/anglais professionnel depuis le départ
10. **Recap obligatoire** après chaque session: ce qui est fait, ce qui reste, les blocages éventuels
11. **Animation d'ouverture** — ne se joue qu'une fois par session (sessionStorage), pas à chaque navigation
12. **Bilingue complet** — chaque composant utilise useTranslations(), jamais de texte hardcodé

---

## SETUP WEB3FORMS (formulaire gratuit)

1. Va sur web3forms.com
2. Entre ton email contact@kleston.ca
3. Récupère ta clé d'accès gratuite
4. Ajoute dans .env.local: `NEXT_PUBLIC_WEB3FORMS_KEY=ta_cle`
5. Ajoute la même variable dans Vercel > Settings > Environment Variables
6. Plan gratuit: 250 soumissions/mois, largement suffisant pour démarrer

---

## SETUP CLOUDFLARE EMAIL ROUTING

1. Dans Cloudflare Dashboard > kleston.ca > Email > Email Routing
2. Active Email Routing
3. Crée une règle: contact@kleston.ca → ton email personnel
4. Cloudflare ajoute automatiquement les MX records nécessaires
5. Gratuit, illimité

---

*Playbook version 1.0 — Projet Kleston — Avril 2026*
*Toutes les décisions design, technique et contenu sont documentées ici.*
*En cas de doute sur une décision, revenir à ce document.*
