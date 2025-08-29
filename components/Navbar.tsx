import portfolioConfig from "../portfolio.config"

export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a href="#home" className="text-2xl font-bold text-blue-600">
          {portfolioConfig.name}
        </a>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 transition">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
