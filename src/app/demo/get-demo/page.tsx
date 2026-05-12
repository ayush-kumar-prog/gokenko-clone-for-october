import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const BUSINESS_TYPES = [
  "Pilates",
  "Yoga",
  "Gym",
  "HIIT & Boutique",
  "Dance Fitness",
  "Pole Dance",
  "Personal Training",
  "Lagree",
  "Other",
];

const LOCATION_OPTIONS = [
  "Just starting out",
  "1 location",
  "2-5 locations",
  "6-15 locations",
  "16+ locations",
];

const KENKO_PRODUCTS = [
  "Booking Platform",
  "AI Marketing",
  "AI Sales Manager",
  "Website Glowup",
];

const TRUST_BULLETS = [
  "15-day free trial — no credit card required",
  "99.9% uptime SLA backed by 24/7 support",
  "GDPR, SOC2 Type II, and HIPAA-aligned",
];

const PRODUCT_SCREENSHOT =
  "https://framerusercontent.com/images/XGuQ0Z30OyfgzFXVNuz3f88oA.png";

const REQ = (
  <span aria-hidden className="text-red-600">
    {" "}
    *
  </span>
);

export default function GetDemoPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-mint">
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            {/* LEFT 60% — form card */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-white p-8 ring-1 ring-mint-dark/30 md:p-10">
                <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                  Talk to our product expert
                </h2>
                <p className="mt-3 text-sm text-zinc-700">
                  Tell us a little about your studio and we will tailor the demo
                  to your goals. Takes about 60 seconds.
                </p>

                <form className="mt-8 space-y-10">
                  {/* Step 1 */}
                  <fieldset className="space-y-5">
                    <legend className="text-lg font-medium tracking-tight text-zinc-950">
                      Tell us about your business
                    </legend>

                    <div>
                      <label
                        htmlFor="business-type"
                        className="block text-sm font-medium text-zinc-800"
                      >
                        Your business type{REQ}
                      </label>
                      <select
                        id="business-type"
                        name="business_type"
                        required
                        defaultValue=""
                        className="mt-2 block w-full rounded-xl border border-mint-dark bg-mint-soft px-4 py-3 text-sm text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950/10"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {BUSINESS_TYPES.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="locations"
                        className="block text-sm font-medium text-zinc-800"
                      >
                        Number of locations{REQ}
                      </label>
                      <select
                        id="locations"
                        name="locations"
                        required
                        defaultValue=""
                        className="mt-2 block w-full rounded-xl border border-mint-dark bg-mint-soft px-4 py-3 text-sm text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950/10"
                      >
                        <option value="" disabled>
                          Multi-location or starting new?
                        </option>
                        {LOCATION_OPTIONS.map((l) => (
                          <option key={l} value={l}>
                            {l}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <span className="block text-sm font-medium text-zinc-800">
                        Kenko products
                      </span>
                      <p className="mt-1 text-xs text-zinc-500">
                        Select any you would like to see in the demo.
                      </p>
                      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {KENKO_PRODUCTS.map((p) => (
                          <label
                            key={p}
                            className="flex cursor-pointer items-center gap-3 rounded-xl border border-mint-dark bg-mint-soft px-4 py-3 text-sm text-zinc-950 has-[input:checked]:border-zinc-950 has-[input:checked]:bg-white"
                          >
                            <input
                              type="checkbox"
                              name="products"
                              value={p}
                              className="size-4 rounded border-zinc-400 text-zinc-950 focus:ring-zinc-950"
                            />
                            {p}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-zinc-800"
                      >
                        Website URL
                      </label>
                      <input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="www.awesomestudio.com"
                        className="mt-2 block w-full rounded-xl border border-mint-dark bg-mint-soft px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-950/10"
                      />
                    </div>
                  </fieldset>

                  {/* Step 2 */}
                  <fieldset className="space-y-5 border-t border-mint-dark/40 pt-8">
                    <legend className="text-lg font-medium tracking-tight text-zinc-950">
                      How can we reach you?
                    </legend>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-zinc-800"
                      >
                        Email{REQ}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@studio.com"
                        className="mt-2 block w-full rounded-xl border border-mint-dark bg-mint-soft px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-950/10"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-zinc-800"
                        >
                          First name{REQ}
                        </label>
                        <input
                          id="first-name"
                          name="first_name"
                          type="text"
                          required
                          placeholder="Jane"
                          className="mt-2 block w-full rounded-xl border border-mint-dark bg-mint-soft px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-950/10"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-zinc-800"
                        >
                          Last name
                        </label>
                        <input
                          id="last-name"
                          name="last_name"
                          type="text"
                          placeholder="Doe"
                          className="mt-2 block w-full rounded-xl border border-mint-dark bg-mint-soft px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-950/10"
                        />
                      </div>
                    </div>
                  </fieldset>

                  <div className="flex flex-col gap-3 border-t border-mint-dark/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-zinc-500">
                      By submitting, you agree to our{" "}
                      <a
                        href="/legal/privacy-policy"
                        className="underline hover:text-zinc-950"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
                    >
                      Book my demo
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT 40% — hero + trust */}
            <aside className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Free 15-Day Trial · White-Glove Onboarding
                </p>
                <h1 className="text-4xl font-normal leading-tight tracking-tight md:text-5xl">
                  World-class member experience starts here
                </h1>
                <p className="text-base text-zinc-700">
                  Replace 5 tools and a marketing hire with one Kenko stack. We
                  will walk you through a live setup tailored to your studio
                  type.
                </p>

                <ul className="space-y-3">
                  {TRUST_BULLETS.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-zinc-800"
                    >
                      <span
                        aria-hidden
                        className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs text-white"
                      >
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-mint-dark/30">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={PRODUCT_SCREENSHOT}
                      alt="Kenko booking software dashboard"
                      fill
                      sizes="(min-width: 1024px) 480px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="border-t border-mint-dark/30 px-5 py-4">
                    <p className="text-xs text-zinc-500">
                      Most reliable software for fitness brands — 99.9% uptime ·
                      GDPR · SOC2 · HIPAA aligned · Enterprise-ready.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
