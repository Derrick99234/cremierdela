import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cremierdela.com"),
  title: "Cremier Dela | Ice Cream Machines, Powders, Utensils, Repairs & Training Academy",
  description:
    "Official website of Cremier Dela. Sales of commercial ice cream machines, premium ice cream powders (Vanilla, Strawberry, Banana & more), kitchen utensils, professional repairs & installations, and accredited training school.",
  keywords: [
    "Cremier Dela",
    "Ice cream machines Nigeria",
    "Ice cream powder supplier",
    "Vanilla ice cream powder 2.5kg",
    "Strawberry ice cream powder",
    "Soft serve machine repairs",
    "Ice cream making training school",
    "Commercial kitchen utensils Nigeria"
  ],
  authors: [{ name: "Cremier Dela" }],
  openGraph: {
    title: "Cremier Dela | Everything for Your Ice Cream Business",
    description:
      "Machines, Powders, Kitchen Utensils, Repairs, and Certified Training Academy. Call 08033159674 or 08039445604.",
    url: "https://cremierdela.com",
    siteName: "Cremier Dela",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Cremier Dela Logo"
      }
    ],
    locale: "en_NG",
    type: "website"
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
