import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Briefcase, Heart, Award } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    period: "2021 – Present",
    title: "B.Sc. Computer Science",
    org: "University Name",
    desc: "Focused on software engineering, algorithms, and sustainable development. Active member of the CS society.",
  },
  {
    icon: Briefcase,
    period: "Summer 2023",
    title: "Software Development Intern",
    org: "Tech Company",
    desc: "Built internal tools using React and Node.js. Collaborated with a team of 5 engineers on agile sprints.",
  },
  {
    icon: Heart,
    period: "2022 – Present",
    title: "Community Tech Volunteer",
    org: "Local NGO",
    desc: "Teaching coding workshops and building digital tools for community empowerment programs.",
  },
  {
    icon: Award,
    period: "2022",
    title: "Research Assistant",
    org: "University Research Lab",
    desc: "Contributed to a data science research project analyzing urban sustainability patterns.",
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
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-border" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6">
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="pb-2">
                  <p className="font-mono text-xs text-primary">{item.period}</p>
                  <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm font-medium text-muted-foreground">{item.org}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
