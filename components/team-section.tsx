// Photos and external links intentionally removed per request

const team = [
  {
    name: "Mironshoh",
    role: "Machine Learning Engineer",
    experience: "3+ yil ML va Computer Vision sohasida tajriba",
    skills: ["Computer Vision", "Deep Learning", "CNNs", "Vision Transformers", "Model Deployment"],
    tech: ["Python", "PyTorch/TensorFlow", "ONNX", "Edge AI"],
    linkedin: "#",
  },
  {
    name: "Oqiljon",
    role: "Full-Stack / Frontend Developer",
    experience: "2+ yil Frontend va Full-stack development",
    skills: ["React", "Next.js", "UI/UX", "Tailwind", "API Integration"],
    tech: ["Next.js", "React", "TypeScript"],
    linkedin: "#",
  },
  {
    name: "Sarvar",
    role: "Machine Learning Engineer",
    experience: "2+ yil ML Research va Data Science",
    skills: ["Data Preprocessing", "Model Training", "ML Research"],
    tech: ["Python", "Jupyter", "ML Frameworks"],
    linkedin: "#",
  },
  {
    name: "Dovudxon",
    role: "Backend Engineer",
    experience: "3+ yil Backend va API development",
    skills: ["REST APIs", "Architecture", "Authentication"],
    tech: ["Node.js", "Express", "PostgreSQL", "Cloud"],
    linkedin: "#",
  },
  {
    name: "Otabek",
    role: "Backend / DevOps Engineer",
    experience: "2+ yil DevOps va Cloud infrastructure",
    skills: ["API Development", "Deployment Pipelines"],
    tech: ["Docker", "CI/CD", "AWS/GCP"],
    linkedin: "#",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Bizning Jamoa</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Loyiha Ustida Ishlaydigan Mutaxassislar
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Har bir a'zo o'z sohasida chuqur bilim va tajribaga ega
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card border border-border overflow-hidden hover:border-primary/40 transition-all hover:shadow-lg p-6"
            >
              {/* Photos removed as requested; show only titles with empty values */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground">Rollar</h3>
                {/* Intentionally left empty */}
                <div className="h-4" />
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Ko'nikmalar</p>
                {/* Intentionally empty */}
                <div className="h-4" />
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Texnologiyalar staki</p>
                {/* Intentionally empty */}
                <div className="h-4" />
              </div>

              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Havolalar</p>
                {/* Intentionally empty */}
                <div className="h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
