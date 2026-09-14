import Link from "next/link";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import EscapeToItalyContent from "@/components/EscapeToItalyContent";

export const metadata = {
  title: "Escape to Italy — Leonardo Cecchi",
  description:
    "Escape to Italy is a romantic comedy feature film written by and starring Leonardo Cecchi, currently in development. An Italian-American banker has one week to save his late grandmother's house, and finds the life he's been running from.",
};

export default function EscapeToItalyPage() {
  return (
    <LanguageProvider>
      <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
        <Navigation />

        <main style={{ paddingTop: "72px" }}>

          {/* ── BREADCRUMB ───────────────────────────────────────────── */}
          <div
            style={{
              background: "#0a0a0a",
              borderBottom: "1px solid #2e2924",
              padding: "1rem clamp(1.5rem, 6vw, 5rem)",
            }}
          >
            <Link
              href="/original-work"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.62rem",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#7a6f64",
                textDecoration: "none",
              }}
            >
              ← All Original Work
            </Link>
          </div>

          {/* ── HERO IMAGE ───────────────────────────────────────────── */}
          <section style={{ lineHeight: 0, borderBottom: "1px solid #2e2924" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/escape-to-italy-card.jpg"
              alt="Escape to Italy — Written by Leonardo Cecchi, starring Leonardo Cecchi & Eleonora Gaggero"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </section>

          {/* ── BILINGUAL CONTENT ────────────────────────────────────── */}
          <EscapeToItalyContent />

        </main>
      </div>

      <style>{`
        .eti-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 2.5rem;
          background: #c9a96e;
          color: #0a0a0a;
          font-family: var(--font-inter);
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.3s ease, transform 0.2s ease;
        }
        .eti-cta:hover {
          background: #dfc18e;
          transform: translateY(-2px);
        }
        .eti-social-card:hover .eti-social-play { transform: translate(-50%, -50%) scale(1.1); background: rgba(10,10,10,0.55); }
        .eti-social-card:hover .eti-social-watch { color: #c9a96e; }
        @media (max-width: 768px) {
          .eti-facts-grid    { grid-template-columns: 1fr !important; }
          .eti-why-grid      { grid-template-columns: 1fr !important; }
          .eti-character-row { grid-template-columns: 1fr !important; }
          .eti-comps-grid    { grid-template-columns: 1fr !important; }
          .eti-team-grid     { grid-template-columns: 1fr !important; }
          .eti-social-grid   { grid-template-columns: 1fr !important; }
          .eti-social-card   { max-width: 220px !important; margin: 0 auto; }
          .eti-stat-grid     { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; }
        }
      `}</style>
    </LanguageProvider>
  );
}
