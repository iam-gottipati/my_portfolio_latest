import { useEffect, useState } from "react";
import profileAsset from "@/assets/profile.jpg.asset.json";

const roles = [
  "DevOps & Cloud Engineer",
  "Docker · Kubernetes · AWS",
  "CI/CD Automation Enthusiast",
];

const HeroSection = () => {
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && typed.length < full.length) {
      timeout = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 60);
    } else if (!deleting && typed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(full.slice(0, typed.length - 1)), 30);
    } else {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIdx]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(142 72% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(142 72% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="text-center md:text-left">
          <div className="font-mono text-terminal-dim text-sm mb-6 tracking-wider">
            <span className="text-terminal-green">~/</span>portfolio
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Koteswararao</span>
            <br />
            <span className="text-primary text-glow">Gottipati</span>
          </h1>

          <div className="font-mono text-lg md:text-xl text-terminal-cyan mt-6 mb-8 min-h-[2rem]">
            <span className="text-terminal-dim">$ echo "</span>
            {typed}
            <span className="terminal-cursor text-primary">▊</span>
            <span className="text-terminal-dim">"</span>
          </div>

          <p className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed mb-10">
            Motivated B.Tech CSE (AI/ML) graduate passionate about automation,
            CI/CD pipelines, containerization, and cloud infrastructure.
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-md hover:opacity-90 transition-opacity border-glow">
              Contact Me
            </a>
            <a href="/resume.pdf" download
              className="px-6 py-3 border border-border text-foreground font-mono text-sm font-semibold rounded-md hover:border-terminal-amber hover:text-terminal-amber transition-colors">
              Resume ↓
            </a>
            <a href="https://github.com/iam-gottipati" target="_blank" rel="noreferrer"
              className="px-6 py-3 border border-border text-foreground font-mono text-sm font-semibold rounded-md hover:border-primary hover:text-primary transition-colors">
              GitHub →
            </a>
            <a href="https://linkedin.com/in/iam-gottipati" target="_blank" rel="noreferrer"
              className="px-6 py-3 border border-border text-foreground font-mono text-sm font-semibold rounded-md hover:border-terminal-cyan hover:text-terminal-cyan transition-colors">
              LinkedIn →
            </a>
          </div>
        </div>

        {/* Profile */}
        <div className="order-first md:order-last mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/60 via-terminal-cyan/40 to-transparent blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden w-52 h-52 md:w-64 md:h-64">
              <img
                src={profileAsset.url}
                alt="Portrait of Koteswararao Gottipati, DevOps and Cloud Engineer"
                className="w-full h-full object-cover object-top grayscale-[25%] group-hover:grayscale-0 transition-all duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-mono text-[10px] px-3 py-1 rounded-full bg-secondary border border-border text-terminal-green whitespace-nowrap">
              ● open to work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
