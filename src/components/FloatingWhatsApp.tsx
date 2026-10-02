"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="floating-whatsapp-container">
      <a
        href="https://wa.me/2348033159674?text=Hello%20Cremier%20Dela,%20I%20have%20an%20inquiry"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-whatsapp-btn"
      >
        <MessageCircle className="whatsapp-icon" />
      </a>

      <style jsx>{`
        .floating-whatsapp-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
        }

        .floating-whatsapp-btn {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-color: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
          text-decoration: none;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
        }

        .floating-whatsapp-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.5);
        }

        :global(.whatsapp-icon) {
          width: 28px;
          height: 28px;
        }

        @media (max-width: 768px) {
          .floating-whatsapp-container {
            bottom: 16px;
            right: 16px;
          }
          .floating-whatsapp-btn {
            width: 48px;
            height: 48px;
            box-shadow: 0 6px 16px rgba(37, 211, 102, 0.35);
          }
          :global(.whatsapp-icon) {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </div>
  );
}
