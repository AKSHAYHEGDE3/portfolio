import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { roles } from "@/app/content";

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="container-content py-20">
      <SectionHeading number="02" title="Experience" />
      <ol className="relative space-y-10 border-l border-border pl-6">
        {roles.map((role, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border border-accent bg-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-text-primary">
                {role.title}{" "}
                <span className="text-text-tertiary">@ {role.company}</span>
              </h3>
              <span className="font-mono text-xs text-text-tertiary">
                {role.start} – {role.end}
              </span>
            </div>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-secondary sm:text-base">
              {role.bullets.map((b, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </AnimatedSection>
  );
}
