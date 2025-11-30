import Link from "next/link"
import { ArrowDown, Scan, Shield, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e08_1px,transparent_1px),linear-gradient(to_bottom,#22c55e08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
          

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
              O'simlik
              <span className="text-primary"> Kasalliklarini</span>
              <br />
              Tez va Aniq Aniqlang
            </h1>

            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              DiScan — sun'iy intellekt asosida o'simlik kasalliklarini rasm orqali tashxislash tizimi. Fermerlar va
              agronomlarga ekspert darajasidagi diagnostika imkoniyatini taqdim etadi.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="#problem-solution"
                className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors rounded-sm"
              >
                Loyihani Ko'rish
              </Link>
              <Link
                href="#test-cases"
                className="px-8 py-3.5 border border-border text-foreground font-semibold hover:bg-secondary transition-colors rounded-sm"
              >
                Test Natijalarini Ko'rish
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 p-6 bg-card border border-border rounded-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm shrink-0">
                    <Scan className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Tezkor Aniqlash</h3>
                    <p className="text-sm text-muted-foreground">Bir necha soniya ichida kasallikni aniqlash</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-sm">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-sm mb-3">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">95%+ Aniqlik</h3>
                <p className="text-sm text-muted-foreground">Yuqori darajadagi tashxis aniqlik</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-sm">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-sm mb-3">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Davolash Tavsiylari</h3>
                <p className="text-sm text-muted-foreground">Aniq va samarali yechimlar</p>
              </div>

              {/* Agricultural pattern decoration */}
              <div className="col-span-2 h-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-sm flex items-center justify-center border border-primary/10">
                <div className="flex items-center gap-8 text-primary/60">
                  <span className="text-xs font-medium tracking-wider uppercase">Paxta</span>
                  <span className="w-1 h-1 bg-primary/40 rounded-full" />
                  <span className="text-xs font-medium tracking-wider uppercase">Bug'doy</span>
                  <span className="w-1 h-1 bg-primary/40 rounded-full" />
                  <span className="text-xs font-medium tracking-wider uppercase">Pomidor</span>
                  <span className="w-1 h-1 bg-primary/40 rounded-full" />
                  <span className="text-xs font-medium tracking-wider uppercase">Kartoshka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
      </div>
    </section>
  )
}
