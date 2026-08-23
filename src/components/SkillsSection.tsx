const skillGroups = [
  { label: "DevOps Tools", items: ["Docker", "Git", "GitHub Actions", "Jenkins", "Kubernetes"], color: "text-primary" },
  { label: "Cloud", items: ["AWS EC2", "IAM", "S3", "VPC"], color: "text-terminal-cyan" },
  { label: "IaC & Config", items: ["Terraform", "Ansible"], color: "text-terminal-amber" },
  { label: "Languages & OS", items: ["Python", "Linux (Ubuntu)", "Shell Scripting"], color: "text-foreground" },
];

import { useScrollReveal } from "@/hooks/useScrollReveal";

const SkillsSection = () => {
  const ref = useScrollReveal();
  return (
  <section id="skills" className="py-24 px-6" ref={ref}>
    <div className="max-w-5xl mx-auto">
      <div className="font-mono text-sm text-terminal-dim mb-2">
        <span className="text-terminal-green">$</span> cat skills.yml
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((g, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-6">
            <h3 className={`font-mono text-sm font-semibold mb-4 ${g.color}`}>
              {g.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s, j) => (
                <span key={j} className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default SkillsSection;
