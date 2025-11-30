import { CheckCircle, AlertTriangle } from "lucide-react"

const sharedImage = "/result.jpg" // ONE image for all test cases

const testCases = [
  {
    id: 1,
    title: "Kasallik aniqlangan (img1)",
    description:
      "Bargning yuqori qismida kuchli zararlanish, qoramtir dog'lar va nekroz aniqlandi. Darhol davolash talab etiladi.",
    status: "detected",
    accuracy: "99.96%",
  },
  {
    id: 2,
    title: "Sog'lom (img2)",
    description:
      "O'simlik sog'lom holatda. Barglar to'q yashil rangda va hech qanday kasallik belgilari aniqlanmadi.",
    status: "healthy",
    accuracy: "99.97%",
  },
]

export function TestCasesSection() {
  return (
    <section id="test-cases" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            Test Natijalari
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            DiScan Sinovdan O'tkazildi
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Bir xil o'simlik rasmi asosida AI modeli ikki xil holatni tahlil qildi: kasallik aniqlangan va sog'lom holat.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Single image */}
          <div className="bg-card border border-border rounded-sm overflow-hidden">
            <div className="aspect-[4/3] bg-muted relative flex items-center justify-center border-b border-border">
              <img
                src={sharedImage}
                alt="Test sample"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Two descriptions */}
            {testCases.map((testCase) => (
              <div
                key={testCase.id}
                className="p-5 border-b last:border-b-0 border-border"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Pomidor
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testCase.title}
                    </p>
                  </div>

                  {testCase.status === "healthy" ? (
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {testCase.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    Aniqlik darajasi
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {testCase.accuracy}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card border border-border rounded-sm">
            <p className="text-3xl font-bold text-foreground">2</p>
            <p className="text-sm text-muted-foreground mt-1">Test sinovlari</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-sm">
            <p className="text-3xl font-bold text-primary">99.9%</p>
            <p className="text-sm text-muted-foreground mt-1">O'rtacha aniqlik</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-sm">
            <p className="text-3xl font-bold text-foreground">1</p>
            <p className="text-sm text-muted-foreground mt-1">O'simlik turi</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-sm">
            <p className="text-3xl font-bold text-foreground">2</p>
            <p className="text-sm text-muted-foreground mt-1">Tahlil holati</p>
          </div>
        </div>
      </div>
    </section>
  )
}
