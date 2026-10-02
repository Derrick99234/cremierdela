"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const servicePillars = [
    {
      title: "On-Site Emergency Repairs",
      desc: "Fast technical dispatch across commercial hubs in Lagos, Abuja, and surrounding states to resolve sudden breakdowns."
    },
    {
      title: "Preventive Maintenance",
      desc: "Routine calibration of expansion valves, cylinder descaling, seal replacements, and refrigerant pressure checks."
    },
    {
      title: "Original Factory Spare Parts",
      desc: "Direct access to authentic food-grade O-rings, beater rods, dispensing handles, micro-switches, and heavy-duty motors."
    },
    {
      title: "Machine Installation & Commissioning",
      desc: "Professional voltage verification, stabilizer matching, sanitary water connection, and initial batch calibration."
    }
  ];

  return (
    <section id="repairs" className="section" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container">
        <div className="services-layout">
          {/* Visual Container */}
          <div className="services-visual">
            <div className="services-image-box">
              <Image
                src="/images/cremier-dela-technician-repairs-service.jpg"
                alt="Cremier Dela Certified Nigerian Technicians Servicing Commercial Soft Serve Machine"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Copy & CTA */}
          <div className="services-content">
            <h2 className="section-title services-title">
              Machine Repairs, Servicing &amp; Genuine Spare Parts
            </h2>

            <p className="services-description">
              In the commercial dessert business, machine downtime means immediate lost revenue.
              Our qualified service technicians ensure your equipment operates at peak refrigeration
              efficiency with authentic parts and guaranteed workmanship.
            </p>

            <div className="pillars-grid">
              {servicePillars.map((p, idx) => (
                <div key={idx} className="pillar-item">
                  <CheckCircle2 size={18} className="pillar-icon" />
                  <div>
                    <h4 className="pillar-title">{p.title}</h4>
                    <p className="pillar-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a href="#contact" className="btn btn-primary services-btn">
                <span>Book A Service Technician</span>
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-layout {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 56px;
          align-items: center;
        }

        .services-image-box {
          position: relative;
          width: 100%;
          height: 440px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
        }

        .services-title {
          text-align: left;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .services-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 36px;
        }

        .pillar-item {
          display: flex;
          gap: 10px;
        }

        :global(.pillar-icon) {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pillar-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .pillar-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .services-btn {
          padding: 14px 28px;
        }

        @media (max-width: 900px) {
          .services-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .services-image-box {
            height: 240px;
            border-radius: 16px;
          }
          .services-title {
            font-size: 1.65rem;
          }
          .services-description {
            font-size: 0.95rem;
            margin-bottom: 20px;
          }
          .pillars-grid {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-bottom: 24px;
          }
          .services-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
