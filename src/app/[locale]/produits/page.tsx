import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { getAllProduits } from '@/lib/mdx'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isFr = locale === 'fr'
  return {
    title: isFr
      ? 'Produits — Mains courantes et protection murale | Kleston'
      : 'Products — Handrails and Wall Protection | Kleston',
    description: isFr
      ? 'Gammes de produits Kleston : mains courantes, protection murale, barrières et garde-corps, accessoires. Tous certifiés CE et ISO 9001.'
      : 'Kleston product ranges: handrails, wall protection, barriers and guardrails, accessories. All CE and ISO 9001 certified.',
    alternates: {
      canonical: `https://kleston.ca/${locale}/${locale === 'fr' ? 'produits' : 'products'}`,
      languages: {
        'fr-CA': 'https://kleston.ca/fr/produits',
        'en-CA': 'https://kleston.ca/en/products',
      },
    },
    openGraph: {
      title: isFr ? 'Produits Kleston — Mains courantes et protection murale' : 'Kleston Products — Handrails and Wall Protection',
      description: isFr
        ? 'Gammes de produits certifiés CE et ISO 9001 pour bâtiments commerciaux et institutionnels au Québec.'
        : 'CE and ISO 9001 certified product ranges for commercial and institutional buildings in Quebec.',
      url: `https://kleston.ca/${locale}/${isFr ? 'produits' : 'products'}`,
      images: [{ url: 'https://kleston.ca/images/og/kleston-og.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function ProduitsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations('produits')
  const produits = getAllProduits()

  const gammes = [
    {
      slug: 'mains-courantes',
      name: locale === 'fr' ? 'Mains courantes' : 'Handrails',
      desc: locale === 'fr'
        ? 'Inox, aluminium, nylon ou bois. Conformes aux normes CNB et CCQ. Plus de 30 coloris disponibles.'
        : 'Stainless steel, aluminum, nylon, or wood. Compliant with NBC and CCQ. Over 30 colors available.',
    },
    {
      slug: 'protection-murale',
      name: locale === 'fr' ? 'Protection murale' : 'Wall Protection',
      desc: locale === 'fr'
        ? "Lisses, protecteurs d'angle, pare-chocs de portes. Certifiés EN 14876. Résistance aux chocs jusqu'à 800 J."
        : 'Bumper rails, corner protectors, door guards. EN 14876 certified. Impact resistance up to 800 J.',
    },
    {
      slug: 'barrieres-garde-corps',
      name: locale === 'fr' ? 'Barrières et garde-corps' : 'Barriers & Guardrails',
      desc: locale === 'fr'
        ? 'Garde-corps en acier, aluminium ou avec remplissage verre. Conformes CNB art. 3.3.1.'
        : 'Steel, aluminum, or glass-infill guardrails. Compliant with NBC art. 3.3.1.',
    },
    {
      slug: 'accessoires-fixation',
      name: locale === 'fr' ? 'Accessoires et fixation' : 'Accessories & Fasteners',
      desc: locale === 'fr'
        ? 'Supports muraux, raccords, embouts, platines. Compatibles avec tous les systèmes Kleston.'
        : 'Wall brackets, connectors, end caps, mounting plates. Compatible with all Kleston systems.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <div className="bg-[#1E1E1E] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SectionLabel label={t('label')} light />
          <h1 className="font-condensed font-black text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.9] tracking-tight mt-4 max-w-3xl">
            {t('title')}
          </h1>
          <p className="font-body text-[#B0B2B5] text-lg mt-6 max-w-xl">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Gammes */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gammes.map((gamme, i) => (
            <Link
              key={gamme.slug}
              href={`/${locale}/${locale === 'fr' ? 'produits' : 'products'}/${gamme.slug}`}
              className="group flex flex-col bg-white border border-[#E0E0DE] hover:border-[#FF5C00] p-10 transition-all duration-300"
            >
              <span className="font-condensed font-black text-7xl text-[#F0F0EE] leading-none mb-6 group-hover:text-[#FF5C00]/10 transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="font-condensed font-black text-2xl md:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 group-hover:text-[#FF5C00] transition-colors duration-200">
                {gamme.name}
              </h2>
              <p className="font-body text-[#4A4A4A] text-sm leading-relaxed mb-8 flex-1">
                {gamme.desc}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-[#E0E0DE]">
                <div className="flex items-center gap-2 text-[#FF5C00]">
                  <ShieldCheck size={14} />
                  <span className="font-condensed font-bold text-xs tracking-wider uppercase">
                    CE · ISO 9001
                  </span>
                </div>
                <span className="font-condensed font-bold text-xs tracking-wider uppercase text-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                  {locale === 'fr' ? 'Voir la gamme' : 'View range'}
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
