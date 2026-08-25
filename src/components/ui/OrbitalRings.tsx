"use client";
import { motion } from "framer-motion";

interface Ring {
  radius: number;
  duration: number;
  direction: 1 | -1;
  strokeOpacity: number;
  dotCount: number;
  dotSize: number;
  delay: number;
}

const rings: Ring[] = [
  { radius: 60, duration: 12, direction: 1, strokeOpacity: 0.2, dotCount: 2, dotSize: 4, delay: 0 },
  { radius: 100, duration: 18, direction: -1, strokeOpacity: 0.15, dotCount: 3, dotSize: 3.5, delay: 0.2 },
  { radius: 140, duration: 25, direction: 1, strokeOpacity: 0.12, dotCount: 2, dotSize: 3, delay: 0.4 },
  { radius: 175, duration: 30, direction: -1, strokeOpacity: 0.08, dotCount: 4, dotSize: 2.5, delay: 0.6 },
];

const SIZE = 400;
const CENTER = SIZE / 2;

export function OrbitalRings() {
  return (
    <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px]">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter */}
          <filter id="dot-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Center glow */}
          <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" className="[stop-color:theme(colors.zinc.400)]" stopOpacity="0.25" />
            <stop offset="100%" className="[stop-color:theme(colors.zinc.400)]" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle center glow */}
        <circle cx={CENTER} cy={CENTER} r="60" fill="url(#center-glow)" />

        {/* Center dot */}
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r="4"
          className="fill-zinc-400 dark:fill-zinc-500"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        {/* Rings + orbiting dots */}
        {rings.map((ring, ringIdx) => (
          <g key={ringIdx}>
            {/* Ring circle (static, subtle stroke) */}
            <motion.circle
              cx={CENTER}
              cy={CENTER}
              r={ring.radius}
              fill="none"
              className="stroke-zinc-300 dark:stroke-zinc-700"
              strokeWidth="1.5"
              strokeOpacity={ring.strokeOpacity}
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: ring.delay, ease: "easeOut" }}
            />

            {/* Orbiting dots group */}
            <motion.g
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 * ring.direction }}
              transition={{
                duration: ring.duration,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ originX: `${CENTER}px`, originY: `${CENTER}px` }}
            >
              {Array.from({ length: ring.dotCount }).map((_, dotIdx) => {
                const angle = (360 / ring.dotCount) * dotIdx;
                const rad = (angle * Math.PI) / 180;
                const x = Math.round(CENTER + ring.radius * Math.cos(rad));
                const y = Math.round(CENTER + ring.radius * Math.sin(rad));

                return (
                  <motion.circle
                    key={dotIdx}
                    cx={x}
                    cy={y}
                    r={ring.dotSize}
                    className="fill-zinc-400 dark:fill-zinc-500"
                    filter="url(#dot-glow)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: ring.delay + dotIdx * 0.5,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </motion.g>
          </g>
        ))}

        {/* Crosshair lines through center */}
        <motion.line
          x1={CENTER - 12}
          y1={CENTER}
          x2={CENTER + 12}
          y2={CENTER}
          className="stroke-zinc-300 dark:stroke-zinc-700"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.line
          x1={CENTER}
          y1={CENTER - 12}
          x2={CENTER}
          y2={CENTER + 12}
          className="stroke-zinc-300 dark:stroke-zinc-700"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </svg>

      {/* Floating labels around the visual */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -right-2 top-1/4 font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-600"
      >
        NEXT.JS
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -left-2 top-2/3 font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-600"
      >
        REACT
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute right-8 bottom-4 font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-600"
      >
        TYPESCRIPT
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute left-8 top-4 font-mono text-[10px] tracking-wider text-zinc-400 dark:text-zinc-600"
      >
        NODE.JS
      </motion.div>
    </div>
  );
}
