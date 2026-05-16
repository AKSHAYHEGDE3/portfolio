import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { about, profile } from "@/app/content";

export default function About() {
  return (
    <AnimatedSection id="about" className="container-content py-20">
      <SectionHeading number="01" title="About" />
      <div className="grid items-start gap-10 sm:grid-cols-[1fr_220px]">
        <div className="space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg">
          {about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="mx-auto sm:mx-0">
          <div className="group relative h-52 w-52 sm:h-[220px] sm:w-[220px]">
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-lg border border-accent transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            <div className="relative h-full w-full overflow-hidden rounded-lg border border-border bg-surface">
              <Image
                src="/profile.avif"
                alt={`${profile.name} — ${profile.title} at ${profile.company}`}
                fill
                sizes="220px"
                className="object-cover transition-all duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
