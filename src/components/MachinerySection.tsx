"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function MachinerySection() {
  const [filter, setFilter] = useState<"all" | "softserve" | "batch" | "snacks" | "packaging">("all");

  const machines = [
    {
      title: "Commercial Soft Serve Ice Cream Machines (Pair)",
      specs: "Tabletop & Freestanding Models • 3-Spout Twist",
      category: "softserve",
      image: "/images/cremier-dela-commercial-soft-serve-ice-cream-machines-pair.jpg",
      description:
        "Heavy-duty commercial soft-serve machines available in compact tabletop and high-capacity floor standing models. Fast freezing, digital controls, and hopper pre-cooling."
    },
    {
      title: "Oceanpower Floor Standing Soft Serve Machine",
      specs: "3 Dispenser Handles • Twin Hoppers • High Output",
      category: "softserve",
      image: "/images/cremier-dela-oceanpower-floor-standing-soft-serve-machine.jpg",
      description:
        "High-output commercial soft serve freezer with rapid freeze-down cycle, standby refrigeration, and heavy-duty stainless steel build for high-traffic parlours."
    },
    {
      title: "Stainless Steel Countertop 3-Flavor Soft Serve Machine",
      specs: "Tabletop Space Saver • Digital LED Panel • 3 Levers",
      category: "softserve",
      image: "/images/cremier-dela-countertop-3-flavor-soft-serve-machine.jpg",
      description:
        "Space-saving countertop soft-serve machine offering 2 single flavors plus 1 combined twist. Easy to clean with automatic wash cycle."
    },
    {
      title: "Compact Countertop Soft Serve Machine",
      specs: "Dual Hoppers • Integrated Cone Rest • Quick Freezing",
      category: "softserve",
      image: "/images/cremier-dela-compact-soft-serve-machine-orange.jpg",
      description:
        "Eye-catching tabletop soft-serve maker with integrated cone storage, quiet compressor, and fast batch recovery for busy cafes and snack bars."
    },
    {
      title: "Commercial Hard Ice Cream Batch Freezer",
      specs: "Heavy-Duty Upright • Artisanal Gelato & Scoop",
      category: "batch",
      image: "/images/cremier-dela-commercial-hard-ice-cream-batch-freezer.jpg",
      description:
        "High-torque industrial batch freezer engineered for dense, creamy artisanal gelato, premium hard-scoop ice cream, and fresh fruit sorbets."
    },
    {
      title: "Digital Standing Gelato Batch Freezer",
      specs: "Stainless Steel Cabinet • Transparent Observation Chute",
      category: "batch",
      image: "/images/cremier-dela-standing-gelato-batch-freezer-digital.jpg",
      description:
        "Professional floor-standing gelato batch freezer featuring digital hardness controls, large top feeding hopper, and rapid auto-extraction."
    },
    {
      title: "Tabletop Gelato & Sorbet Batch Freezer",
      specs: "Compact Countertop • Transparent Freezing Cylinder",
      category: "batch",
      image: "/images/cremier-dela-tabletop-gelato-batch-freezer.jpg",
      description:
        "Compact batch freezer designed for boutique gelato shops, dessert bars, and restaurants crafting specialty gourmet scoops in small batches."
    },
    {
      title: "Continuous Ice Cream Freezing Plant Equipment",
      specs: "Industrial Stainless System • Overrun Air Control",
      category: "batch",
      image: "/images/cremier-dela-continuous-freezer-ice-cream-processing-plant.jpg",
      description:
        "Industrial continuous freezer with pressure gauges, sanitary stainless piping, and overrun pump for factory-scale commercial ice cream production."
    },
    {
      title: "Triple-Bowl Commercial Slush & Granita Machine",
      specs: "3 x High-Capacity Tanks • Dual-Beater Agitator",
      category: "snacks",
      image: "/images/cremier-dela-triple-bowl-commercial-slush-granita-machine.jpg",
      description:
        "Vibrant 3-tank commercial slush and granita drink dispenser with durable polycarbonate bowls, independent chilling, and night preservation mode."
    },
    {
      title: "Curved Glass Heated Food Display Warmer",
      specs: "3 Stainless Tiers • Panoramic Curved Glass",
      category: "snacks",
      image: "/images/cremier-dela-curved-glass-heated-display-warmer-showcase.jpg",
      description:
        "Heated glass display warmer showcase with 3 adjustable shelves and thermostatic heat to keep meat pies, pizza, and pastries warm and appealing."
    },
    {
      title: "Commercial Concession Popcorn Machine",
      specs: "Tempered Glass • Stainless Kettle • Warming Deck",
      category: "snacks",
      image: "/images/cremier-dela-commercial-popcorn-machine-stainless-frame.jpg",
      description:
        "Commercial popcorn popper with stainless steel frame, non-stick hinged kettle, internal warmer deck, and bright display lighting."
    },
    {
      title: "Commercial Double Waffle Cone Baker",
      specs: "Dual Cast Iron Hotplates • Dual Timers • Non-Stick",
      category: "snacks",
      image: "/images/cremier-dela-commercial-double-waffle-cone-maker.jpg",
      description:
        "Heavy-duty electric double waffle cone and bowl maker with non-stick Teflon coating, independent thermostats, and rapid 90-second baking."
    },
    {
      title: "Industrial Continuous Band Sealer",
      specs: "Motorized Conveyor • Digital Temperature Gauge",
      category: "packaging",
      image: "/images/cremier-dela-continuous-band-sealer-packaging-machine.jpg",
      description:
        "High-speed horizontal continuous heat sealing machine for airtight, leakproof packaging of ice cream powder pouches, foil bags, and snack packs."
    },
    {
      title: "Commercial Undercounter Refrigerator Worktop",
      specs: "2-Door Stainless Steel • Heavy-Duty Counter Table",
      category: "packaging",
      image: "/images/cremier-dela-commercial-undercounter-refrigerated-worktop.jpg",
      description:
        "Commercial dual-door stainless steel refrigerated worktable for parlour ingredient storage, dairy chilling, and sturdy equipment countertop support."
    }
  ];

  const filteredMachines =
    filter === "all" ? machines : machines.filter((m) => m.category === filter);

  return (
    <section id="machines" className="section section-subtle">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Commercial Machines &amp; Equipment</h2>
          <p className="section-description">
            High-performance commercial equipment for ice cream shops, bakeries, and food businesses, backed by full installation and technician support.
          </p>

          {/* Filter Tabs */}
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
              { id: "all", label: "All Equipment" },
              { id: "softserve", label: "Soft Serve Machines" },
              { id: "batch", label: "Batch Freezers" },
              { id: "snacks", label: "Snack & Warmers" },
              { id: "packaging", label: "Packaging & Chilling" }
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px"
          }}
        >
          {filteredMachines.map((machine, idx) => (
            <div key={idx} className="simple-card" style={{ display: "flex", flexDirection: "column" }}>
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

              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", fontWeight: 700, marginBottom: "6px" }}>
                  {machine.specs}
                </span>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>
                  {machine.title}
                </h3>

                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "20px", flexGrow: 1 }}>
                  {machine.description}
                </p>

                <a
                  href={`https://wa.me/2348033159674?text=${encodeURIComponent(
                    `Hello Cremier Dela, I am inquiring about price, specs and delivery for: ${machine.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: "100%" }}
                >
                  <MessageCircle size={16} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
