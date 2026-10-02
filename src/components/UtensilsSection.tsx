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
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Kitchen Utensils &amp; Accessories</h2>
          <p className="section-description">
            Commercial-grade accessories, waffle makers, portion scoops, and hygiene dispensers
            for smooth day-to-day parlour operations.
          </p>
        </div>

        {/* Featured Spotlight: Double Waffle Cone Baker */}
        <div className="waffle-spotlight">
          <div className="waffle-image-box">
            <Image
              src="/images/cremier-dela-commercial-double-waffle-cone-maker.jpg"
              alt="Cremier Dela Commercial Double Waffle Cone Baker"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="waffle-content">
            <h3 className="waffle-title">
              Commercial Double Waffle Cone &amp; Bowl Baker
            </h3>

            <p className="waffle-desc">
              Freshly baked waffle cones increase parlour sales through aroma and presentation.
              Our heavy-duty electric double baker features independent precision thermostats, non-stick Teflon hotplates,
              and a fast 90-second baking cycle.
            </p>
          </div>
        </div>

        {/* Utensils Grid */}
        <div className="utensils-grid">
          {utensils.map((item, idx) => (
            <div key={idx} className="sleek-card utensil-card">
              <h4 className="utensil-name">{item.name}</h4>
              <p className="utensil-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .waffle-spotlight {
          background: #f8fafc;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          padding: 36px;
          margin-bottom: 40px;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 36px;
          align-items: center;
        }

        .waffle-image-box {
          position: relative;
          height: 280px;
          border-radius: 14px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border: 1px solid var(--border-light);
        }

        .waffle-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 12px;
          line-height: 1.25;
        }

        .waffle-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .utensils-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .utensil-card {
          padding: 24px;
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid var(--border-color);
        }

        .utensil-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .utensil-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 768px) {
          .waffle-spotlight {
            grid-template-columns: 1fr;
            padding: 20px 16px;
            gap: 20px;
            margin-bottom: 28px;
          }
          .waffle-image-box {
            height: 200px;
            padding: 12px;
          }
          .waffle-title {
            font-size: 1.2rem;
            margin-bottom: 8px;
          }
          .waffle-desc {
            font-size: 0.88rem;
          }
          .utensils-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .utensil-card {
            padding: 18px 16px;
          }
          .utensil-name {
            font-size: 1.05rem;
          }
          .utensil-desc {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
