"use client";

export default function FooterSection() {
  const year = new Date()?.getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface)",
        padding: "40px 24px",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Top row: Logo & copyright + Links */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & copyright */}
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center font-heading font-black text-white text-xs"
              style={{ background: "var(--color-primary)", fontSize: "11px" }}
            >
              Aa
            </div>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-body)",
              }}
            >
              © {year} <strong>Case Converter Hub</strong> by{" "}
              <a
                href="https://www.webcrome.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                Webcrome Software
              </a>
              . All rights reserved.
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {[
              { href: "#how-it-works", label: "How It Works" },
              { href: "#faq", label: "FAQ" },
              { href: "#", label: "Privacy" },
              { href: "#", label: "Terms" },
            ]?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-body)",
                  transition: "color 0.15s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
              >
                {link?.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Developed by row */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "16px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-body)",
            }}
          >
            Developed by{" "}
            <a
              href="https://www.webcrome.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--color-primary)",
                textDecoration: "none",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Webcrome Software
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}