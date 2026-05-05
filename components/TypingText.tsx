"use client";
import { useEffect, useState } from "react";

const WORDS = [
  "ERP System",
  "Web Development",
  "App Development",
  "Digital Marketing",
  "Software Development",
  "SEO Services",
  "Graphic Designing",
  "IT Support",
];

export default function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  return (
    <span className="text-[#f47c20]">
      {displayed}
      <span className="inline-block w-0.5 h-[0.9em] bg-[#f47c20] ml-1 align-middle animate-pulse" />
    </span>
  );
}
