"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const stackCategories = [
  {
    label: "Backend & Cloud",
    items: ["Supabase", "Firebase", "Vercel", "Railway"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Bases de Datos",
    items: ["MongoDB Atlas", "Firestore", "PostgreSQL"],
  },
  {
    label: "Herramientas",
    items: ["GitHub", "Jira", "Obsidian", "Figma"],
  },
  {
    label: "Herramientas de IA",
    items: ["MCP Servers", "Antigravity", "Skills", "Cursor"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 px-4 py-24 md:px-6 transition-colors duration-200"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
            / sobre mí
          </p>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-3xl">
            Desarrollo end-to-end
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Soy{" "}
              <span className="text-zinc-900 dark:text-zinc-200 font-medium">
                Analista en Sistemas
              </span>{" "}
              enfocado en el desarrollo end-to-end de aplicaciones, apoyándome
              en herramientas de IA para optimizar procesos.
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Me encargo del ciclo de vida completo: desde el{" "}
              <span className="text-zinc-900 dark:text-zinc-200 font-medium">
                relevamiento de requerimientos
              </span>{" "}
              con el cliente, asistiéndolo en cada decisión técnica, hasta la{" "}
              <span className="text-zinc-900 dark:text-zinc-200 font-medium">
                implementación, pruebas finales y despliegue continuo
              </span>{" "}
              para entregar un producto escalable.
            </p>
            <div className="mt-8 flex gap-3">
              <div className="rounded-lg border border-zinc-200 bg-white/80 dark:border-zinc-800 dark:bg-zinc-900/50 px-4 py-3 text-center shadow-xs">
                <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100">4+</p>
                <p className="mt-0.5 font-mono text-xs text-zinc-500">Proyectos</p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white/80 dark:border-zinc-800 dark:bg-zinc-900/50 px-4 py-3 text-center shadow-xs">
                <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100">2025</p>
                <p className="mt-0.5 font-mono text-xs text-zinc-500">Desde</p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white/80 dark:border-zinc-800 dark:bg-zinc-900/50 px-4 py-3 text-center shadow-xs">
                <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100">100%</p>
                <p className="mt-0.5 font-mono text-xs text-zinc-500">Freelance</p>
              </div>
            </div>
          </motion.div>

          {/* Stack grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stackCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-xl border border-zinc-200 bg-white/60 dark:border-zinc-800 dark:bg-zinc-900/30 p-4 shadow-xs"
              >
                <p className="mb-3 font-mono text-xs text-zinc-500">
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-zinc-200 bg-zinc-100 text-zinc-700 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100 font-mono text-xs transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
