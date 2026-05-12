import Link from "next/link";
import Image from "next/image";

const KENKO_LOGO =
  "https://framerusercontent.com/images/YQ4euyeSqXxIJm99xQGGCBYWYpg.png?width=128&height=128";

interface NavItem {
  label: string;
  href?: string;
  hasMenu?: boolean;
}

const NAV: NavItem[] = [
  { label: "Products", hasMenu: true },
  { label: "Business", hasMenu: true },
  { label: "Resources", href: "/resources-home" },
  { label: "Pricing", href: "/pricing" },
];

interface SiteHeaderProps {
  ctaLabel?: string;
  ctaHref?: string;
}

export function SiteHeader({
  ctaLabel = "Book a Demo",
  ctaHref = "/demo/get-demo",
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-mint-dark/40 bg-mint/80 backdrop-blur supports-[backdrop-filter]:bg-mint/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={KENKO_LOGO}
            alt="Kenko"
            width={28}
            height={28}
            className="rounded"
          />
          <span className="text-base font-semibold tracking-tight">kenko</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
              >
                {item.label}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 4l3 3 3-3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )
          )}
        </nav>

        <Link
          href={ctaHref}
          className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
        >
          {ctaLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
