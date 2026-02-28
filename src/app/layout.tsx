import Script from 'next/script';
import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';
import SecurityWrapper from '@/components/ui/SecurityWrapper';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Case Converter Hub — Free Online Text Case Converter Tool',
    template: '%s | Case Converter Hub',
  },
  description:
    'Free online text case converter tool. Convert text to UPPER CASE, lower case, Title Case, camelCase, snake_case, kebab-case, PascalCase and more — instantly, no sign-up required.',
  keywords: [
    'text case converter',
    'uppercase converter',
    'lowercase converter',
    'title case converter',
    'camelCase converter',
    'snake case converter',
    'kebab case converter',
    'pascal case converter',
    'online text tool',
    'free text converter',
    'convert text online',
    'case converter hub',
  ],
  authors: [{ name: 'Webcrome Software', url: 'https://www.webcrome.com' }],
  creator: 'Webcrome Software',
  publisher: 'Webcrome Software',
  metadataBase: new URL('https://www.caseconverterhub.com'),
  alternates: {
    canonical: 'https://www.caseconverterhub.com/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.caseconverterhub.com/',
    siteName: 'Case Converter Hub',
    title: 'Case Converter Hub — Free Online Text Case Converter Tool',
    description:
      'Convert text to UPPER CASE, lower case, Title Case, camelCase, snake_case, kebab-case and more — instantly, free, and with no sign-up required.',
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
      'Convert text to UPPER CASE, lower case, Title Case, camelCase, snake_case and more — instantly, free, no sign-up.',
    images: ['/assets/images/case-converter-og.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Case Converter Hub',
  url: 'https://www.caseconverterhub.com/',
  description:
    'Free online text case converter tool. Convert text to UPPER CASE, lower case, Title Case, camelCase, snake_case, kebab-case, PascalCase and more — instantly, no sign-up required.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'UPPER CASE conversion',
    'lower case conversion',
    'Title Case conversion',
    'camelCase conversion',
    'snake_case conversion',
    'kebab-case conversion',
    'PascalCase conversion',
    'Sentence case conversion',
    'Alternating case conversion',
    'Inverse case conversion',
  ],
  creator: {
    '@type': 'Organization',
    name: 'Webcrome Software',
    url: 'https://www.webcrome.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <meta name="copyright" content="Webcrome Software" />
        <meta name="author" content="Webcrome Software - www.webcrome.com" />
        <meta name="robots" content="index, follow" />
        {/* Schema.org SoftwareApplication Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
</head>
      <body>
        <SecurityWrapper>
          {children}
        </SecurityWrapper>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RE62PC2MM5"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RE62PC2MM5');
            `,
          }}
        />
      </body>
    </html>
  );
}
