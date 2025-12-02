"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666364/pexels-pavel-danilyuk-7108318_jccdas.jpg",
      title: "Modern Reception Area",
      description: "Welcoming and comfortable waiting area for all our patients",
      category: "Facility",
    },
    {
      src: "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666366/benyamin-bohlouli-e7MJLM5VGjY-unsplash_vpkl6p.jpg",
      title: "State-of-the-Art Treatment Room",
      description: "Equipped with the latest dental technology for optimal care",
      category: "Facility",
    },
    {
      src: "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666362/benyamin-bohlouli-e7MJLM5VGjY-unsplash_1_i86yha.jpg",
      title: "Digital X-Ray Equipment",
      description: "Advanced imaging technology for accurate diagnosis",
      category: "Technology",
    },
    {
      src: "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666365/pexels-sir-lodi-82542846-12429147_amgcb7.jpg",
      title: "Sterilization Center",
      description: "Maintaining the highest standards of hygiene and safety",
      category: "Facility",
    },
    {
      src: "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666359/pexels-avspictures-16972728_dgeawk.jpg",
      title: "Children's Play Area",
      description: "Making dental visits fun and comfortable for young patients",
      category: "Facility",
    },
    {
      src: "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666357/pexels-olly-3884103_vmunr1.jpg",
      title: "Dr. Smith with Patient",
      description: "Providing gentle, personalized care to every patient",
      category: "Team",
    },
    {
      src: "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666361/pexels-shvetsa-3845843_dl7oyi.jpg",
      title: "Teeth Whitening Results",
      description: "Before and after professional whitening treatment",
      category: "Results",
    },
    {
      src: "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666353/pexels-olly-3946834_xo7kqs.jpg",
      title: "Smile Makeover Transformation",
      description: "Complete cosmetic dentistry transformation",
      category: "Results",
    },
    {
      src: "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666359/pexels-olly-3881290_lwgsyw.jpg",
      title: "Invisalign Progress",
      description: "Straightening teeth with clear aligners",
      category: "Results",
    },
    {
      src: "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666363/pexels-rdne-6129499_z9pnu6.jpg",
      title: "Team Meeting",
      description: "Our dedicated team planning patient care",
      category: "Team",
    },
    {
      src: "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666362/pexels-shvets-production-8413387_gtzosr.jpg",
      title: "Consultation Room",
      description: "Private space for treatment planning and discussions",
      category: "Facility",
    },
    {
      src: "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666361/pexels-shvetsa-3845807_w2flio.jpg",
      title: "Dental Implant Success",
      description: "Natural-looking results with dental implants",
      category: "Results",
    },
  ]

  const categories = ["All", "Facility", "Technology", "Team", "Results"]

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
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-teal">
                Gallery
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Take a look inside our modern clinic and see the results we achieve for our patients
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <GlassCard className="overflow-hidden group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-royal to-teal text-white border-0 transition-transform duration-300 group-hover:scale-110">
                      {image.category}
                    </Badge>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                      <p className="text-white/90 text-sm">{image.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4 text-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Want to See More?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Schedule a visit to tour our facilities in person and meet our friendly team. We'd love to show you around
            and answer any questions you may have.
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
              className="h-14 px-8 text-lg bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <a href="/book-appointment">Schedule a Tour</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-2 border-royal text-royal hover:bg-royal/5 rounded-full hover:-translate-y-1 transition-all duration-300"
              onClick={() => window.open('https://wa.me/447012345678', '_blank')}
            >
              WhatsApp Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal to-teal" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl" />

        <div className="container px-4 text-center relative z-10">
          <motion.blockquote
            className="text-2xl lg:text-3xl font-light italic mb-6 max-w-4xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            "The moment I walked into SmileBright Dental, I felt at ease. The modern facilities and warm atmosphere made
            my dental visit actually enjoyable!"
          </motion.blockquote>
          <motion.p
            className="text-lg text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            - Sarah M., Patient since 2019
          </motion.p>
        </div>
      </section>
    </div>
  )
}
