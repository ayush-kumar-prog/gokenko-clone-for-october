import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const MEGAN_PHOTO =
  "https://framerusercontent.com/images/Qp5wpNCa7dOaFpmrBogz8aklwOA.webp";

interface NumberBlock {
  value: string;
  label: string;
}

const NUMBERS: NumberBlock[] = [
  { value: "147%", label: "member growth" },
  { value: "4", label: "new locations" },
  { value: "18mo", label: "from one studio to four" },
];

export default function HomeCOwnerStory() {
  return (
    <>
      <SiteHeader />
      <main className="bg-mint">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-20">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            {/* Photo */}
            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl bg-mint-soft">
                <Image
                  src={MEGAN_PHOTO}
                  alt="Megan, owner of Megan's Yoga Tribe"
                  width={570}
                  height={680}
                  className="h-auto w-full object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-medium shadow-md backdrop-blur md:text-sm">
                  <span className="mr-1.5" aria-hidden>↗</span>
                  147% member growth
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="md:col-span-7">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Owner story · Megan&apos;s Yoga Tribe
              </p>
              <blockquote className="mt-6">
                <p className="text-balance text-3xl leading-tight tracking-tight md:text-5xl">
                  <span className="text-zinc-300" aria-hidden>&ldquo;</span>
                  <span className="font-serif italic font-light">
                    147% member growth
                  </span>{" "}
                  <span className="font-normal">
                    helped us open
                  </span>{" "}
                  <span className="font-serif italic font-light">
                    4 locations
                  </span>{" "}
                  <span className="font-normal">
                    in 18 months — without hiring a marketer.
                  </span>
                  <span className="text-zinc-300" aria-hidden>&rdquo;</span>
                </p>
              </blockquote>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-medium text-white">
                  M
                </div>
                <div>
                  <p className="text-sm font-medium">Megan Reyes</p>
                  <p className="text-xs text-zinc-500">
                    Owner, Megan&apos;s Yoga Tribe
                  </p>
                </div>
              </div>

              {/* Inline numbers */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-mint-dark/50 pt-8">
                {NUMBERS.map((n) => (
                  <div key={n.label}>
                    <div className="text-3xl tracking-tight md:text-4xl">
                      {n.value}
                    </div>
                    <p className="mt-1 text-xs text-zinc-500 md:text-sm">
                      {n.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/demo/get-demo"
                  className="inline-flex items-center gap-1.5 text-base font-medium text-zinc-950 underline-offset-4 hover:underline"
                >
                  Get the system she used
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
