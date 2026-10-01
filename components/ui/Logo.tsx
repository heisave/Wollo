/**
 * "wollo" wordmark — bold rounded lowercase with a bar through the
 * first "o" and a small swoosh underneath, as in the original shot.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-block font-display text-[28px] font-extrabold leading-none tracking-tight ${className}`}
      aria-label="wollo"
    >
      <span aria-hidden>w</span>
      <span aria-hidden className="relative inline-block">
        o
        {/* horizontal bar through the first "o" */}
        <span className="absolute top-1/2 left-[1px] h-[2.5px] w-[calc(100%-2px)] -translate-y-1/2 rounded-full bg-current" />
      </span>
      <span aria-hidden>llo</span>
      {/* swoosh under the first "o" */}
      <svg
        aria-hidden
        viewBox="0 0 40 12"
        className="absolute top-[62%] left-[16px] h-[11px] w-[34px] overflow-visible"
      >
        <path
          d="M2 2 C 14 11, 30 11, 38 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
