import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const MEGAN_PORTRAIT =
  "https://framerusercontent.com/images/Qp5wpNCa7dOaFpmrBogz8aklwOA.webp";

const STATS = [
  {
    name: "Damien",
    studio: "Boostd · Zurich",
    result: "$51k added through referral program",
  },
  {
    name: "Zoë Sterk",
    studio: "Garage Hot Pilates · Florida",
    result: "45% MoM organic growth without ads",
  },
  {
    name: "Dawn Tucker",
    studio: "Align Yoga & Pilates · Canada",
    result: "25 5-star reviews in just one day",
  },
  {
    name: "Kelly Schur",
    studio: "Vibe Fitness · Georgia",
    result: "Ranks #1 on Google Maps",
  },
];

const PROBLEM_SOLUTIONS = [
  {
    problem: {
      title: "Your studio ranks below local competitors",
      body: "Big brand studios outrank you on every map and search result. Members searching nearby never see your studio first.",
    },
    solution: {
      title: "We fix your digital presence",
      body: "Daily done-for-you local SEO, review automation, and Google Business optimization to put your studio at the top of every nearby search.",
    },
  },
  {
    problem: {
      title: "You're guessing how marketing works",
      body: "You try Facebook ads. Then Instagram. Then Google. Without a system, you're throwing money at platforms hoping something sticks.",
    },
    solution: {
      title: "We turn marketing into a system",
      body: "A proven playbook with real-time dashboards. You always know what's working, what's not, and exactly what to do next.",
    },
  },
  {
    problem: {
      title: "You overspend on tools and services",
      body: "An SEO consultant. A web designer. An ads manager. A reviews tool. A CRM. By the time you add it all up — you're paying $5,000+ per month.",
    },
    solution: {
      title: "We replace all tools and consulting",
      body: "One flat fee. One team. One dashboard. Save $41,856 a year by replacing every tool and agency you're currently paying.",
    },
  },
];

const PPT_CARDS = [
  {
    label: "Process",
    title: "Proven playbooks built from 500+ studios",
    body: "The exact growth system used by the fastest-growing boutique studios — installed in your business in 90 days.",
  },
  {
    label: "People",
    title: "A dedicated growth coach in your corner",
    body: "Weekly reviews, monthly strategy, and quarterly planning with an experienced marketer who knows fitness studios inside-out.",
  },
  {
    label: "Tech",
    title: "AI tools that work while you sleep",
    body: "Buddy AI talks to website visitors, books trials, sends follow-ups, and recovers cancellations — 24/7 with no extra hires.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Build local leads flywheel",
    body: "Optimize Google Business, local landing pages, and citations so nearby members find you first.",
  },
  {
    n: "02",
    title: "Redesign website for conversion",
    body: "Replace your underperforming site with a conversion-tuned page tested across 500+ studios.",
  },
  {
    n: "03",
    title: "Automate sales process",
    body: "Buddy AI talks to website visitors, qualifies them, and books trial classes — 24/7 without staff.",
  },
  {
    n: "04",
    title: "Engage and retain members",
    body: "Automated nurture, win-back campaigns, and lifecycle messaging that keeps your members coming back.",
  },
  {
    n: "05",
    title: "Drive word-of-mouth",
    body: "Referral programs, review automation, and ambassador tools that turn happy members into your best marketers.",
  },
  {
    n: "06",
    title: "Real-time marketing dashboard",
    body: "Every lead, signup, and dollar tracked in one place. No spreadsheets. No guesswork. Just growth.",
  },
];

