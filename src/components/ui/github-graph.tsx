"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubContributionsResponse {
  total?: {
    [key: string]: number;
    lastYear: number;
  };
  contributions: ContributionDay[];
}

export function GitHubContributionsGraph({
  username = "iamkaifyyy",
}: {
  username?: string;
}) {
  const [data, setData] = useState<GitHubContributionsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        if (!response.ok) throw new Error("Failed to fetch contributions");
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load");
      } finally {
        setLoading(false);
      }
    };
    fetchContributions();
  }, [username]);

  if (loading) {
    return (
      <div className="relative w-full max-w-2xl mx-auto rounded-2xl bg-zinc-50/60 p-5 ring-1 ring-zinc-200/60 dark:bg-zinc-900/40 dark:ring-zinc-800/60 my-8">
        <h3 className="mb-4 text-lg font-medium">GitHub Contributions</h3>
        <div className="flex items-center gap-2 mb-4">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
          >
            @{username}
            <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
          </a>
        </div>
        <div className="grid grid-cols-53 gap-1">
          {Array.from({ length: 371 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square w-full rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return null;
  }

  const contributions = data.contributions;

  // Filter contributions from March 1, 2025 to current date
  const march2025 = new Date("2025-02-02");
  const today = new Date();
  today.setHours(23, 59, 59, 999); // End of today

  const filteredContributions = contributions.filter((contrib) => {
    const contribDate = new Date(contrib.date);
    return contribDate >= march2025 && contribDate <= today;
  });

  // Create a map of date to contribution for quick lookup
  const contribMap = new Map<
    string,
    { date: string; count: number; level: number }
  >();
  filteredContributions.forEach((contrib) => {
    contribMap.set(contrib.date, contrib);
  });

  // Set date range to March 1, 2025 to today
  const firstDate = new Date(march2025);
  const lastDate = new Date(today);

  // Calculate the first Sunday (GitHub starts weeks on Sunday)
  // Start from March 1, 2025
  const firstSunday = new Date(march2025);
  const firstDayOfWeek = firstSunday.getDay();
  firstSunday.setDate(firstSunday.getDate() - firstDayOfWeek);

  // Calculate total days and weeks from March 2025 to today
  const totalDays = Math.ceil(
    (lastDate.getTime() - firstSunday.getTime()) / (1000 * 60 * 60 * 24)
  );
  const totalWeeks = Math.ceil(totalDays / 7);

  // Build weeks array (each week is a column with 7 days)
  const weeks: Array<
    Array<{ date: string; count: number; level: number } | null>
  > = [];

  for (let weekIndex = 0; weekIndex < totalWeeks; weekIndex++) {
    const week: Array<{
      date: string;
      count: number;
      level: number;
    } | null> = [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const currentDate = new Date(firstSunday);
      currentDate.setDate(currentDate.getDate() + weekIndex * 7 + dayIndex);

      // Check if this date is within our range
      const dateStr = currentDate.toISOString().split("T")[0];

      if (contribMap.has(dateStr)) {
        week.push(contribMap.get(dateStr)!);
      } else if (currentDate >= firstDate && currentDate <= lastDate) {
        // Date is in range but no contributions
        week.push({ date: dateStr, count: 0, level: 0 });
      } else {
        // Date is outside range (padding)
        week.push(null);
      }
    }

    weeks.push(week);
  }

  const getLevelColor = (level: number, count: number) => {
    if (count === 0) {
      return "bg-zinc-100 dark:bg-zinc-900";
    }
    const colors = [
      "bg-emerald-100 dark:bg-emerald-900/30",
      "bg-emerald-300 dark:bg-emerald-700/50",
      "bg-emerald-500 dark:bg-emerald-600/70",
      "bg-emerald-600 dark:bg-emerald-500/80",
      "bg-emerald-700 dark:bg-emerald-400/90",
    ];
    return colors[Math.min(level, 4)] || colors[0];
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl bg-zinc-50/60 dark:bg-zinc-900/40 p-5 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 backdrop-blur-xs my-8 shadow-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100">GitHub Contributions</h3>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50 text-xs md:text-sm"
        >
          @{username}
          <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 inline-block ml-1"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>

      <div className="overflow-x-auto hide-scrollbar pb-2 flex justify-center">
        <div className="flex gap-0.5 items-end">
          {/* Day labels */}
          <div className="flex flex-col gap-0.5 pr-2 pb-2.5 pt-0.5 justify-end">
            <div className="h-3.5"></div>
            {["Sun", "", "Tue", "", "Thu", "", "Sat"].map((day, index) => (
              <div
                key={index}
                className={cn(
                  "text-[10px] text-zinc-500 dark:text-zinc-400 h-3 flex items-center font-medium px-1.5 py-0.5 rounded-sm",
                  day
                    ? "visible bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-sm"
                    : "invisible",
                  "transition-colors duration-200"
                )}
                style={{ width: "28px", height: "12px" }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Graph */}
          <div className="flex gap-0.5">
            {weeks.map((week, weekIndex) => {
              const weekDate = week.find((d) => d !== null);
              const weekMonth = weekDate
                ? new Date(weekDate.date).getMonth()
                : -1;
              const isNewMonth =
                weekIndex === 0 ||
                (() => {
                  const prevWeek = weeks[weekIndex - 1];
                  const prevWeekDate = prevWeek.find((d) => d !== null);
                  const prevMonth = prevWeekDate
                    ? new Date(prevWeekDate.date).getMonth()
                    : -1;
                  return weekMonth !== prevMonth;
                })();

              return (
                <div key={weekIndex} className="flex flex-col gap-0.5">
                  {/* Month label */}
                  {isNewMonth && weekDate && (
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 h-3.5 mb-0.5 whitespace-nowrap font-medium">
                      {new Date(weekDate.date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </div>
                  )}
                  {!isNewMonth && <div className="h-3.5 mb-0.5"></div>}

                  {/* Contribution squares */}
                  <div className="flex flex-col gap-0.5">
                    {week.map((contrib, dayIndex) => {
                      if (contrib === null) {
                        return (
                          <div key={dayIndex} className="w-[11px] h-[11px]" />
                        );
                      }

                      return (
                        <motion.div
                          key={`${weekIndex}-${dayIndex}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: (weekIndex * 7 + dayIndex) * 0.002,
                          }}
                          className={cn(
                            "aspect-square w-[11px] h-[11px] rounded-[2px] transition-all duration-200",
                            getLevelColor(contrib.level, contrib.count),
                            contrib.count > 0 &&
                              "hover:ring-2 hover:ring-emerald-400/50 dark:hover:ring-emerald-500/50 hover:scale-110 cursor-pointer"
                          )}
                          title={`${contrib.date || "No contributions"}: ${
                            contrib.count
                          } contribution${contrib.count !== 1 ? "s" : ""}`}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
        {data.total && (
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              {data.total.lastYear.toLocaleString()}
            </span>{" "}
            contributions in the last year
          </div>
        )}
        <div className="flex items-center gap-2.5 text-[10px] text-zinc-600 dark:text-zinc-400">
          <span className="font-medium">Less</span>
          <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={cn(
                  "aspect-square w-[11px] h-[11px] rounded-[2px]",
                  getLevelColor(level, level > 0 ? 1 : 0)
                )}
              />
            ))}
          </div>
          <span className="font-medium">More</span>
        </div>
      </div>
    </div>
  );
}

export const GithubGraph = GitHubContributionsGraph;
