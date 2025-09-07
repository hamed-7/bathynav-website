import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, BarChart3, Users, Leaf, ArrowRight } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save money, time, and fuel",
      description: "while mapping your area.",
    },
    {
      icon: BarChart3,
      title: "Access high-resolution, real-time data",
      description: "without complex tools.",
    },
    {
      icon: Users,
      title: "Join a Mediterranean network",
      description: "of fishermen, NGOs, and institutions using data to make smarter decisions.",
    },
    {
      icon: Leaf,
      title: "Be part of a sustainable innovation",
      description: "that protects both livelihoods and marine ecosystems.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            🔹 Why You'll Love Bathynav
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <benefit.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-semibold text-xl mb-2 text-card-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-primary text-primary-foreground border-0 inline-block">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Maritime Operations?
              </h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Join the growing network of Mediterranean professionals using Bathynav
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
