import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Kenko Pricing | Outcome-anchored plans for fitness studios",
  description:
    "Pick a plan by the result you want — not a checklist. New members, guaranteed.",
};

type OutcomeTier = {
  name: string;
  description: string;
  original?: string;
  price: string;
  priceSuffix?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  outcomeHeadline: string;
  outcomeSubline: string;
  proofPoints: string[];
  guarantee: string;
  highlight?: boolean;
};

const TIERS: OutcomeTier[] = [
  {
    name: "Starter",
    description: "For new studios looking to fill empty class slots",
    original: "$798",
    price: "$0",
    priceSuffix: "/per month",
    primaryCta: { label: "Watch demo", href: "/demo/get-demo" },
    secondaryCta: { label: "Try now", href: "/demo/get-demo" },
    outcomeHeadline: "+10 new members / month",
    outcomeSubline:
      "We&rsquo;ll fill 10 trial slots a month with qualified locals — or your next month is free.",
    proofPoints: [
      "Average payback in 4–6 weeks",
      "Onboards 1 new acquisition channel",
      "Ideal for studios under 200 active members",
    ],
    guarantee: "10 new trial sign-ups in 30 days, guaranteed",
  },
  {
    name: "Growth",
    description: "Managed marketing for studios ready to scale member lifecycle",
    original: "$2,995",
    price: "$499",
    priceSuffix: "/per month",
    primaryCta: { label: "Book demo", href: "/demo/get-demo" },
    secondaryCta: { label: "Try now", href: "/demo/get-demo" },
    highlight: true,
    outcomeHeadline: "+40 new members / month",
    outcomeSubline:
      "A dedicated Growth Manager runs the full acquisition + retention loop. 40 net new members, every month.",
    proofPoints: [
      "Average $63,080 revenue lift in year one",
      "Cuts member churn by ~22%",
      "Ideal for studios at 200–800 active members",
    ],
    guarantee: "40 net new members in 90 days, guaranteed",
  },
  {
    name: "Custom",
    description:
      "AI-powered marketing and retention systems for multi-location brands",
    price: "Contact us",
    primaryCta: { label: "Talk to sales", href: "/demo/get-demo" },
    outcomeHeadline: "100+ new members / month",
    outcomeSubline:
      "Multi-location playbooks, custom AI workflows, and an Account Director embedded with your team.",
    proofPoints: [
      "Tailored expansion roadmap per location",
      "Brand + creative + SEO at scale",
      "Ideal for 4+ locations or franchise rollouts",
    ],
    guarantee: "Quarterly performance targets, contractually backed",
  },
];

const STATS = [
  "100% user-oriented experience",
  "$51k referral program added revenue",
  "230% sales growth",
  "33% lead conversion",
  "4 locations & 147% client base growth",
  "$1.2M in 12 months",
  "Saves 20hrs/week",
];

