"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Calendar } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`container mx-auto px-4 transition-all duration-300 ${isScrolled ? "max-w-7xl" : "max-w-6xl"
        }`}>
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? "shadow-lg bg-white/80 dark:bg-black/80" : "bg-white/50 dark:bg-black/50 border-transparent shadow-none"
          }`}>
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-royal to-teal flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">SB</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:block">SmileBright</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-royal font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-royal transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-royal hover:text-royal-dark hover:bg-royal/10 rounded-full"
              onClick={() => window.open('https://wa.me/447012345678', '_blank')}
            >
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button asChild size="sm" className="bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              <Link href="/book-appointment">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] glass border-l border-white/20">
              <nav className="flex flex-col space-y-6 mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-royal transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    className="border-royal text-royal hover:bg-royal/10 rounded-full w-full"
                    onClick={() => window.open('https://wa.me/447012345678', '_blank')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    WhatsApp Now
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-royal to-teal text-white rounded-full w-full shadow-md">
                    <Link href="/book-appointment" onClick={() => setIsOpen(false)}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
