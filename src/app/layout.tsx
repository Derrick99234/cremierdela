import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cremierdela.com"),
  title: {
    default: "Cremier Dela | Commercial Ice Cream Machines, Powders & Repairs Nigeria",
    template: "%s | Cremier Dela"
  },
  description:
    "Nigeria’s leading supplier of commercial soft-serve machines, gelato batch freezers, and signature ice cream powders (2.5kg, 15kg, 25kg). 12-month warranty, on-site technician repairs, and hands-on training academy. Nationwide delivery across Lagos, Abuja, Port Harcourt & all 36 states. Call 08033159674.",
  keywords: [
    "Cremier Dela",
    "Commercial ice cream machine Nigeria",
    "Soft serve ice cream machine price in Lagos",
    "Ice cream powder supplier Nigeria",
    "Vanilla ice cream powder 2.5kg",
    "Strawberry soft serve powder wholesale",
    "Ice cream machine repairs Lagos",
    "Commercial batch freezer Nigeria",
    "Gelato machine Nigeria",
    "Ice cream academy training school Nigeria",
    "Soft serve machine spare parts Lagos",
    "Oceanpower soft serve machine Nigeria",
    "Commercial double waffle cone maker Nigeria",
    "Triple bowl slush machine price in Nigeria",
    "Commercial kitchen utensils Lagos",
    "Start soft serve ice cream business Nigeria"
  ],
  authors: [{ name: "Cremier Dela", url: "https://cremierdela.com" }],
  creator: "Cremier Dela",
  publisher: "Cremier Dela",
  alternates: {
    canonical: "https://cremierdela.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "Cremier Dela | Commercial Ice Cream Machinery, Powders & Technical Repairs",
    description:
      "Commercial soft-serve freezers, batch freezers, premium powders (2.5kg to 25kg), genuine spare parts, and hands-on academy. Fast nationwide delivery across Nigeria. Call 08033159674 or 08039445604.",
    url: "https://cremierdela.com",
    siteName: "Cremier Dela",
    images: [
      {
        url: "/images/cremier-dela-commercial-soft-serve-ice-cream-machines-pair.jpg",
        width: 1200,
        height: 630,
        alt: "Cremier Dela Commercial Soft-Serve Ice Cream Machines and Powders Nigeria"
      }
    ],
    locale: "en_NG",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cremier Dela | Commercial Ice Cream Machinery & Premium Powders Nigeria",
    description:
      "High-output commercial ice cream freezers, signature powders, on-site repairs, and accredited training academy in Nigeria. Call 08033159674.",
    images: ["/images/cremier-dela-commercial-soft-serve-ice-cream-machines-pair.jpg"]
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png"
  },
  other: {
    "geo.region": "NG-LA",
    "geo.placename": "Lagos, Nigeria",
    "geo.position": "6.5244;3.3792",
    "ICBM": "6.5244, 3.3792"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://cremierdela.com/#organization",
        "name": "Cremier Dela",
        "alternateName": "Cremier Dela Nigeria",
        "url": "https://cremierdela.com",
        "logo": "https://cremierdela.com/images/logo.png",
        "image": "https://cremierdela.com/images/cremier-dela-commercial-soft-serve-ice-cream-machines-pair.jpg",
        "description": "Premier Nigerian supplier of commercial ice cream machines, artisanal gelato batch freezers, signature ice cream mix powders, on-site repairs, and certified culinary academy.",
        "telephone": ["+2348033159674", "+2348039445604"],
        "email": "cremierdela@gmail.com",
        "priceRange": "₦₦₦",
        "currenciesAccepted": "NGN",
        "paymentAccepted": "Cash, Bank Transfer",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressRegion": "Lagos State",
          "addressCountry": "NG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 6.5244,
          "longitude": 3.3792
        },
        "areaServed": [
          { "@type": "Country", "name": "Nigeria" },
          { "@type": "State", "name": "Lagos" },
          { "@type": "State", "name": "Abuja FCT" },
          { "@type": "State", "name": "Rivers" },
          { "@type": "State", "name": "Oyo" },
          { "@type": "State", "name": "Kano" },
          { "@type": "State", "name": "Delta" }
        ],
        "sameAs": [
          "https://www.tiktok.com/@cremier_dela",
          "https://www.instagram.com/cremierdela",
          "https://www.facebook.com/cremierdela"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Commercial Dessert Equipment & Supplies",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Commercial Ice Cream Machinery",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Commercial Soft-Serve Freezers (Pair)",
                    "description": "Countertop & Freestanding duo with dual compressors and independent hopper pre-cooling."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Oceanpower Floor Standing Soft Serve Machine",
                    "description": "Twin hopper 3-lever commercial soft-serve dispenser for high-traffic parlours."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Commercial Hard Ice Cream Batch Freezer",
                    "description": "High-torque industrial batch freezer for artisanal Italian gelato and hard scoop ice cream."
                  }
                }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Signature Soft-Serve Powders",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Cremier Dela Vanilla Soft-Serve Powder 2.5kg",
                    "description": "Rich velvety vanilla formulation yielding 80-90 portions per pouch."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Cremier Dela Strawberry Soft-Serve Powder 2.5kg",
                    "description": "Authentic fruit-note strawberry soft-serve mix for commercial dispensers."
                  }
                }
              ]
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
