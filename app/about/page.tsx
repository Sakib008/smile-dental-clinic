"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Smith",
      role: "Lead Dentist & Founder",
      image:
        "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666455/generated-image_15_b90jvm.jpg",
      bio: "15+ years experience in general and cosmetic dentistry",
    },
    {
      name: "Dr. Michael Johnson",
      role: "Associate Dentist",
      image:
        "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666369/pexels-rdne-6129573_ao80kx.jpg",
      bio: "Specialist in pediatric and family dentistry",
    },
    {
      name: "Lisa Thompson",
      role: "Dental Hygienist",
      image:
        "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666370/pexels-pavel-danilyuk-5998467_m1w0iy.jpg",
      bio: "Certified hygienist with 10 years experience",
    },
    {
      name: "Emma Wilson",
      role: "Practice Manager",
      image:
        "https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666368/pexels-shkrabaanthony-5215024_luyyeg.jpg",
      bio: "Ensuring smooth operations and patient care",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with kindness and understanding",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards of dental care",
    },
    {
      icon: Users,
      title: "Family-Focused",
      description: "Creating a welcoming environment for all ages",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Your health and safety are our top priorities",
    },
  ];

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
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-teal">
                SmileBright Dental
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Dedicated to providing exceptional dental care with a personal
              touch since 2008
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  SmileBright Dental was founded in 2008 with a simple mission:
                  to make quality dental care accessible and stress-free for
                  everyone in our London community.
                </p>
                <p>
                  What started as a small practice has grown into a trusted
                  dental home for hundreds of families, but we've never lost
                  sight of our core values of compassionate care and clinical
                  excellence.
                </p>
                <p>
                  Our team combines years of experience with the latest dental
                  technology to ensure you receive the best possible care in a
                  comfortable, welcoming environment.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10">
                <Image
                  src="https://res.cloudinary.com/de0bt7qfe/image/upload/v1764666313/generated-image_10_vypkcj.jpg"
                  alt="SmileBright Dental clinic interior"
                  width={500}
                  height={400}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-royal/20 rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="h-full" hoverEffect>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal/20 to-teal/20 flex items-center justify-center mb-6">
                    <Award className="w-7 h-7 text-royal" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    To make quality dental care accessible & stress-free for
                    every patient, providing comprehensive treatments in a
                    comfortable, caring environment.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="h-full" hoverEffect>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal/20 to-royal/20 flex items-center justify-center mb-6">
                    <Heart className="w-7 h-7 text-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Smile with confidence, every day. We envision a community
                    where everyone has access to excellent dental care and the
                    confidence that comes with a healthy smile.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              The principles that guide everything we do
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-royal/10 to-teal/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-royal" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Experienced professionals dedicated to your oral health
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <GlassCard className="text-center h-full">
                  <div className="p-6">
                    <div className="relative mb-6 inline-block">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto border-4 border-white/50 dark:border-gray-800/50"
                      />
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-royal to-teal flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-teal font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {member.bio}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Ready to Experience the SmileBright Difference?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Join our dental family and discover what personalized care feels
            like
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
              className="h-14 px-8 text-lg bg-white text-royal hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Link href="/book-appointment">Schedule Your Visit Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-2 border-white bg-royal text-white hover:bg-white/10 rounded-full hover:-translate-y-1 transition-all duration-300"
              onClick={() =>
                window.open("https://wa.me/447012345678", "_blank")
              }
            >
              WhatsApp Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
