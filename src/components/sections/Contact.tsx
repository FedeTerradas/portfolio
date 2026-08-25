"use client";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const links = [
  {
    label: "GitHub",
    href: "https://github.com/FedeTerradas",
    icon: GithubIcon,
    handle: "@FedeTerradas",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/federicoterradas/",
    icon: LinkedinIcon,
    handle: "federicoterradas",
  },
  {
    label: "Email",
    href: "mailto:federico.terradas04@gmail.com",
    icon: Mail,
    handle: "federico.terradas04@gmail.com",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 px-4 py-24 md:px-6 transition-colors duration-200"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
            / contacto
          </p>
          <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-3xl">
            Hablemos
          </h2>
          <p className="mx-auto mb-10 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            Disponible para nuevos desafíos y proyectos. Si tenés una idea o
            necesitás un developer end-to-end, escribime.
          </p>

          {/* CV Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mb-12 inline-block"
          >
            <a
              href="/CV_Federico_Terradas.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-50 shadow-md transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:shadow-[0_0_30px_rgba(255,255,255,0.06)] dark:hover:bg-white"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </motion.div>

          {/* Social links */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex w-full max-w-xs items-center gap-3 rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-left transition-all hover:border-zinc-300 hover:bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 md:w-auto shadow-xs"
                >
                  <Icon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                  <div>
                    <p className="text-xs font-medium text-zinc-900 dark:text-zinc-200">
                      {link.label}
                    </p>
                    <p className="font-mono text-xs text-zinc-500">
                      {link.handle}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
