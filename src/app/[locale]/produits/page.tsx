import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'

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

const ROMAN = ['I', 'II', 'III', 'IV']

const productImages = [
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504355987722-5f1e6c3e5498?auto=format&fit=crop&w=800&q=80',
]

const productSlugs = [
  'mains-courantes',
  'protection-murale',
  'barrieres-garde-corps',
  'accessoires-fixation',
]

export default async function ProduitsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations('produits')
  const isFr = locale === 'fr'

  const gammes = [
    { name: t('g1_name'), desc: t('g1_desc') },
    { name: t('g2_name'), desc: t('g2_desc') },
    { name: t('g3_name'), desc: t('g3_desc') },
    { name: t('g4_name'), desc: t('g4_desc') },
  ]

  return (
    <main className="min-h-screen bg-[#141414]">
      <PageHero
        label={t('label')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {gammes.map((gamme, i) => (
            <Link
              key={productSlugs[i]}
              href={`/${locale}/${isFr ? 'produits' : 'products'}/${productSlugs[i]}`}
              className="group relative overflow-hidden flex flex-col min-h-[420px] border border-white/[0.08] hover:border-[#FF5C00] transition-colors duration-300"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={productImages[i]}
                  alt={gamme.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/70 to-[#141414]/30" />
              </div>

              {/* Roman numeral */}
              <span
                className="absolute top-5 left-6 font-condensed font-black leading-none select-none"
                style={{ fontSize: '96px', color: 'rgba(255, 92, 0, 0.4)' }}
              >
                {ROMAN[i]}
              </span>

              {/* Content */}
              <div className="relative z-10 mt-auto p-8">
                {/* Certifications badge */}
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck size={14} className="text-[#FF5C00]" />
                  <span className="font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#FF5C00]">
                    CE · ISO 9001
                  </span>
                </div>

                <h2 className="font-condensed font-black text-[28px] md:text-[32px] uppercase tracking-tight text-white leading-tight mb-3">
                  {gamme.name}
                </h2>
                <p className="font-body text-[15px] text-[#B0B2B5] leading-[1.6] mb-6">
                  {gamme.desc}
                </p>

                <span className="inline-flex items-center gap-2 font-condensed font-bold text-[12px] tracking-[0.15em] uppercase bg-[#FF5C00] group-hover:bg-[#CC4A00] text-white px-6 py-3 transition-colors duration-200">
                  {isFr ? 'Voir la gamme' : 'View range'}
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="mt-12 border border-white/[0.08] p-8 flex flex-wrap items-center gap-6">
          <p className="font-condensed font-bold text-xs tracking-[0.2em] uppercase text-[#FF5C00]">
            {isFr ? 'Certifications' : 'Certifications'}
          </p>
          {['CE', 'ISO 9001', 'ROHS', 'VOC Free', 'Antibactérien', 'Feu B1'].map((cert) => (
            <span
              key={cert}
              className="font-condensed font-bold text-xs tracking-wider uppercase border border-white/20 text-[#B0B2B5] px-3 py-1.5"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
