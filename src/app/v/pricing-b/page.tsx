"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const BUSINESS_TYPES = [
  "Pilates studio",
  "Yoga studio",
  "HIIT / Boutique fitness",
  "Dance fitness",
  "Pole / Aerial",
  "Lagree",
  "Gym",
  "Personal training",
  "Other",
];

const LOCATION_OPTIONS = [
  "1 location",
  "2–3 locations",
  "4–10 locations",
  "10+ locations",
];

const INCLUDED = [
  {
    title: "AI Sales Manager",
    body: "Books trials and re-engages no-shows on autopilot.",
  },
  {
    title: "Dedicated Growth Coach",
    body: "A real human owns your acquisition strategy every month.",
  },
  {
    title: "Conversion-ready website",
    body: "We design, develop and CRO-test your studio site for you.",
  },
  {
    title: "Local SEO that ranks",
    body: "GBP, citations, schema and content tuned for your service area.",
  },
  {
    title: "Member lifecycle automations",
    body: "Email + SMS flows for trial, onboarding, win-back and referrals.",
  },
  {
    title: "Unified inbox + CRM",
    body: "Every lead, member and conversation in one place.",
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

export default function PricingVariantBPage() {
  const [businessType, setBusinessType] = useState("");
  const [locations, setLocations] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const canSubmit =
    businessType.length > 0 && locations.length > 0 && email.length > 0;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center md:pt-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint-dark bg-white px-3 py-1 text-xs font-medium text-zinc-700">
            <span aria-hidden>✦</span> Built around your studio
          </div>
          <h1 className="font-tight text-4xl tracking-tight text-zinc-950 md:text-5xl">
            Custom built for your studio.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-600 md:text-lg">
            Tell us a little about your business and we&apos;ll send you a
            tailored quote within 24 hours. No demos required.
          </p>
        </section>

        {/* Qualifier form card */}
        <section className="mx-auto max-w-2xl px-6 pb-16">
          <div className="rounded-3xl border border-mint-dark/60 bg-white p-6 shadow-[0_4px_30px_rgba(9,9,11,0.04)] md:p-10">
            {submitted ? (
              <div className="text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-mint">
                  <span className="text-2xl" aria-hidden>
                    ✓
                  </span>
                </div>
                <h2 className="font-tight text-2xl tracking-tight text-zinc-950">
                  Quote on the way
                </h2>
                <p className="mt-2 text-sm text-zinc-600">
                  Thanks — we&apos;ll email {email} with a custom quote for your{" "}
                  {businessType.toLowerCase()} ({locations.toLowerCase()})
                  within one business day.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="business-type"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                  >
                    Business type
                  </label>
                  <select
                    id="business-type"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    required
                    className="w-full rounded-full border border-mint-dark bg-white px-4 py-2.5 text-sm text-zinc-950 outline-none transition-colors focus:border-zinc-950"
                  >
                    <option value="">Select your studio type…</option>
                    {BUSINESS_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="locations"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                  >
                    Locations
                  </label>
                  <select
                    id="locations"
                    value={locations}
                    onChange={(e) => setLocations(e.target.value)}
                    required
                    className="w-full rounded-full border border-mint-dark bg-white px-4 py-2.5 text-sm text-zinc-950 outline-none transition-colors focus:border-zinc-950"
                  >
                    <option value="">How many locations?</option>
                    {LOCATION_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@studio.com"
                    className="w-full rounded-full border border-mint-dark bg-white px-4 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 outline-none transition-colors focus:border-zinc-950"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-300"
                >
                  Get my quote
                  <span aria-hidden>→</span>
                </button>

                <p className="text-center text-xs text-zinc-500">
                  No credit card. No sales call required. Reply &ldquo;stop&rdquo;
                  any time.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* What's included */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-tight text-3xl tracking-tight text-zinc-950 md:text-4xl">
              What every Kenko plan includes
            </h2>
            <p className="mt-3 text-sm text-zinc-600 md:text-base">
              Pricing is custom — but the toolkit is the same end-to-end studio
              growth system used by 500+ brands.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-mint-dark/60 bg-white p-6"
              >
                <div className="mb-3 flex size-9 items-center justify-center rounded-full bg-mint text-zinc-950">
                  <span aria-hidden>✦</span>
                </div>
                <h3 className="text-base font-semibold tracking-tight text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
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

        {/* Bottom CTA */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl bg-zinc-950 px-6 py-16 text-center text-white md:px-12 md:py-20">
            <h2 className="font-tight text-3xl tracking-tight md:text-5xl">
              Prefer to talk it through?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-300 md:text-base">
              Skip the form and grab a 15-minute walkthrough with our growth
              team.
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
