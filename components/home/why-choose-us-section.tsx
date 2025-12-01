"use client"

import { Award, Shield, Clock, CreditCard, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

export default function WhyChooseUsSection() {
    const benefits = [
        {
            icon: Award,
            title: "15+ Years Experience",
            description: "Trusted expertise serving the London community with excellence.",
            stats: "15k+ Patients"
        },
        {
            icon: Shield,
            title: "Pain-Free Care",
            description: "Advanced techniques for comfortable, anxiety-free treatments.",
            stats: "100% Comfort"
        },
        {
            icon: Clock,
            title: "Emergency Care",
            description: "Same-day appointments available when you need us most.",
            stats: "24/7 Support"
        },
        {
            icon: CreditCard,
            title: "Flexible Payments",
            description: "0% finance options and insurance partnerships available.",
            stats: "Affordable"
        },
    ]

    return (
        <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-royal/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Why Patients Choose <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-teal">SmileBright Dental</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            We believe in a patient-first approach. From our modern facility to our experienced team, everything is designed around your comfort and care.
                        </p>

                        <div className="space-y-4">
                            {[
                                "State-of-the-art technology",
                                "Comfortable, relaxing environment",
                                "Transparent pricing with no hidden fees",
                                "Personalized treatment plans"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center space-x-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <CheckCircle2 className="w-6 h-6 text-teal" />
                                    <span className="text-lg text-gray-700 dark:text-gray-300">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard className="h-full hover:border-royal/30 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal/10 to-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <benefit.icon className="w-6 h-6 text-royal" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{benefit.description}</p>
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                                        <span className="text-sm font-semibold text-teal">{benefit.stats}</span>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
