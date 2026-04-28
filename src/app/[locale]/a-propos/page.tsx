import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, PackageOpen, Wrench, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CertificationsGrid } from '@/components/ui/CertificationsGrid'

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

  const approachCards = isFr
    ? [
        {
          Icon: PackageOpen,
          title: 'Importation directe',
          desc: "Nous sourceons directement auprès des meilleurs fabricants européens, sans intermédiaire. Résultat : des prix compétitifs sur des produits certifiés CE et ISO 9001.",
        },
        {
          Icon: Wrench,
          title: 'Service intégré',
          desc: "Fourniture, installation et entretien sous un seul toit. Un seul interlocuteur de la sélection des produits à l'attestation de conformité finale.",
        },
        {
          Icon: ShieldCheck,
          title: 'Conformité garantie',
          desc: "Tous nos produits respectent les normes CNB, CCQ et les directives européennes en vigueur. Chaque livraison est accompagnée de son attestation de conformité.",
        },
      ]
    : [
        {
          Icon: PackageOpen,
          title: 'Direct import',
          desc: 'We source directly from the best European manufacturers, without intermediaries. Result: competitive prices on CE and ISO 9001 certified products.',
        },
        {
          Icon: Wrench,
          title: 'Integrated service',
          desc: 'Supply, installation, and maintenance under one roof. One contact from product selection to the final compliance certificate.',
        },
        {
          Icon: ShieldCheck,
          title: 'Guaranteed compliance',
          desc: 'All our products meet current NBC, CCQ standards and European directives. Every delivery comes with its compliance certificate.',
        },
      ]

  const darkStats = [
    { value: '32', label: isFr ? 'coloris disponibles' : 'available colors' },
    { value: '4', label: isFr ? 'gammes certifiées' : 'certified ranges' },
    { value: '100%', label: isFr ? 'conforme aux normes' : 'standards compliant' },
    { value: '24h', label: isFr ? 'délai de réponse garanti' : 'guaranteed response time' },
  ]

  return (
    <main className="min-h-screen bg-[#F5F1EA]">
      <PageHero
        label={isFr ? 'À propos' : 'About'}
        title={isFr ? 'La conformité livrée et installée.' : 'Compliance delivered and installed.'}
        subtitle={
          isFr
            ? "Kleston est le partenaire de référence des architectes, ingénieurs, gestionnaires d'immeubles et entrepreneurs généraux qui ont besoin de solutions de protection architecturale certifiées et installées dans les règles de l'art."
            : 'Kleston is the go-to partner for architects, engineers, building managers, and general contractors who need certified architectural protection solutions, properly installed.'
        }
      />

      {/* Notre mission — image left / text right */}
      <div className="bg-white border-b border-[#E0DBD0] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80"
              alt={isFr ? 'Couloir architectural moderne' : 'Modern architectural corridor'}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF5C00]" />
          </div>

          {/* Text */}
          <div>
            <SectionLabel label={isFr ? 'Notre mission' : 'Our mission'} />
            <h2 className="font-condensed font-bold text-[clamp(32px,4vw,48px)] uppercase tracking-[0em] text-[#1A1A1A] leading-[1.05] mt-5 mb-8">
              {isFr ? 'Un seul partenaire, de A à Z.' : 'One partner, A to Z.'}
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
        </div>
      </div>

      {/* Notre approche en 3 points */}
      <div className="bg-[#EBE7DE] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-12">
            <SectionLabel label={isFr ? 'Notre approche' : 'Our approach'} />
            <h2 className="font-condensed font-bold text-[clamp(32px,4vw,48px)] uppercase tracking-[0em] text-[#1A1A1A] leading-[1.05] mt-4">
              {isFr ? 'Comment nous travaillons' : 'How we work'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {approachCards.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#E0DBD0] p-10">
                <Icon size={32} className="text-[#FF5C00] mb-6" />
                <h3 className="font-condensed font-bold text-xl uppercase tracking-[0em] text-[#1A1A1A] mb-4">
                  {title}
                </h3>
                <p className="font-body text-[14px] text-[#4A4A4A] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-[#F5F1EA] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <CertificationsGrid isFr={isFr} showSection />
        </div>
      </div>

      {/* Stats sombres */}
      <div className="bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05]">
          {darkStats.map((stat) => (
            <div key={stat.value} className="bg-[#141414] py-16 px-6 text-center">
              <p className="font-condensed font-black text-[clamp(48px,6vw,72px)] text-white leading-none">
                {stat.value}
              </p>
              <p className="font-body text-[#B0B2B5] text-sm mt-3 leading-snug">{stat.label}</p>
              <span className="block w-6 h-px bg-[#FF5C00] mx-auto mt-4" />
            </div>
          ))}
        </div>
      </div>

      {/* Notre engagement qualité */}
      <div className="bg-[#F5F1EA] py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <SectionLabel label={isFr ? 'Engagement qualité' : 'Quality commitment'} />
          <h2 className="font-condensed font-bold text-[clamp(28px,3.5vw,40px)] uppercase tracking-[0em] text-[#1A1A1A] leading-[1.05] mt-4 mb-6">
            {isFr ? "L'excellence, pas l'exception." : 'Excellence, not the exception.'}
          </h2>
          <p className="font-body text-[#4A4A4A] text-base leading-relaxed">
            {isFr
              ? "Chez Kleston, la qualité n'est pas un argument commercial — c'est notre standard minimum. Chaque produit que nous livrons a été sélectionné, testé et certifié selon les normes les plus strictes. Chaque installation est réalisée par des techniciens formés et vérifiée avant réception. Nous ne livrons que ce que nous serions fiers d'installer dans nos propres bâtiments."
              : "At Kleston, quality is not a sales pitch — it's our minimum standard. Every product we deliver has been selected, tested, and certified to the strictest standards. Every installation is performed by trained technicians and verified before handover. We only deliver what we would be proud to install in our own buildings."}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1E1E1E] py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <h2 className="font-condensed font-bold text-[clamp(40px,6vw,72px)] text-white uppercase leading-[1.0] tracking-[0em]">
            {isFr ? 'Travaillons ensemble.' : "Let's work together."}
          </h2>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-[#FF5C00] text-white hover:bg-[#E05200] font-condensed font-bold text-sm tracking-[0.15em] uppercase px-10 py-4 transition-colors shrink-0"
          >
            {isFr ? 'Nous contacter' : 'Contact us'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  )
}
