"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const already = sessionStorage.getItem("loaded");
    if (already) return;

    setVisible(true);

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1200);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("loaded", "1");
    }, 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#020818] flex flex-col items-center justify-center gap-6 transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="Impulsion Technologies" style={{ height: "60px", width: "auto" }} />

      {/* Loading bar */}
      <div className="w-32 h-0.5 bg-[#f47c20]/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#f47c20] rounded-full"
          style={{
            animation: "loader-bar 1s ease-out forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes loader-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
