import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '../home-page/components/NavBar';
import FooterSection from '../home-page/components/FooterSection';
import CaseConverterTool from '../home-page/components/CaseConverterTool';

export const metadata: Metadata = {
  title: 'PascalCase Converter — Convert Text to PascalCase Online Free',
  description:
    'Free online PascalCase converter. Instantly convert any text to PascalCase — capitalizes the first letter of every word with no spaces. Used in C#, TypeScript class names, and React components.',
  alternates: {
    canonical: 'https://www.caseconverterhub.com/pascal-case-converter',
  },
  openGraph: {
    title: 'PascalCase Converter — Convert Text to PascalCase Online Free',
    description:
      'Instantly convert any text to PascalCase online. Free, fast, and private — no sign-up required.',
    url: 'https://www.caseconverterhub.com/pascal-case-converter',
    type: 'website',
    images: [{ url: '/assets/images/case-converter-og.png', width: 1200, height: 630, alt: 'PascalCase Converter Tool' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PascalCase Converter — Convert Text to PascalCase Online Free',
    description: 'Instantly convert any text to PascalCase online. Free, fast, and private.',
    images: ['/assets/images/case-converter-og.png'],
  },
};

export default function PascalCaseConverterPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'var(--font-body)' }}>
      <NavBar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="mb-8">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2" style={{ color: 'var(--color-text-light)' }}>
              <li><Link href="/" style={{ color: 'var(--color-primary)' }}>Home</Link></li>
              <li>/</li>
              <li>PascalCase Converter</li>
            </ol>
          </nav>
          <h1 className="font-heading mb-3" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
            PascalCase Text Converter
          </h1>
          <p style={{ color: 'var(--color-text-light)', fontSize: '17px', maxWidth: '600px', lineHeight: 1.6 }}>
            Convert any text to PascalCase instantly. Paste your text below and click <strong>PascalCase</strong> to transform it.
          </p>
        </div>

        <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', padding: 'clamp(20px, 4vw, 36px)', boxShadow: 'var(--shadow-tool)', border: '1px solid var(--color-border)' }}>
          <CaseConverterTool />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              What is PascalCase?
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              PascalCase (also called UpperCamelCase) is a naming convention where every word starts with a capital letter and there are no spaces or separators. For example, &quot;my component name&quot; becomes &quot;MyComponentName&quot;. It&apos;s named after the Pascal programming language.
            </p>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              When to Use PascalCase
            </h2>
            <ul className="space-y-2" style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              <li>• <strong>React components</strong> — MyButton, UserProfile, NavBar</li>
              <li>• <strong>TypeScript and C# classes</strong> — UserService, DatabaseManager</li>
              <li>• <strong>C# methods</strong> — GetUser(), SaveData()</li>
              <li>• <strong>Enum values</strong> — UserRole.AdminUser</li>
              <li>• <strong>Interface names</strong> — IUserRepository, IAuthService</li>
            </ul>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              PascalCase vs camelCase
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              PascalCase capitalizes <strong>every</strong> word including the first (MyVariable), while camelCase keeps the first word lowercase (myVariable). In React, components use PascalCase while props and variables use camelCase.
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
