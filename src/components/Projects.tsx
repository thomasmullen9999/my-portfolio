import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-list">
        <article className="project-card">
          <h3 className="project-title">Newslett</h3>
          <p className="project-description">
            News site like Reddit or Quora built with React.js and Javascript.
          </p>
          <a href="#" target="_blank" className="project-link">
            View Project
          </a>
        </article>

        <article className="project-card">
          <h3 className="project-title">Fitter</h3>
          <p className="project-description">
            Fitness web app with food logging and gym diary. Made with Flask and
            Python.
          </p>
          <a href="#" target="_blank" className="project-link">
            View Project
          </a>
        </article>

        <article className="project-card">
          <h3 className="project-title">Mangata and Gallo</h3>
          <p className="project-description">
            Website which sells gold and silver jewellery, built in Next.js with
            Typescript.
          </p>
          <a href="#" target="_blank" className="project-link">
            View Project
          </a>
        </article>

        <article className="project-card">
          <h3 className="project-title">Mega Man Guide</h3>
          <p className="project-description">
            Built with vanilla HTML/CSS during my first foray into learning web
            development, a long time ago.
          </p>
          <a href="#" target="_blank" className="project-link">
            View Project
          </a>
        </article>

        <article className="project-card">
          <h3 className="project-title">Portfolio Site</h3>
          <p className="project-description">
            Personal portfolio built with Next.js, Tailwind, and deployed via
            Vercel.
          </p>
          <a href="#" target="_blank" className="project-link">
            View Project
          </a>
        </article>
      </div>
    </section>
  );
}
