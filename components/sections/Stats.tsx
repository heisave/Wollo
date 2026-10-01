import { stats } from "@/lib/content";

/** Sticker color per row — orange, pink, violet (as in the shot). */
const stickerColors = [
  "bg-orange",
  "bg-rose",
  "bg-violet",
] as const;

/**
 * Three statistic rows: illustration tile → huge number with a
 * rotated sticker → supporting paragraph, separated by hairlines.
 */
export function Stats() {
  return (
    <section id="about" className="scroll-mt-24 pb-8">
      <div className="container-page">
        {stats.map((stat, i) => (
          <article
            key={stat.value}
            className="grid items-center gap-6 border-b border-ink/10 py-10 sm:gap-8 lg:grid-cols-[236px_1fr_260px] lg:gap-12"
          >
            <StatTile index={i} />

            <div className="relative">
              <span
                className={`absolute -top-3 left-6 z-10 rounded-full px-4 py-2 text-sm text-paper md:left-10 ${stickerColors[i]}`}
                style={{ transform: "rotate(-7deg)" }}
              >
                {stat.sticker}
              </span>
              <p className="font-display text-7xl font-light tracking-tight text-ink sm:text-8xl lg:text-[110px] lg:leading-none xl:text-[150px]">
                {stat.value}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-ink/80 lg:text-right">
              {stat.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/** Small rounded-square artwork for each statistic. */
function StatTile({ index }: { index: number }) {
  return (
    <div className="h-[168px] w-[168px] overflow-hidden rounded-[26px] md:h-[200px] md:w-[200px]">
      <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={`tile-${index}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={tileGradients[index][0]} />
            <stop offset="100%" stopColor={tileGradients[index][1]} />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill={`url(#tile-${index})`} />
        {index === 0 && <EnvelopeScene />}
        {index === 1 && <RibbonScene />}
        {index === 2 && <ChatScene />}
      </svg>
    </div>
  );
}

const tileGradients = [
  ["#6d28f5", "#3d0fb8"],
  ["#8b8ff5", "#6a5df0"],
  ["#4b1fd6", "#2a0b8f"],
] as const;

/* — tiny scenes drawn with plain shapes ——————————————————— */

function EnvelopeScene() {
  return (
    <g>
      <circle cx="150" cy="70" r="20" fill="#8ea0f2" />
      <path d="M20 140 C 70 118 130 112 180 128" stroke="#c9b8ff" strokeWidth="3" fill="none" />
      <g transform="rotate(-14 90 130)">
        <rect x="52" y="104" width="84" height="58" rx="10" fill="#f97316" />
        <path d="M58 112 L94 138 L130 112" stroke="#ffd9b0" strokeWidth="4" fill="none" />
        <path d="M100 96 c-12-9-24-2-24 9 c0 12 16 20 24 27 c8-7 24-15 24-27 c0-11-12-18-24-9 z" fill="#fff7ed" />
      </g>
      <path d="M40 60 c8-10 22-6 20 6" stroke="#ff7bc5" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="60" cy="52" r="5" fill="#ff7bc5" />
    </g>
  );
}

function RibbonScene() {
  return (
    <g fill="none" strokeLinecap="round">
      <path d="M40 150 C 30 90 80 40 130 60 C 165 74 168 118 138 132 C 112 144 88 122 100 98" stroke="#6d28f5" strokeWidth="18" />
      <path d="M60 158 C 60 118 96 96 130 104" stroke="#f6449a" strokeWidth="12" />
      <rect x="128" y="52" width="34" height="26" rx="5" fill="#e9e5ff" stroke="none" />
      <path d="M136 74 l16-14" stroke="#f97316" strokeWidth="5" />
      <path d="M96 120 l18-6" stroke="#ffd23f" strokeWidth="6" />
      <path d="M150 140 a34 34 0 0 0 34-34" stroke="#c9b8ff" strokeWidth="3" />
    </g>
  );
}

function ChatScene() {
  return (
    <g>
      <rect x="24" y="40" width="150" height="112" rx="26" fill="#5a2af0" opacity="0.6" />
      <g transform="rotate(-10 92 104)">
        <rect x="54" y="78" width="76" height="52" rx="16" fill="#f6449a" />
        <path d="M70 128 l-6 22 l24-18 z" fill="#f6449a" />
        <circle cx="78" cy="102" r="6" fill="#2a0b8f" />
        <circle cx="106" cy="102" r="6" fill="#2a0b8f" />
      </g>
      <circle cx="152" cy="58" r="18" fill="#8ea0f2" />
      <rect x="120" y="30" width="44" height="30" rx="7" fill="#e9e5ff" transform="rotate(12 142 45)" />
      <g fill="#ffffff" opacity="0.85">
        <circle cx="40" cy="170" r="4" />
        <circle cx="62" cy="170" r="4" />
        <circle cx="84" cy="170" r="4" />
      </g>
    </g>
  );
}
