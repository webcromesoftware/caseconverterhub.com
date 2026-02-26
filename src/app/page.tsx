import type { Metadata } from "next";
import NavBar from "./home-page/components/NavBar";
import HeroSection from "./home-page/components/HeroSection";
import HowItWorksSection from "./home-page/components/HowItWorksSection";
import CaseTypesShowcase from "./home-page/components/CaseTypesShowcase";
import FeaturesSection from "./home-page/components/FeaturesSection";
import FAQSection from "./home-page/components/FAQSection";
import FooterSection from "./home-page/components/FooterSection";

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

export default function RootPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg)",
        fontFamily: "var(--font-body)",
      }}
    >
      <NavBar />
      <HeroSection />
      <HowItWorksSection />
      <CaseTypesShowcase />
      <FeaturesSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
