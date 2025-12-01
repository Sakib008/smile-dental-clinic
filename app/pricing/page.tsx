"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Shield, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

export default function PricingPage() {
  const services = [
    { name: "Consultation & Examination", price: "£80" },
    { name: "Professional Cleaning", price: "£70" },
    { name: "Teeth Whitening (In-office)", price: "£300" },
    { name: "Composite Filling", price: "£120" },
    { name: "Root Canal Treatment", price: "£400" },
    { name: "Tooth Extraction (Simple)", price: "£120" },
    { name: "Tooth Extraction (Surgical)", price: "£200" },
    { name: "Crown (Porcelain)", price: "£600" },
    { name: "Dental Implant", price: "£2,000" },
    { name: "Invisalign Treatment", price: "£2,500" },
    { name: "Emergency Consultation", price: "£100" },
    { name: "Children's Check-up", price: "£60" },
  ]

  const insuranceProviders = ["Bupa", "AXA PPP", "Aviva", "Vitality", "Simply Health", "Denplan"]

  const savingsPlanFeatures = [
    "20% discount on all treatments",
    "Free routine check-ups (2 per year)",
    "Free professional cleaning (2 per year)",
    "Priority booking",
    "Emergency call-out service",
    "No waiting periods",
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-teal">
                Transparent
              </span>{" "}
              Pricing
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Quality dental care shouldn't break the bank. See our clear, upfront pricing with no hidden fees.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Treatment Prices
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              All prices are starting from and may vary based on individual needs
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center p-6 hover:bg-gradient-to-r hover:from-royal/5 hover:to-teal/5 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-gray-900 dark:text-white font-medium">{service.name}</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-teal font-bold text-lg">
                        {service.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 dark:text-gray-400 mb-4">Need a detailed quote for your specific treatment?</p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/book-appointment">Book Free Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Insurance & Payment Options
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We work with major insurance providers and offer flexible payment solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Insurance Providers */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full" hoverEffect>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal/20 to-teal/20 flex items-center justify-center mr-4">
                      <Shield className="h-7 w-7 text-royal" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Accepted Insurance</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {insuranceProviders.map((provider, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{provider}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
                    Don't see your provider? Contact us to check if we can accept your insurance.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Payment Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full" hoverEffect>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal/20 to-royal/20 flex items-center justify-center mr-4">
                      <CreditCard className="h-7 w-7 text-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Methods</h3>
                  </div>
                  <div className="space-y-3">
                    {["Cash & Card Payments", "Interest-Free Payment Plans", "0% Finance Available", "Direct Debit Options"].map((method, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{method}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
                    Spread the cost of your treatment with our flexible payment options.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SmileBright Savings Plan */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="relative overflow-hidden border-2 border-royal/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-royal/10 to-teal/10 rounded-full blur-3xl" />
                <div className="relative z-10 p-8 md:p-12">
                  <div className="text-center mb-8">
                    <Badge className="mb-4 bg-gradient-to-r from-royal to-teal text-white border-0">
                      Popular Choice
                    </Badge>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      SmileBright Savings Plan
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our membership plan designed to make dental care more affordable
                    </p>
                    <div className="mt-6">
                      <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-royal to-teal">
                        £25
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-xl">/month</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Plan Benefits:</h4>
                      <div className="space-y-3">
                        {savingsPlanFeatures.map((feature, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0">
                              <Check className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <GlassCard className="bg-white/50 dark:bg-gray-800/50">
                        <div className="p-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Annual Savings:</h4>
                          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
                            Up to £400
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Based on average family dental needs
                          </p>
                        </div>
                      </GlassCard>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <Link href="/book-appointment">Join Savings Plan</Link>
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
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
            Questions About Pricing?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our team is happy to discuss treatment options and payment plans that work for you
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
              <Link href="/book-appointment">Book Free Consultation</Link>
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
