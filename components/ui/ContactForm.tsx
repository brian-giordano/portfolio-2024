// components/ContactForm.tsx
import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "./Button";
import ToastContainer, { ToastContainerRef } from "./ToastContainer"; // Import the ToastContainer and its ref type

// Define your FormData interface and validation schema here...
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Validation schema using Yup
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const toastContainerRef = useRef<ToastContainerRef>(null); // Create a ref for the ToastContainer

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    const formData = new FormData();

    // Append form data
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    try {
      const response = await fetch(
        "https://formsubmit.co/65b50a450eb5648ef931291f1b87e905",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Show success toast
        toastContainerRef.current?.addToast("Message sent successfully!");
        reset(); // Reset the form fields
      } else {
        throw new Error("Error sending message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show error toast
      toastContainerRef.current?.addToast(
        "Error sending message. Please try again."
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
            {...register("name", { required: "Name is required" })}
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
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Email is not valid" },
            })}
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
            {...register("subject", { required: "Subject is required" })}
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
            {...register("message", { required: "Message is required" })}
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
      <ToastContainer ref={toastContainerRef} />{" "}
      {/* Pass the ref to ToastContainer */}
    </div>
  );
};

export default ContactForm;
