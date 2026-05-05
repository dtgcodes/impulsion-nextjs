import ServicePage from "@/components/ServicePage";
export const metadata = { title: "IT AMC Contract Dubai | Impulsion Technologies", description: "IT Annual Maintenance Contract services in Dubai UAE. Comprehensive IT support, maintenance, and network management for businesses." };
export default function ITAMCPage() {
  return (
    <ServicePage
      title="IT AMC Contract"
      tagline="Prevent costly downtime with proactive IT maintenance and support."
      icon="🔧"
      description="Our IT Annual Maintenance Contract (AMC) service gives Dubai businesses a dedicated IT team without the cost of full-time staff. We proactively maintain, monitor, and support your entire IT infrastructure — computers, servers, networks, and software — ensuring your business operations run uninterrupted."
      features={["Unlimited IT Support Visits","Remote Support & Helpdesk","Server & Network Monitoring","Software Updates & Patches","Antivirus & Security Management","Data Backup & Recovery","Hardware Maintenance & Repair","Printer & Peripheral Support","Email & Office 365 Management","IT Asset Inventory Management","Quarterly IT Health Reports","Emergency On-site Response"]}
      benefits={[
        { icon: "💰", title: "Cost Predictable", desc: "Fixed annual cost instead of unpredictable break-fix bills — budget with confidence." },
        { icon: "⚡", title: "Faster Response", desc: "Priority response times for AMC clients — remote support within 2 hours, on-site within 4 hours." },
        { icon: "🛡️", title: "Proactive Care", desc: "We prevent problems before they happen rather than waiting for things to break." },
        { icon: "👨‍💻", title: "Dedicated Team", desc: "Your own IT team without the overhead of permanent staff." },
        { icon: "📊", title: "IT Strategy", desc: "Quarterly health reviews and technology roadmap planning included." },
        { icon: "🔒", title: "Security Focus", desc: "Regular security audits, patch management, and cyber threat monitoring." },
      ]}
      process={[
        { step: "1", title: "IT Audit", desc: "We assess your existing IT infrastructure and identify gaps." },
        { step: "2", title: "Contract Setup", desc: "We define scope, response times, and deliverables for your AMC." },
        { step: "3", title: "Onboarding", desc: "We document your systems and set up monitoring tools." },
        { step: "4", title: "Ongoing Support", desc: "Regular maintenance, monitoring, and on-demand support throughout the year." },
      ]}
      faq={[
        { q: "What is included in an IT AMC?", a: "Our AMC covers all IT support, maintenance, hardware troubleshooting, software updates, network management, and quarterly reviews." },
        { q: "What are the response times?", a: "Remote support within 2 hours, on-site support within 4 hours for Dubai. Emergency support available 24/7 in premium packages." },
        { q: "Do you support all types of hardware?", a: "Yes, we support Windows and Mac desktops/laptops, servers, printers, routers, switches, and most IT peripherals." },
        { q: "Is hardware replacement included?", a: "Hardware parts are billed separately, but our labour for installation and configuration is included in the AMC." },
      ]}
    />
  );
}
