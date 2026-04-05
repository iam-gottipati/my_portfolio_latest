import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background scroll-smooth">
    <Navbar />
    <HeroSection />
    <ProjectsSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
    <footer className="py-8 text-center font-mono text-xs text-terminal-dim border-t border-border">
      © 2026 Koteswararao Gottipati — Built with passion for DevOps
    </footer>
  </div>
);

export default Index;
