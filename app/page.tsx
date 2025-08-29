"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, ExternalLink, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import portfolioConfig from "../portfolio.config"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header Navigation */}
      <header className="max-w-2xl mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-black dark:text-white animate-fade-in">
           Hey,I'm {portfolioConfig.name} 👋
          </div>
          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-gray-900 dark:text-white"
            >
              home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-gray-900 dark:text-white"
            >
              projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-gray-900 dark:text-white"
            >
              contact
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-gray-900 dark:text-white" />
              ) : (
                <Moon className="w-4 h-4 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-4">
        <section id="home" className="mb-16">
          <div className="mb-6">
            <div className="text-gray-600 dark:text-gray-400 mb-2">
              <span>📍 {portfolioConfig.location}</span>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-6 flex items-center gap-2">
              <span>💻 {portfolioConfig.role}</span>
            </div>
          </div>

          <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm">
            {portfolioConfig.bio} Currently working on PassGo, an event ticketing platform with real-time features. I
            enjoy building scalable web applications and solving complex problems with clean, efficient code.
          </p>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-xl font-semibold mb-8 underline decoration-2 underline-offset-4 text-gray-900 dark:text-white">
            Works
          </h2>

          <div className="space-y-8">
            {portfolioConfig.projects.map((project, index) => (
              <div key={index} className="group">
                <div className="flex items-start justify-between mb-2">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    {project.title}
                    {project.status === "ongoing" && (
                      <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                        ongoing
                      </span>
                    )}
                  </Link>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{project.year}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={portfolioConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              View all projects
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-8 underline decoration-2 underline-offset-4 text-gray-900 dark:text-white">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {portfolioConfig.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="max-w-2xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Get in touch</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm">© 2025</p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm">Built by {portfolioConfig.name}.</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <Link
            href={portfolioConfig.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href={portfolioConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href={portfolioConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href={`mailto:${portfolioConfig.email}`}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </footer>
    </div>
  )
}
