import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Dubai | iOS & Android Apps UAE",
  description: "Professional mobile app development in Dubai for iOS and Android. We build high-performance, feature-rich apps for UAE businesses. Get a free quote from our expert app development team.",
  alternates: { canonical: "/services/app-development" },
};

export default function AppDevPage() {
  return (
    <ServicePage
      title="App Development"
      tagline="Powerful iOS and Android apps that your users will love."
      icon="📱"
      description="We build native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences. From simple utility apps to complex enterprise mobile solutions, our Dubai-based development team handles design, development, testing, and App Store submission."
      features={["iOS App Development (Swift/SwiftUI)","Android App Development (Kotlin)","Cross-Platform Apps (React Native / Flutter)","UI/UX Design for Mobile","Backend API Development","Push Notifications","In-App Payments & Subscriptions","App Store & Play Store Submission","Admin Panel for App Management","Analytics Integration","Offline Mode Support","Maintenance & Updates"]}
      benefits={[
        { icon: "🎨", title: "Beautiful UI/UX", desc: "Intuitive, pixel-perfect interfaces that users love and keep coming back to." },
        { icon: "⚡", title: "High Performance", desc: "Native-level performance even in cross-platform builds." },
        { icon: "🔗", title: "API Integration", desc: "Connect with any backend, third-party service, or existing system." },
        { icon: "🏪", title: "Store Ready", desc: "We handle App Store and Google Play submission and approval process." },
        { icon: "📊", title: "Analytics Built In", desc: "Track usage, crashes, and user behavior from day one." },
        { icon: "🔄", title: "Ongoing Updates", desc: "Regular maintenance and feature updates to keep your app competitive." },
      ]}
      process={[
        { step: "1", title: "Wireframing", desc: "We map out the user journey and app screens with detailed wireframes." },
        { step: "2", title: "UI/UX Design", desc: "Beautiful, on-brand visual designs for every screen." },
        { step: "3", title: "Development", desc: "Sprint-based development with regular builds for you to test." },
        { step: "4", title: "Launch", desc: "QA testing, App Store submission, and post-launch monitoring." },
      ]}
      faq={[
        { q: "Should I build native or cross-platform?", a: "For most UAE startups and SMBs, we recommend React Native or Flutter for cost efficiency. Native is best for complex, performance-critical apps." },
        { q: "How much does an app cost?", a: "Simple apps start from AED 20,000. Complex apps with backend and admin panels range from AED 50,000–200,000+." },
        { q: "How long does app development take?", a: "MVP apps take 2–3 months. Full-featured apps typically take 4–8 months." },
        { q: "Do you maintain the app after launch?", a: "Yes, we offer monthly retainer packages for updates, bug fixes, and new feature development." },
      ]}
    />
  );
}
