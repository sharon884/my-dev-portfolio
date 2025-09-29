// components/ThemeToggle.tsx

"use client"

import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

/**
 * Utility function to handle the actual application of the 'dark' class
 * to the root HTML element, which Tailwind CSS uses for theme switching.
 * @param theme - 'light' or 'dark'
 */
const applyTheme = (theme: 'light' | 'dark') => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function ThemeToggle() {
  // 1. Initialize state. useEffect will determine the actual initial value.
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // 2. Read the user's preference from localStorage or system settings.
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
    applyTheme(initialTheme); 
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    
    setTheme(newTheme) // Update React state
    localStorage.setItem('theme', newTheme) // Save the user's new preference
    applyTheme(newTheme) // Immediately update the <html> tag
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="p-2 rounded-full transition-colors duration-200 
                 text-gray-700 dark:text-gray-300 
                 hover:bg-gray-200 dark:hover:bg-gray-800"
    >
      {/* Conditionally render Sun (for dark mode) or Moon (for light mode) */}
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  )
}