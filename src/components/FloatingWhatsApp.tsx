"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 99
      }}
    >
      <a
        href="https://wa.me/2348033159674?text=Hello%20Cremier%20Dela,%20I%20have%20an%20inquiry"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25d366",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 16px rgba(37, 211, 102, 0.35)",
          textDecoration: "none"
        }}
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}
