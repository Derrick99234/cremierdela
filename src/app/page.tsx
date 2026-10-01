import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PowdersSection from "@/components/PowdersSection";
import MachinerySection from "@/components/MachinerySection";
import UtensilsSection from "@/components/UtensilsSection";
import ServicesSection from "@/components/ServicesSection";
import AcademySection from "@/components/AcademySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />
      <Hero />
      <PowdersSection />
      <MachinerySection />
      <UtensilsSection />
      <ServicesSection />
      <AcademySection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
