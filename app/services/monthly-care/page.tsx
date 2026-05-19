import Link from 'next/link';
import Footer from '@/components/ui/Footer';

export const metadata = {
  title: 'Monthly Care',
  description: 'Optional retainer plans to keep your site sharp without thinking about it.'
};

export default function MonthlyCarePage() {
  return (
    <div className="bg-darkSlate min-h-screen flex flex-col pt-8">
      <header className="px-6 md:px-12 py-4">
        <Link href="/" className="text-ivoryWhite hover:text-gold font-primary font-bold text-xl uppercase tracking-widest transition-colors">
          &larr; Brian Giordano
        </Link>
      </header>

      <main className="flex-grow max-w-5xl mx-auto px-6 py-16 w-full">
        <h1 className="text-4xl md:text-5xl font-primary font-extrabold text-gold uppercase mb-6 leading-tight max-w-3xl">
          Keep your site running smoothly, without the stress.
        </h1>
        <p className="text-xl text-ivoryWhite font-subheader mb-12 max-w-3xl">
          Optional retainer plans to ensure your website stays secure, updated, and sharp while you focus on running your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Lite Tier */}
          <div className="bg-charcoal border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-white/10 transition-colors shadow-xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-ivoryWhite mb-2">Monthly Care Lite</h2>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-4xl font-bold text-ivoryWhite">$250</span>
                <span className="text-silverMist">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start text-silverMist">
                <span className="text-gold mr-3 mt-1 flex-shrink-0">●</span>
                Up to 3 hours of content updates & standard support
              </li>
              <li className="flex items-start text-silverMist">
                <span className="text-gold mr-3 mt-1 flex-shrink-0">●</span>
                Hosting & security included
              </li>
              <li className="flex items-start text-silverMist">
                <span className="text-gold mr-3 mt-1 flex-shrink-0">●</span>
                Routine link checks
              </li>
            </ul>
            <a
              href="https://buy.stripe.com/dRm4gA88c0w6f1x4SxfrW01"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border-2 border-gold text-gold font-bold py-4 rounded-xl hover:bg-gold/10 transition-colors"
            >
              Subscribe — Lite
            </a>
          </div>

          {/* Pro Tier */}
          <div className="bg-charcoal border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-gold/30 transition-colors shadow-[0_0_30px_rgba(255,215,0,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gold text-darkSlate text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
               Recommended
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-ivoryWhite mb-2">Monthly Care Pro</h2>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-4xl font-bold text-ivoryWhite">$450</span>
                <span className="text-silverMist">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start text-silverMist">
                <span className="text-gold mr-3 mt-1 flex-shrink-0">●</span>
                Up to 8 hours of updates & edits
              </li>
              <li className="flex items-start text-silverMist">
                <span className="text-gold mr-3 mt-1 flex-shrink-0">●</span>
                Priority 48-hour turnaround
              </li>
              <li className="flex items-start text-silverMist">
                <span className="text-gold mr-3 mt-1 flex-shrink-0">●</span>
                Proactive maintenance & optimization
              </li>
              <li className="flex items-start text-silverMist">
                <span className="text-gold mr-3 mt-1 flex-shrink-0">●</span>
                Hosting & security included
              </li>
            </ul>
            <a
              href="https://buy.stripe.com/00w3cw6047Yyg5BgBffrW02"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gold text-darkSlate font-bold py-4 rounded-xl hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
            >
              Subscribe — Pro
            </a>
          </div>
        </div>

        <div className="bg-black/30 border border-white/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
            <div>
              <h3 className="text-ivoryWhite font-bold uppercase tracking-widest mb-4 opacity-70">
                What&apos;s Included:
              </h3>
              <p className="text-silverMist leading-relaxed">
                Hosting, security monitoring, content updates, routine link checks, and priority edits.
              </p>
            </div>
            <div>
              <h3 className="text-ivoryWhite font-bold uppercase tracking-widest mb-4 opacity-70">
                Not Included:
              </h3>
              <p className="text-silverMist leading-relaxed">
                Third-party outages, full redesigns, adding entirely new pages, or custom development beyond Webflow&apos;s native capabilities.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5">
            <h3 className="text-ivoryWhite font-bold uppercase tracking-widest mb-2 opacity-70 text-xs">
              Terms:
            </h3>
            <p className="text-silverMist text-xs leading-relaxed">
              Billed monthly via Stripe. Requires a 30-day cancellation notice. A service agreement is required before onboarding.
            </p>
          </div>
        </div>

        <div className="text-center py-16 mt-16 border-t border-white/5">
           <h3 className="text-2xl font-bold text-ivoryWhite mb-4">Still have questions?</h3>
           <p className="text-silverMist mb-8 text-lg">Send me a quick message and we can figure out if a care plan is right for you.</p>
           <Link href="/#contact" className="inline-block bg-transparent border-2 border-gold text-gold font-bold py-4 px-10 rounded-xl hover:bg-gold/10 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_0_25px_rgba(255,215,0,0.2)]">
              Send me a message
           </Link>
        </div>
      </main>

      <div className="mt-auto px-6 max-w-7xl mx-auto w-full">
        <Footer />
      </div>
    </div>
  )
}
