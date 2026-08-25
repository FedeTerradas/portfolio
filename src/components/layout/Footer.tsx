export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 px-4 py-6 transition-colors duration-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">
        <span className="font-mono text-xs text-zinc-500">
          © {year} Federico Terradas
        </span>
        <span className="font-mono text-xs text-zinc-500 dark:text-zinc-600">
          Hecho con Next.js · Tailwind CSS · Aceternity UI
        </span>
      </div>
    </footer>
  );
}
