"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        padding: "48px 0 24px 0",
        borderTop: "1px solid #1e293b"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            paddingBottom: "32px",
            borderBottom: "1px solid #1e293b"
          }}
        >
          {/* Logo & Tagline */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ position: "relative", width: "140px", height: "55px" }}>
              <Image
                src="/images/logo.png"
                alt="Cremier Dela"
                fill
                style={{ objectFit: "contain" }}
                sizes="140px"
              />
            </div>
            <p style={{ color: "#94a3b8", fontSize: "0.9rem", maxWidth: "340px" }}>
              Sales of ice cream machines, powders, utensils, repairs, and training school.
            </p>
          </div>

          {/* Quick links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontSize: "0.9rem", color: "#cbd5e1" }}>
            <a href="#powders" style={{ transition: "color 0.2s ease" }}>Powders</a>
            <a href="#machines" style={{ transition: "color 0.2s ease" }}>Machines</a>
            <a href="#utensils" style={{ transition: "color 0.2s ease" }}>Utensils</a>
            <a href="#repairs" style={{ transition: "color 0.2s ease" }}>Repairs</a>
            <a href="#training" style={{ transition: "color 0.2s ease" }}>Training School</a>
            <a href="#contact" style={{ transition: "color 0.2s ease" }}>Contact</a>
          </div>
        </div>

        <div
          style={{
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            fontSize: "0.85rem",
            color: "#64748b"
          }}
        >
          <p>© {new Date().getFullYear()} Cremier Dela. All rights reserved.</p>
          <p>Phone: 08033159674 | 08039445604 • Email: cremierdela@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
