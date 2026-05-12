import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const WITHOUT: string[] = [
  "Posting on Instagram with no plan",
  "Hoping Google ranks your studio",
  "Spending $2K+ a month on Meta ads",
  "Ghosted leads and broken funnels",
  "Manually chasing trial members",
  "No idea why members churn",
];

const WITH: string[] = [
  "Done-for-you local SEO every day",
  "Top of &lsquo;studios near me&rsquo; in 90 days",
  "$0 ad spend — purely organic",
  "AI sales follow-up that books trials",
  "Automated nurture from trial to member",
  "Member health scores + retention nudges",
];

export default function HomeBComparison() {
  return (
    <>
      <SiteHeader />
      <main className="bg-mint">
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-10 text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Big brands vs. you — until now
          </p>
          <h1 className="mx-auto max-w-4xl text-balance text-5xl leading-tight tracking-tight md:text-6xl">
            <span className="font-serif italic font-light">Big brands</span>
            <span className="font-normal"> have teams. </span>
            <br className="hidden md:block" />
            <span className="font-normal">Now </span>
            <span className="font-serif italic font-light">you do too.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-700 md:text-lg">
            Here&apos;s what running a boutique studio looks like with — and
            without — Kenko.
          </p>
        </section>

        {/* Comparison */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Without */}
            <div className="rounded-3xl bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Without Kenko
              </p>
              <h2 className="mt-3 text-3xl tracking-tight md:text-4xl text-zinc-500">
                Running on coffee &amp; guesswork
              </h2>
              <ul className="mt-8 space-y-4">
                {WITHOUT.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-zinc-500"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-zinc-300 text-xs"
                    >
                      ×
                    </span>
                    <span className="text-sm leading-relaxed line-through decoration-zinc-300 md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="rounded-3xl bg-mint-soft p-8 md:p-10 ring-1 ring-mint-dark/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                With Kenko
              </p>
              <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
                <span className="font-serif italic font-light">Compounding</span>{" "}
                member growth, on autopilot
              </h2>
              <ul className="mt-8 space-y-4">
                {WITH.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-zinc-950 text-xs text-white"
                    >
                      ✓
                    </span>
                    <span
                      className="text-sm leading-relaxed text-zinc-900 md:text-base"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center gap-3">
            <Link
              href="/demo/get-demo"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-4 text-base font-medium text-white hover:bg-zinc-800 transition-colors"
            >
              See it on your studio
              <span aria-hidden>→</span>
            </Link>
            <p className="text-xs text-zinc-500">
              A 15-minute walkthrough on your own numbers — no slides.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
