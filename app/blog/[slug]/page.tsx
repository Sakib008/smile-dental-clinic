"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Clock, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { notFound } from "next/navigation"

// Blog posts data
const blogPosts = [
    {
        slug: "what-to-expect-first-visit",
        title: "What to Expect in Your First Visit",
        excerpt:
            "Nervous about your first dental appointment? Here's a complete guide to what happens during your initial consultation and examination.",
        content: `
# What to Expect in Your First Visit

Starting your journey with a new dental practice can feel overwhelming, but knowing what to expect can help ease any anxiety. At SmileBright Dental, we've designed our first visit experience to be welcoming, thorough, and stress-free.

## Before Your Appointment

When you book your first appointment, our friendly staff will ask you some basic questions about your dental history and any current concerns. We'll also send you some forms to fill out beforehand, which you can complete online to save time.

## Arriving at the Clinic

When you arrive, you'll be greeted by our reception team in our modern, comfortable waiting area. We recommend arriving 10-15 minutes early for your first visit to complete any remaining paperwork.

## The Initial Consultation

Your first visit typically includes:

### 1. Medical History Review
We'll discuss your overall health, any medications you're taking, and previous dental experiences. This helps us provide the safest and most effective care.

### 2. Comprehensive Examination
Our dentist will carefully examine your teeth, gums, and mouth. We use the latest technology to ensure nothing is missed.

### 3. X-rays (if needed)
Digital X-rays help us see what's happening beneath the surface. They're quick, comfortable, and use minimal radiation.

### 4. Discussion and Treatment Plan
We'll explain our findings in clear, easy-to-understand terms and work with you to create a personalized treatment plan.

## What Makes Us Different

At SmileBright Dental, we believe in:
- **Gentle Care**: We take our time and ensure you're comfortable throughout
- **Clear Communication**: No dental jargon - we explain everything in plain English
- **Modern Technology**: State-of-the-art equipment for accurate diagnosis
- **Flexible Scheduling**: We work around your busy life

## After Your First Visit

You'll leave with a clear understanding of your oral health and any recommended treatments. We'll also schedule any follow-up appointments and answer all your questions.

Ready to experience the SmileBright difference? Book your first visit today!
    `,
        image: "/placeholder.svg?height=600&width=1200",
        date: "March 15, 2024",
        author: "Dr. Sarah Smith",
        category: "Patient Care",
        readTime: "5 min read",
    },
    {
        slug: "maintain-whiter-smile",
        title: "How to Maintain a Whiter Smile",
        excerpt:
            "Professional tips and tricks to keep your teeth bright and white between dental visits. Learn about foods, habits, and products that help.",
        content: `
# How to Maintain a Whiter Smile

A bright, white smile can boost your confidence and make a great first impression. While professional whitening treatments deliver excellent results, maintaining that brightness requires consistent care and smart choices.

## Daily Habits for Whiter Teeth

### 1. Brush Properly
- Brush twice daily for 2 minutes each time
- Use a soft-bristled toothbrush
- Consider an electric toothbrush for better results
- Don't forget to brush your tongue!

### 2. Floss Daily
Flossing removes plaque and food particles between teeth where staining can occur.

### 3. Use Whitening Toothpaste
Choose a toothpaste with the ADA Seal of Acceptance for safe, effective whitening.

## Foods That Help Keep Teeth White

Some foods naturally help clean and whiten teeth:
- **Crunchy fruits and vegetables**: Apples, carrots, and celery
- **Dairy products**: Cheese and yogurt strengthen enamel
- **Strawberries**: Natural malic acid helps remove stains
- **Water**: Rinses away food particles and bacteria

## Foods and Drinks to Limit

Certain items can stain teeth over time:
- Coffee and tea
- Red wine
- Dark sodas
- Berries
- Tomato sauce
- Curry and turmeric

**Pro Tip**: If you do consume these, rinse with water afterward or use a straw for beverages.

## Professional Maintenance

Visit SmileBright Dental every 6 months for:
- Professional cleaning to remove surface stains
- Polishing to restore natural shine
- Touch-up whitening treatments if needed

## At-Home Whitening Products

We offer professional-grade take-home whitening kits that are:
- Custom-fitted to your teeth
- Safer than over-the-counter options
- More effective with longer-lasting results

Ready to brighten your smile? Contact us today!
    `,
        image: "/placeholder.svg?height=600&width=1200",
        date: "March 10, 2024",
        author: "Lisa Thompson",
        category: "Oral Hygiene",
        readTime: "4 min read",
    },
    {
        slug: "foods-damage-teeth",
        title: "Foods That Damage Your Teeth",
        excerpt:
            "Discover which common foods and drinks can harm your dental health and learn about healthier alternatives for your smile.",
        content: `
# Foods That Damage Your Teeth

Your diet plays a crucial role in your oral health. While some foods strengthen teeth, others can cause significant damage over time. Understanding which foods to limit can help you maintain a healthy, beautiful smile.

## The Worst Offenders

### 1. Sugary Snacks and Candy
Sugar feeds harmful bacteria in your mouth, producing acid that erodes enamel.
- **Worst**: Sticky candies, gummies, caramels
- **Why**: They cling to teeth for extended periods

### 2. Acidic Foods and Drinks
Acid directly weakens tooth enamel.
- Citrus fruits and juices
- Sodas (even diet versions)
- Sports and energy drinks
- Pickled foods

### 3. Starchy Foods
Starches break down into sugars in your mouth.
- White bread
- Potato chips
- Pasta

### 4. Hard Foods
These can crack or chip teeth.
- Ice
- Hard candies
- Popcorn kernels
- Nutshells

## Smart Substitutions

Instead of damaging foods, try these tooth-friendly alternatives:

| Instead of... | Try... |
|--------------|--------|
| Soda | Water with lemon |
| Candy | Fresh fruit |
| Chips | Nuts or cheese |
| Sports drinks | Coconut water |

## Timing Matters

When you eat is almost as important as what you eat:
- Eat sweets with meals, not as snacks
- Rinse with water after acidic foods
- Wait 30 minutes after eating before brushing
- Chew sugar-free gum after meals

## Foods That Protect Your Teeth

Build your diet around these tooth-friendly options:
- **Calcium-rich foods**: Milk, cheese, yogurt
- **Crunchy vegetables**: Carrots, celery, broccoli
- **Lean proteins**: Chicken, fish, eggs
- **Nuts and seeds**: Almonds, sesame seeds

## Professional Guidance

At SmileBright Dental, we provide personalized nutritional counseling to help you make choices that support your oral health. Schedule a consultation today!
    `,
        image: "/placeholder.svg?height=600&width=1200",
        date: "March 5, 2024",
        author: "Dr. Michael Johnson",
        category: "Nutrition",
        readTime: "6 min read",
    },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug)

    if (!post) {
        notFound()
    }

    // Get related posts (excluding current post)
    const relatedPosts = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 3)

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-20">
                {/* 3D Background Elements */}
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-royal/20 to-teal/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-teal/20 to-royal/20 rounded-full blur-3xl opacity-50" />

                <div className="container px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-royal hover:text-teal transition-colors mb-6"
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Blog
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Badge className="mb-4 bg-gradient-to-r from-royal to-teal text-white border-0">
                                {post.category}
                            </Badge>
                        </motion.div>

                        <motion.h1
                            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div
                            className="flex items-center gap-6 text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="flex items-center">
                                <User className="h-4 w-4 mr-2" />
                                {post.author}
                            </div>
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                {post.date}
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                {post.readTime}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="py-12 bg-white dark:bg-gray-900">
                <div className="container px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="relative h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12 bg-white dark:bg-gray-900">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <GlassCard>
                                <div className="p-8 md:p-12">
                                    <div className="prose prose-lg dark:prose-invert max-w-none">
                                        <div
                                            className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
                                        />
                                    </div>

                                    {/* Share Section */}
                                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Share this article</h3>
                                            <Button
                                                variant="outline"
                                                className="border-royal text-royal hover:bg-royal/5 rounded-full"
                                            >
                                                <Share2 className="h-4 w-4 mr-2" />
                                                Share
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-20 bg-gray-50 dark:bg-gray-950">
                    <div className="container px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                                Related Articles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedPosts.map((relatedPost, index) => (
                                    <motion.div
                                        key={relatedPost.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link href={`/blog/${relatedPost.slug}`}>
                                            <GlassCard className="h-full hover:shadow-xl transition-shadow cursor-pointer">
                                                <div className="relative h-48">
                                                    <Image
                                                        src={relatedPost.image}
                                                        alt={relatedPost.title}
                                                        fill
                                                        className="object-cover rounded-t-xl"
                                                    />
                                                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-royal to-teal text-white border-0">
                                                        {relatedPost.category}
                                                    </Badge>
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                                        {relatedPost.title}
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                                                        {relatedPost.excerpt}
                                                    </p>
                                                </div>
                                            </GlassCard>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-royal to-teal" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />

                <div className="container px-4 text-center relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Ready to Improve Your Oral Health?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Book a consultation with our expert team today
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="h-14 px-8 text-lg bg-white text-royal hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <Link href="/book-appointment">Schedule Your Appointment</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
