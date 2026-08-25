"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#projects" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "border-b border-zinc-200/80 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-sm font-semibold text-zinc-900 transition-colors hover:text-black dark:text-zinc-100 dark:hover:text-white"
          >
            <span className="text-zinc-400 dark:text-zinc-500">~/</span>federico.terradas
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNav(link.href)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm transition-colors",
                  active === link.href
                    ? "font-medium text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                )}
              >
                {link.label}
              </a>
            ))}

            {/* Theme toggle */}
            <div className="ml-1">
              <ThemeToggle />
            </div>

            {/* Visual separator */}
            <div className="mx-2 h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

            {/* Primary CTA (Always last on the right) */}
            <a
              href="#contact"
              className="rounded-md border border-zinc-300 bg-zinc-100 px-3.5 py-1.5 text-sm font-medium text-zinc-900 transition-all hover:border-zinc-400 hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800 shadow-xs"
            >
              Contacto →
            </a>
          </nav>

          {/* Mobile right items (Toggle + Hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block h-px w-5 bg-zinc-700 dark:bg-zinc-400 origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-px w-5 bg-zinc-700 dark:bg-zinc-400"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block h-px w-5 bg-zinc-700 dark:bg-zinc-400 origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-14 z-40 border-b border-zinc-200 bg-zinc-50/95 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95 md:hidden"
          >
            <nav className="flex flex-col px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNav(link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-zinc-200 py-3 text-sm text-zinc-700 transition-colors hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100 last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => handleNav("#contact")}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-2 rounded-md border border-zinc-300 bg-zinc-100 py-2.5 text-center text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                Contacto →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
