"use client";

import React from "react";
import Image from "next/image";

export default function PowdersSection() {
  const products = [
    {
      name: "Vanilla Soft-Serve Powder",
      pack: "2.5kg Pouch",
      yieldText: "Yields 80–90 Cones",
      image: "/images/cremier-dela-vanilla-ice-cream-powder-2-5kg-pouch.jpg",
      description: "Rich Madagascar vanilla profile with smooth overrun and high slow-melt stability in hot weather."
    },
    {
      name: "Strawberry Soft-Serve Powder",
      pack: "2.5kg Pouch",
      yieldText: "Yields 80–90 Cones",
      image: "/images/cremier-dela-strawberry-ice-cream-powder-2-5kg-pouch.jpg",
      description: "Refreshing natural strawberry taste with smooth texture. Ideal for single cones or two-flavor twists."
    },
    {
      name: "Vanilla Wholesale Master Carton",
      pack: "15kg Carton Box",
      yieldText: "Yields ~510 Cones",
      image: "/images/cremier-dela-vanilla-ice-cream-powder-15kg-carton.jpg",
      description: "Commercial master carton containing multi-pack pouches for busy parlours, cafes, and bakeries."
    },
    {
      name: "Strawberry Wholesale Master Carton",
      pack: "15kg Carton Box",
      yieldText: "Yields ~510 Cones",
      image: "/images/cremier-dela-strawberry-ice-cream-powder-15kg-carton.jpg",
      description: "Bulk wholesale carton delivering convenience and consistent batch preparation for high-turnover outlets."
    },
    {
      name: "Vanilla Industrial Kraft Sack",
      pack: "25kg Heavy-Duty Sack",
      yieldText: "Yields ~850+ Cones",
      image: "/images/cremier-dela-vanilla-ice-cream-powder-25kg-sack.jpg",
      description: "Multi-wall kraft paper sack with moisture barrier for ice cream manufacturing plants and wholesale distribution."
    },
    {
      name: "Strawberry Industrial Kraft Sack",
      pack: "25kg Heavy-Duty Sack",
      yieldText: "Yields ~850+ Cones",
      image: "/images/cremier-dela-strawberry-ice-cream-powder-25kg-sack.jpg",
      description: "Industrial bulk supply delivering maximum yield efficiency for large-scale operations and commercial packaging."
    }
  ];

  return (
    <section id="powders" className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Clean Section Header (No pill badge) */}
        <div className="section-header">
          <h2 className="section-title">Ice Cream Powders &amp; Mixes</h2>
          <p className="section-description">
            Available in 2.5kg parlour pouches, 15kg commercial cartons, and 25kg bulk industrial sacks.
          </p>
        </div>

        {/* Clean, Elegant 6-Grid (No pill badges, no repetitive buttons on every card) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px"
          }}
        >
          {products.map((item, idx) => (
            <div
              key={idx}
              className="sleek-card"
              style={{
                borderRadius: "16px",
                border: "1px solid var(--border-color)",
                background: "#ffffff"
              }}
            >
              {/* Product Visual */}
              <div
                style={{
                  position: "relative",
                  height: "280px",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  borderBottom: "1px solid var(--border-light)"
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image
                    src={item.image}
                    alt={`${item.name} - ${item.pack}`}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-primary)" }}>
                    {item.pack}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {item.yieldText}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "10px", color: "var(--text-primary)" }}>
                  {item.name}
                </h3>

                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
