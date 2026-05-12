import React from "react";
import ContactForm from "./ui/ContactForm";
import { FaCalendarAlt } from "react-icons/fa";

interface ContactSectionProps {
  subject?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ subject }) => {
  return (
    <div className="container mx-auto bg-darkSlate p-4 md:p-8">
      <ContactForm prefilledSubject={subject} />

      {/* Calendly CTA */}
      <div className="mt-8 pt-6 border-t border-mediumCharcoal text-center">
        <p className="text-silverMist mb-4 text-sm md:text-base">
          Prefer to schedule directly?
        </p>
        <button
          data-cal-link="briangiordano"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-darkSlate font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
        >
          <FaCalendarAlt />
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
