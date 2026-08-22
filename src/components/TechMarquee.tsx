const tech = [
  "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Ansible",
  "AWS EC2", "AWS S3", "IAM", "VPC", "Linux", "Python", "Shell", "Docker Buildx", "Git",
];

const TechMarquee = () => (
  <div className="py-8 border-y border-border overflow-hidden relative">
    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
    <div className="flex gap-8 w-max animate-marquee">
      {[...tech, ...tech].map((t, i) => (
        <span key={i} className="font-mono text-sm text-terminal-dim hover:text-primary transition-colors whitespace-nowrap">
          <span className="text-primary/60">#</span> {t}
        </span>
      ))}
    </div>
  </div>
);

export default TechMarquee;
