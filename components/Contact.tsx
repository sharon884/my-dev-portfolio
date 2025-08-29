// components/Contact.jsx
import portfolioConfig from "../portfolio.config";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <p className="text-gray-600 mb-6">{portfolioConfig.bio}</p>
      <div className="space-x-6">
        <a href={portfolioConfig.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={portfolioConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={portfolioConfig.socials.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </section>
  );
}
