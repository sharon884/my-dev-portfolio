import portfolioConfig from "../portfolio.config"
import { Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
        Get In Touch
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
        I’m currently open to new opportunities. Let’s build something great together.
      </p>

      <Link
        href={`mailto:${portfolioConfig.email}`}
        className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-2xl hover:bg-indigo-700 transition-all duration-300 transform hover:scale-[1.02] text-lg"
      >
        <Mail className="w-5 h-5 mr-3" />
        {portfolioConfig.email}
        <ArrowRight className="w-5 h-5 ml-3" />
      </Link>
    </section>
  )
}
