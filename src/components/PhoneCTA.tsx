import { site } from "@/lib/site";

type PhoneCTAProps = {
  variant?: "primary" | "secondary" | "hero";
  className?: string;
  label?: string;
};

export function PhoneCTA({
  variant = "primary",
  className = "",
  label = "Call to Book Now",
}: PhoneCTAProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all";

  const variants = {
    primary: "bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg shadow-lg shadow-sky-600/25 hover:shadow-sky-600/40",
    secondary:
      "bg-white hover:bg-slate-50 text-sky-700 border-2 border-sky-600 px-6 py-3 text-base",
    hero: "bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 text-lg shadow-lg shadow-amber-500/30 font-bold",
  };

  return (
    <a
      href={`tel:${site.phoneTel}`}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span aria-hidden>📞</span>
      {label}
    </a>
  );
}

export function PhoneDisplay({ large = false }: { large?: boolean }) {
  return (
    <a
      href={`tel:${site.phoneTel}`}
      className={`font-bold text-sky-600 hover:text-sky-700 transition-colors ${
        large ? "text-3xl sm:text-4xl tracking-tight" : "text-xl"
      }`}
    >
      {site.phone}
    </a>
  );
}
