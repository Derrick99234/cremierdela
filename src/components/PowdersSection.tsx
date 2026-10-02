"use client";

import React from "react";
import Image from "next/image";

export default function PowdersSection() {
  const products = [
    {
      name: "Vanilla Soft-Serve Powder",
      pack: "2.5kg Pouch",
      yieldText: "Yields 80–90 Cones",
      image: "/images/cremier-dela-vanilla-ice-cream-powder-2-5kg-pouch.jpg",
      description: "Rich Madagascar vanilla profile with smooth overrun and high slow-melt stability in hot weather."
    },
    {
      name: "Strawberry Soft-Serve Powder",
      pack: "2.5kg Pouch",
      yieldText: "Yields 80–90 Cones",
      image: "/images/cremier-dela-strawberry-ice-cream-powder-2-5kg-pouch.jpg",
      description: "Refreshing natural strawberry taste with smooth texture. Ideal for single cones or two-flavor twists."
    },
    {
      name: "Vanilla Wholesale Master Carton",
      pack: "15kg Carton Box",
      yieldText: "Yields ~510 Cones",
      image: "/images/cremier-dela-vanilla-ice-cream-powder-15kg-carton.jpg",
      description: "Commercial master carton containing multi-pack pouches for busy parlours, cafes, and bakeries."
    },
    {
      name: "Strawberry Wholesale Master Carton",
      pack: "15kg Carton Box",
      yieldText: "Yields ~510 Cones",
      image: "/images/cremier-dela-strawberry-ice-cream-powder-15kg-carton.jpg",
      description: "Bulk wholesale carton delivering convenience and consistent batch preparation for high-turnover outlets."
    },
    {
      name: "Vanilla Industrial Kraft Sack",
      pack: "25kg Heavy-Duty Sack",
      yieldText: "Yields ~850+ Cones",
      image: "/images/cremier-dela-vanilla-ice-cream-powder-25kg-sack.jpg",
      description: "Multi-wall kraft paper sack with moisture barrier for ice cream manufacturing plants and wholesale distribution."
    },
    {
      name: "Strawberry Industrial Kraft Sack",
      pack: "25kg Heavy-Duty Sack",
      yieldText: "Yields ~850+ Cones",
      image: "/images/cremier-dela-strawberry-ice-cream-powder-25kg-sack.jpg",
      description: "Industrial bulk supply delivering maximum yield efficiency for large-scale operations and commercial packaging."
    }
  ];

  return (
    <section id="powders" className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Clean Section Header */}
        <div className="section-header">
          <h2 className="section-title">Ice Cream Powders &amp; Mixes</h2>
          <p className="section-description">
            Available in 2.5kg parlour pouches, 15kg commercial cartons, and 25kg bulk industrial sacks.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="powders-grid">
          {products.map((item, idx) => (
            <div key={idx} className="sleek-card powder-card">
              {/* Product Visual */}
              <div className="powder-image-canvas">
                <Image
                  src={item.image}
                  alt={`${item.name} - ${item.pack}`}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Product Info */}
              <div className="powder-info">
                <div className="powder-meta">
                  <span className="powder-pack">{item.pack}</span>
                  <span className="powder-yield">{item.yieldText}</span>
                </div>

                <h3 className="powder-title">{item.name}</h3>
                <p className="powder-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .powders-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
        }

        .powder-card {
          border-radius: 16px;
          border: 1px solid var(--border-color);
          background: #ffffff;
        }

        .powder-image-canvas {
          position: relative;
          height: 280px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border-bottom: 1px solid var(--border-light);
        }

        .powder-info {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .powder-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 8px;
        }

        .powder-pack {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        .powder-yield {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .powder-title {
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .powder-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 640px) {
          .powders-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .powder-image-canvas {
            height: 230px;
            padding: 16px;
          }
          .powder-info {
            padding: 18px 16px;
          }
          .powder-title {
            font-size: 1.1rem;
            margin-bottom: 6px;
          }
          .powder-desc {
            font-size: 0.86rem;
          }
        }
      `}</style>
    </section>
  );
}
