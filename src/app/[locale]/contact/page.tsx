import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ContactForm } from '@/components/ui/ContactForm'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isFr = locale === 'fr'
  return {
    title: isFr
      ? 'Contact — Demandez un devis gratuit | Kleston'
      : 'Contact — Request a Free Quote | Kleston',
    description: isFr
      ? 'Contactez Kleston pour un devis gratuit. Réponse sous 24h. Fourniture et installation de mains courantes et protection murale partout au Québec.'
      : 'Contact Kleston for a free quote. Response within 24h. Supply and installation of handrails and wall protection across Quebec.',
    alternates: {
      canonical: `https://kleston.ca/${locale}/contact`,
      languages: {
        'fr-CA': 'https://kleston.ca/fr/contact',
        'en-CA': 'https://kleston.ca/en/contact',
      },
    },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations('contact')

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <div className="bg-[#1E1E1E] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SectionLabel label={t('label')} light />
          <h1 className="font-condensed font-black text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.9] tracking-tight mt-4 max-w-3xl">
            {t('title')}
          </h1>
          <p className="font-body text-[#B0B2B5] text-lg mt-6 max-w-xl">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Contact grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2 bg-white border border-[#E0E0DE] p-8 md:p-12">
          <ContactForm />
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div className="bg-white border border-[#E0E0DE] p-8">
            <h2 className="font-condensed font-black text-xl uppercase tracking-tight text-[#1A1A1A] mb-6">
              {t('info_title')}
            </h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-[#FF5C00] mt-0.5 shrink-0" />
                <div>
                  <p className="font-condensed font-bold text-xs tracking-wider uppercase text-[#7A7A7A] mb-1">
                    {locale === 'fr' ? 'Téléphone' : 'Phone'}
                  </p>
                  <a
                    href="tel:5145508823"
                    className="font-body text-base text-[#1A1A1A] hover:text-[#FF5C00] transition-colors"
                  >
                    {t('info_phone')}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-[#FF5C00] mt-0.5 shrink-0" />
                <div>
                  <p className="font-condensed font-bold text-xs tracking-wider uppercase text-[#7A7A7A] mb-1">
                    {locale === 'fr' ? 'Courriel' : 'Email'}
                  </p>
                  <a
                    href="mailto:info@kleston.ca"
                    className="font-body text-base text-[#1A1A1A] hover:text-[#FF5C00] transition-colors"
                  >
                    {t('info_email')}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-[#FF5C00] mt-0.5 shrink-0" />
                <div>
                  <p className="font-condensed font-bold text-xs tracking-wider uppercase text-[#7A7A7A] mb-1">
                    {locale === 'fr' ? 'Zone de service' : 'Service area'}
                  </p>
                  <p className="font-body text-base text-[#1A1A1A]">{t('info_zone')}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={18} className="text-[#FF5C00] mt-0.5 shrink-0" />
                <div>
                  <p className="font-condensed font-bold text-xs tracking-wider uppercase text-[#7A7A7A] mb-1">
                    {locale === 'fr' ? "Heures d'ouverture" : 'Business hours'}
                  </p>
                  <p className="font-body text-base text-[#1A1A1A]">{t('info_hours')}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Trust signal */}
          <div className="bg-[#FF5C00] p-8">
            <p className="font-condensed font-black text-3xl text-white uppercase leading-tight mb-2">
              {locale === 'fr' ? 'Réponse garantie en 24h' : 'Response guaranteed in 24h'}
            </p>
            <p className="font-body text-white/80 text-sm">
              {locale === 'fr'
                ? 'Du lundi au vendredi, 8h à 17h'
                : 'Monday to Friday, 8am to 5pm'}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
