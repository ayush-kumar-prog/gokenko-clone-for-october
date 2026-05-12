import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const WOMAN_ATHLETE =
  "https://framerusercontent.com/images/Qp5wpNCa7dOaFpmrBogz8aklwOA.webp";
const BOOKING_MOCKUP =
  "https://framerusercontent.com/images/XGuQ0Z30OyfgzFXVNuz3f88oA.png";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-mint">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center">
          <h1 className="mx-auto max-w-4xl text-balance text-5xl leading-tight tracking-tight md:text-6xl">
            <span className="font-serif italic font-light">
              Built for Boutique Studios
            </span>
            <br />
            <span className="font-normal">that care about member experience</span>
          </h1>
          <p className="mt-6 text-base text-zinc-700 md:text-lg">
            Turning &lsquo;Studios Near Me&rsquo; Searches Into Real Studio
            Growth.
          </p>
        </section>

        {/* Two-column feature panel + center woman */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Left card — mint */}
            <div className="relative overflow-hidden rounded-3xl bg-mint-soft p-8 md:p-10 min-h-[420px]">
              <h2 className="text-3xl tracking-tight md:text-4xl">
                Get more members
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-700 md:text-base">
                We help nearby people find your fitness studio and book — with
                daily done-for-you local SEO. No ads. No tools. No work.
              </p>
              <Link
                href="/ai-marketing-agency"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-mint-dark bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-50 transition-colors"
              >
                Explore Marketing
                <span aria-hidden>→</span>
              </Link>

              {/* Decorative arcs */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full border border-mint-dark/40" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full border border-mint-dark/30" />
            </div>

            {/* Right card — white */}
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-10 min-h-[420px]">
              <h2 className="text-3xl tracking-tight md:text-4xl">
                Booking Software
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-700 md:text-base">
                World-class member experience, robust backend, and dedicated
                human support — with five overnight switch.
              </p>
              <Link
                href="/fitness-studio-management-software"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-mint-dark bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-50 transition-colors"
              >
                Explore Booking
                <span aria-hidden>→</span>
              </Link>

              {/* Mockup image */}
              <div className="absolute bottom-0 right-0 hidden md:block w-[60%] translate-x-6 translate-y-6">
                <Image
                  src={BOOKING_MOCKUP}
                  alt="Booking software UI"
                  width={934}
                  height={654}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Center woman athlete photo */}
          <div className="relative mt-10 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={WOMAN_ATHLETE}
                  alt="Studio member training"
                  width={570}
                  height={570}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute left-0 top-1/3 -translate-x-1/3 rounded-full bg-white px-4 py-2 text-xs font-medium shadow-md md:text-sm">
                <span className="mr-1.5" aria-hidden>↗</span>
                Improve engagement
              </div>
              <div className="absolute right-0 top-2/3 translate-x-1/3 rounded-full bg-white px-4 py-2 text-xs font-medium shadow-md md:text-sm">
                <span className="mr-1.5" aria-hidden>↗</span>
                Get more leads
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
