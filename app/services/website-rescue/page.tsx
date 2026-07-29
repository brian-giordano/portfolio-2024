import Link from "next/link";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Website Rescue | Brian Giordano",
  description:
    "Diagnose and resolve the issues holding your website back. Stop losing customers to a broken, slow, or outdated website.",
};

export default function WebsiteRescuePage() {
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
        {/* Hero Section */}
        <div className="mb-6">
          <span className="bg-gold/10 text-gold text-xs font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-gold/20">
            7–14 Days Turnaround
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-primary font-extrabold text-ivoryWhite tracking-tight mb-6 leading-tight">
          Website Rescue
        </h1>
        <p className="text-xl md:text-2xl text-silverMist font-subheader mb-16 leading-snug">
          Stop losing customers to a broken, slow, or outdated website.
        </p>

        {/* The Symptoms */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-gold inline-block"></span>
            The Symptoms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Your site is embarrassingly slow or frequently breaks.",
              "It looks terrible or doesn't work right on mobile phones.",
              "You get plenty of traffic but nobody actually calls or buys.",
              "You know it needs fixing, but don't want to start from scratch.",
            ].map((symptom, i) => (
              <div key={i} className="bg-charcoal border border-white/5 p-6 rounded-2xl">
                <p className="text-silverMist text-lg leading-relaxed">{symptom}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Fix */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-gold inline-block"></span>
            The Fix
          </h2>
          <div className="space-y-8 pl-0 md:pl-12 border-l-0 md:border-l border-white/10 relative">
            
            <div className="relative">
              <div className="hidden md:flex absolute -left-[60px] top-1 w-6 h-6 rounded-full border-4 border-darkSlate bg-gold items-center justify-center"></div>
              <h3 className="text-xl font-bold text-ivoryWhite mb-2">
                1. Deep Diagnostic
              </h3>
              <p className="text-silverMist text-lg leading-relaxed">
                I conduct a thorough review of your codebase, hosting environment, and user experience to find exactly where you're losing people.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:flex absolute -left-[60px] top-1 w-6 h-6 rounded-full border-4 border-darkSlate bg-gold items-center justify-center"></div>
              <h3 className="text-xl font-bold text-ivoryWhite mb-2">
                2. The Rebuild
              </h3>
              <p className="text-silverMist text-lg leading-relaxed">
                I repair, optimize, and rebuild up to 4–6 core pages. I'll fix mobile responsiveness, crush page speed bottlenecks, and clean up the design so it converts.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:flex absolute -left-[60px] top-1 w-6 h-6 rounded-full border-4 border-darkSlate bg-gold items-center justify-center"></div>
              <h3 className="text-xl font-bold text-ivoryWhite mb-2">
                3. The Handoff
              </h3>
              <p className="text-silverMist text-lg leading-relaxed">
                Your site goes live on a stable, lightning-fast foundation. You get a training video showing you exactly how to use it, plus 30 days of post-launch support.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing / CTA Card */}
        <div className="bg-charcoal border border-gold/20 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-ivoryWhite mb-6">
            What You Get
          </h2>
          <ul className="space-y-4 mb-10">
            {[
              "Full technical and UX diagnostic",
              "Repair or rebuild of 4–6 core pages",
              "Mobile optimization & speed improvements",
              "Basic SEO cleanup",
              "Domain and hosting transfer assistance",
              "Handoff training video + 30-day post-launch support",
            ].map((item, i) => (
              <li key={i} className="global-bullet text-silverMist text-lg">
                {item}
              </li>
            ))}
          </ul>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-silverMist font-mono uppercase tracking-[0.2em] text-xs mb-2">
                Fixed Investment
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl md:text-4xl font-bold text-ivoryWhite tracking-tight">$2,200 – $2,400</p>
              </div>
              <p className="text-silverMist text-sm mt-2">50% to start, 50% at launch.</p>
            </div>

            <div className="w-full md:w-auto">
              <Link
                href="/site-health-check"
                className="inline-block w-full md:w-auto text-center bg-gold text-darkSlate font-bold py-4 px-10 rounded-xl hover:bg-gold/90 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]"
              >
                Discuss My Site
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-gold inline-block"></span>
            Common Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-charcoal border border-white/5 p-6 rounded-2xl">
              <h4 className="font-bold text-ivoryWhite text-lg mb-2">Do I have to switch hosts?</h4>
              <p className="text-silverMist">Not necessarily, but if your current host is the reason your site is slow or insecure, I will strongly recommend and help facilitate a move to a better platform.</p>
            </div>
            <div className="bg-charcoal border border-white/5 p-6 rounded-2xl">
              <h4 className="font-bold text-ivoryWhite text-lg mb-2">What if my site is too far gone?</h4>
              <p className="text-silverMist">If a rescue isn't the most cost-effective path, I'll tell you upfront during our initial Site Health Check and recommend a Foundation Site build instead.</p>
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
