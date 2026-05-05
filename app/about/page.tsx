import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | IT Company Dubai Since 2018",
  description:
    "Learn about Impulsion Technologies — Dubai's leading IT company since 2018. 200+ projects delivered across UAE in ERP systems, software development, digital marketing & IT support.",
  alternates: { canonical: "/about" },
};

const team = [
  { name: "Muhammad Izhar", role: "CEO & Founder", photo: null, avatar: "MI" },
  { name: "Team Member", role: "Lead Developer", photo: "/team2.jpg", avatar: "TL" },
  { name: "Team Member", role: "Creative Director", photo: "/team3.jpg", avatar: "DH" },
  { name: "Team Member", role: "Digital Marketing Manager", photo: "/team4.jpg", avatar: "MH" },
];

const values = [
  { icon: "🎯", title: "Client-First", desc: "Every decision we make is driven by what's best for our clients' business success." },
  { icon: "💡", title: "Innovation", desc: "We stay ahead of technology trends to deliver cutting-edge solutions for UAE businesses." },
  { icon: "🤝", title: "Transparency", desc: "Open communication and honest reporting at every stage of your project." },
  { icon: "⚡", title: "Speed", desc: "Agile processes that deliver fast without compromising quality or stability." },
  { icon: "🔒", title: "Security", desc: "Enterprise-grade security built into every solution from day one." },
  { icon: "🌱", title: "Growth", desc: "We invest in our team's growth so they can deliver the very best for clients." },
];

const milestones = [
  { year: "2018", title: "Founded in Dubai", desc: "Started with a small team of passionate developers in Business Bay, Dubai." },
  { year: "2020", title: "100+ Clients Served", desc: "Expanded to digital marketing, SEO, and IT support services across the UAE." },
  { year: "2024", title: "200+ Projects Delivered", desc: "Grown to a full-service IT company trusted by businesses across the Middle East." },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "150+", label: "Happy Clients" },
  { value: "6+", label: "Years in UAE" },
  { value: "15+", label: "Expert Team" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#020818] py-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f47c20]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#f47c20]/10 border border-[#f47c20]/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-[#f47c20] rounded-full" />
              <span className="text-[#f47c20] text-xs font-bold uppercase tracking-widest">About Us — Dubai, UAE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Dubai&apos;s Most Trusted<br /><span className="text-[#f47c20]">IT Company</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Impulsion Technologies is a full-service IT company based in <strong className="text-white">Business Bay, Dubai, UAE</strong>. Since 2018, we have delivered 200+ successful projects for businesses ranging from startups to multinational enterprises across the UAE and Middle East.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="/contact"
                className="bg-[#f47c20] hover:bg-[#d4640a] text-white px-8 py-3.5 rounded-xl font-bold transition-colors shadow-lg shadow-[#f47c20]/25">
                Get A Free Quote
              </Link>
              <Link href="/our-work"
                className="border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-xl font-bold transition-colors hover:bg-white/5">
                View Our Work →
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#050d2d] border border-white/8 rounded-2xl p-5 text-center">
                  <div className="text-3xl font-black text-[#f47c20] mb-1">{s.value}</div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-24 bg-[#050d2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <div className="relative h-[480px] rounded-3xl overflow-hidden border border-white/8 shadow-2xl shadow-black/50">
              <Image src="/team.jpg" alt="Impulsion Technologies team in Dubai office" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#020818]/90 backdrop-blur border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="Impulsion Technologies" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
                  <div className="border-l border-white/10 pl-4">
                    <div className="text-white font-bold text-sm">Business Bay, Dubai</div>
                    <div className="text-gray-400 text-xs">Office 511, Clover Bay Tower</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f47c20]/10 border border-[#f47c20]/25 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 bg-[#f47c20] rounded-full" />
                <span className="text-[#f47c20] text-xs font-bold uppercase tracking-widest">Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                6+ Years Building Technology<br />for <span className="text-[#f47c20]">UAE Businesses</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed mb-10">
                <p>Impulsion Technologies was born from a simple belief: every business deserves access to powerful technology — not just large corporations with massive budgets.</p>
                <p>Starting with a small team of passionate developers in Dubai, we built our reputation by delivering results that exceeded client expectations. From our first ERP system for a UAE logistics company to now managing digital marketing for brands across the region, we have never stopped growing.</p>
                <p>Today, our team of 15+ experts covers <strong className="text-white">ERP systems, software development, web and app development, digital marketing, SEO, IT infrastructure, and graphic design</strong> — all under one roof at our Business Bay, Dubai office.</p>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#f47c20]/10 border border-[#f47c20]/30 rounded-xl flex items-center justify-center">
                      <span className="text-[#f47c20] font-black text-xs text-center leading-tight">{m.year}</span>
                    </div>
                    <div className="pt-1">
                      <div className="text-white font-bold text-sm mb-0.5">{m.title}</div>
                      <div className="text-gray-500 text-xs">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 bg-[#020818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#f47c20]/10 border border-[#f47c20]/25 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 bg-[#f47c20] rounded-full" />
              <span className="text-[#f47c20] text-xs font-bold uppercase tracking-widest">Our Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">What <span className="text-[#f47c20]">Drives Us</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title}
                className="group bg-[#050d2d] hover:bg-[#0a1744] border border-white/8 hover:border-[#f47c20]/30 rounded-2xl p-6 transition-all duration-200">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#f47c20] transition-colors">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 bg-[#050d2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#f47c20]/10 border border-[#f47c20]/25 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 bg-[#f47c20] rounded-full" />
              <span className="text-[#f47c20] text-xs font-bold uppercase tracking-widest">Our Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Meet the <span className="text-[#f47c20]">Experts</span></h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Our diverse team of IT professionals, designers, and marketers in Dubai are passionate about delivering results.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.role}
                className="group bg-[#020818] border border-white/8 hover:border-[#f47c20]/30 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1">
                <div className="relative h-52 bg-gradient-to-br from-[#050d2d] to-[#0a1744]">
                  {member.photo ? (
                    <Image src={member.photo} alt={member.name} fill className="object-cover object-top" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#f47c20] to-[#d4640a] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-[#f47c20]/30">
                        {member.avatar}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/60 to-transparent" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-white font-bold">{member.name}</h3>
                  <p className="text-[#f47c20] text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#020818]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#050d2d] to-[#0a1744] border border-white/8 rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Start Your Project<br /><span className="text-[#f47c20]">in Dubai?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">Let&apos;s discuss your requirements and build something great together. Our team responds within 2 hours.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="bg-[#f47c20] hover:bg-[#d4640a] text-white px-9 py-3.5 rounded-xl font-bold transition-colors shadow-lg shadow-[#f47c20]/25">
                Get In Touch →
              </Link>
              <a href="tel:+971585855890"
                className="border border-white/20 hover:border-white/40 text-white px-9 py-3.5 rounded-xl font-bold transition-colors hover:bg-white/5">
                📞 +971 58 585 5890
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
