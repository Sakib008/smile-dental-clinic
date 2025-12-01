import HeroSection from "@/components/home/hero-section"
import ServicesSection from "@/components/home/services-section"
import WhyChooseUsSection from "@/components/home/why-choose-us-section"
import TransformationsSection from "@/components/home/transformations-section"
import DentistSection from "@/components/home/dentist-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import LocationSection from "@/components/home/location-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TransformationsSection />
      <DentistSection />
      <TestimonialsSection />
      <LocationSection />
    </div>
  )
}

