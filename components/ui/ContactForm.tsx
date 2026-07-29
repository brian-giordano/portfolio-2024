// components/ui/ContactForm.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ToastContainer, { ToastContainerRef } from "./ToastContainer";

interface FormData {
  name: string;
  businessName: string;
  email: string;
  websiteUrl?: string;
  subject: string;
  message: string;
  honeypot?: string;
  access_key?: string;
  redirect?: string;
  botcheck?: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required").max(100),
  businessName: Yup.string().required("Business name is required").max(100),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .max(100),
  websiteUrl: Yup.string(),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required").max(1000),
  honeypot: Yup.string().max(0),
  access_key: Yup.string(),
  redirect: Yup.string(),
  botcheck: Yup.string(),
});

interface ContactFormProps {
  prefilledSubject?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ prefilledSubject }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const toastContainerRef = useRef<ToastContainerRef>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      access_key: "96cebeae-a016-4cfe-9063-259effb11937",
      subject: prefilledSubject || "",
      redirect: "https://briangiordano.com/#thank-you",
    },
  });

  useEffect(() => {
    if (prefilledSubject) setValue("subject", prefilledSubject);
  }, [prefilledSubject, setValue]);

  const checkRateLimit = (): boolean => {
    const last = localStorage.getItem("lastFormSubmission");
    const now = Date.now();
    if (last && now - parseInt(last) < 60000) {
      toastContainerRef.current?.addToast(
        "Please wait before submitting again.",
      );
      return false;
    }
    localStorage.setItem("lastFormSubmission", now.toString());
    return true;
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
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

  if (isSuccess) {
    return (
      <div className="w-full bg-[#161b2a] py-8 px-5 text-center">
        <div className="bg-[#0f172a] border border-gold/20 p-8 rounded-2xl">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-400 text-2xl">✓</span>
          </div>
          <h4 className="text-ivoryWhite font-bold text-2xl mb-3">Got it!</h4>
          <p className="text-silverMist text-base mb-6 leading-relaxed">
            I'll review your message and reply within one business day with next steps. In the meantime, you can also book a call directly:
          </p>
          <a
            href="https://cal.com/briangiordano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 rounded-xl bg-gold text-darkSlate font-bold text-sm tracking-[1px] uppercase hover:bg-ivoryWhite active:scale-[0.985] transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] mb-6"
          >
            Book a Call
          </a>
          <div>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-gold hover:text-ivoryWhite text-sm font-semibold underline transition-colors"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#161b2a] py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-5">
        <input type="hidden" {...register("access_key")} />
        <input type="hidden" {...register("redirect")} />

        {/* Name + Business Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
              Your Name *
            </label>
            <input
              {...register("name")}
              placeholder="Jane Doe"
              className="w-full rounded-2xl bg-[#0f172a] border border-white/10 px-5 py-3.5 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all text-[15px]"
            />
            {errors.name && (
              <p className="text-lightCrimson text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
              Business Name *
            </label>
            <input
              {...register("businessName")}
              placeholder="Acme Co."
              className="w-full rounded-2xl bg-[#0f172a] border border-white/10 px-5 py-3.5 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all text-[15px]"
            />
            {errors.businessName && (
              <p className="text-lightCrimson text-xs mt-1">
                {errors.businessName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email + Website URL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
              Email *
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="jane@acme.com"
              className="w-full rounded-2xl bg-[#0f172a] border border-white/10 px-5 py-3.5 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all text-[15px]"
            />
            {errors.email && (
              <p className="text-lightCrimson text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
              Current Website URL (optional)
            </label>
            <input
              {...register("websiteUrl")}
              placeholder="e.g., www.acme.com (or 'none yet')"
              className="w-full rounded-2xl bg-[#0f172a] border border-white/10 px-5 py-3.5 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all text-[15px]"
            />
          </div>
        </div>

        {/* Service Interest */}
        <div>
          <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
            Service Interest
          </label>

          <div className="relative">
            <select
              {...register("subject")}
              className="w-full appearance-none rounded-2xl bg-[#0f172a] border border-white/10 px-5 py-3.5 pr-12 text-ivoryWhite focus:border-gold transition-all text-[15px]"
            >
              <option value="">Select a service</option>
              <option value="Site Health Check">Site Health Check</option>
              <option value="Website Rescue">Website Rescue</option>
              <option value="Foundation Site">Foundation Site</option>
              <option value="Ongoing Care">Ongoing Care</option>
              <option value="Full-time Employment">Full-time Employment</option>
              <option value="General Question">General Question</option>
            </select>

            {/* Custom chevron */}
            <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-silverMist">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Problem */}
        <div>
          <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
            What's the biggest problem you're trying to solve? *
          </label>
          <textarea
            {...register("message")}
            placeholder="In a sentence or two — what's frustrating you about your current website or online presence?"
            rows={4}
            className="w-full rounded-2xl bg-[#0f172a] border border-white/10 px-5 py-3.5 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all resize-y text-[15px]"
          />
          {errors.message && (
            <p className="text-lightCrimson text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <input type="text" className="hidden" {...register("botcheck")} />

        {/* Submit */}
        <div className="pt-1 space-y-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl bg-gold text-darkSlate font-bold text-base tracking-[2px] uppercase hover:bg-ivoryWhite active:scale-[0.985] transition-all disabled:opacity-70 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          >
            {isSubmitting ? "Sending..." : "Send My Inquiry"}
          </button>
          <p className="text-center text-silverMist/60 text-xs font-mono">
            No obligation · Fixed prices · I reply within one business day
          </p>
        </div>
      </form>

      <ToastContainer ref={toastContainerRef} />
    </div>
  );
};

export default ContactForm;
