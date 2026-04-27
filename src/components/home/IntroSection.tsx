'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Check } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EASE_OUT } from '@/lib/easings'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export function IntroSection() {
  const t = useTranslations('intro')
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const points = [t('point1'), t('point2'), t('point3'), t('point4')]

  return (
    <section ref={ref} className="bg-[#FAFAF8] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Texte */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel label={t('label')} />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-condensed font-black text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-[0.95] tracking-tight mb-6"
            >
              {t('title')}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="font-body text-base md:text-lg text-[#4A4A4A] leading-relaxed mb-10"
            >
              {t('text')}
            </motion.p>

            <motion.ul variants={stagger} className="flex flex-col gap-4">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#FF5C00] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="font-body text-sm md:text-base text-[#4A4A4A]">
                    {point}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Visuel décoratif */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#F0F0EE]" />
              <div className="relative bg-[#1E1E1E] aspect-square flex items-center justify-center p-16">
                <svg
                  viewBox="0 0 992 896"
                  className="w-full max-w-[280px] opacity-90"
                >
                  <polygon
                    points="463 507 735 507 735 651 378 651 213 486 153 546 153 743 0 896 0 0 153 0 153 319 472 0 992 0 992 153 556 153 332.5 376.5 463 507"
                    fill="#FF5C00"
                  />
                  <path
                    d="M992,743l-153,153l-713,0l153,-153l560,0l0,-336l-560,0l153,-153l560,0l0,489Z"
                    fill="#B0B2B5"
                  />
                </svg>
                <div className="absolute bottom-6 right-6 bg-[#FF5C00] px-4 py-3">
                  <p className="font-condensed font-black text-white text-2xl leading-none">
                    100%
                  </p>
                  <p className="font-condensed font-semibold text-white/80 text-xs tracking-widest uppercase">
                    Certifié
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
