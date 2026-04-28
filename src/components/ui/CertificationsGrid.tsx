import { ShieldCheck, Award, Leaf, Wind, Shield, Flame } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

interface CertificationsGridProps {
  isFr?: boolean
  showSection?: boolean
}

const certs = [
  {
    code: 'CE',
    Icon: ShieldCheck,
    descFr: 'Conformité aux directives européennes de sécurité et de performance produit.',
    descEn: 'Compliance with European safety and product performance directives.',
  },
  {
    code: 'ISO 9001',
    Icon: Award,
    descFr: 'Système de management de la qualité — processus maîtrisés de bout en bout.',
    descEn: 'Quality management system — controlled processes from start to finish.',
  },
  {
    code: 'ROHS',
    Icon: Leaf,
    descFr: 'Restriction des substances dangereuses — produits exempts de métaux lourds.',
    descEn: 'Restriction of hazardous substances — products free of heavy metals.',
  },
  {
    code: 'VOC Free',
    Icon: Wind,
    descFr: "Absence de composés organiques volatils — aucun gaz nocif à l'installation.",
    descEn: 'No volatile organic compounds — no harmful gases released on install.',
  },
  {
    code: 'Antibactérien',
    Icon: Shield,
    descFr: 'Certifié TÜBITAK — efficacité antibactérienne pour environnements sensibles.',
    descEn: 'TÜBITAK certified — validated antibacterial efficacy for sensitive environments.',
  },
  {
    code: 'Feu B1',
    Icon: Flame,
    descFr: 'Résistance au feu classée B1 — matériaux difficilement inflammables.',
    descEn: 'B1 fire resistance rating — materials classified as difficultly flammable.',
  },
]

export function CertificationsGrid({ isFr = true, showSection = true }: CertificationsGridProps) {
  return (
    <div>
      {showSection && (
        <div className="mb-10">
          <SectionLabel label={isFr ? 'Certifications' : 'Certifications'} />
          <h2 className="font-condensed font-bold text-[clamp(32px,4vw,48px)] uppercase tracking-[0em] text-[#1A1A1A] leading-[1.05] mt-4">
            {isFr ? 'Certifications & normes' : 'Certifications & Standards'}
          </h2>
          <p className="font-body text-[#4A4A4A] text-base mt-4 max-w-xl leading-relaxed">
            {isFr
              ? 'Chaque produit Kleston est soumis à des contrôles rigoureux. Voici les certifications qui garantissent leur qualité et leur conformité.'
              : 'Every Kleston product undergoes rigorous controls. These certifications guarantee quality and compliance.'}
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {certs.map(({ code, Icon, descFr, descEn }) => (
          <div
            key={code}
            className="bg-white border border-[#E0DBD0] p-8 flex flex-col gap-4 hover:-translate-y-0.5 hover:border-[#FF5C00] transition-all duration-200"
          >
            <Icon size={32} className="text-[#FF5C00] shrink-0" />
            <p className="font-condensed font-bold text-lg uppercase tracking-[0em] text-[#1A1A1A]">
              {code}
            </p>
            <p className="font-body text-[13px] text-[#4A4A4A] leading-relaxed">
              {isFr ? descFr : descEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
