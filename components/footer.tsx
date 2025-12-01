import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal to-teal" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-royal/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />

      <div className="container px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-royal to-teal flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">SB</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">SmileBright</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the future of dental care. Advanced technology, gentle hands, and brighter smiles for the whole family.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-royal hover:bg-royal/10 rounded-full transition-all">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-teal hover:bg-teal/10 rounded-full transition-all">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-royal hover:bg-royal/10 rounded-full transition-all">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Pricing", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-teal transition-colors flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-gray-900 rounded-lg group-hover:bg-royal/20 transition-colors">
                  <MapPin className="h-5 w-5 text-royal" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">123 Dental Street,<br />London, UK</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-gray-900 rounded-lg group-hover:bg-teal/20 transition-colors">
                  <Phone className="h-5 w-5 text-teal" />
                </div>
                <span className="text-gray-400 text-sm">+44 20 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-gray-900 rounded-lg group-hover:bg-royal/20 transition-colors">
                  <Mail className="h-5 w-5 text-royal" />
                </div>
                <span className="text-gray-400 text-sm">info@smilebright.co.uk</span>
              </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm">Subscribe to our newsletter for dental tips and exclusive offers.</p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-teal transition-colors"
              />
              <Button className="bg-gradient-to-r from-royal to-teal hover:from-royal-dark hover:to-teal-dark text-white rounded-lg w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SmileBright Dental. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
