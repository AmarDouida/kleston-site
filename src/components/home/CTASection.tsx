'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { EASE_OUT } from '@/lib/easings'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
}

export function CTASection() {
  const t = useTranslations('cta')
  const locale = useLocale()
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-[#FF5C00] py-24 md:py-32 overflow-hidden">
      {/* KS watermark décoratif */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none opacity-[0.06]">
        <svg viewBox="0 0 992 896" className="h-full w-auto">
          <polygon
            points="463 507 735 507 735 651 378 651 213 486 153 546 153 743 0 896 0 0 153 0 153 319 472 0 992 0 992 153 556 153 332.5 376.5 463 507"
            fill="white"
          />
          <path
            d="M992,743l-153,153l-713,0l153,-153l560,0l0,-336l-560,0l153,-153l560,0l0,489Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-condensed font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white uppercase leading-[0.9] tracking-tight mb-6"
          >
            {t('title')}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-body text-[#1E1E1E]/75 text-lg md:text-xl mb-10"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-5"
          >
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-2 bg-white text-[#FF5C00] hover:bg-[#1E1E1E] hover:text-white font-condensed font-bold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-200"
            >
              {t('cta_primary')}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>

            <div className="flex items-center gap-3 text-white/70">
              <span className="font-body text-sm">{t('or')}</span>
              <a
                href="tel:5145508823"
                className="flex items-center gap-2 font-condensed font-bold text-base tracking-wide text-white hover:text-white/80 transition-colors"
              >
                <Phone size={16} />
                {t('phone')}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
