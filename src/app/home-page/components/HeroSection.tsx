"use client";

import CaseConverterTool from "./CaseConverterTool";

const tickerItems = [
  "Sentence Case", "UPPER CASE", "lower case", "Title Case", "camelCase",
  "PascalCase", "snake_case", "kebab-case", "aLtErNaTiNg CaSe", "iNVERSE cASE",
  "Sentence Case", "UPPER CASE", "lower case", "Title Case", "camelCase",
  "PascalCase", "snake_case", "kebab-case", "aLtErNaTiNg CaSe", "iNVERSE cASE",
];

const tickerColors = [
  "#0D6B8A", "#7C3AED", "#0891B2", "#059669", "#D97706",
  "#E11D48", "#475569", "#4338CA", "#0D6B8A", "#7C3AED",
  "#0D6B8A", "#7C3AED", "#0891B2", "#059669", "#D97706",
  "#E11D48", "#475569", "#4338CA", "#0D6B8A", "#7C3AED",
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* ── Background orbs ── */}
      <div
        className="hero-orb"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(38,198,218,0.08) 0%, transparent 70%)",
          top: "-200px",
          right: "-200px",
        }}
      />
      <div
        className="hero-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(13,107,138,0.06) 0%, transparent 70%)",
          bottom: "-100px",
          left: "-100px",
        }}
      />
      {/* ── Main hero content ── */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-25 pb-16">

        {/* Badge */}
        <div className="flex justify-center mb-6 animate-fade-in-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: "var(--color-primary-light)",
              color: "var(--color-primary)",
              border: "1px solid rgba(13, 107, 138, 0.2)",
              fontFamily: "var(--font-body)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--color-accent)" }}
            />
            Free · No Sign-Up · 100% Private
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-5 animate-fade-in-up delay-100">
          <h1
            className="font-heading"
            style={{
              fontSize: "clamp(38px, 6vw, 68px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
            }}
          >
            Change Text Case
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Instantly
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <p
          className="text-center section-subheading max-w-xl mx-auto mb-12 animate-fade-in-up delay-200"
          style={{ fontSize: "18px" }}
        >
          Paste your text, click a button, done. Convert between UPPER CASE,
          lower case, Title Case, camelCase and 6 more — in one click.
        </p>

        {/* ── The Tool ── */}
        <div
          id="converter-tool"
          className="animate-fade-in-up delay-300"
          style={{
            background: "var(--color-surface)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(20px, 4vw, 40px)",
            boxShadow: "var(--shadow-tool)",
            border: "1px solid var(--color-border)",
            position: "relative",
          }}
        >
          {/* Tool header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              {/* Traffic light dots */}
              {["#EF4444", "#F59E0B", "#10B981"]?.map((c) => (
                <div
                  key={c}
                  className="w-3 h-3 rounded-full"
                  style={{ background: c, opacity: 0.7 }}
                />
              ))}
              <span
                className="ml-2 text-xs font-medium"
                style={{ color: "var(--color-text-light)", fontFamily: "var(--font-body)" }}
              >
                CaseConverter Tool
              </span>
            </div>
            <div
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: "var(--color-primary-light)",
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              ✦ Live preview
            </div>
          </div>

          <CaseConverterTool />
        </div>
      </div>
      {/* ── Ticker / Marquee ── */}
      <div
        className="w-full overflow-hidden border-y py-4"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-surface)",
        }}
      >
        <div className="marquee-track">
          {tickerItems?.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-4 mx-6 text-sm font-bold"
              style={{
                color: tickerColors?.[i % tickerColors?.length],
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.02em",
                opacity: 0.75,
                fontSize: "13px",
              }}
            >
              {item}
              <span style={{ color: "var(--color-border)", fontWeight: 300 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
