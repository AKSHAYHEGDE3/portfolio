import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { skills } from "@/app/content";

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="container-content py-20">
      <SectionHeading number="04" title="Skills" />
      <dl className="grid gap-6 sm:grid-cols-2">
        {skills.map((g) => (
          <div
            key={g.group}
            className="rounded-lg border border-border bg-surface/60 p-5"
          >
            <dt className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
              {g.group}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded border border-border px-2.5 py-1 font-mono text-xs text-text-secondary"
                >
                  {it}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </AnimatedSection>
  );
}
