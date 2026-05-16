import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { projects } from "@/app/content";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="container-content py-20">
      <SectionHeading number="03" title="Projects" />
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <article
            key={i}
            className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-text-primary">
                {p.caseStudy ? (
                  <Link
                    href={p.caseStudy}
                    className="inline-flex items-center gap-2 transition-colors group-hover:text-accent"
                  >
                    {p.title}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ) : (
                  p.title
                )}
              </h3>
              <div className="flex items-center gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                    className="text-text-tertiary transition-colors hover:text-accent"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="text-text-tertiary transition-colors hover:text-accent"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-text-secondary sm:text-base">{p.blurb}</p>
            <ul className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-text-tertiary"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
