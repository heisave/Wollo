import { hashtagCard, hashtags, hashtagRotations, performance } from "@/lib/content";

/**
 * "Advanced Analytics and Reporting" — two dashboard-style cards.
 * The section overlaps the purple illustration with rounded top corners.
 */
export function Analytics() {
  return (
    <section
      id="features"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-paper pt-20 pb-24"
    >
      <div className="container-page">
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl leading-[1.15] font-medium tracking-tight text-ink md:text-5xl">
          Advanced Analytics
          <br />
          and Reporting
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <HashtagCard />
          <PerformanceCard />
        </div>
      </div>
    </section>
  );
}

/* — Left card: scattered hashtag pills ———————————————————— */

function HashtagCard() {
  return (
    <article className="rounded-[28px] bg-surface p-7 md:p-9">
      <h3 className="font-display text-2xl font-medium text-ink">
        {hashtagCard.title}
      </h3>

      <div className="relative mt-6 flex h-[320px] flex-wrap content-center items-center justify-center gap-x-3 gap-y-2 rounded-[22px] bg-paper px-6">
        {hashtags.map((tag, i) => (
          <span
            key={tag}
            className="rounded-full border border-ink/30 px-4 py-2.5 text-[15px] text-ink"
            style={{ transform: `rotate(${hashtagRotations[i]}deg)` }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Legend bar */}
      <div className="mt-5 flex h-1.5 gap-1.5">
        <span className="flex-[3] rounded-full bg-violet" />
        <span className="flex-[2] rounded-full bg-[#c3b2f7]" />
        <span className="flex-[2] rounded-full bg-[#f9b9d8]" />
        <span className="flex-[3] rounded-full bg-[#f6ecc0]" />
      </div>
    </article>
  );
}

/* — Right card: stat tiles + line chart ——————————————————— */

function PerformanceCard() {
  return (
    <article className="rounded-[28px] bg-surface p-7 md:p-9">
      <h3 className="font-display text-2xl font-medium text-ink">
        {performance.title}
      </h3>

      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        {/* Stat tiles */}
        <div className="flex w-full flex-row gap-3 md:w-40 md:flex-col">
          <StatTile
            className="bg-amber text-ink"
            label={performance.engagement.label}
            value={performance.engagement.value}
          />
          <StatTile
            className="bg-rose text-paper"
            label={performance.followers.label}
            value={performance.followers.value}
          />
        </div>

        {/* Range filter + chart */}
        <div className="min-w-0 flex-1">
          <div className="inline-flex max-w-full flex-wrap items-center gap-0.5 rounded-full border border-ink/15 bg-paper px-1.5 py-1.5">
            {performance.ranges.map((range) => (
              <span
                key={range}
                className={`rounded-full px-2.5 py-1.5 text-xs whitespace-nowrap ${
                  range === performance.activeRange
                    ? "bg-ink text-paper"
                    : "text-ink/80"
                }`}
              >
                {range}
              </span>
            ))}
          </div>

          <LineChart />
        </div>
      </div>
    </article>
  );
}

function StatTile({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className: string;
}) {
  return (
    <div className={`flex-1 rounded-2xl px-4 py-3.5 md:flex-none ${className}`}>
      <p className="text-xs opacity-80">{label}</p>
      <p className="mt-4 font-display text-3xl font-medium md:text-4xl">
        {value}
      </p>
    </div>
  );
}

/** Static SVG line chart with dashed grid and two black callouts. */
function LineChart() {
  return (
    <div className="relative mt-6 h-44">
      <svg
        viewBox="0 0 440 176"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden
      >
        {/* dashed grid */}
        <g stroke="#d9d9de" strokeWidth="1" strokeDasharray="3 5">
          <line x1="0" y1="44" x2="440" y2="44" />
          <line x1="0" y1="96" x2="440" y2="96" />
          <line x1="0" y1="148" x2="440" y2="148" />
        </g>

        {/* drop lines for the callouts */}
        <g stroke="#f6449a" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.7">
          <line x1="84" y1="66" x2="84" y2="176" />
          <line x1="336" y1="98" x2="336" y2="176" />
        </g>

        {/* the line */}
        <polyline
          points="0,150 84,66 180,110 260,146 336,98 440,8"
          fill="none"
          stroke="#f6449a"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* highlighted points */}
        <g fill="#f6449a">
          <circle cx="84" cy="66" r="7" />
          <circle cx="336" cy="98" r="7" />
        </g>
      </svg>

      {/* Black callout pills */}
      {performance.callouts.map((callout) => (
        <span
          key={callout.label}
          className="absolute rounded-full bg-ink px-3 py-1 text-xs text-paper"
          style={{ left: callout.x, top: callout.y }}
        >
          {callout.label}
        </span>
      ))}
    </div>
  );
}
