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

// Corrected dynamic metadata using the config file
export const metadata: Metadata = {
  title: `${portfolioConfig.name} - ${portfolioConfig.role}`,
  description: portfolioConfig.bio,
  // Add other crucial SEO tags
  openGraph: {
    title: `${portfolioConfig.name} Portfolio`,
    description: portfolioConfig.bio,
    // FIX: Use the absolute site URL for OpenGraph and SEO
    url: portfolioConfig.siteUrl || "/", 
    siteName: portfolioConfig.name,
  },
  // Recommended: Add Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: `${portfolioConfig.name} Portfolio`,
    description: portfolioConfig.bio,
    creator: portfolioConfig.socials?.twitter,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // FIX: Using suppressHydrationWarning is necessary when manually adding a class to HTML
    <html lang="en" suppressHydrationWarning className={inter.variable}>
   
      <body className="font-sans antialiased min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
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
        {children}
      </body>
    </html>
  )
}