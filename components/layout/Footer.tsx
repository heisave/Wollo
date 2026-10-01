import { Facebook, Instagram, Linkedin } from "lucide-react";

import { navLinks } from "@/lib/content";

/** Single-row footer: navigation links on the left, socials on the right. */
export function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <div className="container-page flex flex-col items-center justify-between gap-6 md:flex-row">
        <nav className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:justify-start">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink transition-colors hover:text-violet"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a href="#facebook" aria-label="Facebook" className="text-ink hover:text-violet">
            <Facebook className="size-5" />
          </a>
          <a href="#x" aria-label="X" className="text-ink hover:text-violet">
            <XIcon />
          </a>
          <a href="#instagram" aria-label="Instagram" className="text-ink hover:text-violet">
            <Instagram className="size-5" />
          </a>
          <a href="#linkedin" aria-label="LinkedIn" className="text-ink hover:text-violet">
            <Linkedin className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/** The X logo — lucide doesn't ship a mark for it. */
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
