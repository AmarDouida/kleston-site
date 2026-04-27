import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { Truck, Wrench, Settings, HeadphonesIcon, ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isFr = locale === 'fr'
  return {
    title: isFr
      ? 'Services — Fourniture, installation et entretien | Kleston'
      : 'Services — Supply, Installation and Maintenance | Kleston',
    description: isFr
      ? 'Services Kleston : fourniture de produits certifiés, installation professionnelle, entretien annuel et service après-vente. Un seul interlocuteur pour votre projet.'
      : 'Kleston services: certified product supply, professional installation, annual maintenance, and after-sales service. One contact for your entire project.',
    alternates: {
      canonical: `https://kleston.ca/${locale}/services`,
      languages: {
        'fr-CA': 'https://kleston.ca/fr/services',
        'en-CA': 'https://kleston.ca/en/services',
      },
    },
    openGraph: {
      title: isFr ? 'Services Kleston — Fourniture, installation et entretien' : 'Kleston Services — Supply, Installation and Maintenance',
      description: isFr
        ? 'Un seul interlocuteur pour votre projet de protection architecturale, du début à la fin.'
        : 'One contact for your architectural protection project, from start to finish.',
      url: `https://kleston.ca/${locale}/services`,
      images: [{ url: 'https://kleston.ca/images/og/kleston-og.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations('services')
  const isFr = locale === 'fr'

  const services = [
    {
      icon: <Truck size={32} className="text-[#FF5C00]" />,
      title: t('s1_title'),
      desc: t('s1_desc'),
      details: isFr
        ? [
            'Importation directe Europe et Asie',
            'Produits certifiés CE et ISO 9001',
            'Stock disponible à Montréal',
            'Livraison partout au Québec sous 5-10 jours',
            'Prix garantis sans intermédiaire',
          ]
        : [
            'Direct import from Europe and Asia',
            'CE and ISO 9001 certified products',
            'Stock available in Montreal',
            'Delivery across Quebec within 5-10 days',
            'Guaranteed prices without middlemen',
          ],
    },
    {
      icon: <Wrench size={32} className="text-[#FF5C00]" />,
      title: t('s2_title'),
      desc: t('s2_desc'),
      details: isFr
        ? [
            'Techniciens qualifiés et expérimentés',
            'Respect des délais convenus',
            'Vérification complète avant réception',
            'Attestation de conformité fournie',
            'Travaux en milieu actif possibles',
          ]
        : [
            'Qualified and experienced technicians',
            'Respect of agreed timelines',
            'Full verification before handover',
            'Certificate of compliance provided',
            'Work in active facilities possible',
          ],
    },
    {
      icon: <Settings size={32} className="text-[#FF5C00]" />,
      title: t('s3_title'),
      desc: t('s3_desc'),
      details: isFr
        ? [
            'Contrats annuels personnalisés',
            'Inspections périodiques planifiées',
            'Réglage et remplacement de pièces',
            "Rapport d'état annuel",
            'Alertes préventives avant défaillance',
          ]
        : [
            'Personalized annual contracts',
            'Scheduled periodic inspections',
            'Component adjustment and replacement',
            'Annual condition report',
            'Preventive alerts before failure',
          ],
    },
    {
      icon: <HeadphonesIcon size={32} className="text-[#FF5C00]" />,
      title: t('s4_title'),
      desc: t('s4_desc'),
      details: isFr
        ? [
            'Intervention rapide sur site',
            'Un seul interlocuteur dédié',
            'Délais garantis sous contrat',
            'Disponible 5j/7, 8h-17h',
            'Suivi de dossier en ligne',
          ]
        : [
            'Rapid on-site intervention',
            'Single dedicated contact',
            'Response times guaranteed by contract',
            'Available 5 days/week, 8am-5pm',
            'Online case tracking',
          ],
    },
  ]

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

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white border border-[#E0E0DE] p-10 grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <div className="md:col-span-1">
              <div className="mb-6">{service.icon}</div>
              <span className="font-condensed font-black text-6xl text-[#F0F0EE] leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="font-condensed font-black text-2xl uppercase tracking-tight text-[#1A1A1A] mt-4">
                {service.title}
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="font-body text-[#4A4A4A] text-base leading-relaxed mb-8">
                {service.desc}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 font-body text-sm text-[#4A4A4A]">
                    <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full mt-2 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#FF5C00] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="font-condensed font-black text-4xl md:text-5xl text-white uppercase leading-tight tracking-tight max-w-xl">
            {isFr ? 'Prêt à démarrer votre projet ?' : 'Ready to start your project?'}
          </h2>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-white text-[#FF5C00] hover:bg-[#1E1E1E] hover:text-white font-condensed font-bold text-sm tracking-[0.15em] uppercase px-10 py-4 transition-all duration-200 shrink-0"
          >
            {isFr ? 'Demander un devis' : 'Request a quote'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  )
}
