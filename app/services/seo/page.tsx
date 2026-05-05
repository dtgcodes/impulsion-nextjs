import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services Dubai | Best SEO Company UAE",
  description: "Professional SEO services in Dubai. We help UAE businesses rank on Google page 1 with technical SEO, local SEO, content strategy & link building. Get a free SEO audit from Impulsion Technologies.",
  alternates: { canonical: "/services/seo" },
};

export default function SEOPage() {
  return (
    <ServicePage
      title="SEO"
      tagline="Rank higher on Google, drive more organic traffic, and grow without paying per click."
      icon="🔍"
      description="Our SEO team in Dubai delivers comprehensive search engine optimization that gets your website ranking on Google page 1 for the keywords your customers are searching. We combine technical SEO, high-quality content, and strategic link building to drive sustainable organic growth for UAE businesses."
      features={["SEO Audit & Technical Analysis","Keyword Research & Strategy","On-Page SEO Optimization","Technical SEO (Speed, Core Web Vitals, Schema)","Content Strategy & Blog Writing","Local SEO for Dubai & UAE","Google Business Profile Optimization","Link Building & Outreach","Competitor Analysis","Monthly Ranking Reports","E-commerce SEO","Multilingual SEO (Arabic/English)"]}
      benefits={[
        { icon: "📈", title: "Sustainable Growth", desc: "Unlike paid ads, organic rankings continue to drive traffic 24/7 without ongoing ad spend." },
        { icon: "🎯", title: "Intent-Driven Traffic", desc: "SEO attracts people actively searching for what you offer — the highest-quality leads." },
        { icon: "🏆", title: "Brand Authority", desc: "Ranking on page 1 builds trust and credibility with your target audience." },
        { icon: "📍", title: "Local Dominance", desc: "Dominate 'near me' searches and Google Maps results across Dubai and UAE." },
        { icon: "📊", title: "Transparent Reporting", desc: "Clear monthly reports showing rankings, traffic, and conversions." },
        { icon: "✍️", title: "Quality Content", desc: "We create valuable, optimized content that ranks AND converts readers into customers." },
      ]}
      process={[
        { step: "1", title: "Audit", desc: "Comprehensive technical and content audit to identify opportunities." },
        { step: "2", title: "Strategy", desc: "Custom keyword strategy and content plan based on your goals." },
        { step: "3", title: "Optimization", desc: "Technical fixes, on-page optimization, and content creation." },
        { step: "4", title: "Link Building", desc: "Strategic link acquisition to build domain authority." },
      ]}
      faq={[
        { q: "How long does SEO take to work?", a: "You'll see initial improvements in 1–3 months, significant results in 4–6 months, and strong organic rankings within 6–12 months for competitive keywords." },
        { q: "How is SEO different from Google Ads?", a: "Google Ads stops the moment you stop paying. SEO builds long-term organic rankings that keep driving free traffic. Both work best together." },
        { q: "Do you write the content?", a: "Yes, our content team writes SEO-optimized blog posts, service pages, and landing pages in English and Arabic." },
        { q: "Do you do local SEO for Dubai?", a: "Yes, local SEO is one of our specialties — we optimize your Google Business Profile, local citations, and location pages for Dubai and UAE searches." },
      ]}
    />
  );
}
