"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

const posts = [
  { url: "https://www.instagram.com/p/Clnq-NfufUG/",    src: "/images/instagram/ig-01.jpg" },
  { url: "https://www.instagram.com/reel/Ck8-EA9j7uH/", src: "/images/instagram/ig-02.jpg" },
  { url: "https://www.instagram.com/reel/DT3cZJVkjWS/", src: "/images/instagram/ig-03.jpg" },
  { url: "https://www.instagram.com/p/DMVaOZuxqAI/",    src: "/images/instagram/ig-04.jpg" },
  { url: "https://www.instagram.com/p/DL5PZjiP60b/",    src: "/images/instagram/ig-05.jpg" },
  { url: "https://www.instagram.com/p/DJlq6MCRiU-/",    src: "/images/instagram/ig-06.jpg" },
  { url: "https://www.instagram.com/p/DWRNfu4lB6n/",    src: "/images/instagram/ig-07.jpg" },
  { url: "https://www.instagram.com/reel/DW-_9t-EzsE/", src: "/images/instagram/ig-08.jpg" },
  { url: "https://www.instagram.com/p/DKmxiHdxWZG/",    src: "/images/instagram/ig-09.jpg" },
];

function GridCell({ url, src, index }: { url: string; src: string; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-src={url}
      style={{
        display: "block",
        position: "relative",
        aspectRatio: "1 / 1",
        overflow: "hidden",
        background: "#1c1916",
        backgroundImage: `url('${src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textDecoration: "none",
        transition: `opacity 0.7s ease ${index * 0.07}s, transform 0.7s ease ${index * 0.07}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
      onMouseEnter={(e) => {
        const overlay = e.currentTarget.querySelector(".ig-overlay") as HTMLElement;
        if (overlay) overlay.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        const overlay = e.currentTarget.querySelector(".ig-overlay") as HTMLElement;
        if (overlay) overlay.style.opacity = "0";
      }}
    >

      {/* Hover overlay */}
      <div
        className="ig-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,10,10,0.55)",
          opacity: 0,
          transition: "opacity 0.35s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
        </svg>
      </div>
    </a>
  );
}

export default function InstagramGrid() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const { lang } = useLang();
  const tr = t[lang].instagramGrid;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 3rem)",
      }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        style={{
          maxWidth: "1400px",
          margin: "0 auto 2.5rem",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
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

          <a
            href="https://www.instagram.com/leonardodcecchi/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7a6f64",
              textDecoration: "none",
              transition: "color 0.2s ease",
              paddingBottom: "0.25rem",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c9a96e")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#7a6f64")}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            {tr.subline}
          </a>
        </div>
      </div>

      {/* 3×3 Grid */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(0.35rem, 1vw, 0.6rem)",
        }}
        className="ig-grid"
      >
        {posts.map((post, i) => (
          <GridCell key={post.url} url={post.url} src={post.src} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ig-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ig-grid > a:nth-child(9) { display: none; }
        }
      `}</style>
    </section>
  );
}
