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
              I'm Arinda Iradi — a Computer Science student, software developer, and data scientist passionate about leveraging technology to solve real-world problems. I enjoy building full-stack web applications, analyzing data for actionable insights, and creating digital tools that empower communities.
            </p>
            <p>
              From developing agricultural platforms like FarmNet to building health systems and interactive learning tools, I bring creativity and purpose to every project. I'm driven by curiosity and a desire to make technology accessible and impactful.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: User, title: "CS Student", desc: "Studying Computer Science with a passion for software engineering" },
              { icon: BookOpen, title: "Data Scientist", desc: "Exploring data analysis, machine learning, and AI" },
              { icon: Globe, title: "Social Impact", desc: "Building tech for agriculture, health, and community development" },
              { icon: Lightbulb, title: "Problem Solver", desc: "Turning complex challenges into elegant digital solutions" },
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
