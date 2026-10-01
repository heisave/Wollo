import {
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  Youtube,
} from "lucide-react";

/**
 * Oversized "Integrations" word with a floating envelope and app tile,
 * followed by the networks Wollo plugs into.
 */
export function Integrations() {
  return (
    <section
      id="integrations"
      className="relative scroll-mt-24 overflow-hidden py-24 md:py-32"
    >
      <div className="container-page relative">
        {/* Floating envelope — sits above the heading on phones, beside it ≥sm */}
        <EnvelopeIcon className="absolute -top-14 left-0 w-14 -rotate-12 sm:top-2 sm:left-4 sm:w-20 md:top-0 md:left-24 md:w-28" />

        {/* Floating yellow app tile (sits behind the heading; ≥sm only) */}
        <div
          aria-hidden
          className="absolute top-1/2 right-2 hidden w-40 -translate-y-1/2 overflow-hidden rounded-[22px] bg-gold sm:block md:right-24 md:w-56"
        >
          <span className="-ml-3 block font-display text-6xl font-extrabold text-paper md:text-8xl">
            wollo
          </span>
        </div>

        <h2 className="relative text-center font-display text-5xl font-light tracking-tight text-ink sm:text-6xl md:text-8xl lg:text-9xl">
          Integrations
        </h2>

        {/* Platform chips */}
        <ul className="relative mt-16 flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: Facebook, label: "Facebook" },
            { icon: Instagram, label: "Instagram" },
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Music2, label: "TikTok" },
            { icon: Youtube, label: "YouTube" },
          ].map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper px-5 py-2.5 text-sm text-ink"
            >
              <Icon className="size-4 text-ink" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Stylised 3D-ish envelope drawn with simple shapes. */
function EnvelopeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 96" className={className} aria-hidden>
      <defs>
        <linearGradient id="env" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c2bf5" />
          <stop offset="100%" stopColor="#3d0fb8" />
        </linearGradient>
      </defs>
      <rect x="8" y="20" width="100" height="68" rx="12" fill="url(#env)" />
      <path
        d="M14 30 L60 62 L106 30"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="60" cy="52" r="7" fill="#ffd23f" />
      <rect x="88" y="8" width="24" height="24" rx="7" fill="#2b1a8f" />
      <path d="M95 14 h10 v12 h-10 z" fill="none" stroke="#8b7cf6" strokeWidth="2.5" />
    </svg>
  );
}
