export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAFAF8]">
      <div className="flex flex-col items-center gap-6">
        {/* KS logo mark */}
        <svg viewBox="0 0 992 896" className="h-12 w-auto animate-pulse" fill="#FF5C00">
          <polygon points="463 507 735 507 735 651 378 651 213 486 153 546 153 743 0 896 0 0 153 0 153 319 472 0 992 0 992 153 556 153 332.5 376.5 463 507" />
          <path d="M992,743l-153,153l-713,0l153,-153l560,0l0,-336l-560,0l153,-153l560,0l0,489Z" />
        </svg>
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-bounce [animation-delay:0ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-bounce [animation-delay:150ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  )
}
