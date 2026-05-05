import Link from "next/link";

export const metadata = {
  title: "Our Work | Impulsion Technologies Dubai",
  description: "Explore ERP systems, websites, and digital solutions built by Impulsion Technologies for clients across UAE and beyond.",
};

const portfolio = [
  {
    name: "Gulf Car Auction",
    tag: "Automotive ERP",
    logo: "https://www.gulfcarauction.com/logo.png",
    initials: "GCA",
    href: "https://www.gulfcarauction.com/",
    desc: "A fully integrated ERP system for managing vehicle auctions, multi-branch inventory, bidder management, real-time bidding workflows, payment processing, and financial reporting. Built to handle thousands of vehicles and auction events.",
    tech: ["PHP", "MySQL", "JavaScript", "REST API"],
    grad: "from-[#07152e] to-[#0e2550]",
  },
  {
    name: "Ariana Shipping Line",
    tag: "Shipping ERP",
    logo: "https://www.arianashippingline.com/img/logo.png",
    initials: "ARL",
    href: "https://www.arianashippingline.com/",
    desc: "End-to-end shipping management platform covering vessel scheduling, cargo booking, freight invoicing, agent network management, bill of lading generation, and customs documentation.",
    tech: ["Laravel", "Vue.js", "MySQL", "AWS"],
    grad: "from-[#071a2e] to-[#0a2d4a]",
  },
  {
    name: "Olfat Shipping",
    tag: "Freight ERP",
    logo: "",
    initials: "OS",
    href: "https://www.olfatshipping.com/",
    desc: "Freight forwarding ERP managing door-to-door shipment tracking, air and sea freight operations, customs brokerage, client portal, automated invoicing, and real-time status updates.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    grad: "from-[#1a1a0a] to-[#2d2d0d]",
  },
  {
    name: "ASL Shipping Line",
    tag: "Logistics ERP",
    logo: "https://www.aslshippingline.com/favicon.ico",
    initials: "ASL",
    href: "https://www.aslshippingline.com/",
    desc: "Integrated logistics ERP covering full container load and less-than-container load shipments, multi-port management, document generation, agent and partner portals.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    grad: "from-[#0a1a0a] to-[#0d2d1a]",
  },
  {
    name: "American Shipping & Towing",
    tag: "Marine ERP",
    logo: "https://americanshippingtowing.com/wp-content/uploads/2021/12/1.png",
    initials: "AST",
    href: "https://americanshippingtowing.com/",
    desc: "Marine operations management ERP for towing fleet scheduling, job assignment, crew management, fuel tracking, maintenance logs, and billing for marine service operations.",
    tech: ["Laravel", "React", "MySQL", "API"],
    grad: "from-[#1a0a0a] to-[#2d0d0d]",
  },
  {
    name: "Rukn Al Fakhama",
    tag: "Business ERP",
    logo: "https://ruknalfakhama.com/wp-content/uploads/2023/10/only-circle-e1698833273754.png",
    initials: "RF",
    href: "https://ruknalfakhama.com/",
    desc: "Comprehensive multi-module business management ERP covering HR and payroll, inventory, sales and purchase orders, CRM, project tracking, and financial reporting.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    grad: "from-[#0a071a] to-[#150d2d]",
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "6+", label: "ERP Systems" },
  { value: "150+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
];

export default function OurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-primary text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Delivering <span className="gradient-text">Real Results</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              From complex ERP systems to sleek websites, every project we deliver is built with precision, purpose, and a deep understanding of the client&apos;s business. Here are some of the solutions we&apos;ve built.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-900 py-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-primary text-sm font-semibold uppercase tracking-widest mb-3">ERP Systems</p>
            <h2 className="text-3xl font-bold text-white mb-4">Enterprise Solutions Built for Growth</h2>
            <p className="text-gray-400 max-w-xl mx-auto">We specialize in building fully customized ERP systems that transform how businesses operate.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((p) => (
              <div key={p.name} className="bg-navy-800 border border-white/5 hover:border-orange-primary/40 rounded-2xl overflow-hidden card-hover group">
                {/* Thumbnail */}
                <div className={`h-52 bg-gradient-to-br ${p.grad} flex items-center justify-center`}>
                  {p.logo
                    // eslint-disable-next-line @next/next/no-img-element
                    ? <img src={p.logo} alt={p.name} className="max-w-[60%] max-h-28 object-contain" />
                    : <span className="text-6xl font-black text-orange-primary">{p.initials}</span>
                  }
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-orange-primary bg-orange-primary/10 px-2.5 py-1 rounded-full">{p.tag}</span>
                    <a href={p.href} target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-primary transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-orange-primary transition-colors">{p.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs bg-navy-900 border border-white/10 text-gray-400 px-2.5 py-1 rounded-md">{t}</span>
                    ))}
                  </div>
                  <a href={p.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-orange-primary text-sm font-medium mt-4 hover:gap-2 transition-all">
                    Visit Website →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-primary to-orange-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-orange-100 mb-8">Let&apos;s discuss your requirements and build the next great solution together.</p>
          <Link href="/contact" className="bg-white text-orange-primary hover:bg-gray-100 px-8 py-3.5 rounded-xl font-bold transition-colors">Get A Free Quote</Link>
        </div>
      </section>
    </>
  );
}
