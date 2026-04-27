import { useTranslations } from 'next-intl'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isFr = locale === 'fr'
  return {
    title: isFr
      ? 'Kleston — Protection murale et mains courantes au Québec'
      : 'Kleston — Wall Protection and Handrails in Quebec',
    description: isFr
      ? 'Spécialiste québécois en systèmes de protection murale, mains courantes et sécurité architecturale certifiés CE, ISO 9001. Fourniture, installation et entretien partout au Québec.'
      : 'Quebec specialist in CE and ISO 9001 certified wall protection systems, handrails and architectural safety. Supply, installation and maintenance across Quebec.',
    alternates: {
      canonical: `https://kleston.ca/${locale}`,
      languages: {
        'fr-CA': 'https://kleston.ca/fr',
        'en-CA': 'https://kleston.ca/en',
      },
    },
    openGraph: {
      title: isFr
        ? 'Kleston — Votre partenaire en protection architecturale au Québec'
        : 'Kleston — Your architectural protection partner in Quebec',
      description: isFr
        ? 'La conformité livrée et installée.'
        : 'Compliance delivered and installed.',
      url: `https://kleston.ca/${locale}`,
      images: [
        {
          url: 'https://kleston.ca/images/og/kleston-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Kleston',
        },
      ],
    },
  }
}

function HomeContent() {
  const t = useTranslations('hero')
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1E1E]">
      <div className="text-center px-6">
        <svg viewBox="0 0 992 896" className="w-20 h-20 mx-auto mb-8">
          <polygon
            points="463 507 735 507 735 651 378 651 213 486 153 546 153 743 0 896 0 0 153 0 153 319 472 0 992 0 992 153 556 153 332.5 376.5 463 507"
            fill="#FF5C00"
          />
          <path
            d="M992,743l-153,153l-713,0l153,-153l560,0l0,-336l-560,0l153,-153l560,0l0,489Z"
            fill="#B0B2B5"
          />
        </svg>
        <h1 className="font-condensed font-black text-5xl md:text-7xl text-white uppercase tracking-tight mb-4">
          KLESTON
        </h1>
        <p className="font-body text-[#B0B2B5] text-lg italic">{t('slogan')}</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  return <HomeContent />
}
