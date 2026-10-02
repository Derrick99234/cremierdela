"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Powders", href: "#powders" },
    { name: "Machines", href: "#machines" },
    { name: "Utensils", href: "#utensils" },
    { name: "Repairs", href: "#repairs" },
    { name: "Training School", href: "#training" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid var(--border-color)"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px"
        }}
      >
        {/* Brand Logo - Made Bigger with transparent PNG */}
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <div style={{ position: "relative", width: "160px", height: "65px" }}>
            <Image
              src="/images/logo.png"
              alt="Cremier Dela"
              fill
              style={{ objectFit: "contain" }}
              sizes="160px"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "28px"
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Contact Action Button */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "12px"
          }}
          className="desktop-actions"
        >
          <a
            href="#contact"
            className="btn btn-outline"
            style={{ padding: "9px 20px", fontSize: "0.9rem" }}
          >
            <span>Contact Us</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="mobile-toggle"
          style={{
            display: "flex",
            alignItems: "center",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--text-primary)"
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid var(--border-color)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                padding: "6px 0"
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ marginTop: "12px" }}>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-outline"
              style={{ width: "100%" }}
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
