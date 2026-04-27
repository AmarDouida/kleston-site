import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')

  const produits = [
    {
      href: `/${locale}/produits/mains-courantes`,
      label: t('p1'),
    },
    {
      href: `/${locale}/produits/main-courante-protection-murale`,
      label: t('p2'),
    },
    {
      href: `/${locale}/produits/protection-murale-antichoc`,
      label: t('p3'),
    },
    {
      href: `/${locale}/produits/protection-angle`,
      label: t('p4'),
    },
  ]

  const navLinks = [
    { href: `/${locale}/produits`, label: tNav('produits') },
    { href: `/${locale}/services`, label: tNav('services') },
    { href: `/${locale}/blog`, label: tNav('blog') },
    {
      href: `/${locale}/${locale === 'fr' ? 'a-propos' : 'about'}`,
      label: tNav('about'),
    },
    { href: `/${locale}/contact`, label: tNav('contact') },
  ]

  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 992 896" className="w-8 h-7 shrink-0">
                <polygon
                  points="463 507 735 507 735 651 378 651 213 486 153 546 153 743 0 896 0 0 153 0 153 319 472 0 992 0 992 153 556 153 332.5 376.5 463 507"
                  fill="#FF5C00"
                />
                <path
                  d="M992,743l-153,153l-713,0l153,-153l560,0l0,-336l-560,0l153,-153l560,0l0,489Z"
                  fill="#B0B2B5"
                />
              </svg>
              <span className="font-condensed font-black text-xl tracking-[0.1em] uppercase">
                KLESTON
              </span>
            </Link>
            <p className="font-body text-sm text-white/50 italic">{t('tagline')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-condensed font-bold text-xs tracking-[0.25em] uppercase text-[#FF5C00] mb-5">
              {t('nav_title')}
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produits */}
          <div>
            <h3 className="font-condensed font-bold text-xs tracking-[0.25em] uppercase text-[#FF5C00] mb-5">
              {t('produits_title')}
            </h3>
            <ul className="flex flex-col gap-3">
              {produits.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-condensed font-bold text-xs tracking-[0.25em] uppercase text-[#FF5C00] mb-5">
              {t('contact_title')}
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:5145508823"
                  className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone size={14} className="shrink-0 text-[#FF5C00]" />
                  514 550 8823
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@kleston.ca"
                  className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail size={14} className="shrink-0 text-[#FF5C00]" />
                  contact@kleston.ca
                </a>
              </li>
              <li className="flex items-center gap-3 font-body text-sm text-white/60">
                <MapPin size={14} className="shrink-0 text-[#FF5C00]" />
                Province de Québec
              </li>
              <li className="flex items-center gap-3 font-body text-sm text-white/60">
                <Clock size={14} className="shrink-0 text-[#FF5C00]" />
                Lun–Ven, 8h–17h
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">{t('copyright')}</p>
          <Link
            href={`/${locale}/${locale === 'fr' ? 'politique-confidentialite' : 'privacy-policy'}`}
            className="font-body text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            {t('privacy')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
