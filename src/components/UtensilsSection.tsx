"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function UtensilsSection() {
  const utensils = [
    {
      name: "Stainless Steel Ice Cream Scoops",
      desc: "Heavy-duty portion scoops with spring trigger release for effortless serving without wrist strain."
    },
    {
      name: "Belgian Waffle Cone Makers",
      desc: "Commercial non-stick waffle cone and bowl baker producing fresh crisp cones in 90 seconds."
    },
    {
      name: "Sanitary Cone Dispensers",
      desc: "Clear countertop and wall-mount dispensers protecting cones from dust, moisture, and breakage."
    },
    {
      name: "Gastronorm Gelato Pan Tubs",
      desc: "Food-grade stainless steel pans designed for standard dipping cabinets and batch display."
    },
    {
      name: "Toppings Dispenser Organizers",
      desc: "Multi-tier stations with clear lids for sprinkles, nuts, cookie crumbles, and sauce syrups."
    },
    {
      name: "Commercial Immersion Blenders",
      desc: "High-power stainless steel blenders to mix Cremier Dela powders smoothly without lumps."
    }
  ];

  return (
    <section id="utensils" className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Kitchen Utensils &amp; Accessories</h2>
          <p className="section-description">
            Commercial-grade accessories, scoops, waffle bakers, and storage tools for ice cream shops.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
            alignItems: "center",
            marginBottom: "40px"
          }}
          className="utensils-grid"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "280px",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid var(--border-color)"
            }}
          >
            <Image
              src="/images/kitchen-utensils.jpg"
              alt="Cremier Dela Kitchen Utensils"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1200px) 100vw, 1180px"
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px"
          }}
        >
          {utensils.map((item, idx) => (
            <div
              key={idx}
              className="simple-card"
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "8px" }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "16px" }}>
                  {item.desc}
                </p>
              </div>

              <a
                href={`https://wa.me/2348033159674?text=${encodeURIComponent(
                  `Hello Cremier Dela, I am inquiring about: ${item.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "var(--color-primary)",
                  fontWeight: 600,
                  fontSize: "0.88rem"
                }}
              >
                <MessageCircle size={15} />
                <span>Inquire on WhatsApp &rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
