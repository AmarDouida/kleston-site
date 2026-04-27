'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EASE_OUT } from '@/lib/easings'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const GAMME_NUMBERS = ['01', '02', '03', '04']

type Product = {
  slug: string
  slugEn: string
  name: string
  desc: string
  badges: string[]
}

export function ProductsSection() {
  const t = useTranslations('produits')
  const locale = useLocale()
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const products: Product[] = [
    {
      slug: 'mains-courantes',
      slugEn: 'handrails',
      name: t('g1_name'),
      desc: t('g1_desc'),
      badges: [t('badge_certified'), t('badge_colors')],
    },
    {
      slug: 'main-courante-protection-murale',
      slugEn: 'handrail-wall-protection',
      name: t('g2_name'),
      desc: t('g2_desc'),
      badges: [t('badge_certified'), 'Antibactérien'],
    },
    {
      slug: 'protection-murale-antichoc',
      slugEn: 'wall-protection',
      name: t('g3_name'),
      desc: t('g3_desc'),
      badges: [t('badge_certified'), t('badge_colors')],
    },
    {
      slug: 'protection-angle',
      slugEn: 'corner-protection',
      name: t('g4_name'),
      desc: t('g4_desc'),
      badges: [t('badge_certified'), t('badge_inox')],
    },
  ]

  const basePath = locale === 'fr' ? `/${locale}/produits` : `/${locale}/products`

  return (
    <section ref={ref} className="bg-[#FAFAF8] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel label={t('label')} />
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              variants={fadeInUp}
              className="font-condensed font-black text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-[0.95] tracking-tight max-w-lg"
            >
              {t('title')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="font-body text-[#4A4A4A] text-base max-w-sm"
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </motion.div>

        {/* Grille produits */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {products.map((p, i) => {
            const href =
              locale === 'fr'
                ? `${basePath}/${p.slug}`
                : `${basePath}/${p.slugEn}`
            return (
              <motion.div key={i} variants={fadeInUp}>
                <Link
                  href={href}
                  className="group block bg-white border border-[#E0E0DE] hover:border-[#FF5C00] p-8 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-condensed font-black text-5xl text-[#E0E0DE] leading-none group-hover:text-[#FF5C00]/20 transition-colors duration-300">
                      {GAMME_NUMBERS[i]}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-[#FF5C00] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                    />
                  </div>
                  <h3 className="font-condensed font-black text-xl uppercase tracking-wide text-[#1A1A1A] mb-3">
                    {p.name}
                  </h3>
                  <p className="font-body text-sm text-[#4A4A4A] leading-relaxed mb-6">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.badges.map((badge) => (
                      <span
                        key={badge}
                        className="font-condensed font-semibold text-xs tracking-wider uppercase px-3 py-1 bg-[#F0F0EE] text-[#4A4A4A]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA global */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href={basePath}
            className="group inline-flex items-center gap-2 bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white font-condensed font-bold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-colors duration-200"
          >
            {t('cta')}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
