"use client"

import portfolioConfig from "../portfolio.config"
import ThemeSwitcher from "./ThemeSwitcher" // Assuming ThemeSwitcher is in the same directory
import Link from "next/link"

// Helper function for smooth scrolling
const scrollIntoView = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export function Navbar() {
  const links = ["home", "about", "skills", "projects", "contact"]

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name button */}
        <div className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          <button 
            onClick={() => scrollIntoView("home")}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {portfolioConfig.name}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm">
          {links.map((id) => (
            <button
              key={id}
              onClick={() => scrollIntoView(id)}
              className="hidden sm:inline-block font-semibold capitalize text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {id}
            </button>
          ))}
          {/* Theme Switcher */}
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  )
}
