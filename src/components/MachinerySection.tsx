"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function MachinerySection() {
  const [activeTab, setActiveTab] = useState<"all" | "softserve" | "batch" | "snacks" | "packaging">("all");

  const machines = [
    {
      title: "Commercial Soft-Serve Freezers (Pair)",
      specs: "Countertop & Freestanding Duo • 3-Spout Twist",
      category: "softserve",
      image: "/images/cremier-dela-commercial-soft-serve-ice-cream-machines-pair.jpg",
      description:
        "High-capacity commercial soft-serve duo featuring dual compressors, fast freeze-down, and independent hopper pre-cooling for high-volume parlours."
    },
    {
      title: "Oceanpower Floor Standing Soft Serve Machine",
      specs: "3 Dispenser Levers • Twin Hoppers • High Output",
      category: "softserve",
      image: "/images/cremier-dela-oceanpower-floor-standing-soft-serve-machine.jpg",
      description:
        "High-throughput commercial soft-serve freezer with microprocessor hardness control and heavy-duty stainless steel build for peak parlour traffic."
    },
    {
      title: "Stainless Steel Countertop 3-Flavor Machine",
      specs: "Compact Countertop • 2 Single Flavors + 1 Twist",
      category: "softserve",
      image: "/images/cremier-dela-countertop-3-flavor-soft-serve-machine.jpg",
      description:
        "Space-saving countertop soft-serve machine engineered for cafes and restaurants seeking commercial output with a small footprint."
    },
    {
      title: "Compact Parlour Soft Serve Machine",
      specs: "Tabletop Model • Integrated Cone Rest",
      category: "softserve",
      image: "/images/cremier-dela-compact-soft-serve-machine-orange.jpg",
      description:
        "Durable, modern tabletop soft-serve maker with quiet compressor, rapid batch recovery, and integrated cone storage."
    },
    {
      title: "Commercial Hard Ice Cream Batch Freezer",
      specs: "Heavy-Duty Upright • Artisanal Gelato & Hard Scoop",
      category: "batch",
      image: "/images/cremier-dela-commercial-hard-ice-cream-batch-freezer.jpg",
      description:
        "High-torque industrial batch freezer engineered to churn dense, velvety Italian gelato, rich hard scoop ice cream, and fresh fruit sorbets."
    },
    {
      title: "Digital Standing Gelato Batch Freezer",
      specs: "Stainless Steel Cabinet • Top Feed Hopper",
      category: "batch",
      image: "/images/cremier-dela-standing-gelato-batch-freezer-digital.jpg",
      description:
        "Professional floor-standing gelato batch freezer featuring programmable hardness settings, rapid freeze cycles, and hygienic front discharge."
    },
    {
      title: "Tabletop Gelato & Sorbet Batch Freezer",
      specs: "Countertop Size • Transparent Cylinder Face",
      category: "batch",
      image: "/images/cremier-dela-tabletop-gelato-batch-freezer.jpg",
      description:
        "Compact batch freezer designed for boutique gelato shops, dessert bars, and restaurants crafting small-batch artisanal flavours."
    },
    {
      title: "Continuous Ice Cream Freezing Plant",
      specs: "Industrial Stainless System • Overrun Air Control",
      category: "batch",
      image: "/images/cremier-dela-continuous-freezer-ice-cream-processing-plant.jpg",
      description:
        "Industrial continuous freezer with pressure gauges, sanitary stainless piping, and overrun pump for factory-scale commercial ice cream production."
    },
    {
      title: "Triple-Bowl Commercial Slush Machine",
      specs: "3 x High-Capacity Tanks • Dual-Beater Agitator",
      category: "snacks",
      image: "/images/cremier-dela-triple-bowl-commercial-slush-granita-machine.jpg",
      description:
        "Vibrant 3-tank commercial slush and granita drink dispenser with durable polycarbonate bowls, independent chilling, and night preservation mode."
    },
    {
      title: "Curved Glass Heated Food Display Warmer",
      specs: "3-Tier Stainless Shelves • Panoramic Curved Glass",
      category: "snacks",
      image: "/images/cremier-dela-curved-glass-heated-display-warmer-showcase.jpg",
      description:
        "Heated glass display warmer showcase with 3 adjustable shelves and thermostatic heat to keep meat pies, pizza, and pastries warm and fresh."
    },
    {
      title: "Commercial Concession Popcorn Machine",
      specs: "Tempered Glass Cabinet • Stainless Kettle • Warming Deck",
      category: "snacks",
      image: "/images/cremier-dela-commercial-popcorn-machine-stainless-frame.jpg",
      description:
        "Commercial concession-grade popcorn popper with stainless steel frame, non-stick hinged kettle, internal warmer deck, and bright display lighting."
    },
    {
      title: "Commercial Double Waffle Cone Baker",
      specs: "Dual Cast Iron Hotplates • Dual Timers",
      category: "snacks",
      image: "/images/cremier-dela-commercial-double-waffle-cone-maker.jpg",
      description:
        "Heavy-duty electric double waffle cone and bowl maker with non-stick Teflon coating, independent thermostats, and rapid 90-second baking."
    },
    {
      title: "Industrial Continuous Band Sealer",
      specs: "Motorized Conveyor • Digital Temperature Control",
      category: "packaging",
      image: "/images/cremier-dela-continuous-band-sealer-packaging-machine.jpg",
      description:
        "High-speed horizontal continuous heat sealing machine for airtight, leakproof packaging of ice cream powder pouches, bags, and snack packs."
    },
    {
      title: "Commercial Undercounter Refrigerator Table",
      specs: "2-Door Stainless Steel • Food Prep Worktop",
      category: "packaging",
      image: "/images/cremier-dela-commercial-undercounter-refrigerated-worktop.jpg",
      description:
        "Commercial dual-door stainless steel refrigerated worktable for parlour ingredient storage, dairy chilling, and sturdy equipment countertop support."
    }
  ];

  const filtered = activeTab === "all" ? machines : machines.filter((m) => m.category === activeTab);

  return (
    <section id="machines" className="section" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container">
        {/* Clean Header (No pill badge) */}
        <div className="section-header">
          <h2 className="section-title">Commercial Machinery &amp; Equipment</h2>
          <p className="section-description">
            High-output soft-serve machines, batch freezers, and concession equipment backed by
            Nigerian technician support and original spare parts.
          </p>

          {/* Minimalist Tabs */}
          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "24px",
              justifyContent: "center",
              background: "#ffffff",
              padding: "6px",
              borderRadius: "12px",
              border: "1px solid var(--border-color)"
            }}
          >
            {[
              { id: "all", label: "All Equipment" },
              { id: "softserve", label: "Soft-Serve Machines" },
              { id: "batch", label: "Gelato & Batch Freezers" },
              { id: "snacks", label: "Warmers & Concessions" },
              { id: "packaging", label: "Packaging & Cold Prep" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "8px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: activeTab === tab.id ? "var(--color-primary)" : "transparent",
                  color: activeTab === tab.id ? "#ffffff" : "var(--text-secondary)",
                  transition: "all 0.15s ease"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Machinery Grid (No pill badges, no repetitive buttons on every card) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px"
          }}
        >
          {filtered.map((machine, idx) => (
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
                  height: "260px",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  borderBottom: "1px solid var(--border-light)"
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image
                    src={machine.image}
                    alt={machine.title}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.82rem", color: "var(--color-primary)", fontWeight: 700, marginBottom: "6px" }}>
                  {machine.specs}
                </span>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "10px", color: "var(--text-primary)" }}>
                  {machine.title}
                </h3>

                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  {machine.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
