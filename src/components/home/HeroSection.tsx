'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowDown } from 'lucide-react'
import { EASE_OUT } from '@/lib/easings'

interface HeroSectionProps {
  locale: string
}

export function HeroSection({ locale }: HeroSectionProps) {
  const t = useTranslations('hero')
  const isFr = locale === 'fr'
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  const title = t('title')
  const words = title.split(' ')

  return (
    <section ref={containerRef} className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Background: Ken Burns + parallax */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: yImg }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 3.2, ease: EASE_OUT }}
      >
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Kleston — protection architecturale au Québec"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/92 via-[#141414]/65 to-[#141414]/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="block w-8 h-px bg-[#FF5C00]" />
          <span className="font-condensed font-bold text-xs tracking-[0.22em] uppercase text-[#FF5C00]">
            {t('label')}
          </span>
        </motion.div>

        {/* Word-by-word animated title */}
        <h1 className="font-condensed font-black text-[clamp(42px,8vw,96px)] text-white uppercase leading-[0.88] tracking-tight max-w-4xl">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.22em] last:mr-0">
              <motion.span
                className="inline-block"
                initial={{ y: '115%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.75,
                  delay: 0.25 + i * 0.065,
                  ease: EASE_OUT,
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Slogan */}
        <motion.p
          className="font-body text-[#B0B2B5] text-lg md:text-xl mt-7 max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: EASE_OUT }}
        >
          {t('slogan')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: EASE_OUT }}
        >
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center font-condensed font-bold text-sm tracking-[0.15em] uppercase bg-[#FF5C00] hover:bg-[#E05200] text-white px-10 py-4 transition-colors"
          >
            {t('cta_primary')}
          </Link>
          <Link
            href={`/${locale}/${isFr ? 'produits' : 'products'}`}
            className="inline-flex items-center justify-center font-condensed font-bold text-sm tracking-[0.15em] uppercase border border-white/30 hover:border-white text-white px-10 py-4 transition-colors"
          >
            {t('cta_secondary')}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="font-condensed font-bold text-[10px] tracking-[0.25em] uppercase text-[#7A7A7A]">
          {t('scroll')}
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-[#7A7A7A]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
