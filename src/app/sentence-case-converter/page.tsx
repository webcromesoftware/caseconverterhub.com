import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '../home-page/components/NavBar';
import FooterSection from '../home-page/components/FooterSection';
import CaseConverterTool from '../home-page/components/CaseConverterTool';

export const metadata: Metadata = {
  title: 'Sentence Case Converter — Convert Text to Sentence Case Online Free',
  description:
    'Free online sentence case converter. Instantly convert any text to sentence case — capitalizes only the first letter of each sentence. Perfect for fixing improperly capitalized text and writing.',
  alternates: {
    canonical: 'https://www.caseconverterhub.com/sentence-case-converter',
  },
  openGraph: {
    title: 'Sentence Case Converter — Convert Text to Sentence Case Online Free',
    description:
      'Instantly convert any text to sentence case online. Free, fast, and private — no sign-up required.',
    url: 'https://www.caseconverterhub.com/sentence-case-converter',
    type: 'website',
    images: [{ url: '/assets/images/case-converter-og.png', width: 1200, height: 630, alt: 'Sentence Case Converter Tool' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentence Case Converter — Convert Text to Sentence Case Online Free',
    description: 'Instantly convert any text to sentence case online. Free, fast, and private.',
    images: ['/assets/images/case-converter-og.png'],
  },
};

export default function SentenceCaseConverterPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'var(--font-body)' }}>
      <NavBar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="mb-8">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2" style={{ color: 'var(--color-text-light)' }}>
              <li><Link href="/" style={{ color: 'var(--color-primary)' }}>Home</Link></li>
              <li>/</li>
              <li>Sentence Case Converter</li>
            </ol>
          </nav>
          <h1 className="font-heading mb-3" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
            Sentence Case Text Converter
          </h1>
          <p style={{ color: 'var(--color-text-light)', fontSize: '17px', maxWidth: '600px', lineHeight: 1.6 }}>
            Convert any text to sentence case instantly. Paste your text below and click <strong>Sentence case</strong> to fix capitalization.
          </p>
        </div>

        <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', padding: 'clamp(20px, 4vw, 36px)', boxShadow: 'var(--shadow-tool)', border: '1px solid var(--color-border)' }}>
          <CaseConverterTool />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              What is Sentence Case?
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              Sentence case capitalizes only the first letter of the first word in each sentence, and any proper nouns. For example, &quot;THE QUICK BROWN FOX. IT JUMPED.&quot; becomes &quot;The quick brown fox. It jumped.&quot; This is the standard capitalization used in everyday writing.
            </p>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              When to Use Sentence Case
            </h2>
            <ul className="space-y-2" style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              <li>• <strong>Body text and paragraphs</strong> — standard writing convention</li>
              <li>• <strong>Email body content</strong> — professional and readable</li>
              <li>• <strong>Social media captions</strong> — natural, conversational tone</li>
              <li>• <strong>UI button labels</strong> — Google Material Design recommends sentence case</li>
              <li>• <strong>Fixing ALL CAPS text</strong> — normalize improperly capitalized content</li>
            </ul>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              Sentence Case vs Title Case
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              Sentence case capitalizes only the <strong>first word</strong> of a sentence (&quot;The quick brown fox&quot;), while Title Case capitalizes <strong>every significant word</strong> (&quot;The Quick Brown Fox&quot;). Use sentence case for body text and UI labels; use Title Case for headings and titles.
            </p>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              Other Case Converters
            </h2>
            <div className="flex flex-wrap gap-2">
              {[['UPPERCASE', '/uppercase-converter'], ['lowercase', '/lowercase-converter'], ['Title Case', '/title-case-converter'], ['camelCase', '/camelcase-converter'], ['snake_case', '/snake-case-converter'], ['kebab-case', '/kebab-case-converter']].map(([label, href]) => (
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
