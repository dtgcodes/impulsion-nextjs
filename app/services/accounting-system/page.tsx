import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting Software Dubai | Custom Accounting System UAE",
  description: "Custom accounting system development in Dubai. We build tailored accounting software for UAE businesses — invoicing, payroll, VAT filing, and real-time financial reporting.",
  alternates: { canonical: "/services/accounting-system" },
};

export default function AccountingPage() {
  return (
    <ServicePage
      title="Accounting System"
      tagline="Automate your finances with a custom accounting system built for UAE businesses."
      icon="🧾"
      description="We build custom accounting and financial management systems for businesses in the UAE that need more than off-the-shelf software can offer. Our accounting systems are fully tailored to UAE VAT requirements, multi-currency operations, and your specific chart of accounts and reporting needs."
      features={["Invoicing & Billing System","Expense Management","UAE VAT Calculation & Filing","Multi-currency Support","Chart of Accounts Setup","Bank Reconciliation","Financial Reporting (P&L, Balance Sheet)","Payroll Integration","Purchase Order Management","Supplier Payment Tracking","Customer Ledger Management","Audit Trail & Compliance"]}
      benefits={[
        { icon: "🇦🇪", title: "UAE VAT Compliant", desc: "Built to handle UAE VAT calculations, VAT returns, and FTA reporting requirements." },
        { icon: "💱", title: "Multi-Currency", desc: "Handle transactions in AED, USD, EUR, and any other currency with auto exchange rates." },
        { icon: "📊", title: "Real-time Reports", desc: "Instant profit & loss, balance sheet, and cash flow statements at any time." },
        { icon: "🔗", title: "ERP Integration", desc: "Seamlessly connects with your operations, inventory, and HR modules." },
        { icon: "🔒", title: "Secure & Auditable", desc: "Full audit trail for every transaction — essential for compliance and governance." },
        { icon: "☁️", title: "Cloud-Based", desc: "Access your accounts from anywhere on any device, anytime." },
      ]}
      process={[
        { step: "1", title: "Needs Analysis", desc: "We document your financial workflows, chart of accounts, and reporting needs." },
        { step: "2", title: "System Design", desc: "We design the accounting module structure for your approval." },
        { step: "3", title: "Development", desc: "Build, test, and validate all modules including VAT calculations." },
        { step: "4", title: "Data Migration & Training", desc: "Migrate existing data and train your finance team." },
      ]}
      faq={[
        { q: "Is the system UAE VAT compliant?", a: "Yes, all accounting systems we build include full UAE VAT compliance including VAT calculation, invoicing requirements, and FTA return filing support." },
        { q: "Can it integrate with our existing ERP?", a: "Yes, we build accounting systems as standalone or integrate them as a module into your existing ERP system." },
        { q: "Can we migrate data from QuickBooks/Tally?", a: "Yes, we can migrate your existing financial data from most accounting software." },
        { q: "How many users can access the system?", a: "Systems are built to support unlimited users with role-based access control for accountants, managers, and auditors." },
      ]}
    />
  );
}
