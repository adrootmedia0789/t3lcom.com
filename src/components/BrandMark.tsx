import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type BrandMarkProps = {
  variant?: "header" | "footer";
};

export function BrandMark({ variant = "header" }: BrandMarkProps) {
  const isFooter = variant === "footer";

  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
      <Image
        src="/logos/adroot-icon.png"
        alt={`${site.name} logo`}
        width={isFooter ? 44 : 40}
        height={isFooter ? 44 : 40}
        className="rounded-lg"
        priority={variant === "header"}
      />
      <span
        className={`font-bold leading-tight ${
          isFooter ? "text-white text-lg" : "text-slate-900 text-lg"
        }`}
      >
        {site.shortName}
        <span
          className={`block text-xs font-medium tracking-wide ${
            isFooter ? "text-sky-400" : "text-sky-600"
          }`}
        >
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
