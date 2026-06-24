import Link from "next/link";
import { site } from "@/lib/site";

const navLinks = [
  { label: "Flight Bookings", href: "#services" },
  { label: "Flight Changes", href: "#services" },
  { label: "Seat Upgrades", href: "#services" },
  { label: "Cancellations", href: "#services" },
];

export function Header() {
  return (
    <>
      <div className="bg-slate-900 text-slate-300 text-center text-xs sm:text-sm py-2 px-4">
        <strong className="text-white font-medium">Independent Travel Agency</strong>
        {" — "}Not affiliated with any airline | 24/7 Booking Line:{" "}
        <a href={`tel:${site.phoneTel}`} className="text-sky-400 hover:text-sky-300 font-semibold">
          {site.phone}
        </a>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl" aria-hidden>
              ✈
            </span>
            <span className="font-bold text-slate-900 text-lg leading-tight">
              {site.shortName}
              <span className="block text-xs font-medium text-sky-600 tracking-wide">
                {site.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-sky-600 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors shrink-0"
          >
            <span aria-hidden>📞</span>
            {site.phone}
          </a>
        </div>
      </header>
    </>
  );
}
