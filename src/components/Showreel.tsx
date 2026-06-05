"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

export default function Showreel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const { lang } = useLang();
  const tr = t[lang].showreel;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="showreel"
      style={{
        background: "#0a0a0a",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div
        ref={sectionRef}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          transition: "opacity 0.9s ease, transform 0.9s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c9a96e",
              marginBottom: "0.5rem",
            }}
          >
            {tr.label}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "0.04em",
              color: "#f0ebe3",
              margin: 0,
            }}
          >
            {tr.heading}
          </h2>
        </div>

        {/* Video stage — 16:9 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            background: "#000",
            overflow: "hidden",
          }}
        >
          {/* Looping preview video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 0.6s ease",
              opacity: playing ? 0 : 1,
              pointerEvents: "none",
            }}
          >
            <source src="/videos/showreel-loop.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(10,10,10,0.38)",
              transition: "opacity 0.6s ease",
              opacity: playing ? 0 : 1,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Custom play button */}
          {!playing && (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play demo reel"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
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
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#c9a96e";
                el.style.background = "rgba(201,169,110,0.15)";
                el.style.transform = "translate(-50%, -50%) scale(1.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(240,235,227,0.7)";
                el.style.background = "rgba(10,10,10,0.35)";
                el.style.transform = "translate(-50%, -50%) scale(1)";
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" style={{ marginLeft: "3px" }}>
                <polygon points="6,3 20,12 6,21" fill="#f0ebe3" stroke="none" />
              </svg>
            </button>
          )}

          {/* YouTube iframe */}
          <iframe
            src={`https://www.youtube-nocookie.com/embed/Z0W69GG1OPs?rel=0&modestbranding=1&color=white&autoplay=${playing ? 1 : 0}&enablejsapi=1`}
            title="Leonardo Cecchi — Demo Reel"
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

        {/* Caption */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            color: "#7a6f64",
            marginTop: "1.25rem",
            textAlign: "right",
          }}
        >
          {tr.caption}
        </p>
      </div>
    </section>
  );
}
