import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'

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

const serviceImages = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581092160562-40aa08e76a40?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1563396983906-b3795482a59a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
]

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
      num: '01',
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
      num: '02',
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
      num: '03',
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
      num: '04',
      title: t('s4_title'),
      desc: t('s4_desc'),
      details: isFr
        ? [
            'Intervention rapide sur site',
            'Un seul interlocuteur dédié',
            'Délais garantis sous contrat',
            "Disponible 5j/7, 8h-17h",
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
      <PageHero
        label={t('label')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      {/* Alternating service sections */}
      {services.map((service, i) => {
        const isLight = i % 2 === 0
        const bg = isLight ? 'bg-[#FAFAF8]' : 'bg-[#1E1E1E]'
        const titleColor = isLight ? 'text-[#1A1A1A]' : 'text-white'
        const bodyColor = isLight ? 'text-[#4A4A4A]' : 'text-[#B0B2B5]'
        const numColor = isLight ? 'rgba(255,92,0,0.12)' : 'rgba(255,92,0,0.25)'

        return (
          <div key={i} className={bg}>
            <div className={`grid grid-cols-1 lg:grid-cols-2`}>
              {/* Image */}
              <div
                className={`relative min-h-[480px] lg:min-h-[560px] overflow-hidden ${!isLight ? 'lg:order-2' : ''}`}
              >
                <Image
                  src={serviceImages[i]}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className={`absolute inset-0 ${isLight ? 'bg-[#141414]/30' : 'bg-[#141414]/50'}`}
                />
              </div>

              {/* Content */}
              <div
                className={`relative overflow-hidden px-8 md:px-16 py-20 flex flex-col justify-center ${!isLight ? 'lg:order-1' : ''}`}
              >
                {/* Watermark number */}
                <span
                  className="absolute top-0 right-0 font-condensed font-black leading-none pointer-events-none select-none"
                  style={{ fontSize: '180px', color: numColor, lineHeight: 1 }}
                >
                  {service.num}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="block w-8 h-px bg-[#FF5C00]" />
                    <span className="font-condensed font-bold text-xs tracking-[0.25em] uppercase text-[#FF5C00]">
                      {service.num}
                    </span>
                  </div>

                  <h2
                    className={`font-condensed font-black text-4xl md:text-5xl uppercase tracking-tight ${titleColor} leading-[0.9] mb-6`}
                  >
                    {service.title}
                  </h2>

                  <p className={`font-body text-base leading-relaxed mb-8 max-w-md ${bodyColor}`}>
                    {service.desc}
                  </p>

                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#FF5C00] mt-0.5 shrink-0" />
                        <span className={`font-body text-sm leading-relaxed ${bodyColor}`}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      })}

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
