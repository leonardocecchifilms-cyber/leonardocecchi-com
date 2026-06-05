"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

type Tab = "headshots" | "editorial";

const allImages = [
  { src: "/images/gallery/gallery-16.jpg", alt: "Leonardo Cecchi smiling headshot in teal t-shirt", position: "50% 15%", tab: "headshots" as Tab },
  { src: "/images/gallery/gallery-10.jpg", alt: "Leonardo Cecchi headshot in navy", position: "50% 12%", tab: "headshots" as Tab },
  { src: "/images/gallery/gallery-01.jpg", alt: "Leonardo Cecchi black and white headshot portrait", tab: "headshots" as Tab },
  { src: "/images/gallery/gallery-13.jpg", alt: "Leonardo Cecchi smiling headshot portrait", position: "50% 20%", tab: "headshots" as Tab },
  { src: "/images/gallery/gallery-17.jpg", alt: "Leonardo Cecchi headshot in plaid shirt", position: "50% 15%", tab: "headshots" as Tab },
  { src: "/images/gallery/gallery-18.jpg", alt: "Leonardo Cecchi headshot in green bomber jacket", position: "50% 15%", tab: "headshots" as Tab },
  { src: "/images/gallery/gallery-19.jpg", alt: "Leonardo Cecchi headshot in blue blazer", position: "50% 15%", tab: "headshots" as Tab },
  { src: "/images/gallery/gallery-15.jpg", alt: "Leonardo Cecchi headshot in blue blazer", position: "50% 15%", tab: "headshots" as Tab },
  { src: "/images/gallery/gallery-22.jpg", alt: "Leonardo Cecchi headshot with subtle smile in teal t-shirt", position: "50% 15%", tab: "headshots" as Tab },
  { src: "/images/gallery/gallery-02.jpg", alt: "Leonardo Cecchi editorial portrait seated", tab: "editorial" as Tab },
  { src: "/images/gallery/gallery-07.jpg", alt: "Leonardo Cecchi lifestyle portrait on BMW", position: "50% 25%", tab: "editorial" as Tab },
  { src: "/images/gallery/gallery-09.jpg", alt: "Leonardo Cecchi on Triumph motorcycle", position: "50% 18%", tab: "editorial" as Tab },
  { src: "/images/gallery/gallery-11.jpg", alt: "Leonardo Cecchi black and white beach editorial", position: "50% 20%", tab: "editorial" as Tab },
  { src: "/images/gallery/gallery-14.jpg", alt: "Leonardo Cecchi riding motorcycle on road", position: "50% 30%", tab: "editorial" as Tab },
  { src: "/images/gallery/gallery-20.jpg", alt: "Leonardo Cecchi black and white editorial with glasses", position: "50% 20%", tab: "editorial" as Tab },
  { src: "/images/gallery/gallery-21.jpg", alt: "Leonardo Cecchi turtleneck sweater collage", position: "50% 50%", tab: "editorial" as Tab },
];

type ImageEntry = typeof allImages[number];

