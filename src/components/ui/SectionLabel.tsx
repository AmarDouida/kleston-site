interface SectionLabelProps {
  label: string
  light?: boolean
}

export function SectionLabel({ label, light = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="block w-8 h-px bg-[#FF5C00]" />
      <span
        className={`font-condensed font-bold text-xs tracking-[0.2em] uppercase ${
          light ? 'text-[#FF5C00]' : 'text-[#4A4A4A]'
        }`}
      >
        {label}
      </span>
    </div>
  )
}
