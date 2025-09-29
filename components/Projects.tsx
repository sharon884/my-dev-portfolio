import portfolioConfig from "../portfolio.config"
// Import all necessary icons for project links
import { ExternalLink, Calendar, Code, GitBranch } from "lucide-react" 
import Link from "next/link"

// Define a map to select the correct Lucide icon based on the string name
const iconComponentMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  ExternalLink: ExternalLink, // For Live Site links
  Code: Code,                 // For GitHub/Code Repository links
  GitBranch: GitBranch,       // In case you want another icon for a specific repo
}

// Helper function to safely retrieve and render the icon
const getIcon = (iconName: string, className: string) => {
  // Use the icon from the map, or default to the Code icon if the name isn't found
  const IconComponent = iconComponentMap[iconName] || Code; 
  return <IconComponent className={className} />;
};


export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white tracking-tight">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Map over all projects defined in portfolioConfig */}
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

            {/* NEW LINK RENDERING LOGIC: Maps over the project.links array */}
            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              {project.links && project.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Dynamically adjust button styling: Primary for Live Site, Secondary for Repos
                  className={`inline-flex items-center justify-center px-4 py-2 border font-semibold rounded-xl transition-colors duration-300 ${
                    link.icon === 'ExternalLink' 
                      ? "text-white bg-indigo-600 border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 shadow-md" // Primary button for live site
                      : "text-indigo-600 dark:text-indigo-400 border-indigo-500 hover:bg-indigo-50 dark:hover:bg-gray-800" // Secondary button for repos
                  }`}
                >
                  {/* Render the icon dynamically */}
                  {getIcon(link.icon, "w-4 h-4 mr-2")} 
                  {link.name}
                </Link>
              ))}
            </div>
            {/* END NEW LINK RENDERING LOGIC */}

          </div>
        ))}
      </div>
    </section>
  )
}