function Lightbox({ images, index, onClose, onPrev, onNext, downloadLabel }: {
  images: ImageEntry[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  downloadLabel: string;
}) {
  const image = images[index];
  const filename = image.src.split("/").pop() ?? "image.jpg";

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.93)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {/* Close */}
      <button
        aria-label="Close lightbox"
        onClick={onClose}
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.25rem",
          background: "none",
          border: "1px solid rgba(240,235,227,0.2)",
          color: "#f0ebe3",
          fontSize: "1.4rem",
          lineHeight: 1,
          width: "2.5rem",
          height: "2.5rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "border-color 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "#c9a96e";
          (e.currentTarget as HTMLElement).style.color = "#c9a96e";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,235,227,0.2)";
          (e.currentTarget as HTMLElement).style.color = "#f0ebe3";
        }}
      >
        ×
      </button>

      {/* Prev arrow */}
      <button
        aria-label="Previous image"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        disabled={!hasPrev}
        style={{
          position: "absolute",
          left: "clamp(0.5rem, 2vw, 1.5rem)",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "1px solid rgba(240,235,227,0.15)",
          color: hasPrev ? "#f0ebe3" : "rgba(240,235,227,0.15)",
          fontSize: "1.6rem",
          width: "2.75rem",
          height: "2.75rem",
          cursor: hasPrev ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "border-color 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          if (!hasPrev) return;
          (e.currentTarget as HTMLElement).style.borderColor = "#c9a96e";
          (e.currentTarget as HTMLElement).style.color = "#c9a96e";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,235,227,0.15)";
          (e.currentTarget as HTMLElement).style.color = hasPrev ? "#f0ebe3" : "rgba(240,235,227,0.15)";
        }}
      >
        ‹
      </button>

      {/* Image + download */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          maxWidth: "min(90vw, calc(80vh * 0.75))",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          style={{
            maxHeight: "78vh",
            maxWidth: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />

        <a
          href={image.src}
          download={filename}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.55rem 1.4rem",
            border: "1px solid rgba(201,169,110,0.5)",
            color: "#c9a96e",
            fontFamily: "var(--font-inter)",
            fontSize: "0.62rem",
            fontWeight: 400,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#c9a96e";
            (e.currentTarget as HTMLElement).style.color = "#0a0a0a";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "#c9a96e";
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          {downloadLabel}
        </a>
      </div>

      {/* Next arrow */}
      <button
        aria-label="Next image"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        disabled={!hasNext}
        style={{
          position: "absolute",
          right: "clamp(0.5rem, 2vw, 1.5rem)",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "1px solid rgba(240,235,227,0.15)",
          color: hasNext ? "#f0ebe3" : "rgba(240,235,227,0.15)",
          fontSize: "1.6rem",
          width: "2.75rem",
          height: "2.75rem",
          cursor: hasNext ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "border-color 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          if (!hasNext) return;
          (e.currentTarget as HTMLElement).style.borderColor = "#c9a96e";
          (e.currentTarget as HTMLElement).style.color = "#c9a96e";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,235,227,0.15)";
          (e.currentTarget as HTMLElement).style.color = hasNext ? "#f0ebe3" : "rgba(240,235,227,0.15)";
        }}
      >
        ›
      </button>

      {/* Counter */}
      <p
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          bottom: "1.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-inter)",
          fontSize: "0.58rem",
          letterSpacing: "0.2em",
          color: "rgba(240,235,227,0.35)",
          margin: 0,
        }}
      >
        {index + 1} / {images.length}
      </p>
    </div>
  );
}

function GalleryItem({ src, alt, index, position = "center top", rotate = false, onClick }: {
  src: string; alt: string; index: number; position?: string; rotate?: boolean; onClick: () => void;
}) {
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
      role="button"
      tabIndex={0}
      aria-label={`Open ${alt}`}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
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
        if (img) img.style.transform = rotate ? "rotate(-90deg) scale(1.45)" : "scale(1.06)";
        const overlay = e.currentTarget.querySelector(".gallery-overlay") as HTMLElement;
        if (overlay) overlay.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = rotate ? "rotate(-90deg) scale(1.35)" : "scale(1)";
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
          ...(rotate ? { transform: "rotate(-90deg) scale(1.35)" } : {}),
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
  const [activeTab, setActiveTab] = useState<Tab>("headshots");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { lang } = useLang();
  const tr = t[lang].gallery;

  const images = allImages.filter((img) => img.tab === activeTab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleClose = useCallback(() => setLightboxIndex(null), []);
  const handlePrev = useCallback(() => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const handleNext = useCallback(() => setLightboxIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i)), [images.length]);

  // Reset lightbox when tab changes
  useEffect(() => { setLightboxIndex(null); }, [activeTab]);

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
          margin: "0 auto 2rem",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "2rem",
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
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "#7a6f64",
            }}
          >
            {tr.count(images.length)}
          </span>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0", borderBottom: "1px solid #2e2924" }}>
          {(["headshots", "editorial"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === tab ? "1px solid #c9a96e" : "1px solid transparent",
                marginBottom: "-1px",
                cursor: "pointer",
                padding: "0.6rem 1.25rem",
                fontFamily: "var(--font-inter)",
                fontSize: "0.62rem",
                fontWeight: 400,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: activeTab === tab ? "#f0ebe3" : "#4a3e30",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => { if (activeTab !== tab) (e.currentTarget as HTMLElement).style.color = "#b0a497"; }}
              onMouseLeave={(e) => { if (activeTab !== tab) (e.currentTarget as HTMLElement).style.color = "#4a3e30"; }}
            >
              {tab === "headshots" ? tr.headshots : tr.editorial}
            </button>
          ))}
        </div>
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
          <GalleryItem
            key={img.src}
            src={img.src}
            alt={img.alt}
            index={i}
            position={(img as any).position}
            rotate={(img as any).rotate}
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
          downloadLabel={tr.lightboxDownload}
        />
      )}

      <style>{`
        @media (max-width: 1024px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 6px !important; }
          .gallery-grid > div:nth-child(9) { display: none; }
        }
      `}</style>
    </section>
  );
}
