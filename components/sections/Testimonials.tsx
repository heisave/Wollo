import { testimonialColumns } from "@/lib/content";

/**
 * Quote cards in three columns — the middle column is raised,
 * matching the staggered layout in the shot.
 */
export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page grid gap-6 md:grid-cols-3">
        {testimonialColumns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={`flex flex-col gap-6 ${columnIndex === 1 ? "md:-mt-8" : ""}`}
          >
            {column.map((item) => (
              <figure key={item.name} className="rounded-[24px] bg-surface p-7">
                <span
                  aria-hidden
                  className="block font-display text-5xl leading-none font-bold text-violet"
                >
                  &rdquo;
                </span>
                <blockquote className="mt-3 text-sm leading-relaxed text-ink/85">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-medium text-ink">{item.name}</p>
                  <p className="mt-1 text-[13px] text-muted">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
