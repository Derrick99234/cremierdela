"use client";

import React, { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Commercial Soft-Serve Machinery");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    const text = encodeURIComponent(
      `Hello Cremier Dela,\n\nName: ${name}\nPhone: ${phone}\nInterest: ${interest}\n\nMessage:\n${message || "I am inquiring about commercial pricing and availability."}`
    );
    window.open(`https://wa.me/2348033159674?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container">
        {/* Section Header (No pill badge) */}
        <div className="section-header">
          <h2 className="section-title">Request Quotations &amp; Technical Support</h2>
          <p className="section-description">
            Connect with our team for machine pricing, bulk powder supply, servicing requests, or academy admissions.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px"
          }}
          className="contact-layout"
        >
          {/* Left Column: Direct Office Lines */}
          <div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
              Direct Office Lines
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#ffffff",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "var(--color-primary-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary)"
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 600, display: "block" }}>
                    Primary Commercial Sales &amp; Technical Line
                  </span>
                  <a
                    href="tel:08033159674"
                    style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)" }}
                  >
                    08033159674
                  </a>
                </div>
              </div>

              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#ffffff",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "var(--color-accent-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-accent-hover)"
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 600, display: "block" }}>
                    Secondary Line &amp; Training Academy
                  </span>
                  <a
                    href="tel:08039445604"
                    style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)" }}
                  >
                    08039445604
                  </a>
                </div>
              </div>

              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#ffffff",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2563eb"
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 600, display: "block" }}>
                    Corporate Email Inquiries
                  </span>
                  <a
                    href="mailto:cremierdela@gmail.com"
                    style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}
                  >
                    cremierdela@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "14px" }}>
              Official Social Media
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a
                href="https://www.tiktok.com/@cremier_dela"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: "9px 16px", fontSize: "0.85rem" }}
              >
                TikTok: <strong>@cremier_dela</strong>
              </a>
              <a
                href="https://www.instagram.com/cremierdela"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: "9px 16px", fontSize: "0.85rem" }}
              >
                Instagram: <strong>Cremier Dela</strong>
              </a>
              <a
                href="https://www.facebook.com/cremierdela"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: "9px 16px", fontSize: "0.85rem" }}
              >
                Facebook: <strong>Cremier Dela</strong>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div
            className="sleek-card"
            style={{
              padding: "36px",
              background: "#ffffff",
              border: "1px solid var(--border-color)",
              borderRadius: "20px"
            }}
          >
            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "6px" }}>
              Send An Inquiry
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "24px" }}>
              Fill in your details and our representative will follow up directly with pricing, specs, or availability.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Adebayo Johnson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 08033159674"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                  Category of Interest
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="form-input"
                  style={{ cursor: "pointer" }}
                >
                  <option value="Commercial Soft-Serve Machinery">Commercial Soft-Serve Machinery</option>
                  <option value="Gelato & Batch Freezers">Gelato &amp; Batch Freezers</option>
                  <option value="Ice Cream Powders (2.5kg / Wholesale)">Ice Cream Powders (2.5kg / Wholesale)</option>
                  <option value="Machine Repairs & Servicing">Machine Repairs &amp; Servicing</option>
                  <option value="Training Academy Admission">Training Academy Admission</option>
                  <option value="Kitchen Utensils & Accessories">Kitchen Utensils &amp; Accessories</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                  Message or Specific Inquiries
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you need (e.g. Machine model, powder quantity, delivery location)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", padding: "14px", marginTop: "6px" }}
              >
                <Send size={16} />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 920px) {
          .contact-layout {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
