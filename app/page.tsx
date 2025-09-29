"use client" 

import { Hero } from "../components/Hero"
import { Projects } from "../components/Projects"
import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { Skills } from "../components/Skills"

import { Navbar } from "../components/Navbar" 

export default function Portfolio() {
  
  // NOTE: scrollIntoView logic is now moved inside components/Navbar.tsx
  // NOTE: The inner Navbar definition is removed
  
  return (
    <div className="min-h-screen">
      <Navbar /> 

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-24">
        <section id="home">
            <Hero />
        </section>

        <section id="about">
            <About />
        </section>

        <section id="skills">
            <Skills />
        </section>
        
        <section id="projects">
            <Projects />
        </section>
        
        <section id="contact">
            <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}
