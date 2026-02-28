import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '../home-page/components/NavBar';
import FooterSection from '../home-page/components/FooterSection';
import CaseConverterTool from '../home-page/components/CaseConverterTool';

export const metadata: Metadata = {
  title: 'Kebab Case Converter — Convert Text to kebab-case Online Free',
  description:
    'Free online kebab-case converter. Instantly convert any text to kebab-case — words separated by hyphens in lowercase. Perfect for URLs, CSS class names, HTML attributes, and file names.',
  alternates: {
    canonical: 'https://www.caseconverterhub.com/kebab-case-converter',
  },
  openGraph: {
    title: 'Kebab Case Converter — Convert Text to kebab-case Online Free',
    description:
      'Instantly convert any text to kebab-case online. Free, fast, and private — no sign-up required.',
    url: 'https://www.caseconverterhub.com/kebab-case-converter',
    type: 'website',
    images: [{ url: '/assets/images/case-converter-og.png', width: 1200, height: 630, alt: 'Kebab Case Converter Tool' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kebab Case Converter — Convert Text to kebab-case Online Free',
    description: 'Instantly convert any text to kebab-case online. Free, fast, and private.',
    images: ['/assets/images/case-converter-og.png'],
  },
};

export default function KebabCaseConverterPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'var(--font-body)' }}>
      <NavBar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="mb-8">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2" style={{ color: 'var(--color-text-light)' }}>
              <li><Link href="/" style={{ color: 'var(--color-primary)' }}>Home</Link></li>
              <li>/</li>
              <li>Kebab Case Converter</li>
            </ol>
          </nav>
          <h1 className="font-heading mb-3" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
            Kebab Case Text Converter
          </h1>
          <p style={{ color: 'var(--color-text-light)', fontSize: '17px', maxWidth: '600px', lineHeight: 1.6 }}>
            Convert any text to kebab-case instantly. Paste your text below and click <strong>kebab-case</strong> to transform it.
          </p>
        </div>

        <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', padding: 'clamp(20px, 4vw, 36px)', boxShadow: 'var(--shadow-tool)', border: '1px solid var(--color-border)' }}>
          <CaseConverterTool />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              What is kebab-case?
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              kebab-case is a naming convention where words are separated by hyphens and all letters are lowercase. For example, &quot;my variable name&quot; becomes &quot;my-variable-name&quot;. The name comes from the way words are skewered together like items on a kebab.
            </p>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              When to Use kebab-case
            </h2>
            <ul className="space-y-2" style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              <li>• <strong>URL slugs</strong> — /my-blog-post, /about-us (SEO-friendly)</li>
              <li>• <strong>CSS class names</strong> — .nav-bar, .hero-section, .btn-primary</li>
              <li>• <strong>HTML attributes</strong> — data-user-id, aria-label</li>
              <li>• <strong>File names</strong> — my-component.tsx, user-profile.css</li>
              <li>• <strong>NPM package names</strong> — react-router, next-auth</li>
            </ul>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              Why kebab-case is SEO-Friendly for URLs
            </h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              Google recommends using hyphens to separate words in URLs rather than underscores. Search engines treat hyphens as word separators, making &quot;my-blog-post&quot; more readable and indexable than &quot;my_blog_post&quot; or &quot;myblogpost&quot;.
            </p>
          </section>
          <section>
            <h2 className="font-heading mb-3" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }}>
              Other Case Converters
            </h2>
            <div className="flex flex-wrap gap-2">
              {[['UPPERCASE', '/uppercase-converter'], ['lowercase', '/lowercase-converter'], ['Title Case', '/title-case-converter'], ['camelCase', '/camelcase-converter'], ['snake_case', '/snake-case-converter'], ['PascalCase', '/pascal-case-converter']].map(([label, href]) => (
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
