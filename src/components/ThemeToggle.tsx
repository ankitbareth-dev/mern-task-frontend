import { useState, useCallback } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return !document.documentElement.classList.contains("light");
  });

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const newIsDark = !prev;

      if (newIsDark) {
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
      }

      return newIsDark;
    });
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-16 h-8 rounded-full bg-surface-container-high border border-outline-variant transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-primary shadow-lg transform transition-transform duration-300 flex items-center justify-center ${
          isDark ? "translate-x-0" : "translate-x-8"
        }`}
      >
        <span
          className="material-symbols-outlined text-surface text-sm"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          {isDark ? "dark_mode" : "light_mode"}
        </span>
      </span>

      <span className="absolute left-2 material-symbols-outlined text-on-surface-variant/40 text-xs">
        dark_mode
      </span>
      <span className="absolute right-2 material-symbols-outlined text-on-surface-variant/40 text-xs">
        light_mode
      </span>
    </button>
  );
};

export default ThemeToggle;
