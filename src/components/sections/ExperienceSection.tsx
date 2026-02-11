import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Briefcase, Heart, Award } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    period: "2021 – Present",
    title: "B.Sc. Computer Science",
    org: "University",
    desc: "Focused on software engineering, algorithms, data science, and sustainable development. Active member of the CS society.",
  },
  {
    icon: Briefcase,
    period: "2023 – Present",
    title: "Software Developer & Data Scientist",
    org: "Freelance / Open Source",
    desc: "Building full-stack web applications and data-driven solutions. Created platforms like FarmNet and LYCA Health System.",
  },
  {
    icon: Heart,
    period: "2022 – Present",
    title: "Community Tech Volunteer",
    org: "Social Impact Projects",
    desc: "Teaching coding workshops and building digital tools for community empowerment — focusing on agriculture and health.",
  },
  {
    icon: Award,
    period: "2022 – Present",
    title: "Data Science & Research",
    org: "Academic & Personal Projects",
    desc: "Applying machine learning and data analysis to real-world problems using Python, Pandas, and Power BI.",
  },
];

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="bg-muted/50 py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="mb-2 text-center font-mono text-sm tracking-widest text-primary">EXPERIENCE</h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
          My Journey
        </h3>
        <div className="relative">
          <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex gap-6"
              >
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card shadow-sm">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="pb-2">
                  <p className="font-mono text-xs text-primary">{item.period}</p>
                  <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm font-medium text-muted-foreground">{item.org}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
