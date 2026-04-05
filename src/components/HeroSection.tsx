import { useEffect, useState } from "react";

const HeroSection = () => {
  const [typed, setTyped] = useState("");
  const fullText = "DevOps & Cloud Engineer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(142 72% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(142 72% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="font-mono text-terminal-dim text-sm mb-6 tracking-wider">
          <span className="text-terminal-green">~/</span>portfolio
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-foreground">Koteswararao</span>
          <br />
          <span className="text-primary text-glow">Gottipati</span>
        </h1>

        <div className="font-mono text-lg md:text-xl text-terminal-cyan mt-6 mb-8 h-8">
          <span className="text-terminal-dim">$ echo "</span>
          {typed}
          <span className="terminal-cursor text-primary">▊</span>
          <span className="text-terminal-dim">"</span>
        </div>

        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10">
          Motivated B.Tech CSE (AI/ML) graduate passionate about automation,
          CI/CD pipelines, containerization, and cloud infrastructure.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:iamgottipati4@gmail.com"
            className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-md hover:opacity-90 transition-opacity border-glow">
            Contact Me
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
    </section>
  );
};

export default HeroSection;
