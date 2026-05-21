// components/ui/ContactForm.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ToastContainer, { ToastContainerRef } from "./ToastContainer";
import Modal from "./Modal";

interface FormData {
  name: string;
  email: string;
  subject: string;
  details: string;
  message: string;
  honeypot?: string;
  consent?: boolean;
  access_key?: string;
  redirect?: string;
  botcheck?: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required").max(100),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .max(100),
  subject: Yup.string().required("Subject is required"),
  details: Yup.string().required("Details are required").max(1000),
  message: Yup.string().required("Message is required").min(10).max(1000),
  honeypot: Yup.string().max(0),
  consent: Yup.boolean().oneOf([true], "You must accept the privacy policy"),
  access_key: Yup.string(),
  redirect: Yup.string(),
  botcheck: Yup.string(),
});

interface ContactFormProps {
  prefilledSubject?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ prefilledSubject }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const toastContainerRef = useRef<ToastContainerRef>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      access_key: "96cebeae-a016-4cfe-9063-259effb11937",
      subject: prefilledSubject || "",
      redirect: "https://briangiordano.com/#thank-you",
    },
  });

  const selectedSubject = watch("subject");

  const getDetailsConfig = (subject: string) => {
    switch (subject) {
      case "Site Rescue":
        return {
          label: "Tell me about your current website",
          placeholder: "What's broken? How old is the site?",
        };
      case "Starter Build":
        return {
          label: "Tell me about your new project",
          placeholder: "What kind of business? Target audience?",
        };
      case "Monthly Care":
        return {
          label: "What kind of ongoing support do you need?",
          placeholder: "Describe your current site and needs",
        };
      default:
        return {
          label: "How can I help?",
          placeholder: "Tell me what you're looking for...",
        };
    }
  };

  const detailsConfig = getDetailsConfig(selectedSubject);

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
        toastContainerRef.current?.addToast(
          "Message sent successfully. I'll reply within 24 hours.",
        );
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
    <div className="w-full bg-[#161b2a] py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-5">
        <input type="hidden" {...register("access_key")} />
        <input type="hidden" {...register("redirect")} />

        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
              Name
            </label>
            <input
              {...register("name")}
              placeholder="Your name"
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
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="you@business.com"
              className="w-full rounded-2xl bg-[#0f172a] border border-white/10 px-5 py-3.5 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all text-[15px]"
            />
            {errors.email && (
              <p className="text-lightCrimson text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
            Subject
          </label>

          <div className="relative">
            <select
              {...register("subject")}
              className="w-full appearance-none rounded-2xl bg-[#0f172a] border border-white/10 px-5 py-3.5 pr-12 text-ivoryWhite focus:border-gold transition-all text-[15px]"
            >
              <option value="">Select a subject</option>
              <option value="Site Rescue">Site Rescue</option>
              <option value="Starter Build">Starter Build</option>
              <option value="Monthly Care">Monthly Care</option>
              <option value="general">General Inquiry</option>
              <option value="job">Job Opportunity</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Other</option>
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

          {selectedSubject === "Monthly Care" && (
            <p className="text-gold text-xs mt-1.5 tracking-wide">
              I’ll send you the service agreement to review and e-sign.
            </p>
          )}
        </div>

        {/* Dynamic Details */}
        <div>
          <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
            {detailsConfig.label}
          </label>
          <textarea
            {...register("details")}
            placeholder={detailsConfig.placeholder}
            rows={3}
            className="w-full rounded-2xl bg-[#0f172a] border border-white/10 px-5 py-3.5 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all resize-y text-[15px]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-silverMist text-[10px] tracking-[2px] mb-1.5 uppercase font-mono">
            Message
          </label>
          <textarea
            {...register("message")}
            placeholder="Tell me more about your project or goals..."
            rows={5}
            className="w-full rounded-2xl bg-[#0f172a] border border-white/10 px-5 py-3.5 text-ivoryWhite placeholder:text-silverMist/40 focus:border-gold transition-all resize-y text-[15px]"
          />
          {errors.message && (
            <p className="text-lightCrimson text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <input type="text" className="hidden" {...register("botcheck")} />

        {/* Consent + Submit */}
        <div className="pt-1 space-y-5">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              {...register("consent")}
              className="mt-1 h-4 w-4 accent-gold cursor-pointer"
            />
            <label
              htmlFor="consent"
              className="text-silverMist text-[13px] leading-snug"
            >
              I agree to the{" "}
              <button
                type="button"
                onClick={() => setShowPrivacyModal(true)}
                className="text-gold underline hover:text-ivoryWhite transition-colors"
              >
                privacy policy
              </button>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl bg-gold text-darkSlate font-bold text-base tracking-[2px] uppercase hover:bg-ivoryWhite active:scale-[0.985] transition-all disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      <ToastContainer ref={toastContainerRef} />

      <Modal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        title="Privacy Policy"
      >
        <div className="space-y-6 text-[15px] leading-relaxed text-silverMist">
          <p>
            Your privacy is important to me. This policy explains how I collect
            and protect your information.
          </p>

          <div>
            <h4 className="font-semibold text-ivoryWhite mb-2">
              Information Collected via Forms
            </h4>
            <p>
              When you submit the contact form, I collect your name, email
              address, and message details so I can respond to your inquiry.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-ivoryWhite mb-2">
              Website Analytics
            </h4>
            <p>
              This site uses <strong>Google Analytics 4</strong> and{" "}
              <strong>Google Tag Manager</strong> to understand how visitors
              interact with the site. These tools collect anonymous data such as
              pages visited, time spent, device type, and approximate location.
              This data is used only to improve the website.
            </p>
            <p className="mt-2 text-sm">
              Learn how Google processes this data:{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline hover:text-ivoryWhite"
              >
                Google’s partner sites policy
              </a>
              .
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-ivoryWhite mb-2">
              How Your Information Is Used
            </h4>
            <p>
              I only use the information you provide to respond to your inquiry.
              I do not sell or share your personal information for marketing
              purposes.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactForm;
