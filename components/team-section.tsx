import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Cpu, Ship } from "lucide-react"

export function TeamSection() {
  const achievements = [
    "UNICEF ICCC Climate Award winners (with Greenlab)",
    "3 FCIL grants for prototyping and innovation",
    "30+ GNSS tracking systems deployed and validated",
    "Trusted advisors for startups in maritime and tech innovation",
  ]

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">🔹 Meet the Team</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Cpu className="h-12 w-12 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold text-2xl text-card-foreground">Mortadha</h3>
                  <p className="text-muted-foreground">Technical Lead</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                IoT, embedded systems, modular vessel design, WEEE valorization.
                <strong> 100+ hardware products developed</strong>. The guy who makes gadgets work in the real world.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">IoT Systems</Badge>
                <Badge variant="secondary">Hardware Design</Badge>
                <Badge variant="secondary">Embedded Systems</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Ship className="h-12 w-12 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold text-2xl text-card-foreground">Hamed</h3>
                  <p className="text-muted-foreground">Operations Lead</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Maritime operations, business development, partnerships, and making sure Bathynav is{" "}
                <strong>used where it matters most</strong>.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Maritime Operations</Badge>
                <Badge variant="secondary">Business Development</Badge>
                <Badge variant="secondary">Partnerships</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-accent mr-3" />
              <h3 className="font-playfair text-2xl font-bold text-card-foreground">Achievements that Matter</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
