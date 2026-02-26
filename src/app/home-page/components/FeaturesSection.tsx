"use client";

import { useEffect, useRef } from "react";
import Icon from "@/components/ui/AppIcon";

const features = [
  {
    icon: "BoltIcon" as const,
    title: "Instant Conversion",
    description:
      "Text transforms the moment you click — no loading, no waiting, no page refresh. Lightning fast.",
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: "DevicePhoneMobileIcon" as const,
    title: "Works on Any Device",
    description:
      "Phone, tablet, laptop, or desktop — CaseConverter works perfectly on every screen size.",
    color: "#0891B2",
    bg: "#E0F9FF",
  },
  {
    icon: "ShieldCheckIcon" as const,
    title: "100% Private",
    description:
      "Your text never leaves your device. Everything is processed in your browser — zero servers, zero tracking.",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    icon: "ArrowDownTrayIcon" as const,
    title: "Download as File",
    description:
      "Need to save your converted text? Download it as a .txt file with one click.",
    color: "#7C3AED",
    bg: "#F3EEFF",
  },
  {
    icon: "CalculatorIcon" as const,
    title: "Live Word Counter",
    description:
      "Always know your character count, word count, sentence count, and line count in real time.",
    color: "#0D6B8A",
    bg: "#E0F4FA",
  },
  {
    icon: "FaceSmileIcon" as const,
    title: "No Sign-Up Required",
    description:
      "Just open the page and start converting. No account, no email, no credit card — ever.",
    color: "#E11D48",
    bg: "#FFF1F2",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".scroll-hidden");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12"
      style={{ background: "var(--color-surface)" }}
      id="features"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="section-label mb-3">Why CaseConverter</p>
          <h2 className="section-heading mb-4">Built for Real People</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Not just another text tool — CaseConverter is designed from the
            ground up to be fast, private, and genuinely easy to use.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="scroll-hidden feature-card group"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: feature.bg }}
              >
                <Icon name={feature.icon} size={22} style={{ color: feature.color }} className="" />
              </div>
              <h3
                className="font-heading font-bold mb-2"
                style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)" }}
              >
                {feature.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div
          className="scroll-hidden mt-16 rounded-xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ background: "var(--color-primary)", transitionDelay: "400ms" }}
        >
          {[
            { value: "100M+", label: "Text Conversions" },
            { value: "10", label: "Case Styles" },
            { value: "0ms", label: "Processing Delay" },
            { value: "Free", label: "Forever" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-heading font-black mb-1"
                style={{ fontSize: "clamp(28px, 5vw, 40px)", color: "white", letterSpacing: "-0.03em" }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}