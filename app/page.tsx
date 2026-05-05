import Link from "next/link";
import Image from "next/image";
import ParticleNetwork from "@/components/ParticleNetwork";
import TypingText from "@/components/TypingText";

const services = [
  { icon: "💻", title: "ERP System", desc: "Fully customized ERP to manage finance, HR, inventory, sales, and more.", href: "/services/erp-system" },
  { icon: "🛠️", title: "Software Development", desc: "Bespoke business applications built exactly to your workflow requirements.", href: "/services/software-development" },
  { icon: "🌐", title: "Web Development", desc: "Modern, fast, SEO-optimized websites and web apps that convert.", href: "/services/web-development" },
  { icon: "📱", title: "App Development", desc: "iOS & Android mobile apps with stunning UI and powerful backend.", href: "/services/app-development" },
  { icon: "📈", title: "Digital Marketing", desc: "Google, Meta, TikTok & more — campaigns that drive real growth.", href: "/services/digital-marketing" },
  { icon: "🔍", title: "SEO", desc: "Rank higher on Google and drive sustainable organic traffic.", href: "/services/seo" },
  { icon: "🎨", title: "Graphic Designing", desc: "Logos, brand identity, and marketing materials with visual impact.", href: "/services/graphic-designing" },
  { icon: "🔧", title: "IT AMC Contract", desc: "Annual IT maintenance so your business never goes down.", href: "/services/it-amc-contract" },
];

const portfolio = [
  { name: "Gulf Car Auction", tag: "Automotive ERP", logo: "https://www.gulfcarauction.com/logo.png", initials: "GCA", href: "https://www.gulfcarauction.com/", desc: "Full ERP for vehicle auctions, inventory, bidding & financial reporting.", bg: "#07152e" },
  { name: "Ariana Shipping Line", tag: "Shipping ERP", logo: "https://www.arianashippingline.com/img/logo.png", initials: "ARL", href: "https://www.arianashippingline.com/", desc: "End-to-end shipping management — cargo, fleet, logistics & billing.", bg: "#071a2e" },
  { name: "ASL Shipping Line", tag: "Logistics ERP", logo: "https://www.aslshippingline.com/favicon.ico", initials: "ASL", href: "https://www.aslshippingline.com/", desc: "Integrated logistics ERP for shipment tracking & agent portals.", bg: "#071a12" },
  { name: "American Shipping & Towing", tag: "Marine ERP", logo: "https://americanshippingtowing.com/wp-content/uploads/2021/12/1.png", initials: "AST", href: "https://americanshippingtowing.com/", desc: "Marine operations ERP for towing fleet scheduling & billing.", bg: "#1a0a0a" },
  { name: "Olfat Shipping", tag: "Freight ERP", logo: "", initials: "OS", href: "https://www.olfatshipping.com/", desc: "Freight forwarding ERP — shipments, customs & client portals.", bg: "#151207" },
  { name: "Rukn Al Fakhama", tag: "Business ERP", logo: "https://ruknalfakhama.com/wp-content/uploads/2023/10/only-circle-e1698833273754.png", initials: "RF", href: "https://ruknalfakhama.com/", desc: "Multi-module ERP — HR, inventory, sales & financial management.", bg: "#0a071a" },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "150+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "15+", label: "Expert Team" },
];

const testimonials = [
  { name: "Ahmed Al Mansouri", role: "CEO, Gulf Car Auction", text: "Impulsion Technologies delivered our ERP system on time and beyond expectations. The system completely transformed how we manage auctions across all branches.", avatar: "AM" },
  { name: "Khalid Rahman", role: "Director, Ariana Shipping Line", text: "The shipping ERP they built is exactly what we needed. Complex workflows are now fully automated. We highly recommend their experienced team.", avatar: "KR" },
  { name: "Sarah Johnson", role: "Marketing Manager, UAE Retail", text: "Our Google Ads managed by Impulsion increased leads by 340% in just 4 months. Outstanding ROI and very professional team to work with.", avatar: "SJ" },
];

