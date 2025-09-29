

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import portfolioConfig from "../portfolio.config"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})


export const metadata: Metadata = {
  title: `${portfolioConfig.name} - ${portfolioConfig.role}`,
  description: portfolioConfig.bio,
  openGraph: {
    title: `${portfolioConfig.name} Portfolio`,
    description: portfolioConfig.bio,
    url: portfolioConfig.siteUrl || "/", // Uses https://builtbysharon.site
    siteName: portfolioConfig.name,
  },
}

// CRITICAL FIX: The FOUC script is extracted here to be inserted into <head>
const ThemeInitializerScript = (
  <script
    id="theme-script"
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          const savedTheme = localStorage.getItem('theme');
          let theme = 'light';

          if (savedTheme) {
            theme = savedTheme;
          } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = 'dark';
          }

          if (theme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        })();
      `,
    }}
  />
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // suppressHydrationWarning is necessary when manually adding a class to HTML
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      {/* PLACE THE FOUC SCRIPT HERE: Runs before the body is rendered */}
      {ThemeInitializerScript} 
      
      <body className="font-sans antialiased min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  )
}