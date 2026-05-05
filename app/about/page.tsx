import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | Impulsion Technologies Dubai",
  description: "Learn about Impulsion Technologies — Dubai's trusted IT company specializing in ERP, software development, digital marketing, and IT solutions.",
};

const team = [
  { name: "Muhammad Izhar", role: "CEO & Founder", photo: null, avatar: "MI" },
  { name: "Team Member", role: "Lead Developer", photo: "/team2.jpg", avatar: "TL" },
  { name: "Team Member", role: "Creative Director", photo: "/team3.jpg", avatar: "DH" },
  { name: "Team Member", role: "Digital Marketing Manager", photo: "/team4.jpg", avatar: "MH" },
];

const values = [
  { icon: "🎯", title: "Client-First", desc: "Every decision we make is driven by what's best for our clients' business success." },
  { icon: "💡", title: "Innovation", desc: "We stay ahead of technology trends to deliver cutting-edge solutions." },
  { icon: "🤝", title: "Transparency", desc: "Open communication and honest reporting at every stage of the project." },
  { icon: "⚡", title: "Speed", desc: "Agile processes that deliver fast without compromising quality." },
  { icon: "🔒", title: "Security", desc: "Enterprise-grade security built into every solution from day one." },
  { icon: "🌱", title: "Growth", desc: "We invest in our team's growth so they can deliver the best for clients." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-primary text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Dubai&apos;s Trusted <span className="gradient-text">IT Partner</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Impulsion Technologies is a leading IT company based in Business Bay, Dubai. Founded with a mission to make enterprise-grade technology accessible to businesses of all sizes, we have grown into a full-service technology partner trusted by 150+ clients across the UAE and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-primary text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl font-bold text-white mb-6">10+ Years of Technology Excellence</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>Impulsion Technologies was born from a simple belief: every business deserves access to powerful technology solutions, not just large corporations with massive budgets.</p>
                <p>Starting with a small team of passionate developers and marketers, we built our reputation by delivering results that exceeded client expectations. From our first ERP system for a UAE logistics company to now managing digital marketing for brands across the region, we have never stopped growing.</p>
                <p>Today, our team of 15+ experts covers software development, ERP systems, web and app development, digital marketing, SEO, IT infrastructure, and graphic design — all under one roof at our Business Bay, Dubai office.</p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-primary hover:bg-orange-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors mt-8">
                Work With Us →
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden h-[400px] border border-white/10">
                <Image src="/team.jpg" alt="Impulsion Technologies Team" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 grid grid-cols-4 gap-2">
                {[
                  { value: "200+", label: "Projects" },
                  { value: "150+", label: "Clients" },
                  { value: "10+", label: "Years" },
                  { value: "15+", label: "Team" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-navy-950/90 backdrop-blur border border-white/10 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold gradient-text">{stat.value}</div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-primary text-sm font-semibold uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-3xl font-bold text-white mb-4">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-navy-800 border border-white/5 rounded-2xl p-6">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-primary text-sm font-semibold uppercase tracking-widest mb-3">Our Team</p>
            <h2 className="text-3xl font-bold text-white mb-4">Meet the Experts</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.role} className="bg-navy-800 border border-white/5 rounded-2xl overflow-hidden card-hover">
                <div className="relative h-48 bg-gradient-to-br from-navy-700 to-navy-900">
                  {member.photo
                    ? <Image src={member.photo} alt={member.name} fill className="object-cover object-top" />
                    : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-primary to-orange-dark rounded-full flex items-center justify-center text-white font-bold text-2xl">
                          {member.avatar}
                        </div>
                      </div>
                    )
                  }
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-white font-semibold">{member.name}</h3>
                  <p className="text-orange-primary text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-primary to-orange-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-orange-100 mb-8">Let&apos;s discuss your requirements and build something great together.</p>
          <Link href="/contact" className="bg-white text-orange-primary hover:bg-gray-100 px-8 py-3.5 rounded-xl font-bold transition-colors">Get In Touch</Link>
        </div>
      </section>
    </>
  );
}
