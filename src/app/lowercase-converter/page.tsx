import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '../home-page/components/NavBar';
import FooterSection from '../home-page/components/FooterSection';
import CaseConverterTool from '../home-page/components/CaseConverterTool';

export const metadata: Metadata = {
  title: 'Lowercase Converter — Convert Text to lowercase Online Free',
  description:
    'Free online lowercase converter. Instantly convert any text to lowercase with one click. No sign-up, no download — works in your browser. Great for normalizing text, usernames, and code.',
  alternates: {
    canonical: 'https://www.caseconverterhub.com/lowercase-converter',
  },
  openGraph: {
    title: 'Lowercase Converter — Convert Text to lowercase Online Free',
    description:
      'Instantly convert any text to lowercase online. Free, fast, and private — no sign-up required.',
    url: 'https://www.caseconverterhub.com/lowercase-converter',
    type: 'website',
    images: [{ url: '/assets/images/case-converter-og.png', width: 1200, height: 630, alt: 'Lowercase Converter Tool' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lowercase Converter — Convert Text to lowercase Online Free',
    description: 'Instantly convert any text to lowercase online. Free, fast, and private.',
    images: ['/assets/images/case-converter-og.png'],
  },
};

export default function LowercaseConverterPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'var(--font-body)' }}>
      <NavBar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="mb-8">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2" style={{ color: 'var(--color-text-light)' }}>
              <li><Link href="/" style={{ color: 'var(--color-primary)' }}>Home</Link></li>
              <li>/</li>
              <li>Lowercase Converter</li>
            </ol>
          </nav>
          <h1 className="font-heading mb-3" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
            Lowercase Text Converter
          </h1>
          <p style={{ color: 'var(--color-text-light)', fontSize: '17px', maxWidth: '600px', lineHeight: 1.6 }}>
            Convert any text to lowercase instantly. Paste your text below and click <strong>lower case</strong> to transform it.
          </p>
        </div>

        <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', padding: 'clamp(20px, 4vw, 36px)', boxShadow: 'var(--shadow-tool)', border: '1px solid var(--color-border)' }}>
          <CaseConverterTool />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              What is a Lowercase Converter?
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              A lowercase converter transforms all letters in your text to their small form. For example, &quot;Hello World&quot; becomes &quot;hello world&quot;. It&apos;s essential for normalizing data, creating consistent usernames, writing code variables, and formatting URLs.
            </p>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              When to Use Lowercase Text
            </h2>
            <ul className="space-y-2" style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              <li>• <strong>Email addresses</strong> — standardized in lowercase</li>
              <li>• <strong>Usernames and handles</strong> — consistent formatting</li>
              <li>• <strong>URL slugs</strong> — lowercase URLs are SEO-friendly</li>
              <li>• <strong>Database queries</strong> — case-insensitive comparisons</li>
              <li>• <strong>CSS class names</strong> — convention in web development</li>
            </ul>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              Other Case Converters
            </h2>
            <div className="flex flex-wrap gap-2">
              {[['UPPERCASE', '/uppercase-converter'], ['Title Case', '/title-case-converter'], ['camelCase', '/camelcase-converter'], ['snake_case', '/snake-case-converter'], ['kebab-case', '/kebab-case-converter'], ['PascalCase', '/pascal-case-converter']].map(([label, href]) => (
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
