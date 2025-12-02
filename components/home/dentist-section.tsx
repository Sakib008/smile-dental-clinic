"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Stethoscope } from "lucide-react"

export default function DentistSection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
            <div className="container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative z-10">
                            <Image
                                src="https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666455/generated-image_15_b90jvm.jpg"
                                alt="Dr. Sarah Smith - Lead Dentist"
                                width={500}
                                height={600}
                                className="rounded-[2rem] shadow-2xl object-cover"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl max-w-xs animate-float">
                                <p className="text-4xl font-bold text-royal mb-1">15+</p>
                                <p className="text-gray-600 dark:text-gray-300 font-medium">Years of Experience Creating Beautiful Smiles</p>
                            </div>
                        </div>

                        {/* Decorative Background */}
                        <div className="absolute top-10 -left-10 w-full h-full border-2 border-royal/20 rounded-[2rem] -z-10" />
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal/10 rounded-full blur-3xl -z-20" />
                    </motion.div>

                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <Badge className="bg-teal/10 text-teal hover:bg-teal/20 mb-4">Lead Dentist</Badge>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Meet Dr. Sarah Smith
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                                "My mission is to change the way people feel about dentistry. I believe in combining artistic precision with compassionate care to create smiles that change lives."
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-royal/10 rounded-xl text-royal">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Education</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">DDS, University of London<br />Honors Graduate</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-teal/10 rounded-xl text-teal">
                                    <Stethoscope className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Specialization</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Cosmetic Dentistry<br />Implantology</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 sm:col-span-2">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-xl text-purple-600 dark:text-purple-400">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Memberships</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">British Dental Association, Royal College of Surgeons, American Academy of Cosmetic Dentistry</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
