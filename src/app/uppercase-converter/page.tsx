import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '../home-page/components/NavBar';
import FooterSection from '../home-page/components/FooterSection';
import CaseConverterTool from '../home-page/components/CaseConverterTool';

export const metadata: Metadata = {
  title: 'Uppercase Converter — Convert Text to UPPER CASE Online Free',
  description:
    'Free online uppercase converter. Instantly convert any text to UPPER CASE with one click. No sign-up, no download — works in your browser. Perfect for titles, headings, and emphasis.',
  alternates: {
    canonical: 'https://www.caseconverterhub.com/uppercase-converter',
  },
  openGraph: {
    title: 'Uppercase Converter — Convert Text to UPPER CASE Online Free',
    description:
      'Instantly convert any text to UPPER CASE online. Free, fast, and private — no sign-up required.',
    url: 'https://www.caseconverterhub.com/uppercase-converter',
    type: 'website',
    images: [{ url: '/assets/images/case-converter-og.png', width: 1200, height: 630, alt: 'Uppercase Converter Tool' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uppercase Converter — Convert Text to UPPER CASE Online Free',
    description: 'Instantly convert any text to UPPER CASE online. Free, fast, and private.',
    images: ['/assets/images/case-converter-og.png'],
  },
};

export default function UppercaseConverterPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'var(--font-body)' }}>
      <NavBar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="mb-8">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2" style={{ color: 'var(--color-text-light)' }}>
              <li><Link href="/" style={{ color: 'var(--color-primary)' }}>Home</Link></li>
              <li>/</li>
              <li>Uppercase Converter</li>
            </ol>
          </nav>
          <h1 className="font-heading mb-3" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
            Uppercase Text Converter
          </h1>
          <p style={{ color: 'var(--color-text-light)', fontSize: '17px', maxWidth: '600px', lineHeight: 1.6 }}>
            Convert any text to UPPER CASE instantly. Paste your text below and click <strong>UPPER CASE</strong> to transform it.
          </p>
        </div>

        <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', padding: 'clamp(20px, 4vw, 36px)', boxShadow: 'var(--shadow-tool)', border: '1px solid var(--color-border)' }}>
          <CaseConverterTool />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              What is an Uppercase Converter?
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              An uppercase converter is a tool that transforms all letters in your text to their capital form. For example, &quot;hello world&quot; becomes &quot;HELLO WORLD&quot;. It&apos;s useful for creating headings, acronyms, emphasis in writing, or formatting text for specific technical requirements.
            </p>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              When to Use UPPER CASE Text
            </h2>
            <ul className="space-y-2" style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              <li>• <strong>Acronyms and abbreviations</strong> — NASA, HTML, CSS, API</li>
              <li>• <strong>Headings and titles</strong> — for strong visual emphasis</li>
              <li>• <strong>Warning messages</strong> — CAUTION, WARNING, IMPORTANT</li>
              <li>• <strong>Programming constants</strong> — MAX_VALUE, DEFAULT_TIMEOUT</li>
              <li>• <strong>Social media posts</strong> — for emphasis and attention</li>
            </ul>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              Other Case Converters
            </h2>
            <div className="flex flex-wrap gap-2">
              {[['Lowercase', '/lowercase-converter'], ['Title Case', '/title-case-converter'], ['camelCase', '/camelcase-converter'], ['snake_case', '/snake-case-converter'], ['kebab-case', '/kebab-case-converter'], ['PascalCase', '/pascal-case-converter']].map(([label, href]) => (
                <Link key={href} href={href} style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
