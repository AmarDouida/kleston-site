import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

interface FooterProps {
  locale: string
}

export async function Footer({ locale }: FooterProps) {
  const t = await getTranslations('footer')
  const tn = await getTranslations('nav')
  const isFr = locale === 'fr'

  const navLinks = [
    { href: `/${locale}/${isFr ? 'produits' : 'products'}`, label: tn('produits') },
    { href: `/${locale}/services`, label: tn('services') },
    { href: `/${locale}/blog`, label: tn('blog') },
    { href: `/${locale}/${isFr ? 'a-propos' : 'about'}`, label: tn('about') },
    { href: `/${locale}/contact`, label: tn('contact') },
  ]

  const productLinks = [
    { href: `/${locale}/${isFr ? 'produits' : 'products'}/mains-courantes`, label: t('p1') },
    { href: `/${locale}/${isFr ? 'produits' : 'products'}/protection-murale`, label: t('p2') },
    { href: `/${locale}/${isFr ? 'produits' : 'products'}/barrieres-garde-corps`, label: t('p3') },
    { href: `/${locale}/${isFr ? 'produits' : 'products'}/accessoires-fixation`, label: t('p4') },
  ]

  const certifications = ['CE', 'ISO 9001', 'ROHS', 'VOC Free', 'Antibactérien', 'Feu B1']

  return (
    <footer className="bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1: Logo + tagline */}
        <div>
          <Link
            href={`/${locale}`}
            className="font-condensed font-bold text-2xl tracking-tight text-white uppercase"
          >
            Kleston
          </Link>
          <p className="font-body text-[#B0B2B5] text-sm mt-4 leading-relaxed">
            {t('tagline')}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="block w-8 h-px bg-[#FF5C00]" />
            <span className="font-body text-xs text-[#7A7A7A] tracking-wide">
              {isFr ? 'Montréal, Québec' : 'Montreal, Quebec'}
            </span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h3 className="font-condensed font-bold text-xs tracking-[0.2em] uppercase text-[#FF5C00] mb-6">
            {t('nav_title')}
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-[#B0B2B5] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Products */}
        <div>
          <h3 className="font-condensed font-bold text-xs tracking-[0.2em] uppercase text-[#FF5C00] mb-6">
            {t('produits_title')}
          </h3>
          <ul className="space-y-3">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-[#B0B2B5] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Certifications */}
        <div>
          <h3 className="font-condensed font-bold text-xs tracking-[0.2em] uppercase text-[#FF5C00] mb-6">
            {t('cert_title')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="font-condensed font-bold text-xs tracking-wider uppercase border border-white/20 text-[#B0B2B5] px-3 py-1.5"
              >
                {cert}
              </span>
            ))}
          </div>
          <p className="font-body text-xs text-[#7A7A7A] leading-relaxed mt-6">
            {isFr
              ? 'Importation directe. Prix compétitifs. Livraison partout au Québec.'
              : 'Direct import. Competitive pricing. Delivery across Quebec.'}
          </p>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[#7A7A7A]">{t('copyright')}</p>
          <Link
            href={`/${locale}/${isFr ? 'politique-confidentialite' : 'privacy-policy'}`}
            className="font-body text-xs text-[#7A7A7A] hover:text-[#B0B2B5] transition-colors"
          >
            {t('privacy')}
          </Link>
        </div>
      </div>

      <div className="h-1 bg-[#FF5C00]" />
    </footer>
  )
}
