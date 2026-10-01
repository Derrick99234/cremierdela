"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function PowdersSection() {
  const [filter, setFilter] = useState<"all" | "pouch" | "carton" | "sack">("all");

  const products = [
    {
      name: "Vanilla Ice Cream Powder",
      size: "2.5kg Pouch",
      category: "pouch",
      image: "/images/cremier-dela-vanilla-ice-cream-powder-2-5kg-pouch.jpg",
      description:
        "Signature rich vanilla flavor. Yields up to 80-90 soft-serve cones with smooth overrun and slow melt resistance."
    },
    {
      name: "Strawberry Ice Cream Powder",
      size: "2.5kg Pouch",
      category: "pouch",
      image: "/images/cremier-dela-strawberry-ice-cream-powder-2-5kg-pouch.jpg",
      description:
        "Vibrant natural strawberry flavor with velvety pink swirl. Easily mixes with whole milk or clean potable water."
    },
    {
      name: "Vanilla Ice Cream Powder (Wholesale)",
      size: "15kg Carton Box",
      category: "carton",
      image: "/images/cremier-dela-vanilla-ice-cream-powder-15kg-carton.jpg",
      description:
        "Commercial wholesale carton containing multi-pack vanilla pouches for high-turnover ice cream parlours and caterers."
    },
    {
      name: "Strawberry Ice Cream Powder (Wholesale)",
      size: "15kg Carton Box",
      category: "carton",
      image: "/images/cremier-dela-strawberry-ice-cream-powder-15kg-carton.jpg",
      description:
        "Commercial bulk carton box containing multi-pack strawberry mixes. Ideal for busy parlours, cafes, and bakeries."
    },
    {
      name: "Vanilla Ice Cream Powder (Industrial)",
      size: "25kg Heavy-Duty Kraft Sack",
      category: "sack",
      image: "/images/cremier-dela-vanilla-ice-cream-powder-25kg-sack.jpg",
      description:
        "Industrial 25kg multi-wall kraft sack with moisture-barrier liner. Engineered for commercial ice cream production."
    },
    {
      name: "Strawberry Ice Cream Powder (Industrial)",
      size: "25kg Heavy-Duty Kraft Sack",
      category: "sack",
      image: "/images/cremier-dela-strawberry-ice-cream-powder-25kg-sack.jpg",
      description:
        "Industrial 25kg heavy-duty kraft sack. Maximum cost efficiency for large-scale operations and distribution."
    }
  ];

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="powders" className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Ice Cream Powders &amp; Packaging</h2>
          <p className="section-description">
            Available in 2.5kg parlour pouches, 15kg commercial cartons, and 25kg bulk industrial sacks.
          </p>

          {/* Simple Clean Filter */}
          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "20px",
              justifyContent: "center"
            }}
          >
            {[
              { id: "all", label: "All Pack Sizes" },
              { id: "pouch", label: "2.5kg Pouches" },
              { id: "carton", label: "15kg Cartons" },
              { id: "sack", label: "25kg Bulk Sacks" }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: filter === btn.id ? "1px solid var(--color-primary)" : "1px solid var(--border-color)",
                  backgroundColor: filter === btn.id ? "var(--color-primary)" : "#ffffff",
                  color: filter === btn.id ? "#ffffff" : "var(--text-secondary)",
                  transition: "all 0.15s ease"
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px"
          }}
        >
          {filteredProducts.map((item, idx) => (
            <div
              key={idx}
              className="simple-card"
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              {/* Product Clean Viewport */}
              <div
                style={{
                  position: "relative",
                  height: "260px",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  borderBottom: "1px solid var(--border-light)"
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <Image
                    src={item.image}
                    alt={`${item.name} - ${item.size}`}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1
                }}
              >
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-primary)",
                    fontWeight: 700,
                    marginBottom: "4px"
                  }}
                >
                  {item.size}
                </span>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>
                  {item.name}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    marginBottom: "20px",
                    flexGrow: 1
                  }}
                >
                  {item.description}
                </p>

                <a
                  href={`https://wa.me/2348033159674?text=${encodeURIComponent(
                    `Hello Cremier Dela, I want to order ${item.name} (${item.size}). Please send pricing and availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: "100%" }}
                >
                  <MessageCircle size={16} />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
