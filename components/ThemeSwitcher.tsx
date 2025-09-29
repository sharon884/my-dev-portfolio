// "use client"

// import { useState, useEffect } from "react"
// import { Sun, Moon } from "lucide-react"

// export default function ThemeSwitcher() {
//   // State to track the current theme mode
//   const [theme, setTheme] = useState<string>("light")
//   const [mounted, setMounted] = useState(false)

//   // 1. On mount, read the initial theme from localStorage or system preference
//   useEffect(() => {
//     setMounted(true)
//     const storedTheme = localStorage.getItem("theme")
//     // Use window.matchMedia only if running in the browser
//     const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
//     setTheme(storedTheme || systemTheme)
//   }, [])

//   // 2. Effect to apply the theme to the HTML element and save to storage
//   useEffect(() => {
//     if (!mounted) return
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark")
//       localStorage.setItem("theme", "dark")
//     } else {
//       document.documentElement.classList.remove("dark")
//       localStorage.setItem("theme", "light")
//     }
//   }, [theme, mounted])

//   // Function to toggle the theme
//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light")
//   }

//   if (!mounted) {
//     // Return a placeholder while waiting for mount to prevent layout shift
//     return <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse transition-colors duration-300"></div>
//   }

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-full transition-colors duration-300 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
//     >
//       {theme === "dark" ? (
//         <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 rotate-0 hover:rotate-12" />
//       ) : (
//         <Moon className="w-5 h-5 text-indigo-600 transition-transform duration-300 rotate-0 hover:-rotate-12" />
//       )}
//     </button>
//   )
// }
