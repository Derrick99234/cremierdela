"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const servicePillars = [
    {
      title: "On-Site Emergency Repairs",
      desc: "Fast technical dispatch across commercial hubs in Lagos, Abuja, and surrounding states to resolve sudden breakdowns."
    },
    {
      title: "Preventive Maintenance",
      desc: "Routine calibration of expansion valves, cylinder descaling, seal replacements, and refrigerant pressure checks."
    },
    {
      title: "Original Factory Spare Parts",
      desc: "Direct access to authentic food-grade O-rings, beater rods, dispensing handles, micro-switches, and heavy-duty motors."
    },
    {
      title: "Machine Installation & Commissioning",
      desc: "Professional voltage verification, stabilizer matching, sanitary water connection, and initial batch calibration."
    }
  ];

  return (
    <section id="repairs" className="section" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "56px",
            alignItems: "center"
          }}
          className="services-layout"
        >
          {/* Left Column: Authentic Nigerian Workshop Visual */}
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
                src="/images/cremier-dela-technician-repairs-service.jpg"
                alt="Cremier Dela Certified Nigerian Technicians Servicing Commercial Soft Serve Machine"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column: Copy & Single Booking Call-to-Action */}
          <div>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: "16px" }}>
              Machine Repairs, Servicing &amp; Genuine Spare Parts
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                marginBottom: "28px"
              }}
            >
              In the commercial dessert business, machine downtime means immediate lost revenue.
              Our qualified service technicians ensure your equipment operates at peak refrigeration
              efficiency with authentic parts and guaranteed workmanship.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
                marginBottom: "36px"
              }}
            >
              {servicePillars.map((p, idx) => (
                <div key={idx} style={{ display: "flex", gap: "10px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "4px" }}>
                      {p.title}
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.45 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a href="#contact" className="btn btn-primary" style={{ padding: "14px 28px" }}>
                <span>Book A Service Technician</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .services-layout {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
