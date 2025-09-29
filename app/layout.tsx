// app/layout.tsx

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
    url: portfolioConfig.siteUrl || "/",
    siteName: portfolioConfig.name,
  },
}

// 🛑 IMPORTANT: The ThemeInitializerScript variable is REMOVED from here. 🛑

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // suppressHydrationWarning is necessary when manually adding a class to HTML
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      {/* ✅ CORRECT FIX: The FOUC script is placed as the first child of <body>. 
        This resolves the "Cannot render a sync or defer <script> outside the main document" error.
      */}
      <body className="font-sans antialiased min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <script
          id="theme-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                let theme = 'light';

                if (savedTheme) {
                  theme = savedTheme;
                } else if (prefersDark) {
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
        
        {children}
      </body>
    </html>
  )
}