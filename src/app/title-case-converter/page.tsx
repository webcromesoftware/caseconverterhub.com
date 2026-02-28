import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '../home-page/components/NavBar';
import FooterSection from '../home-page/components/FooterSection';
import CaseConverterTool from '../home-page/components/CaseConverterTool';

export const metadata: Metadata = {
  title: 'Title Case Converter — Convert Text to Title Case Online Free',
  description:
    'Free online title case converter. Instantly convert any text to Title Case — capitalizes the first letter of each word. Perfect for blog post titles, article headings, and book titles.',
  alternates: {
    canonical: 'https://www.caseconverterhub.com/title-case-converter',
  },
  openGraph: {
    title: 'Title Case Converter — Convert Text to Title Case Online Free',
    description:
      'Instantly convert any text to Title Case online. Free, fast, and private — no sign-up required.',
    url: 'https://www.caseconverterhub.com/title-case-converter',
    type: 'website',
    images: [{ url: '/assets/images/case-converter-og.png', width: 1200, height: 630, alt: 'Title Case Converter Tool' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Title Case Converter — Convert Text to Title Case Online Free',
    description: 'Instantly convert any text to Title Case online. Free, fast, and private.',
    images: ['/assets/images/case-converter-og.png'],
  },
};

export default function TitleCaseConverterPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'var(--font-body)' }}>
      <NavBar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="mb-8">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2" style={{ color: 'var(--color-text-light)' }}>
              <li><Link href="/" style={{ color: 'var(--color-primary)' }}>Home</Link></li>
              <li>/</li>
              <li>Title Case Converter</li>
            </ol>
          </nav>
          <h1 className="font-heading mb-3" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
            Title Case Text Converter
          </h1>
          <p style={{ color: 'var(--color-text-light)', fontSize: '17px', maxWidth: '600px', lineHeight: 1.6 }}>
            Convert any text to Title Case instantly. Paste your text below and click <strong>Title Case</strong> to capitalize every word.
          </p>
        </div>

        <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', padding: 'clamp(20px, 4vw, 36px)', boxShadow: 'var(--shadow-tool)', border: '1px solid var(--color-border)' }}>
          <CaseConverterTool />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              What is Title Case?
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              Title Case capitalizes the first letter of each significant word in a sentence. For example, &quot;the quick brown fox&quot; becomes &quot;The Quick Brown Fox&quot;. Minor words like articles (a, an, the) and prepositions (in, on, at) are typically kept lowercase unless they start the title.
            </p>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              When to Use Title Case
            </h2>
            <ul className="space-y-2" style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              <li>• <strong>Blog post and article titles</strong> — standard publishing convention</li>
              <li>• <strong>Book and movie titles</strong> — formal title formatting</li>
              <li>• <strong>Email subject lines</strong> — professional appearance</li>
              <li>• <strong>Product names</strong> — brand consistency</li>
              <li>• <strong>Navigation menu items</strong> — UI/UX best practice</li>
            </ul>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              Other Case Converters
            </h2>
            <div className="flex flex-wrap gap-2">
              {[['UPPERCASE', '/uppercase-converter'], ['lowercase', '/lowercase-converter'], ['camelCase', '/camelcase-converter'], ['snake_case', '/snake-case-converter'], ['kebab-case', '/kebab-case-converter'], ['PascalCase', '/pascal-case-converter']].map(([label, href]) => (
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
