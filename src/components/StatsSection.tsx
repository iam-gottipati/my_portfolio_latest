import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 4, suffix: "+", label: "Hands-on projects" },
  { value: 12, suffix: "+", label: "DevOps tools used" },
  { value: 96, suffix: "%", label: "Pre-University score" },
  { value: 2026, suffix: "", label: "B.Tech graduate" },
];

const useCountUp = (target: number, active: boolean) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return value;
};

const StatCard = ({ s, active }: { s: typeof stats[number]; active: boolean }) => {
  const value = useCountUp(s.value, active);
  return (
    <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
      <div className="font-display text-3xl md:text-4xl font-bold text-primary text-glow">
        {value}{s.suffix}
      </div>
      <div className="font-mono text-xs text-muted-foreground mt-2">{s.label}</div>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setActive(true);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="px-6 pb-8" ref={ref}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.label} s={s} active={active} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
