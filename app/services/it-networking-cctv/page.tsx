import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Networking & CCTV Installation Dubai | Network Setup UAE",
  description: "Professional IT networking and CCTV installation in Dubai. Office network setup, structured cabling, WiFi systems, and security cameras for UAE businesses. Fast and reliable service.",
  alternates: { canonical: "/services/it-networking-cctv" },
};

export default function NetworkingPage() {
  return (
    <ServicePage
      title="IT Networking & CCTV"
      tagline="Reliable, secure, and fast office networks and surveillance systems."
      icon="🌐"
      description="We design, install, and maintain complete IT networking solutions and CCTV surveillance systems for offices and commercial spaces across Dubai. From structured cabling and WiFi access points to IP camera systems and NVR setup, we deliver professional, enterprise-grade installations."
      features={["Structured Network Cabling (Cat6/Cat6A)","Router & Firewall Configuration","Managed Switch Setup & Configuration","WiFi Access Point Installation","VLAN & Network Segmentation","VPN & Remote Access Setup","IP CCTV Camera Installation","NVR/DVR Setup & Configuration","Remote CCTV Monitoring Access","Server Room Setup & Cooling","Network Documentation","Annual Maintenance & Support"]}
      benefits={[
        { icon: "⚡", title: "High Performance", desc: "Gigabit networks that handle modern workloads without bottlenecks." },
        { icon: "🔒", title: "Secure by Design", desc: "Firewalls, VLANs, and access controls to protect your business data." },
        { icon: "📡", title: "Full WiFi Coverage", desc: "Enterprise-grade access points for seamless wireless coverage across your office." },
        { icon: "📹", title: "HD CCTV", desc: "4K and HD IP cameras with night vision, motion detection, and remote access." },
        { icon: "☁️", title: "Cloud Access", desc: "View your CCTV live or recorded footage from anywhere on your phone." },
        { icon: "🛠️", title: "Professional Installation", desc: "Clean, professional cable management and installation that meets UAE standards." },
      ]}
      process={[
        { step: "1", title: "Survey", desc: "On-site survey to assess the space and plan the network/CCTV layout." },
        { step: "2", title: "Design", desc: "Detailed network diagram and CCTV camera placement plan." },
        { step: "3", title: "Installation", desc: "Professional installation of all equipment with minimal disruption." },
        { step: "4", title: "Testing & Handover", desc: "Full testing, documentation, and user training before handover." },
      ]}
      faq={[
        { q: "How long does an office network installation take?", a: "A standard office setup takes 1–3 days. Large offices or multi-floor installations may take longer." },
        { q: "What CCTV brands do you use?", a: "We work with Hikvision, Dahua, and other leading brands. We recommend based on your budget and requirements." },
        { q: "Can I view CCTV remotely?", a: "Yes, we configure remote access so you can view live and recorded footage from your phone or computer anywhere." },
        { q: "Do you offer maintenance contracts for networks?", a: "Yes, we offer annual maintenance contracts for networking and CCTV systems." },
      ]}
    />
  );
}
