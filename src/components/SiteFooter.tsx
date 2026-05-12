import Link from "next/link";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: "Business",
    links: [
      { label: "Pilates", href: "#" },
      { label: "Yoga", href: "#" },
      { label: "Pole Dance", href: "#" },
      { label: "HIIT & Boutique", href: "#" },
      { label: "Dance Fitness", href: "#" },
      { label: "Gym", href: "#" },
      { label: "Personal Training", href: "#" },
      { label: "Lagree", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Marketing", href: "/ai-marketing-agency" },
      { label: "Member Experience", href: "/fitness-studio-management-software" },
      { label: "Operations", href: "/fitness-studio-management-software" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources-home" },
      { label: "Success Stories", href: "/resources-home" },
      { label: "Product Updates", href: "/resources-home" },
      { label: "Refer and Earn", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Our Roadmap", href: "#" },
      { label: "Status", href: "#" },
      { label: "Download App", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-mint-dark/40 bg-mint">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-zinc-700 hover:text-zinc-950 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-mint-dark/40 pt-8 md:flex-row">
          <div className="flex items-center gap-3 text-xs text-zinc-600">
            <Link href="/legal/security-policy" className="hover:text-zinc-950">
              Security
            </Link>
            <span>|</span>
            <Link href="/legal/privacy-policy" className="hover:text-zinc-950">
              Privacy
            </Link>
            <span>|</span>
            <Link href="/legal/terms-of-service" className="hover:text-zinc-950">
              Terms &amp; Conditions
            </Link>
            <span>|</span>
            <Link href="/legal/cookies" className="hover:text-zinc-950">
              Cookies
            </Link>
          </div>
          <p className="text-xs text-zinc-500">
            © All rights reserved by Spotbee, Inc. 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
