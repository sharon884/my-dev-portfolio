import portfolioConfig from "../portfolio.config"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={portfolioConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <Github />
          </a>
          <a
            href={portfolioConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <Linkedin />
          </a>
          <a
            href={portfolioConfig.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <Twitter />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} {portfolioConfig.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
