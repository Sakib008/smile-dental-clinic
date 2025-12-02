"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Phone, MapPin, CheckCircle } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

export default function BookAppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    newPatient: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Create WhatsApp message with appointment details
    const message = `Hello! I would like to book an appointment with the following details:

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
${formData.service ? `*Service:* ${formData.service}` : ''}
${formData.preferredDate ? `*Preferred Date:* ${formData.preferredDate}` : ''}
${formData.preferredTime ? `*Preferred Time:* ${formData.preferredTime}` : ''}
${formData.newPatient ? `*New Patient:* ${formData.newPatient}` : ''}
${formData.message ? `*Additional Information:* ${formData.message}` : ''}

Thank you!`

    // WhatsApp phone number (replace with actual number)
    const whatsappNumber = "447012345678" // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-20">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="max-w-2xl mx-auto text-center">
                <div className="p-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-12 w-12 text-white" />
                    </div>
                  </motion.div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Appointment Request Received!</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    Thank you for choosing SmileBright Dental. We've received your appointment request and will contact
                    you within 24 hours to confirm your preferred time slot.
                  </p>
                  <GlassCard className="bg-gradient-to-br from-royal/5 to-teal/5 mb-6">
                    <div className="p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What happens next?</h3>
                      <ul className="text-left text-gray-600 dark:text-gray-400 space-y-2">
                        <li>• Our team will call you to confirm your appointment</li>
                        <li>• You'll receive an email confirmation with appointment details</li>
                        <li>• We'll send you a reminder 24 hours before your visit</li>
                      </ul>
                    </div>
                  </GlassCard>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      Book Another Appointment
                    </Button>
                    <Button
                      variant="outline"
                      className="border-royal text-royal hover:bg-royal/5 rounded-full hover:-translate-y-1 transition-all duration-300"
                      onClick={() => window.open('https://wa.me/447012345678', '_blank')}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp Us
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

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
              Book Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-teal">
                Appointment
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Schedule your visit with our experienced dental team. We're here to help you achieve optimal oral health.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard hoverEffect>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-royal/20 to-teal/20 flex items-center justify-center mr-3">
                        <Phone className="h-6 w-6 text-royal" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Call Us Directly</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Prefer to speak with someone? Call us directly to schedule your appointment.
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      onClick={() => window.open('https://wa.me/447012345678', '_blank')}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp Now
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <GlassCard hoverEffect>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal/20 to-royal/20 flex items-center justify-center mr-3">
                        <Clock className="h-6 w-6 text-teal" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Opening Hours</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Monday - Friday:</span>
                        <span className="font-medium text-gray-900 dark:text-white">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Saturday:</span>
                        <span className="font-medium text-gray-900 dark:text-white">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Sunday:</span>
                        <span className="font-medium text-gray-900 dark:text-white">Closed</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <GlassCard hoverEffect>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-royal/20 to-teal/20 flex items-center justify-center mr-3">
                        <MapPin className="h-6 w-6 text-royal" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Location</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Dental Street
                      <br />
                      London, UK SW1A 1AA
                    </p>
                    <Button variant="outline" className="w-full mt-4 border-royal text-royal hover:bg-royal/5 rounded-full transition-all duration-300">
                      Get Directions
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Schedule Your Appointment</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      Fill out the form below and we'll contact you to confirm your preferred appointment time.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" required value={formData.firstName} onChange={handleChange} className="rounded-full" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" required value={formData.lastName} onChange={handleChange} className="rounded-full" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" required value={formData.email} onChange={handleChange} className="rounded-full" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" type="tel" required value={formData.phone} onChange={handleChange} className="rounded-full" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Type of Service</Label>
                        <Select onValueChange={(value) => handleSelectChange("service", value)}>
                          <SelectTrigger className="rounded-full">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                            <SelectItem value="cleaning">Dental Cleaning</SelectItem>
                            <SelectItem value="whitening">Teeth Whitening</SelectItem>
                            <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                            <SelectItem value="orthodontics">Orthodontics</SelectItem>
                            <SelectItem value="emergency">Emergency Care</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">Preferred Date</Label>
                          <Input id="preferredDate" type="date" value={formData.preferredDate} onChange={handleChange} className="rounded-full" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredTime">Preferred Time</Label>
                          <Select onValueChange={(value) => handleSelectChange("preferredTime", value)}>
                            <SelectTrigger className="rounded-full">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="9:00">9:00 AM</SelectItem>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                              <SelectItem value="15:00">3:00 PM</SelectItem>
                              <SelectItem value="16:00">4:00 PM</SelectItem>
                              <SelectItem value="17:00">5:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea
                          id="message"
                          placeholder="Please let us know if you have any specific concerns, medical conditions, or special requirements..."
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="rounded-2xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="newPatient">Are you a new patient?</Label>
                        <Select onValueChange={(value) => handleSelectChange("newPatient", value)}>
                          <SelectTrigger className="rounded-full">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes, I'm a new patient</SelectItem>
                            <SelectItem value="no">No, I'm an existing patient</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-12"
                        size="lg"
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending..." : (
                          <>
                            <Calendar className="h-4 w-4 mr-2" />
                            Request Appointment
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        By submitting this form, you agree to our privacy policy and consent to being contacted by our
                        team to confirm your appointment.
                      </p>
                    </form>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="relative py-12 overflow-hidden">
        {/* Red gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />

        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="max-w-4xl mx-auto border-2 border-white/20">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-red-500 mb-4">Dental Emergency?</h3>
                <p className=" text-red-600 mb-6">
                  If you're experiencing severe pain, trauma, or other dental emergencies, don't wait for a scheduled
                  appointment. Call us immediately.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  onClick={() => window.open('https://wa.me/447012345678?text=Emergency%20Dental%20Care%20Needed', '_blank')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency WhatsApp
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
