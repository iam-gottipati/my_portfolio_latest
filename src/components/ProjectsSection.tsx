const projects = [
  {
    title: "Dockerized Java App Deployment",
    tag: "Docker",
    points: [
      "Containerized a Java Spring Boot application using Docker",
      "Created Dockerfile to build and run the application",
      "Used Docker Compose for multi-container setup",
      "Optimized image size using multi-stage builds",
    ],
  },
  {
    title: "CI/CD Pipeline using Jenkins",
    tag: "Jenkins",
    points: [
      "Installed and configured Jenkins on Linux server",
      "Built CI/CD pipeline to automate build and deployment",
      "Integrated GitHub with Jenkins for automatic triggers",
      "Deployed application to Docker container after successful build",
    ],
  },
  {
    title: "Kubernetes Deployment on AWS",
    tag: "K8s + AWS",
    points: [
      "Launched EC2 instance and installed Kubernetes cluster",
      "Deployed containerized app using Deployment & Service YAML",
      "Managed scaling using ReplicaSets",
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="font-mono text-sm text-terminal-dim mb-2">
        <span className="text-terminal-green">$</span> ls ./projects
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <span className="inline-block font-mono text-xs px-2 py-1 rounded bg-secondary text-terminal-amber mb-4">
              {p.tag}
            </span>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <ul className="space-y-2">
              {p.points.map((pt, j) => (
                <li key={j} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-terminal-green mt-0.5 shrink-0">▸</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
