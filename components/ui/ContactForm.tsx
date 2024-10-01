// components/ContactForm.tsx
import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "./Button";
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
        "Please wait before submitting again."
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
    // Security check: Honeypot
    if (data.honeypot) {
      console.log("Potential bot detected");
      return;
    }

    if (!checkRateLimit()) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData();

      // Append sanitized form data
      formData.append("name", sanitizeInput(data.name));
      formData.append("email", sanitizeInput(data.email));
      formData.append("subject", sanitizeInput(data.subject));
      formData.append("message", sanitizeInput(data.message));

      // Use FormSubmit's built-in CAPTCHA
      formData.append("_captcha", "true"); // Ensure this line is included

      const response = await fetch(
        "https://formsubmit.co/65b50a450eb5648ef931291f1b87e905", // Replace with your FormSubmit endpoint
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toastContainerRef.current?.addToast("Message sent successfully!");
        reset();
      } else {
        const errorText = await response.text();
        throw new Error(
          `Error sending message. Status: ${response.status}, Response: ${errorText}`
        );
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      let errorMessage = "An unknown error occurred. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toastContainerRef.current?.addToast(
        `Error sending message: ${errorMessage}. Please try again.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-charcoal rounded-lg shadow-lg px-8 py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-ivoryWhite mb-1" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`w-full p-4 rounded bg-gray-800 text-darkSlate text-xl ${
              errors.name
                ? "border-lightCrimson border-4 bg-pink"
                : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-lightCrimson">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-ivoryWhite mb-1" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`w-full p-4 rounded bg-gray-800 text-darkSlate text-xl ${
              errors.email
                ? "border-lightCrimson border-4 bg-pink"
                : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-lightCrimson">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-ivoryWhite mb-1" htmlFor="subject">
            Subject:
          </label>
          <select
            id="subject"
            {...register("subject")}
            className={`w-full p-4 rounded bg-gray-800 text-darkSlate text-xl ${
              errors.subject
                ? "border-lightCrimson border-4 bg-pink"
                : "border-gray-300"
            }`}
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="job">Job Opportunity</option>
            <option value="collaboration">Collaboration</option>
            <option value="other">Other</option>
          </select>
          {errors.subject && (
            <p className="text-lightCrimson">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label className="block text-ivoryWhite mb-1" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            {...register("message")}
            className={`w-full p-4 rounded bg-gray-800 text-darkSlate text-xl ${
              errors.message
                ? "border-lightCrimson border-4 bg-pink"
                : "border-gray-300"
            }`}
            rows={4}
          />
          {errors.message && (
            <p className="text-lightCrimson">{errors.message.message}</p>
          )}
        </div>

        {/* Honeypot field */}
        <input
          type="text"
          style={{ display: "none" }}
          {...register("honeypot")}
        />

        <div>
          <input
            className="mr-2"
            type="checkbox"
            id="consent"
            {...register("consent")}
          />
          <label htmlFor="consent" className="text-ivoryWhite italic">
            I agree to the{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              privacy policy
            </span>
          </label>
          {errors.consent && (
            <p className="text-lightCrimson">{errors.consent.message}</p>
          )}
        </div>

        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            className="flex items-center justify-center"
            label={
              isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                  >
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
                  Submitting...
                </>
              ) : (
                "Submit"
              )
            }
          />
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
