import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, BookOpen, Globe, Lightbulb } from "lucide-react";

const cards = [
  { icon: User, title: "CS Student", desc: "Studying Computer Science with a passion for software engineering and innovation" },
  { icon: BookOpen, title: "Data Scientist", desc: "Exploring data analysis, machine learning, and AI with Python, Pandas & Power BI" },
  { icon: Globe, title: "Social Impact", desc: "Building tech for agriculture, health, and community development" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Turning complex challenges into elegant, user-friendly digital solutions" },
];

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
              From developing agricultural platforms like <span className="font-semibold text-foreground">FarmNet</span> to building health systems like <span className="font-semibold text-foreground">LYCA</span> and interactive learning tools, I bring creativity and purpose to every project. I'm driven by curiosity and a desire to make technology accessible and impactful.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {cards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="hover-lift card-shine rounded-lg border border-border bg-card p-4"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <h4 className="mb-1 text-sm font-semibold text-foreground">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
