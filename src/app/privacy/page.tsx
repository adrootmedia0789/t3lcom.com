import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <LegalPage title="Privacy Policy">
        <p>
          {site.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
          This Privacy Policy explains how we collect, use, and protect your personal information
          when you use our phone-based flight booking services.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Information We Collect</h2>
        <p>When you call us or request our services, we may collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name, email address, and phone number</li>
          <li>Passenger details required for flight bookings</li>
          <li>Payment information (processed only with your verbal authorization)</li>
          <li>Travel preferences and itinerary details</li>
          <li>Call recordings for quality assurance and dispute resolution</li>
        </ul>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Search, book, change, upgrade, or cancel flights on your behalf</li>
          <li>Communicate booking confirmations and travel updates</li>
          <li>Process payments authorized by you during phone calls</li>
          <li>Improve our customer service and comply with legal obligations</li>
        </ul>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Information Sharing</h2>
        <p>
          We share your information only with airlines, payment processors, and service providers
          necessary to fulfill your travel requests. We do not sell your personal information to
          third parties.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your personal and payment
          information. Payment details are handled through secure, PCI-compliant channels.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal data by
          contacting us at {site.email} or calling {site.phone}.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Contact</h2>
        <p>
          {site.name}
          <br />
          {site.email}
          <br />
          {site.phone}
        </p>
      </LegalPage>
      <Footer />
    </>
  );
}
