"use client";
import { useEffect, useState, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const FIRST_NAME = "FEDERICO";
const LAST_NAME = "TERRADAS";
const DURATION = 2.8; // seconds

function CounterDisplay({ value }: { value: ReturnType<typeof useMotionValue<number>> }) {
  const [display, setDisplay] = useState("00");

  useEffect(() => {
    const unsubscribe = value.on("change", (v: number) => {
      setDisplay(String(Math.round(v)).padStart(2, "0"));
    });
    return unsubscribe;
  }, [value]);

  return <span className="font-mono text-sm text-zinc-600 md:text-base">{display}</span>;
}

export function Preloader() {
  const [show, setShow] = useState<boolean | null>(null); // null = not yet determined
  const [exiting, setExiting] = useState(false);
  const count = useMotionValue(0);
  const progress = useTransform(count, [0, 100], ["0%", "100%"]);

  // Determine if we should show on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const seen = sessionStorage.getItem("preloader-seen");
      setShow(!seen);
    }
  }, []);

  // Start animation once we know we should show
  const startAnimation = useCallback(() => {
    if (show !== true) return;

    // Reset count in case of re-mount
    count.set(0);

    const controls = animate(count, 100, {
      duration: DURATION,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        setTimeout(() => {
          setExiting(true);
          sessionStorage.setItem("preloader-seen", "true");
          setTimeout(() => setShow(false), 900);
        }, 300);
      },
    });

    document.body.style.overflow = "hidden";

    return () => {
      controls.stop();
    };
  }, [show, count]);

  useEffect(() => {
    const cleanup = startAnimation();
    return cleanup;
  }, [startAnimation]);

  // Restore scroll when preloader hides
  useEffect(() => {
    if (show === false) {
      document.body.style.overflow = "";
    }
  }, [show]);

  // Don't render anything until we know, or if already seen
  if (show !== true) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950"
        animate={
          exiting
            ? {
                clipPath: [
                  "inset(0% 0% 0% 0%)",
                  "inset(50% 0% 50% 0%)",
                ],
              }
            : { clipPath: "inset(0% 0% 0% 0%)" }
        }
        transition={
          exiting
            ? { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
            : {}
        }
      >
        {/* ── Name reveal ── */}
        <div className="relative flex flex-col items-center gap-1 md:gap-2">
          {/* First name */}
          <div className="flex overflow-hidden">
            {FIRST_NAME.split("").map((char, i) => (
              <motion.span
                key={`f-${i}`}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block text-4xl font-bold tracking-[0.15em] text-zinc-100 md:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Last name */}
          <div className="flex overflow-hidden">
            {LAST_NAME.split("").map((char, i) => (
              <motion.span
                key={`l-${i}`}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.7,
                  delay: 0.35 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block text-4xl font-bold tracking-[0.15em] text-zinc-500 md:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* ── Progress bar ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-6 h-[2px] w-48 overflow-hidden rounded-full bg-zinc-800 md:mt-8 md:w-64"
          >
            <motion.div
              className="h-full bg-zinc-400"
              style={{ width: progress }}
            />
          </motion.div>
        </div>

        {/* ── Counter (bottom-right) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
        >
          <CounterDisplay value={count} />
        </motion.div>

        {/* ── Subtle label (bottom-left) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="absolute bottom-8 left-8 md:bottom-12 md:left-12"
        >
          <span className="font-mono text-xs tracking-widest text-zinc-700 uppercase">
            Portfolio · 2026
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
