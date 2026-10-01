"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        padding: "64px 0 80px 0",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid var(--border-color)"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* Left Column: Clean Title, Text & CTAs */}
          <div>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: "20px"
              }}
            >
              Sales, Repairs &amp; Training for Your Ice Cream Business
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "32px",
                maxWidth: "520px"
              }}
            >
              Cremier Dela supplies high-yield ice cream powders, commercial machines,
              kitchen utensils, technical repairs, installations, and professional training school classes.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center"
              }}
            >
              <a
                href="https://wa.me/2348033159674?text=Hello%20Cremier%20Dela,%20I%20would%20like%20to%20place%20an%20order%20or%20inquire"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ fontSize: "1rem", padding: "14px 28px" }}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:08033159674"
                className="btn btn-outline"
                style={{ fontSize: "1rem", padding: "14px 24px" }}
              >
                <Phone size={18} />
                <span>Call 08033159674</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean, Single Hero Image Showcase */}
          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "420px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px"
              }}
            >
              <Image
                src="/images/cremier-dela-commercial-soft-serve-ice-cream-machines-pair.jpg"
                alt="Cremier Dela Commercial Soft Serve Ice Cream Machines - Countertop and Floor Standing"
                fill
                style={{ objectFit: "contain", padding: "12px" }}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