export default function AiMarketingAgencyPage() {
  return (
    <>
      <SiteHeader ctaLabel="Free Growth Audit" ctaHref="#audit" />
      <main className="bg-mint">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
            AI Marketing Agency for Fitness Studios
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl leading-tight tracking-tight md:text-6xl">
            Stop losing members to{" "}
            <span className="font-serif italic font-light">large brands</span>{" "}
            in your area
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-700 md:text-lg">
            The first AI-powered marketing agency built exclusively for
            independent fitness studios. We bring big-brand marketing power to
            your boutique studio — without the big-brand price tag.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="#audit"
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
            >
              My Free Growth Audit
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-600 md:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-zinc-950" aria-hidden>
                ✓
              </span>
              Free playbook
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-zinc-950" aria-hidden>
                ✓
              </span>
              2.3x members in 6 months
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-zinc-950" aria-hidden>
                ✓
              </span>
              90 day money-back guarantee
            </span>
          </div>
        </section>

        {/* Logo strip */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <p className="text-center text-sm text-zinc-600">
            Driving member growth for 500+ independent fitness studios
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {[
              "Boostd",
              "Garage Pilates",
              "Align Yoga",
              "Vibe Fitness",
              "Megan's Yoga",
              "Pure Lagree",
            ].map((name) => (
              <span
                key={name}
                className="text-sm font-semibold tracking-tight text-zinc-700"
              >
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* Stat marquee */}
        <section className="overflow-hidden pb-20">
          <div className="flex w-max marquee gap-4">
            {[...STATS, ...STATS, ...STATS].map((s, i) => (
              <div
                key={i}
                className="flex w-[320px] shrink-0 flex-col rounded-3xl bg-white p-5"
              >
                <span className="text-2xl" aria-hidden>
                  ↗
                </span>
                <p className="mt-3 text-base font-medium text-zinc-950">
                  {s.result}
                </p>
                <div className="mt-4 border-t border-mint-dark/40 pt-3">
                  <p className="text-sm font-medium text-zinc-900">{s.name}</p>
                  <p className="text-xs text-zinc-500">{s.studio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Big H2 + intro */}
        <section className="mx-auto max-w-7xl px-6 pb-20 text-center">
          <h2 className="mx-auto max-w-3xl text-balance text-3xl leading-tight tracking-tight md:text-5xl">
            Big brand studios have an{" "}
            <span className="font-serif italic font-light">
              unfair marketing advantage
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-700 md:text-lg">
            They have full marketing teams, six-figure ad budgets, and the data
            to back it up. You don&apos;t have to keep playing catch-up.
          </p>
        </section>

        {/* Problem / Solution pairs */}
        <section className="mx-auto max-w-7xl space-y-6 px-6 pb-24">
          {PROBLEM_SOLUTIONS.map((pair, i) => (
            <div key={i} className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-zinc-50 p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  The Problem
                </p>
                <h3 className="mt-3 text-2xl tracking-tight md:text-3xl">
                  {pair.problem.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-base">
                  {pair.problem.body}
                </p>
              </div>
              <div className="rounded-3xl bg-mint-soft p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
                  Our Solution
                </p>
                <h3 className="mt-3 text-2xl tracking-tight md:text-3xl">
                  {pair.solution.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-base">
                  {pair.solution.body}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* PPT System */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
              Introducing the PPT System
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl leading-tight tracking-tight md:text-5xl">
              How big brands really win.{" "}
              <span className="font-serif italic font-light">
                And how you can too.
              </span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PPT_CARDS.map((c) => (
              <div
                key={c.label}
                className="flex flex-col rounded-3xl bg-white p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {c.label}
                </p>
                <h3 className="mt-3 text-xl tracking-tight md:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  {c.body}
                </p>
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-zinc-950 hover:underline"
                >
                  Learn more
                  <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* How it works in 90 days */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="text-center">
            <h2 className="mx-auto max-w-3xl text-balance text-3xl leading-tight tracking-tight md:text-5xl">
              How it works in{" "}
              <span className="font-serif italic font-light">90 days</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-700">
              A predictable, repeatable system installed step-by-step in your
              studio.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="flex items-start gap-6 rounded-3xl bg-white p-6 md:p-8"
              >
                <span className="shrink-0 text-2xl font-medium tracking-tight text-zinc-400 md:text-3xl">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-lg tracking-tight md:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Megan testimonial */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-3xl bg-white p-8 md:grid-cols-5 md:p-12">
            <div className="md:col-span-2">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={MEGAN_PORTRAIT}
                  alt="Megan, owner of Megan's Yoga Tribe"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center md:col-span-3">
              <p className="text-5xl font-medium tracking-tight md:text-7xl">
                147%
              </p>
              <p className="mt-2 text-base text-zinc-700">
                member growth in 12 months
              </p>
              <blockquote className="mt-6 text-xl leading-snug tracking-tight text-zinc-900 md:text-2xl">
                &ldquo;Kenko helped us open 4 new locations. We went from one
                studio struggling to fill classes to a thriving multi-location
                brand with predictable monthly growth.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm font-medium text-zinc-900">
                Megan · Owner, Megan&apos;s Yoga Tribe
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          id="audit"
          className="mx-auto max-w-7xl px-6 pb-24 text-center"
        >
          <div className="overflow-hidden rounded-3xl bg-mint-soft p-12 md:p-20">
            <h2 className="mx-auto max-w-3xl text-balance text-3xl leading-tight tracking-tight md:text-5xl">
              Get your{" "}
              <span className="font-serif italic font-light">
                free marketing audit
              </span>{" "}
              today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-zinc-700">
              30-minute call with a senior growth strategist. Walk away with a
              custom playbook for your studio — yours to keep, even if we never
              work together.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
              >
                Book My Free Audit
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
