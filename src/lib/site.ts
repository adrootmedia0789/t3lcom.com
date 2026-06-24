export const site = {
  name: "Telcom Enterprises LLC",
  shortName: "telcom",
  tagline: "Flight Specialists",
  domain: "t3lcom.com",
  phone: "(877) 835-2666",
  phoneTel: "+18778352666",
  email: "contact@t3lcom.com",
  address: {
    street: "3645 N Sagewood Circle",
    city: "Mesa",
    state: "AZ",
    zip: "85207",
    country: "United States",
  },
  hours: "Open 24/7",
  legalEntity: "Telcom Enterprises LLC",
  disclosure:
    "Telcom Enterprises LLC is an independent travel agency. We are not an airline. We are an accredited agency that sells tickets for over 100 airlines on behalf of clients. Service fees may apply.",
} as const;

export const services = [
  {
    icon: "✈",
    title: "Flight Bookings",
    description:
      "Our agents search domestic and international flights across 100+ airlines to find options that fit your travel schedule. We walk you through fares, stopovers, and cabin choices before confirming anything.",
    cta: "Book a flight",
    href: "#book",
  },
  {
    icon: "🔄",
    title: "Flight Changes",
    description:
      "Dates changed? Route shifted? Our specialists check airline availability, assess your fare conditions, and process changes efficiently — keeping your trip on track with minimal disruption.",
    cta: "Change a booking",
    href: "#book",
  },
  {
    icon: "⬆",
    title: "Seat Upgrades",
    description:
      "We search live upgrade availability across your airline's cabin classes — from extra legroom to business class — and present your options with clear pricing before processing.",
    cta: "Explore upgrades",
    href: "#book",
  },
  {
    icon: "✕",
    title: "Cancellations",
    description:
      "Our agents assess your fare rules and explain every refund option clearly — cash refund, travel credit, or fee waiver eligibility — then process your cancellation with your authorization.",
    cta: "Cancel a flight",
    href: "#book",
  },
] as const;

export const process = [
  {
    step: 1,
    title: "Call Telcom Enterprises LLC",
    description:
      "Dial our booking line any time — day or night. A live travel specialist picks up without automated menus.",
  },
  {
    step: 2,
    title: "Tell Us Your Plans",
    description:
      "Share your travel dates, destinations, passenger details, and any preferences. We listen and search accordingly.",
  },
  {
    step: 3,
    title: "Review Your Options",
    description:
      "We present available flights with complete pricing — every fee disclosed before you commit to anything.",
  },
  {
    step: 4,
    title: "Confirmed and Ready",
    description:
      "Your booking confirmation is sent directly to you. We stay available for any post-booking support you need.",
  },
] as const;

export const advantages = [
  {
    icon: "🗺",
    title: "Route Expertise",
    description:
      "Our agents know airline routing, stopover options, and connecting flight patterns — helping you find smart itineraries, not just cheap fares.",
  },
  {
    icon: "🌍",
    title: "100+ Airlines",
    description:
      "We're an accredited agency authorized to book tickets across more than 100 domestic and international carriers on your behalf.",
  },
  {
    icon: "💬",
    title: "Upfront Pricing",
    description:
      "Every fare, fee, and service charge is stated clearly before your booking is confirmed. No surprises, no hidden costs.",
  },
  {
    icon: "🛡",
    title: "Authorized Charges Only",
    description:
      "We never process a payment without your explicit verbal approval on the call. Your financial security is a top priority.",
  },
  {
    icon: "🕐",
    title: "24/7 Availability",
    description:
      "Our agents are available every hour of every day — because travel needs don't wait for business hours.",
  },
  {
    icon: "📋",
    title: "Complete Travel Support",
    description:
      "From initial booking through changes, upgrades, and cancellations — one agency, one number, all the help you need.",
  },
] as const;

export const trustBadges = [
  { icon: "🔒", label: "Secure Bookings" },
  { icon: "✅", label: "Transparent Fees" },
  { icon: "🌐", label: "100+ Airlines" },
  { icon: "📞", label: "24/7 Live Support" },
  { icon: "🇺🇸", label: "USA-Based Agency" },
] as const;
