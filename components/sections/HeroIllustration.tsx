"use client";

import { useEffect, useState } from "react";

/**
 * Purple hero artwork panel.
 *
 * Starts slightly tilted with gold/rose cards peeking out behind it
 * (as in the shot) and straightens + expands to full bleed as the
 * visitor scrolls down.
 */
export function HeroIllustration() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    /** 0 while the hero is at rest, 1 once scrolled one viewport in. */
    const update = () => {
      const span = window.innerHeight * 0.7;
      setProgress(Math.min(1, Math.max(0, window.scrollY / span)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  /** How "settled" the card is (1 = straight, full bleed). */
  const settled = 1 - progress;

  return (
    <div id="hero-illustration" className="relative">
      <div
        className="relative"
        style={{
          marginInline: `${settled * 7.5}%`,
          transform: `rotate(${-4 * settled}deg)`,
          transition: "margin 80ms linear, transform 80ms linear",
        }}
      >
        {/* Gold and rose cards stacked behind the main panel */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[44px] bg-gold"
          style={{
            transform: `rotate(${-1.6 * settled}deg) translate(${-16 * settled}px, ${-18 * settled}px)`,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 rounded-[42px] bg-rose"
          style={{
            transform: `rotate(${-0.8 * settled}deg) translate(${-8 * settled}px, ${-9 * settled}px)`,
          }}
        />

        {/* Main violet artwork */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-[40px] bg-[#4513d0] md:aspect-[16/8]">
          <Artwork />
        </div>
      </div>
    </div>
  );
}

/* — Hand-built illustration (sphere, rings, heart, chat bubble) ———— */

function Artwork() {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <radialGradient id="sphere" cx="35%" cy="28%" r="80%">
          <stop offset="0%" stopColor="#f5ecd8" />
          <stop offset="45%" stopColor="#8f93d8" />
          <stop offset="100%" stopColor="#3d2a9e" />
        </radialGradient>
        <linearGradient id="heart" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8fd0" />
          <stop offset="60%" stopColor="#ff4f8f" />
          <stop offset="100%" stopColor="#ff5a2e" />
        </linearGradient>
        <linearGradient id="pencil" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd23f" />
          <stop offset="100%" stopColor="#ff7a2e" />
        </linearGradient>
      </defs>

      {/* soft light beams */}
      <path d="M0 470 L1200 300 L1200 600 L0 600 Z" fill="#3a0fbe" opacity="0.55" />

      {/* concentric rings around the sphere */}
      <g fill="none" stroke="#e9d5ff" strokeOpacity="0.5">
        <circle cx="380" cy="250" r="185" strokeDasharray="2 10" strokeWidth="2" />
        <circle cx="380" cy="250" r="150" strokeWidth="1.5" />
        <circle cx="380" cy="250" r="118" strokeOpacity="0.3" strokeWidth="1.5" />
      </g>

      {/* gradient sphere */}
      <circle cx="365" cy="235" r="112" fill="url(#sphere)" />
      <circle cx="418" cy="150" r="13" fill="#2c0f7a" />
      <g fill="#ffffff" opacity="0.35">
        <circle cx="430" cy="255" r="3" />
        <circle cx="452" cy="268" r="3" />
        <circle cx="474" cy="281" r="3" />
        <circle cx="441" cy="290" r="3" />
        <circle cx="463" cy="303" r="3" />
        <circle cx="485" cy="316" r="3" />
      </g>

      {/* pencil */}
      <g transform="rotate(38 700 320)">
        <rect x="660" y="150" width="34" height="300" rx="8" fill="url(#pencil)" />
        <path d="M660 450 L694 450 L677 496 Z" fill="#f6efe4" />
        <path d="M668 478 L686 478 L677 496 Z" fill="#241046" />
        <rect x="660" y="150" width="34" height="44" rx="8" fill="#3d1f9e" />
      </g>

      {/* layered heart */}
      <g transform="translate(806 148)">
        <path
          d="M140 268 C 60 210 8 158 8 96 C 8 44 46 12 92 12 C 116 12 136 24 148 44 C 160 24 180 12 204 12 C 250 12 288 44 288 96 C 288 158 236 210 140 268 Z"
          fill="#ff6a2e"
          transform="translate(-16 26)"
        />
        <path
          d="M140 252 C 60 194 8 142 8 80 C 8 28 46 -4 92 -4 C 116 -4 136 8 148 28 C 160 8 180 -4 204 -4 C 250 -4 288 28 288 80 C 288 142 236 194 140 252 Z"
          fill="url(#heart)"
        />
        <path
          d="M140 214 C 84 172 46 134 46 92 C 46 60 70 40 98 40 C 118 40 132 52 140 68 C 148 52 162 40 182 40 C 210 40 234 60 234 92 C 234 134 196 172 140 214 Z"
          fill="#3a1080"
        />
      </g>

      {/* chat bubble */}
      <g transform="translate(148 402)">
        <rect width="190" height="120" rx="34" fill="#2d0f8f" />
        <path d="M54 116 L44 158 L96 118 Z" fill="#2d0f8f" />
        <g fill="none" stroke="#ff7bc5" strokeWidth="4">
          <circle cx="66" cy="60" r="13" />
          <circle cx="112" cy="60" r="13" />
        </g>
        <circle cx="158" cy="60" r="13" fill="none" stroke="#ff7bc5" strokeWidth="4" />
      </g>

      {/* floating accents */}
      <g fill="#ffd23f">
        <circle cx="1070" cy="96" r="16" />
        <circle cx="620" cy="520" r="9" />
      </g>
      <g stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2" fill="none">
        <path d="M60 120 C 140 60 220 60 280 96" />
        <path d="M980 470 C 1040 430 1110 430 1160 466" />
      </g>
      <g fill="#ffffff" opacity="0.8">
        <circle cx="96" cy="322" r="4" />
        <circle cx="1132" cy="330" r="4" />
        <circle cx="740" cy="86" r="3" />
      </g>
    </svg>
  );
}
