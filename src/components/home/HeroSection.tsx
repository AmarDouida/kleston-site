'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const ksY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const ksOpacity = useTransform(scrollYProgress, [0, 0.6], [0.07, 0])
  const ksScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.4], ['0%', '-10%'])

  const contactPath = `/${locale}/contact`
  const produitsPath = locale === 'fr' ? `/${locale}/produits` : `/${locale}/products`

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] overflow-hidden bg-[#1E1E1E]"
    >
      {/* Fond avec parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero/hero.jpg"
          alt="Couloir institutionnel avec mains courantes Kleston"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E]/90 via-[#1E1E1E]/60 to-[#1E1E1E]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/80 via-transparent to-[#1E1E1E]/20" />
      </motion.div>

      {/* KS watermark parallax */}
      <motion.div
        style={{ y: ksY, opacity: ksOpacity, scale: ksScale }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg
          viewBox="0 0 992 896"
          className="w-[75vw] max-w-[900px]"
          fill="white"
        >
          <polygon points="463 507 735 507 735 651 378 651 213 486 153 546 153 743 0 896 0 0 153 0 153 319 472 0 992 0 992 153 556 153 332.5 376.5 463 507" />
          <path d="M992,743l-153,153l-713,0l153,-153l560,0l0,-336l-560,0l153,-153l560,0l0,489Z" />
        </svg>
      </motion.div>

      {/* Contenu */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-20 lg:pb-24 px-6 md:px-12 lg:px-20 max-w-5xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="font-condensed font-semibold text-xs tracking-[0.3em] text-[#FF5C00] uppercase mb-5"
        >
          {t('label')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          className="font-condensed font-black text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white uppercase leading-[0.95] tracking-tight mb-5 max-w-3xl"
        >
          {t('title')}
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '3rem' }}
          transition={{ duration: 0.6, delay: 3.4 }}
          className="h-0.5 bg-[#FF5C00] mb-5"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.6 }}
          className="font-body font-light text-base md:text-lg text-[#B0B2B5] italic mb-8"
        >
          {t('slogan')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.8 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href={contactPath}
            className="group inline-flex items-center gap-2 bg-[#FF5C00] hover:bg-[#E05200] text-white font-condensed font-bold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-200"
          >
            {t('cta_primary')}
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
          <Link
            href={produitsPath}
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-condensed font-bold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-200 hover:bg-white/5"
          >
            {t('cta_secondary')}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 4.2 }}
        className="absolute bottom-8 right-8 md:right-12 lg:right-20 flex flex-col items-center gap-2"
      >
        <span className="font-condensed text-xs tracking-[0.2em] text-white/40 uppercase -rotate-90 origin-center mb-6">
          {t('scroll')}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-white/40" size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
