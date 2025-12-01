"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Sparkles, Smile, Brush, Heart, Scissors, Shield, Baby, Check, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

export default function ServicesPage() {
  const services = [
    {
      icon: Stethoscope,
      title: "General Check-ups",
      description: "Comprehensive oral health examinations and preventive care",
      features: ["Oral health assessment", "X-rays when needed", "Cleaning", "Treatment planning"],
      price: "From £80",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Scissors,
      title: "Tooth Extractions",
      description: "Safe and comfortable tooth removal procedures",
      features: ["Simple extractions", "Surgical extractions", "Wisdom teeth removal", "Post-care guidance"],
      price: "From £120",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Smile,
      title: "Invisalign / Braces",
      description: "Straighten your teeth with modern orthodontic solutions",
      features: ["Invisalign clear aligners", "Traditional braces", "Consultation included", "Progress monitoring"],
      price: "From £2,500",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Sparkles,
      title: "Cosmetic Smile Design",
      description: "Transform your smile with our cosmetic treatments",
      features: ["Veneers", "Bonding", "Smile makeovers", "Digital smile preview"],
      price: "From £400",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Gentle dental care specially designed for children",
      features: ["Child-friendly environment", "Preventive treatments", "Fluoride applications", "Dental education"],
      price: "From £60",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Brush,
      title: "Professional Cleaning",
      description: "Deep cleaning and hygiene treatments",
      features: ["Scale and polish", "Stain removal", "Gum disease prevention", "Oral hygiene advice"],
      price: "From £70",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Sparkles,
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter smile",
      features: ["In-office whitening", "Take-home kits", "Custom trays", "Long-lasting results"],
      price: "From £300",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Heart,
      title: "Root Canal Treatment",
      description: "Save your natural teeth with gentle endodontic care",
      features: ["Pain-free procedures", "Advanced techniques", "Crown placement", "Follow-up care"],
      price: "From £400",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Shield,
      title: "Emergency Dental Care",
      description: "Urgent dental treatment when you need it most",
      features: ["Same-day appointments", "Pain relief", "Temporary repairs", "24/7 advice line"],
      price: "From £100",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-20">
        {/* 3D Background Elements */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-royal/20 to-teal/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-teal/20 to-royal/20 rounded-full blur-3xl opacity-50" />

        <div className="container px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Dental{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-teal">
                Services
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive dental care for you and your family, from routine check-ups to advanced treatments
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/book-appointment">Book Your Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <GlassCard className="h-full flex flex-col overflow-hidden group">
                  {/* Image with overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon overlay */}
                    <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-royal/90 to-teal/90 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Price badge */}
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-royal to-teal text-white border-0">
                      {service.price}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-royal group-hover:to-teal transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6 flex-grow">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-2 flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-royal text-royal hover:bg-gradient-to-r hover:from-royal hover:to-teal hover:text-white hover:border-transparent rounded-full transition-all duration-300"
                    >
                      <Link href="/book-appointment">Learn More</Link>
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Care Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Red gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl" />

        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="max-w-4xl mx-auto text-center border-2 border-white/20">
              <div className="p-12">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Dental Emergency?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Don't wait in pain. We offer same-day emergency appointments for urgent dental issues.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="h-14 px-8 text-lg bg-white text-red-600 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    onClick={() => window.open('https://wa.me/447012345678?text=Emergency%20Dental%20Care%20Needed', '_blank')}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Emergency WhatsApp
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-lg border-2 border-white text-white hover:bg-white/10 rounded-full hover:-translate-y-1 transition-all duration-300"
                  >
                    <Link href="/book-appointment">Book Emergency Appointment</Link>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal to-teal" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl" />

        <div className="container px-4 text-center relative z-10">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Dental Journey?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Book a consultation today and let us help you achieve optimal oral health
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-lg bg-white text-royal hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Link href="/book-appointment">Schedule Your Appointment</Link>
            </Button>
            <Button
              size="lg"
              className="h-14 px-8 text-lg border-2 border-white text-white hover:bg-white/10 rounded-full hover:-translate-y-1 transition-all duration-300"
              onClick={() => window.open('https://wa.me/447012345678', '_blank')}
            >
              <Phone className="h-5 w-5 mr-2" />
              WhatsApp Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
