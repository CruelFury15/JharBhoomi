import React from "react";
import { useTheme } from "../hooks/useTheme";

export default function Darkmode() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white/90 px-3 py-2 text-xs font-medium text-yellow-700 shadow-lg backdrop-blur hover:bg-white dark:border-yellow-700 dark:bg-yellow-900/90 dark:text-yellow-100"
    >
      <span className="relative flex h-6 w-10 items-center rounded-full border border-yellow-300 bg-yellow-200 px-0.5 transition-colors dark:border-yellow-600 dark:bg-yellow-800">
        <span
          className={[
            "inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform",
            isDarkMode ? "translate-x-4" : "translate-x-0",
          ].join(" ")}
        />
      </span>
      <span className="uppercase tracking-wide">
        {isDarkMode ? "Dark" : "Light"}
      </span>
    </button>
  );
}

