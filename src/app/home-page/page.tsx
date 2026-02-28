import type { Metadata } from 'next';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import CaseTypesShowcase from './components/CaseTypesShowcase';
import FeaturesSection from './components/FeaturesSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';

export const metadata: Metadata = {
  title: 'Case Converter Hub — Free Online Text Case Converter Tool',
  description:
    'Free online text case converter. Convert text to UPPER CASE, lower case, Title Case, camelCase, snake_case, kebab-case and more — instantly, free, no sign-up required.',
  alternates: {
    canonical: 'https://www.caseconverterhub.com/',
  },
};

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--color-bg)',
        fontFamily: 'var(--font-body)',
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