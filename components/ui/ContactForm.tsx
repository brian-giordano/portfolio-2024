// components/ContactForm.tsx
import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ToastContainer, { ToastContainerRef } from "./ToastContainer";
import Modal from "./Modal";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
  consent?: boolean; // New field for consent
}

// Validation schema using Yup
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required").max(100, "Name is too long"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
    .max(100, "Email is too long"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
  honeypot: Yup.string().max(0, "Honeypot should be empty"),
  consent: Yup.boolean().oneOf([true], "You must accept the privacy policy"), // Consent validation
});

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toastContainerRef = useRef<ToastContainerRef>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // Security measure: Rate limiting
  const checkRateLimit = (): boolean => {
    const lastSubmission = localStorage.getItem("lastFormSubmission");
    const now = new Date().getTime();

    if (lastSubmission && now - parseInt(lastSubmission) < 60000) {
      // 1 minute
      toastContainerRef.current?.addToast(
        "Please wait before submitting again.",
      );
      return false;
    }

    localStorage.setItem("lastFormSubmission", now.toString());
    return true;
  };

  // Security measure: Input sanitization
  const sanitizeInput = (input: string): string => {
    return input.replace(/[^\w. ]/gi, (c) => {
      return "&#" + c.charCodeAt(0) + ";";
    });
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Security check: Web3Forms Botcheck
    if (data.botcheck) {
      console.log("Potential bot detected");
      return;
    }

    if (!checkRateLimit()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "96cebeae-a016-4cfe-9063-259effb11937",
          name: data.name,
          email: data.email,
          subject: "New message from briangiordano.com",
          message: data.message,
          redirect: "https://briangiordano.com/#thank-you",
          botcheck: data.botcheck
        }),
      });

      const result = await response.json();

      if (result.success) {
        toastContainerRef.current?.addToast("Message sent successfully!");
        reset();
      } else {
        throw new Error(result.message || "Error sending message");
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      let errorMessage = "An unknown error occurred. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toastContainerRef.current?.addToast(
        `Error sending message: ${errorMessage}. Please try again.`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#1e1e2f]/80 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl p-6 md:p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" style={{ colorScheme: 'dark' }}>
        {/* Web3Forms Hidden Fields inside React Logic */}
        <input type="hidden" value="96cebeae-a016-4cfe-9063-259effb11937" {...register("access_key")} />
        <input type="hidden" value="New message from briangiordano.com" {...register("subject")} />
        <input type="hidden" value="https://briangiordano.com/#thank-you" {...register("redirect")} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label
              className="block text-silverMist font-medium text-xs tracking-wider mb-1.5 uppercase"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              {...register("name")}
              className={`w-full p-3.5 rounded-xl bg-[#0f172a] border text-ivoryWhite text-base focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 ${
                errors.name
                  ? "border-lightCrimson bg-lightCrimson/10"
                  : "border-white/10 focus:border-gold hover:border-white/20"
              }`}
              style={{ backgroundColor: '#0f172a' }}
            />
            {errors.name && (
              <p className="text-lightCrimson text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-silverMist font-medium text-xs tracking-wider mb-1.5 uppercase"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              {...register("email")}
              className={`w-full p-3.5 rounded-xl bg-[#0f172a] border text-ivoryWhite text-base focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 ${
                errors.email
                  ? "border-lightCrimson bg-lightCrimson/10"
                  : "border-white/10 focus:border-gold hover:border-white/20"
              }`}
              style={{ backgroundColor: '#0f172a' }}
            />
            {errors.email && (
              <p className="text-lightCrimson text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label
            className="block text-silverMist font-medium text-xs tracking-wider mb-1.5 uppercase"
            htmlFor="subject_select"
          >
            Subject
          </label>
          <div className="relative">
            <select
              id="subject_select"
              {...register("subject")}
              className={`w-full p-3.5 rounded-xl bg-[#0f172a] border text-ivoryWhite text-base focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 appearance-none ${
                errors.subject
                  ? "border-lightCrimson bg-lightCrimson/10"
                  : "border-white/10 focus:border-gold hover:border-white/20"
              }`}
              style={{ backgroundColor: '#0f172a' }}
            >
              <option value="" className="bg-[#0f172a]">Select a subject</option>
              <option value="general" className="bg-[#0f172a]">General Inquiry</option>
              <option value="job" className="bg-[#0f172a]">Job Opportunity</option>
              <option value="collaboration" className="bg-[#0f172a]">Collaboration</option>
              <option value="other" className="bg-[#0f172a]">Other</option>
            </select>
            {/* Custom Arrow */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-silverMist text-xs">
              ▼
            </div>
          </div>
          {errors.subject && (
            <p className="text-lightCrimson text-xs mt-1">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label
            className="block text-silverMist font-medium text-xs tracking-wider mb-1.5 uppercase"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message..."
            {...register("message")}
            className={`w-full p-3.5 rounded-xl bg-[#0f172a] border text-ivoryWhite text-base focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 custom-scrollbar ${
              errors.message
                ? "border-lightCrimson bg-lightCrimson/10"
                : "border-white/10 focus:border-gold hover:border-white/20"
            }`}
            rows={6}
            style={{ backgroundColor: '#0f172a' }}
          />
          {errors.message && (
            <p className="text-lightCrimson text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Botcheck field */}
        <input
          type="checkbox"
          style={{ display: "none" }}
          className="hidden"
          {...register("botcheck")}
        />

        <div className="flex items-center">
          <input
            className="w-4 h-4 rounded border-white/10 bg-[#0f172a] text-gold focus:ring-gold transition-colors hover:border-gold/50 cursor-pointer"
            type="checkbox"
            id="consent"
            {...register("consent")}
          />
          <label htmlFor="consent" className="ml-2 text-silverMist text-xs cursor-pointer">
            I agree to the{" "}
            <span
              className="text-gold hover:text-ivoryWhite underline transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              privacy policy
            </span>
          </label>
          {errors.consent && (
            <p className="text-lightCrimson text-xs ml-4">{errors.consent.message}</p>
          )}
        </div>



        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3.5 rounded-xl text-base font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center ${
              isSubmitting
                ? "bg-mediumCharcoal text-silverMist cursor-not-allowed"
                : "bg-gold text-darkSlate hover:bg-ivoryWhite shadow-[0_4px_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    d="M4 12a8 8 0 018-8"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
      <ToastContainer ref={toastContainerRef} />

      {/* Modal for Privacy Policy */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="container mx-auto mb-10 md:p-4">
          <div className="flex flex-col md:flex-row bg-charcoal p-4">
            {" "}
            {/* Flex layout */}
            <div className="font-primary text-ivoryWhite flex flex-col justify-between w-full md:w-2/3 p-4">
              <h1 className="text-xl font-bold mb-2">Privacy Policy</h1>
              <p>
                Your privacy is important to us. This privacy policy explains
                how we collect, use, and protect your information when you
                submit a form on our website.
              </p>

              {/* Introduction Section */}
              <h2>Information We Collect</h2>
              <p>
                When you submit a form, we may collect the following
                information:
              </p>
              <ul>
                <li>
                  Personal identification information (Name and email address.)
                </li>
                {/* Add any other data you're collecting via the form */}
                {/* Example: <li>Phone number, address</li> */}
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect in the following ways:</p>
              <ul>
                <li>To respond to your inquiries or submissions</li>
                {/* Add any other purposes you use the collected data */}
                {/* Example: <li>To send promotional emails</li> */}
              </ul>

              <h2>How We Protect Your Information</h2>
              <p>
                We implement a variety of security measures to maintain the
                safety of your personal information when you submit a form on
                our website. These measures include:
              </p>
              <ul>
                <li>HTTPS Encryption</li>
                <li>Email Transmission Security</li>
                <li>Regular security audits and updates</li>
                {/* Add any other security measures you're taking */}
                {/* Example: <li>Secure server hosting</li> */}
              </ul>

              <h2>Sharing Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally
                identifiable information to outside parties unless we provide
                users with advance notice. This does not include website hosting
                partners and other parties who assist us in operating our
                website, conducting our business, or serving our users, so long
                as those parties agree to keep this information confidential.
              </p>

              {/* Update based on your specific conditions */}
              <p>
                We may also release information when its release is appropriate
                to comply with the law, enforce our site policies, or protect
                ours or others&apos; rights, property, or safety.
              </p>

              <h2>Your Consent</h2>
              <p>
                By using our site and submitting a form, you consent to our
                privacy policy.
              </p>

              <h2>Changes to Our Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this
                page. You are advised to review this privacy policy periodically
                for any changes.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions regarding this privacy policy, you may
                contact us using the contact form:
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactForm;
