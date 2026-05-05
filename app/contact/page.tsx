import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Impulsion Technologies Dubai",
  description: "Get in touch with Impulsion Technologies for ERP systems, software development, web development, digital marketing, and IT solutions in Dubai, UAE.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#020818] py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#f47c20] text-sm font-semibold uppercase tracking-widest mb-3">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let&apos;s <span className="text-[#f47c20]">Talk Business</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Ready to start your project? Have questions? Our team is here to help. Reach out and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#030e25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                    label: "Office Address",
                    value: "Office# 402, Bin Sougat Building, Al Muraqqabat, Deira, Dubai, UAE",
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    label: "Phone / WhatsApp",
                    value: "+971 50 166 8568",
                    href: "tel:+971501668568",
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    label: "Email",
                    value: "info@impulsionuae.com",
                    href: "mailto:info@impulsionuae.com",
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                    label: "Working Hours",
                    value: "Monday – Saturday: 9:00 AM – 7:00 PM (GST)",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#f47c20]/10 border border-[#f47c20]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#f47c20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="text-white hover:text-[#f47c20] transition-colors">{item.value}</a>
                        : <p className="text-white">{item.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed placeholder */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178847854969!2d55.2641!3d25.1855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzA3LjgiTiA1NcKwMTUnNTAuOCJF!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                  width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy"
                  title="Impulsion Technologies Location"
                />
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-[#050d2d] border border-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
