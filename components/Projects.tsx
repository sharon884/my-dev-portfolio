import portfolioConfig from "../portfolio.config"
import { ExternalLink, Calendar, Code } from "lucide-react"
import Link from "next/link"

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white tracking-tight">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioConfig.projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:border-indigo-400/50"
          >
            <h3 className="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">
              {project.title}
            </h3>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.year}
              </span>
              {project.status && (
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                    project.status === "Ongoing Development" 
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" 
                    : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                }`}>
                  {project.status}
                </span>
              )}
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow mb-4">
              {project.description}
            </p>

            {/* Tags/Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center w-full sm:w-auto px-5 py-2 border border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View on GitHub
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
