"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Phone, Check } from "lucide-react";

export default function ServicesSection() {
  const points = [
    "Commercial soft-serve and batch freezer installation & calibration",
    "Refrigeration troubleshooting, gas leak detection & recharge",
    "Routine preventative maintenance to avoid costly breakdowns",
    "Emergency breakdown support for shops and caterers",
    "In-stock spare parts: O-rings, seals, scraper blades, and belts"
  ];

  return (
    <section id="repairs" className="section section-subtle">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Machine Repairs &amp; Installation</h2>
          <p className="section-description">
            Keep your ice cream machines running without downtime. Our certified technicians handle on-site installation, repairs, and genuine spare parts.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "center"
          }}
          className="services-grid"
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
              src="/images/machine-repair.jpg"
              alt="Technician repairing ice cream machine"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          {/* Details & Actions */}
          <div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
              Expert Technical Support Across Nigeria
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {points.map((point, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <Check size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>{point}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a
                href="https://wa.me/2348033159674?text=Hello%20Cremier%20Dela,%20I%20need%20a%20technician%20for%20machine%20repair%20or%20installation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Book Technician on WhatsApp</span>
              </a>

              <a href="tel:08033159674" className="btn btn-outline">
                <Phone size={16} />
                <span>Call Hotline: 08033159674</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
