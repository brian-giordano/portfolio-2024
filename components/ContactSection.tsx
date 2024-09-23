import React from "react";
import ContactForm from "./ui/ContactForm";

const ContactSection: React.FC = () => {
  return (
    <div className="container mx-auto bg-darkSlate p-4 md:p-8">
      <ContactForm />
    </div>
  );
};

export default ContactSection;
