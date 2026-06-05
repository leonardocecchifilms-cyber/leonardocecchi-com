"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

export default function CallItAllLoveHero() {
  const [playing, setPlaying] = useState(false);
  const { lang } = useLang();
  const tr = t[lang].callItAllLove.hero;

  const handlePlay = () => setPlaying(true);

  return (
    <section style={{ background: "#060504", borderBottom: "1px solid #2e2924" }}>
      {/* ── Video stage — 16:9 ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%",
          background: "#000",
          overflow: "hidden",
        }}
      >
        {/* Looping teaser — YouTube background */}
        <iframe
          src="https://www.youtube-nocookie.com/embed/MC61sLvYQ38?autoplay=1&mute=1&loop=1&playlist=MC61sLvYQ38&controls=0&rel=0&playsinline=1&modestbranding=1"
          title="Call It All Love — Teaser"
          allow="autoplay; encrypted-media"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
            transition: "opacity 0.6s ease",
            opacity: playing ? 0 : 1,
            pointerEvents: "none",
          }}
        />

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(6,5,4,0.52)",
            transition: "opacity 0.6s ease",
            opacity: playing ? 0 : 1,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Title overlay */}
        {!playing && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "2rem",
              gap: "1rem",
            }}
          >
            {/* Play button */}
            <button
              onClick={handlePlay}
              aria-label="Watch short film"
              style={{
                marginTop: "0.75rem",
                width: "clamp(64px, 8vw, 88px)",
                height: "clamp(64px, 8vw, 88px)",
                borderRadius: "50%",
                border: "1.5px solid rgba(240,235,227,0.7)",
                background: "rgba(10,10,10,0.35)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.25s ease, background 0.25s ease, transform 0.25s ease",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#c9a96e";
                el.style.background = "rgba(201,169,110,0.15)";
                el.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(240,235,227,0.7)";
                el.style.background = "rgba(10,10,10,0.35)";
                el.style.transform = "scale(1)";
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" style={{ marginLeft: "3px" }}>
                <polygon points="6,3 20,12 6,21" fill="#f0ebe3" stroke="none" />
              </svg>
            </button>

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "clamp(0.58rem, 1vw, 0.68rem)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(176,164,151,0.7)",
                margin: 0,
              }}
            >
              {tr.shortFilmLabel}
            </p>
          </div>
        )}

        {/* YouTube iframe — full short film */}
        <iframe
          src={`https://www.youtube-nocookie.com/embed/Ffpkc7f5pS8?rel=0&modestbranding=1&color=white&autoplay=${playing ? 1 : 0}&enablejsapi=1`}
          title="Call It All Love — Short Film"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
            transition: "opacity 0.6s ease 0.2s",
            opacity: playing ? 1 : 0,
            pointerEvents: playing ? "auto" : "none",
            zIndex: playing ? 3 : 0,
          }}
        />
      </div>
    </section>
  );
}
