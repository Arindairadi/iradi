import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack web application with product listings, cart functionality, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for visualizing and analyzing large datasets with real-time filtering.",
    tech: ["Python", "Pandas", "D3.js", "Flask"],
    github: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates, user authentication, and team workspaces.",
    tech: ["React", "TypeScript", "Firebase"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Community Impact Tracker",
    description: "Platform connecting volunteers with local projects and tracking social impact metrics.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="mb-2 text-center font-mono text-sm tracking-widest text-primary">PROJECTS</h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
          What I've Built
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md hover:border-primary/30"
            >
              <h4 className="mb-2 text-lg font-semibold text-foreground">{p.title}</h4>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t} variant="outline" className="font-mono text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1 h-3.5 w-3.5" />
                    Code
                  </a>
                </Button>
                {p.demo && (
                  <Button size="sm" asChild>
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3.5 w-3.5" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
