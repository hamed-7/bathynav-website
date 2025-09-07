import { Card, CardContent } from "@/components/ui/card"
import { Target, Leaf, Users, Network } from "lucide-react"

export function MediterraneanSection() {
  const reasons = [
    {
      icon: Target,
      title: "Tailored to small-scale operators",
      description:
        "Not every solution needs to be a research vessel. Bathynav is built for fishermen, NGOs, and local authorities.",
    },
    {
      icon: Leaf,
      title: "Eco-conscious by design",
      description: "Mediterranean ecosystems are delicate; our sustainable materials minimize environmental impact.",
    },
    {
      icon: Users,
      title: "Trusted locally",
      description:
        "Fishermen and NGOs are already using it and providing feedback. It's battle-tested in real Mediterranean waters.",
    },
    {
      icon: Network,
      title: "Network-ready",
      description:
        "Designed to connect users, institutions, and stakeholders across the region—knowledge sharing made simple.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            🔹 Why it Works for the Mediterranean
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <reason.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-semibold text-xl mb-4 text-card-foreground">{reason.title}</h3>
                <p className="text-muted-foreground text-lg">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative">
          <img
            src="/mediterranean-coastline-with-fishing-boats-and-cle.jpg"
            alt="Mediterranean coastline"
            className="w-full h-96 object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-2xl flex items-end">
            <div className="p-8 text-white">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-2">Built for the Mediterranean</h3>
              <p className="text-lg text-white/90">
                Where tradition meets innovation in sustainable maritime technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
