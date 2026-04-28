import { getTranslations } from 'next-intl/server'
import { Quote } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

export async function TestimonialsSection() {
  const t = await getTranslations('testimonials')

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
    <section className="bg-[#1E1E1E] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-14">
          <SectionLabel label={t('label')} light />
          <h2 className="font-condensed font-bold text-[clamp(32px,4vw,48px)] uppercase tracking-[0em] text-white leading-[0.9] mt-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#1E1E1E] p-10 border-t-2 border-[#FF5C00]"
            >
              <Quote size={24} className="text-[#FF5C00] mb-6 opacity-60" />
              <p className="font-body text-[#B0B2B5] text-base leading-relaxed mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-white/[0.08] pt-6">
                <p className="font-condensed font-normal text-base uppercase tracking-tight text-white">
                  {testimonial.name}
                </p>
                <p className="font-body text-xs text-[#B0B2B5] mt-1">
                  {testimonial.title} — {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
