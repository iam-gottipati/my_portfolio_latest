import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  about       — Who I am",
    "  skills      — Technical skills",
    "  projects    — My projects",
    "  education   — Academic background",
    "  contact     — Get in touch",
    "  resume      — Download resume",
    "  goto <id>   — Scroll to a section (e.g. goto skills)",
    "  clear       — Clear terminal",
    "  help        — Show this message",
  ],
  about: [
    "Koteswararao Gottipati",
    "B.Tech CSE (AI/ML) — Samskruti College, Hyderabad",
    "Motivated DevOps & Cloud Engineer passionate about",
    "automation, CI/CD pipelines, containerization, and",
    "cloud infrastructure.",
  ],
  skills: [
    "DevOps Tools  ➜ Docker · Docker Buildx · Git · GitHub Actions · Jenkins · K8s",
    "Cloud         ➜ AWS EC2 · IAM · S3 · VPC",
    "IaC & Config  ➜ Terraform · Ansible",
    "Languages     ➜ Python · Shell Scripting · Linux (Ubuntu)",
  ],
  projects: [
    "1. Dockerized Java App Deployment        [Docker]",
    "2. CI/CD Pipeline using Jenkins           [Jenkins]",
    "3. Kubernetes Deployment on AWS            [K8s+AWS]",
    "4. Multi-Platform Docker Builds with Buildx [Buildx]",
    "",
    "Type 'goto projects' to view details.",
  ],
  education: [
    "B.Tech CSE (AI/ML) — Samskruti College  (2022–2026)  GPA 6.54",
    "Pre-University     — Vikas Jr College    (2019–2021)  96.4%",
    "Secondary          — Mana Bala Bharathi  (2018–2019)  GPA 10",
  ],
  contact: [
    "Email    ➜ iamgottipati4@gmail.com",
    "Phone    ➜ +91 8498811891",
    "GitHub   ➜ github.com/iam-gottipati",
    "LinkedIn ➜ linkedin.com/in/iam-gottipati",
  ],
};

interface Line {
  type: "input" | "output";
  text: string;
}

const TerminalSection = () => {
  const sectionRef = useScrollReveal();
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: 'Welcome to KG Terminal v1.0 — Type "help" to get started.' },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const execute = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [{ type: "input", text: cmd }];

    if (!trimmed) return;

    if (trimmed === "clear") {
      setLines([]);
      setHistory((h) => [...h, trimmed]);
      setHistIdx(-1);
      return;
    }

    if (trimmed === "resume") {
      newLines.push({ type: "output", text: "Downloading resume..." });
      setLines((l) => [...l, ...newLines]);
      const a = document.createElement("a");
      a.href = "/resume.pdf";
      a.download = "";
      a.click();
    } else if (trimmed.startsWith("goto ")) {
      const target = trimmed.slice(5).trim();
      const el = document.getElementById(target);
      if (el) {
        newLines.push({ type: "output", text: `Navigating to #${target}...` });
        setLines((l) => [...l, ...newLines]);
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        newLines.push({ type: "output", text: `Section "${target}" not found. Try: projects, skills, education, contact` });
        setLines((l) => [...l, ...newLines]);
      }
    } else if (COMMANDS[trimmed]) {
      COMMANDS[trimmed].forEach((t) => newLines.push({ type: "output", text: t }));
      setLines((l) => [...l, ...newLines]);
    } else {
      newLines.push({ type: "output", text: `command not found: ${trimmed}. Type "help" for available commands.` });
      setLines((l) => [...l, ...newLines]);
    }

    setHistory((h) => [...h, trimmed]);
    setHistIdx(-1);
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      execute(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(next);
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === -1) return;
      const next = histIdx + 1;
      if (next >= history.length) {
        setHistIdx(-1);
        setInput("");
      } else {
        setHistIdx(next);
        setInput(history[next]);
      }
    }
  };

  return (
    <section id="terminal" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-3xl mx-auto">
        <div className="font-mono text-sm text-terminal-dim mb-2">
          <span className="text-terminal-green">$</span> ./interactive.sh
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          Terminal
        </h2>

        {/* Terminal window */}
        <div
          className="bg-[hsl(220_22%_5%)] border border-border rounded-lg overflow-hidden cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/50">
            <span className="w-3 h-3 rounded-full bg-destructive/80" />
            <span className="w-3 h-3 rounded-full bg-terminal-amber/80" />
            <span className="w-3 h-3 rounded-full bg-primary/80" />
            <span className="font-mono text-xs text-muted-foreground ml-2">kg@portfolio:~</span>
          </div>

          {/* Output area */}
          <div className="p-4 h-72 overflow-y-auto font-mono text-sm space-y-1 scrollbar-thin">
            {lines.map((line, i) => (
              <div key={i} className={line.type === "input" ? "text-terminal-cyan" : "text-muted-foreground"}>
                {line.type === "input" ? (
                  <>
                    <span className="text-terminal-green">visitor@kg</span>
                    <span className="text-terminal-dim">:</span>
                    <span className="text-terminal-cyan">~</span>
                    <span className="text-terminal-dim">$ </span>
                    {line.text}
                  </>
                ) : (
                  <span className="whitespace-pre-wrap">{line.text}</span>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center px-4 py-3 border-t border-border/50">
            <span className="font-mono text-sm text-terminal-green shrink-0">visitor@kg</span>
            <span className="font-mono text-sm text-terminal-dim shrink-0">:</span>
            <span className="font-mono text-sm text-terminal-cyan shrink-0">~</span>
            <span className="font-mono text-sm text-terminal-dim shrink-0">$&nbsp;</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              className="flex-1 bg-transparent font-mono text-sm text-foreground outline-none caret-primary"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