export default function HomePage() {
  return (
    <>
      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-[#020818] overflow-hidden">

        {/* ── Particle network canvas ── */}
        <ParticleNetwork />

        {/* ── Background gradient ── */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020818] via-[#030d28] to-[#05091a]" />

        {/* ── Planet — absolutely pinned to bottom, no overflow ── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl z-10 pointer-events-none">
          <Image
            src="/hero-planet.png"
            alt=""
            width={800}
            height={440}
            className="w-full object-contain object-bottom"
            priority
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[#f47c20]/10 blur-3xl rounded-full" />
        </div>

        {/* ── Centered hero content ── */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center pb-32">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 text-sm text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#f47c20] animate-pulse" />
            🇦🇪 Leading IT Company in Dubai, UAE
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            Smart IT Solutions
          </h1>

          {/* Typing rotating text */}
          <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-7 min-h-[1.2em]">
            <TypingText />
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Web Designing, Software Development & Digital Marketing Company in Dubai.
            Ranked #1 by 10 Best SEO for Local and Enterprise SEO.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-[#f47c20] hover:bg-[#d4640a] text-white px-9 py-3.5 rounded-full font-bold text-base transition-all shadow-lg shadow-[#f47c20]/25 hover:scale-105">
              Get A Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/our-work"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-9 py-3.5 rounded-full font-bold text-base transition-all hover:bg-white/5">
              View Our Work →
            </Link>
          </div>
        </div>

      </section>

      {/* ─────────────────── SERVICES ─────────────────── */}
      <section className="py-24 bg-[#020818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#f47c20] text-xs font-bold uppercase tracking-[5px] mb-3">What We Offer</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Our Core <span className="text-[#f47c20]">Services</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Complete IT and marketing solutions to grow, automate, and scale your business — all under one roof in Dubai.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href}
                className="group bg-[#050d2d] border border-white/8 hover:border-[#f47c20]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#f47c20]/8">
                <div className="text-3xl mb-5 p-3 bg-[#f47c20]/10 w-fit rounded-xl">{s.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#f47c20] transition-colors">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 text-[#f47c20] text-sm font-semibold flex items-center gap-1">
                  Learn More <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services"
              className="inline-flex items-center gap-2 border border-[#f47c20]/40 hover:border-[#f47c20] text-[#f47c20] hover:bg-[#f47c20] hover:text-white px-8 py-3.5 rounded-xl font-bold transition-all">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────── PORTFOLIO ─────────────────── */}
      <section className="py-24 bg-[#050d2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-[#f47c20] text-xs font-bold uppercase tracking-[5px] mb-3">Our Portfolio</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white">ERP Systems <span className="text-[#f47c20]">We&apos;ve Built</span></h2>
            </div>
            <Link href="/our-work" className="text-[#f47c20] text-sm font-semibold hover:underline whitespace-nowrap">View All Projects →</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                className="group bg-[#0a1744]/50 border border-white/8 hover:border-[#f47c20]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#f47c20]/10">
                <div className="h-48 flex items-center justify-center p-8" style={{ background: `linear-gradient(135deg, ${p.bg}, ${p.bg}dd)` }}>
                  {p.logo
                    // eslint-disable-next-line @next/next/no-img-element
                    ? <img src={p.logo} alt={p.name} className="max-h-24 max-w-[70%] object-contain group-hover:scale-105 transition-transform duration-400" />
                    : <span className="text-6xl font-black text-[#f47c20]">{p.initials}</span>
                  }
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-bold text-[#f47c20] bg-[#f47c20]/10 px-3 py-1 rounded-full mb-3">{p.tag}</span>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#f47c20] transition-colors">{p.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#f47c20] text-sm font-semibold mt-4">Visit Website →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── WHY US ─────────────────── */}
      <section className="py-28 bg-[#020818] relative overflow-hidden">
        {/* subtle background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#f47c20]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: layered images ── */}
            <div className="relative h-[540px]">
              {/* main photo */}
              <div className="absolute left-0 top-0 w-[72%] h-full rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/8">
                <Image src="/team.jpg" alt="Impulsion Team" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/60 via-transparent to-transparent" />
              </div>

              {/* floating secondary photo */}
              <div className="absolute right-0 top-[10%] w-[46%] h-[52%] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border-2 border-[#020818]">
                <Image src="/team2.jpg" alt="Impulsion Office" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#f47c20]/10 to-transparent" />
              </div>

              {/* years of experience badge */}
              <div className="absolute right-0 bottom-[8%] w-[46%] bg-gradient-to-br from-[#f47c20] to-[#d4640a] rounded-2xl p-5 shadow-xl shadow-[#f47c20]/40 text-center border border-[#f47c20]/30">
                <div className="text-white font-black text-5xl leading-none">6+</div>
                <div className="text-orange-100 text-sm font-semibold mt-1 tracking-wide">Years Of Experience</div>
              </div>

              {/* floating stats pill */}
              <div className="absolute left-4 bottom-6 bg-[#050d2d]/90 backdrop-blur border border-white/10 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-xl">
                <div className="w-9 h-9 bg-[#f47c20]/15 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#f47c20]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">200+ Happy Clients</div>
                  <div className="text-gray-400 text-xs">Across UAE & Beyond</div>
                </div>
              </div>
            </div>

            {/* ── Right: content ── */}
            <div className="lg:pl-4">
              {/* label */}
              <div className="inline-flex items-center gap-2 bg-[#f47c20]/10 border border-[#f47c20]/25 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 bg-[#f47c20] rounded-full" />
                <span className="text-[#f47c20] text-xs font-bold uppercase tracking-widest">Why Choose Us</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
                Your Trusted <span className="text-[#f47c20]">IT Partner</span><br className="hidden sm:block" /> in Dubai
              </h2>

              <p className="text-gray-400 text-base leading-relaxed mb-8 border-l-2 border-[#f47c20]/40 pl-4">
                Impulsion Technologies concentrates on quality, innovation, and timely work. We are dedicated to exceeding customers&apos; expectations by offering outstanding business solutions. With 6 years of experience, we&apos;ve served organisations from small startups to large multinationals across the UAE.
              </p>

              {/* Feature cards */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
                    label: "Dedicated Team", desc: "Expert professionals for every project"
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                    label: "Licensed & Regulated", desc: "Fully certified in the UAE"
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                    label: "24/7 Support", desc: "Always here when you need us"
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    label: "Premium IT Solutions", desc: "Enterprise quality, UAE pricing"
                  },
                ].map((f) => (
                  <div key={f.label}
                    className="group bg-[#050d2d] hover:bg-[#0a1744] border border-white/6 hover:border-[#f47c20]/30 rounded-2xl p-4 transition-all duration-200">
                    <div className="w-10 h-10 bg-[#f47c20]/10 group-hover:bg-[#f47c20]/20 rounded-xl flex items-center justify-center mb-3 transition-colors">
                      <svg className="w-5 h-5 text-[#f47c20]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        {f.icon}
                      </svg>
                    </div>
                    <div className="text-white font-bold text-sm mb-0.5">{f.label}</div>
                    <div className="text-gray-500 text-xs">{f.desc}</div>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="flex flex-wrap items-center gap-5">
                <Link href="/about"
                  className="group flex items-center gap-2 bg-[#f47c20] hover:bg-[#d4640a] text-white px-7 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-[#f47c20]/25">
                  Explore More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="tel:+97142985396"
                  className="flex items-center gap-3 group">
                  <div className="w-11 h-11 bg-[#f47c20]/10 group-hover:bg-[#f47c20]/20 border border-[#f47c20]/30 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-[#f47c20]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Call Us Anytime</p>
                    <p className="text-white font-bold text-base group-hover:text-[#f47c20] transition-colors">042 985 396</p>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────── TESTIMONIALS ─────────────────── */}
      <section className="py-24 bg-[#050d2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f47c20] text-xs font-bold uppercase tracking-[5px] mb-3">Client Reviews</p>
            <h2 className="text-4xl font-black text-white">What Our <span className="text-[#f47c20]">Clients Say</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#020818] border border-white/8 hover:border-[#f47c20]/30 rounded-2xl p-7 transition-colors">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#f47c20]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#f47c20]/20 rounded-full flex items-center justify-center text-[#f47c20] font-bold text-sm flex-shrink-0">{t.avatar}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* ─────────────────── WhatsApp Float ─────────────────── */}
      <a href="https://wa.me/971585855890" target="_blank" rel="noopener noreferrer" className="wa-btn" aria-label="WhatsApp">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
