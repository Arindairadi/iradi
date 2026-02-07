import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FarmNet",
    description: "An innovative digital platform designed to empower farmers by connecting them to critical agricultural resources, information, and markets — bridging the gap between farmers and opportunity.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Arindairadi/Farmnet",
  },
  {
    title: "LYCA Health System",
    description: "A web-based health system providing accessible healthcare information and services through a modern digital interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Arindairadi/LYCA",
  },
  {
    title: "Sky Pulse",
    description: "A web-based application that provides real-time weather updates and location-based forecasts to keep users informed about current conditions.",
    tech: ["JavaScript", "API Integration", "CSS"],
    github: "https://github.com/Arindairadi/sky-pulse",
  },
  {
    title: "Student Management System",
    description: "A comprehensive system for managing student records, enrollment, and academic data with an intuitive admin interface.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Arindairadi/student-managment-system",
  },
  {
    title: "Multiplication Quiz Game",
    description: "An interactive quiz game perfect for learners of all ages to enhance their math abilities through quick and engaging quizzes.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Arindairadi/multiplication-quiz-game",
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
