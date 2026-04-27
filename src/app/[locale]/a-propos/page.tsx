import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
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
      ? 'À propos — Notre mission et notre expertise | Kleston'
      : 'About — Our Mission and Expertise | Kleston',
    description: isFr
      ? 'Kleston, spécialiste québécois en protection architecturale depuis 2010. Notre mission : la conformité livrée et installée, partout au Québec.'
      : 'Kleston, Quebec specialist in architectural protection since 2010. Our mission: compliance delivered and installed, across Quebec.',
    alternates: {
      canonical: `https://kleston.ca/${locale}/${locale === 'fr' ? 'a-propos' : 'about'}`,
      languages: {
        'fr-CA': 'https://kleston.ca/fr/a-propos',
        'en-CA': 'https://kleston.ca/en/about',
      },
    },
    openGraph: {
      title: isFr ? 'À propos de Kleston — La conformité livrée et installée' : 'About Kleston — Compliance Delivered and Installed',
      description: isFr
        ? 'Spécialiste québécois en protection architecturale. Un seul partenaire de confiance pour votre projet.'
        : 'Quebec specialist in architectural protection. One trusted partner for your project.',
      url: `https://kleston.ca/${locale}/${isFr ? 'a-propos' : 'about'}`,
      images: [{ url: 'https://kleston.ca/images/og/kleston-og.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function AProposPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isFr = locale === 'fr'

  const values = isFr
    ? [
        { title: 'Conformité', desc: 'Chaque produit livré est certifié CE et conforme aux normes CNB et CCQ en vigueur.' },
        { title: 'Expertise locale', desc: 'Nous connaissons les spécificités du marché québécois, de la réglementation aux conditions climatiques.' },
        { title: 'Service complet', desc: 'Fourniture, installation, entretien : un seul interlocuteur pour votre projet du début à la fin.' },
        { title: 'Réactivité', desc: "Devis sous 24h, livraison dans les délais, intervention rapide en cas d'urgence." },
      ]
    : [
        { title: 'Compliance', desc: 'Every product delivered is CE certified and compliant with current NBC and CCQ standards.' },
        { title: 'Local expertise', desc: 'We know the specificities of the Quebec market, from regulations to climate conditions.' },
        { title: 'Full service', desc: 'Supply, installation, maintenance: one contact for your project from start to finish.' },
        { title: 'Responsiveness', desc: 'Quotes within 24h, on-time delivery, rapid response in emergencies.' },
      ]

  const stats = [
    { value: '15+', label: isFr ? "ans d'expérience" : 'years of experience' },
    { value: '500+', label: isFr ? 'projets livrés' : 'projects delivered' },
    { value: '100%', label: isFr ? 'certifié CE' : 'CE certified' },
    { value: '24h', label: isFr ? 'délai de réponse' : 'response time' },
  ]

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <div className="bg-[#1E1E1E] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SectionLabel label={isFr ? 'À propos' : 'About'} light />
          <h1 className="font-condensed font-black text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.9] tracking-tight mt-4 max-w-3xl">
            {isFr ? 'La conformité livrée et installée.' : 'Compliance delivered and installed.'}
          </h1>
          <p className="font-body text-[#B0B2B5] text-lg mt-6 max-w-2xl">
            {isFr
              ? "Kleston est le partenaire de référence des architectes, ingénieurs, gestionnaires d'immeubles et entrepreneurs généraux qui ont besoin de solutions de protection architecturale certifiées et installées dans les règles de l'art."
              : 'Kleston is the go-to partner for architects, engineers, building managers, and general contractors who need certified architectural protection solutions, properly installed.'}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#FF5C00] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="font-condensed font-black text-5xl md:text-6xl text-white leading-none">
                {stat.value}
              </p>
              <p className="font-body text-white/80 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-condensed font-black text-4xl md:text-5xl uppercase tracking-tight text-[#1A1A1A] leading-tight mb-8">
            {isFr ? 'Notre mission' : 'Our mission'}
          </h2>
          <div className="space-y-5 font-body text-[#4A4A4A] text-base leading-relaxed">
            <p>
              {isFr
                ? "Fondée au Québec, Kleston a été créée avec une conviction simple : les maîtres d'ouvrage ne devraient pas avoir à gérer plusieurs fournisseurs pour un seul projet de protection architecturale. De la sélection des produits à l'attestation de conformité finale, tout devrait être pris en charge par un seul partenaire de confiance."
                : 'Founded in Quebec, Kleston was created with a simple conviction: project owners should not have to manage multiple vendors for a single architectural protection project. From product selection to the final compliance certificate, everything should be handled by a single trusted partner.'}
            </p>
            <p>
              {isFr
                ? "Nous importons directement des meilleurs fabricants européens, éliminant les intermédiaires pour offrir des prix compétitifs sur des produits certifiés CE et ISO 9001. Notre équipe de techniciens qualifiés assure l'installation dans les règles de l'art, partout au Québec."
                : 'We import directly from the best European manufacturers, eliminating intermediaries to offer competitive prices on CE and ISO 9001 certified products. Our team of qualified technicians ensures proper installation, across Quebec.'}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value) => (
            <div key={value.title} className="bg-white border border-[#E0E0DE] p-8">
              <ShieldCheck size={24} className="text-[#FF5C00] mb-4" />
              <h3 className="font-condensed font-black text-xl uppercase tracking-tight text-[#1A1A1A] mb-3">
                {value.title}
              </h3>
              <p className="font-body text-sm text-[#4A4A4A] leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1E1E1E] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="font-condensed font-black text-4xl text-white uppercase leading-tight tracking-tight max-w-xl">
            {isFr ? 'Travaillons ensemble.' : "Let's work together."}
          </h2>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-[#FF5C00] text-white hover:bg-[#E05200] font-condensed font-bold text-sm tracking-[0.15em] uppercase px-10 py-4 transition-all duration-200 shrink-0"
          >
            {isFr ? 'Nous contacter' : 'Contact us'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  )
}
