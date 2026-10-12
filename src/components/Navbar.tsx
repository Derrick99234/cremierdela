"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Powders", href: "#powders" },
    { name: "Machines", href: "#machines" },
    { name: "Utensils", href: "#utensils" },
    { name: "Repairs", href: "#repairs" },
    { name: "Training", href: "#training" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="navbar-header">
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <a href="#" className="navbar-logo-link">
          <div className="navbar-logo-box">
            <Image
              src="/images/logo.png"
              alt="Cremier Dela"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 130px, 160px"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="desktop-nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Contact Action Button */}
        <div className="desktop-actions">
          <a href="#contact" className="btn btn-secondary" style={{ padding: "9px 20px", fontSize: "0.88rem" }}>
            <span>Contact Us</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              {link.name}
            </a>
          ))}
          <div style={{ marginTop: "8px", paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: "100%", padding: "12px", fontSize: "0.92rem" }}
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: rgba(7, 11, 20, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 74px;
        }

        .navbar-logo-link {
          display: flex;
          align-items: center;
        }

        .navbar-logo-box {
          position: relative;
          width: 150px;
          height: 56px;
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 28px;
        }

        .desktop-nav-link {
          font-size: 0.92rem;
          font-weight: 600;
          color: #94a3b8;
          transition: color 0.2s ease;
        }

        .desktop-nav-link:hover {
          color: #ffffff;
        }

        .desktop-actions {
          display: none;
          align-items: center;
          gap: 12px;
        }

        .mobile-toggle {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: #ffffff;
        }

        .mobile-dropdown {
          background-color: #0d1527;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .mobile-nav-link {
          font-size: 1rem;
          font-weight: 600;
          color: #e2e8f0;
          padding: 6px 0;
        }

        @media (min-width: 900px) {
          .navbar-inner {
            height: 80px;
          }
          .navbar-logo-box {
            width: 160px;
            height: 62px;
          }
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

        @media (max-width: 768px) {
          .navbar-inner {
            height: 64px;
          }
          .navbar-logo-box {
            width: 130px;
            height: 48px;
          }
        }
      `}</style>
    </header>
  );
}
