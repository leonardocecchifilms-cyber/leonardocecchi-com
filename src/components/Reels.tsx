"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

type Reel = {
  id: string;
  title: string;
  youtubeId: string | null;
  thumb: string | null;
};

const reels: Reel[] = [
  { id: "demo",        title: "Demo Reel",                    youtubeId: "Z0W69GG1OPs", thumb: null },
  { id: "ahs",         title: "American Horror Stories",      youtubeId: "o-eiy9M7cio", thumb: null },
  { id: "lamborghini", title: "Lamborghini",                  youtubeId: "4-zzMT-LEQE", thumb: null },
  { id: "christmas",   title: "A Christmas Mystery",          youtubeId: "KJcIeof2AQw", thumb: null },
  { id: "prom",        title: "Prom Dates",                   youtubeId: "Fnnay-mH9ac", thumb: null },
  { id: "musical",     title: "Musical Reel",                 youtubeId: "o9bFw6RajyE", thumb: null },
  { id: "alexco",      title: "Alex & Co. — S3 Finale",       youtubeId: "a6oYtfxxPJQ", thumb: null },
  { id: "incredibile", title: '"Incredibile" Music Video',    youtubeId: "SlnUMdZo2IU", thumb: null },
];

function ReelTile({ reel, onClick, index }: { reel: Reel; onClick: () => void; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const thumbSrc = reel.thumb ?? (reel.youtubeId ? `https://img.youtube.com/vi/${reel.youtubeId}/hqdefault.jpg` : null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {/* Thumbnail container */}
      <div
        onClick={onClick}
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%",
          background: "#111",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const btn = e.currentTarget.querySelector(".reel-play") as HTMLElement;
          if (btn) { btn.style.borderColor = "#c9a96e"; btn.style.background = "rgba(201,169,110,0.15)"; btn.style.transform = "translate(-50%,-50%) scale(1.1)"; }
          if (thumbSrc) {
            const img = e.currentTarget.querySelector("img") as HTMLElement;
            if (img) img.style.transform = "scale(1.05)";
          }
        }}
        onMouseLeave={(e) => {
          const btn = e.currentTarget.querySelector(".reel-play") as HTMLElement;
          if (btn) { btn.style.borderColor = "rgba(240,235,227,0.6)"; btn.style.background = "rgba(10,10,10,0.4)"; btn.style.transform = "translate(-50%,-50%) scale(1)"; }
          if (thumbSrc) {
            const img = e.currentTarget.querySelector("img") as HTMLElement;
            if (img) img.style.transform = "scale(1)";
          }
        }}
      >
        {/* Thumbnail or placeholder */}
        {thumbSrc ? (
          <img
            src={thumbSrc}
            alt={reel.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #1a1712 0%, #0f0d0b 60%, #1c1916 100%)",
            }}
          />
        )}

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: thumbSrc ? "rgba(10,10,10,0.42)" : "rgba(10,10,10,0.2)",
          }}
        />

        {/* Play button */}
        <div
          className="reel-play"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "1.5px solid rgba(240,235,227,0.6)",
            background: "rgba(10,10,10,0.4)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "border-color 0.25s ease, background 0.25s ease, transform 0.25s ease",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" style={{ marginLeft: "2px" }}>
            <polygon points="6,3 20,12 6,21" fill="#f0ebe3" stroke="none" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.68rem",
          fontWeight: 400,
          letterSpacing: "0.08em",
          color: "#9a8f82",
          margin: 0,
          textAlign: "center",
        }}
      >
        {reel.title}
      </p>
    </div>
  );
}

export default function Reels() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeReel, setActiveReel] = useState<Reel | null>(null);
  const { lang } = useLang();
  const tr = t[lang].reels;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Close on ESC
  useEffect(() => {
    if (!activeReel) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveReel(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [activeReel]);

  return (
    <>
      <section
        id="reels"
        style={{
          background: "#0f0d0b",
          padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 3rem)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Header */}
          <div
            ref={headerRef}
            style={{
              marginBottom: "3rem",
              transition: "opacity 0.8s ease, transform 0.8s ease",
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
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

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "clamp(1rem, 2vw, 1.5rem) clamp(0.75rem, 1.5vw, 1.25rem)",
            }}
            className="reels-grid"
          >
            {reels.map((reel, i) => (
              <ReelTile
                key={reel.id}
                reel={reel}
                index={i}
                onClick={() => setActiveReel(reel)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeReel && (
        <div
          onClick={() => setActiveReel(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(10,10,10,0.94)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveReel(null)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "1px solid rgba(240,235,227,0.2)",
              color: "#b0a497",
              cursor: "pointer",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              lineHeight: 1,
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#c9a96e"; (e.currentTarget as HTMLElement).style.color = "#c9a96e"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,235,227,0.2)"; (e.currentTarget as HTMLElement).style.color = "#b0a497"; }}
            aria-label={tr.close}
          >
            ×
          </button>

          {/* Video container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "1000px",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", background: "#000" }}>
              {activeReel.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeReel.youtubeId}?rel=0&modestbranding=1&color=white&autoplay=1`}
                  title={activeReel.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0f0d0b",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      fontSize: "1.4rem",
                      color: "#4a3e30",
                      margin: 0,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {tr.comingSoon}
                  </p>
                </div>
              )}
            </div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                color: "#7a6f64",
                margin: 0,
                textAlign: "center",
              }}
            >
              {activeReel.title}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .reels-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .reels-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
