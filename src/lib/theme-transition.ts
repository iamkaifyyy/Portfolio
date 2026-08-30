"use client";

import React from "react";

export function toggleThemeWithTransition(
  event: React.MouseEvent<HTMLElement>,
  targetTheme: "light" | "dark",
  setTheme: (theme: string) => void
) {
  if (
    typeof document === "undefined" ||
    !document.startViewTransition ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    setTheme(targetTheme);
    return;
  }

  // Calculate origin from the exact center of the theme toggle button
  const rect = event.currentTarget.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const isDarkTarget = targetTheme === "dark";

  const transition = document.startViewTransition(() => {
    setTheme(targetTheme);
  });

  transition.ready.then(() => {
    if (isDarkTarget) {
      // Dark mode: Expand circle from button center to cover page
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 550,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    } else {
      // Light mode: Shrink circle back into button center (recover all)
      document.documentElement.animate(
        {
          clipPath: [
            `circle(${endRadius}px at ${x}px ${y}px)`,
            `circle(0px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 550,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-old(root)",
        }
      );
    }
  });
}
