import Link from 'next/link';
import Footer from '@/components/ui/Footer';

export const metadata = {
  title: 'Monthly Care',
  description: 'Reliable, ongoing support so you can focus on your work.'
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
          Reliable, ongoing support so you can focus on your work.
        </h1>
        <p className="text-xl text-ivoryWhite font-subheader mb-16 max-w-3xl">
          Optional retainer plans to ensure your website remains secure, updated, and effective, allowing you to dedicate your time to running your business rather than managing your site.
        </p>

        {/* Side-by-Side Comparison Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-8 text-center md:text-left">Compare Care Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Lite Tier */}
            <div className="bg-charcoal border border-white/5 rounded-2xl flex flex-col overflow-hidden hover:border-white/10 transition-colors shadow-xl">
              <div className="p-8 border-b border-white/5 flex-grow">
                <h3 className="text-2xl font-bold text-ivoryWhite mb-2">Monthly Care Lite</h3>
                <div className="flex items-baseline gap-2 mt-4 mb-6">
                  <span className="text-4xl font-bold text-ivoryWhite">$250</span>
                  <span className="text-silverMist">/month</span>
                </div>
                <p className="text-silverMist text-sm mb-8 leading-relaxed h-auto md:h-16">
                  Ideal for stable businesses that require occasional content updates and baseline technical peace of mind.
                </p>
                
                <h4 className="text-xs uppercase tracking-widest font-bold text-gold mb-4">Included Features</h4>
                <ul className="space-y-4">
                  <li className="flex items-start text-silverMist text-sm">
                    <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Up to 3 hours of content updates & edits
                  </li>
                  <li className="flex items-start text-silverMist text-sm">
                    <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Hosting & SSL management
                  </li>
                  <li className="flex items-start text-silverMist text-sm">
                    <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Routine security monitoring
                  </li>
                  <li className="flex items-start text-silverMist text-sm">
                    <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Standard support response time
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-black/20">
                <a
                  href="https://buy.stripe.com/dRm4gA88c0w6f1x4SxfrW01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white text-darkSlate font-bold py-4 rounded-xl hover:bg-gray-200 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  Select Lite
                </a>
              </div>
            </div>

            {/* Pro Tier */}
            <div className="bg-charcoal border border-gold/30 rounded-2xl flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.05)]">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50"></div>
              <div className="absolute top-4 right-4 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-gold/20">
                 Recommended
              </div>
              <div className="p-8 border-b border-white/5 flex-grow">
                <h3 className="text-2xl font-bold text-ivoryWhite mb-2">Monthly Care Pro</h3>
                <div className="flex items-baseline gap-2 mt-4 mb-6">
                  <span className="text-4xl font-bold text-ivoryWhite">$450</span>
                  <span className="text-silverMist">/month</span>
                </div>
                <p className="text-silverMist text-sm mb-8 leading-relaxed h-auto md:h-16">
                  Designed for active, growing businesses that require consistent updates, priority service, and proactive optimization.
                </p>
                
                <h4 className="text-xs uppercase tracking-widest font-bold text-gold mb-4">Included Features</h4>
                <ul className="space-y-4">
                  <li className="flex items-start text-ivoryWhite font-medium text-sm">
                    <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Up to 8 hours of updates & edits
                  </li>
                  <li className="flex items-start text-ivoryWhite font-medium text-sm">
                    <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Priority 48-hour turnaround
                  </li>
                  <li className="flex items-start text-ivoryWhite font-medium text-sm">
                    <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Proactive performance optimization
                  </li>
                  <li className="flex items-start text-silverMist text-sm">
                    <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Hosting & SSL management
                  </li>
                  <li className="flex items-start text-silverMist text-sm">
                    <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Routine security monitoring
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-black/20">
                <a
                  href="https://buy.stripe.com/00w3cw6047Yyg5BgBffrW02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gold text-darkSlate font-bold py-4 rounded-xl hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
                >
                  Select Pro
                </a>
              </div>
            </div>
            
          </div>
        </div>

        {/* Expectations & Terms */}
        <div className="bg-black/30 border border-white/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
            <div>
              <h3 className="text-ivoryWhite font-bold uppercase tracking-widest mb-4 opacity-70">
                What&apos;s Included:
              </h3>
              <p className="text-silverMist leading-relaxed">
                General hosting, active security monitoring, ongoing content updates, routine broken link checks, and priority technical edits.
              </p>
            </div>
            <div>
              <h3 className="text-ivoryWhite font-bold uppercase tracking-widest mb-4 opacity-70">
                Not Included:
              </h3>
              <p className="text-silverMist leading-relaxed">
                Outages caused by third-party services, comprehensive full-site redesigns, entirely new page builds, or custom development exceeding Webflow&apos;s native capabilities.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5">
            <h3 className="text-ivoryWhite font-bold uppercase tracking-widest mb-2 opacity-70 text-xs">
              Terms:
            </h3>
            <p className="text-silverMist text-xs leading-relaxed">
              Plans are billed monthly via Stripe. A standard 30-day cancellation notice applies. We will sign a clear service agreement prior to beginning work.
            </p>
          </div>
        </div>

        {/* Soft CTA */}
        <div className="text-center py-16 mt-16 border-t border-white/5">
           <h3 className="text-2xl font-bold text-ivoryWhite mb-4">Have questions first?</h3>
           <p className="text-silverMist mb-8 text-lg">Send me a quick message and we can figure out which care plan is right for your workflow.</p>
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
