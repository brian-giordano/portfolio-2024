// components/ContactSection.tsx
import React from "react";
import ContactForm from "./ui/ContactForm";
import { FaCalendarAlt } from "react-icons/fa";

interface ContactSectionProps {
  subject?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ subject }) => {
  return (
    <div className="w-full bg-darkSlate px-5 py-6 md:px-8 md:py-8">
      <ContactForm prefilledSubject={subject} />

      {/* Book a Call CTA */}
      <div className="mt-8 pt-6 border-t border-white/10 text-center">
        <p className="text-silverMist mb-4 text-sm md:text-base">
          Prefer to schedule directly?
        </p>
        <button
          data-cal-link="briangiordano"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-darkSlate font-semibold rounded-2xl hover:bg-ivoryWhite active:scale-[0.985] transition-all w-full sm:w-auto"
        >
          <FaCalendarAlt className="text-lg" />
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
