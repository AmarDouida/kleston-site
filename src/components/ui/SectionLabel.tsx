export function SectionLabel({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-6 h-0.5 bg-[#FF5C00] shrink-0" />
      <span
        className={`font-condensed font-bold text-xs tracking-[0.25em] uppercase ${
          light ? 'text-[#FF5C00]' : 'text-[#4A4A4A]'
        }`}
      >
        {label}
      </span>
    </div>
  )
}
