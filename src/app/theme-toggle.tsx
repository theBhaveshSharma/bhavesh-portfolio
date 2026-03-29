"use client";

import { MoonStar, Palette, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeName = "light" | "dark" | "gamma";

const themes: {
  value: ThemeName;
  label: string;
  icon: typeof SunMedium;
}[] = [
  { value: "light", label: "Light", icon: SunMedium },
  { value: "dark", label: "Dark", icon: MoonStar },
  { value: "gamma", label: "Gamma", icon: Palette },
];

const storageKey = "bhavesh-portfolio-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof window === "undefined") {
      return "gamma";
    }

    return (
      (window.localStorage.getItem(storageKey) as ThemeName | null) ??
      ((document.documentElement.dataset.theme as ThemeName | undefined) ||
        "gamma")
    );
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  const applyTheme = (nextTheme: ThemeName) => {
    setTheme(nextTheme);
  };

  const activeTheme =
    themes.find((item) => item.value === theme) ?? themes[0];
  const ActiveIcon = activeTheme.icon;

  return (
    <div className="theme-dropdown">
      <button
        type="button"
        className="theme-toggle-trigger"
        aria-haspopup="true"
        aria-label="Choose portfolio theme"
      >
        <ActiveIcon className="h-4 w-4" />
        <span>{activeTheme.label}</span>
      </button>
      <div className="theme-toggle-menu" aria-label="Theme switcher" role="menu">
        {themes.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => applyTheme(item.value)}
              className={`theme-toggle-option ${
                theme === item.value ? "is-active" : ""
              }`}
              aria-checked={theme === item.value}
              role="menuitemradio"
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
