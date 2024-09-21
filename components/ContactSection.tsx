import React from "react";
import ContactForm from "./ui/ContactForm";

const ContactSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-darkSlate pb-10">
      <ContactForm />
    </div>
  );
};

export default ContactSection;
