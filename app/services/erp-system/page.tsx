import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom ERP System Development Dubai | ERP Software UAE",
  description: "Build a fully customized ERP system in Dubai. Impulsion Technologies develops ERP solutions for finance, HR, inventory, sales & operations. Trusted by 200+ UAE businesses. Get a free quote.",
  alternates: { canonical: "/services/erp-system" },
};



export default function ERPPage() {
  return (
    <ServicePage
      title="ERP System Development"
      tagline="Automate, integrate, and scale your entire business with a custom-built ERP."
      icon="💻"
      description="Impulsion Technologies specializes in building fully customized ERP systems for businesses in the UAE and beyond. Unlike off-the-shelf solutions, our ERP systems are designed around your specific business workflows — covering finance, HR, inventory, sales, purchasing, and more — all in one unified platform."
      features={[
        "Finance & Accounting Module",
        "HR & Payroll Management",
        "Inventory & Warehouse Management",
        "Sales & Purchase Order Management",
        "CRM & Customer Portal",
        "Manufacturing & Production",
        "Project Management",
        "Reports & Business Analytics",
        "Multi-branch & Multi-currency Support",
        "Mobile App Access",
        "Third-party API Integration",
        "Role-based Access Control",
      ]}
      benefits={[
        { icon: "🎯", title: "100% Customized", desc: "Built from scratch for your exact business requirements — no unnecessary features, no missing ones." },
        { icon: "📊", title: "Real-time Insights", desc: "Live dashboards and reports that give you instant visibility into every part of your business." },
        { icon: "🔗", title: "Seamless Integration", desc: "Connect with your existing tools, accounting software, e-commerce, and third-party APIs." },
        { icon: "📱", title: "Mobile Ready", desc: "Access your ERP from anywhere on any device with our responsive web and mobile interfaces." },
        { icon: "🔒", title: "Enterprise Security", desc: "Role-based access, data encryption, audit logs, and regular backups to keep your data safe." },
        { icon: "🚀", title: "Scalable Architecture", desc: "Grows with your business — from 5 users to 5,000 users without performance degradation." },
      ]}
      process={[
        { step: "1", title: "Discovery", desc: "We analyze your business workflows, pain points, and goals in depth." },
        { step: "2", title: "Design", desc: "We design the ERP architecture, modules, and UI/UX for your approval." },
        { step: "3", title: "Development", desc: "Our team builds and tests each module following agile sprints." },
        { step: "4", title: "Launch & Training", desc: "We deploy the ERP, migrate your data, and train your team." },
      ]}
      faq={[
        { q: "How long does it take to build a custom ERP?", a: "Typical ERP projects take 3–6 months depending on complexity. Simple systems can be done in 8–12 weeks while enterprise-grade systems with many modules may take longer." },
        { q: "How much does a custom ERP cost in Dubai?", a: "ERP development costs vary based on modules and complexity. Contact us for a free quote tailored to your specific requirements." },
        { q: "Can you integrate the ERP with our existing software?", a: "Yes, we integrate with most accounting software (QuickBooks, Zoho, Tally), e-commerce platforms, payment gateways, and custom APIs." },
        { q: "Do you provide training and ongoing support?", a: "Yes, all ERP projects include comprehensive staff training and 3–6 months of post-launch support. We also offer ongoing maintenance contracts." },
      ]}
    />
  );
}
