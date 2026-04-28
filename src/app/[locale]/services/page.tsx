import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
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

const serviceImages = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1581092160562-40aa08e76a40?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1563396983906-b3795482a59a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
]

const whyIcons = ['⚡', '🛡', '📋', '🤝']

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
            'Livraison partout au Québec sous 5–10 jours',
            'Prix garantis sans intermédiaire',
          ]
        : [
            'Direct import from Europe and Asia',
            'CE and ISO 9001 certified products',
            'Stock available in Montreal',
            'Delivery across Quebec within 5–10 days',
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
            "Disponible 5j/7, 8h–17h",
            'Suivi de dossier en ligne',
          ]
        : [
            'Rapid on-site intervention',
            'Single dedicated contact',
            'Response times guaranteed by contract',
            'Available 5 days/week, 8am–5pm',
            'Online case tracking',
          ],
    },
  ]

  const whyCards = isFr
    ? [
        { icon: whyIcons[0], title: 'Réactivité', desc: 'Devis sous 24h, réponse garantie, intervention planifiée sans délai.' },
        { icon: whyIcons[1], title: 'Conformité', desc: 'Chaque produit livré est certifié CE et conforme aux normes CNB et CCQ.' },
        { icon: whyIcons[2], title: 'Transparence', desc: 'Rapports détaillés, attestations de conformité, suivi de dossier en ligne.' },
        { icon: whyIcons[3], title: 'Partenariat', desc: "Un seul interlocuteur du début à la fin, pour tous vos projets." },
      ]
    : [
        { icon: whyIcons[0], title: 'Responsiveness', desc: 'Quote within 24h, guaranteed response, planned intervention without delay.' },
        { icon: whyIcons[1], title: 'Compliance', desc: 'Every product delivered is CE certified and meets NBC and CCQ standards.' },
        { icon: whyIcons[2], title: 'Transparency', desc: 'Detailed reports, compliance certificates, online case tracking.' },
        { icon: whyIcons[3], title: 'Partnership', desc: 'One contact from start to finish, for all your projects.' },
      ]

  return (
    <main className="min-h-screen bg-[#F5F1EA]">
      <PageHero
        label={t('label')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      {/* Timeline process */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="relative">
          {/* Vertical orange line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-[#FF5C00] hidden md:block" aria-hidden="true" />

          <div className="space-y-0">
            {services.map((service, i) => (
              <div key={i} className="relative grid grid-cols-1 md:grid-cols-[80px_1fr_340px] gap-0 md:gap-12 pb-16 last:pb-0">
                {/* Step index */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#FF5C00] flex items-center justify-center shrink-0 z-10">
                    <span className="font-condensed font-black text-2xl text-white tracking-[0.1em]">
                      {service.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-0 md:pt-4">
                  {/* Mobile step number */}
                  <div className="flex items-center gap-3 mb-5 md:hidden">
                    <div className="w-10 h-10 bg-[#FF5C00] flex items-center justify-center shrink-0">
                      <span className="font-condensed font-black text-sm text-white">{service.num}</span>
                    </div>
                    <div className="h-px flex-1 bg-[#FF5C00]/30" />
                  </div>

                  <h2 className="font-condensed font-black text-4xl md:text-5xl uppercase tracking-tight text-[#1A1A1A] leading-[0.9] mb-5">
                    {service.title}
                  </h2>
                  <p className="font-body text-base text-[#4A4A4A] leading-relaxed mb-8 max-w-lg">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#FF5C00] mt-0.5 shrink-0" />
                        <span className="font-body text-sm text-[#4A4A4A] leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-auto md:h-[280px] overflow-hidden mt-8 md:mt-4 self-start">
                  <Image
                    src={serviceImages[i]}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                  <div className="absolute inset-0 bg-[#141414]/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Kleston */}
      <div className="bg-[#1E1E1E] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-12">
            <SectionLabel label={isFr ? 'Pourquoi Kleston' : 'Why Kleston'} light />
            <h2 className="font-condensed font-black text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight mt-4">
              {isFr ? 'Un seul partenaire de confiance' : 'One trusted partner'}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {whyCards.map((card) => (
              <div key={card.title} className="bg-[#252525] border border-white/[0.06] p-8">
                <span className="text-2xl mb-5 block">{card.icon}</span>
                <h3 className="font-condensed font-black text-xl uppercase tracking-tight text-white mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-[#B0B2B5] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
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
