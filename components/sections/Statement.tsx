import { statement } from "@/lib/content";

/**
 * Large centered statement with two inline 3D-style icons
 * (a heart and a gradient sphere) sitting between the words.
 */
export function Statement() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <p className="mx-auto max-w-5xl text-center font-display text-3xl leading-[1.3] font-normal tracking-tight text-ink md:text-5xl md:leading-[1.25]">
          {statement.map((part, i) => {
            if (part === "__HEART__") return <HeartEmoji key={i} />;
            if (part === "__SPHERE__") return <SphereEmoji key={i} />;
            return (
              <span key={i}>
                {i > 0 && !statement[i - 1].startsWith("__") ? " " : ""}
                {part}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}

/* Inline icons — sized to roughly one line-height each. */

function HeartEmoji() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="mx-2 inline-block h-[0.95em] w-[0.95em] align-[-0.14em]"
      aria-hidden
    >
      <defs>
        <linearGradient id="se-heart" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8fd0" />
          <stop offset="65%" stopColor="#ff4f8f" />
          <stop offset="100%" stopColor="#ff7a2e" />
        </linearGradient>
      </defs>
      <path
        d="M32 56 C 12 42 4 32 4 21 C 4 10 12 4 21 4 C 26 4 30 7 32 11 C 34 7 38 4 43 4 C 52 4 60 10 60 21 C 60 32 52 42 32 56 Z"
        fill="url(#se-heart)"
      />
      <path
        d="M32 46 C 20 37 15 30 15 23 C 15 16 19 12 25 12 C 29 12 31 15 32 18 C 33 15 35 12 39 12 C 45 12 49 16 49 23 C 49 30 44 37 32 46 Z"
        fill="#3a1080"
      />
    </svg>
  );
}

function SphereEmoji() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="mx-2 inline-block h-[0.95em] w-[0.95em] align-[-0.14em]"
      aria-hidden
    >
      <defs>
        <radialGradient id="se-sphere" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#f5ecd8" />
          <stop offset="45%" stopColor="#9b7be0" />
          <stop offset="100%" stopColor="#3d2a9e" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="28" fill="url(#se-sphere)" />
      <path
        d="M12 40 C 22 46 42 46 52 38"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
