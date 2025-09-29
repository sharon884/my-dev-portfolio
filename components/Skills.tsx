import portfolioConfig from "../portfolio.config"
import { Code, Layers, Cloud } from "lucide-react"

export / Skills Component
function Skills() {
  const allSkills = [...portfolioConfig.skills, ...portfolioConfig.skills]; // Duplicate for seamless scroll
  const iconMap = {
    "React.js": <Code className="w-5 h-5 text-sky-400" />,
    "Next.js": <Code className="w-5 h-5 text-gray-900 dark:text-white" />,
    "Node.js": <Code className="w-5 h-5 text-green-500" />,
    "Express.js": <Code className="w-5 h-5 text-gray-600 dark:text-gray-300" />,
    "MongoDB": <Layers className="w-5 h-5 text-green-700" />,
    "TypeScript": <Code className="w-5 h-5 text-blue-500" />,
    "Tailwind CSS": <Code className="w-5 h-5 text-cyan-400" />,
    "AWS": <Cloud className="w-5 h-5 text-orange-500" />,
    "Git": <Code className="w-5 h-5 text-red-500" />,
    "Redux": <Code className="w-5 h-5 text-purple-500" />,
    "REST APIs": <Code className="w-5 h-5 text-yellow-500" />,
    "WebSockets": <Code className="w-5 h-5 text-pink-500" />,
  };

  return (
    <section id="skills" className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white tracking-tight">
        My Expertise
      </h2>
      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
      <div className="relative overflow-hidden w-full group py-4">
        <div className="flex animate-scroll w-[200%] group-hover:pause">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3 mx-3 shadow-md transition-all duration-300 transform hover:scale-105"
            >
              {iconMap[skill] || <Code className="w-5 h-5 text-gray-500" />}
              <span className="ml-2 text-lg font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}