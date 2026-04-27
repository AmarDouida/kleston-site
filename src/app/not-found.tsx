import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <html lang="fr">
      <body className="bg-[#1E1E1E] min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          {/* KS watermark */}
          <div className="relative mb-12">
            <span className="font-condensed font-black text-[180px] md:text-[240px] text-white/5 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-0.5 bg-[#FF5C00]" />
            </div>
          </div>

          <h1 className="font-condensed font-black text-4xl md:text-5xl text-white uppercase leading-tight tracking-tight mb-4">
            Page introuvable
          </h1>
          <p className="font-body text-[#B0B2B5] text-base mb-10">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
            Retournez à l&apos;accueil pour continuer.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/fr"
              className="group inline-flex items-center gap-2 bg-[#FF5C00] hover:bg-[#E05200] text-white font-condensed font-bold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-colors duration-200"
            >
              Retour à l&apos;accueil
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/fr/contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-condensed font-bold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-colors duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
