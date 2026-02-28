import type { Metadata } from 'next';
import NavBar from './home-page/components/NavBar';
import HeroSection from './home-page/components/HeroSection';
import HowItWorksSection from './home-page/components/HowItWorksSection';
import CaseTypesShowcase from './home-page/components/CaseTypesShowcase';
import FeaturesSection from './home-page/components/FeaturesSection';
import FAQSection from './home-page/components/FAQSection';
import FooterSection from './home-page/components/FooterSection';

export const metadata: Metadata = {
  title: 'Case Converter Hub — Free Online Text Case Converter Tool',
  description:
    'Free online text case converter. Convert text to UPPER CASE, lower case, Title Case, camelCase, snake_case, kebab-case and more — instantly, free, no sign-up required.',
  alternates: {
    canonical: 'https://www.caseconverterhub.com/',
  },
  openGraph: {
    title: 'Case Converter Hub — Free Online Text Case Converter Tool',
    description:
      'Paste your text and convert it to any case style in one click. Free, instant, private. Supports UPPER CASE, lower case, Title Case, camelCase, snake_case and more.',
    url: 'https://www.caseconverterhub.com/',
    type: 'website',
    images: [
      {
        url: '/assets/images/case-converter-og.png',
        width: 1200,
        height: 630,
        alt: 'Case Converter Hub — Free Online Text Case Converter Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Converter Hub — Free Online Text Case Converter Tool',
    description:
      'Paste your text and convert it to any case style in one click. Free, instant, private.',
    images: ['/assets/images/case-converter-og.png'],
  },
};

export default function RootPage() {
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
