"use client";

import { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'What is a text case converter?',
    a: 'A text case converter is a tool that changes the capitalization style of your text. For example, it can turn \'hello world\' into \'HELLO WORLD\', \'Hello World\', or \'hello-world\' — instantly, without any typing.',
  },
  {
    q: 'Is my text saved anywhere?',
    a: 'No. Your text is processed entirely within your browser on your own device. Nothing is sent to any server, stored in a database, or tracked in any way. Your privacy is completely protected.',
  },
  {
    q: "What's the difference between Title Case and Sentence case?",
    a: "Title Case capitalizes the first letter of Every Single Word (like a book title). Sentence case only capitalizes the first letter of each sentence, just like normal writing. For example: Title Case → 'The Quick Brown Fox' | Sentence case → 'The quick brown fox.'",
  },
  {
    q: 'What is camelCase and who uses it?',
    a: "camelCase removes spaces and capitalizes the first letter of each word except the first (e.g., 'my variable name' → 'myVariableName'). It's widely used by programmers in JavaScript, Java, and many other coding languages.",
  },
  {
    q: 'Is there a limit to how much text I can convert?',
    a: "There's no strict limit. You can paste entire documents, long articles, or just a few words. The conversion happens instantly in your browser regardless of text length.",
  },
  {
    q: 'Can I use this on my phone?',
    a: 'Absolutely! CaseConverter is fully responsive and works perfectly on smartphones and tablets. Just open it in your mobile browser — no app download required.',
  },
  {
    q: 'What is snake_case and when should I use it?',
    a: "snake_case uses underscores between words with all letters in lowercase (e.g., 'my_variable_name'). It's commonly used in Python, Ruby, and database column names.",
  },
  {
    q: 'What is kebab-case?',
    a: "kebab-case uses hyphens between words with all letters in lowercase (e.g., 'my-variable-name'). It's widely used in URLs, CSS class names, and HTML attributes.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs?.map((faq) => ({
    '@type': 'Question',
    name: faq?.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq?.a,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef?.current?.querySelectorAll('.scroll-hidden');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12"
      style={{ background: 'var(--color-bg)' }}
      id="faq"
    >
      {/* FAQPage Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 scroll-hidden">
          <p className="section-label mb-3">Got Questions?</p>
          <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Everything you need to know about using Case Converter Hub.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs?.map((faq, i) => (
            <div
              key={faq?.q}
              className="faq-item scroll-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{faq?.q}</span>
                <span
                  className="shrink-0 transition-transform duration-300"
                  style={{
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    color:
                      openIndex === i
                        ? 'var(--color-primary)'
                        : 'var(--color-text-light)',
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>

              {openIndex === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="faq-answer animate-fade-in"
                  role="region"
                >
                  {faq?.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}