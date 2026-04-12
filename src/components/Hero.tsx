"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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

      {/* Cinematic overlay: dark vignette + gradient bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.15) 40%, rgba(10,10,10,0.55) 80%, rgba(10,10,10,0.92) 100%)",
          zIndex: 1,
        }}
      />
      {/* Radial vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.5) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 1.5rem",
          transition: "opacity 1.2s ease, transform 1.2s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(18px)",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#f0ebe3",
            margin: 0,
            lineHeight: 1,
          }}
        >
          Leonardo
          <br />
          Cecchi
        </h1>

        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ width: "40px", height: "1px", background: "#c9a96e", display: "block" }} />
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#c9a96e",
              margin: 0,
            }}
          >
            Actor&nbsp;&nbsp;·&nbsp;&nbsp;Filmmaker&nbsp;&nbsp;·&nbsp;&nbsp;Model
          </p>
          <span style={{ width: "40px", height: "1px", background: "#c9a96e", display: "block" }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: visible ? 0.6 : 0,
          transition: "opacity 1.5s ease 0.8s",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.55rem",
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
            height: "40px",
            background: "linear-gradient(to bottom, #b0a497, transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes scrollLine {
            0%, 100% { opacity: 0.4; transform: scaleY(1); transform-origin: top; }
            50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          }
        `}</style>
      </div>
    </section>
  );
}
