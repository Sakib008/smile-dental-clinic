"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Calendar, Clock, Mail } from "lucide-react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

// Dynamically import GoogleMap to avoid SSR issues
const GoogleMap = dynamic(() => import("@/components/google-map"), {
    ssr: false,
    loading: () => (
        <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl h-full w-full flex items-center justify-center animate-pulse">
            <p className="text-gray-500 dark:text-gray-400">Loading map...</p>
        </div>
    ),
})

export default function LocationSection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 dark:bg-gray-900 -z-10 rounded-l-[4rem]" />

            <div className="container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">Visit Our Clinic</h2>

                        <div className="space-y-8">
                            <GlassCard className="border-l-4 border-l-royal">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-royal/10 rounded-xl text-royal">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Our Location</h3>
                                        <p className="text-gray-600 dark:text-gray-400">123 Kailash Hills, East of Kailash, Delhi</p>
                                        <p className="text-sm text-royal mt-2 font-medium cursor-pointer hover:underline">Get Directions</p>
                                    </div>
                                </div>
                            </GlassCard>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <GlassCard className="border-l-4 border-l-teal">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-teal/10 rounded-xl text-teal">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Contact Us</h3>
                                            <p className="text-gray-600 dark:text-gray-400">+91 96123 45678</p>
                                            <p className="text-sm text-gray-500 mt-1">info@smilebright.co.in</p>
                                        </div>
                                    </div>
                                </GlassCard>

                                <GlassCard className="border-l-4 border-l-purple-500">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-xl text-purple-600 dark:text-purple-400">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Opening Hours</h3>
                                            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                                <div className="flex justify-between gap-4">
                                                    <span>Mon - Fri:</span>
                                                    <span className="font-medium">9am - 6pm</span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span>Saturday:</span>
                                                    <span className="font-medium">9am - 4pm</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </div>
                        </div>

                        <Button asChild size="lg" className="mt-10 w-full sm:w-auto bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 h-14 text-lg">
                            <Link href="/book-appointment">
                                <Calendar className="h-5 w-5 mr-2" />
                                Book Your Visit
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        className="h-[500px] w-full relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white dark:border-gray-700">
                            <GoogleMap
                                lat={51.5074}
                                lng={-0.1278}
                                zoom={15}
                            />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal rounded-full opacity-20 blur-xl" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-royal rounded-full opacity-20 blur-xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
