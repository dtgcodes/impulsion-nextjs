import Link from "next/link";

export const metadata = {
  title: "Services | Impulsion Technologies Dubai",
  description: "Explore Impulsion Technologies' full range of services: ERP systems, software development, web development, digital marketing, SEO, IT support, and more in Dubai.",
};

const allServices = [
  { icon: "💻", title: "ERP System", desc: "Custom enterprise resource planning systems that centralize and automate your entire business operations.", href: "/services/erp-system", cat: "Software" },
  { icon: "🛠️", title: "Software Development", desc: "Bespoke software applications built from scratch to fit your exact business workflows and requirements.", href: "/services/software-development", cat: "Software" },
  { icon: "🌐", title: "Web Development", desc: "Modern, fast, and scalable websites and web apps built on proven technologies.", href: "/services/web-development", cat: "Software" },
  { icon: "📱", title: "App Development", desc: "Native and cross-platform mobile apps for iOS and Android with seamless user experience.", href: "/services/app-development", cat: "Software" },
  { icon: "🧾", title: "Accounting System", desc: "Full-featured accounting and finance management systems integrated with your operations.", href: "/services/accounting-system", cat: "Software" },
  { icon: "⚙️", title: "Customized Software", desc: "Any type of specialized software solution designed and built specifically for your business.", href: "/services/customized-software", cat: "Software" },
  { icon: "📈", title: "Digital Marketing", desc: "Full-funnel digital marketing strategies to build brand awareness, generate leads, and grow revenue.", href: "/services/digital-marketing", cat: "Marketing" },
  { icon: "🔍", title: "SEO", desc: "Technical SEO, content strategy, and link building to rank your website at the top of Google.", href: "/services/seo", cat: "Marketing" },
  { icon: "📱", title: "Social Media Management", desc: "Professional management of all your social media channels with engaging content and community building.", href: "/services/social-media-management", cat: "Marketing" },
  { icon: "🎯", title: "Google Ads", desc: "ROI-driven Google Ads campaigns (Search, Display, Shopping, YouTube) managed by certified experts.", href: "/services/google-ads", cat: "Marketing" },
  { icon: "📘", title: "Meta Ads", desc: "Facebook and Instagram advertising campaigns targeting the right audience with compelling creatives.", href: "/services/meta-ads", cat: "Marketing" },
  { icon: "🎨", title: "Graphic Designing", desc: "Logo design, brand identity, marketing materials, and all visual design needs for your business.", href: "/services/graphic-designing", cat: "Marketing" },
  { icon: "🔧", title: "IT AMC Contract", desc: "Annual maintenance contracts covering all your IT hardware, software, and network infrastructure.", href: "/services/it-amc-contract", cat: "IT Support" },
  { icon: "🌐", title: "IT Networking & CCTV", desc: "Complete office networking solutions including cabling, routers, switches, WiFi, and CCTV surveillance.", href: "/services/it-networking-cctv", cat: "IT Support" },
  { icon: "💾", title: "Computer Repair", desc: "Fast, reliable laptop and desktop repair services for businesses in Dubai.", href: "/services/computer-repair", cat: "IT Support" },
];

const cats = ["All", "Software", "Marketing", "IT Support"];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-orange-primary text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Everything Your Business <span className="gradient-text">Needs to Grow</span>
            </h1>
            <p className="text-gray-300 text-lg">From custom ERP systems to Google Ads campaigns, we offer a complete suite of technology and marketing services — all under one roof.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((s) => (
              <Link key={s.href} href={s.href}
                className="group bg-navy-800 border border-white/5 hover:border-orange-primary/40 rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-primary/10 rounded-xl flex items-center justify-center text-2xl">{s.icon}</div>
                  <span className="text-xs font-semibold text-gray-500 bg-navy-950 border border-white/5 px-2.5 py-1 rounded-full">{s.cat}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-primary transition-colors">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-orange-primary text-sm font-medium mt-4">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-primary to-orange-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure What You Need?</h2>
          <p className="text-orange-100 mb-8">Talk to our experts and we&apos;ll recommend the right solution for your business.</p>
          <Link href="/contact" className="bg-white text-orange-primary hover:bg-gray-100 px-8 py-3.5 rounded-xl font-bold transition-colors">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
