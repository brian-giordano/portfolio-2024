"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ToastContainer, { ToastContainerRef } from "@/components/ui/ToastContainer";

interface HealthCheckFormData {
  name: string;
  businessName: string;
  email: string;
  websiteUrl?: string;
  frustration: string;
  subject: string;
  access_key?: string;
  botcheck?: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required").max(100),
  businessName: Yup.string().required("Business name is required").max(100),
  email: Yup.string().email("Invalid email").required("Email is required").max(100),
  websiteUrl: Yup.string(),
  frustration: Yup.string().required("This field is required").max(500),
  subject: Yup.string().required(),
  access_key: Yup.string(),
  botcheck: Yup.string(),
});

export default function SiteHealthCheckPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const toastContainerRef = useRef<ToastContainerRef>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HealthCheckFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      access_key: "96cebeae-a016-4cfe-9063-259effb11937",
      subject: "Site Health Check Request",
    },
  });

  const checkRateLimit = (): boolean => {
    const last = localStorage.getItem("lastFormSubmission");
    const now = Date.now();
    if (last && now - parseInt(last) < 60000) {
      toastContainerRef.current?.addToast("Please wait before submitting again.");
      return false;
    }
    localStorage.setItem("lastFormSubmission", now.toString());
    return true;
  };

  const onSubmit: SubmitHandler<HealthCheckFormData> = async (data) => {
    if (data.botcheck) return;
    if (!checkRateLimit()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        toastContainerRef.current?.addToast("Request sent successfully.");
        reset();
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error: unknown) {
      let msg = "An unknown error occurred. Please try again.";
      if (error instanceof Error) msg = error.message;
      toastContainerRef.current?.addToast(`Error: ${msg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-darkSlate min-h-screen text-ivoryWhite selection:bg-gold selection:text-darkSlate">
      <Header currentSection="none" onNavClick={(id) => router.push("/#" + id)} />

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <Link href="/" className="text-gold hover:text-ivoryWhite transition-colors flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
            <span aria-hidden="true">&larr;</span> Back to Home
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Copy */}
          <div className="flex-1 lg:max-w-xl">
            <span className="inline-block bg-gold/10 text-gold text-xs font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-gold/20 mb-6">
              100% Free Site Health Check
            </span>
            
            <h1 className="text-4xl md:text-5xl font-primary font-extrabold tracking-tight mb-6 leading-tight">
              Find out what's really going on with your website.
            </h1>
            
            <p className="text-lg text-silverMist leading-relaxed mb-10">
              Book a free 30-minute Site Health Check. I'll review your site and send you a short, honest scorecard — speed, mobile experience, SEO basics, and where you're losing customers. No pitch. No pressure.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-primary font-bold text-ivoryWhite uppercase tracking-widest mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gold inline-block"></span>
                  What You'll Get
                </h3>
                <ul className="space-y-4">
                  {[
                    "Speed & performance score",
                    "Mobile experience review",
                    "Clarity of offer assessment",
                    "Conversion friction analysis",
                    "Technical health snapshot",
                    "2–3 specific, prioritized recommendations",
                  ].map((item, i) => (
                    <li key={i} className="global-bullet text-silverMist">
                      <span className="text-gold mr-3 mt-0.5 text-[10px]">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-primary font-bold text-ivoryWhite uppercase tracking-widest mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gold inline-block"></span>
                  Who This Is For
                </h3>
                <ul className="space-y-4">
                  {[
                    "Local businesses in Connecticut and New England",
                    "Business owners who suspect their site isn't working but aren't sure why",
                    "Anyone considering a new site and wanting a professional second opinion",
                  ].map((item, i) => (
                    <li key={i} className="global-bullet text-silverMist">
                      <span className="text-gold mr-3 mt-0.5 text-[10px]">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-charcoal border border-white/5 p-6 rounded-2xl">
                <h4 className="font-primary font-bold text-ivoryWhite mb-3">FAQ</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gold text-sm mb-1">Is this really free?</p>
                    <p className="text-silverMist text-sm">Yes, absolutely. You'll get a real, actionable scorecard with no strings attached and no obligation to hire me.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gold text-sm mb-1">What if I don't have a website yet?</p>
                    <p className="text-silverMist text-sm">That's fine — we'll use the time to understand your business and map out what a first site should look like.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 lg:max-w-md w-full">
            <div className="bg-charcoal border border-gold/20 rounded-2xl p-8 shadow-2xl sticky top-24">
              <h3 className="text-2xl font-primary font-bold mb-6">Request Your Check</h3>
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl text-center"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-400 text-2xl">✓</span>
                  </div>
                  <h4 className="text-ivoryWhite font-bold text-xl mb-2">Got it!</h4>
                  <p className="text-silverMist text-sm mb-6">
                    I'll review your info and reply within one business day to schedule your Site Health Check.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-gold hover:text-ivoryWhite text-sm font-semibold underline transition-colors"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <input type="hidden" {...register("access_key")} />
                  <input type="hidden" {...register("subject")} />
                  
                  <div>
                    <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
                      Your Name *
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all text-sm"
                    />
                    {errors.name && <p className="text-lightCrimson text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
                      Business Name *
                    </label>
                    <input
                      {...register("businessName")}
                      placeholder="Acme Co."
                      className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all text-sm"
                    />
                    {errors.businessName && <p className="text-lightCrimson text-xs mt-1">{errors.businessName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="jane@acme.com"
                      className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all text-sm"
                    />
                    {errors.email && <p className="text-lightCrimson text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
                      Current Website URL (If Any)
                    </label>
                    <input
                      {...register("websiteUrl")}
                      placeholder="www.acme.com"
                      className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
                      Biggest frustration with your site *
                    </label>
                    <textarea
                      {...register("frustration")}
                      placeholder="In a sentence or two..."
                      rows={3}
                      className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all text-sm resize-y"
                    />
                    {errors.frustration && <p className="text-lightCrimson text-xs mt-1">{errors.frustration.message}</p>}
                  </div>

                  <input type="text" className="hidden" {...register("botcheck")} />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gold text-darkSlate font-bold text-sm tracking-[1px] uppercase hover:bg-gold/90 transition-all disabled:opacity-70 shadow-[0_0_15px_rgba(212,175,55,0.3)] mt-2"
                  >
                    {isSubmitting ? "Sending..." : "Book My Free Check"}
                  </button>
                  
                  <p className="text-center text-silverMist/60 text-[10px] mt-4 font-mono">
                    100% FREE. No pitch, no obligation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ToastContainer ref={toastContainerRef} />
    </div>
  );
}
