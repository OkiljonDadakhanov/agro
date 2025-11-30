import { AlertTriangle, CheckCircle, Camera, Cpu, FileText } from "lucide-react"

export function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Muammo va Yechim</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Qishloq Xo'jaligidagi Muammo
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problem */}
          <div className="bg-card border border-border p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Muammo</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dehqonlar ko'pincha o'simlik kasalliklarini to'g'ri tashxislashda qiynaladi. Ko'pchilik taxminlarga yoki
              cheklangan qishloq xo'jaligi bilimlariga tayanadi, bu esa noto'g'ri tashxis, kech davolash va
              hosildorlikning pasayishiga olib keladi.
            </p>
            <ul className="space-y-3">
              {[
                "Kasalliklarni erta bosqichda aniqlash qiyin",
                "Mutaxassislarga murojaat qilish qimmat va vaqt talab",
                "Noto'g'ri tashxis hosilning nobud bo'lishiga olib keladi",
                "Kichik xo'jaliklarda ekspert yetishmovchiligi",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-card border border-primary/20 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Yechim</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Biz sun'iy intellektga asoslangan o'simlik kasalliklarini aniqlash platformasini yaratmoqdamiz. Oddiy rasm
              olish orqali tizimimiz kasallikni avtomatik aniqlaydi va amaliy tavsiyalar beradi.
            </p>
            <div className="space-y-4">
              {[
                { icon: Camera, title: "Oddiy Foydalanish", desc: "Faqat bargning rasmini oling" },
                { icon: Cpu, title: "AI Tahlili", desc: "Sun'iy intellekt kasallikni aniqlaydi" },
                { icon: FileText, title: "Tavsiyalar", desc: "Davolash bo'yicha ko'rsatmalar oling" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
