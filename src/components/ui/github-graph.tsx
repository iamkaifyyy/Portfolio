"use client";

import { GitHubCalendar } from "react-github-calendar";

export function GithubGraph() {
  const explicitTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section className="w-full mt-12 mb-28 flex flex-col items-center justify-center">
      <div className="w-full p-6 md:p-8 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 backdrop-blur-sm shadow-xs flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-5">
          <svg className="w-4 h-4 fill-current text-zinc-900 dark:text-zinc-100" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <h3 className="font-semibold text-xs md:text-sm text-zinc-900 dark:text-zinc-100 tracking-tight">
            Contributions Activity
          </h3>
        </div>

        <div className="w-full overflow-x-auto flex justify-center py-1">
          <GitHubCalendar
            username="iamkaifyyy"
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            theme={explicitTheme}
            colorScheme="light"
          />
        </div>
      </div>
    </section>
  );
}
