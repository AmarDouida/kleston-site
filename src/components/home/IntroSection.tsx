'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { CheckCircle2 } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EASE_OUT } from '@/lib/easings'

interface IntroSectionProps {
  locale: string
}

export function IntroSection({ locale }: IntroSectionProps) {
  const t = useTranslations('intro')
  const isFr = locale === 'fr'

  const points = [t('point1'), t('point2'), t('point3'), t('point4')]

  return (
    <section className="bg-white border-t border-b border-[#E0DBD0] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Top grid: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <SectionLabel label={t('label')} />
            <h2 className="font-condensed font-bold text-[clamp(32px,4vw,48px)] uppercase tracking-[0em] text-[#1A1A1A] leading-[0.9] mt-5 mb-8">
              {t('title')}
            </h2>
            <p className="font-body text-[#4A4A4A] text-base leading-relaxed max-w-xl">
              {t('text')}
            </p>

            <ul className="mt-10 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#FF5C00] mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-[#4A4A4A] leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image 4:5 */}
          <motion.div
            className="relative w-full aspect-[4/5] overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80"
              alt={isFr ? 'Couloir architectural moderne' : 'Modern architectural corridor'}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Orange accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF5C00]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
