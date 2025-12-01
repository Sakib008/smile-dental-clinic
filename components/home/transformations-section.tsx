"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { ArrowLeftRight } from "lucide-react"

export default function TransformationsSection() {
    const [sliderValue, setSliderValue] = useState(50)

    const transformations = [
        {
            id: 1,
            title: "Smile Makeover",
            description: "Complete smile restoration with veneers and whitening.",
            before: "/placeholder.jpg",
            after: "/placeholder.jpg"
        },
        {
            id: 2,
            title: "Invisalign Treatment",
            description: "12-month alignment correction.",
            before: "/placeholder.jpg",
            after: "/placeholder.jpg"
        },
        {
            id: 3,
            title: "Dental Implants",
            description: "Full arch restoration.",
            before: "/placeholder.jpg",
            after: "/placeholder.jpg"
        }
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
                        Real Transformations
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        See the life-changing results we achieve for our patients.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {transformations.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 rounded-2xl">
                                <CardContent className="p-0 relative group">
                                    <div className="relative h-80 w-full overflow-hidden">
                                        {/* After Image (Background) */}
                                        <Image
                                            src={item.after}
                                            alt={`After ${item.title}`}
                                            fill
                                            className="object-cover"
                                        />

                                        {/* Before Image (Foreground with clip-path) */}
                                        <div
                                            className="absolute top-0 left-0 h-full w-full overflow-hidden"
                                            style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                                        >
                                            <Image
                                                src={item.before}
                                                alt={`Before ${item.title}`}
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Label */}
                                            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                                Before
                                            </div>
                                        </div>

                                        {/* After Label */}
                                        <div className="absolute top-4 right-4 bg-royal/80 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                            After
                                        </div>

                                        {/* Slider Handle Line */}
                                        <div
                                            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
                                            style={{ left: `${sliderValue}%` }}
                                        >
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-royal">
                                                <ArrowLeftRight className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Invisible Slider Input for Interaction */}
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={sliderValue}
                                            onChange={(e) => setSliderValue(Number(e.target.value))}
                                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
