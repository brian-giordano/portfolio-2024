import React, { useState } from "react";
import Button from "./Button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission (send data to api)
    console.log(formData);
  };

  return (
    <div className="w-full bg-charcoal rounded-lg shadow-lg px-8 py-8 mb-10">
      {/* <h2 className="text-2xl font-bold text-ivoryWhite mb-4">Contact Me</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-ivoryWhite mb-1" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded bg-gray-800 text-darkSlate text-xl"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-ivoryWhite mb-1" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded bg-gray-800 text-darkSlate text-xl"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-ivoryWhite mb-1" htmlFor="subject">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-4 rounded bg-gray-800 text-darkSlate text-xl"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-ivoryWhite mb-1" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded bg-gray-800 text-darkSlate text-xl"
            rows={4}
            required
          />
        </div>
        <div>
          <Button
            label={"Submit"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>

        {/* <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition duration-300"
        >
          Send Message
        </button> */}
      </form>
    </div>
  );
};

export default ContactForm;
