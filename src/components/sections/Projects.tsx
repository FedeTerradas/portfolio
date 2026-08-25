"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CardSpotlight } from "@/components/aceternity/CardSpotlight";
import { otherProjects, type Project, type ProjectStatus } from "@/data/projects";
import { ArrowUpRight, CheckCircle2, X, FileText } from "lucide-react";

const statusStyles: Record<ProjectStatus, string> = {
  "En Producción": "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-400",
  "Beta": "border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-400",
  "Demo": "border-zinc-300 bg-zinc-100 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400",
};

const statusDot: Record<ProjectStatus, string> = {
  "En Producción": "bg-emerald-500",
  "Beta": "bg-amber-500",
  "Demo": "bg-zinc-400 dark:bg-zinc-500",
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
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
            / experiencia freelance
          </p>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-3xl">
            Proyectos desarrollados
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-500">
            Soluciones end-to-end para clientes reales, desde el relevamiento hasta el deploy.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <CardSpotlight className="flex h-full flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md p-1 text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200 transition-colors"
                      aria-label={`Ver ${project.title}`}
                      title="Abrir demo en vivo"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Status badge */}
                  <span
                    className={`mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs ${statusStyles[project.status]}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`}
                    />
                    {project.status}
                  </span>

                  {/* Short Description */}
                  <p className="mb-4 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                    {project.shortDescription}
                  </p>

                  {/* Role & Timeline */}
                  <div className="mb-4 space-y-0.5">
                    <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">{project.role}</p>
                    <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">{project.timeline}</p>
                  </div>
                </div>

                <div>
                  {/* View case study CTA button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mb-4 flex w-full items-center justify-between rounded-lg border border-zinc-200/80 bg-zinc-100/70 px-3 py-2 text-xs font-medium text-zinc-800 transition-all hover:border-zinc-300 hover:bg-zinc-200/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/80 cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-zinc-500" />
                      Ver más detalle
                    </span>
                    <span className="text-zinc-400 dark:text-zinc-500">→</span>
                  </button>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 border-t border-zinc-100 dark:border-zinc-800 pt-3">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-zinc-200 bg-zinc-100/80 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-400 font-mono text-[10px]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 md:p-8"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 rounded-full border border-zinc-200 bg-zinc-100 p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 md:text-2xl">
                    {selectedProject.title}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs ${statusStyles[selectedProject.status]}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${statusDot[selectedProject.status]}`}
                    />
                    {selectedProject.status}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-zinc-500">
                  {selectedProject.role} · {selectedProject.timeline}
                </p>
              </div>

              {/* Case Study Details */}
              <div className="space-y-6 text-sm">
                {/* Problem & Solution */}
                <div>
                  <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-zinc-500">
                    Problema y Solución
                  </h4>
                  <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div>
                    <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-500">
                      Funcionalidades Clave
                    </h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {selectedProject.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-500" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Impact */}
                {selectedProject.impact && (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">
                    <h4 className="mb-1 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-500">
                      Impacto y Resultados
                    </h4>
                    <p className="text-xs text-zinc-700 dark:text-zinc-300">
                      {selectedProject.impact}
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-zinc-500">
                    Stack Tecnológico
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-zinc-200 bg-zinc-100 font-mono text-xs text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-md border border-zinc-200 px-4 py-2 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
                >
                  Cerrar
                </button>
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-50 transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white shadow-xs"
                >
                  Abrir demo en vivo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
