import { CTASection } from "@/components/cta-section";
import { EventsSection } from "@/components/events-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { RunnersSection } from "@/components/runners-section";
import { ShopSection } from "@/components/shop-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <EventsSection />
      <FeaturesSection />
      <RunnersSection />
      <ShopSection />
      <TestimonialsSection />
      <CTASection />
      <Footer /> 
    </main>
  )
}
