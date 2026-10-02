"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AcademySection() {
  const curriculum = [
    {
      title: "Commercial Machine Operation & Daily Care",
      desc: "Learn hands-on daily startup, mix hopper loading, temperature calibration, and sanitary wash cycles to protect your equipment."
    },
    {
      title: "Recipe Formulation & Overrun Control",
      desc: "Master liquid-to-powder ratios, viscosity control, and techniques to produce slow-melting, high-overrun soft-serve in hot weather."
    },
    {
      title: "Artisanal Gelato & Specialty Confections",
      desc: "Small-batch Italian gelato churning, fresh fruit sorbet bases, waffle cone baking, and attractive swirl presentation."
    },
    {
      title: "Parlour Business Economics & Costing",
      desc: "Accurately calculate cost-per-cone, portion yields, waste reduction, and pricing strategies for commercial parlour profitability."
    }
  ];

  return (
    <section id="training" className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="academy-layout">
          {/* Left Column: Context & Course Syllabus */}
          <div className="academy-content">
            <h2 className="section-title academy-title">
              We Also Train: Cremier Dela Ice Cream Academy
            </h2>

            <p className="academy-description">
              Launching an ice cream brand or opening a parlour requires more than just machines.
              Our comprehensive hands-on culinary workshops equip entrepreneurs, parlour managers,
              and staff with the practical expertise needed to operate successfully.
            </p>

            <div className="curriculum-list">
              {curriculum.map((item, idx) => (
                <div key={idx} className="curriculum-item">
                  <CheckCircle2 size={18} className="curriculum-icon" />
                  <div>
                    <h4 className="curriculum-title">{item.title}</h4>
                    <p className="curriculum-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a href="#contact" className="btn btn-outline academy-btn">
                <span>Inquire About Next Training Session</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="academy-visual">
            <div className="academy-image-box">
              <Image
                src="/images/cremier-dela-ice-cream-training-academy.jpg"
                alt="Cremier Dela Hands-on Ice Cream Masterclass Academy in Nigeria"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .academy-layout {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 56px;
          align-items: center;
        }

        .academy-image-box {
          position: relative;
          width: 100%;
          height: 440px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
        }

        .academy-title {
          text-align: left;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .academy-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .curriculum-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }

        .curriculum-item {
          display: flex;
          gap: 12px;
        }

        :global(.curriculum-icon) {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .curriculum-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 3px;
        }

        .curriculum-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .academy-btn {
          padding: 13px 26px;
        }

        @media (max-width: 900px) {
          .academy-layout {
            display: flex;
            flex-direction: column-reverse;
            gap: 32px;
          }
          .academy-image-box {
            height: 240px;
            border-radius: 16px;
          }
          .academy-title {
            font-size: 1.65rem;
          }
          .academy-description {
            font-size: 0.95rem;
            margin-bottom: 20px;
          }
          .curriculum-list {
            gap: 14px;
            margin-bottom: 24px;
          }
          .academy-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
