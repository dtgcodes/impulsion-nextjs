import ServicePage from "@/components/ServicePage";
export const metadata = { title: "Meta Ads (Facebook & Instagram Ads) Dubai | Impulsion Technologies", description: "Expert Meta Ads management in Dubai UAE. Facebook and Instagram advertising campaigns managed for lead generation, sales, and brand awareness." };
export default function MetaAdsPage() {
  return (
    <ServicePage
      title="Meta Ads (Facebook & Instagram)"
      tagline="Reach millions of UAE users with compelling Facebook and Instagram ad campaigns."
      icon="📘"
      description="We create and manage Meta (Facebook & Instagram) advertising campaigns that build brand awareness, generate qualified leads, and drive e-commerce sales. Our Dubai-based team handles everything from creative production to audience targeting, campaign management, and conversion optimization."
      features={["Facebook & Instagram Ad Campaigns","Lead Generation Campaigns","E-commerce Sales Campaigns","Brand Awareness & Reach Campaigns","Lookalike & Custom Audience Targeting","Retargeting & Dynamic Product Ads","Video Ad Production","Carousel & Story Ads","Meta Pixel Setup & Tracking","A/B Testing & Creative Optimization","WhatsApp Lead Integration","Monthly Analytics Reports"]}
      benefits={[
        { icon: "👥", title: "Massive Reach", desc: "Access millions of UAE users across Facebook, Instagram, and WhatsApp." },
        { icon: "🎯", title: "Laser Targeting", desc: "Target by demographics, interests, behaviors, location, and lookalike audiences." },
        { icon: "🎨", title: "Creative Excellence", desc: "Scroll-stopping ad creatives produced by our in-house design team." },
        { icon: "📊", title: "Full Funnel", desc: "From awareness to remarketing, we cover every stage of the buyer journey." },
        { icon: "💬", title: "WhatsApp Integration", desc: "Drive leads directly to WhatsApp for instant customer conversation." },
        { icon: "📈", title: "Proven ROAS", desc: "We optimize for revenue, not just clicks — expect a strong return on ad spend." },
      ]}
      process={[
        { step: "1", title: "Strategy", desc: "Audience research, campaign objectives, and creative brief." },
        { step: "2", title: "Creative Production", desc: "Design and copywriting for all ad formats." },
        { step: "3", title: "Launch & Test", desc: "A/B test multiple creatives and audiences from day one." },
        { step: "4", title: "Optimize & Scale", desc: "Scale winning ads and kill underperformers for maximum ROI." },
      ]}
      faq={[
        { q: "Do you create the ad graphics and videos?", a: "Yes, creative production is included — static graphics, animated posts, and short video ads." },
        { q: "What is the minimum budget for Meta Ads?", a: "We recommend a minimum of AED 3,000/month in ad spend for meaningful results in the UAE." },
        { q: "Can you target specific cities in UAE?", a: "Yes, we can target Dubai, Abu Dhabi, Sharjah, or any other location in the UAE with precise radius targeting." },
        { q: "Do you run Arabic language ads?", a: "Yes, all campaigns can be run in English, Arabic, or both to maximize reach in the UAE market." },
      ]}
    />
  );
}
