import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Leaf, Smartphone, BarChart3, Shield, Users } from "lucide-react"

export function SolutionSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "Cost-effective surveys",
      description: "Cover 1 km² for 1/10th the cost of traditional methods. Save money without sacrificing detail.",
    },
    {
      icon: Leaf,
      title: "Eco-friendly operation",
      description: "Reduced fuel use, lower CO₂ emissions, and an eco-conscious hull made with sustainable materials.",
    },
    {
      icon: Smartphone,
      title: "Portable & modular",
      description:
        "Deploy it in minutes, move it easily between boats or locations, and swap components without a PhD in engineering.",
    },
    {
      icon: BarChart3,
      title: "Real-time, actionable data",
      description:
        "Instantly see depth, navigation hazards, and resource patterns—so you can make decisions on the spot.",
    },
    {
      icon: Shield,
      title: "Proven reliability",
      description: "Already tested with 30+ GNSS tracking systems and validated at SIAT 2024.",
    },
    {
      icon: Users,
      title: "Trusted by professionals",
      description: "Winning the trust of fishermen and NGOs alike across the Mediterranean.",
    },
  ]

  return (
    <section id="solution" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">🔹 How Bathynav Helps</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Enter <strong>Bathynav</strong>, your <strong>pocket-sized bathymetry partner</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <feature.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">Your Sea-Side Assistant</h3>
                <p className="text-lg mb-6 text-white/90">
                  Think of it as your sea-side assistant, delivering high-resolution maps, practical insights, and peace
                  of mind—all in a compact, user-friendly package.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  See It In Action
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/modern-maritime-device-on-fishing-boat-with-medite.jpg"
                  alt="Bathynav device in action"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
