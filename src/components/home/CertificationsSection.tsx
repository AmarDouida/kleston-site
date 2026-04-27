'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { ShieldCheck } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EASE_OUT } from '@/lib/easings'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export function CertificationsSection() {
  const t = useTranslations('certifications')
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certs = [
    { name: t('c1'), desc: t('c1_desc') },
    { name: t('c2'), desc: t('c2_desc') },
    { name: t('c3'), desc: t('c3_desc') },
    { name: t('c4'), desc: t('c4_desc') },
    { name: t('c5'), desc: t('c5_desc') },
    { name: t('c6'), desc: t('c6_desc') },
  ]

  return (
    <section ref={ref} className="bg-[#1E1E1E] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <SectionLabel label={t('label')} light />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-condensed font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[0.95] tracking-tight mb-4 max-w-2xl mx-auto"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-body text-[#B0B2B5] text-base max-w-xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        {/* Grille certifications */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10"
        >
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-[#2A2A2A] p-8 md:p-10 flex flex-col items-center text-center group hover:bg-[#FF5C00]/10 transition-colors duration-300"
            >
              <ShieldCheck
                size={28}
                className="text-[#FF5C00] mb-4"
              />
              <p className="font-condensed font-black text-2xl md:text-3xl text-white mb-1">
                {cert.name}
              </p>
              <p className="font-body text-xs text-[#7A7A7A] tracking-wide">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
