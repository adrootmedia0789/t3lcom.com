import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Disclaimer | ${site.name}`,
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <LegalPage title="Disclaimer">
        <p>
          The information provided on this website and through our phone services is for general
          informational purposes related to flight booking agency services.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Independent Agency</h2>
        <p>
          {site.name} is an independent travel agency and is not affiliated with, endorsed by,
          or sponsored by any airline. Airline names, logos, and trademarks are the property of
          their respective owners and are used for identification purposes only.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">No Airline Representation</h2>
        <p>
          We do not operate flights. We book tickets on behalf of clients as an accredited travel
          agency. For flight-specific issues including delays, cancellations, and baggage, the
          operating airline&apos;s policies apply.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Pricing and Availability</h2>
        <p>
          Fares and availability change frequently. Quotes provided during phone calls reflect
          real-time data at the time of the call and are subject to change until a booking is
          confirmed and payment is authorized.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Third-Party Links</h2>
        <p>
          This website may contain links to third-party websites. We are not responsible for the
          content or practices of external sites.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">Contact</h2>
        <p>
          For questions, call {site.phone} or email {site.email}.
        </p>
      </LegalPage>
      <Footer />
    </>
  );
}
