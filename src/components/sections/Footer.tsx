import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Arinda Iradi. Built with passion & purpose.
        </p>
        <div className="flex gap-3">
          {[
            { icon: Github, href: "https://github.com/Arindairadi", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/arindairadi", label: "LinkedIn" },
            { icon: Mail, href: "mailto:iradiarinda63@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-110"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
