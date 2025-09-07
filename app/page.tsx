import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { MediterraneanSection } from "@/components/mediterranean-section"
import { TeamSection } from "@/components/team-section"
import { BenefitsSection } from "@/components/benefits-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MediterraneanSection />
      <TeamSection />
      <BenefitsSection />
      <Footer />
    </main>
  )
}
