"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // small delay so it slides in after page load
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (typeof window !== "undefined" && localStorage.getItem("cookie_consent")) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[90] transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#050d2d] border-t border-white/10 px-4 py-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
            We use cookies to improve your experience and analyse site traffic.
            By continuing, you agree to our use of cookies.
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="border border-white/20 text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="bg-[#f47c20] hover:bg-[#d4640a] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
