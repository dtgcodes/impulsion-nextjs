import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customized Software Development Dubai | Bespoke Business Software UAE",
  description: "Bespoke software development in Dubai tailored to your exact business needs. We build custom tools, automation software, portals, and enterprise applications for UAE companies.",
  alternates: { canonical: "/services/customized-software" },
};

export default function CustomSoftwarePage() {
  return (
    <ServicePage
      title="Customized Software"
      tagline="If you can imagine it, we can build it — any software, any industry."
      icon="⚙️"
      description="Not every business fits into a standard software category. If you need a specialized tool, a unique business application, or an industry-specific system that doesn't exist yet, our team builds it from scratch. We work with businesses across all industries to turn complex requirements into clean, reliable software."
      features={["Industry-Specific Applications","Workflow Automation Tools","Custom Admin Panels","Client & Partner Portals","Document Management Systems","Appointment & Booking Systems","Auction & Bidding Platforms","Property Management Systems","Field Service Management","HR & Recruitment Platforms","E-learning & Training Portals","Any Custom Business Requirement"]}
      benefits={[
        { icon: "🎯", title: "Exactly What You Need", desc: "No compromises — built to your exact specifications and workflows." },
        { icon: "🚀", title: "Competitive Advantage", desc: "Software that competitors can't buy off the shelf gives you a real edge." },
        { icon: "🔗", title: "Full Integration", desc: "Integrate with any existing system, API, or third-party tool." },
        { icon: "📈", title: "Scales With You", desc: "Architecture designed to grow with your business and user base." },
        { icon: "🔒", title: "Full Ownership", desc: "You own 100% of the code — no vendor lock-in." },
        { icon: "🤝", title: "Long-term Partnership", desc: "We stay involved for support, updates, and new features as your needs evolve." },
      ]}
      process={[
        { step: "1", title: "Discovery", desc: "Deep dive into your requirements, workflows, and success criteria." },
        { step: "2", title: "Prototype", desc: "We build a clickable prototype so you can validate the concept." },
        { step: "3", title: "Build", desc: "Full development in agile sprints with regular demos." },
        { step: "4", title: "Launch", desc: "QA, deployment, training, and ongoing support." },
      ]}
      faq={[
        { q: "Do you have experience in my industry?", a: "We have built software for automotive, shipping, logistics, real estate, healthcare, retail, hospitality, and many other UAE industries." },
        { q: "How do I know if I need custom software?", a: "If no existing software fits your workflow, or existing tools require too many workarounds, custom software is likely the right answer." },
        { q: "Who owns the source code?", a: "You own 100% of the source code and all IP upon final payment." },
        { q: "Can you build software that I have a design for?", a: "Yes, if you have wireframes, designs, or specifications already, we can build directly from those." },
      ]}
    />
  );
}
