import { Brain, Code2, Layers, Rocket } from "lucide-react"

const reasons = [
  {
    icon: Brain,
    title: "Machine Learning Tajribasi",
    description:
      "Jamoamiz Computer Vision va Deep Learning sohasida keng tajribaga ega. Biz ilgari shunga o'xshash AI loyihalarida ishlagan va ML modellarini yaratish va joylashtirish bo'yicha amaliy bilimga egamiz.",
  },
  {
    icon: Code2,
    title: "To'liq Stack Qobiliyat",
    description:
      "Har bir a'zo muhim yo'nalishni qamrab oladi — ML, backend, frontend va deployment. Biz ishonchli end-to-end yechimni taqdim etishga to'liq qodirimiz.",
  },
  {
    icon: Layers,
    title: "Amaliy Yondashuv",
    description:
      "Biz nazariy bilimlarni amaliy loyihalarda qo'llagan holda, real muammolarni hal qilish tajribasiga egamiz. Har bir texnologiyani chuqur o'rganib, optimal yechimlarni topamiz.",
  },
  {
    icon: Rocket,
    title: "Innovatsion Texnologiyalar",
    description:
      "Vision Transformers, Edge AI va zamonaviy ML pipeline'laridan foydalanib, eng so'nggi texnologiyalarni qo'llaymiz. Bu bizga yuqori aniqlik va tezlikni ta'minlash imkonini beradi.",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Nima Uchun Biz</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-6">
              Jamoamiz Bu Muammoni Hal Qila Oladi
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Bizning jamoamiz Machine Learning, Computer Vision va full-stack dasturlash sohasida kuchli tajribaga ega.
              Biz ilgari shunga o'xshash AI loyihalarida ishlagan va ML modellarini yaratish hamda joylashtirish
              bo'yicha amaliy bilimga egamiz.
            </p>

            {/* Image removed as requested - keeping layout placeholders minimal */}
            <div aria-hidden className="w-full aspect-4/3 bg-muted rounded" />
          </div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
