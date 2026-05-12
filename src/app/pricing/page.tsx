import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Kenko Pricing | Transparent & Honest Pricing for Fitness Studios",
  description:
    "Simple transparent pricing — No add-ons. No upsells. No hidden fees.",
};

type Tier = {
  name: string;
  description: string;
  original?: string;
  price: string;
  priceSuffix?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  ai: { label: string; value?: string; items: string[] };
  services: { label: string; value?: string; items: string[] };
  tools: { label: string; value?: string; items: string[] };
  highlight?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Starter",
    description: "For new studios looking to simplify marketing",
    original: "$798",
    price: "$0",
    priceSuffix: "/per month",
    primaryCta: { label: "Watch demo", href: "/demo/get-demo" },
    secondaryCta: { label: "Try now", href: "/demo/get-demo" },
    ai: {
      label: "AI",
      value: "$500 value",
      items: ["AI Sales Manager"],
    },
    services: {
      label: "Services",
      items: [
        "Dedicated Growth Coach",
        "Local SEO",
        "Website design and CRO",
        "Marketing automation setup",
        "Twice monthly audits",
      ],
    },
    tools: {
      label: "Tools",
      value: "$299 value",
      items: [
        "CRM",
        "Lead pipeline",
        "Forms",
        "Unified inbox",
        "Automation builder",
        "Campaigns",
        "Acquisition dashboard",
        "Retention dashboard",
      ],
    },
  },
  {
    name: "Growth",
    description: "Managed marketing for your studio's complete member lifecycle",
    original: "$2,995",
    price: "$499",
    priceSuffix: "/per month",
    primaryCta: { label: "Book demo", href: "/demo/get-demo" },
    secondaryCta: { label: "Try now", href: "/demo/get-demo" },
    highlight: true,
    ai: {
      label: "AI",
      value: "$499 value",
      items: ["AI Sales Manager"],
    },
    services: {
      label: "Services",
      value: "$2,000 value",
      items: [
        "Dedicated Growth Manager",
        "Local SEO",
        "Marketing automation setup",
        "Website design and CRO",
        "Twice monthly audits",
      ],
    },
    tools: {
      label: "Tools",
      value: "$496 value",
      items: [
        "CRM",
        "Lead pipeline",
        "Forms",
        "Unified inbox",
        "Automation builder",
        "Campaigns",
        "Acquisition dashboard",
        "Retention dashboard",
      ],
    },
  },
  {
    name: "Custom",
    description:
      "AI-powered marketing and retention systems for multi-location brands",
    price: "Contact us",
    primaryCta: { label: "Talk to sales", href: "/demo/get-demo" },
    ai: {
      label: "AI",
      items: ["AI Sales Manager", "Custom AI workflows"],
    },
    services: {
      label: "Services",
      items: [
        "Dedicated Account Director",
        "Multi-location SEO",
        "Brand strategy & creative",
        "Enterprise rollout support",
        "Weekly performance reviews",
      ],
    },
    tools: {
      label: "Tools",
      items: [
        "Everything in Growth",
        "Multi-location dashboards",
        "Custom integrations",
        "SSO & advanced roles",
        "Priority SLA support",
      ],
    },
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

const FAQS = [
  {
    q: "Will you buy out my existing software contract?",
    a: "Yes — if you're locked into another platform, our team will work with you to cover qualifying buyout costs as part of switching to Kenko.",
  },
  {
    q: "Will switching interrupt my class schedule?",
    a: "No. We migrate your schedule, members, and bookings in the background so your classes run uninterrupted from day one.",
  },
  {
    q: "Will you train my team?",
    a: "Every plan includes hands-on onboarding and live training sessions for your entire team, plus an always-on knowledge base.",
  },
  {
    q: "Will you transfer all my data?",
    a: "Yes. Our migration specialists move members, payments, packages, attendance, and historical reports for you — no spreadsheets required.",
  },
  {
    q: "Will you setup my marketing automations?",
    a: "Your Growth Coach designs and ships your email, SMS, and lead-nurture flows in the first 30 days based on best-in-class studio playbooks.",
  },
  {
    q: "Will you design & develop my website?",
    a: "Yes — modern, conversion-optimized studio sites are included in Starter and above, plus ongoing CRO experiments to grow bookings.",
  },
  {
    q: "Do you charge extra payment processing fee?",
    a: "No surprise fees. You get transparent, industry-low processing rates and we never add a percentage on top of your payouts.",
  },
  {
    q: "Can I try Kenko AI for my franchise/enterprise brand?",
    a: "Absolutely. Our Custom plan is built for multi-location and franchise operators — talk to sales for a tailored rollout.",
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M2.5 7.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TierCard({ tier }: { tier: Tier }) {
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

      <div className="space-y-6 border-t border-mint-dark/60 pt-6">
        {[tier.ai, tier.services, tier.tools].map((section) => (
          <div key={section.label}>
            <div className="mb-3 flex items-baseline justify-between gap-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {section.label}
              </h4>
              {section.value ? (
                <span className="text-xs text-zinc-400">{section.value}</span>
              ) : null}
            </div>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-zinc-800"
                >
                  <CheckIcon className="mt-1 text-zinc-950" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center md:pt-24 md:pb-12">
          <h1 className="font-tight text-4xl tracking-tight text-zinc-950 md:text-5xl">
            Simple transparent pricing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-600 md:text-lg">
            No add-ons. No upsells. No hidden fees. Just everything you need to
            grow your studio.
          </p>

          {/* Toggle pills */}
          <div className="mt-8 inline-flex items-center rounded-full border border-mint-dark bg-white p-1 text-sm">
            <button
              type="button"
              className="rounded-full px-4 py-1.5 font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              AI Marketing
            </button>
            <button
              type="button"
              className="rounded-full px-4 py-1.5 font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Booking Platform
            </button>
            <button
              type="button"
              className="rounded-full bg-zinc-950 px-4 py-1.5 font-medium text-white"
            >
              Bundle{" "}
              <span className="ml-1 text-xs text-mint">22% OFF 🎉</span>
            </button>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {TIERS.map((tier) => (
              <TierCard key={tier.name} tier={tier} />
            ))}
          </div>
        </section>

        {/* Marquee stat strip */}
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-mint-dark bg-white px-3 py-1 text-xs font-medium text-zinc-700">
            <span aria-hidden>★</span> Rated 4.7/5 on Capterra
          </div>
          <h2 className="font-tight text-3xl tracking-tight text-zinc-950 md:text-4xl">
            Nothing like this
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Successful business owners trust Kenko for their multi-location brand
          </p>

          <figure className="mt-10 rounded-3xl bg-white p-8 text-left shadow-[0_4px_30px_rgba(9,9,11,0.04)] md:p-12">
            <div className="mb-4 flex gap-1 text-amber-500" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <blockquote className="font-tight text-2xl leading-snug tracking-tight text-zinc-950 md:text-3xl">
              &ldquo;After evaluating 20 different software options we chose
              Kenko&rdquo;
            </blockquote>
            <p className="mt-6 text-sm leading-relaxed text-zinc-600">
              We run 800 classes a month and needed a platform that could keep
              up. Kenko replaced Mindbody for us after 3 years, and the team
              listens to feedback and ships improvements faster than anyone
              we&apos;ve worked with.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-zinc-600">
              To date, we appreciate the ability to discuss our problems and
              contribute to the development of the platform.
            </p>
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

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 pb-20">
          <h2 className="font-tight mb-10 text-center text-3xl tracking-tight text-zinc-950 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-mint-dark/60 bg-white p-5 open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-zinc-950">
                  {faq.q}
                  <span
                    aria-hidden
                    className="text-zinc-400 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl bg-zinc-950 px-6 py-16 text-center text-white md:px-12 md:py-20">
            <h2 className="font-tight text-3xl tracking-tight md:text-5xl">
              Ready to own your local market?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-300 md:text-base">
              Get a 15-minute personalized walkthrough of how Kenko grows
              studios like yours.
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
