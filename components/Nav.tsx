"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { FileDown } from "lucide-react";
import { profile } from "@/app/content";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-tight text-text-primary hover:text-accent">
          AH<span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              className="font-mono text-sm text-text-secondary transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-accent/60 px-3 py-1.5 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
          >
            <FileDown className="h-4 w-4" />
            Résumé
          </a>
        </nav>
        <a
          href={profile.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded border border-accent/60 px-3 py-1.5 font-mono text-sm text-accent transition-colors hover:bg-accent/10 sm:hidden"
        >
          <FileDown className="h-4 w-4" />
          Résumé
        </a>
      </div>
    </header>
  );
}
