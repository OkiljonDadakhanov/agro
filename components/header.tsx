"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Leaf } from "lucide-react"

const navigation = [
  { name: "Muammo va Yechim", href: "#problem-solution" },
  { name: "Natijalar", href: "#test-cases" },
  { name: "Jamoa", href: "#team" },
  { name: "Nima Uchun Biz", href: "#why-us" },
  { name: "Yo'l Xaritasi", href: "#roadmap" },
  { name: "Rejalashtirish", href: "#implementation" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-16">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="w-9 h-9 bg-primary flex items-center justify-center rounded-sm">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground leading-none">DiScan</span>
                <span className="text-[10px] text-muted-foreground tracking-wide">Plant Disease Detection</span>
              </div>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="#implementation"
              className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-sm"
            >
              Batafsil
            </Link>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#implementation"
                className="block mt-4 text-sm font-medium px-4 py-2 bg-primary text-primary-foreground text-center rounded-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Batafsil
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
