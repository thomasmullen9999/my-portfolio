export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-list">
        {/* <article className="project-card">
          <img
            src="/images/portfolio.png"
            alt="Screenshot of Portfolio Site"
            className="project-image"
          />
          <h3 className="project-title">Portfolio Site</h3>
          <p className="project-description">
            Personal portfolio built with Next.js, Typescript, Tailwind, and
            deployed via Vercel.
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
        </article> */}

        <article className="project-card">
          <img
            src="/images/leadmemory.png"
            alt="Screenshot of LeadMemory"
            className="project-image"
          />
          <h3 className="project-title">LeadMemory</h3>
          <p className="project-description">
            CRM software for analysing leads, built with Next.js and Prisma, deployed via Vercel.
          </p>
          <div className="project-links">
            <a href="https://leadmemory-weld.vercel.app" target="_blank" className="project-link">
              View Project
            </a>
            <a
              href="https://github.com/thomasmullen9999/leadmemory"
              target="_blank"
              className="project-link"
            >
              GitHub Repo
            </a>
          </div>
        </article>

        {/*       <article className="project-card">
          <img
            src="/images/.png"
            alt="Screenshot of app"
            className="project-image"
          />
          <h3 className="project-title">FinanceFinder</h3>
          <p className="project-description">
            Financial tracking application, created with C# and .NET. Deployed
            using Docker and...
          </p>
          <div className="project-links">
            <a href="" target="_blank" className="project-link">
              View Project
            </a>
            <a href="" target="_blank" className="project-link">
              GitHub Repo (Front End)
            </a>
            <a href="" target="_blank" className="project-link">
              GitHub Repo (Back End)
            </a>
          </div>
        </article> */}

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
              href="https://github.com/thomasmullen9999/newslett-frontend"
              target="_blank"
              className="project-link"
            >
              GitHub Repo (Front)
            </a>
            <a
              href="https://github.com/thomasmullen9999/newslett-backend"
              target="_blank"
              className="project-link"
            >
              GitHub Repo (Back)
            </a>
          </div>
        </article>

        <article className="project-card">
          <img
            src="/images/ootguide.png"
            alt="Screenshot of Ocarina of Time app"
            className="project-image"
          />
          <h3 className="project-title">Ocarina of Time Guide</h3>
          <p className="project-description">
            A walkthrough to the classic Zelda game for the Nintendo 64, built
            with Vue.js and Typescript.
          </p>
          <div className="project-links">
            <a
              href="https://oot-guide.vercel.app/"
              target="_blank"
              className="project-link"
            >
              View Project
            </a>
            <a
              href="https://github.com/thomasmullen9999/oot-guide"
              target="_blank"
              className="project-link"
            >
              GitHub Repo
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
              href="https://github.com/thomasmullen9999/strengthsync" // Example link
              target="_blank"
              className="project-link"
            >
              GitHub Repo
            </a>
          </div>
        </article>

        {/* <article className="project-card">
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
        </article> */}
        {/*         <article className="project-card">
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
        </article> */}
      </div>
    </section>
  );
}
