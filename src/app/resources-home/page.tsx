import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

interface ResourceCard {
  title: string;
  description: string;
  image: string;
  href: string;
}

const BLOGS: ResourceCard[] = [
  {
    title: "The Difference Between Booking Software That Costs and Booking Software That Pays",
    description:
      "Most studios pick a platform on price. The smart ones pick on member retention. Here is the math.",
    image:
      "https://framerusercontent.com/images/Qp5wpNCa7dOaFpmrBogz8aklwOA.webp",
    href: "#",
  },
  {
    title: "Why Studios With Tight Budgets Lose Toward Predictable Growth",
    description:
      "Discounting your way to packed classes is a one-way street. Here is what works instead.",
    image:
      "https://framerusercontent.com/images/Qp5wpNCa7dOaFpmrBogz8aklwOA.webp",
    href: "#",
  },
  {
    title: "How Adobe Migrates Fitness Studios Stranded by First-Launch Closure",
    description:
      "When your old platform goes dark, here is a 7-day playbook to keep members loyal.",
    image:
      "https://framerusercontent.com/images/XGuQ0Z30OyfgzFXVNuz3f88oA.png",
    href: "#",
  },
];

const SUCCESS_STORIES: ResourceCard[] = [
  {
    title: "The Hot Pilates Studio Has Grown 30% MoM Without Ads",
    description:
      "Manhattan Beach pilates studio scaled from 2 to 9 classes per day with Kenko AI Marketing.",
    image:
      "https://framerusercontent.com/images/Qp5wpNCa7dOaFpmrBogz8aklwOA.webp",
    href: "#",
  },
  {
    title: "Align Yoga Posts High on Google and Wins Five-Star Customer Reviews",
    description:
      "Independent yoga studio rewrites local SEO from scratch — in 60 days.",
    image:
      "https://framerusercontent.com/images/Qp5wpNCa7dOaFpmrBogz8aklwOA.webp",
    href: "#",
  },
  {
    title: "Yoga Studio Drives Customer Reserve Placement 147% Quickly",
    description:
      "A 4-location vinyasa chain replaces 3 vendors with a single Kenko-powered stack.",
    image:
      "https://framerusercontent.com/images/XGuQ0Z30OyfgzFXVNuz3f88oA.png",
    href: "#",
  },
];

const PLAYBOOKS: ResourceCard[] = [
  {
    title: "The 10-Day Acquisition Playbook for Boutique Studios",
    description:
      "Steal our exact 10-day launch sequence: emails, ads, referral mechanics, retention.",
    image:
      "https://framerusercontent.com/images/XGuQ0Z30OyfgzFXVNuz3f88oA.png",
    href: "#",
  },
  {
    title: "Run a Membership Drive Without Discounting Your Brand",
    description:
      "A field-tested promo framework that fills classes without commoditizing your studio.",
    image:
      "https://framerusercontent.com/images/Qp5wpNCa7dOaFpmrBogz8aklwOA.webp",
    href: "#",
  },
];

function ResourceCardItem({ card }: { card: ResourceCard }) {
  return (
    <Link
      href={card.href}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-mint-dark/30 transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-mint-soft">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(min-width: 1024px) 400px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-medium leading-tight tracking-tight text-zinc-950">
          {card.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-700">
          {card.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-zinc-950">
          Read more
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}

function CategorySection({
  title,
  cards,
}: {
  title: string;
  cards: ResourceCard[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
          {title}
        </h2>
        <Link
          href="#"
          className="hidden text-sm font-medium text-zinc-700 hover:text-zinc-950 md:inline-flex"
        >
          See all →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <ResourceCardItem key={c.title} card={c} />
        ))}
      </div>
    </section>
  );
}

export default function ResourcesHomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-mint">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center md:pt-28">
          <h1 className="text-5xl font-normal leading-tight tracking-tight md:text-6xl">
            Kenko Resources
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-700">
            Playbooks, customer stories, and growth research for boutique
            fitness studio owners. Steal what works.
          </p>
        </section>

        {/* Resource categories on a slightly different mint background */}
        <div className="bg-mint-soft">
          <CategorySection title="Blogs" cards={BLOGS} />
          <CategorySection title="Success Stories" cards={SUCCESS_STORIES} />
          <CategorySection
            title="Playbooks for Fitness Studio Owners"
            cards={PLAYBOOKS}
          />
        </div>

        {/* Newsletter signup */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-white p-10 ring-1 ring-mint-dark/30 md:grid-cols-2 md:p-14">
            <div>
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                Stay updated with Kenko
              </h2>
              <p className="mt-4 text-base text-zinc-700">
                The boutique studio operator newsletter. Tactics, teardowns, and
                tools — one email per week, no fluff.
              </p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row" action="#">
              <label className="sr-only" htmlFor="newsletter-email">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@studio.com"
                className="flex-1 rounded-full border border-mint-dark bg-mint-soft px-5 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-950/10"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
              >
                Subscribe
                <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-24 text-center">
          <div className="rounded-3xl bg-white px-6 py-16 ring-1 ring-mint-dark/30 md:py-20">
            <h2 className="mx-auto max-w-3xl text-4xl font-normal tracking-tight md:text-5xl">
              Ready to own your local market?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-zinc-700">
              See how Kenko replaces 5 tools and a marketing hire in one demo.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/demo/get-demo"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-4 text-base font-medium text-white hover:bg-zinc-800 transition-colors"
              >
                Book Live Demo
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
