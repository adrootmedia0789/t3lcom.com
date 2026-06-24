import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { BrandMark } from "@/components/BrandMark";

const serviceLinks = [
  "Flight Bookings",
  "Flight Changes",
  "Seat Upgrades",
  "Cancellations",
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export function Footer() {
  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}, ${site.address.country}`;

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <BrandMark variant="footer" />
          <p className="text-sm leading-relaxed mb-4">
            Independent phone-based travel agency serving USA customers with expert flight
            booking services, 24/7.
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="block text-sky-400 hover:text-sky-300 font-semibold text-lg mb-1"
          >
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="text-sm hover:text-white transition-colors">
            {site.email}
          </a>
          <p className="text-sm mt-3 leading-relaxed">{fullAddress}</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((item) => (
              <li key={item}>
                <a href="#services" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-white transition-colors">
                📞 {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                ✉ {site.email}
              </a>
            </li>
            <li>
              📍 {site.address.city}, {site.address.state} {site.address.zip}, USA
            </li>
            <li>🕐 {site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            <strong className="text-slate-300">Important Disclosure:</strong> {site.disclosure}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-500">
            <span>
              © {new Date().getFullYear()} {site.name} · All rights reserved.
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex gap-3">
                <Link href="/privacy" className="hover:text-slate-300">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-slate-300">
                  Terms
                </Link>
                <Link href="/disclaimer" className="hover:text-slate-300">
                  Disclaimer
                </Link>
              </div>
              <a
                href={site.adrootMediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center opacity-80 hover:opacity-100 transition-opacity"
                aria-label="Adroot Media"
              >
                <Image
                  src={site.logos.adrootMedia}
                  alt="Adroot Media"
                  width={140}
                  height={32}
                  className="h-7 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
