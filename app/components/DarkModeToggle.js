"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme or default to light mode
    const savedMode = localStorage.getItem("theme");
    const isDark = savedMode === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 px-4 py-3 bg-gray-300 dark:bg-gray-800 rounded-full shadow-lg hover:scale-105 transition-transform">
      <span className="text-sm text-gray-700 dark:text-gray-300">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </span>
      <button
        onClick={toggleDarkMode}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
          darkMode ? "bg-gray-700" : "bg-gray-400"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
            darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </button>
    </div>
  );
}
