"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const MIN_LOCATIONS = 1;
const MAX_LOCATIONS = 10;
const BASE_PRICE = 499;
const PER_LOCATION = 100; // +$100 per additional location → 10 loc = $1,499

const INCLUDED = [
  "AI Sales Manager",
  "Dedicated Growth Coach",
  "Local SEO + CRO website",
  "Marketing automations",
  "Unified inbox + CRM",
  "Acquisition & retention dashboards",
  "Twice monthly audits",
  "Unlimited team seats",
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

export default function PricingVariantAPage() {
  const [locations, setLocations] = useState(1);
  const price = BASE_PRICE + (locations - 1) * PER_LOCATION;
  const annual = price * 12;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center md:pt-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint-dark bg-white px-3 py-1 text-xs font-medium text-zinc-700">
            <span aria-hidden>✦</span> One plan, every feature
          </div>
          <h1 className="font-tight text-4xl tracking-tight text-zinc-950 md:text-5xl">
            One simple plan. Pay-as-you-grow.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-600 md:text-lg">
            Drag the slider to match your studio. Price scales with locations —
            everything else is unlimited.
          </p>
        </section>

        {/* Big ROI card */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className="rounded-3xl border border-mint-dark/60 bg-white p-6 shadow-[0_4px_30px_rgba(9,9,11,0.04)] md:p-12">
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Your price
              </span>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-tight text-6xl font-semibold tracking-tight text-zinc-950 md:text-7xl">
                  ${price.toLocaleString()}
                </span>
                <span className="pb-3 text-sm text-zinc-500">/per month</span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">
                ${annual.toLocaleString()} billed annually · cancel anytime
              </p>
            </div>

            {/* Slider */}
            <div className="mt-10">
              <div className="mb-3 flex items-baseline justify-between">
                <label
                  htmlFor="locations"
                  className="text-sm font-medium text-zinc-950"
                >
                  Number of locations
                </label>
                <span className="font-tight text-2xl font-semibold tracking-tight text-zinc-950">
                  {locations}
                </span>
              </div>
              <input
                id="locations"
                type="range"
                min={MIN_LOCATIONS}
                max={MAX_LOCATIONS}
                step={1}
                value={locations}
                onChange={(e) => setLocations(Number(e.target.value))}
                className="w-full accent-zinc-950"
                aria-valuemin={MIN_LOCATIONS}
                aria-valuemax={MAX_LOCATIONS}
                aria-valuenow={locations}
              />
              <div className="mt-2 flex justify-between text-xs text-zinc-500">
                <span>1 location</span>
                <span>10+ locations</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/demo/get-demo"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                Book demo
                <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Inline feature list */}
            <div className="mt-10 border-t border-mint-dark/60 pt-8">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Everything included
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {INCLUDED.map((item) => (
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
              Ready to own your local market?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-300 md:text-base">
              Book a 15-minute walkthrough — see exactly how Kenko fits your{" "}
              {locations} {locations === 1 ? "studio" : "studios"}.
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
