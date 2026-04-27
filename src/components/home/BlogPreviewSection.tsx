'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
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

const POSTS_FR = [
  {
    slug: 'normes-mains-courantes-quebec',
    title: 'Mains courantes au Québec : normes, obligations légales et choix des matériaux',
    category: 'Normes et conformité',
    readTime: 8,
  },
  {
    slug: 'protection-murale-hopitaux-chsld',
    title: 'Protection murale en milieu hospitalier et CHSLD : exigences et solutions',
    category: 'Secteur santé',
    readTime: 7,
  },
  {
    slug: 'guide-accessibilite-pmr-quebec',
    title: "Guide d'accessibilité universelle au Québec : mains courantes et PMR",
    category: 'Accessibilité',
    readTime: 6,
  },
]

const POSTS_EN = [
  {
    slug: 'handrail-standards-quebec',
    title: 'Handrail Standards in Quebec: Legal Requirements and Material Selection',
    category: 'Standards & Compliance',
    readTime: 8,
  },
  {
    slug: 'wall-protection-hospitals-ltc',
    title: 'Wall Protection in Hospitals and Long-Term Care: Requirements and Solutions',
    category: 'Healthcare',
    readTime: 7,
  },
  {
    slug: 'accessibility-guide-pmr-quebec',
    title: 'Universal Accessibility Guide in Quebec: Handrails and Mobility Aids',
    category: 'Accessibility',
    readTime: 6,
  },
]

export function BlogPreviewSection() {
  const t = useTranslations('blog')
  const locale = useLocale()
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const posts = locale === 'fr' ? POSTS_FR : POSTS_EN

  return (
    <section ref={ref} className="bg-[#F0F0EE] py-24 md:py-32">
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
            <motion.div variants={fadeInUp}>
              <Link
                href={`/${locale}/blog`}
                className="group inline-flex items-center gap-2 font-condensed font-bold text-sm tracking-[0.15em] uppercase text-[#FF5C00] hover:text-[#E05200] transition-colors"
              >
                {t('cta')}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </motion.div>
          </div>
          <motion.p
            variants={fadeInUp}
            className="font-body text-[#4A4A4A] text-base max-w-xl mt-4"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        {/* Articles */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {posts.map((post, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white border border-[#E0E0DE] hover:border-[#FF5C00] p-8 transition-all duration-300"
              >
                {/* Catégorie */}
                <span className="font-condensed font-semibold text-xs tracking-[0.2em] uppercase text-[#FF5C00] mb-4">
                  {post.category}
                </span>

                {/* Numéro décoratif */}
                <span className="font-condensed font-black text-6xl text-[#F0F0EE] leading-none mb-4 group-hover:text-[#FF5C00]/10 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Titre */}
                <h3 className="font-condensed font-bold text-lg uppercase tracking-wide text-[#1A1A1A] leading-tight mb-auto group-hover:text-[#FF5C00] transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Footer */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#E0E0DE]">
                  <span className="flex items-center gap-1.5 font-body text-xs text-[#7A7A7A]">
                    <Clock size={12} />
                    {post.readTime} {t('min_read')}
                  </span>
                  <span className="font-condensed font-bold text-xs tracking-wider uppercase text-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {t('read_more')} →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
