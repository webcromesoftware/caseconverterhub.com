import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import CaseTypesShowcase from "./components/CaseTypesShowcase";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";

export const metadata: Metadata = {
  title: "CaseConverter — Free Text Case Converter Online",
  description:
    "Convert text to UPPER CASE, lower case, Title Case, camelCase, snake_case and more — instantly, free, and with no sign-up required. The easiest text case tool online.",
  keywords: [
    "text case converter",
    "uppercase converter",
    "lowercase converter",
    "title case",
    "camelCase converter",
    "snake case",
    "online text tool",
    "free text converter",
  ],
  openGraph: {
    title: "CaseConverter — Free Text Case Converter Online",
    description:
      "Paste your text and convert it to any case style in one click. Free, instant, private.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Sticky Navigation */}
      <NavBar />

      {/* Hero + Tool */}
      <HeroSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Case Types Showcase */}
      <CaseTypesShowcase />

      {/* Features & Stats */}
      <FeaturesSection />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
