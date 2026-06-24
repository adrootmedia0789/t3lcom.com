import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalPage title="Terms & Conditions">
        <p>
          By using the services of {site.name}, you agree to the following terms and conditions.
          Please read them carefully before booking.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Agency Services</h2>
        <p>
          {site.name} is an independent travel agency. We are not an airline. We act as an
          intermediary to search and book flights on your behalf across 100+ airlines. All
          bookings are subject to the fare rules and conditions of the operating airline.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Service Fees</h2>
        <p>
          Service fees may apply to bookings, changes, cancellations, and other agency services.
          All fees are disclosed verbally and require your explicit approval before any charge is
          processed.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Payment Authorization</h2>
        <p>
          We will never process a payment without your explicit verbal authorization during a
          phone call. By authorizing a charge, you confirm that you are the cardholder or have
          permission to use the payment method provided.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Booking Confirmations</h2>
        <p>
          Upon completion of a booking, you will receive a confirmation via email. It is your
          responsibility to verify all passenger names, dates, times, and destinations before
          travel.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Changes and Cancellations</h2>
        <p>
          Changes and cancellations are governed by the airline&apos;s fare rules. Our agents will
          explain applicable fees, refund eligibility, and options before processing any request.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Limitation of Liability</h2>
        <p>
          {site.name} is not liable for airline schedule changes, cancellations, delays, lost
          baggage, or other events beyond our control. Our liability is limited to the service
          fees paid to us.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Contact</h2>
        <p>
          For questions about these terms, contact us at {site.email} or {site.phone}.
        </p>
      </LegalPage>
      <Footer />
    </>
  );
}
