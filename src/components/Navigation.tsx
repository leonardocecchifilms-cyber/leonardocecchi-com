"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const tr = t[lang].nav;

  const navLinks = [
    { label: tr.about,        href: "/#about" },
    { label: tr.showreel,     href: "/#showreel" },
    { label: tr.reels,        href: "/#reels" },
    { label: tr.gallery,      href: "/#gallery" },
    { label: tr.resume,       href: "/#resume" },
    { label: tr.inquiries,    href: "/#inquiries" },
    { label: tr.contact,      href: "/#contact" },
    { label: tr.selfProduced, href: "/original-work/call-it-all-love" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(46,41,36,0.6)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/#hero"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.1rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            color: "#f0ebe3",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          Leonardo Cecchi
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
          <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.7rem",
                    fontWeight: 400,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#b0a497",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f0ebe3")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#b0a497")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", borderLeft: "1px solid #2e2924", paddingLeft: "2rem" }}>
            {(["en", "it"] as const).map((l, i) => (
              <React.Fragment key={l}>
                {i > 0 && <span style={{ color: "#2e2924", fontSize: "0.55rem" }}>·</span>}
                <button
                  onClick={() => setLang(l)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.62rem",
                    fontWeight: 400,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: lang === l ? "#f0ebe3" : "#4a3e30",
                    padding: 0,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => { if (lang !== l) (e.currentTarget as HTMLElement).style.color = "#b0a497"; }}
                  onMouseLeave={(e) => { if (lang !== l) (e.currentTarget as HTMLElement).style.color = "#4a3e30"; }}
                >
                  {l.toUpperCase()}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: "24px", height: "1px", background: "#f0ebe3", transition: "transform 0.3s ease, opacity 0.3s ease", transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: "24px", height: "1px", background: "#f0ebe3", transition: "opacity 0.3s ease", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "24px", height: "1px", background: "#f0ebe3", transition: "transform 0.3s ease, opacity 0.3s ease", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(10,10,10,0.97)",
            backdropFilter: "blur(12px)",
            padding: "2rem",
            borderTop: "1px solid #2e2924",
          }}
          className="mobile-menu"
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.75rem",
                    fontWeight: 400,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#b0a497",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile language toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #2e2924" }}>
            {(["en", "it"] as const).map((l, i) => (
              <React.Fragment key={l}>
                {i > 0 && <span style={{ color: "#2e2924", fontSize: "0.55rem" }}>·</span>}
                <button
                  onClick={() => { setLang(l); setMenuOpen(false); }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.65rem",
                    fontWeight: 400,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: lang === l ? "#f0ebe3" : "#4a3e30",
                    padding: 0,
                  }}
                >
                  {l.toUpperCase()}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
