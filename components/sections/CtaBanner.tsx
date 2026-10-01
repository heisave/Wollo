import { ButtonLink } from "@/components/ui/Button";
import { cta } from "@/lib/content";

/** Rounded periwinkle banner with heading, outlined button and artwork. */
export function CtaBanner() {
  return (
    <section id="contact" className="pb-14">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[40px] bg-periwinkle px-8 py-16 md:px-14 md:py-20">
          <div className="relative z-10 max-w-md md:max-w-lg">
            <h2 className="text-center font-display text-4xl leading-[1.15] font-medium tracking-tight text-paper md:text-5xl">
              {cta.title.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>

            <div className="mt-9 flex justify-center">
              <ButtonLink
                href="#signup"
                shape="soft"
                variant="outline"
                className="border-paper/50 text-paper hover:border-paper hover:bg-paper hover:text-periwinkle"
              >
                {cta.button}
              </ButtonLink>
            </div>
          </div>

          {/* Megaphone artwork */}
          <MegaphoneArt className="pointer-events-none absolute -right-10 -bottom-16 w-[340px] md:right-6 md:-bottom-24 md:w-[440px]" />
        </div>
      </div>
    </section>
  );
}

/** Stylised megaphone made of ribbons, built from simple shapes. */
function MegaphoneArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 440 380" className={className} aria-hidden>
      <defs>
        <linearGradient id="mega-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9aa7f7" />
          <stop offset="100%" stopColor="#5a66ef" />
        </linearGradient>
        <linearGradient id="mega-ribbon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6449a" />
          <stop offset="100%" stopColor="#7c2bf5" />
        </linearGradient>
      </defs>

      {/* backdrop blobs */}
      <circle cx="200" cy="120" r="70" fill="#5a2af0" />
      <circle cx="120" cy="66" r="15" fill="#ffd23f" />

      {/* horn */}
      <g transform="rotate(-18 240 200)">
        <path
          d="M170 150 L330 96 L330 300 L170 246 Z"
          fill="url(#mega-body)"
        />
        <rect x="130" y="150" width="60" height="96" rx="16" fill="#8b95f6" />
      </g>

      {/* ribbons */}
      <path
        d="M70 320 C 90 210 180 150 270 180 C 330 200 340 270 296 300"
        fill="none"
        stroke="url(#mega-ribbon)"
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d="M110 356 C 150 300 240 280 300 320"
        fill="none"
        stroke="#5a2af0"
        strokeWidth="26"
        strokeLinecap="round"
      />

      {/* accents */}
      <path d="M356 60 l40 14 l-30 26 z" fill="#ff7a2e" />
      <rect x="300" y="212" width="34" height="26" rx="6" fill="#ffd23f" transform="rotate(-16 317 225)" />
      <path d="M320 176 l30-8" stroke="#7c2bf5" strokeWidth="7" strokeLinecap="round" />
      <path
        d="M330 330 a46 46 0 0 0 46-46"
        fill="none"
        stroke="#d7d9fb"
        strokeWidth="3"
      />
      {/* pencil */}
      <g transform="rotate(34 360 70)">
        <rect x="344" y="10" width="24" height="110" rx="6" fill="#e9e5ff" />
        <path d="M344 120 h24 l-12 26 z" fill="#f6d9b0" />
        <path d="M350 134 h12 l-6 12 z" fill="#241046" />
      </g>
    </svg>
  );
}
