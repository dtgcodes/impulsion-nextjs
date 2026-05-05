import ServicePage from "@/components/ServicePage";
export const metadata = { title: "Social Media Management Dubai | Impulsion Technologies", description: "Professional social media management in Dubai UAE. Instagram, Facebook, LinkedIn, TikTok content creation, posting, and community management." };
export default function SMMPage() {
  return (
    <ServicePage
      title="Social Media Management"
      tagline="Build a powerful social media presence that attracts, engages, and converts."
      icon="📱"
      description="We manage your social media channels professionally — from content creation and graphic design to posting, community management, and analytics. Our Dubai-based social media team creates platform-specific strategies for Instagram, Facebook, LinkedIn, TikTok, and more to grow your brand and engage your audience."
      features={["Monthly Content Calendar & Strategy","Professional Graphic Design for Posts","Short-form Video Creation (Reels/TikTok)","Instagram, Facebook, LinkedIn, TikTok","Community Management & Replies","Hashtag Research & Optimization","Instagram Story & Highlight Design","Social Media Profile Optimization","Competitor Analysis & Benchmarking","Monthly Performance Reports","Influencer Coordination","Arabic & English Content"]}
      benefits={[
        { icon: "🎨", title: "Professional Content", desc: "On-brand graphics and videos that stand out in crowded social feeds." },
        { icon: "📅", title: "Consistent Posting", desc: "Regular, scheduled posting keeps your audience engaged and algorithms happy." },
        { icon: "💬", title: "Community Building", desc: "We respond to comments and messages, building a loyal community around your brand." },
        { icon: "📊", title: "Data-Driven", desc: "Every decision is backed by analytics to maximize reach and engagement." },
        { icon: "🌐", title: "Bilingual", desc: "Arabic and English content to reach the full UAE market." },
        { icon: "📱", title: "Platform Expertise", desc: "Strategies tailored for each platform's unique audience and algorithm." },
      ]}
      process={[
        { step: "1", title: "Brand Audit", desc: "We audit your current social presence and competitor landscape." },
        { step: "2", title: "Strategy", desc: "Custom content strategy and monthly calendar for your approval." },
        { step: "3", title: "Create & Post", desc: "We design, write, and post all content on schedule." },
        { step: "4", title: "Report", desc: "Monthly analytics report with insights and strategy adjustments." },
      ]}
      faq={[
        { q: "Which platforms do you manage?", a: "We manage Instagram, Facebook, LinkedIn, TikTok, Twitter/X, Snapchat, and YouTube." },
        { q: "How many posts per month?", a: "Packages typically include 12–20 posts per month depending on the platform. Reels/videos are included in premium packages." },
        { q: "Do I approve content before posting?", a: "Yes, we share the monthly content calendar for your approval before anything is posted." },
        { q: "Do you run ads as well?", a: "Yes, we offer combined social media management + paid advertising packages for maximum impact." },
      ]}
    />
  );
}
