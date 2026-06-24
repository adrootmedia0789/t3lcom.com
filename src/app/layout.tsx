import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${site.name} | Phone-Based Flight Booking Agency`,
  description: `Book flights with real travel agents 24/7. ${site.name} searches 100+ airlines and handles bookings, changes, upgrades, and cancellations by phone. Call ${site.phone}.`,
  keywords: [
    "flight booking",
    "travel agency",
    "phone booking",
    "flight changes",
    "seat upgrades",
    "flight cancellation",
  ],
  openGraph: {
    title: `${site.name} | Flight Specialists`,
    description: `Call ${site.phone} to book flights with live agents, 24/7.`,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
