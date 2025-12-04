"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, Star, ShieldCheck, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-20">
      {/* Abstract 3D Background Elements */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-br from-royal/20 to-teal/20 rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-teal/20 to-royal/20 rounded-full blur-3xl opacity-50" />

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-white/80 dark:bg-white/10 backdrop-blur-sm text-royal border-royal/20 px-4 py-2 text-sm font-medium shadow-sm mb-4">
                <Sparkles className="w-4 h-4 mr-2 fill-royal" />
                #1 Rated Dental Clinic in Delhi
              </Badge>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              Smile with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-teal">Confidence</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              Experience world-class dental care with a gentle touch. We combine advanced technology with personalized treatments for your perfect smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Link href="/book-appointment">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg border-2 border-royal text-royal hover:bg-royal/5 rounded-full hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.open('https://wa.me/919612345678', '_blank')}
              >
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Now
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 text-sm font-medium text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-teal/10 rounded-full text-teal">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                Certified Experts
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-royal/10 rounded-full text-royal">
                  <Star className="w-5 h-5" />
                </div>
                5-Star Reviews
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 animate-float">
              <Image
                src="/images/jonathan-borba-hl6uG9cHW5A-unsplash.jpg"
                alt="Friendly dentist with patient"
                width={600}
                height={700}
                className="rounded-[2rem] shadow-2xl object-cover h-[600px] w-full"
                priority
              />

              {/* Floating Glass Cards */}
              <GlassCard className="absolute -left-8 top-20 w-48 animate-float [animation-delay:1s]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Success Rate</p>
                    <p className="font-bold text-gray-900">99.9%</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="absolute -right-8 bottom-32 w-48 animate-float [animation-delay:2s]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <Star className="w-6 h-6 fill-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Happy Patients</p>
                    <p className="font-bold text-gray-900">5,000+</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Decorative circle behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-200 dark:border-gray-800 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-gray-100 dark:border-gray-900 rounded-full -z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
