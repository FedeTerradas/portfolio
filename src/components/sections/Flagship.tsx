"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MacbookScroll } from "@/components/aceternity/MacbookScroll";
import { flagshipProject } from "@/data/projects";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Flagship() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 px-4 py-24 md:px-6 transition-colors duration-200">
      <div className="mx-auto max-w-5xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
            / proyecto insignia
          </p>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-3xl">
            {flagshipProject.title}
          </h2>
          <p className="mt-2 font-mono text-sm text-zinc-500">
            {flagshipProject.role} · {flagshipProject.timeline}
          </p>
        </motion.div>

        {/* MacBook Scroll — full width, centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <MacbookScroll
            src="/aomori-screenshot.png"
            showGradient
          />
        </motion.div>

        {/* Content below — 2 cols on desktop */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* Left: long description + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {flagshipProject.longDescription}
              </p>
            </div>
            <a
              href={flagshipProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition-all hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
            >
              Ver sitio en vivo
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          {/* Right: features + impact + stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Features */}
            <div>
              <p className="mb-3 font-mono text-xs text-zinc-500">
                Features principales
              </p>
              <ul className="space-y-2">
                {flagshipProject.features?.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                  >
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-500" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 dark:border-emerald-900/40 dark:bg-emerald-950/20 px-4 py-3">
              <p className="mb-1 font-mono text-xs text-emerald-700 dark:text-emerald-500 font-medium">Impacto</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">{flagshipProject.impact}</p>
            </div>

            {/* Stack */}
            <div>
              <p className="mb-2 font-mono text-xs text-zinc-500">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {flagshipProject.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 font-mono text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
