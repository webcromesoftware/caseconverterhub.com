import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '../home-page/components/NavBar';
import FooterSection from '../home-page/components/FooterSection';
import CaseConverterTool from '../home-page/components/CaseConverterTool';

export const metadata: Metadata = {
  title: 'Snake Case Converter — Convert Text to snake_case Online Free',
  description:
    'Free online snake_case converter. Instantly convert any text to snake_case — words separated by underscores in lowercase. Essential for Python developers, database columns, and file naming.',
  alternates: {
    canonical: 'https://www.caseconverterhub.com/snake-case-converter',
  },
  openGraph: {
    title: 'Snake Case Converter — Convert Text to snake_case Online Free',
    description:
      'Instantly convert any text to snake_case online. Free, fast, and private — no sign-up required.',
    url: 'https://www.caseconverterhub.com/snake-case-converter',
    type: 'website',
    images: [{ url: '/assets/images/case-converter-og.png', width: 1200, height: 630, alt: 'Snake Case Converter Tool' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snake Case Converter — Convert Text to snake_case Online Free',
    description: 'Instantly convert any text to snake_case online. Free, fast, and private.',
    images: ['/assets/images/case-converter-og.png'],
  },
};

export default function SnakeCaseConverterPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'var(--font-body)' }}>
      <NavBar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="mb-8">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2" style={{ color: 'var(--color-text-light)' }}>
              <li><Link href="/" style={{ color: 'var(--color-primary)' }}>Home</Link></li>
              <li>/</li>
              <li>Snake Case Converter</li>
            </ol>
          </nav>
          <h1 className="font-heading mb-3" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
            Snake Case Text Converter
          </h1>
          <p style={{ color: 'var(--color-text-light)', fontSize: '17px', maxWidth: '600px', lineHeight: 1.6 }}>
            Convert any text to snake_case instantly. Paste your text below and click <strong>snake_case</strong> to transform it.
          </p>
        </div>

        <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', padding: 'clamp(20px, 4vw, 36px)', boxShadow: 'var(--shadow-tool)', border: '1px solid var(--color-border)' }}>
          <CaseConverterTool />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              What is snake_case?
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              snake_case is a naming convention where words are separated by underscores and all letters are lowercase. For example, &quot;my variable name&quot; becomes &quot;my_variable_name&quot;. The name comes from the way the underscores make the text look like a snake lying flat.
            </p>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              When to Use snake_case
            </h2>
            <ul className="space-y-2" style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              <li>• <strong>Python variables and functions</strong> — PEP 8 style guide standard</li>
              <li>• <strong>Database column names</strong> — user_id, created_at, first_name</li>
              <li>• <strong>Ruby on Rails</strong> — convention for methods and variables</li>
              <li>• <strong>File names</strong> — my_script.py, config_file.json</li>
              <li>• <strong>Environment variables</strong> — DATABASE_URL, API_KEY</li>
            </ul>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              snake_case vs kebab-case
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              Both use lowercase words, but snake_case uses <strong>underscores</strong> (my_variable) while kebab-case uses <strong>hyphens</strong> (my-variable). snake_case is preferred in Python and databases, while kebab-case is standard for URLs and CSS class names.
            </p>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              Other Case Converters
            </h2>
            <div className="flex flex-wrap gap-2">
              {[['UPPERCASE', '/uppercase-converter'], ['lowercase', '/lowercase-converter'], ['Title Case', '/title-case-converter'], ['camelCase', '/camelcase-converter'], ['kebab-case', '/kebab-case-converter'], ['PascalCase', '/pascal-case-converter']].map(([label, href]) => (
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
