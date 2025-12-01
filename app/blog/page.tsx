"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "what-to-expect-first-visit",
      title: "What to Expect in Your First Visit",
      excerpt:
        "Nervous about your first dental appointment? Here's a complete guide to what happens during your initial consultation and examination.",
      image: "/placeholder.svg?height=300&width=400",
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
      image: "/placeholder.svg?height=300&width=400",
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
      image: "/placeholder.svg?height=300&width=400",
      date: "March 5, 2024",
      author: "Dr. Michael Johnson",
      category: "Nutrition",
      readTime: "6 min read",
    },
    {
      slug: "benefits-regular-checkups",
      title: "The Benefits of Regular Dental Check-ups",
      excerpt:
        "Why preventive care is crucial for your oral health and how regular visits can save you time, money, and discomfort in the long run.",
      image: "/placeholder.svg?height=300&width=400",
      date: "February 28, 2024",
      author: "Dr. Sarah Smith",
      category: "Preventive Care",
      readTime: "5 min read",
    },
    {
      slug: "understanding-dental-anxiety",
      title: "Understanding Dental Anxiety",
      excerpt:
        "Tips and techniques to help you overcome dental anxiety and feel more comfortable during your dental appointments.",
      image: "/placeholder.svg?height=300&width=400",
      date: "February 20, 2024",
      author: "Emma Wilson",
      category: "Patient Care",
      readTime: "7 min read",
    },
    {
      slug: "invisalign-vs-braces",
      title: "Invisalign vs Traditional Braces",
      excerpt:
        "Comparing modern clear aligners with traditional metal braces to help you choose the best orthodontic treatment for your needs.",
      image: "/placeholder.svg?height=300&width=400",
      date: "February 15, 2024",
      author: "Dr. Michael Johnson",
      category: "Orthodontics",
      readTime: "8 min read",
    },
    {
      slug: "childrens-dental-health",
      title: "Children's Dental Health: A Parent's Guide",
      excerpt:
        "Essential tips for maintaining your child's oral health, from first teeth to teenage years. Learn when to start dental visits.",
      image: "/placeholder.svg?height=300&width=400",
      date: "February 10, 2024",
      author: "Dr. Sarah Smith",
      category: "Pediatric Dentistry",
      readTime: "6 min read",
    },
    {
      slug: "truth-about-whitening",
      title: "The Truth About Teeth Whitening",
      excerpt:
        "Separating fact from fiction about teeth whitening treatments. What works, what doesn't, and what's safe for your teeth.",
      image: "/placeholder.svg?height=300&width=400",
      date: "February 5, 2024",
      author: "Lisa Thompson",
      category: "Cosmetic Dentistry",
      readTime: "5 min read",
    },
    {
      slug: "emergency-dental-care",
      title: "Emergency Dental Care: When to Seek Help",
      excerpt:
        "Learn to identify dental emergencies and understand when you need immediate professional care versus when you can wait.",
      image: "/placeholder.svg?height=300&width=400",
      date: "January 30, 2024",
      author: "Dr. Sarah Smith",
      category: "Emergency Care",
      readTime: "4 min read",
    },
  ]

  const categories = [
    "All",
    "Patient Care",
    "Oral Hygiene",
    "Nutrition",
    "Preventive Care",
    "Orthodontics",
    "Pediatric Dentistry",
    "Cosmetic Dentistry",
    "Emergency Care",
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
              Dental Health{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-teal">
                Blog
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Expert advice, tips, and insights from our dental professionals to help you maintain optimal oral health
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-royal to-teal text-white border-0">
                Featured Article
              </Badge>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link href={`/blog/${blogPosts[0].slug}`}>
                <GlassCard className="overflow-hidden cursor-pointer" hoverEffect>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={blogPosts[0].image || "/placeholder.svg"}
                        alt={blogPosts[0].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <Badge
                        variant="secondary"
                        className="w-fit mb-3 bg-gradient-to-r from-royal/10 to-teal/10 text-royal border-royal/20"
                      >
                        {blogPosts[0].category}
                      </Badge>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{blogPosts[0].title}</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                        <User className="h-4 w-4 mr-2" />
                        <span className="mr-4">{blogPosts[0].author}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="mr-4">{blogPosts[0].date}</span>
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                      <Button className="w-fit bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge
                  variant={index === 0 ? "default" : "secondary"}
                  className={`cursor-pointer px-4 py-2 transition-all duration-300 ${index === 0
                    ? "bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white border-0"
                    : "hover:bg-gradient-to-r hover:from-royal/10 hover:to-teal/10 hover:text-royal hover:border-royal/20"
                    }`}
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <GlassCard className="h-full flex flex-col overflow-hidden group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-royal to-teal text-white border-0">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-royal group-hover:to-teal transition-all duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-royal text-royal hover:bg-gradient-to-r hover:from-royal hover:to-teal hover:text-white hover:border-transparent rounded-full transition-all duration-300"
                        >
                          Read More
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
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
            Stay Updated with Dental Health Tips
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Subscribe to our newsletter and receive monthly dental care tips, latest blog posts, and exclusive offers.
          </motion.p>
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 bg-white/90 backdrop-blur-sm border-2 border-white/20 focus:outline-none focus:border-white transition-all"
              />
              <Button
                size="lg"
                className="px-8 bg-white text-royal hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/75 mt-4">No spam, unsubscribe at any time</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
