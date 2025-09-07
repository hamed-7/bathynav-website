"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Waves } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">Bathynav</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">
              The Problem
            </a>
            <a href="#solution" className="text-muted-foreground hover:text-foreground transition-colors">
              Our Solution
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a href="#problem" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                The Problem
              </a>
              <a href="#solution" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                Our Solution
              </a>
              <a href="#team" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                Team
              </a>
              <a href="#contact" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
