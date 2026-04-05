const education = [
  {
    degree: "B.Tech, CSE (AI/ML)",
    school: "Samskruti College of Engineering and Technology, Hyderabad",
    period: "Sep 2022 – Apr 2026",
    score: "GPA: 6.54",
  },
  {
    degree: "Pre-University Education",
    school: "Vikas Junior College, Narasaraopet, AP",
    period: "Jun 2019 – Apr 2021",
    score: "96.4%",
  },
  {
    degree: "Secondary Education",
    school: "Mana Bala Bharathi High School, Santhamaguluru, AP",
    period: "Jun 2018 – Apr 2019",
    score: "GPA: 10",
  },
];

const certifications = [
  "AWS Cloud Practitioner (in progress)",
  "Introduction to DevOps – Coursera",
];

const EducationSection = () => (
  <section id="education" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="font-mono text-sm text-terminal-dim mb-2">
        <span className="text-terminal-green">$</span> cat education.log
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
        Education
      </h2>

      <div className="space-y-4 mb-12">
        {education.map((e, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h3 className="font-display font-semibold text-foreground">{e.degree}</h3>
              <p className="text-sm text-muted-foreground">{e.school}</p>
            </div>
            <div className="text-right md:text-right shrink-0">
              <span className="font-mono text-xs text-terminal-cyan">{e.period}</span>
              <br />
              <span className="font-mono text-xs text-terminal-amber">{e.score}</span>
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground mb-4">Certifications</h3>
      <div className="flex flex-wrap gap-3">
        {certifications.map((c, i) => (
          <span key={i} className="font-mono text-xs px-4 py-2 rounded-md bg-secondary border border-border text-secondary-foreground">
            {c}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
