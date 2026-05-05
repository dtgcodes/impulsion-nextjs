import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Web Development Dubai | Impulsion Technologies",
  description: "Professional web development services in Dubai. We build fast, modern, and scalable websites and web applications for businesses across UAE.",
};

export default function WebDevPage() {
  return (
    <ServicePage
      title="Web Development"
      tagline="Fast, modern, and conversion-optimized websites that grow your business."
      icon="🌐"
      description="We design and build professional websites and web applications for businesses across Dubai and the UAE. From corporate websites to complex web portals and e-commerce platforms, our team delivers pixel-perfect, high-performance web solutions using the latest technologies."
      features={[
        "Corporate & Business Websites",
        "E-commerce Stores (WooCommerce, Shopify, Custom)",
        "Custom Web Portals & Dashboards",
        "WordPress Development",
        "Next.js & React Applications",
        "API Development & Integration",
        "Website Redesign & Revamp",
        "Landing Pages & Lead Generation Sites",
        "Multilingual Arabic/English Websites",
        "Mobile-Responsive Design",
        "SEO-Optimized Structure",
        "Speed & Performance Optimization",
      ]}
      benefits={[
        { icon: "⚡", title: "Lightning Fast", desc: "Sub-2-second load times using modern optimization techniques and CDN delivery." },
        { icon: "📱", title: "Mobile-First", desc: "Designed for mobile first, then scaled up — perfect on every screen size." },
        { icon: "🔍", title: "SEO Ready", desc: "Built with clean code, proper structure, and best practices for search engine ranking." },
        { icon: "🔒", title: "Secure", desc: "SSL certificates, secure forms, and regular security updates included as standard." },
        { icon: "🎨", title: "Custom Design", desc: "Unique designs that reflect your brand — not templates." },
        { icon: "🛠️", title: "Easy to Manage", desc: "User-friendly CMS so you can update your website content without any technical knowledge." },
      ]}
      process={[
        { step: "1", title: "Brief & Strategy", desc: "We understand your goals, audience, and brand requirements." },
        { step: "2", title: "Design", desc: "We create wireframes and visual designs for your review and approval." },
        { step: "3", title: "Development", desc: "We build and test the website across all browsers and devices." },
        { step: "4", title: "Launch", desc: "We deploy, configure, and hand over with full training." },
      ]}
      faq={[
        { q: "How long does a website take to build?", a: "A standard business website takes 2–4 weeks. Complex e-commerce or web applications take 6–12 weeks." },
        { q: "Do you build WordPress websites?", a: "Yes, we build custom WordPress themes and work with Elementor, WooCommerce, and all major WordPress plugins." },
        { q: "Will my website work in Arabic?", a: "Yes, we build bilingual Arabic/English websites with full RTL (right-to-left) support." },
        { q: "Do you offer website hosting?", a: "Yes, we can host your website on fast UAE/Dubai servers or cloud platforms like AWS and Vercel." },
      ]}
    />
  );
}
