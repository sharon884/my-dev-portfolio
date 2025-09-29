import portfolioConfig from "../portfolio.config"

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white tracking-tight">
        A Little About Me
      </h2>
      <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-xl transition-colors duration-300">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hi, I'm <span className="font-bold text-indigo-600 dark:text-indigo-400">{portfolioConfig.name}</span>. I'm a dedicated **{portfolioConfig.role}** based in {portfolioConfig.location}.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          My passion lies in taking ideas from concept to a polished, performant web application. I specialize in the full **MERN stack**, ensuring that I can deliver robust server-side architecture and a beautiful, intuitive frontend user experience. I am committed to continuous learning and applying best practices in everything I build.
        </p>
      </div>
    </section>
  );
}