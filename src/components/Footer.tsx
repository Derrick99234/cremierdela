"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top">
          {/* Logo & Tagline */}
          <div className="footer-brand">
            <div className="footer-logo-box">
              <Image
                src="/images/logo.png"
                alt="Cremier Dela"
                fill
                style={{ objectFit: "contain" }}
                sizes="140px"
              />
            </div>
            <p className="footer-tagline">
              Commercial ice cream machines, premium powders, utensils, repairs, and training school.
            </p>
          </div>

          {/* Quick links */}
          <div className="footer-nav">
            <a href="#powders">Powders</a>
            <a href="#machines">Machines</a>
            <a href="#utensils">Utensils</a>
            <a href="#repairs">Repairs</a>
            <a href="#training">Training</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Cremier Dela. All rights reserved.</p>
          <p>08033159674 | 08039445604 • cremierdela@gmail.com</p>
        </div>
      </div>

      <style jsx>{`
        .footer-wrapper {
          background-color: #070b14;
          color: #ffffff;
          padding: 48px 0 36px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-logo-box {
          position: relative;
          width: 140px;
          height: 52px;
          flex-shrink: 0;
        }

        .footer-tagline {
          color: #94a3b8;
          font-size: 0.88rem;
          max-width: 320px;
          line-height: 1.5;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 0.9rem;
          color: #cbd5e1;
        }

        .footer-nav a {
          transition: color 0.2s ease;
        }

        .footer-nav a:hover {
          color: #ffffff;
        }

        .footer-bottom {
          padding-top: 24px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          font-size: 0.84rem;
          color: #64748b;
        }

        @media (max-width: 768px) {
          .footer-wrapper {
            padding: 40px 0 64px 0; /* extra bottom padding for floating whatsapp */
          }
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .footer-brand {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .footer-nav {
            gap: 14px;
            font-size: 0.85rem;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
}
