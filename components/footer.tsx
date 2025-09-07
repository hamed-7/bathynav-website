import { Waves, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8" />
              <span className="font-bold text-xl">Bathynav</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Smart maritime mapping for the Mediterranean. Empowering fishermen and NGOs with sustainable,
              cost-effective bathymetry solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#problem"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  The Problem
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Solution
                </a>
              </li>
              <li>
                <a href="#team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">contact@bathynav.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">Mediterranean Region</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">+33 (0) 1 23 45 67 89</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Bathynav. All rights reserved. Built with sustainable technology for a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  )
}
