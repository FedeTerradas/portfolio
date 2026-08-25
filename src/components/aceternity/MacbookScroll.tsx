"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface MacbookScrollProps {
  src: string;
  showGradient?: boolean;
  className?: string;
}

export function MacbookScroll({ src, showGradient, className }: MacbookScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.3"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.7], [-30, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative mx-auto flex w-full max-w-3xl flex-col items-center",
        className
      )}
    >
      {/* Laptop wrapper — perspective container */}
      <div
        className="relative w-full"
        style={{ perspective: "1000px", perspectiveOrigin: "50% 40%" }}
      >
        {/* Lid / Screen */}
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            opacity,
            transformOrigin: "bottom center",
            transformStyle: "preserve-3d",
          }}
          className="relative mx-auto overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-950 shadow-[0_0_80px_rgba(0,0,0,0.8)]"
        >
          {/* Screen glass reflection */}
          <div className="absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-white/[0.04]" />
          {/* Camera notch */}
          <div className="absolute left-1/2 top-2 z-20 h-2.5 w-14 -translate-x-1/2 rounded-full bg-zinc-900" />
          {/* Screenshot */}
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt="Aomori Store — vista previa"
              className="block w-full rounded-2xl object-cover object-top"
              style={{ minHeight: "420px", maxHeight: "520px" }}
            />
          ) : (
            <div className="flex min-h-[420px] items-center justify-center bg-zinc-900">
              <span className="font-mono text-sm text-zinc-600">aomoristore.com.ar</span>
            </div>
          )}
        </motion.div>

        {/* Base — static */}
        <div className="mx-auto mt-0 h-4 w-[90%] rounded-b-xl bg-gradient-to-b from-zinc-700 to-zinc-800" />
        <div className="mx-auto h-3 w-[95%] rounded-b-xl bg-zinc-900 shadow-lg" />
        {/* Trackpad */}
        <div className="mx-auto mt-2 h-5 w-20 rounded-md bg-zinc-800/80" />
      </div>

      {showGradient && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-50 dark:from-[#09090b] to-transparent" />
      )}
    </div>
  );
}
