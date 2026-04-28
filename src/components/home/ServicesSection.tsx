import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface ServicesSectionProps {
  locale: string
}

const serviceImages = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1581092160562-40aa08e76a40?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1563396983906-b3795482a59a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
]

export async function ServicesSection({ locale }: ServicesSectionProps) {
  const t = await getTranslations('services')

  const services = [
    { title: t('s1_title'), desc: t('s1_desc'), num: '01' },
    { title: t('s2_title'), desc: t('s2_desc'), num: '02' },
    { title: t('s3_title'), desc: t('s3_desc'), num: '03' },
    { title: t('s4_title'), desc: t('s4_desc'), num: '04' },
  ]

  return (
    <section className="bg-[#F5F1EA] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel label={t('label')} />
            <h2 className="font-condensed font-black text-5xl md:text-6xl uppercase tracking-tight text-[#1A1A1A] leading-[0.9] mt-4">
              {t('title')}
            </h2>
          </div>
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 font-condensed font-bold text-sm tracking-[0.15em] uppercase text-[#FF5C00] hover:text-[#1A1A1A] transition-colors shrink-0"
          >
            {t('cta')}
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-[#1F1F1F] border border-white/[0.08] hover:border-[#FF5C00] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image — 60% of card */}
              <div className="relative h-[240px] overflow-hidden shrink-0">
                <Image
                  src={serviceImages[i]}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#141414]/50" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <span className="font-condensed font-black text-[14px] tracking-[0.3em] uppercase text-[#FF5C00] mb-4 block">
                  {service.num}
                </span>
                <h3 className="font-condensed font-black text-[24px] uppercase tracking-tight text-white leading-tight mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-[15px] text-[#B0B2B5] leading-[1.6]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
