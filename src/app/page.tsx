import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main style={{ padding: 0 }}>
      <section id="hero">
        <Hero />
      </section>

      <div className="sticky-wrapper">
        <Navbar />
      </div>

      {/* Add padding to these sections */}
      <section id="about" style={{ padding: "2rem" }}>
        <About />
      </section>
      <section id="skills" style={{ padding: "2rem" }}>
        <Skills />
      </section>
      <section id="projects" style={{ padding: "2rem" }}>
        <Projects />
      </section>
      <section id="certifications" style={{ padding: "2rem" }}>
        <Certifications />
      </section>
      <section id="experience" style={{ padding: "2rem" }}>
        <Experience />
      </section>
      <section id="contact" style={{ padding: "2rem" }}>
        <Contact />
      </section>
    </main>
  );
}
