"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const slides = [
    {
      id: "soft-serve",
      title: "Commercial Soft-Serve Machinery",
      subtitle: "High-throughput twin hoppers, rapid freeze-down cycle, and smooth 3-lever dual-flavor dispensing.",
      image: "/images/cremier-dela-commercial-soft-serve-ice-cream-machines-pair.jpg",
      alt: "Cremier Dela Commercial Soft-Serve Ice Cream Machines Pair",
      details: "Dual compressors • Independent hopper pre-cooling • Automated cleaning"
    },
    {
      id: "powders",
      title: "Signature Soft-Serve Powders",
      subtitle: "Velvety smooth vanilla and strawberry mixes crafted for optimal overrun, creaminess, and slow melt.",
      image: "/images/cremier-dela-vanilla-ice-cream-powder-2-5kg-pouch.jpg",
      alt: "Cremier Dela Vanilla Ice Cream Powder 2.5kg Pouch",
      details: "Yields 80-90 cones per 2.5kg pouch • 1:3 mix ratio • Rich velvety mouthfeel"
    },
    {
      id: "batch-freezers",
      title: "Artisanal Gelato Batch Freezers",
      subtitle: "Commercial batch freezers for dense Italian gelato, artisanal hard scoop ice cream, and fresh fruit sorbets.",
      image: "/images/cremier-dela-standing-gelato-batch-freezer-digital.jpg",
      alt: "Cremier Dela Digital Standing Gelato Batch Freezer",
      details: "High-torque freezing cylinder • Digital consistency control • All stainless construction"
    },
    {
      id: "wholesale",
      title: "Commercial Wholesale Cartons & Bulk Sacks",
      subtitle: "15kg wholesale cartons and 25kg multi-wall kraft sacks for commercial parlours and food manufacturers.",
      image: "/images/cremier-dela-vanilla-ice-cream-powder-25kg-sack.jpg",
      alt: "Cremier Dela Vanilla 25kg Kraft Sack",
      details: "Moisture-barrier liner • Maximum production efficiency • Consistent formulation"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #070b14 0%, #0d1527 100%)",
        color: "#ffffff",
        padding: "88px 0 96px 0",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200, 16, 46, 0.2) 0%, rgba(200, 16, 46, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "56px",
            alignItems: "center"
          }}
          className="hero-layout"
        >
          {/* Left Column: Clean, Elegant Headline & Info */}
          <div>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 4.8vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
                color: "#ffffff"
              }}
            >
              Commercial Ice Cream Machinery &amp; Premium Powders
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "#94a3b8",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "520px"
              }}
            >
              Nigeria’s trusted source for high-output soft-serve machines, artisanal batch freezers,
              and rich, creamy ice cream powders crafted for excellent texture and slow melt.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                alignItems: "center",
                marginBottom: "44px"
              }}
            >
              <a href="#machines" className="btn btn-primary" style={{ padding: "14px 28px", fontSize: "1rem" }}>
                <span>View Machinery</span>
                <ArrowRight size={18} />
              </a>

              <a href="#powders" className="btn btn-secondary" style={{ padding: "14px 26px", fontSize: "1rem" }}>
                <span>Ice Cream Powders</span>
              </a>
            </div>

            {/* Clean Metrics Line */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                paddingTop: "28px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <div>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-heading)" }}>
                  80–90
                </div>
                <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginTop: "2px" }}>
                  Cones Per 2.5kg Pouch
                </div>
              </div>

              <div>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-heading)" }}>
                  Stainless Steel
                </div>
                <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginTop: "2px" }}>
                  Commercial Grade
                </div>
              </div>

              <div>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-heading)" }}>
                  Nationwide
                </div>
                <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginTop: "2px" }}>
                  Delivery &amp; Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Showcase Canvas */}
          <div>
            <div
              style={{
                position: "relative",
                background: "rgba(17, 24, 39, 0.6)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "24px",
                boxShadow: "0 24px 48px -12px rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Product Visual Display Canvas */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "360px",
                  borderRadius: "16px",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px",
                  overflow: "hidden"
                }}
              >
                <Image
                  key={slides[currentSlide].id}
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].alt}
                  fill
                  style={{ objectFit: "contain", padding: "16px" }}
                  sizes="(max-width: 900px) 100vw, 550px"
                  priority
                />
              </div>

              {/* Slide Meta Details */}
              <div style={{ marginTop: "20px" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
                  {slides[currentSlide].title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.5, marginBottom: "12px" }}>
                  {slides[currentSlide].subtitle}
                </p>
                <p style={{ fontSize: "0.82rem", color: "#cbd5e1", fontWeight: 500 }}>
                  {slides[currentSlide].details}
                </p>
              </div>

              {/* Minimal Dot Indicators */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "20px"
                }}
              >
                {slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentSlide(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    style={{
                      width: currentSlide === dotIdx ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "9999px",
                      background: currentSlide === dotIdx ? "var(--color-primary)" : "rgba(255, 255, 255, 0.2)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .hero-layout {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
