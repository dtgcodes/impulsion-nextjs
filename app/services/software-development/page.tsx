import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Dubai | Business Software UAE",
  description: "Professional custom software development in Dubai. We build scalable web apps, business tools, and enterprise software tailored to your UAE business workflow. Free consultation available.",
  alternates: { canonical: "/services/software-development" },
};



export default function SoftwareDevPage() {
  return (
    <ServicePage
      title="Software Development"
      tagline="Bespoke software that solves your unique business challenges."
      icon="🛠️"
      description="We design and build custom software applications from the ground up for businesses across UAE. Whether you need a business automation tool, a client management system, a specialized industry application, or any other software solution, our experienced development team delivers scalable, secure, and maintainable code."
      features={["Custom Business Application Development","Database Design & Architecture","REST API Development & Integration","Admin Panels & Management Dashboards","Automation & Workflow Tools","Legacy System Modernization","Cloud-Based Software (SaaS)","Multi-user Role-Based Access","Third-party Software Integration","Testing & QA Assurance","Documentation & Training","Ongoing Maintenance & Support"]}
      benefits={[
        { icon: "🎯", title: "Built for You", desc: "No generic templates — software designed specifically around your business requirements." },
        { icon: "🔧", title: "Maintainable Code", desc: "Clean, documented code that's easy to maintain, extend, and hand over." },
        { icon: "⚡", title: "High Performance", desc: "Optimized for speed and reliability — even under heavy load." },
        { icon: "🔒", title: "Secure by Design", desc: "Security best practices built in from day one, not added as an afterthought." },
        { icon: "📈", title: "Scalable", desc: "Architecture designed to scale as your user base and data grow." },
        { icon: "🤝", title: "Collaborative Process", desc: "Regular demos and feedback sessions so you always know where your project stands." },
      ]}
      process={[
        { step: "1", title: "Requirements", desc: "We document all requirements, workflows, and acceptance criteria." },
        { step: "2", title: "Architecture", desc: "We design the technical architecture and get your sign-off." },
        { step: "3", title: "Development", desc: "Agile sprints with regular demos and iterative feedback." },
        { step: "4", title: "Delivery", desc: "Full testing, deployment, documentation, and training." },
      ]}
      faq={[
        { q: "What technologies do you use?", a: "We work with PHP/Laravel, Python, Node.js, React, Next.js, Vue.js, MySQL, PostgreSQL, and more based on project needs." },
        { q: "Do you sign NDAs?", a: "Absolutely. We sign NDAs and IP assignment agreements before any project discussion." },
        { q: "Can you take over an existing project?", a: "Yes, we do code audits and can take over and improve existing software projects." },
        { q: "Do you offer post-launch support?", a: "Yes, we offer monthly retainer-based maintenance and support packages after launch." },
      ]}
    />
  );
}
