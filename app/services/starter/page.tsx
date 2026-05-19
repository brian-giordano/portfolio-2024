import Link from 'next/link';
import Footer from '@/components/ui/Footer';

export const metadata = {
  title: 'Starter Site',
  description: 'Custom, high-converting 5-page websites built right the first time for new businesses.'
};

export default function StarterPage() {
  return (
    <div className="bg-darkSlate min-h-screen flex flex-col pt-8">
      <header className="px-6 md:px-12 py-4">
        <Link href="/" className="text-ivoryWhite hover:text-gold font-primary font-bold text-xl uppercase tracking-widest transition-colors">
          &larr; Brian Giordano
        </Link>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="mb-4">
          <span className="bg-mysticTeal/10 text-mysticTeal text-xs font-mono font-bold px-3 py-1.5 rounded uppercase tracking-wider border border-mysticTeal/20">
            Built for Growth
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-primary font-extrabold text-gold uppercase mb-6 leading-tight">
          A solid foundation for your business.
        </h1>
        <p className="text-xl text-ivoryWhite font-subheader mb-12">
          For businesses with no real web presence yet. Get a custom, high-converting website built right the first time. No generic templates, just clean design tailored to your brand.
        </p>

        <div className="bg-charcoal border border-white/5 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-6">What&apos;s Included:</h2>
          <ul className="space-y-4 mb-10">
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Custom design aligned with your brand
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Up to 5 pages built in Webflow (or Next.js for complex needs)
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Basic SEO & analytics setup
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              CMS training + handoff video
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              2 revision rounds included
            </li>
          </ul>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-silverMist font-mono uppercase tracking-widest text-sm mb-2">Starting At</p>
              <p className="text-3xl font-bold text-ivoryWhite">$1,500</p>
            </div>
            
            <div className="w-full sm:w-auto text-center sm:text-right">
              <a
                href="https://buy.stripe.com/test_6oUcN6dnHgbHbXs1GE7bW04"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-gold text-darkSlate font-bold py-4 px-10 rounded-xl hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
              >
                Claim Founding Rate — $1,000 Now
              </a>
              <p className="text-gold/60 text-xs font-mono mt-3">Valid for first 3 clients</p>
            </div>
          </div>
        </div>
        
        <div className="text-center py-16 mt-8 border-t border-white/5">
           <h3 className="text-2xl font-bold text-ivoryWhite mb-4">Have questions before we start building?</h3>
           <p className="text-silverMist mb-8 text-lg">Send me a quick message and we can chat about your vision.</p>
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
