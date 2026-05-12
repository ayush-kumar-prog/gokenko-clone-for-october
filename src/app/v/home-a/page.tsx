import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

interface StatCard {
  metric: string;
  label: string;
  caption: string;
}

const STATS: StatCard[] = [
  {
    metric: "2.3x",
    label: "more members",
    caption: "average lift in 6 months across boutique studios on Kenko.",
  },
  {
    metric: "47%",
    label: "lower CAC",
    caption: "vs. ads spend, by replacing paid acquisition with local SEO.",
  },
  {
    metric: "0",
    label: "hours of work",
    caption: "for studio owners — done-for-you marketing, every day.",
  },
];

export default function HomeAOutcomeFirst() {
  return (
    <>
      <SiteHeader ctaLabel="Get my audit" ctaHref="/demo/get-demo" />
      <main className="bg-mint">
        {/* Hero — massive outcome stat */}
        <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 text-center md:pt-32">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Boutique studio growth — the Kenko outcome
          </p>
          <h1 className="mx-auto max-w-5xl text-balance text-7xl leading-none tracking-tight md:text-[10rem]">
            <span className="font-light italic">+45%</span>
            <span className="ml-2 font-normal">MoM</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-700 md:text-xl">
            Organic member growth — without spending a dollar on ads, hiring a
            marketer, or learning another tool.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <Link
              href="/demo/get-demo"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-4 text-base font-medium text-white hover:bg-zinc-800 transition-colors"
            >
              Get my free growth audit
              <span aria-hidden>→</span>
            </Link>
            <p className="text-xs text-zinc-500">
              15 minutes. No commitment. Real numbers for your studio.
            </p>
          </div>
        </section>

        {/* 3 small stat cards */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {STATS.map((s) => (
              <div
                key={s.metric}
                className="rounded-2xl bg-white p-8"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-normal tracking-tight">
                    {s.metric}
                  </span>
                  <span className="text-sm text-zinc-500">{s.label}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                  {s.caption}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
