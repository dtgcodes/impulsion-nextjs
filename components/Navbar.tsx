"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "ERP System", href: "/services/erp-system" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Accounting System", href: "/services/accounting-system" },
  { label: "Customized Software", href: "/services/customized-software" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "SEO", href: "/services/seo" },
  { label: "Social Media Management", href: "/services/social-media-management" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "Graphic Designing", href: "/services/graphic-designing" },
  { label: "IT AMC Contract", href: "/services/it-amc-contract" },
  { label: "IT Networking & CCTV", href: "/services/it-networking-cctv" },
  { label: "Computer Repair", href: "/services/computer-repair" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#020818] border-b border-white/8 shadow-xl shadow-black/30"
        : "bg-[#020818]/80 backdrop-blur-lg"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Impulsion Technologies"
              style={{ height: "52px", width: "auto", maxWidth: "220px", objectFit: "contain", display: "block" }}
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Work", href: "/our-work" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                className="text-gray-300 hover:text-[#f47c20] text-sm font-medium transition-colors">
                {item.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-300 hover:text-[#f47c20] text-sm font-medium transition-colors">
                Services
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#050d2d] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                <div className="p-2 grid grid-cols-1">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href}
                      className="px-4 py-2.5 text-sm text-gray-300 hover:bg-[#f47c20]/10 hover:text-[#f47c20] rounded-xl transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* ── CTA Buttons ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://wa.me/971501668568" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <Link href="/contact"
              className="bg-[#f47c20] hover:bg-[#d4640a] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-lg shadow-[#f47c20]/20">
              Get A Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-[#050d2d] border-t border-white/5 px-4 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[650px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}>
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Our Work", href: "/our-work" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-300 hover:text-[#f47c20] text-sm font-medium border-b border-white/5">
              {item.label}
            </Link>
          ))}
          <div className="border-b border-white/5">
            <button onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full py-3 text-gray-300 text-sm font-medium">
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pl-4 pb-3 space-y-1">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)}
                    className="block py-2 text-sm text-gray-400 hover:text-[#f47c20]">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="pt-4 flex flex-col gap-3">
            <a href="https://wa.me/971501668568" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#25D366]/40 text-[#25D366] py-2.5 rounded-xl text-sm font-semibold">
              WhatsApp Us
            </a>
            <Link href="/contact" onClick={() => setMenuOpen(false)}
              className="block bg-[#f47c20] text-white text-center py-2.5 rounded-xl text-sm font-bold">
              Get A Quote
            </Link>
          </div>
      </div>
    </header>
  );
}
