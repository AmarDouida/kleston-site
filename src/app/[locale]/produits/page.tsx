import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { CertificationsGrid } from '@/components/ui/CertificationsGrid'
import { categories, getProduitsByCategorie } from '@/data/produits'

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
  const isFr = locale === 'fr'

  return (
    <main className="min-h-screen bg-[#141414]">
      <PageHero
        label={t('label')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      {/* Categories grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {categories.map((cat) => {
            const produitCount = getProduitsByCategorie(cat.id).length
            const nom = isFr ? cat.nom.fr : cat.nom.en
            const desc = isFr ? cat.description.fr : cat.description.en
            return (
              <Link
                key={cat.id}
                href={`/${locale}/${isFr ? 'produits' : 'products'}/${cat.id}`}
                className="group relative overflow-hidden flex flex-col min-h-[420px] border border-white/[0.08] hover:border-[#FF5C00] transition-colors duration-300"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={cat.image}
                    alt={nom}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/70 to-[#141414]/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck size={14} className="text-[#FF5C00]" />
                    <span className="font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#FF5C00]">
                      CE · ISO 9001
                    </span>
                    <span className="ml-auto font-condensed text-xs text-[#B0B2B5]">
                      {produitCount} {isFr ? 'produits' : 'products'}
                    </span>
                  </div>

                  <h2 className="font-condensed font-normal text-[28px] uppercase tracking-tight text-white leading-tight mb-3">
                    {nom}
                  </h2>
                  <p className="font-body text-[15px] text-[#B0B2B5] leading-[1.6] mb-6">
                    {desc}
                  </p>

                  <span className="inline-flex items-center gap-2 font-condensed font-bold text-[12px] tracking-[0.15em] uppercase bg-[#FF5C00] group-hover:bg-[#CC4A00] text-white px-6 py-3 transition-colors duration-200">
                    {isFr ? 'Voir la gamme' : 'View range'}
                    <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Certifications section */}
      <div className="bg-[#F5F1EA] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <CertificationsGrid isFr={isFr} showSection />
        </div>
      </div>
    </main>
  )
}
