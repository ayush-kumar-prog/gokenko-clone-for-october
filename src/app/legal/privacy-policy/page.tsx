import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-6 text-zinc-700">
          This is a UI clone for canvas experimentation. The full legal text for
          this page lives on the original site at{" "}
          <a
            href="https://www.gokenko.com/legal/privacy-policy"
            className="underline"
          >
            gokenko.com/legal/privacy-policy
          </a>
          .
        </p>
        <div className="mt-12 rounded-2xl bg-white p-8 ring-1 ring-mint-dark/30">
          <p className="text-sm text-zinc-500">
            Last updated: see original. Replace this stub with real legal content
            before any production use.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
