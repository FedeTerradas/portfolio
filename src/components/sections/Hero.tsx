"use client";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/aceternity/Spotlight";
import { OrbitalRings } from "@/components/ui/OrbitalRings";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-950 pt-14 transition-colors duration-200">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="rgba(161,161,170,0.25)"
      />

      <div className="relative z-10 mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-2 md:px-6">
        {/* Left column — text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center"
        >
          <motion.p
            variants={item}
            className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500"
          >
            Córdoba, Argentina
          </motion.p>

          <motion.h1
            variants={item}
            className="mb-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl lg:text-6xl"
          >
            Federico
            <br />
            <span className="text-zinc-500 dark:text-zinc-400">Terradas</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-4 font-mono text-base text-zinc-700 dark:text-zinc-400 md:text-lg"
          >
            Analista en Sistemas &amp; Developer
          </motion.p>

          <motion.p
            variants={item}
            className="mb-8 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-500"
          >
            Construyendo aplicaciones robustas de extremo a extremo,
            desde la idea hasta el deploy.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition-all hover:bg-zinc-800 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Ver experiencia →
            </a>
            <a
              href="#contact"
              className="rounded-md border border-zinc-300 bg-transparent px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
            >
              Contacto
            </a>
          </motion.div>
        </motion.div>

        {/* Right column — orbital rings visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex md:items-center md:justify-center"
        >
          <OrbitalRings />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="h-4 w-px bg-zinc-300 dark:bg-zinc-700"
        />
      </motion.div>
    </section>
  );
}
