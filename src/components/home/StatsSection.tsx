'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { EASE_OUT } from '@/lib/easings'

export function StatsSection() {
  const t = useTranslations('stats')
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const stats = [
    {
      value: t('stat1_value'),
      suffix: '',
      label: t('stat1_label'),
    },
    {
      value: t('stat2_value'),
      suffix: '',
      label: t('stat2_label'),
    },
    {
      value: t('stat3_value').replace('%', ''),
      suffix: '%',
      label: t('stat3_label'),
    },
    {
      value: t('stat4_value'),
      suffix: '',
      label: t('stat4_label'),
      isText: true,
    },
  ]

  return (
    <section ref={ref} className="bg-[#1E1E1E] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.1 }}
              className="bg-[#1E1E1E] px-8 py-10 md:py-14 text-center"
            >
              <p className="font-condensed font-black text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-2">
                {stat.isText ? (
                  <span>{stat.value}</span>
                ) : (
                  <>
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix}
                  </>
                )}
              </p>
              <div className="w-8 h-0.5 bg-[#FF5C00] mx-auto mb-3" />
              <p className="font-condensed text-xs tracking-[0.2em] uppercase text-[#B0B2B5]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
