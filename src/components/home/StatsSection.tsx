import { getTranslations } from 'next-intl/server'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

export async function StatsSection() {
  const t = await getTranslations('stats')

  const stats = [
    { value: t('stat1_value'), label: t('stat1_label') },
    { value: t('stat2_value'), label: t('stat2_label') },
    { value: t('stat3_value'), label: t('stat3_label') },
    { value: t('stat4_value'), label: t('stat4_label') },
  ]

  return (
    <section className="bg-[#1E1E1E] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#1E1E1E] flex flex-col items-center justify-center py-14 px-6 text-center"
            >
              <p className="font-condensed font-black text-6xl md:text-7xl text-white leading-none">
                <AnimatedCounter target={stat.value} />
              </p>
              <p className="font-body text-[#B0B2B5] text-sm mt-3 max-w-[120px] leading-snug">
                {stat.label}
              </p>
              <span className="block w-6 h-px bg-[#FF5C00] mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
