import { Lightbulb, FlaskConical, Box, Rocket } from "lucide-react"

const stages = [
  {
    icon: Lightbulb,
    title: "Idea",
    status: "completed",
    description:
      "Dehqonlarga hosilni yo'qotishning oldini olishda yordam berish uchun AI yordamida kasalliklarni erta aniqlash g'oyasi.",
  },
  {
    icon: FlaskConical,
    title: "Prototype",
    status: "completed",
    description:
      "Dastlabki ML modeli namuna barg tasvirlarida o'qitildi va sinovdan o'tkazildi. Asosiy arxitektura yaratildi.",
  },
  {
    icon: Box,
    title: "MVP",
    status: "in-progress",
    description:
      "Foydalanuvchilar rasm yuklashi va kasallik hamda tavsiya etilgan davolashni darhol ko'rishi mumkin bo'lgan oddiy mobil yoki veb-interfeys.",
  },
  {
    icon: Rocket,
    title: "Launch",
    status: "upcoming",
    description:
      "Qurilmada oflayn ishlaydigan mobil APK yoki tez bulutli inference bilan veb-platforma sifatida yakuniy mahsulot.",
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Yo'l Xaritasi</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Loyiha Rivojlanish Bosqichlari
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">G'oyadan tayyor mahsulotgacha bo'lgan yo'limiz</p>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <div key={index} className="relative">
                {/* Timeline Node */}
                <div
                  className={`
                  relative z-10 w-12 h-12 mx-auto mb-6 flex items-center justify-center
                  ${
                    stage.status === "completed"
                      ? "bg-primary"
                      : stage.status === "in-progress"
                        ? "bg-primary/60 ring-4 ring-primary/20"
                        : "bg-muted border-2 border-border"
                  }
                `}
                >
                  <stage.icon
                    className={`w-5 h-5 ${
                      stage.status === "completed" || stage.status === "in-progress"
                        ? "text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                    {stage.status === "in-progress" && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium">Hozirda</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
