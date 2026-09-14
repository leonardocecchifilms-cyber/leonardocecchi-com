"use client";

import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

export default function EscapeToItalyContent() {
  const { lang } = useLang();
  const tr = t[lang].escapeToItaly;

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
          padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem) clamp(2.5rem, 5vw, 3.5rem)",
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

      {/* ── QUICK FACTS ──────────────────────────────────────────── */}
      <section
        style={{
          background: "#080705",
          padding: "2.5rem clamp(1.5rem, 6vw, 5rem)",
          borderBottom: "1px solid #2e2924",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            textAlign: "center",
          }}
          className="eti-facts-grid"
        >
          {[
            { label: tr.quickFacts.genreLabel, value: tr.quickFacts.genre },
            { label: tr.quickFacts.settingLabel, value: tr.quickFacts.setting },
            { label: tr.quickFacts.toneLabel, value: tr.quickFacts.tone },
          ].map((fact) => (
            <div key={fact.label}>
              <p style={{ ...sectionLabel, margin: "0 0 0.6rem" }}>{fact.label}</p>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 400,
                  fontSize: "1.05rem",
                  color: "#f0ebe3",
                  margin: 0,
                }}
              >
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE STORY ────────────────────────────────────────────── */}
      <section style={sectionWrap}>
        <p style={sectionLabel}>{tr.story.label}</p>
        <h2 style={sectionHeading}>{tr.story.heading}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
          <p style={bodyText}>{tr.story.body1}</p>
          <p style={bodyText}>{tr.story.body2}</p>
        </div>
        <blockquote
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
            lineHeight: 1.6,
            letterSpacing: "0.02em",
            color: "#dfc18e",
            margin: 0,
            padding: "0 0 0 2rem",
            borderLeft: "1px solid #2e2924",
          }}
        >
          {tr.story.closingLine}
        </blockquote>
      </section>

      {/* ── SOCIAL TRACTION ──────────────────────────────────────── */}
      <section style={{ ...sectionWrap, maxWidth: "1100px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="eti-social-grid"
        >
          <div>
            <p style={sectionLabel}>{tr.socialTraction.label}</p>
            <h2 style={sectionHeading}>{tr.socialTraction.heading}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={bodyText}>{tr.socialTraction.body1}</p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.5rem",
                  padding: "1.5rem 0",
                  margin: "0.25rem 0",
                  borderTop: "1px solid #2e2924",
                  borderBottom: "1px solid #2e2924",
                }}
                className="eti-stat-grid"
              >
                {tr.socialTraction.stats.map(({ num, label, subtitle }) => (
                  <div key={label}>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "2.5rem",
                        fontWeight: 300,
                        color: "#c9a96e",
                        margin: "0 0 0.25rem",
                        lineHeight: 1,
                      }}
                    >
                      {num}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#dfc18e",
                        margin: "0 0 0.3rem",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 300,
                        fontSize: "0.72rem",
                        lineHeight: 1.5,
                        color: "#7a6f64",
                        margin: 0,
                      }}
                    >
                      {subtitle}
                    </p>
                  </div>
                ))}
              </div>

              <p style={bodyText}>{tr.socialTraction.body2}</p>
              <p style={bodyText}>{tr.socialTraction.body3}</p>
            </div>
          </div>

          <a
            href="https://www.tiktok.com/@itsleonardocecchi/video/7665418876091436319?_r=1&_t=ZP-98MTQUcy3YM"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textDecoration: "none",
              justifySelf: "center",
              width: "100%",
              maxWidth: "260px",
            }}
            className="eti-social-card"
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "9 / 16",
                overflow: "hidden",
                border: "1px solid #2e2924",
                background: "#1c1916",
                backgroundImage: "url('/images/social/tiktok-alexco-reunion.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="eti-social-thumb"
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(10,10,10,0) 55%, rgba(10,10,10,0.85) 100%)",
                }}
              />
              <div
                className="eti-social-play"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid rgba(240,235,227,0.8)",
                  background: "rgba(10,10,10,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.25s ease, background 0.25s ease",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#f0ebe3">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p
                style={{
                  position: "absolute",
                  left: "1rem",
                  right: "1rem",
                  bottom: "0.9rem",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.68rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "#f0ebe3",
                  margin: 0,
                }}
              >
                {tr.socialTraction.videoCaption}
              </p>
            </div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#7a6f64",
                margin: "0.75rem 0 0",
                textAlign: "center",
                transition: "color 0.2s ease",
              }}
              className="eti-social-watch"
            >
              {tr.socialTraction.watchLabel}
            </p>
          </a>
        </div>
      </section>

      {/* ── WHY THIS STORY ───────────────────────────────────────── */}
      <section style={{ ...sectionWrap, maxWidth: "1100px" }}>
        <p style={sectionLabel}>{tr.whyThisStory.label}</p>
        <h2 style={sectionHeading}>{tr.whyThisStory.heading}</h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}
          className="eti-why-grid"
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
              className="eti-character-row"
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

      {/* ── TONE & COMPARABLES ───────────────────────────────────── */}
      <section style={{ ...sectionWrap, maxWidth: "1100px" }}>
        <p style={sectionLabel}>{tr.comparables.label}</p>
        <h2 style={sectionHeading}>{tr.comparables.heading}</h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
          className="eti-comps-grid"
        >
          {tr.comparables.items.map((comp) => (
            <div
              key={comp.title}
              style={{ padding: "1.75rem", border: "1px solid #2e2924", background: "#0a0a0a" }}
            >
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
          ))}
        </div>
      </section>

      {/* ── CAST & CREATORS ──────────────────────────────────────── */}
      <section style={{ ...sectionWrap, maxWidth: "1100px" }}>
        <p style={sectionLabel}>{tr.team.label}</p>
        <h2 style={sectionHeading}>{tr.team.heading}</h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}
          className="eti-team-grid"
        >
          {tr.team.members.map((member) => (
            <div
              key={member.name}
              style={{ padding: "2rem", border: "1px solid #2e2924", background: "#0a0a0a" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 400,
                  fontSize: "1.3rem",
                  color: "#f0ebe3",
                  margin: "0 0 0.4rem",
                  letterSpacing: "0.02em",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#c9a96e",
                  margin: "0 0 1rem",
                }}
              >
                {member.role}
              </p>
              <p style={{ ...bodyText, margin: 0 }}>{member.bio}</p>
            </div>
          ))}
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
          <a href="mailto:leo@stillmovingpictures.co" className="eti-cta">
            leo@stillmovingpictures.co
          </a>

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
