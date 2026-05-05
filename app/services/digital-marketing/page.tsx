import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Dubai | Google & Meta Ads UAE",
  description: "Top digital marketing agency in Dubai. We run Google Ads, Meta Ads, TikTok campaigns & social media marketing that generate real leads and measurable ROI for UAE businesses.",
  alternates: { canonical: "/services/digital-marketing" },
};



export default function DigitalMarketingPage() {
  return (
    <ServicePage
      title="Digital Marketing"
      tagline="Data-driven campaigns that turn clicks into customers and grow your revenue."
      icon="📈"
      description="Our digital marketing team in Dubai creates and manages comprehensive online marketing campaigns that deliver measurable ROI. From paid advertising to organic growth strategies, we help UAE businesses reach the right audience at the right time and convert them into loyal customers."
      features={[
        "Google Ads (Search, Display, Shopping, YouTube)",
        "Meta Ads (Facebook & Instagram)",
        "LinkedIn Advertising",
        "TikTok & Snapchat Ads",
        "Search Engine Optimization (SEO)",
        "Social Media Management",
        "Content Marketing & Blogging",
        "Email Marketing Campaigns",
        "Conversion Rate Optimization (CRO)",
        "Analytics & Monthly Reporting",
        "Remarketing Campaigns",
        "Influencer Marketing",
      ]}
      benefits={[
        { icon: "📊", title: "Data-Driven", desc: "Every decision is backed by real data — we track, measure, and optimize for maximum ROI." },
        { icon: "🎯", title: "Targeted Reach", desc: "Reach exactly the right audience in Dubai and across the UAE with precision targeting." },
        { icon: "📈", title: "Proven Results", desc: "We have delivered consistent growth for 150+ clients across industries in the UAE." },
        { icon: "🔄", title: "Full-Funnel Strategy", desc: "From awareness to conversion, we manage every stage of the customer journey." },
        { icon: "📱", title: "Multi-Platform", desc: "We run campaigns across all major platforms — Google, Meta, TikTok, LinkedIn, and more." },
        { icon: "📋", title: "Transparent Reporting", desc: "Monthly reports with clear metrics, insights, and recommendations — no jargon." },
      ]}
      process={[
        { step: "1", title: "Audit & Strategy", desc: "We audit your current presence and build a custom digital marketing strategy." },
        { step: "2", title: "Campaign Setup", desc: "We create ad accounts, campaigns, creatives, and targeting structures." },
        { step: "3", title: "Launch & Optimize", desc: "Campaigns go live with continuous A/B testing and optimization." },
        { step: "4", title: "Report & Scale", desc: "Monthly reports with insights to grow what's working and fix what's not." },
      ]}
      faq={[
        { q: "How much should I budget for digital marketing in Dubai?", a: "We recommend a minimum monthly ad spend of AED 3,000–5,000 for meaningful results. We work with budgets of all sizes." },
        { q: "How long before I see results?", a: "Paid advertising can drive results within days. SEO typically takes 3–6 months for significant organic growth." },
        { q: "Do you work with a specific industry?", a: "We work with all industries in the UAE including real estate, e-commerce, retail, hospitality, healthcare, education, and B2B." },
        { q: "Do you create the ad creatives?", a: "Yes, our in-house design team creates all ad graphics, videos, and copy as part of the service." },
      ]}
    />
  );
}
