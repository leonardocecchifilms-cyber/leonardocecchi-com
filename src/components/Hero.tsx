"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "600px",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Leonardo Cecchi"
        fill
        priority
        quality={90}
        style={{ objectFit: "cover", objectPosition: "center top" }}
        sizes="100vw"
      />

      {/* Subtle gradient — heavier at bottom for text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.08) 0%, rgba(10,10,10,0.0) 45%, rgba(10,10,10,0.55) 80%, rgba(10,10,10,0.88) 100%)",
          zIndex: 1,
        }}
      />

      {/* Bottom-left text — Beatrice Vendramin style */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(2rem, 5vw, 3.5rem)",
          left: "clamp(1.5rem, 4vw, 3rem)",
          zIndex: 2,
          transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(14px)",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 400,
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            letterSpacing: "0.04em",
            color: "#f0ebe3",
            margin: "0 0 0.3rem",
            lineHeight: 1.1,
          }}
        >
          Leonardo Cecchi
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "clamp(0.62rem, 1vw, 0.72rem)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#b0a497",
            margin: 0,
          }}
        >
          Actor&nbsp;&nbsp;·&nbsp;&nbsp;Filmmaker&nbsp;&nbsp;·&nbsp;&nbsp;Model
        </p>
      </div>

      {/* Scroll indicator — bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(2rem, 5vw, 3.5rem)",
          right: "clamp(1.5rem, 4vw, 3rem)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: visible ? 0.5 : 0,
          transition: "opacity 1.2s ease 0.8s",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.52rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#b0a497",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "36px",
            background: "linear-gradient(to bottom, #b0a497, transparent)",
          }}
        />
      </div>
    </section>
  );
}
