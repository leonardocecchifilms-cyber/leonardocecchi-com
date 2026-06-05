import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import CallItAllLoveContent from "@/components/CallItAllLoveContent";

export const metadata = {
  title: "Call It All Love — Leonardo Cecchi",
  description:
    "Call It All Love is a limited drama series by Leonardo Cecchi, currently in development and pitching. Based on the documented public record of the Yeardley Love case.",
};

export default function CallItAllLovePage() {
  return (
    <LanguageProvider>
      <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
        <Navigation />

        <main style={{ paddingTop: "72px" }}>

          {/* ── POSTER ───────────────────────────────────────────────── */}
          <section style={{ lineHeight: 0, borderBottom: "1px solid #2e2924" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/cial-poster.png"
              alt="Call It All Love — A Limited Series"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </section>

          {/* ── BILINGUAL CONTENT (logline → video → series → … → CTA) ── */}
          <CallItAllLoveContent />

        </main>
      </div>

      <style>{`
        .cial-cta {
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
        .cial-cta:hover {
          background: #dfc18e;
          transform: translateY(-2px);
        }
        .cial-cta-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 2.5rem;
          background: transparent;
          color: #c9a96e;
          font-family: var(--font-inter);
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid #c9a96e;
          transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
        }
        .cial-cta-outline:hover {
          background: rgba(201,169,110,0.1);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .cial-grid  { grid-template-columns: 1fr !important; }
          .comps-grid { grid-template-columns: 1fr !important; }
          .character-row { grid-template-columns: 1fr !important; }
          .onelove-grid { grid-template-columns: 1fr !important; }
          .onelove-grid img { margin: 0 auto; }
        }
      `}</style>
    </LanguageProvider>
  );
}
