import Script from 'next/script'
import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';
import SecurityWrapper from '@/components/ui/SecurityWrapper';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'CaseConverter - Free Online Text Case Converter | Webcrome Software',
  description: 'Free online text case converter tool by Webcrome Software. Convert text to UPPER CASE, lower case, Title Case, camelCase, snake_case and more.',
  authors: [{ name: 'Webcrome Software', url: 'https://www.webcrome.com' }],
  creator: 'Webcrome Software',
  publisher: 'Webcrome Software',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
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
