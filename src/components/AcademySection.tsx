"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AcademySection() {
  const curriculum = [
    {
      title: "Commercial Machine Operation & Daily Care",
      desc: "Learn hands-on daily startup, mix hopper loading, temperature calibration, and sanitary wash cycles to protect your equipment."
    },
    {
      title: "Recipe Formulation & Overrun Control",
      desc: "Master liquid-to-powder ratios, viscosity control, and techniques to produce slow-melting, high-overrun soft-serve in hot weather."
    },
    {
      title: "Artisanal Gelato & Specialty Confections",
      desc: "Small-batch Italian gelato churning, fresh fruit sorbet bases, waffle cone baking, and attractive swirl presentation."
    },
    {
      title: "Parlour Business Economics & Costing",
      desc: "Accurately calculate cost-per-cone, portion yields, waste reduction, and pricing strategies for commercial parlour profitability."
    }
  ];

  return (
    <section id="training" className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "56px",
            alignItems: "center"
          }}
          className="academy-layout"
        >
          {/* Left Column: Context & Course Syllabus */}
          <div>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: "16px" }}>
              We Also Train: Cremier Dela Ice Cream Academy
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                marginBottom: "28px"
              }}
            >
              Launching an ice cream brand or opening a parlour requires more than just machines.
              Our comprehensive hands-on culinary workshops equip entrepreneurs, parlour managers,
              and staff with the practical expertise needed to operate successfully.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
              {curriculum.map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "12px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "3px" }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.45 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-outline" style={{ padding: "13px 26px" }}>
              <span>Inquire About Next Training Session</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Column: Authentic Nigerian Academy Visual */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "440px",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-md)"
              }}
            >
              <Image
                src="/images/cremier-dela-ice-cream-training-academy.jpg"
                alt="Cremier Dela Hands-on Ice Cream Masterclass Academy in Nigeria"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .academy-layout {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
