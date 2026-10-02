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
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Request Quotations &amp; Support</h2>
          <p className="section-description">
            Connect with our team for machine pricing, bulk powder supply, servicing requests, or academy admissions.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Office Lines */}
          <div className="contact-info-block">
            <h3 className="contact-block-title">Direct Office Lines</h3>

            <div className="office-lines-list">
              <div className="office-line-card">
                <div className="office-icon-box phone-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="office-label">Primary Commercial &amp; Technical Line</span>
                  <a href="tel:08033159674" className="office-val">08033159674</a>
                </div>
              </div>

              <div className="office-line-card">
                <div className="office-icon-box phone-secondary">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="office-label">Secondary Line &amp; Training Academy</span>
                  <a href="tel:08039445604" className="office-val">08039445604</a>
                </div>
              </div>

              <div className="office-line-card">
                <div className="office-icon-box mail-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="office-label">Corporate Email Inquiries</span>
                  <a href="mailto:cremierdela@gmail.com" className="office-val email-val">
                    cremierdela@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <h4 className="social-heading">Official Social Media</h4>
            <div className="social-links-group">
              <a
                href="https://www.tiktok.com/@cremier_dela"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline social-btn"
              >
                TikTok: <strong>@cremier_dela</strong>
              </a>
              <a
                href="https://www.instagram.com/cremierdela"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline social-btn"
              >
                Instagram: <strong>Cremier Dela</strong>
              </a>
              <a
                href="https://www.facebook.com/cremierdela"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline social-btn"
              >
                Facebook: <strong>Cremier Dela</strong>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="sleek-card contact-form-card">
            <h3 className="form-card-title">Send An Inquiry</h3>
            <p className="form-card-desc">
              Fill in your details and our representative will follow up directly with pricing, specs, or availability.
            </p>

            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="form-group">
                <label className="form-label">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Adebayo Johnson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 08033159674"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category of Interest</label>
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

              <div className="form-group">
                <label className="form-label">Message or Specific Inquiries</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you need (e.g. Machine model, powder quantity, delivery location)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={16} />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 48px;
        }

        .contact-block-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .office-lines-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .office-line-card {
          padding: 18px 20px;
          border-radius: 16px;
          background: #ffffff;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .office-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .phone-primary {
          background: var(--color-primary-soft);
          color: var(--color-primary);
        }

        .phone-secondary {
          background: var(--color-accent-soft);
          color: var(--color-accent-hover);
        }

        .mail-box {
          background: #eff6ff;
          color: #2563eb;
        }

        .office-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 600;
          display: block;
        }

        .office-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .email-val {
          font-size: 1.05rem;
          font-weight: 700;
        }

        .social-heading {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .social-links-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .social-btn {
          padding: 8px 14px;
          font-size: 0.84rem;
        }

        .contact-form-card {
          padding: 36px;
          background: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 20px;
        }

        .form-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .form-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          margin-top: 6px;
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .contact-form-card {
            padding: 24px 16px;
            border-radius: 16px;
          }
          .office-line-card {
            padding: 14px 16px;
          }
          .office-val {
            font-size: 1.05rem;
          }
          .social-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
