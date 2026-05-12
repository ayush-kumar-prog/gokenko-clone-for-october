import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const PHONE_APP =
  "https://framerusercontent.com/images/XGuQ0Z30OyfgzFXVNuz3f88oA.png";
const DAMIEN_PORTRAIT =
  "https://framerusercontent.com/images/Qp5wpNCa7dOaFpmrBogz8aklwOA.webp";

const FEATURES = [
  {
    eyebrow: "All-in-one",
    title: "Replace 10 different tools with one — without addons",
    body: "Bookings, payments, payroll, marketing, website, app, retail and reporting. One platform. One fee. Zero addons.",
  },
  {
    eyebrow: "AI frontdesk",
    title: "AI frontdesk to do your actual work",
    body: "Buddy AI answers DMs, books trial classes, manages waitlists, and recovers cancellations — 24/7, no extra hires required.",
  },
  {
    eyebrow: "Support",
    title: "Video call support that is one click away",
    body: "Not a chatbot. Not a ticket queue. A real human on a video call in under two minutes — included on every plan.",
  },
  {
    eyebrow: "Member experience",
    title: "Treat every member like they are your first",
    body: "Personalized member journeys, intro offers, birthday treats, and lifecycle messaging — all on autopilot.",
  },
  {
    eyebrow: "Analytics",
    title: "Ditch spreadsheets forever with visual analytics",
    body: "Track retention, revenue, instructor performance, and class fill rates in real time. No CSV exports. No manual math.",
  },
  {
    eyebrow: "Brand",
    title: "Turn your business into a brand",
    body: "Your own branded mobile app, website and member portal — fully customized to your studio's identity, not ours.",
  },
];

const BIZ_IN_BOX = [
  {
    title: "Bookings & Schedule",
    body: "Visual calendar, recurring classes, drop-ins and packs in one view.",
  },
  {
    title: "Member CRM",
    body: "Every member's full history, notes and contracts at your fingertips.",
  },
  {
    title: "Payments & Billing",
    body: "Recurring billing, declined-card recovery, gift cards and family plans.",
  },
  {
    title: "Marketing Automation",
    body: "Lifecycle email, SMS, and push from a single playbook builder.",
  },
  {
    title: "Branded Mobile App",
    body: "iOS and Android app published under your brand — not Kenko's.",
  },
  {
    title: "Retail & Inventory",
    body: "Sell merch, supplements and apparel in-app and at the front desk.",
  },
  {
    title: "Staff & Payroll",
    body: "Schedule instructors, track hours, and run payroll without spreadsheets.",
  },
  {
    title: "Reports & Insights",
    body: "Real-time dashboards for revenue, retention, LTV, and class economics.",
  },
];

const SWITCH_PROMISE = [
  {
    title: "Free white-glove migration",
    body: "We move members, contracts and history from your old platform. You sleep through the switch.",
  },
  {
    title: "Side-by-side parallel run",
    body: "Run Kenko alongside your current tool for 30 days at no cost. Switch only when ready.",
  },
  {
    title: "Money-back guarantee",
    body: "If we can't deliver on the migration plan, you get every dollar back — no questions asked.",
  },
];

export default function FitnessStudioManagementSoftwarePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-mint">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
            Fitness Studio Management Software
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl leading-tight tracking-tight md:text-6xl">
            Finally, a{" "}
            <span className="font-serif italic font-light">booking platform</span>{" "}
            your members and team love
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-700 md:text-lg">
            Designed for studios that don&apos;t compromise on member
            experience, functionality and support.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/demo/get-demo"
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
            >
              Book a Demo
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {/* Feature grid (6 cards) */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex h-full flex-col rounded-3xl bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {f.eyebrow}
                </p>
                <h3 className="mt-3 text-xl tracking-tight md:text-2xl">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Damien testimonial */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-3xl bg-mint-soft p-8 md:grid-cols-5 md:p-12">
            <div className="md:col-span-2">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={DAMIEN_PORTRAIT}
                  alt="Damien D, Boostd Zurich"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Owner spotlight
              </p>
              <blockquote className="mt-6 text-2xl leading-snug tracking-tight text-zinc-950 md:text-3xl">
                &ldquo;After evaluating 20 different software options — we chose
                Kenko. The member experience and support are in a different
                league.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm font-medium text-zinc-900">
                Damien D · Boostd, Zurich
              </p>
            </div>
          </div>
        </section>

        {/* Your studio app. Cooler than Peloton's. */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Branded member app
              </p>
              <h2 className="mt-4 text-balance text-3xl leading-tight tracking-tight md:text-5xl">
                Your studio app.{" "}
                <span className="font-serif italic font-light">
                  Cooler than Peloton&apos;s.
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-700">
                A fully branded iOS and Android app that puts your studio in
                your members&apos; pockets. Class bookings, packs, retail,
                content and community — all under your brand, not ours.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-800">
                {[
                  "Published under your brand on iOS and Android",
                  "Live class booking, waitlist and stand-by",
                  "Push notifications for reminders and re-engagement",
                  "On-demand video library and challenges",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-0.5 text-zinc-950" aria-hidden>
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/demo/get-demo"
                  className="inline-flex items-center gap-1.5 rounded-full border border-mint-dark bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-50 transition-colors"
                >
                  See the app in action
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                <Image
                  src={PHONE_APP}
                  alt="Branded studio mobile app preview"
                  width={934}
                  height={654}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Your entire business-in-a-box */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
              Your entire business-in-a-box
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl leading-tight tracking-tight md:text-5xl">
              Everything you need for{" "}
              <span className="font-serif italic font-light">
                seamless studio operations
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-zinc-700">
              One platform replaces your booking system, CRM, payments,
              marketing automation, mobile app, retail and reporting tools.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BIZ_IN_BOX.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6"
              >
                <h3 className="text-base tracking-tight md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Zero switching cost promise */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-3xl bg-mint-soft p-10 md:p-16">
            <div className="text-center">
              <h2 className="mx-auto max-w-3xl text-balance text-3xl leading-tight tracking-tight md:text-5xl">
                Zero switching cost{" "}
                <span className="font-serif italic font-light">promise</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base text-zinc-700">
                We make moving from your current platform completely painless —
                or you don&apos;t pay.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {SWITCH_PROMISE.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl bg-white p-6"
                >
                  <h3 className="text-base tracking-tight md:text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-24 text-center">
          <h2 className="mx-auto max-w-3xl text-balance text-3xl leading-tight tracking-tight md:text-5xl">
            Talk to our{" "}
            <span className="font-serif italic font-light">
              product-expert
            </span>{" "}
            today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-zinc-700">
            30-minute personalized walkthrough. See exactly how Kenko fits your
            studio before you commit to anything.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/demo/get-demo"
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
            >
              Book a Demo
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
