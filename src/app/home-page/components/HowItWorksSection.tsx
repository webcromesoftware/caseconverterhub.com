"use client";

import { useEffect, useRef } from "react";
import Icon from "@/components/ui/AppIcon";

const steps = [
  {
    number: "01",
    icon: "ClipboardDocumentListIcon" as const,
    title: "Paste Your Text",
    description:
      "Copy any text from anywhere — an email, document, social media post, or just type it directly into the box.",
    color: "#0D6B8A",
    bg: "#E0F4FA",
  },
  {
    number: "02",
    icon: "CursorArrowRaysIcon" as const,
    title: "Click a Case Button",
    description:
      "Choose from 10 different text styles. Each button shows exactly what it does — no guesswork needed.",
    color: "#7C3AED",
    bg: "#F3EEFF",
  },
  {
    number: "03",
    icon: "ClipboardDocumentCheckIcon" as const,
    title: "Copy & Use Instantly",
    description:
      "Your text is transformed instantly. Hit \'Copy Text\' and paste it wherever you need it. Done!",
    color: "#059669",
    bg: "#ECFDF5",
  },
];

export default function HowItWorksSection() {
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
      { threshold: 0.15 }
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
      id="how-it-works"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="section-label mb-3">Simple as 1-2-3</p>
          <h2 className="section-heading mb-4">How It Works</h2>
          <p className="section-subheading max-w-xl mx-auto">
            No sign-up. No complicated settings. Just paste, click, and copy.
            It really is that easy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="scroll-hidden relative"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 left-[calc(100%+16px)] w-8 h-px"
                  style={{
                    background: "repeating-linear-gradient(90deg, var(--color-border) 0, var(--color-border) 4px, transparent 4px, transparent 8px)",
                    zIndex: 1,
                  }}
                />
              )}

              <div
                className="feature-card h-full flex flex-col"
                style={{ borderTop: `3px solid ${step.color}` }}
              >
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: step.bg }}
                  >
                    <Icon name={step.icon} size={22} style={{ color: step.color }} className="" />
                  </div>
                  <span
                    className="text-4xl font-heading font-black"
                    style={{ color: step.color, opacity: 0.15, letterSpacing: "-0.04em" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="font-heading font-700 mb-3"
                  style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)" }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--color-text-muted)",
                    lineHeight: "1.65",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}