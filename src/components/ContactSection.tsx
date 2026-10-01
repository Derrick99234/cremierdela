"use client";

import React, { useState } from "react";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please provide your name and phone number");
      return;
    }
    const text = encodeURIComponent(
      `Hello Cremier Dela! 👋\n\nName: ${name}\nPhone: ${phone}\n\nMessage: ${message || "I would like to inquire about your products and services."}`
    );
    window.open(`https://wa.me/2348033159674?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="section section-subtle">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            Reach out directly for orders, machine quotations, repair bookings, or school admissions.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px"
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Details */}
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "20px" }}>
              Direct Contact Lines
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              <div className="simple-card" style={{ padding: "18px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "var(--color-primary-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary)"
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", display: "block" }}>
                    Primary Hotline &amp; WhatsApp
                  </span>
                  <a href="tel:08033159674" style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    08033159674
                  </a>
                </div>
              </div>

              <div className="simple-card" style={{ padding: "18px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "var(--color-accent-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-accent)"
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", display: "block" }}>
                    Secondary Hotline &amp; Training School
                  </span>
                  <a href="tel:08039445604" style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    08039445604
                  </a>
                </div>
              </div>

              <div className="simple-card" style={{ padding: "18px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0284c7"
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", display: "block" }}>
                    Email Address
                  </span>
                  <a href="mailto:cremierdela@gmail.com" style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    cremierdela@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
              Social Media
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a
                href="https://www.tiktok.com/@cremier_dela"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: "8px 16px", fontSize: "0.88rem" }}
              >
                TikTok: <strong>@cremier_dela</strong>
              </a>
              <a
                href="https://www.instagram.com/cremierdela"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: "8px 16px", fontSize: "0.88rem" }}
              >
                Instagram: <strong>Cremier Dela</strong>
              </a>
              <a
                href="https://www.facebook.com/cremierdela"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: "8px 16px", fontSize: "0.88rem" }}
              >
                Facebook: <strong>Cremier Dela</strong>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="simple-card" style={{ padding: "32px" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "8px" }}>
              Send a Quick Message
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
              Enter your name and phone number to send your request directly to our team.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "6px" }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "6px" }}>
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
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "6px" }}>
                  Message or Inquiries
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you need (Powders, Machines, Repairs, Training...)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-whatsapp" style={{ width: "100%", padding: "14px" }}>
                <Send size={18} />
                <span>Send to WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
