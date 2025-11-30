import { Search, Database, Smartphone, Layout, Server, TestTube } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Tadqiqot va Tahlil",
    description:
      "Global yechimlarni o'rganish, mavjud ma'lumotlar bazalarini ko'rib chiqish, o'simlik kasalliklari va alomatlarini tahlil qilish.",
    technologies: ["Ilmiy maqolalar", "Mavjud datasetlar", "Bozor tahlili"],
  },
  {
    step: "02",
    icon: Database,
    title: "Ma'lumot To'plash va Model O'qitish",
    description:
      "Kasallangan va sog'lom ekinlarning tasvirlarini to'plash va belgilash. CNNs, Vision Transformers va computer vision pipeline'lari yordamida modellarni o'qitish.",
    technologies: ["PyTorch", "TensorFlow", "CNNs", "Vision Transformers"],
  },
  {
    step: "03",
    icon: Smartphone,
    title: "Edge AI Deployment",
    description:
      "Telefonda oflayn foydalanishga ruxsat berish uchun modelni ONNX / TensorFlow Lite formatiga o'tkazish va qurilmada bevosita inference ishga tushirish.",
    technologies: ["ONNX", "TensorFlow Lite", "Edge Computing"],
  },
  {
    step: "04",
    icon: Layout,
    title: "Frontend Dasturlash",
    description:
      "Foydalanuvchilarga qulay veb-sayt yoki mobil UI yaratish. Qishloq xo'jaligi tasvirlari va intuitiv navigatsiya bilan professional interfeys.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    step: "05",
    icon: Server,
    title: "Backend Dasturlash",
    description:
      "Tasvirni yuklash uchun REST API'lar, natijalarni saqlash uchun ma'lumotlar bazasi, jamoa/admin panellari uchun xavfsiz autentifikatsiya.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Cloud"],
  },
  {
    step: "06",
    icon: TestTube,
    title: "Sinov va Ishga Tushirish",
    description:
      "Haqiqiy dehqonlar bilan dala sinovlari, aniqlikni oshirish, APK nashr qilish yoki veb-saytni ishga tushirish.",
    technologies: ["A/B Testing", "User Research", "CI/CD", "Production Deploy"],
  },
]

export function ImplementationSection() {
  return (
    <section id="implementation" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Amalga Oshirish Rejasi</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Yechimni Qanday Amalga Oshiramiz
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Bosqichlar, texnologiyalar va AI vositalari</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-card border border-border p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl font-semibold text-primary/30">{step.step}</span>
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {step.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
