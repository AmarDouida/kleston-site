'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Package, Wrench, Settings, Phone, ArrowRight } from 'lucide-react'
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

const ICONS = [Package, Wrench, Settings, Phone]

export function ServicesSection() {
  const t = useTranslations('services')
  const locale = useLocale()
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    { title: t('s1_title'), desc: t('s1_desc') },
    { title: t('s2_title'), desc: t('s2_desc') },
    { title: t('s3_title'), desc: t('s3_desc') },
    { title: t('s4_title'), desc: t('s4_desc') },
  ]

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
            <motion.p
              variants={fadeInUp}
              className="font-body text-[#4A4A4A] text-base max-w-sm"
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </motion.div>

        {/* Grille */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0E0DE]"
        >
          {services.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-8 md:p-10 group"
              >
                <div className="w-10 h-10 bg-[#FF5C00]/10 flex items-center justify-center mb-6">
                  <Icon size={20} className="text-[#FF5C00]" />
                </div>
                <h3 className="font-condensed font-black text-xl uppercase tracking-wide text-[#1A1A1A] mb-3">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-[#4A4A4A] leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href={`/${locale}/services`}
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
    </section>
  )
}
