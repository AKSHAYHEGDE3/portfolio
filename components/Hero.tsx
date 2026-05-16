"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileDown, Mail } from "lucide-react";
import { profile, social } from "@/app/content";

export default function Hero() {
  return (
    <section className="container-content pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid items-center gap-10 sm:grid-cols-[1fr_280px] sm:gap-14">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 font-mono text-sm text-accent"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-text-primary sm:text-6xl"
          >
            {profile.name}.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-2xl font-semibold tracking-tight text-text-secondary sm:text-4xl"
          >
            {profile.title}{" "}
            <span className="text-text-tertiary">at {profile.company}.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-accent px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
            >
              <FileDown className="h-4 w-4" />
              Download Résumé
            </a>
            <a
              href={social.email}
              className="inline-flex items-center gap-2 rounded border border-border px-5 py-3 font-mono text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-first mx-auto sm:order-last sm:mx-0"
        >
          <div className="group relative h-52 w-52 sm:h-[260px] sm:w-[260px]">
            <div className="absolute -inset-4 rounded-full bg-accent/15 blur-3xl transition-opacity group-hover:opacity-80" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-accent/50">
              <Image
                src="/akshay-portrait.jpg"
                alt={`${profile.name} portrait`}
                fill
                sizes="(min-width: 640px) 260px, 208px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
