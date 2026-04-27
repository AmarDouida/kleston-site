'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Quote } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EASE_OUT } from '@/lib/easings'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export function TestimonialsSection() {
  const t = useTranslations('testimonials')
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: t('t1_name'),
      title: t('t1_title'),
      company: t('t1_company'),
      text: t('t1_text'),
    },
    {
      name: t('t2_name'),
      title: t('t2_title'),
      company: t('t2_company'),
      text: t('t2_text'),
    },
    {
      name: t('t3_name'),
      title: t('t3_title'),
      company: t('t3_company'),
      text: t('t3_text'),
    },
  ]

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
          <motion.h2
            variants={fadeInUp}
            className="font-condensed font-black text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-[0.95] tracking-tight max-w-lg"
          >
            {t('title')}
          </motion.h2>
        </motion.div>

        {/* Grille témoignages */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white border border-[#E0E0DE] p-8 flex flex-col"
            >
              <Quote
                size={28}
                className="text-[#FF5C00] mb-6 shrink-0"
                fill="currentColor"
              />
              <p className="font-body text-sm md:text-base text-[#4A4A4A] leading-relaxed flex-1 mb-8">
                {testi.text}
              </p>
              <div className="border-t border-[#E0E0DE] pt-6">
                <p className="font-condensed font-bold text-sm uppercase tracking-wide text-[#1A1A1A]">
                  {testi.name}
                </p>
                <p className="font-body text-xs text-[#7A7A7A] mt-1">
                  {testi.title} — {testi.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
