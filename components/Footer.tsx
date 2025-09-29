import portfolioConfig from "../portfolio.config"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

exportfunction Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-gray-50 dark:bg-gray-900 py-10 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href={portfolioConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={portfolioConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={portfolioConfig.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${portfolioConfig.email}`}
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Built by {portfolioConfig.name} © {currentYear}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

