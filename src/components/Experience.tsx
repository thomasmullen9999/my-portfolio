"use client";

import { useState } from "react";

const jobs = [
  {
    id: "sagoss",
    company: "Sagoss",
    role: "Full-Stack Software Engineer",
    date: "Apr 2026 – Present",
    logo: "/images/sagoss.png",
    content: (
      <>
        <p>
          I joined Sagoss as a Full-Stack Software Engineer, working within a
          large team of developers to build and maintain web services. I enjoy
          collaborating with a diverse technical team and deepening my
          expertise in Vue.js, MySQL, and Jira/Bitbucket.
        </p>

        <p>
          Initially, I interviewed for a senior role and, despite being
          relatively junior in my career, I performed strongly enough that the
          company created a new mid-level position to bring me on board.
        </p>

        <p>Some of my key achievements at Sagoss have included:</p>

        <ul className="experience-list">
          <li>
            Executed database schema migrations across the company's two core
            production applications, updating API and UI layers to reflect
            changes and ensure data integrity.
          </li>

          <li>
            Delivered feature work across two major Vue.js enterprise
            platforms: a medical clinic system and a parking technology
            platform. This involved refactoring components and improving
            processes in accordance with client requirements.
          </li>

          <li>
            Managed development tasks through Jira and conducted peer code
            reviews via Bitbucket pull requests, providing clear and
            constructive feedback to improve code quality and maintain
            consistency with company standards.
          </li>

          <li>
            Restructured project directory architecture, refactoring API calls
            and file import references to enhance codebase readability and
            long-term maintainability.
          </li>

          <li>
            Migrated legacy Vue components from the Options API to the
            Composition API as part of related feature work, while building
            new components directly in the Composition API.
          </li>
        </ul>
      </>
    ),
  },

  {
  id: "maddison-clarke",
  company: "Maddison Clarke",
  role: "Full-Stack Web Developer",
  date: "Aug 2024 – Apr 2026",
  logo: "/images/maddison-clarke.png",
  content: (
    <>
      <div className="experience-role-progression">
        <div className="experience-role">
          <h4>Junior Developer</h4>
          <span>Aug 2024 – Jun 2025</span>
        </div>

        <div className="experience-progression-arrow">→</div>

        <div className="experience-role">
          <h4>Web Developer</h4>
          <span>Jun 2025 – Apr 2026</span>
        </div>
      </div>

      <p>
        At Maddison Clarke, a financial claims and legal compensation
        company, I initially joined as a Junior Developer and worked as
        part of a small development team on a range of commercial projects.
      </p>

      <p>
        During my time as a Junior Developer, I built customer-facing
        applications and internal tooling while developing my proficiency
        in TypeScript and Next.js.
      </p>

      <p>Key achievements during this period included:</p>

      <ul className="experience-list">
        <li>
          Built and implemented customer-facing forms for equal pay and
          legal claims, collecting and handling sensitive user data.
        </li>

        <li>
          Developed features for an internal admin site, including graphs,
          charts, and API-driven lead data displays.
        </li>

        <li>
          Utilised lead generation tooling to support client acquisition
          workflows.
        </li>
      </ul>

      <p>
        In June 2025, following the departure of the senior developer, I
        took over sole responsibility for development. I became responsible
        for maintaining the existing systems, managing the technical
        direction of projects, and ensuring continued delivery across the
        business.
      </p>

      <p>
        I owned system architecture and led project delivery, working
        closely with the marketing and sales teams. I also oversaw the CRM
        database, managing lead storage and campaign monitoring.
      </p>

      <p>Key achievements as Web Developer included:</p>

      <ul className="experience-list">
        <li>
          Spearheaded the development of an AI-powered dialler using Twilio
          and custom algorithms, significantly enhancing lead engagement
          efficiency.
        </li>

        <li>
          Designed and integrated RESTful APIs supporting dynamic financial
          form components, streamlining user submission workflows.
        </li>

        <li>
          Built a 5-character nurture code algorithm, reducing SMS link
          length by 80% and cutting campaign costs.
        </li>

        <li>
          Built and maintained accessible React + Prisma admin dashboards,
          improving data visualisation and enabling marketing teams to
          manage campaign forms independently.
        </li>

        <li>
          Developed the entire frontend of an in-house CRM from scratch
          using Next.js, integrating RESTful APIs to connect with the
          backend. The system was designed to migrate thousands of existing
          leads and replace a third-party solution.
        </li>
      </ul>
    </>
  ),
},
  {
    id: "northcoders",
    company: "Northcoders",
    role: "Trainee Full-Stack Developer",
    date: "Jan 2024 – Apr 2024",
    logo: "/images/northcoders.png",
    content: (
      <>
        <p>
          During an intensive and insightful bootcamp, I built multiple
          full-stack web applications using JavaScript, SQL, and HTML/CSS,
          with rigorous testing using Jest and Cypress.
        </p>

        <p>
          I also participated in Agile sprints and pair programming sessions
          designed to simulate real-world development team workflows.
        </p>

        <p>Key areas of development included:</p>

        <ul className="experience-list">
          <li>Writing clean, maintainable code.</li>
          <li>Debugging and fixing application issues.</li>
          <li>Testing applications thoroughly with Jest and Cypress.</li>
          <li>
            Improving application performance and reliability through
            iterative development.
          </li>
          <li>
            Working collaboratively through Agile sprints and pair
            programming.
          </li>
        </ul>
      </>
    ),
  },
];

export default function Experience() {
  const [activeJob, setActiveJob] = useState("sagoss");

  const selectedJob =
    jobs.find((job) => job.id === activeJob) ?? jobs[0];

  return (
    <section className="experience-section">
      <h2 className="experience-heading">Experience</h2>

      <div className="experience-container">
        {/* Left-hand timeline / tabs */}
        <div className="experience-tabs" role="tablist">
          {jobs.map((job) => {
            const isActive = activeJob === job.id;

            return (
              <button
                key={job.id}
                type="button"
                className={`experience-tab ${
                  isActive ? "active" : ""
                }`}
                onClick={() => setActiveJob(job.id)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`experience-${job.id}`}
              >
                <span className="tab-company">{job.company}</span>

                <span className="tab-role">{job.role}</span>

                <span className="tab-date">{job.date}</span>
              </button>
            );
          })}
        </div>

        {/* Right-hand job content */}
        <div
          className="experience-content"
          id={`experience-${selectedJob.id}`}
          role="tabpanel"
        >
          <div className="experience-header">
            <div>
              <h3>
                {selectedJob.role}{" "}
                <span>@ {selectedJob.company}</span>
              </h3>

              <p className="experience-date">{selectedJob.date}</p>
            </div>

            <img
              src={selectedJob.logo}
              alt={`${selectedJob.company} company logo`}
              className="experience-logo"
            />
          </div>

          <div className="experience-description">
            {selectedJob.content}
          </div>
        </div>
      </div>
    </section>
  );
}