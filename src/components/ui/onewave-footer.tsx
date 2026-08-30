import React from "react";

export function OnewaveFooter() {
  return (
    <footer className="relative w-full bg-white dark:bg-zinc-950 overflow-hidden px-2 md:px-16 transition-colors">
      {/* Brand block - aligned with max-w-2xl portfolio layout */}
    
      {/* Giant watermark wordmark, bottom-centered with padding */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none w-full flex justify-center pb-8 pt-16"
      >
        <span
          className="font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-gray-300 via-gray-100 to-white dark:from-zinc-800 dark:via-zinc-900/60 dark:to-zinc-950 text-center transition-colors"
          style={{
            fontSize: "clamp(3.5rem, 16vw, 12rem)",
          }}
        >
          Kaifyyy
        </span>
      </div>
    </footer>
  );
}

export default OnewaveFooter;
