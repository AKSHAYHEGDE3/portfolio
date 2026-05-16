import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { profile, social } from "@/app/content";

const links = [
  { label: "Email", href: social.email, icon: Mail, external: false },
  { label: "LinkedIn", href: social.linkedin, icon: Linkedin, external: true },
  { label: "GitHub", href: social.github, icon: Github, external: true },
  { label: "Twitter / X", href: social.twitter, icon: Twitter, external: true },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="container-content py-20">
      <SectionHeading number="05" title="Get in touch" />
      <div className="max-w-2xl">
        <p className="mb-8 text-base leading-relaxed text-text-secondary sm:text-lg">
          I&apos;m open to senior full-stack roles (frontend, backend, or both) — remote, hybrid, or onsite. The
          quickest way to reach me is email; I usually reply within a day.
        </p>
        <a
          href={social.email}
          className="mb-10 inline-flex items-center gap-2 rounded border border-accent px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
        >
          <Mail className="h-4 w-4" />
          {profile.email}
        </a>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {links.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 rounded border border-border px-4 py-3 font-mono text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
