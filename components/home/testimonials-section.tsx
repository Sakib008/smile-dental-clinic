"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Mitchell",
            role: "Smile Makeover Patient",
            text: "I used to be afraid of smiling, but Dr. Smith changed my life. The veneers look so natural, and the process was completely painless. I can't stop smiling now!",
            rating: 5,
            image: "/placeholder-user.jpg"
        },
        {
            name: "James Lewis",
            role: "Implant Patient",
            text: "The level of technology and care at SmileBright is unmatched. My implant procedure was smooth, and the results are incredible. It feels just like my natural tooth.",
            rating: 5,
            image: "/placeholder-user.jpg"
        },
        {
            name: "Emma Roberts",
            role: "Family Care",
            text: "Finding a dentist my kids actually like was impossible until we found SmileBright. The team is so patient and kind. We actually look forward to our check-ups!",
            rating: 5,
            image: "/placeholder-user.jpg"
        },
    ]

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            <div className="container px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Patient Stories
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Don't just take our word for it. Hear from our happy patients.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Quote className="w-24 h-24 text-royal" />
                                </div>

                                <CardContent className="p-8 flex flex-col h-full relative z-10">
                                    <div className="flex mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 mb-8 flex-grow leading-relaxed italic">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="flex items-center space-x-4">
                                        <Avatar className="h-12 w-12 border-2 border-royal/20">
                                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                                            <p className="text-sm text-royal font-medium">{testimonial.role}</p>
                                        </div>
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
