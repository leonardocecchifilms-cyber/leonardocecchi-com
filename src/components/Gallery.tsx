"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/gallery/gallery-01.jpg", alt: "Leonardo Cecchi" },
  { src: "/images/gallery/gallery-02.jpg", alt: "Leonardo Cecchi" },
  { src: "/images/gallery/gallery-03.jpg", alt: "Leonardo Cecchi" },
  { src: "/images/gallery/gallery-04.jpg", alt: "Leonardo Cecchi" },
  { src: "/images/gallery/gallery-05.jpg", alt: "Leonardo Cecchi", position: "50% 20%" },
  { src: "/images/gallery/gallery-06.jpg", alt: "Leonardo Cecchi" },
  { src: "/images/gallery/gallery-07.png", alt: "Leonardo Cecchi" },
  { src: "/images/gallery/gallery-08.png", alt: "Leonardo Cecchi" },
  { src: "/images/gallery/gallery-09.png", alt: "Leonardo Cecchi" },
  { src: "/images/gallery/gallery-10.png", alt: "Leonardo Cecchi" },
  { src: "/images/gallery/gallery-11.jpg", alt: "Leonardo Cecchi" },
  { src: "/images/gallery/gallery-12.jpg", alt: "Leonardo Cecchi" },
];

function GalleryItem({ src, alt, index, position = "center top" }: { src: string; alt: string; index: number; position?: string }) {
  const ref = useRef<HTMLDivElement>(null);
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
    <div
      ref={ref}
      style={{
        position: "relative",
        aspectRatio: "3/4",
        overflow: "hidden",
        background: "#1c1916",
        transition: `opacity 0.7s ease ${index * 0.07}s, transform 0.7s ease ${index * 0.07}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = "scale(1.06)";
        const overlay = e.currentTarget.querySelector(".gallery-overlay") as HTMLElement;
        if (overlay) overlay.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = "scale(1)";
        const overlay = e.currentTarget.querySelector(".gallery-overlay") as HTMLElement;
        if (overlay) overlay.style.opacity = "0";
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={85}
        style={{
          objectFit: "cover",
          objectPosition: position,
          transition: "transform 0.7s ease",
        }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div
        className="gallery-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,10,10,0.3)",
          opacity: 0,
          transition: "opacity 0.4s ease",
        }}
      />
    </div>
  );
}

export default function Gallery() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

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
      id="gallery"
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
          margin: "0 auto 3rem",
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(20px)",
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
            Portfolio
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
            Gallery
          </h2>
        </div>
        <span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "#7a6f64",
          }}
        >
          {images.length} images
        </span>
      </div>

      {/* Grid */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(0.5rem, 1.5vw, 1rem)",
        }}
        className="gallery-grid"
      >
        {images.map((img, i) => (
          <GalleryItem key={img.src} src={img.src} alt={img.alt} index={i} position={(img as any).position} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
