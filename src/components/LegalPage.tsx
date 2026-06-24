import Link from "next/link";
import { site } from "@/lib/site";

type LegalPageProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="text-sm text-sky-600 hover:text-sky-700 font-medium mb-6 inline-block"
      >
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
      <p className="text-sm text-slate-500 mb-8">
        {site.name} · Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      </p>
      <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm leading-relaxed">
        {children}
      </div>
      <div className="mt-10 p-6 bg-sky-50 rounded-xl border border-sky-100">
        <p className="text-sm text-slate-700 mb-2">Questions? Call us anytime:</p>
        <a
          href={`tel:${site.phoneTel}`}
          className="text-xl font-bold text-sky-600 hover:text-sky-700"
        >
          {site.phone}
        </a>
      </div>
    </article>
  );
}
