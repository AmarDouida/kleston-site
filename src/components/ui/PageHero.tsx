import { SectionLabel } from './SectionLabel'

interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
}

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <div className="bg-[#141414] pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionLabel label={label} light />
        <h1 className="font-condensed font-black text-[clamp(48px,7vw,80px)] text-white uppercase leading-[0.88] tracking-tight mt-5 max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-[#B0B2B5] text-lg mt-6 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
