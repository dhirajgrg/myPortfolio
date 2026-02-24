import React, { useState } from "react";
import emailjs from '@emailjs/browser'; 
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "../components/Button";

const socialLinks = [
  {
    icon: <FaLinkedin className="text-[#0077B5]" />,
    label: "LinkedIn",
    value: "linkedin.com/in/dhiraj",
    link: "https://linkedin.com/in/dhiraj",
  },
  {
    icon: <FaXTwitter className="text-base-900" />,
    label: "X",
    value: "x.com/gdhiraj_grg",
    link: "https://x.com/gdhiraj_grg",
  },
  {
    icon: <FaGithub className="text-[#333]" />,
    label: "GitHub",
    value: "github.com/dhirajgrg",
    link: "https://github.com/dhirajgrg",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

const handleSubmit = (e) => {
  e.preventDefault();
 
  setIsSubmitting(true);

  // These keys MUST match the {{key}} in your EmailJS template
  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    title: "Portfolio Inquiry", 
  };

  emailjs;
  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      console.error("FAILED...", err);
      setIsSubmitting(false);
      alert("Oops! Something went wrong. Please try again.");
    });
};;
  return (
    <section id="contact" className="min-h-screen bg-base-100 section">
      <div className="container-md">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <span className="label-tag">Get In Touch</span>
          <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl mt-4 text-base-900">
            Let's <span className="text-primary-700 italic">Collaborate</span>
          </h1>
          <p className="mt-4 font-body text-sm sm:text-base text-base-600 max-w-md mx-auto leading-relaxed">
            Available for freelance projects and open to full-time
            opportunities. Have a project in mind? Let's build something
            scalable.
          </p>
        </div>

        {/* Success state */}
        {submitted ? (
          <div className="card p-10 text-center flex flex-col items-center gap-4 animate-scale-in">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-base-900">
              Message Sent!
            </h3>
            <p className="font-body text-sm text-base-600">
              Thanks for reaching out. I'll get back to you soon.
            </p>
            <Button
              variant="outline"
              onClick={() => setSubmitted(false)}
              size="sm"
            >
              Send Another
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="card magicpattern p-6 sm:p-10 flex flex-col gap-5"
          >
            {/* Name + Email row on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project needs..."
                className="input-field resize-none"
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="min-w-[160px] justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  "Send Message →"
                )}
              </Button>
            </div>
          </form>
        )}

        {/* Contact alternatives */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {socialLinks.map(({ icon, label, value, link }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 hover:shadow-card-hover transition-all duration-300 block group"
              >
                <div className="text-3xl mb-2 flex justify-center group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <p className="font-body font-semibold text-sm text-base-800">
                  {label}
                </p>
                <p className="font-mono text-xs text-base-500 mt-0.5">
                  {value}
                </p>
              </a>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Contact;
