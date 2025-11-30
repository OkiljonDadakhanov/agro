import { CheckCircle, AlertTriangle, Camera } from "lucide-react"

const testCases = [
  {
    id: 1,
    plantName: "Pomidor",
    disease: "Early Blight (Erta Kuyish)",
    accuracy: "96.2%",
    status: "detected",
    description: "Barglarida jigarrang dog'lar aniqlandi. Fungitsid qo'llash tavsiya etiladi.",
  },
  {
    id: 2,
    plantName: "Kartoshka",
    disease: "Late Blight (Kech Kuyish)",
    accuracy: "94.8%",
    status: "detected",
    description: "Barglarning chetlarida qoramtir dog'lar. Zararlanish darajasi: o'rtacha.",
  },
  {
    id: 3,
    plantName: "Bodring",
    disease: "Sog'lom",
    accuracy: "98.1%",
    status: "healthy",
    description: "O'simlik sog'lom holatda. Hech qanday kasallik belgilari aniqlanmadi.",
  },
  {
    id: 4,
    plantName: "Paxta",
    disease: "Verticillium Wilt",
    accuracy: "92.5%",
    status: "detected",
    description: "Barglarning sarg'ayishi va so'lishi kuzatildi. Tuproq dezinfeksiyasi talab etiladi.",
  },
  {
    id: 5,
    plantName: "Bug'doy",
    disease: "Zang Kasalligi",
    accuracy: "95.7%",
    status: "detected",
    description: "Barglarda sariq-jigarrang zang dog'lari. Erta bosqichda aniqlandi.",
  },
  {
    id: 6,
    plantName: "Uzum",
    disease: "Sog'lom",
    accuracy: "97.3%",
    status: "healthy",
    description: "Barglar va meva sog'lom. O'simlik normal rivojlanmoqda.",
  },
]

export function TestCasesSection() {
  return (
    <section id="test-cases" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Test Natijalari</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">DiScan Sinovdan O'tkazildi</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Turli o'simliklar ustida o'tkazilgan test sinovlari va ularning natijalari. AI modelimiz yuqori aniqlik
            bilan kasalliklarni aniqlashga qodir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testCases.map((testCase) => (
            <div
              key={testCase.id}
              className="bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-colors"
            >
              {/* Image placeholder area */}
              <div className="aspect-[4/3] bg-muted relative flex items-center justify-center border-b border-border">
                <div className="text-center">
                  <Camera className="w-10 h-10 text-muted-foreground/40 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground/60">O'simlik rasmi</p>
                  <p className="text-[10px] text-muted-foreground/40 mt-1">{testCase.plantName} namunasi</p>
                </div>
                {/* Status badge */}
                <div
                  className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-sm ${
                    testCase.status === "healthy" ? "bg-primary/10 text-primary" : "bg-amber-500/10 text-amber-600"
                  }`}
                >
                  {testCase.status === "healthy" ? "Sog'lom" : "Kasallik"}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{testCase.plantName}</h3>
                    <p className="text-sm text-muted-foreground">{testCase.disease}</p>
                  </div>
                  {testCase.status === "healthy" ? (
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{testCase.description}</p>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">Aniqlik darajasi</span>
                  <span className="text-sm font-semibold text-primary">{testCase.accuracy}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card border border-border rounded-sm">
            <p className="text-3xl font-bold text-foreground">150+</p>
            <p className="text-sm text-muted-foreground mt-1">Test sinovlari</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-sm">
            <p className="text-3xl font-bold text-primary">95.4%</p>
            <p className="text-sm text-muted-foreground mt-1">O'rtacha aniqlik</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-sm">
            <p className="text-3xl font-bold text-foreground">12</p>
            <p className="text-sm text-muted-foreground mt-1">O'simlik turlari</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-sm">
            <p className="text-3xl font-bold text-foreground">38</p>
            <p className="text-sm text-muted-foreground mt-1">Kasallik turlari</p>
          </div>
        </div>
      </div>
    </section>
  )
}
