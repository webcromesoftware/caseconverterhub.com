"use client";

import { useEffect, useRef } from "react";

const caseShowcases = [
  {
    id: "sentence",
    label: "Sentence Case",
    before: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.",
    after: "The quick brown fox jumps over the lazy dog.",
    color: "#0D6B8A",
    bg: "#E0F4FA",
    use: "Emails, articles, normal writing",
  },
  {
    id: "upper",
    label: "UPPER CASE",
    before: "the quick brown fox",
    after: "THE QUICK BROWN FOX",
    color: "#7C3AED",
    bg: "#F3EEFF",
    use: "Headlines, emphasis, shouting",
  },
  {
    id: "lower",
    label: "lower case",
    before: "THE QUICK BROWN FOX",
    after: "the quick brown fox",
    color: "#0891B2",
    bg: "#E0F9FF",
    use: "Usernames, casual social posts",
  },
  {
    id: "title",
    label: "Title Case",
    before: "the quick brown fox jumps",
    after: "The Quick Brown Fox Jumps",
    color: "#059669",
    bg: "#ECFDF5",
    use: "Book titles, headings, names",
  },
  {
    id: "camel",
    label: "camelCase",
    before: "my variable name",
    after: "myVariableName",
    color: "#D97706",
    bg: "#FFFBEB",
    use: "JavaScript variables, JSON keys",
  },
  {
    id: "snake",
    label: "snake_case",
    before: "my variable name",
    after: "my_variable_name",
    color: "#475569",
    bg: "#F1F5F9",
    use: "Python, database column names",
  },
];

export default function CaseTypesShowcase() {
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
    const elements = sectionRef?.current?.querySelectorAll(".scroll-hidden");
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12"
      style={{ background: "var(--color-bg)" }}
      id="case-types"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="section-label mb-3">All Case Styles</p>
          <h2 className="section-heading mb-4">What Does Each Button Do?</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Not sure which case to use? Here's a plain-English guide to all 10
            text transformations — with before &amp; after examples.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseShowcases?.map((item, i) => (
            <div
              key={item?.id}
              className="scroll-hidden feature-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Label pill */}
              <div
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold mb-5"
                style={{ background: item?.bg, color: item?.color, letterSpacing: "0.04em" }}
              >
                {item?.label}
              </div>

              {/* Before → After */}
              <div className="space-y-2 mb-5">
                <div>
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: "var(--color-text-light)", textTransform: "uppercase", letterSpacing: "0.08em" }}
                  >
                    Before
                  </p>
                  <p
                    className="font-mono text-sm px-3 py-2 rounded-lg"
                    style={{
                      background: "#F1F5F9",
                      color: "var(--color-text-muted)",
                      fontSize: "13px",
                      lineHeight: "1.5",
                    }}
                  >
                    {item?.before}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={item?.color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>

                <div>
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: item?.color, textTransform: "uppercase", letterSpacing: "0.08em" }}
                  >
                    After
                  </p>
                  <p
                    className="font-mono text-sm px-3 py-2 rounded-lg font-semibold"
                    style={{
                      background: item?.bg,
                      color: item?.color,
                      fontSize: "13px",
                      lineHeight: "1.5",
                    }}
                  >
                    {item?.after}
                  </p>
                </div>
              </div>

              {/* Use case */}
              <div
                className="flex items-center gap-2 text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
                <span>Best for: {item?.use}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}