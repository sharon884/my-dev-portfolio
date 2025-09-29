// components/ThemeToggle.tsx
"use client"

import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

/**
 * Utility function to handle the actual application of the 'dark' class
 * to the root HTML element, which Tailwind CSS uses for theme switching.
 */
const applyTheme = (theme: 'light' | 'dark') => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function ThemeToggle() {
  // 1. Initialize state.
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // 2. Read the user's preference from localStorage or system settings on mount.
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    let initialTheme: 'light' | 'dark' = 'light';
    
    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (prefersDark) {
      initialTheme = 'dark';
    }

    // Set React state and apply the class to ensure everything is synced
    setTheme(initialTheme);
    applyTheme(initialTheme); // 👈 Applies the class on initial load/hydration
  }, []) // Empty dependency array ensures this runs only once

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    
    setTheme(newTheme) // Updates React state
    localStorage.setItem('theme', newTheme) // Saves the user's preference
    applyTheme(newTheme) // 👈 APPLIES THE CLASS ON CLICK
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="p-2 rounded-full transition-colors duration-200 
                 text-gray-700 dark:text-gray-300 
                 hover:bg-gray-200 dark:hover:bg-gray-800 
                 transform hover:scale-110"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-indigo-600" />
      )}
    </button>
  )
}