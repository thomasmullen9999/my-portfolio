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
          I joined Sagoss as a full stack Software Engineer, working within a
          large team of developers to build and maintain web services. I enjoy
          collaborating with a diverse technical team and deepening my
          expertise in Vue.js, MySQL, and Jira/Bitbucket.
        </p>

        <p>
          Initially, I interviewed for a senior role and, despite being
          relatively junior in my career, I performed strongly enough that the
          company created a new mid-level position to bring me on board.
        </p>

        <p>
          Some of my key achievements at Sagoss have included:
        </p>

        <ul className="list">
          <li>
            Executed database schema migrations across the company's two core
            production applications, updating API and UI layers to reflect
            changes and ensure data integrity.
          </li>

          <li>
            Delivered feature work across two major Vue.js enterprise
            platforms, a medical clinic system and a parking technology
            platform, each supporting numerous clients, by refactoring
            components and improving processes in accordance with client
            requirements.
          </li>

          <li>
            Managed development tasks through Jira and conducted peer code
            reviews via Bitbucket pull requests as required, providing clear
            and constructive feedback to improve code quality, maintain
            consistency with company standards, and support task progression or
            escalation where needed.
          </li>

          <li>
            Restructured project directory architecture, refactoring API calls
            and file import references accordingly to enhance codebase
            readability and long-term maintainability.
          </li>

          <li>
            Migrated legacy Vue components from the Options API to the
            Composition API as part of related feature work, while building
            new components directly in the Composition API, improving code
            structure, readability, and long-term maintainability.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "maddison-web",
    company: "Maddison Clarke",
    role: "Web Developer",
    date: "Jun 2025 – Apr 2026",
    logo: "/images/maddison-clarke.png",
    content: (
      <>
        <p>
          In June 2025, I took over sole responsibility for development from a
          departing senior developer, maintaining team productivity and
          preventing delivery delays through proactive codebase and
          infrastructure management.
        </p>

        <p>
          On a day-to-day basis I owned system architecture and led project
          delivery, ensuring alignment across marketing and sales teams. I also
          oversaw the CRM database, managing lead storage and campaign
          monitoring.
        </p>

        <p>
          Some of my key achievements in this role included:
        </p>

        <ul className="list">
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
            backend — designed to migrate thousands of existing leads and
            replace a third-party solution.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "maddison-junior",
    company: "Maddison Clarke",
    role: "Junior Developer",
    date: "Aug 2024 – Jun 2025",
    logo: "/images/maddison-clarke.png",
    content: (
      <>
        <p>
          At Maddison Clarke, a financial claims and legal compensation
          company, I worked as part of a small development team on a range of
          commercial projects.
        </p>

        <ul className="list">
          <li>
            Built and implemented customer-facing forms for equal pay and
            legal claims, collecting and handling sensitive user data.
          </li>

          <li>
            Developed features for an internal admin site including graphs,
            charts, and API-driven lead data displays.
          </li>

          <li>
            Utilised lead generation tooling to support client acquisition
            workflows.
          </li>
        </ul>

        <p>
          During this role I became proficient in TypeScript and Next.js,
          delivering both customer-facing and internal software across the
          business.
        </p>
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
          full-stack web applications using JavaScript, SQL and HTML/CSS, with
          rigorous testing using Jest and Cypress.
        </p>

        <p>
          I also participated in Agile sprints and pair programming sessions
          designed to simulate real-world development team workflows.
        </p>

        <p>
          Consequently, I honed my skills in writing clean code, fixing bugs
          and ensuring optimal performance through rigorous testing.
        </p>
      </>
    ),
  },
];

export default function Experience() {
  const [activeJob, setActiveJob] = useState("sagoss");

  const selectedJob = jobs.find((job) => job.id === activeJob);

  return (
    <section className="section experience-section">
      <h2 className="heading">Experience</h2>

      <div className="experience-container">
        {/* Left-hand timeline / tabs */}
        <div className="experience-tabs">
          {jobs.map((job) => (
            <button
              key={job.id}
              className={`experience-tab ${
                activeJob === job.id ? "active" : ""
              }`}
              onClick={() => setActiveJob(job.id)}
              type="button"
              aria-selected={activeJob === job.id}
            >
              <span className="timeline-dot"></span>

              <span className="tab-content">
                <span className="tab-company">{job.company}</span>

                <span className="tab-role">{job.role}</span>

                <span className="tab-date">{job.date}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Right-hand job content */}
        <div className="experience-content">
          <div className="experience-header">
            <div className="experience-heading-text">
              <h3>
                {selectedJob.role}{" "}
                <span>@ {selectedJob.company}</span>
              </h3>

              <p className="date">{selectedJob.date}</p>
            </div>

            <img
              src={selectedJob.logo}
              alt={`${selectedJob.company} company logo`}
              className="logo"
            />
          </div>

          <div className="description">
            {selectedJob.content}
          </div>
        </div>
      </div>
    </section>
  );
}