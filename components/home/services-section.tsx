"use client"

import {
    Stethoscope,
    Sparkles,
    Smile,
    Brush,
    Heart,
    Users,
    ArrowRight
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function ServicesSection() {
    const services = [
        {
            icon: Stethoscope,
            title: "General Dentistry",
            description: "Comprehensive oral health care including check-ups, fillings, and preventative treatments.",
            className: "md:col-span-2"
        },
        {
            icon: Sparkles,
            title: "Teeth Whitening",
            description: "Professional whitening treatments for a brighter, more confident smile.",
            className: "md:col-span-1"
        },
        {
            icon: Smile,
            title: "Cosmetic Dentistry",
            description: "Transform your smile with veneers, bonding, and complete makeovers.",
            className: "md:col-span-1"
        },
        {
            icon: Brush,
            title: "Dental Cleaning",
            description: "Professional cleaning & hygiene to keep your gums healthy and teeth strong.",
            className: "md:col-span-2"
        },
        {
            icon: Heart,
            title: "Root Canal",
            description: "Pain-free endodontic care using the latest technology.",
            className: "md:col-span-1"
        },
        {
            icon: Users,
            title: "Family Care",
            description: "Gentle and patient-focused care for family members of all ages.",
            className: "md:col-span-2"
        },
    ]

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Dental Services
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Comprehensive dental care designed for your comfort and long-term health.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700",
                                service.className
                            )}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                                <service.icon className="w-32 h-32 text-royal" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal/10 to-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-7 h-7 text-royal" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                                </div>

                                <div className="mt-8 flex items-center text-royal font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
