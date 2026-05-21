import Link from "next/link";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Starter Site",
  description: "A solid, professional foundation for your new business.",
};

export default function StarterPage() {
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
          <span className="bg-mysticTeal/10 text-mysticTeal text-xs font-mono font-bold px-3 py-1.5 rounded uppercase tracking-wider border border-mysticTeal/20">
            Built for Growth
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-primary font-extrabold text-gold uppercase mb-6 leading-tight">
          A solid, professional foundation for your business.
        </h1>
        <p className="text-xl text-ivoryWhite font-subheader mb-16">
          Custom, highly functional websites built right the first time. No
          generic templates, just a clean design tailored to effectively
          represent your brand.
        </p>

        {/* Who This Is For */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-6 border-b border-white/10 pb-4">
            Who This Is For
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              New businesses that need a credible online presence to start
              attracting clients.
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Founders graduating from DIY builders who want a site that
              reflects their actual value.
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Service-based professionals who need a clear, conversion-focused
              brochure site.
            </li>
          </ul>
        </div>

        {/* Not Just a Template */}
        <div className="bg-black/30 border border-gold/20 rounded-2xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-gold mb-4">
            Beyond the Template
          </h2>
          <p className="text-silverMist text-lg leading-relaxed mb-6">
            A Starter site isn&apos;t a pre-packaged theme where we just swap
            out logos. Generic templates often come bloated with unused code,
            resulting in slow load times, clunky mobile experiences, and rigid
            designs that don&apos;t actually fit your content.
          </p>
          <p className="text-silverMist text-lg leading-relaxed">
            With a Starter site, you&apos;re investing in a{" "}
            <strong className="text-ivoryWhite font-normal">
              purpose-built sales tool
            </strong>
            . Every button placement, whitespace decision, and technical
            optimization is made to establish instant credibility with your
            audience, load in under two seconds, and guide visitors smoothly
            toward contacting you or purchasing your services. No bloat, no
            friction—just results.
          </p>
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
                  Discovery & Strategy
                </h3>
              </div>
              <div className="md:w-3/4 text-silverMist text-lg leading-relaxed">
                We start with a kickoff call to outline your goals and target
                audience. We&apos;ll map out a clear 5-page sitemap and gather
                your existing branding assets so we hit the ground running.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <span className="text-gold font-mono uppercase tracking-widest text-sm font-bold">
                  Step 2
                </span>
                <h3 className="text-xl font-bold text-ivoryWhite mt-1">
                  Wireframing & Design
                </h3>
              </div>
              <div className="md:w-3/4 text-silverMist text-lg leading-relaxed">
                Before writing any code, I create high-fidelity mockups of your
                core pages. We focus on visual hierarchy, ensuring your primary
                calls-to-action are impossible to miss, and we review together
                until the aesthetic perfectly matches your brand identity.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <span className="text-gold font-mono uppercase tracking-widest text-sm font-bold">
                  Step 3
                </span>
                <h3 className="text-xl font-bold text-ivoryWhite mt-1">
                  Development & Technical SEO
                </h3>
              </div>
              <div className="md:w-3/4 text-silverMist text-lg leading-relaxed">
                I translate the approved designs into a responsive, lightweight
                codebase. During this phase, I implement proper heading
                structures, semantic HTML, compressed imagery, and custom meta
                tags so you rank well on Google from day one.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <span className="text-gold font-mono uppercase tracking-widest text-sm font-bold">
                  Step 4
                </span>
                <h3 className="text-xl font-bold text-ivoryWhite mt-1">
                  Launch & Handoff
                </h3>
              </div>
              <div className="md:w-3/4 text-silverMist text-lg leading-relaxed">
                After comprehensive browser testing and final revisions, we push
                the site live. I don&apos;t just hand you the keys and leave—I
                record a personalized, custom video walkthrough and provide a
                1-on-1 CMS training session so you feel 100% confident managing
                your own content moving forward.
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
            Most Starter projects are completed in{" "}
            <strong className="text-ivoryWhite font-normal">
              2 to 3 weeks
            </strong>
            , assuming we receive your content and feedback in a timely manner.
          </p>
          <p className="text-silverMist leading-relaxed">
            To keep the project on schedule, I&apos;ll need your final copy,
            branding assets (logos, colors), and high-resolution images provided
            promptly during the discovery phase.
          </p>
        </div>

        {/* Pricing / CTA Card */}
        <div className="bg-charcoal border border-white/5 rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-mysticTeal/5 rounded-bl-full pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-ivoryWhite mb-6">
            Included in Starter:
          </h2>
          <ul className="space-y-4 mb-10">
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Custom design aligned with your brand
            </li>
            <li className="flex items-start text-silverMist text-lg">
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>
              Up to 5 pages built in Webflow (or Next.js)
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
              <span className="text-gold mr-4 mt-1.5 flex-shrink-0">●</span>2
              revision rounds included
            </li>
          </ul>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-silverMist font-mono uppercase tracking-widest text-sm mb-2">
                Starting At
              </p>
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
            Send me a message to check availability or ask any questions.
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
