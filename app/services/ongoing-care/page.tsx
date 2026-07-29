import Link from "next/link";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Ongoing Care | Brian Giordano",
  description:
    "Keep your site fast, secure, and up-to-date—without you thinking about it.",
};

export default function OngoingCarePage() {
  return (
    <div className="bg-darkSlate min-h-screen flex flex-col pt-8 selection:bg-gold selection:text-darkSlate">
      <header className="px-6 md:px-12 py-5 max-w-7xl mx-auto w-full">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-silverMist hover:text-ivoryWhite transition-colors text-sm font-semibold uppercase tracking-wider group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>
          BACK TO SERVICES
        </Link>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 md:py-20 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-primary font-extrabold text-ivoryWhite tracking-tight mb-6 leading-tight">
          Ongoing Care
        </h1>
        <p className="text-xl md:text-2xl text-silverMist font-subheader mb-16 leading-snug">
          Keep your site fast, secure, and up-to-date — without you thinking about it.
        </p>

        {/* The Reality */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-gold inline-block"></span>
            The Reality
          </h2>
          <div className="bg-charcoal border border-white/5 p-8 rounded-2xl">
            <p className="text-silverMist text-lg leading-relaxed mb-6">
              Websites aren't "set it and forget it." Plugins break, core web vitals shift, and your business naturally evolves. If you ignore your site, it slowly degrades — dropping in search rankings and frustrating visitors.
            </p>
            <p className="text-silverMist text-lg leading-relaxed">
              Ongoing Care is my retainer service designed to ensure your website is an asset that appreciates, not a liability that rots. You get a dedicated web partner handling everything from security to content updates.
            </p>
          </div>
        </div>

        {/* Tiers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-gold inline-block"></span>
            Choose Your Tier
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Care Tier */}
            <div className="bg-charcoal border border-white/10 rounded-2xl p-8 flex flex-col h-full hover:border-gold/30 transition-colors">
              <div className="flex justify-between items-baseline mb-6">
                <h4 className="text-ivoryWhite font-bold text-2xl">Care</h4>
                <div className="text-right">
                  <span className="text-3xl font-bold text-ivoryWhite">$350</span>
                  <span className="text-silverMist">/mo</span>
                </div>
              </div>
              <p className="text-silverMist mb-8">For businesses that need reliable hosting and regular content updates.</p>
              
              <ul className="space-y-4 text-silverMist mb-8 flex-1">
                <li className="flex items-start">
                  <span className="text-gold mr-4 mt-1 text-[12px]">●</span>
                  Premium hosting + SSL + security monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-4 mt-1 text-[12px]">●</span>
                  Up to 3–4 hours of content updates & minor edits
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-4 mt-1 text-[12px]">●</span>
                  Monthly light health check (broken links, speed)
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-4 mt-1 text-[12px]">●</span>
                  Standard priority email support
                </li>
              </ul>
              
              <Link
                href="/site-health-check"
                className="block w-full text-center border-2 border-gold text-gold font-bold py-4 rounded-xl hover:bg-gold hover:text-darkSlate transition-colors mt-auto"
              >
                Get Started
              </Link>
            </div>

            {/* Care+ Tier */}
            <div className="bg-charcoal border border-gold/40 rounded-2xl p-8 flex flex-col h-full relative overflow-hidden shadow-2xl hover:border-gold transition-colors">
              <div className="absolute top-0 right-0 bg-gold text-darkSlate text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Recommended
              </div>
              <div className="flex justify-between items-baseline mb-6">
                <h4 className="text-ivoryWhite font-bold text-2xl">Care+</h4>
                <div className="text-right">
                  <span className="text-3xl font-bold text-ivoryWhite">$550<span className="text-xl">+</span></span>
                  <span className="text-silverMist">/mo</span>
                </div>
              </div>
              <p className="text-silverMist mb-8">For businesses actively growing and optimizing their site.</p>
              
              <ul className="space-y-4 text-silverMist mb-8 flex-1">
                <li className="flex items-start">
                  <span className="text-gold mr-4 mt-1 text-[12px]">●</span>
                  Everything in the standard Care tier
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-4 mt-1 text-[12px]">●</span>
                  Up to 7–8 hours of updates, edits, and new pages
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-4 mt-1 text-[12px]">●</span>
                  Proactive suggestions + conversion tweaks
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-4 mt-1 text-[12px]">●</span>
                  Priority 48-hour turnaround
                </li>
              </ul>
              
              <Link
                href="/site-health-check"
                className="block w-full text-center bg-gold text-darkSlate font-bold py-4 rounded-xl hover:bg-gold/90 transition-colors mt-auto shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-gold inline-block"></span>
            The Terms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-black/30 border border-white/5 p-8 rounded-2xl">
            <div>
              <h4 className="text-ivoryWhite font-bold uppercase tracking-[0.2em] mb-4 text-sm opacity-70">
                Included:
              </h4>
              <p className="text-silverMist leading-relaxed">
                Hosting, security, CMS updates, content additions, link checking, performance tuning, and email support.
              </p>
            </div>
            <div>
              <h4 className="text-ivoryWhite font-bold uppercase tracking-[0.2em] mb-4 text-sm opacity-70">
                Not Included:
              </h4>
              <p className="text-silverMist leading-relaxed">
                Full site redesigns, branding, highly complex custom applications, or third-party ad campaign management.
              </p>
            </div>
            <div className="sm:col-span-2 pt-6 border-t border-white/5">
              <p className="text-silverMist text-sm leading-relaxed">
                <strong className="text-ivoryWhite">Billing & Commitment:</strong> Billed monthly via Stripe. No long-term lock-in. 30-day cancellation notice required. You own all of your assets.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
}
