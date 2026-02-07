import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Trophy, Star } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Dean's List", desc: "Recognized for academic excellence — Fall 2022 & Spring 2023" },
  { icon: Award, title: "Hackathon Winner", desc: "1st place at University Hackathon 2023 — Built an accessibility tool" },
  { icon: Star, title: "AWS Cloud Practitioner", desc: "Amazon Web Services — Certified Cloud Practitioner" },
  { icon: Award, title: "Google IT Support", desc: "Google Professional Certificate — IT Support Specialization" },
];

export default function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="mb-2 text-center font-mono text-sm tracking-widest text-primary">ACHIEVEMENTS</h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Certifications & Awards
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <a.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{a.title}</h4>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
