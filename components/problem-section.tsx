import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, DollarSign, Clock, Fuel } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      title: "Expensive Surveys",
      description: "Traditional surveys are costly and require specialized teams that small operators can't afford.",
    },
    {
      icon: Clock,
      title: "Slow & Outdated",
      description: "Satellite data is low resolution, outdated, and doesn't capture the fine details you need.",
    },
    {
      icon: Fuel,
      title: "Fuel-Hungry Operations",
      description: "Marine drones & vessels are great for large-scale operations but way out of reach for locals.",
    },
    {
      icon: AlertTriangle,
      title: "Poor Decision Making",
      description: "Fishermen waste fuel, time, and resources. NGOs struggle to track marine resources accurately.",
    },
  ]

  return (
    <section id="problem" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">🔹 The Problem</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            If you've ever tried mapping the coast or navigating small-scale fisheries in the Mediterranean, you know
            it's <strong>no easy task</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <problem.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-card-foreground">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-card-foreground mb-4">The Result?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Fishermen waste fuel, time, and resources. NGOs struggle to track marine resources accurately. Coastal
              institutions lack <strong>real-time data</strong> to make informed decisions.
            </p>
            <p className="text-xl font-semibold text-primary">
              And let's face it, <strong>the sea doesn't wait for you to catch up</strong>.
            </p>
            <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-lg font-medium text-foreground">
                In short: <strong>accurate, timely, affordable maritime data has been a luxury… until now.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
