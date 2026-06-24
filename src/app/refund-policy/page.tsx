import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refund Policy | ${site.name}`,
};

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <LegalPage title="Refund Policy">
        <p>
          Refunds for flight bookings are governed primarily by the fare rules of the operating
          airline. {site.name} assists you in understanding and processing eligible refunds.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Airline Refunds</h2>
        <p>
          Depending on your ticket type, refunds may be issued as a cash refund to your original
          payment method, an airline travel credit, or may not be available for non-refundable
          fares. Our agents explain all options before processing.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Agency Service Fees</h2>
        <p>
          Agency service fees are generally non-refundable once services have been rendered.
          If a booking cannot be completed due to an error on our part, applicable service fees
          may be refunded at our discretion.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Processing Time</h2>
        <p>
          Airline refunds typically take 7–21 business days to appear on your statement, depending
          on the airline and your financial institution. We provide confirmation when refund
          requests are submitted.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">How to Request a Refund</h2>
        <p>
          Call {site.phone} to speak with a specialist. We will review your booking, explain
          refund eligibility, and process authorized requests on your behalf.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Contact</h2>
        <p>
          Questions about refunds? Email {site.email} or call {site.phone}, available 24/7.
        </p>
      </LegalPage>
      <Footer />
    </>
  );
}
