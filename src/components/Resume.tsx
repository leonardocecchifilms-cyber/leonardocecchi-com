"use client";

import { useEffect, useRef, useState } from "react";

type Credit = { title: string; role: string; studio: string };

const featureFilm: Credit[] = [
  { title: "A Christmas Mystery", role: "Harrison", studio: "Warner Bros. / HBO Max" },
  { title: "Prom Dates", role: "Giancarlo", studio: "American High / Hulu" },
  { title: "Lamborghini: The Legend", role: "Gianpaolo Dallara", studio: "Lionsgate / Bobby Moresco" },
  { title: "How to Grow Up", role: "Alex Leoni", studio: "Disney It. / Disney+" },
  { title: "Tini – The Movie", role: "Saul", studio: "Disney / Disney+" },
  { title: "The Wrong Stepmother", role: "Tyler", studio: "Cooper Productions / Hulu" },
  { title: "Vote for Santa", role: "Mike", studio: "Minerva Pictures / Prime Video" },
];

const television: Credit[] = [
  { title: "American Horror Stories", role: "Milo", studio: "Ryan Murphy / FX Hulu" },
  { title: "Alex & Co.", role: "Alex Leoni", studio: "Disney It. / Disney+" },
  { title: "Catch 22", role: "Bystander #1", studio: "George Clooney / Paramount" },
  { title: "Gods of Food", role: "Tourist", studio: "College Humor" },
];

const theater: Credit[] = [
  { title: "Peter Pan", role: "Peter Pan", studio: "Show Beez / Arcimboldi Milan" },
  { title: "Aladdin", role: "Aladdin", studio: "Brancaccio Rome / Colombi" },
  { title: "Footloose", role: "Chuck", studio: "BarryPearl / Panico Prod." },
];

function CreditSection({
  title,
  credits,
  delay = 0,
}: {
  title: string;
  credits: Credit[];
  delay?: number;
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
      style={{
        marginBottom: "3.5rem",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.6rem",
          fontWeight: 400,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#c9a96e",
          margin: "0 0 1.5rem",
          paddingBottom: "0.75rem",
          borderBottom: "1px solid #2e2924",
        }}
      >
        {title}
      </h3>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {credits.map((credit, i) => (
            <tr
              key={credit.title}
              style={{ borderBottom: "1px solid #1c1916" }}
            >
              <td
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                  color: "#f0ebe3",
                  padding: "0.85rem 1.5rem 0.85rem 0",
                  width: "38%",
                  verticalAlign: "middle",
                }}
              >
                {credit.title}
              </td>
              <td
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.78rem",
                  fontWeight: 300,
                  color: "#b0a497",
                  padding: "0.85rem 1.5rem 0.85rem 0",
                  width: "28%",
                  verticalAlign: "middle",
                }}
              >
                {credit.role}
              </td>
              <td
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.72rem",
                  fontWeight: 300,
                  color: "#7a6f64",
                  padding: "0.85rem 0",
                  textAlign: "right",
                  verticalAlign: "middle",
                }}
              >
                {credit.studio}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Resume() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.15 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="resume"
      style={{
        background: "#0f0d0b",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
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
              Credits
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
              Resume
            </h2>
          </div>

          <a
            href="/resume.pdf"
            download="Leonardo_Cecchi_Resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.7rem 1.5rem",
              border: "1px solid #c9a96e",
              color: "#c9a96e",
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#c9a96e";
              el.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "#c9a96e";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Credits */}
        <CreditSection title="Feature Film" credits={featureFilm} delay={0.1} />
        <CreditSection title="Television" credits={television} delay={0.2} />
        <CreditSection title="Theater" credits={theater} delay={0.3} />

        {/* Bottom info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            marginTop: "1rem",
            paddingTop: "3rem",
            borderTop: "1px solid #2e2924",
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9a96e",
                margin: "0 0 0.75rem",
              }}
            >
              Languages
            </h4>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "0.82rem",
                color: "#9a8f82",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              American (Standard, Southern &amp; Italian accent)
              <br />
              Italian (fluent)
              <br />
              Spanish (intermediate)
            </p>
          </div>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9a96e",
                margin: "0 0 0.75rem",
              }}
            >
              Training
            </h4>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "0.82rem",
                color: "#9a8f82",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Sanford Meisner Center (2 years)
              <br />
              Ivana Chubbuck Acting Studio (4 years)
              <br />
              Cinematic Martial Arts — J.A.M LA (2 years)
              <br />
              Boxing (13 months)
              <br />
              Comedy Acting — The Young Actor's Workspace
            </p>
          </div>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9a96e",
                margin: "0 0 0.75rem",
              }}
            >
              Special Skills
            </h4>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "0.82rem",
                color: "#9a8f82",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              11 variations of a backflip
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
