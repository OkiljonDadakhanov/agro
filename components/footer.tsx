import Link from "next/link"
import { Leaf } from "lucide-react"

const navigation = [
  { name: "Muammo va Yechim", href: "#problem-solution" },
  { name: "Natijalar", href: "#test-cases" },
  { name: "Jamoa", href: "#team" },
  { name: "Nima Uchun Biz", href: "#why-us" },
  { name: "Yo'l Xaritasi", href: "#roadmap" },
  { name: "Rejalashtirish", href: "#implementation" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary flex items-center justify-center rounded-sm">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground leading-none">DiScan</span>
                <span className="text-[10px] text-muted-foreground tracking-wide">Plant Disease Detection</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Sun'iy intellekt yordamida o'simlik kasalliklarini aniqlash platformasi. Fermerlar va agronomlarga ekspert
              darajasidagi diagnostika imkoniyatini taqdim etamiz.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 DiScan. Barcha huquqlar himoyalangan.</p>
          <p className="text-sm text-muted-foreground">Toshkent, O'zbekiston</p>
        </div>
      </div>
    </footer>
  )
}
