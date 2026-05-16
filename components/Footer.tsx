import { profile } from "@/app/content";

export default function Footer() {
  return (
    <footer className="container-content border-t border-border py-8">
      <p className="text-center font-mono text-xs text-text-tertiary">
        Designed and built by {profile.name} · {new Date().getFullYear()} · Next.js & Tailwind on Vercel
      </p>
    </footer>
  );
}
