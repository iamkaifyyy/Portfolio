"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(-100, { stiffness: 450, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 450, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      const button = target.closest("button");

      if (link) {
        setIsHovered(true);
        const href = link.getAttribute("href");
        if (href?.includes("github")) setHoverText("GitHub ↗");
        else if (href?.includes("x.com") || href?.includes("twitter")) setHoverText("Twitter ↗");
        else if (href?.includes("linkedin")) setHoverText("LinkedIn ↗");
        else if (href?.includes("instagram")) setHoverText("Instagram ↗");
        else if (href?.includes("mailto")) setHoverText("Contact");
        else if (href?.includes("resume")) setHoverText("Resume 📄");
        else setHoverText("Open ↗");
      } else if (button || target.classList.contains("cursor-pointer")) {
        setIsHovered(true);
        setHoverText("Select");
      } else {
        setIsHovered(false);
        setHoverText(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Dynamic Emerald Glowing Aura Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-400/20 to-blue-500/20 backdrop-blur-[2px] border border-emerald-500/30 shadow-lg shadow-emerald-500/10"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: isHovered ? -26 : -13,
          translateY: isHovered ? -26 : -13,
          width: isHovered ? 52 : 26,
          height: isHovered ? 52 : 26,
        }}
      />

      {/* Main Precision Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-zinc-900 dark:bg-white shadow-sm"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: -6,
          translateY: -6,
          scale: isHovered ? 0.4 : 1,
        }}
      />

      {/* Floating Hover Label Tag */}
      {isHovered && hoverText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7 }}
          className="fixed top-0 left-0 px-2 py-0.5 rounded-md bg-zinc-900 text-zinc-100 dark:bg-white dark:text-zinc-900 text-[10px] font-semibold tracking-wider uppercase shadow-xl whitespace-nowrap border border-zinc-700/40 dark:border-zinc-300/40"
          style={{
            x: mousePosition.x + 16,
            y: mousePosition.y + 12,
          }}
        >
          {hoverText}
        </motion.div>
      )}
    </div>
  );
}
