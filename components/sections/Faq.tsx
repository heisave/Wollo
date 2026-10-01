"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqs } from "@/lib/content";

/** Expandable FAQ list — one row open at a time. */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container-page">
        <h2 className="mx-auto max-w-xl text-center font-display text-4xl leading-[1.15] font-medium tracking-tight text-ink md:text-5xl">
          Frequently Asked
          <br />
          Questions
        </h2>

        <div className="mx-auto mt-14 max-w-3xl">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="border-b border-ink/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base text-ink">{faq.question}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-ink/70 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>

                {isOpen && (
                  <p className="pb-6 text-sm leading-relaxed text-ink/70">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
