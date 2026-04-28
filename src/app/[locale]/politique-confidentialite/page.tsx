import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isFr = locale === 'fr'
  return {
    title: isFr
      ? 'Politique de confidentialité | Kleston'
      : 'Privacy Policy | Kleston',
    alternates: {
      canonical: `https://kleston.ca/${locale}/${locale === 'fr' ? 'politique-confidentialite' : 'privacy-policy'}`,
      languages: {
        'fr-CA': 'https://kleston.ca/fr/politique-confidentialite',
        'en-CA': 'https://kleston.ca/en/privacy-policy',
      },
    },
    robots: { index: false },
  }
}

export default async function PolitiqueConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations('privacy')
  const isFr = locale === 'fr'

  const sections = isFr
    ? [
        {
          title: '1. Collecte des informations',
          content:
            "Kleston collecte les informations personnelles que vous nous fournissez volontairement via notre formulaire de contact (nom, courriel, numéro de téléphone, nom d'entreprise). Nous ne collectons aucune information personnelle sans votre consentement explicite.",
        },
        {
          title: '2. Utilisation des informations',
          content:
            'Les informations collectées sont utilisées uniquement pour répondre à vos demandes de renseignements ou de devis, pour vous informer de nos produits et services lorsque vous y avez consenti, et pour améliorer notre service client.',
        },
        {
          title: '3. Protection des données',
          content:
            "Kleston s'engage à protéger vos informations personnelles. Nous utilisons des mesures de sécurité techniques et organisationnelles appropriées pour prévenir tout accès non autorisé, divulgation ou destruction de vos données.",
        },
        {
          title: '4. Partage des informations',
          content:
            "Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers sans votre consentement, sauf lorsque requis par la loi ou pour fournir un service que vous avez demandé.",
        },
        {
          title: '5. Cookies',
          content:
            'Notre site utilise des cookies analytiques (Vercel Analytics) pour comprendre comment les visiteurs interagissent avec le site. Ces données sont anonymisées et ne permettent pas de vous identifier personnellement. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.',
        },
        {
          title: '6. Vos droits',
          content:
            "Conformément à la Loi 25 (Loi modernisant des dispositions législatives en matière de protection des renseignements personnels), vous avez le droit d'accéder à vos informations personnelles, de les corriger ou de demander leur suppression. Pour exercer ces droits, contactez-nous à info@kleston.ca.",
        },
        {
          title: '7. Modifications',
          content:
            'Kleston se réserve le droit de modifier cette politique à tout moment. Les changements sont publiés sur cette page avec une date de mise à jour.',
        },
      ]
    : [
        {
          title: '1. Information Collection',
          content:
            'Kleston collects personal information you voluntarily provide through our contact form (name, email, phone number, company name). We do not collect personal information without your explicit consent.',
        },
        {
          title: '2. Use of Information',
          content:
            'Collected information is used solely to respond to your inquiries or quote requests, to inform you of our products and services when you have consented, and to improve our customer service.',
        },
        {
          title: '3. Data Protection',
          content:
            'Kleston is committed to protecting your personal information. We use appropriate technical and organizational security measures to prevent unauthorized access, disclosure, or destruction of your data.',
        },
        {
          title: '4. Information Sharing',
          content:
            'We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or to provide a service you have requested.',
        },
        {
          title: '5. Cookies',
          content:
            'Our site uses analytics cookies (Vercel Analytics) to understand how visitors interact with the site. This data is anonymized and cannot be used to personally identify you. You can disable cookies in your browser settings.',
        },
        {
          title: '6. Your Rights',
          content:
            'In accordance with applicable privacy legislation, you have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us at info@kleston.ca.',
        },
        {
          title: '7. Changes',
          content:
            'Kleston reserves the right to modify this policy at any time. Changes are published on this page with an updated date.',
        },
      ]

  return (
    <main className="min-h-screen bg-[#F5F1EA]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <h1 className="font-condensed font-black text-4xl md:text-5xl uppercase tracking-tight text-[#1A1A1A] mb-3">
          {t('title')}
        </h1>
        <p className="font-body text-sm text-[#7A7A7A] mb-16">
          {t('last_updated')}
        </p>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-condensed font-bold text-xl uppercase tracking-wide text-[#1A1A1A] mb-4">
                {section.title}
              </h2>
              <p className="font-body text-[#4A4A4A] text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
