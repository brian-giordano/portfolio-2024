import Link from "next/link";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Foundation Site | Brian Giordano",
  description:
    "A high-performing, custom website that converts visitors into customers. Built for local businesses that want to stand out.",
};

export default function FoundationSitePage() {
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
            2–3.5 Weeks Turnaround
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-primary font-extrabold text-ivoryWhite tracking-tight mb-6 leading-tight">
          Foundation Site
        </h1>
        <p className="text-xl md:text-2xl text-silverMist font-subheader mb-16 leading-snug">
          A high-performing, custom website that converts visitors into customers.
        </p>

        {/* The Problem */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-gold inline-block"></span>
            The Problem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "You have zero web presence, and potential clients can't find you.",
              "Your current site is an embarrassing template that doesn't reflect your actual quality of work.",
              "You're tired of piecing together DIY builders that always look cheap.",
              "You need a professional hub to send paid traffic or referrals to.",
            ].map((symptom, i) => (
              <div key={i} className="bg-charcoal border border-white/5 p-6 rounded-2xl">
                <p className="text-silverMist text-lg leading-relaxed">{symptom}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Solution */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ivoryWhite mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-gold inline-block"></span>
            The Solution
          </h2>
          <div className="space-y-8 pl-0 md:pl-12 border-l-0 md:border-l border-white/10 relative">
            
            <div className="relative">
              <div className="hidden md:flex absolute -left-[60px] top-1 w-6 h-6 rounded-full border-4 border-darkSlate bg-gold items-center justify-center"></div>
              <h3 className="text-xl font-bold text-ivoryWhite mb-2">
                1. Strategy & Sitemap
              </h3>
              <p className="text-silverMist text-lg leading-relaxed">
                We start by mapping out exactly what your site needs to say and how visitors should navigate it to maximize conversions.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:flex absolute -left-[60px] top-1 w-6 h-6 rounded-full border-4 border-darkSlate bg-gold items-center justify-center"></div>
              <h3 className="text-xl font-bold text-ivoryWhite mb-2">
                2. Custom Design & Build
              </h3>
              <p className="text-silverMist text-lg leading-relaxed">
                No off-the-shelf templates. I design and build up to 5–6 pages tailored to your brand, optimized for speed, and structured for local SEO.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:flex absolute -left-[60px] top-1 w-6 h-6 rounded-full border-4 border-darkSlate bg-gold items-center justify-center"></div>
              <h3 className="text-xl font-bold text-ivoryWhite mb-2">
                3. Launch & Handoff
              </h3>
              <p className="text-silverMist text-lg leading-relaxed">
                We go live with analytics tracking in place. I provide a recorded training video so you can easily update text and photos yourself, plus 30 days of support.
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
              "Strategy kickoff + custom sitemap",
              "Custom design (not a template) — up to 5–6 pages",
              "Clean Content Management System (CMS)",
              "Local SEO + analytics setup",
              "Training video + live walkthrough",
              "2 revision rounds + 30-day post-launch support",
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
                <p className="text-3xl md:text-4xl font-bold text-ivoryWhite tracking-tight">$3,800 – $4,200</p>
              </div>
              <p className="text-silverMist text-sm mt-2">50% to start, 50% at launch.</p>
            </div>

            <div className="w-full md:w-auto">
              <Link
                href="/site-health-check"
                className="inline-block w-full md:w-auto text-center bg-gold text-darkSlate font-bold py-4 px-10 rounded-xl hover:bg-gold/90 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]"
              >
                Start My Project
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
              <h4 className="font-bold text-ivoryWhite text-lg mb-2">Do I have to pay all at once?</h4>
              <p className="text-silverMist">No. Standard projects are split into two payments: 50% down to secure your spot in the schedule, and 50% right before we push the site live.</p>
            </div>
            <div className="bg-charcoal border border-white/5 p-6 rounded-2xl">
              <h4 className="font-bold text-ivoryWhite text-lg mb-2">Will I be able to edit the site myself?</h4>
              <p className="text-silverMist">Yes! You'll have an easy-to-use editor to update text, photos, and team members without breaking the design. I also provide a custom training video showing you exactly how to do it.</p>
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
