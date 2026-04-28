import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArrowRight, Phone } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface CTASectionProps {
  locale: string
}

export async function CTASection({ locale }: CTASectionProps) {
  const t = await getTranslations('cta')

  return (
    <section className="relative bg-[#141414] py-32 md:py-40 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Orange line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5C00]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <SectionLabel label={t('label')} light />

        <h2 className="font-condensed font-black text-[clamp(48px,8vw,96px)] text-white uppercase leading-[0.88] tracking-[0.01em] mt-6 mb-8 max-w-4xl mx-auto">
          {t('title')}
        </h2>

        <p className="font-body text-[#B0B2B5] text-lg max-w-xl mx-auto mb-12">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 font-condensed font-bold text-sm tracking-[0.15em] uppercase bg-[#FF5C00] hover:bg-[#E05200] text-white px-12 py-4 transition-colors"
          >
            {t('cta_primary')}
            <ArrowRight size={14} />
          </Link>

          <a
            href={`tel:${t('phone').replace(/\s/g, '')}`}
            className="inline-flex items-center gap-3 font-body text-[#B0B2B5] hover:text-white transition-colors"
          >
            <Phone size={16} className="text-[#FF5C00]" />
            <span>
              <span className="text-xs tracking-wider uppercase text-[#7A7A7A] mr-2">
                {t('or')}
              </span>
              {t('phone')}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
