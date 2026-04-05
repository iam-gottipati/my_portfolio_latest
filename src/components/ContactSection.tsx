import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const ref = useScrollReveal();
  return (
  <section id="contact" className="py-24 px-6 border-t border-border" ref={ref}>
    <div className="max-w-3xl mx-auto text-center">
      <div className="font-mono text-sm text-terminal-dim mb-2">
        <span className="text-terminal-green">$</span> ./connect.sh
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
        Let's Connect
      </h2>
      <p className="text-muted-foreground mb-10">
        Open to DevOps Engineer roles and cloud engineering opportunities.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="mailto:iamgottipati4@gmail.com"
          className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-md hover:opacity-90 transition-opacity border-glow">
          iamgottipati4@gmail.com
        </a>
        <a href="tel:8498811891"
          className="px-6 py-3 border border-border text-foreground font-mono text-sm rounded-md hover:border-primary hover:text-primary transition-colors">
          +91 8498811891
        </a>
      </div>
    </div>
  </section>
  );
};

export default ContactSection;
