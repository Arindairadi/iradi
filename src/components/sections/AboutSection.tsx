import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, BookOpen, Globe, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="mb-2 text-center font-mono text-sm tracking-widest text-primary">ABOUT ME</h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Who I Am
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate Computer Science student and aspiring software developer with a deep curiosity for technology and its potential to drive positive change. My academic journey has equipped me with strong foundations in algorithms, data structures, and software engineering principles.
            </p>
            <p>
              I thrive on solving complex problems and building applications that make a difference. Whether it's crafting intuitive web experiences, analyzing data for meaningful insights, or exploring new frameworks, I bring enthusiasm and dedication to every project.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: User, title: "CS Student", desc: "Pursuing a degree in Computer Science with a focus on sustainability" },
              { icon: BookOpen, title: "Lifelong Learner", desc: "Always exploring new technologies and methodologies" },
              { icon: Globe, title: "Social Impact", desc: "Passionate about using tech for community development" },
              { icon: Lightbulb, title: "Problem Solver", desc: "Analytical thinker who loves tackling challenges" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-card p-4">
                <item.icon className="mb-2 h-5 w-5 text-primary" />
                <h4 className="mb-1 text-sm font-semibold text-foreground">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
