import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '../home-page/components/NavBar';
import FooterSection from '../home-page/components/FooterSection';
import CaseConverterTool from '../home-page/components/CaseConverterTool';

export const metadata: Metadata = {
  title: 'camelCase Converter — Convert Text to camelCase Online Free',
  description:
    'Free online camelCase converter. Instantly convert any text to camelCase — removes spaces and capitalizes each word except the first. Essential for JavaScript, Java, and TypeScript developers.',
  alternates: {
    canonical: 'https://www.caseconverterhub.com/camelcase-converter',
  },
  openGraph: {
    title: 'camelCase Converter — Convert Text to camelCase Online Free',
    description:
      'Instantly convert any text to camelCase online. Free, fast, and private — no sign-up required.',
    url: 'https://www.caseconverterhub.com/camelcase-converter',
    type: 'website',
    images: [{ url: '/assets/images/case-converter-og.png', width: 1200, height: 630, alt: 'camelCase Converter Tool' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'camelCase Converter — Convert Text to camelCase Online Free',
    description: 'Instantly convert any text to camelCase online. Free, fast, and private.',
    images: ['/assets/images/case-converter-og.png'],
  },
};

export default function CamelCaseConverterPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'var(--font-body)' }}>
      <NavBar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="mb-8">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2" style={{ color: 'var(--color-text-light)' }}>
              <li><Link href="/" style={{ color: 'var(--color-primary)' }}>Home</Link></li>
              <li>/</li>
              <li>camelCase Converter</li>
            </ol>
          </nav>
          <h1 className="font-heading mb-3" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
            camelCase Text Converter
          </h1>
          <p style={{ color: 'var(--color-text-light)', fontSize: '17px', maxWidth: '600px', lineHeight: 1.6 }}>
            Convert any text to camelCase instantly. Paste your text below and click <strong>camelCase</strong> to transform it for use in code.
          </p>
        </div>

        <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', padding: 'clamp(20px, 4vw, 36px)', boxShadow: 'var(--shadow-tool)', border: '1px solid var(--color-border)' }}>
          <CaseConverterTool />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              What is camelCase?
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              camelCase is a naming convention where words are joined without spaces, and each word after the first starts with a capital letter. For example, &quot;my variable name&quot; becomes &quot;myVariableName&quot;. The name comes from the humps that the capital letters create, resembling a camel&apos;s back.
            </p>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              When to Use camelCase
            </h2>
            <ul className="space-y-2" style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              <li>• <strong>JavaScript variables and functions</strong> — const myVariable, function handleClick()</li>
              <li>• <strong>Java and C# identifiers</strong> — standard naming convention</li>
              <li>• <strong>TypeScript interfaces and properties</strong> — firstName, lastName</li>
              <li>• <strong>React component props</strong> — onClick, onChange, className</li>
              <li>• <strong>JSON keys</strong> — common in REST API responses</li>
            </ul>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              camelCase vs PascalCase
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              The key difference: camelCase starts with a <strong>lowercase</strong> letter (myVariable), while PascalCase starts with an <strong>uppercase</strong> letter (MyVariable). In JavaScript, camelCase is used for variables and functions, while PascalCase is used for class names and React components.
            </p>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              Other Case Converters
            </h2>
            <div className="flex flex-wrap gap-2">
              {[['UPPERCASE', '/uppercase-converter'], ['lowercase', '/lowercase-converter'], ['Title Case', '/title-case-converter'], ['snake_case', '/snake-case-converter'], ['kebab-case', '/kebab-case-converter'], ['PascalCase', '/pascal-case-converter']].map(([label, href]) => (
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
