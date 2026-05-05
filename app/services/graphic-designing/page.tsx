import ServicePage from "@/components/ServicePage";
export const metadata = { title: "Graphic Designing Dubai | Impulsion Technologies", description: "Professional graphic design services in Dubai UAE. Logo design, brand identity, marketing materials, social media graphics, and more." };
export default function GraphicDesignPage() {
  return (
    <ServicePage
      title="Graphic Designing"
      tagline="Visual design that makes your brand unforgettable."
      icon="🎨"
      description="Our creative design team in Dubai produces stunning visuals that communicate your brand's identity, values, and professionalism. From logo design and complete brand identities to marketing collateral and social media graphics, every design we create is crafted to make an impact."
      features={["Logo Design & Brand Identity","Business Card & Stationery Design","Social Media Post Design","Brochure & Flyer Design","Banner & Billboard Design","Presentation Design (PowerPoint/Keynote)","Packaging Design","Email Newsletter Templates","Infographic Design","Trade Show Display Design","Digital Ad Creatives","Annual Report Design"]}
      benefits={[
        { icon: "🎯", title: "Brand Consistency", desc: "All designs follow your brand guidelines for a consistent, professional image." },
        { icon: "✨", title: "Unique & Original", desc: "100% custom designs — never templates or stock graphics for your brand marks." },
        { icon: "⚡", title: "Fast Turnaround", desc: "Quick delivery without compromising quality — most projects done in 3–7 days." },
        { icon: "🔄", title: "Unlimited Revisions", desc: "We iterate until you're completely satisfied with the final design." },
        { icon: "📁", title: "All File Formats", desc: "Full ownership of print and digital files in all required formats (AI, PDF, PNG, JPG, SVG)." },
        { icon: "🌐", title: "Arabic Design", desc: "Bilingual Arabic/English design support for the UAE market." },
      ]}
      process={[
        { step: "1", title: "Brief", desc: "We understand your brand, audience, preferences, and design goals." },
        { step: "2", title: "Concepts", desc: "We present 2–3 initial design concepts for your feedback." },
        { step: "3", title: "Revise", desc: "We refine the chosen concept based on your feedback." },
        { step: "4", title: "Deliver", desc: "Final files delivered in all required formats with full ownership." },
      ]}
      faq={[
        { q: "How many revisions are included?", a: "We offer unlimited revisions until you're happy with the design. We want you to love the final result." },
        { q: "Do I own the design files?", a: "Yes, upon final payment you own all design files including the original working files (AI, PSD)." },
        { q: "Do you design in Arabic?", a: "Yes, our team includes Arabic design specialists for bilingual and Arabic-first design projects." },
        { q: "Can you redesign my existing logo?", a: "Yes, we offer logo revamps that modernize your existing mark while maintaining brand recognition." },
      ]}
    />
  );
}
