"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/content";

/**
 * Sticky navigation.
 *
 * Two visual states, matching the shot:
 *  - "light": default — gray link pill, black logo & button
 *  - "dark":  while the purple hero illustration sits behind the bar —
 *             white link pill, pink logo, white button
 * plus a mobile menu that collapses the link row.
 */
export function Navbar() {
  const [overDark, setOverDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    /** Flip state when the illustration crosses the nav line. */
    const check = () => {
      const illustration = document.getElementById("hero-illustration");
      if (!illustration) return;
      const rect = illustration.getBoundingClientRect();
      setOverDark(rect.top < 70 && rect.bottom > 70);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="container-page flex h-[74px] items-center justify-between gap-6">
        {/* Logo — pink while over the illustration */}
        <Logo className={overDark ? "text-rose" : "text-ink"} />

        {/* Center links */}
        <nav
          className={`hidden items-center gap-1 rounded-full p-1 transition-colors duration-300 lg:flex ${
            overDark ? "bg-paper" : "bg-surface"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-ink transition-colors hover:bg-ink/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="#login"
            className={`text-sm transition-colors ${
              overDark ? "text-ink" : "text-ink hover:text-violet"
            }`}
          >
            Log in
          </a>
          <ButtonLink
            href="#signup"
            size="sm"
            variant={overDark ? "light" : "secondary"}
          >
            Start Free Trial
          </ButtonLink>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="rounded-full p-2 text-ink lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-ink/10 bg-paper px-5 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-2 py-3 text-sm text-ink hover:bg-surface"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex items-center gap-4">
            <a href="#login" className="text-sm text-ink">
              Log in
            </a>
            <ButtonLink href="#signup" size="sm">
              Start Free Trial
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
