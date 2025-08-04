export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-list">
        <article className="project-card">
          <img
            src="/images/portfolio.png"
            alt="Screenshot of Portfolio Site"
            className="project-image"
          />
          <h3 className="project-title">Portfolio Site</h3>
          <p className="project-description">
            Personal portfolio built with Next.js, Tailwind, and deployed via
            Vercel.
          </p>
          <div className="project-links">
            <a href="#" target="_blank" className="project-link">
              View Project
            </a>
            <a
              href="https://github.com/thomasmullen9999/my-portfolio"
              target="_blank"
              className="project-link"
            >
              GitHub Repo
            </a>
          </div>
        </article>

        <article className="project-card">
          <img
            src="/images/newslett.png"
            alt="Screenshot of Newslett app"
            className="project-image"
          />
          <h3 className="project-title">Newslett</h3>
          <p className="project-description">
            News application in the style of Reddit or Quora, built with
            React.js and Javascript.
          </p>
          <div className="project-links">
            <a
              href="https://thomas-mullen-nc-news.netlify.app/"
              target="_blank"
              className="project-link"
            >
              View Project
            </a>
            <a
              href="https://github.com/thomasmullen9999/fe-nc-news"
              target="_blank"
              className="project-link"
            >
              GitHub Repo (Front End)
            </a>
            <a
              href="https://github.com/thomasmullen9999/nc-news"
              target="_blank"
              className="project-link"
            >
              GitHub Repo (Back End)
            </a>
          </div>
        </article>

        <article className="project-card">
          <img
            src="/images/strengthsync.png"
            alt="Screenshot of StrengthSync app"
            className="project-image"
          />
          <h3 className="project-title">StrengthSync</h3>
          <p className="project-description">
            Fitness web app with food logging and gym diary, with the ability to
            register an account and login. Made with Flask and Python.
          </p>
          <div className="project-links">
            <a
              href="https://thomasmullen9999.pythonanywhere.com/"
              target="_blank"
              className="project-link"
            >
              View Project
            </a>
            <a
              href="https://github.com/thomasmullen9999/fit-and-strong" // Example link
              target="_blank"
              className="project-link"
            >
              GitHub Repo
            </a>
          </div>
        </article>

        <article className="project-card">
          <img
            src="/images/megamansite.png"
            alt="Screenshot of Mega Man Guide"
            className="project-image"
          />
          <h3 className="project-title">Mega Man Guide</h3>
          <p className="project-description">
            Built with vanilla HTML/CSS during my first foray into learning
            about development, whilst studying the fundamentals of web
            programming.
          </p>
          <div className="project-links">
            <a
              href="https://thomasmullen9999.github.io/mega-man-walkthrough/introduction.html"
              target="_blank"
              className="project-link"
            >
              View Project
            </a>
            <a
              href="https://github.com/thomasmullen9999/mega-man-walkthrough"
              target="_blank"
              className="project-link"
            >
              GitHub Repo
            </a>
          </div>
        </article>
        <article className="project-card">
          <img
            src="/images/na.png"
            alt="Screenshot of Mangata and Gallo website"
            className="project-image"
          />
          <h3 className="project-title">C# Project</h3>
          <p className="project-description">In Progress</p>
          <div className="project-links">
            <a href="#" target="_blank" className="project-link">
              View Project
            </a>
            <a href="#" target="_blank" className="project-link">
              GitHub Repo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
