import Link from "next/link";

interface ServicePageProps {
  title: string;
  tagline: string;
  icon: string;
  description: string;
  features: string[];
  benefits: { icon: string; title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faq?: { q: string; a: string }[];
}

export default function ServicePage({ title, tagline, icon, description, features, benefits, process, faq }: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-4xl">{icon}</span>
              <span className="text-orange-primary text-sm font-semibold uppercase tracking-widest">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {title} <span className="gradient-text">in Dubai</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8">{tagline}</p>
            <p className="text-gray-400 leading-relaxed mb-8">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-orange-primary hover:bg-orange-dark text-white px-8 py-3.5 rounded-xl font-semibold transition-colors">Get A Free Quote</Link>
              <a href="tel:+971585855890" className="border border-white/20 hover:border-orange-primary text-white hover:text-orange-primary px-8 py-3.5 rounded-xl font-semibold transition-colors">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-navy-800 border border-white/5 rounded-xl px-5 py-3.5">
                <div className="w-5 h-5 bg-orange-primary rounded-full flex-shrink-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-gray-300 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Impulsion?</h2>
            <p className="text-gray-400">What sets our {title} service apart from the rest.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-navy-800 border border-white/5 rounded-2xl p-6">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-400">How we deliver your project from start to finish.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={step.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-orange-primary to-transparent z-0" />
                )}
                <div className="relative bg-navy-800 border border-white/5 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-orange-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">{i + 1}</div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section className="py-20 bg-navy-950">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <details key={item.q} className="group bg-navy-800 border border-white/5 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-white font-medium">
                    {item.q}
                    <svg className="w-5 h-5 text-orange-primary group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-primary to-orange-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-orange-100 mb-8">Contact us today for a free consultation and quote for your {title} project.</p>
          <Link href="/contact" className="bg-white text-orange-primary hover:bg-gray-100 px-8 py-3.5 rounded-xl font-bold transition-colors">Get A Free Quote</Link>
        </div>
      </section>
    </>
  );
}
