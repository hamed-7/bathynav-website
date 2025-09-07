import { Button } from "@/components/ui/button"
import { ArrowRight, Waves } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/mediterranean-sea-with-fishing-boats-at-sunset--ae.jpg"
          alt="Mediterranean maritime scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Waves className="h-6 w-6 text-white" />
            <span className="text-white font-semibold">Bathynav</span>
          </div>
        </div>

        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          🌊 The Smarter Way to Map the Mediterranean
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty">
          Cost-effective, eco-friendly bathymetry mapping for fishermen and NGOs. Cover 1 km² for 1/10th the cost of
          traditional methods.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
            Discover How It Works
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent"
          >
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