function OutcomeCard({ tier }: { tier: OutcomeTier }) {
  return (
    <div
      className={`flex flex-col rounded-3xl border bg-white p-6 md:p-8 ${
        tier.highlight
          ? "border-zinc-950/10 shadow-[0_4px_30px_rgba(9,9,11,0.06)]"
          : "border-mint-dark/60"
      }`}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
          {tier.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {tier.description}
        </p>
      </div>

      <div className="mb-6 flex items-end gap-2">
        {tier.original ? (
          <span className="text-xl text-zinc-400 line-through">
            {tier.original}
          </span>
        ) : null}
        <span className="text-4xl font-semibold tracking-tight text-zinc-950">
          {tier.price}
        </span>
        {tier.priceSuffix ? (
          <span className="pb-1 text-sm text-zinc-500">{tier.priceSuffix}</span>
        ) : null}
      </div>

      <div className="mb-8 flex flex-col gap-2 sm:flex-row">
        <Link
          href={tier.primaryCta.href}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          {tier.primaryCta.label}
          <span aria-hidden>→</span>
        </Link>
        {tier.secondaryCta ? (
          <Link
            href={tier.secondaryCta.href}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-mint-dark bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-mint-soft"
          >
            {tier.secondaryCta.label}
          </Link>
        ) : null}
      </div>

      {/* Outcome anchor — the only "feature" */}
      <div className="rounded-2xl bg-mint p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
          What you get
        </p>
        <p className="font-tight mt-2 text-3xl font-semibold leading-tight tracking-tight text-zinc-950">
          {tier.outcomeHeadline}
        </p>
        <p
          className="mt-3 text-sm leading-relaxed text-zinc-700"
          dangerouslySetInnerHTML={{ __html: tier.outcomeSubline }}
        />
      </div>

      <ul className="mt-6 space-y-2">
        {tier.proofPoints.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-sm text-zinc-700"
          >
            <span aria-hidden className="mt-1 text-zinc-950">
              ✦
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-xl border border-dashed border-mint-dark bg-mint-soft px-4 py-3 text-xs font-medium text-zinc-700">
        <span aria-hidden>✓</span> {tier.guarantee}
      </div>
    </div>
  );
}

export default function PricingVariantCPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center md:pt-24 md:pb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint-dark bg-white px-3 py-1 text-xs font-medium text-zinc-700">
            <span aria-hidden>✦</span> Pricing by outcome
          </div>
          <h1 className="font-tight text-4xl tracking-tight text-zinc-950 md:text-5xl">
            Pick the result. We&apos;ll deliver it.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-600 md:text-lg">
            Stop comparing checklists. Pick the plan by the number of new
            members you want this month — every plan is guaranteed.
          </p>
        </section>

        {/* Outcome-anchored cards */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {TIERS.map((tier) => (
              <OutcomeCard key={tier.name} tier={tier} />
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-zinc-500">
            Guarantees apply to studios that complete onboarding within 14 days.
            See{" "}
            <Link href="#" className="underline hover:text-zinc-950">
              terms
            </Link>
            .
          </p>
        </section>

        {/* Marquee */}
        <section className="border-y border-mint-dark/40 bg-mint-soft py-10">
          <p className="mx-auto max-w-7xl px-6 pb-6 text-center text-sm font-medium text-zinc-700">
            Trusted by 500+ fitness studios
          </p>
          <div className="overflow-hidden">
            <div className="marquee flex w-max gap-8 whitespace-nowrap text-sm text-zinc-700">
              {[...STATS, ...STATS].map((stat, i) => (
                <span
                  key={`${stat}-${i}`}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2"
                >
                  <span aria-hidden>↗️</span>
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-tight text-3xl tracking-tight text-zinc-950 md:text-4xl">
            Real outcomes, real studios
          </h2>
          <figure className="mt-10 rounded-3xl bg-white p-8 text-left shadow-[0_4px_30px_rgba(9,9,11,0.04)] md:p-12">
            <div className="mb-4 flex gap-1 text-amber-500" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <blockquote className="font-tight text-2xl leading-snug tracking-tight text-zinc-950 md:text-3xl">
              &ldquo;We hit our 40-member target inside the first 60 days. The
              guarantee made the decision easy.&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <div className="size-10 rounded-full bg-mint-dark/60" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-zinc-950">Damien D.</p>
                <p className="text-xs text-zinc-500">
                  Owner · Booster Transform
                </p>
              </div>
            </figcaption>
          </figure>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl bg-zinc-950 px-6 py-16 text-center text-white md:px-12 md:py-20">
            <h2 className="font-tight text-3xl tracking-tight md:text-5xl">
              Ready to own your local market?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-300 md:text-base">
              Pick the outcome that fits — we&apos;ll show you exactly how we
              get there in a 15-minute walkthrough.
            </p>
            <Link
              href="/demo/get-demo"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-mint"
            >
              Book Live Demo (15m)
              <span aria-hidden>→</span>
            </Link>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-zinc-400">
              <span>20hrs saved weekly</span>
              <span aria-hidden>·</span>
              <span>$63,080 avg revenue increase</span>
              <span aria-hidden>·</span>
              <span>15-day free trial</span>
            </div>
          </div>
        </section>

        {/* Reliability strip */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-600">
            <span>99.9% Uptime</span>
            <span aria-hidden>·</span>
            <span>GDPR, SOC2 &amp; HIPAA Compliant</span>
            <span aria-hidden>·</span>
            <span>Enterprise-ready</span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
