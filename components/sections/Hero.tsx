import { ButtonLink } from "@/components/ui/Button";
import { HeroIllustration } from "@/components/sections/HeroIllustration";
import { hero } from "@/lib/content";

/** Centered headline, two calls-to-action, then the artwork panel. */
export function Hero() {
  return (
    <section className="pt-14 pb-10 md:pt-20">
      <div className="container-page text-center">
        <h1 className="mx-auto max-w-4xl font-display text-[32px] leading-[1.15] font-medium tracking-tight text-ink sm:text-4xl md:text-6xl">
          {hero.title[0]}
          <br />
          {hero.title[1]}
        </h1>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="#signup" shape="soft" className="bg-violet">
            {hero.primaryCta}
          </ButtonLink>
          <ButtonLink href="#signup" variant="outline" shape="soft">
            {hero.secondaryCta}
          </ButtonLink>
        </div>
      </div>

      {/* Purple artwork — full bleed of the page card, straightens on scroll */}
      <div className="mt-14 md:mt-20">
        <HeroIllustration />
      </div>
    </section>
  );
}
