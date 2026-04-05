import { useState } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-primary font-semibold text-glow">
          KG<span className="text-terminal-dim">_</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground font-mono text-sm">
          {open ? "[x]" : "[=]"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
