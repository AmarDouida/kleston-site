import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
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
    openGraph: {
      title: isFr ? 'Contactez Kleston — Devis gratuit en 24h' : 'Contact Kleston — Free Quote in 24h',
      description: isFr
        ? 'Réponse garantie sous 24h. Fourniture et installation partout au Québec.'
        : 'Response guaranteed within 24h. Supply and installation across Quebec.',
      url: `https://kleston.ca/${locale}/contact`,
      images: [{ url: 'https://kleston.ca/images/og/kleston-og.jpg', width: 1200, height: 630 }],
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
  const isFr = locale === 'fr'

  const infoItems = [
    {
      icon: Phone,
      label: isFr ? 'Téléphone' : 'Phone',
      value: t('info_phone'),
      href: `tel:${t('info_phone').replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: isFr ? 'Courriel' : 'Email',
      value: t('info_email'),
      href: `mailto:${t('info_email')}`,
    },
    {
      icon: MapPin,
      label: isFr ? 'Zone de service' : 'Service area',
      value: t('info_zone'),
      href: null,
    },
    {
      icon: Clock,
      label: isFr ? "Heures d'ouverture" : 'Business hours',
      value: t('info_hours'),
      href: null,
    },
  ]

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <PageHero
        label={t('label')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      {/* Contact grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form — 2/3 width */}
        <div className="lg:col-span-2 bg-white border border-[#E0E0DE] p-8 md:p-12">
          <h2 className="font-condensed font-black text-2xl uppercase tracking-tight text-[#1A1A1A] mb-8">
            {isFr ? 'Votre message' : 'Your message'}
          </h2>
          <ContactForm />
        </div>

        {/* Info panel — 1/3 width */}
        <div className="flex flex-col gap-1">
          {/* Contact info */}
          <div className="bg-white border border-[#E0E0DE] p-8 flex-1">
            <h2 className="font-condensed font-black text-xl uppercase tracking-tight text-[#1A1A1A] mb-8">
              {t('info_title')}
            </h2>
            <ul className="space-y-7">
              {infoItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-[#FF5C00]/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#FF5C00]" />
                    </div>
                    <div>
                      <p className="font-condensed font-bold text-xs tracking-wider uppercase text-[#4A4A4A] mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-body text-base text-[#1A1A1A] hover:text-[#FF5C00] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-base text-[#1A1A1A]">{item.value}</p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Trust signal */}
          <div className="bg-[#1E1E1E] p-8">
            <p className="font-condensed font-black text-[28px] text-white uppercase leading-tight mb-2">
              {isFr ? 'Réponse garantie en 24h' : 'Response guaranteed in 24h'}
            </p>
            <p className="font-body text-[#B0B2B5] text-sm">
              {isFr ? 'Du lundi au vendredi, 8h à 17h' : 'Monday to Friday, 8am to 5pm'}
            </p>
            <div className="mt-6 h-1 bg-[#FF5C00]" />
          </div>
        </div>
      </div>
    </main>
  )
}
