"use client";

import React from "react";
import Image from "next/image";

export default function UtensilsSection() {
  const utensils = [
    {
      name: "Stainless Steel Portion Scoops",
      desc: "Heavy-duty ergonomic portion scoops with smooth spring trigger release for effortless serving without wrist fatigue."
    },
    {
      name: "Sanitary Cone Dispensers",
      desc: "Clear countertop and wall-mounted dispensers that protect waffle and wafer cones from airborne dust, humidity, and breakage."
    },
    {
      name: "Gastronorm Gelato Pan Tubs",
      desc: "Food-grade stainless steel pans crafted for standard commercial display dipping cabinets and shock-freezing storage."
    },
    {
      name: "Toppings Dispenser Organizers",
      desc: "Multi-tier stations with clear hinged lids for sprinkles, cookie crumbles, syrups, chocolate chips, and chopped nuts."
    },
    {
      name: "Commercial Immersion Mixers",
      desc: "High-power stainless immersion blenders designed to blend Cremier Dela powder mixes smoothly without lumps."
    },
    {
      name: "Measuring Cylinders & Brix Refractometers",
      desc: "Quality control tools to ensure precise water-to-powder ratios, consistent sweetness levels, and predictable overrun every batch."
    }
  ];

  return (
    <section id="utensils" className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Section Header (No pill badge) */}
        <div className="section-header">
          <h2 className="section-title">Kitchen Utensils &amp; Accessories</h2>
          <p className="section-description">
            Commercial-grade accessories, waffle makers, portion scoops, and hygiene dispensers
            for smooth day-to-day parlour operations.
          </p>
        </div>

        {/* Featured Spotlight: Double Waffle Cone Baker (No pill badge, no repetitive button) */}
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "20px",
            border: "1px solid var(--border-color)",
            padding: "36px",
            marginBottom: "40px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "36px",
            alignItems: "center"
          }}
          className="waffle-spotlight"
        >
          <div
            style={{
              position: "relative",
              height: "280px",
              borderRadius: "14px",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              border: "1px solid var(--border-light)"
            }}
          >
            <Image
              src="/images/cremier-dela-commercial-double-waffle-cone-maker.jpg"
              alt="Cremier Dela Commercial Double Waffle Cone Baker"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>
              Commercial Double Waffle Cone &amp; Bowl Baker
            </h3>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Freshly baked waffle cones increase parlour sales through aroma and presentation.
              Our heavy-duty electric double baker features independent precision thermostats, non-stick Teflon hotplates,
              and a fast 90-second baking cycle.
            </p>
          </div>
        </div>

        {/* Utensils Grid (No pill badges, no repetitive links on every card) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px"
          }}
        >
          {utensils.map((item, idx) => (
            <div
              key={idx}
              className="sleek-card"
              style={{
                padding: "24px",
                background: "#ffffff",
                borderRadius: "16px",
                border: "1px solid var(--border-color)"
              }}
            >
              <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px" }}>
                {item.name}
              </h4>

              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .waffle-spotlight {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
