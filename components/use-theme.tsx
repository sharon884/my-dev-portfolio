// components/use-theme.tsx
"use client";

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false); // Tracks if the component has mounted

  // 1. Set initial theme on mount (Client-only logic)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let initialTheme: Theme = 'light';
    if (savedTheme) {
        initialTheme = savedTheme;
    } else if (prefersDark) {
        initialTheme = 'dark';
    }
    setTheme(initialTheme);
    setMounted(true);
  }, []); 

  // 2. Sync theme state with the DOM and localStorage
  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    localStorage.setItem('theme', theme);

    // This ensures the class is updated every time the user clicks the toggle
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, mounted]); 

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };
  
  // Return placeholder ('light') if not mounted to prevent UI flash/hydration mismatch
  return { theme: mounted ? theme : 'light', toggleTheme, mounted };
};