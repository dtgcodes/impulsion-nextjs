import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Management Dubai | PPC Agency UAE",
  description: "Certified Google Ads management in Dubai. We create and optimize PPC campaigns on Search, Display & YouTube that drive qualified leads and maximize ROI for UAE businesses.",
  alternates: { canonical: "/services/google-ads" },
};

export default function GoogleAdsPage() {
  return (
    <ServicePage
      title="Google Ads"
      tagline="Get in front of customers the moment they search for what you offer."
      icon="🎯"
      description="Our certified Google Ads specialists in Dubai create and manage high-performance PPC campaigns that deliver qualified leads and sales. We manage every aspect — keyword research, ad copy, bidding strategy, landing pages, and conversion tracking — to maximize your advertising ROI."
      features={["Google Search Ads Campaign Management","Google Display Network Campaigns","YouTube Video Advertising","Google Shopping Campaigns","Remarketing & Retargeting Campaigns","Keyword Research & Negative Keywords","Ad Copy Writing & A/B Testing","Landing Page Optimization","Conversion Tracking Setup","Quality Score Optimization","Competitor Analysis","Monthly Performance Reports"]}
      benefits={[
        { icon: "🎯", title: "Instant Visibility", desc: "Appear on Google page 1 the same day your campaign launches." },
        { icon: "📊", title: "Pay Per Click", desc: "You only pay when someone clicks your ad — no wasted spend on impressions." },
        { icon: "🔍", title: "Intent Targeting", desc: "Reach people actively searching for your products or services in Dubai." },
        { icon: "📈", title: "Measurable ROI", desc: "Every click, lead, and sale is tracked so you know exactly what your ads are producing." },
        { icon: "⚙️", title: "Expert Management", desc: "Google certified specialists who optimize your campaigns daily for peak performance." },
        { icon: "🔄", title: "Continuous Optimization", desc: "Ongoing A/B testing and bid optimization to lower costs and increase conversions." },
      ]}
      process={[
        { step: "1", title: "Audit & Research", desc: "Keyword research, competitor analysis, and campaign strategy." },
        { step: "2", title: "Campaign Setup", desc: "Account structure, ad groups, creatives, and tracking setup." },
        { step: "3", title: "Launch & Monitor", desc: "Campaigns go live with daily monitoring and optimization." },
        { step: "4", title: "Report & Scale", desc: "Monthly reports with insights and budget recommendations." },
      ]}
      faq={[
        { q: "What is the minimum Google Ads budget?", a: "We recommend a minimum daily budget of AED 100–200 (AED 3,000–6,000/month) for meaningful results in the Dubai market." },
        { q: "How quickly will I see results?", a: "Google Ads can drive leads within hours of going live. Campaigns typically reach optimal performance within 2–4 weeks of optimization." },
        { q: "Is your management fee separate from ad spend?", a: "Yes, our management fee is charged separately from your Google Ads budget. You pay Google directly for your ad spend." },
        { q: "Can you run Google Ads in Arabic?", a: "Yes, we create bilingual Arabic/English campaigns to capture the full UAE market." },
      ]}
    />
  );
}
