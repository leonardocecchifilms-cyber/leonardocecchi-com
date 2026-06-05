"use client";

import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import CallItAllLoveHero from "@/components/CallItAllLoveHero";

export default function CallItAllLoveContent() {
  const { lang } = useLang();
  const tr = t[lang].callItAllLove;

  const sectionLabel: React.CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontSize: "0.65rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: "#c9a96e",
    margin: "0 0 0.5rem",
  };

  const sectionHeading: React.CSSProperties = {
    fontFamily: "var(--font-cormorant)",
    fontWeight: 300,
    fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
    letterSpacing: "0.04em",
    color: "#f0ebe3",
    margin: "0 0 2rem",
  };

  const bodyText: React.CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontWeight: 300,
    fontSize: "clamp(0.82rem, 1.2vw, 0.9rem)",
    lineHeight: 1.9,
    color: "#9a8f82",
  };

  const sectionWrap: React.CSSProperties = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)",
    borderBottom: "1px solid #2e2924",
  };

  return (
    <>
      {/* ── LOGLINE ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0a0a0a",
          padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)",
          borderBottom: "1px solid #2e2924",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1.3rem, 2.8vw, 2rem)",
              lineHeight: 1.55,
              letterSpacing: "0.02em",
              color: "#f0ebe3",
              margin: 0,
              padding: "0 0 0 2rem",
              borderLeft: "1px solid #c9a96e",
            }}
          >
            {tr.logline}
          </blockquote>
        </div>
      </section>

      {/* ── TEASER VIDEO + PLAY BUTTON ───────────────────────────── */}
      <CallItAllLoveHero />

      {/* ── DOWNLOAD BUTTON (after video) ────────────────────────── */}
      <div
        style={{
          background: "#080705",
          padding: "2.5rem clamp(1.5rem, 6vw, 5rem)",
          borderBottom: "1px solid #2e2924",
          textAlign: "center",
        }}
      >
        <a
          href="https://github.com/leonardocecchifilms-cyber/leonardocecchi-com/releases/download/v1-assets/CALL.IT.ALL.LOVE.-.SHOW.BIBLE.pdf"
          download="CALL_IT_ALL_LOVE_-_SHOW_BIBLE.pdf"
          className="cial-cta-outline"
        >
          {tr.cta.downloadLabel}
        </a>
      </div>

      {/* ── THE SERIES ───────────────────────────────────────────── */}
      <section style={sectionWrap}>
        <p style={sectionLabel}>{tr.series.label}</p>
        <h2 style={sectionHeading}>{tr.series.heading}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p style={bodyText}>{tr.series.body1}</p>
          <p style={bodyText}>{tr.series.body2}</p>
        </div>
      </section>

      {/* ── WHY THIS STORY ───────────────────────────────────────── */}
      <section style={{ ...sectionWrap, maxWidth: "1100px" }}>
        <p style={sectionLabel}>{tr.whyThisStory.label}</p>
        <h2 style={sectionHeading}>{tr.whyThisStory.heading}</h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}
          className="cial-grid"
        >
          {tr.whyThisStory.cards.map((card) => (
            <div
              key={card.heading}
              style={{ padding: "2rem", border: "1px solid #2e2924", background: "#0a0a0a" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 400,
                  fontSize: "1.25rem",
                  letterSpacing: "0.03em",
                  color: "#f0ebe3",
                  margin: "0 0 1rem",
                }}
              >
                {card.heading}
              </h3>
              <p style={{ ...bodyText, margin: 0 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CHARACTERS ───────────────────────────────────────────── */}
      <section style={{ ...sectionWrap, maxWidth: "1100px" }}>
        <p style={sectionLabel}>{tr.characters.label}</p>
        <h2 style={sectionHeading}>{tr.characters.heading}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {tr.characters.items.map((character) => (
            <div
              key={character.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 3fr",
                gap: "2rem",
                paddingBottom: "2.5rem",
                borderBottom: "1px solid #1c1916",
              }}
              className="character-row"
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#c9a96e",
                    margin: "0 0 0.4rem",
                  }}
                >
                  {character.role}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 400,
                    fontSize: "1.4rem",
                    color: "#f0ebe3",
                    margin: 0,
                    letterSpacing: "0.03em",
                  }}
                >
                  {character.name}
                </h3>
              </div>
              <p style={{ ...bodyText, margin: 0 }}>{character.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPARABLE TITLES ────────────────────────────────────── */}
      <section style={{ ...sectionWrap, maxWidth: "1100px" }}>
        <p style={sectionLabel}>{tr.comparables.label}</p>
        <h2 style={sectionHeading}>{tr.comparables.heading}</h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
          className="comps-grid"
        >
          {[
            {
              title: "Adolescence",
              info: "Netflix, 2025",
              note: "Psychological intensity, themes of culpability",
              poster: "/images/comps/adolescence.jpg",
            },
            {
              title: "The People v. O.J. Simpson",
              info: "FX, 2016",
              note: "Known case as lens for class and the machinery of justice",
              poster: "/images/comps/oj-simpson.jpg",
            },
            {
              title: "Dahmer — Monster",
              info: "Netflix, 2022",
              note: "Humanizes the perpetrator without excusing him; insists on the fullness of victims",
              poster: "/images/comps/dahmer.jpg",
            },
          ].map((comp) => (
            <div
              key={comp.title}
              style={{ border: "1px solid #2e2924", display: "flex", flexDirection: "column" }}
            >
              <div style={{ aspectRatio: "2/3", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={comp.poster}
                  alt={comp.title}
                  style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "1.5rem", flex: 1 }}>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#7a6f64",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {comp.info}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 400,
                    fontSize: "1.2rem",
                    color: "#f0ebe3",
                    margin: "0 0 0.75rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {comp.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "0.78rem",
                    lineHeight: 1.7,
                    color: "#7a6f64",
                    margin: 0,
                  }}
                >
                  {comp.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ONE LOVE FOUNDATION ──────────────────────────────────── */}
      <section style={sectionWrap}>
        <p style={sectionLabel}>{tr.partnership.label}</p>
        <h2 style={sectionHeading}>{tr.partnership.heading}</h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}
          className="onelove-grid"
        >
          <p style={{ ...bodyText, margin: 0 }}>{tr.partnership.body}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/onelove-logo.png"
            alt="One Love Foundation — In honor of Yeardley Love"
            style={{ display: "block", width: "160px", flexShrink: 0 }}
          />
        </div>
      </section>

      {/* ── CREATOR'S STATEMENT ──────────────────────────────────── */}
      <section
        style={{
          background: "#080705",
          padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)",
          borderBottom: "1px solid #2e2924",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ ...sectionLabel, marginBottom: "2rem" }}>{tr.creator.label}</p>
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
              lineHeight: 1.6,
              letterSpacing: "0.02em",
              color: "#f0ebe3",
              margin: "0 0 2rem",
              padding: "0 0 0 2rem",
              borderLeft: "1px solid #2e2924",
            }}
          >
            {tr.creator.quote}
          </blockquote>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.72rem",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#b0a497",
              margin: 0,
            }}
          >
            {tr.creator.attribution}
          </p>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────── */}
      <section
        style={{
          background: "#0a0a0a",
          padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ ...sectionLabel, textAlign: "center", marginBottom: "1rem" }}>
            {tr.cta.label}
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(0.82rem, 1.2vw, 0.9rem)",
              lineHeight: 1.9,
              color: "#9a8f82",
              margin: "0 0 2.5rem",
              fontStyle: "italic",
            }}
          >
            {tr.cta.body}
          </p>
          <a href="mailto:leo@stillmovingpictures.co" className="cial-cta">
            leo@stillmovingpictures.co
          </a>

          <div style={{ marginTop: "1.5rem" }}>
            <a
              href="https://github.com/leonardocecchifilms-cyber/leonardocecchi-com/releases/download/v1-assets/CALL.IT.ALL.LOVE.-.SHOW.BIBLE.pdf"
              download="CALL_IT_ALL_LOVE_-_SHOW_BIBLE.pdf"
              className="cial-cta-outline"
            >
              {tr.cta.downloadLabel}
            </a>
          </div>

          <div style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid #2e2924" }}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "0.72rem",
                color: "#4a3e30",
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} Leonardo Cecchi · Still Moving Pictures
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
