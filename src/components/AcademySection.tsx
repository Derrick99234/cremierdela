"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Phone, Check } from "lucide-react";

export default function AcademySection() {
  const topics = [
    "Commercial ice cream formulation, recipe balancing, and overrun control",
    "Hands-on soft-serve, hard-scoop gelato, and waffle cone making",
    "Machine operation, daily sanitation, and preventive care",
    "Parlour business economics: costing per scoop, margins, and menu pricing",
    "Certificate of completion issued upon graduation"
  ];

  return (
    <section id="training" className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Ice Cream Training School</h2>
          <p className="section-description">
            Practical, hands-on training for aspiring parlour owners, caterers, and cafe operators.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "center"
          }}
          className="academy-grid"
        >
          {/* Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "360px",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid var(--border-color)"
            }}
          >
            <Image
              src="/images/training-school.jpg"
              alt="Cremier Dela Ice Cream Training Workshop"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
              Master the Craft &amp; Business of Ice Cream
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {topics.map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <Check size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a
                href="https://wa.me/2348033159674?text=Hello%20Cremier%20Dela,%20I%20want%20to%20inquire%20about%20the%20Ice%20Cream%20Training%20School%20dates%20and%20fees"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Inquire Next Cohort on WhatsApp</span>
              </a>

              <a href="tel:08039445604" className="btn btn-outline">
                <Phone size={16} />
                <span>Call 08039445604</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .academy-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
