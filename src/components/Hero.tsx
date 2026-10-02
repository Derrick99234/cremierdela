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
    <section className="hero-section">
      {/* Background Ambient Glows */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-layout">
          {/* Text Content */}
          <div className="hero-text-block">
            <h1 className="hero-heading">
              Commercial Ice Cream Machinery &amp; Premium Powders
            </h1>

            <p className="hero-subheading">
              Nigeria’s trusted source for high-output soft-serve machines, artisanal batch freezers,
              and rich, creamy ice cream powders crafted for excellent texture and slow melt.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#machines" className="btn btn-primary hero-btn">
                <span>View Machinery</span>
                <ArrowRight size={17} />
              </a>

              <a href="#powders" className="btn btn-secondary hero-btn">
                <span>Ice Cream Powders</span>
              </a>
            </div>

            {/* Clean Metrics Bar */}
            <div className="hero-metrics-bar">
              <div className="metric-item">
                <div className="metric-number">80–90</div>
                <div className="metric-label">Cones / 2.5kg Pouch</div>
              </div>

              <div className="metric-item">
                <div className="metric-number">Stainless</div>
                <div className="metric-label">Commercial Grade</div>
              </div>

              <div className="metric-item">
                <div className="metric-number">Nationwide</div>
                <div className="metric-label">Delivery &amp; Support</div>
              </div>
            </div>
          </div>

          {/* Product Visual Showcase Canvas */}
          <div className="hero-visual-block">
            <div className="showcase-card">
              <div className="showcase-image-canvas">
                <Image
                  key={slides[currentSlide].id}
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].alt}
                  fill
                  style={{ objectFit: "contain", padding: "12px" }}
                  sizes="(max-width: 768px) 90vw, 550px"
                  priority
                />
              </div>

              <div className="showcase-info">
                <h3 className="showcase-title">{slides[currentSlide].title}</h3>
                <p className="showcase-desc">{slides[currentSlide].subtitle}</p>
                <p className="showcase-details">{slides[currentSlide].details}</p>
              </div>

              {/* Minimal Dot Indicators */}
              <div className="showcase-dots">
                {slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentSlide(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`dot-btn ${currentSlide === dotIdx ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          background: linear-gradient(180deg, #070b14 0%, #0d1527 100%);
          color: #ffffff;
          padding: 80px 0 92px 0;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hero-glow-1 {
          position: absolute;
          top: -15%;
          right: 10%;
          width: 550px;
          height: 550px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200, 16, 46, 0.2) 0%, rgba(200, 16, 46, 0) 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        .hero-glow-2 {
          position: absolute;
          bottom: -10%;
          left: 5%;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0) 70%);
          filter: blur(50px);
          pointer-events: none;
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }

        .hero-heading {
          font-size: clamp(2.4rem, 4.4vw, 3.6rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 22px;
          color: #ffffff;
        }

        .hero-subheading {
          font-size: 1.1rem;
          color: #94a3b8;
          line-height: 1.65;
          margin-bottom: 32px;
          max-width: 520px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          margin-bottom: 40px;
        }

        .hero-metrics-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .metric-item {
          display: flex;
          flex-direction: column;
        }

        .metric-number {
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
          font-family: var(--font-heading);
          line-height: 1.2;
        }

        .metric-label {
          font-size: 0.82rem;
          color: #94a3b8;
          margin-top: 2px;
          line-height: 1.3;
        }

        .showcase-card {
          position: relative;
          background: rgba(17, 24, 39, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 22px;
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.5);
        }

        .showcase-image-canvas {
          position: relative;
          width: 100%;
          height: 340px;
          border-radius: 14px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          overflow: hidden;
        }

        .showcase-info {
          margin-top: 18px;
        }

        .showcase-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .showcase-desc {
          font-size: 0.88rem;
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .showcase-details {
          font-size: 0.8rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        .showcase-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 18px;
        }

        .dot-btn {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.25);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot-btn.active {
          width: 24px;
          background: var(--color-primary);
        }

        /* Desktop Layout */
        @media (min-width: 960px) {
          .hero-layout {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 56px;
          }
        }

        /* Mobile Refinements */
        @media (max-width: 768px) {
          .hero-section {
            padding: 44px 0 60px 0;
          }
          .hero-layout {
            gap: 36px;
          }
          .hero-heading {
            font-size: 1.95rem;
            line-height: 1.2;
            margin-bottom: 16px;
          }
          .hero-subheading {
            font-size: 0.95rem;
            line-height: 1.55;
            margin-bottom: 24px;
          }
          .hero-cta-group {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 12px;
            margin-bottom: 28px;
          }
          .hero-btn {
            width: 100%;
            padding: 13px 20px !important;
            font-size: 0.95rem !important;
            justify-content: center;
          }
          .hero-metrics-bar {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            padding-top: 18px;
          }
          .metric-number {
            font-size: 1.1rem;
          }
          .metric-label {
            font-size: 0.72rem;
          }
          .showcase-card {
            padding: 16px;
            border-radius: 16px;
          }
          .showcase-image-canvas {
            height: 240px;
          }
          .showcase-title {
            font-size: 1.1rem;
          }
          .showcase-desc {
            font-size: 0.82rem;
            margin-bottom: 6px;
          }
          .showcase-details {
            font-size: 0.75rem;
          }
        }

        /* Ultra small mobile screens */
        @media (max-width: 380px) {
          .hero-heading {
            font-size: 1.75rem;
          }
          .metric-number {
            font-size: 1rem;
          }
          .metric-label {
            font-size: 0.68rem;
          }
        }
      `}</style>
    </section>
  );
}
