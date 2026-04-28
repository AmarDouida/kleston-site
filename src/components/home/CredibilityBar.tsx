import { getTranslations } from 'next-intl/server'
import { ShieldCheck } from 'lucide-react'

export async function CredibilityBar() {
  const t = await getTranslations('certifications')

  const items = [
    { code: t('c1'), desc: t('c1_desc') },
    { code: t('c2'), desc: t('c2_desc') },
    { code: t('c3'), desc: t('c3_desc') },
    { code: t('c4'), desc: t('c4_desc') },
    { code: t('c5'), desc: t('c5_desc') },
    { code: t('c6'), desc: t('c6_desc') },
  ]

  // Duplicate for seamless loop
  const allItems = [...items, ...items]

  return (
    <div className="bg-[#141414] border-y border-white/[0.06] overflow-hidden py-12">
      <div className="flex animate-marquee w-max">
        {allItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-24 border-r border-[#FF5C00]/40 shrink-0"
          >
            <ShieldCheck size={16} className="text-[#FF5C00] shrink-0" />
            <span className="font-condensed font-bold text-lg uppercase tracking-widest text-white whitespace-nowrap">
              {item.code}
            </span>
            <span className="font-body text-xs text-[#B0B2B5] whitespace-nowrap">
              — {item.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
