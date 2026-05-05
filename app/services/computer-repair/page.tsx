import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer & Laptop Repair Dubai | IT Support UAE",
  description: "Fast and reliable computer and laptop repair in Dubai. Hardware fixes, data recovery, virus removal, screen replacement, and IT support for homes and businesses across the UAE.",
  alternates: { canonical: "/services/computer-repair" },
};

export default function ComputerRepairPage() {
  return (
    <ServicePage
      title="Computer Repair"
      tagline="Fast, reliable laptop and desktop repair for Dubai businesses."
      icon="💾"
      description="Our technicians provide professional computer and laptop repair services for businesses in Dubai. Whether it's hardware failure, virus infection, slow performance, data recovery, or software issues, we diagnose and fix it quickly to minimize downtime for your team."
      features={["Laptop & Desktop Hardware Repair","Screen Replacement","Keyboard & Touchpad Replacement","Hard Drive & SSD Replacement","RAM Upgrade & Replacement","Battery Replacement","Virus & Malware Removal","OS Installation & Reinstallation","Data Recovery","Software Troubleshooting","Slow Computer Optimization","Network Adapter Repair"]}
      benefits={[
        { icon: "⚡", title: "Fast Turnaround", desc: "Most repairs completed same-day or next-day to get your team back to work." },
        { icon: "🔍", title: "Free Diagnosis", desc: "Free diagnostic assessment to identify the issue before any repair costs." },
        { icon: "💰", title: "Transparent Pricing", desc: "Clear upfront quotes — no hidden fees or surprises." },
        { icon: "🛡️", title: "Warranty", desc: "All repairs come with a 30-day warranty on parts and labour." },
        { icon: "🏢", title: "On-site & In-shop", desc: "We come to your office or you can bring equipment to our Business Bay workshop." },
        { icon: "💾", title: "Data Safety", desc: "We prioritize data safety — all repairs are done with your data protection in mind." },
      ]}
      process={[
        { step: "1", title: "Bring or Call", desc: "Drop off your device or call us for on-site collection in Dubai." },
        { step: "2", title: "Diagnose", desc: "Free diagnosis to identify the exact issue." },
        { step: "3", title: "Quote & Repair", desc: "We send you a quote, and on approval, repair your device." },
        { step: "4", title: "Return", desc: "Tested and working — returned same-day or next-day." },
      ]}
      faq={[
        { q: "Do you do on-site repairs?", a: "Yes, for businesses on AMC contracts or larger repair jobs, we offer on-site repairs at your office in Dubai." },
        { q: "How long does a typical repair take?", a: "Most common repairs (screen replacement, RAM, SSD, virus removal) are completed within the same day or next business day." },
        { q: "Can you recover data from a dead laptop?", a: "Yes, we offer professional data recovery services for hard drives, SSDs, and other storage media." },
        { q: "Do you repair Apple Macs?", a: "Yes, we repair both Windows and Apple Mac laptops and desktops." },
      ]}
    />
  );
}
