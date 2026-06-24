import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneCTA, PhoneDisplay } from "@/components/PhoneCTA";
import { site, services, process, advantages, trustBadges } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live Travel Specialists Available Now
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6">
              Flights Booked Fast, by{" "}
              <em className="text-sky-300 not-italic">Real Agents</em> Who Know the Routes
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              At {site.name}, experienced travel specialists search 100+ airlines and book the
              right flight for you — all through a single, no-hassle phone call, available
              around the clock.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <PhoneCTA variant="hero" label="Call to Book a Flight" />
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 text-lg transition-colors"
              >
                Manage Booking →
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg">
              {[
                { value: "100+", label: "Airlines Covered" },
                { value: "24/7", label: "Live Agent Line" },
                { value: "USA", label: "Based Agency" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phone CTA Banner */}
        <section id="book" className="bg-sky-600 text-white py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-sky-100 text-sm font-medium uppercase tracking-wider mb-2">
              Call Our Flight Booking Line
            </p>
            <PhoneDisplay large />
            <p className="text-sky-100 mt-2 text-sm">
              Live agents available 24 hours · 7 days a week
            </p>
          </div>
        </section>

        {/* Quick Services */}
        <section className="py-8 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
              What We Handle for You
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm font-medium text-slate-700">
              {services.map((s) => (
                <span key={s.title} className="flex items-center gap-2">
                  <span aria-hidden>{s.icon}</span>
                  {s.title}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600"
                >
                  <span aria-hidden className="text-lg">
                    {badge.icon}
                  </span>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 sm:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-2">
                Our Services
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Full Flight Support Over a Single Call
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                From first booking to post-departure changes, our {site.name} specialists handle
                every flight need across 100+ airlines — all by phone, 24/7.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-200 transition-all"
                >
                  <span className="text-3xl mb-4 block" aria-hidden>
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="text-sky-600 hover:text-sky-700 font-semibold text-sm"
                  >
                    {service.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-2">
                The {site.name} Process
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Flight Booked in Four Steps
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                We keep it simple. One phone call connects you with a specialist who handles
                the search, comparison, booking, and confirmation — all in a single conversation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step) => (
                <div key={step.step} className="relative text-center sm:text-left">
                  <div className="w-12 h-12 bg-sky-600 text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 to-sky-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Talk to a Flight Specialist Right Now
            </h2>
            <p className="text-slate-300 mb-8">
              No bots, no wait menus — a real travel agent answers every call.
            </p>
            <PhoneDisplay large />
            <p className="text-slate-400 text-sm mt-3 mb-8">
              Available 24/7 · Domestic & International Flights · USA-Based Agency
            </p>
            <PhoneCTA variant="hero" />
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-2">
                Why {site.name}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                The Advantage of Flying with {site.name}
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Personal guidance, wide airline access, and complete fee transparency — we bring
                together everything online booking platforms can&apos;t offer.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 border border-slate-200"
                >
                  <span className="text-2xl mb-3 block" aria-hidden>
                    {item.icon}
                  </span>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
