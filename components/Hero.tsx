import Link from "next/link"
import { Github, Linkedin, Mail, MapPin,Twitter } from "lucide-react"
import portfolioConfig from "../portfolio.config"

export function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-80px)] pt-16 flex items-center justify-center text-center">
      <div className="space-y-8 max-w-2xl">
        <p className="text-xl font-medium text-indigo-600 dark:text-indigo-400">
          Hello, I&apos;m {portfolioConfig.name} 👋
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter text-gray-900 dark:text-white transition-colors duration-300">
          <span className="text-indigo-600 dark:text-indigo-400">{portfolioConfig.role}</span>
          . Building the Future.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          {portfolioConfig.bio}
        </p>

        {/* Action Button and Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="#projects"
            className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-[1.02] text-lg"
          >
            View Projects
          </Link>
          <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-500" />
            {portfolioConfig.location}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 pt-6">
          <a
            href={portfolioConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={portfolioConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={portfolioConfig.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${portfolioConfig.email}`}
            className="text-gray-500 dark:text-gray-400 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}