"use client";

import { useState, useRef, useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    emailjs: any;
  }
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      if (!window.emailjs) {
        throw new Error("EmailJS not loaded");
      }
      await window.emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setFields({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#020818] border border-white/10 focus:border-[#f47c20] rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Smith"
            value={fields.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@company.com"
            value={fields.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-400 text-sm mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="+971 50 000 0000"
          value={fields.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-gray-400 text-sm mb-2">Service Required</label>
        <select
          name="service"
          value={fields.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a service...</option>
          <option>ERP System</option>
          <option>Software Development</option>
          <option>Web Development</option>
          <option>App Development</option>
          <option>Digital Marketing</option>
          <option>SEO</option>
          <option>Social Media Management</option>
          <option>Google Ads</option>
          <option>Graphic Designing</option>
          <option>IT AMC Contract</option>
          <option>IT Networking &amp; CCTV</option>
          <option>Computer Repair</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-400 text-sm mb-2">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          value={fields.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "success" && (
        <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-4 py-3 text-sm">
          Message sent! We&apos;ll reply within 24 hours.
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm">
          Something went wrong. Please try again or{" "}
          <a
            href="https://wa.me/971585855890"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WhatsApp us
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#f47c20] hover:bg-[#d4640a] disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <svg
              className="animate-spin w-5 h-5"
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
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message →"
        )}
      </button>
    </form>
  );
}
