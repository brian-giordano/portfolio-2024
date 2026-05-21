import Link from "next/link";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Site Rescue",
  description:
    "Diagnose and resolve the issues holding your website back with my Site Rescue service.",
};

export default function SiteRescuePage() {
  return (
    <div className="bg-darkSlate min-h-screen flex flex-col pt-8">
      <header className="px-6 md:px-12 py-5">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-silverMist hover:text-gold transition-colors text-sm tracking-[0.5px] group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">
            ←
          </span>
          BACK TO SERVICES
        </Link>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full">
        {/* Hero Section */}
        <div className="mb-4">
          <span className="bg-gold/10 text-gold text-xs font-mono font-bold px-3 py-1.5 rounded uppercase tracking-wider border border-gold/20">
            Fast Turnaround
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-primary font-extrabold text-gold uppercase mb-6 leading-tight">
          Diagnose and resolve the issues holding your website back.
        </h1>
        <p className="text-xl text-ivoryWhite font-subheader mb-16">
          A targeted service to identify structural, performance, or design
          flaws and implement lasting fixes so your site can perform reliably.
        </p>

        {/* Who This Is For */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-6 border-b border-white/10 pb-4">
            Who This Is For
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Businesses with older websites that frequently break or load
              slowly.
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Sites that look poor or function improperly on mobile devices.
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Founders who need their current site repaired rather than starting
              entirely from scratch.
            </li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-6 border-b border-white/10 pb-4">
            How It Works
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <span className="text-gold font-mono uppercase tracking-widest text-sm font-bold">
                  Step 1
                </span>
                <h3 className="text-xl font-bold text-ivoryWhite mt-1">
                  The Audit
                </h3>
              </div>
              <div className="md:w-3/4 text-silverMist text-lg leading-relaxed">
                I conduct a thorough review of your codebase, hosting
                environment, and user experience to identify the root causes of
                the issues you&apos;re experiencing.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <span className="text-gold font-mono uppercase tracking-widest text-sm font-bold">
                  Step 2
                </span>
                <h3 className="text-xl font-bold text-ivoryWhite mt-1">
                  The Repair
                </h3>
              </div>
              <div className="md:w-3/4 text-silverMist text-lg leading-relaxed">
                I rebuild, optimize, and repair up to 5 core pages. This
                includes addressing mobile responsiveness, page speed
                bottlenecks, and broken functionality.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <span className="text-gold font-mono uppercase tracking-widest text-sm font-bold">
                  Step 3
                </span>
                <h3 className="text-xl font-bold text-ivoryWhite mt-1">
                  The Handoff
                </h3>
              </div>
              <div className="md:w-3/4 text-silverMist text-lg leading-relaxed">
                Your site goes live on a stable foundation. I provide 30 days of
                post-launch support to ensure everything continues to run
                smoothly.
              </div>
            </div>
          </div>
        </div>

        {/* Expectations & Timeline */}
        <div className="bg-black/30 border border-white/5 rounded-2xl p-8 mb-16">
          <h2 className="text-xl font-bold text-ivoryWhite mb-4">
            Expectations & Timeline
          </h2>
          <p className="text-silverMist leading-relaxed mb-4">
            A standard Site Rescue typically takes{" "}
            <strong className="text-ivoryWhite font-normal">
              1 to 2 weeks
            </strong>{" "}
            depending on the complexity of the issues and how quickly we can
            transfer hosting or domain access if needed.
          </p>
          <p className="text-silverMist leading-relaxed">
            I&apos;ll need access to your current hosting environment, domain
            registrar, and a clear list of the specific issues you&apos;ve been
            encountering.
          </p>
        </div>

        {/* Pricing / CTA Card */}
        <div className="bg-charcoal border border-white/5 rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-ivoryWhite mb-6">
            Included in Site Rescue:
          </h2>
          <ul className="space-y-4 mb-10">
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Full technical and UX audit
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Repair or rebuild of up to 5 core pages
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Mobile optimization & performance improvements
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Domain and hosting transfer assistance
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              30-day bug fix support
            </li>
          </ul>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-silverMist font-mono uppercase tracking-widest text-sm mb-2">
                Starting At
              </p>
              <p className="text-3xl font-bold text-ivoryWhite">$600</p>
            </div>

            <div className="w-full sm:w-auto text-center sm:text-right">
              <a
                href="https://buy.stripe.com/test_14AbJ25Vf3oV2mS8527bW02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-gold text-darkSlate font-bold py-4 px-10 rounded-xl hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
              >
                Claim Founding Rate — $400 Now
              </a>
              <p className="text-gold/60 text-xs font-mono mt-3">
                Valid for first 3 clients
              </p>
            </div>
          </div>
        </div>

        {/* Soft CTA */}
        <div className="text-center py-16 mt-8 border-t border-white/5">
          <h3 className="text-2xl font-bold text-ivoryWhite mb-4">
            Have questions first?
          </h3>
          <p className="text-silverMist mb-8 text-lg">
            If you aren&apos;t sure if a rescue is the right fit, we can review
            your site together.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-transparent border-2 border-gold text-gold font-bold py-4 px-10 rounded-xl hover:bg-gold/10 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_0_25px_rgba(255,215,0,0.2)]"
          >
            Send me a message
          </Link>
        </div>
      </main>

      <div className="mt-auto px-6 max-w-7xl mx-auto w-full">
        <Footer />
      </div>
    </div>
  );
}
