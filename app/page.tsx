import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { TeamSection } from "@/components/team-section"
import { WhyUsSection } from "@/components/why-us-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { ImplementationSection } from "@/components/implementation-section"
import { TestCasesSection } from "@/components/test-cases-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <TestCasesSection />
      <TeamSection />
      <WhyUsSection />
      <RoadmapSection />
      <ImplementationSection />
      <Footer />
    </main>
  )
}
