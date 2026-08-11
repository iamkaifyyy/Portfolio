"use client";

import { motion, SpringOptions, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
import { RefObject } from "react";

export type ScrollProgressProps = {
  className?: string;
  springOptions?: SpringOptions;
  containerRef?: RefObject<HTMLDivElement | null>;
};

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

export function ScrollProgress({
  className,
  springOptions,
  containerRef,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const scaleX = useSpring(scrollYProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...(springOptions ?? {}),
  });

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 h-1 origin-left z-50 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500",
        className
      )}
      style={{
        scaleX,
      }}
    />
  );
}
