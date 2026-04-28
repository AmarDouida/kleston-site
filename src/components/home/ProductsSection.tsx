import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface ProductsSectionProps {
  locale: string
}

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

export async function ProductsSection({ locale }: ProductsSectionProps) {
  const t = await getTranslations('produits')
  const isFr = locale === 'fr'

  const products = [
    { name: t('g1_name'), desc: t('g1_desc') },
    { name: t('g2_name'), desc: t('g2_desc') },
    { name: t('g3_name'), desc: t('g3_desc') },
    { name: t('g4_name'), desc: t('g4_desc') },
  ]

  return (
    <section className="bg-[#141414] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel label={t('label')} light />
            <h2 className="font-condensed font-bold text-[clamp(32px,4vw,48px)] uppercase tracking-[0em] text-white leading-[0.9] mt-4">
              {t('title')}
            </h2>
          </div>
          <Link
            href={`/${locale}/${isFr ? 'produits' : 'products'}`}
            className="inline-flex items-center gap-2 font-condensed font-bold text-sm tracking-[0.15em] uppercase text-[#FF5C00] hover:text-white transition-colors shrink-0"
          >
            {t('cta')}
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Full-bleed cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {products.map((product, i) => (
            <Link
              key={i}
              href={`/${locale}/${isFr ? 'produits' : 'products'}/${productSlugs[i]}`}
              className="group relative overflow-hidden flex flex-col min-h-[480px] border border-white/[0.08] hover:border-[#FF5C00] transition-colors duration-300"
            >
              {/* Background image with dark overlay */}
              <div className="absolute inset-0">
                <Image
                  src={productImages[i]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/70 to-[#141414]/30" />
              </div>

              {/* Content at bottom */}
              <div className="relative z-10 mt-auto p-7">
                <h3 className="font-condensed font-normal text-[28px] uppercase tracking-tight text-white leading-tight mb-3">
                  {product.name}
                </h3>
                <p className="font-body text-[15px] text-[#B0B2B5] leading-[1.6] mb-6">
                  {product.desc}
                </p>
                {/* CTA button */}
                <span className="inline-flex items-center gap-2 font-condensed font-bold text-[12px] tracking-[0.15em] uppercase bg-[#FF5C00] group-hover:bg-[#CC4A00] text-white px-6 py-3 transition-colors duration-200">
                  {isFr ? 'Découvrir' : 'Discover'}
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
