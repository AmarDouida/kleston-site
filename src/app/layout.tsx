import type { Metadata } from 'next'
import { Barlow_Condensed, Barlow } from 'next/font/google'
import { headers } from 'next/headers'
import '@/styles/globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kleston.ca'),
  title: {
    template: '%s | Kleston',
    default: 'Kleston — Protection murale et mains courantes au Québec',
  },
  description:
    'Spécialiste québécois en systèmes de protection murale, mains courantes et sécurité architecturale certifiés. Fourniture, installation et entretien partout au Québec.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    siteName: 'Kleston',
    type: 'website',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const locale = headersList.get('x-locale') ?? 'fr'

  return (
    <html
      lang={locale}
      className={`${barlowCondensed.variable} ${barlow.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
