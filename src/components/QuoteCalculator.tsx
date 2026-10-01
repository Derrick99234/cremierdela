"use client";

import React, { useState } from "react";
import { MessageCircle, ShoppingBag, Plus, Minus, Check, Sparkles, Send } from "lucide-react";

export default function QuoteCalculator() {
  const [vanillaQty, setVanillaQty] = useState(2);
  const [strawberryQty, setStrawberryQty] = useState(2);
  const [includeMachine, setIncludeMachine] = useState(false);
  const [includeUtensils, setIncludeUtensils] = useState(false);
  const [includeService, setIncludeService] = useState(false);
  const [includeTraining, setIncludeTraining] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerLocation, setCustomerLocation] = useState("");
  const [notes, setNotes] = useState("");

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    let itemsList: string[] = [];

    if (vanillaQty > 0) {
      itemsList.push(`- Cremier Dela Vanilla Powder 2.5kg (Qty: ${vanillaQty})`);
    }
    if (strawberryQty > 0) {
      itemsList.push(`- Cremier Dela Strawberry Powder 2.5kg (Qty: ${strawberryQty})`);
    }
    if (includeMachine) {
      itemsList.push(`- Commercial Ice Cream Machine consultation`);
    }
    if (includeUtensils) {
      itemsList.push(`- Parlour Utensils & Accessories starter pack`);
    }
    if (includeService) {
      itemsList.push(`- Machine Repair / Installation service`);
    }
    if (includeTraining) {
      itemsList.push(`- Ice Cream Training Academy enrollment`);
    }

    if (itemsList.length === 0) {
      alert("Please select at least one product or service!");
      return;
    }

    const message = `Hello Cremier Dela! 👋
I would like to request a quote / order for:
${itemsList.join("\n")}

👤 Name: ${customerName || "Customer"}
📍 Delivery Location: ${customerLocation || "Not specified"}
${notes ? `📝 Note: ${notes}` : ""}

Please share current pricing and availability. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/2348033159674?text=${encoded}`, "_blank");
  };

  return (
    <section id="quote-builder" className="section-wrapper" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <div className="badge-pill badge-gold">
            <ShoppingBag size={16} />
            <span>Instant Order &amp; Inquiries</span>
          </div>
          <h2 className="section-title">
            Interactive <span>Order &amp; Quote</span> Builder
          </h2>
          <p className="section-subtitle">
            Select the exact powders, machines, utensils, or services you need. We will immediately
            generate a formatted order for you to send to our WhatsApp sales team.
          </p>
        </div>

        {/* Builder Form Card */}
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            background: "#ffffff",
            borderRadius: "28px",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            padding: "36px"
          }}
        >
          <form onSubmit={handleWhatsAppSend}>
            {/* 1. Ice Cream Powders Quantity Pickers */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "16px", color: "var(--brand-primary)" }}>
                1. Select Ice Cream Powders (2.5kg Pouches)
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "16px"
                }}
              >
                {/* Vanilla Pouch Selector */}
                <div
                  style={{
                    background: "var(--bg-main)",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid rgba(30, 136, 229, 0.2)"
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1e88e5" }}>Vanilla 2.5kg</h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Signature Velvet Formula</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button
                      type="button"
                      onClick={() => setVanillaQty(Math.max(0, vanillaQty - 1))}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "1px solid var(--border-subtle)",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                      }}
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ fontSize: "1rem", fontWeight: 800, minWidth: "24px", textAlign: "center" }}>
                      {vanillaQty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setVanillaQty(vanillaQty + 1)}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "none",
                        background: "var(--brand-primary)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                      }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Strawberry Pouch Selector */}
                <div
                  style={{
                    background: "var(--bg-main)",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid rgba(225, 29, 72, 0.2)"
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e11d48" }}>Strawberry 2.5kg</h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Sweet Berry Aroma</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button
                      type="button"
                      onClick={() => setStrawberryQty(Math.max(0, strawberryQty - 1))}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "1px solid var(--border-subtle)",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                      }}
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ fontSize: "1rem", fontWeight: 800, minWidth: "24px", textAlign: "center" }}>
                      {strawberryQty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setStrawberryQty(strawberryQty + 1)}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "none",
                        background: "var(--brand-primary)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                      }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Equipment, Utensils & Services Checkboxes */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "16px", color: "var(--brand-primary)" }}>
                2. Additional Machinery &amp; Services Needed
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "12px"
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: includeMachine ? "var(--brand-primary-light)" : "var(--bg-main)",
                    border: includeMachine ? "1px solid var(--brand-primary)" : "1px solid var(--border-subtle)",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  <input
                    type="checkbox"
                    checked={includeMachine}
                    onChange={(e) => setIncludeMachine(e.target.checked)}
                    style={{ width: "18px", height: "18px", accentColor: "var(--brand-primary)" }}
                  />
                  <div>
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, display: "block" }}>Ice Cream Machine</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Soft-serve or batch freezer</span>
                  </div>
                </label>

                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: includeUtensils ? "var(--brand-primary-light)" : "var(--bg-main)",
                    border: includeUtensils ? "1px solid var(--brand-primary)" : "1px solid var(--border-subtle)",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  <input
                    type="checkbox"
                    checked={includeUtensils}
                    onChange={(e) => setIncludeUtensils(e.target.checked)}
                    style={{ width: "18px", height: "18px", accentColor: "var(--brand-primary)" }}
                  />
                  <div>
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, display: "block" }}>Kitchen Utensils Kit</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Scoops, dispensers &amp; cones</span>
                  </div>
                </label>

                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: includeService ? "var(--brand-primary-light)" : "var(--bg-main)",
                    border: includeService ? "1px solid var(--brand-primary)" : "1px solid var(--border-subtle)",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  <input
                    type="checkbox"
                    checked={includeService}
                    onChange={(e) => setIncludeService(e.target.checked)}
                    style={{ width: "18px", height: "18px", accentColor: "var(--brand-primary)" }}
                  />
                  <div>
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, display: "block" }}>Machine Repair / Setup</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Technician servicing</span>
                  </div>
                </label>

                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: includeTraining ? "var(--brand-primary-light)" : "var(--bg-main)",
                    border: includeTraining ? "1px solid var(--brand-primary)" : "1px solid var(--border-subtle)",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  <input
                    type="checkbox"
                    checked={includeTraining}
                    onChange={(e) => setIncludeTraining(e.target.checked)}
                    style={{ width: "18px", height: "18px", accentColor: "var(--brand-primary)" }}
                  />
                  <div>
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, display: "block" }}>Training Academy</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Course registration</span>
                  </div>
                </label>
              </div>
            </div>

            {/* 3. Customer Info */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "16px", color: "var(--brand-primary)" }}>
                3. Your Details (For Instant WhatsApp Quotation)
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "6px" }}>
                    Your Name / Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Joy Ice Cream Lounge"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      border: "1px solid var(--border-subtle)",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "6px" }}>
                    City / Delivery Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lagos, Abuja, Port Harcourt"
                    value={customerLocation}
                    onChange={(e) => setCustomerLocation(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      border: "1px solid var(--border-subtle)",
                      outline: "none"
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "6px" }}>
                  Additional Notes / Specific Model Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us any specific requirements or questions..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-subtle)",
                    outline: "none",
                    resize: "vertical"
                  }}
                />
              </div>
            </div>

            {/* Submit via WhatsApp */}
            <button
              type="submit"
              className="btn-whatsapp"
              style={{
                width: "100%",
                padding: "16px",
                fontSize: "1.1rem",
                borderRadius: "16px",
                fontWeight: 700
              }}
            >
              <Send size={20} />
              <span>Send Formatted Order via WhatsApp</span>
            </button>
            <p style={{ textAlign: "center", fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "10px" }}>
              Our WhatsApp support responds promptly during business hours (Mon - Sat).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
