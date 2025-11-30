import React from "react"

const team = [
  {
name: "Mironshoh Inomjonov",
role: "ML Engineer",
experience: "ML engineer at Tilmoch.ai, Previously: Vention, KPI COM, ISSAI",
skills: ["Computer Vision", "Deep Learning"],
tech: ["Python", "PyTorch", "TensorFlow"],
linkedin: "https://www.linkedin.com/in/mironshoh-inomjonov/",
},
 {
    name: "Dovudkhon Abdubokiev",
    role: "AI Engineer",
    experience: "AI Engineer at Tax Committee’s New Technologies information center",
    skills: ["Computer Vision", "NLP"],
    tech: ["Python", "PyTorch", "HuggingFace"],
    linkedin: "https://uz.linkedin.com/in/dovudkhon-abdubokiev",
  },
  {
    name: "Otabek Tuychiboev",
    role: "AI Engineer / Backend",
    experience: "AI, Backend, IoT, Cryptography bo'yicha tajriba",
    skills: ["Full-Stack Development", "IoT", "Cryptography", "API Design", "Model Integration"],
    tech: ["Python", "Node.js", "Docker", "Cloud Services"],
    linkedin: "https://www.linkedin.com/in/otabek-tuychiboev-4819b3228/",
  },
  {
    name: "Azimjonov Sarvar",
    role: "AI Engineer",
    experience: "ML/AI Engineer at Uzinfocom",
    skills: ["Computer Vision", "Backend Development", "Model Optimization"],
    tech: ["Python", "FastAPI", "PyTorch", "CV Frameworks"],
    linkedin: "https://www.linkedin.com/in/azimjonoff/",
  },
  {
    name: "Dadaxanov Oqiljon",
    role: "Frontend Engineer",
    experience: "Iman, Uzinfocom, SOC",
    skills: [
      "Advanced React Patterns",
      "Next.js Architecture",
      "TypeScript Best Practices",
      "UI/UX Engineering",
      "Design Systems",
      "High-Performance Web Apps",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "REST/GraphQL"],
    linkedin: "https://www.linkedin.com/in/okiljon-dadakhanov/",
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
              className="group bg-card border border-border overflow-hidden hover:border-primary/40 transition-all hover:shadow-lg p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-4">{member.role}</p>

              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Tajriba</p>
                <p className="text-sm text-foreground">{member.experience}</p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Ko'nikmalar</p>
                <ul className="list-disc list-inside text-sm text-foreground space-y-1">
                  {member.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Texnologiyalar</p>
                <div className="flex flex-wrap gap-2">
                  {member.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-muted rounded-md text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Havola</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  LinkedIn profiliga o'tish
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
