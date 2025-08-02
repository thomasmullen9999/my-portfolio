"use client";
import { useState } from "react";
import "./Experience.css";

export default function Experience() {
  const [showMoreNorthcoders, setShowMoreNorthcoders] = useState(false);
  const [showMoreMC, setShowMoreMC] = useState(false);

  return (
    <section className="section">
      <h2 className="heading">Experience</h2>

      {/* Maddison Clarke Section */}
      <div className="job">
        <div className="header">
          <h3>Full-Stack Web Developer @ Maddison Clarke Ltd</h3>
          <p className="date">Jul 2024 – Present</p>
          <img
            id="mc-logo"
            src="images/maddison-clarke.png"
            alt="Maddison Clarke company logo"
            className="logo"
          />
        </div>

        <div className="description">
          <p>
            At Maddison Clarke, a legal claims firm and subsidiary of J3 Debt
            Solutions Ltd, I’ve held a key role as a commercial web developer,
            contributing directly to production-grade applications in
            collaboration with a senior developer. Together, we’ve worked
            closely with the marketing team to identify, scope, and implement
            functional improvements and UX/UI enhancements that streamline user
            interactions and drive engagement. My responsibilities have
            primarily involved developing dynamic, high-conversion form
            workflows for user onboarding across a variety of legal claim types,
            including equal pay disputes, mis-sold car finance, and
            emissions-related claims.
          </p>

          <p>
            When I joined the company, I saw the opportunity to deepen my
            technical breadth by adopting tools and frameworks already in use —
            including Next.js, Prisma, and Cypress — and quickly became
            proficient in leveraging them to deliver high-quality, scalable
            solutions. I’ve consistently received positive feedback for my
            proactive mindset, technical contributions, and ability to ramp up
            quickly in a fast-paced, high-stakes environment. Notable
            achievements in this role have included:
          </p>

          <ul className="list">
            <li>
              Built and maintained web apps with Next.js and TypeScript with
              Prisma
            </li>
            <li>
              Collaborated with sales and marketing teams to define features
            </li>
            <li>
              Utilising Prisma (an Object-Relational Mapper, or ORM) to
              facilitate database interactions in Next.js
            </li>
            <li>
              Producing end-to-end tests with Cypress, for performing tests
              in-browser
            </li>
            <li>
              Implementing new features on the admin side, such as pagination
              and graphs/charts to display information regarding lead and
              campaign data
            </li>
            <li>
              Creating user forms for legal claims, and facilitating the storage
              of information retrieved from each customer lead (alternating
              between third-party systems and self-developed software)
            </li>
            <li>
              Frequently employing Git (both in CLI form with Mac's Terminal,
              and GUI form with GitHub Desktop) for sharing code, as well as for
              the creation of feature branches and hotfixes, to later be merged
              into the main branch
            </li>
          </ul>

          <p>
            Working at Maddison Clarke has given me greater confidence in my
            professional development abilities and has provided me with a strong
            foothold in the software industry.
          </p>
        </div>

        <button
          className="toggleButton"
          onClick={() => setShowMoreMC(!showMoreMC)}
        >
          {showMoreMC ? "Show Less" : "Show More"}
        </button>

        {showMoreMC && (
          <div className="expand">
            <div>
              <h4>Innovative Upgrades</h4>
              <p>
                An example of one of my achievements in this role has included
                the implementation of short but unique IDs to be used in links
                for returning clients. Initially, the company used an ID string
                of 30+ characters to identify each individual client who had
                signed up for a claim; this string was included in links for
                clients returning to complete forms where they had not yet
                accepted the necessary legal documentation. After conferring
                with the marketing team, it was decided that a shorter (but
                still unique) string would be preferred for sending texts and
                emails to clients; this would make the URL appear simpler and
                more aesthetically pleasing, and also would enable the company
                to expend less money on SMS costs.
              </p>

              <p>
                As a solution to this issue, I proposed that we create a new
                type of ID field to be used for each lead, which was instead 5
                characters in length, and would utilise the complete set of
                case-sensitive alphanumeric values (A-Z, a-z, 0-9). This meant
                that each character could be one of 62 different values, and
                therefore the use of a string which was just 5 characters in
                length with this new system would allow for a total of 62
                <sup>5</sup> (almost 1 billion) unique leads. This improvement
                is demonstrated in the image below.
              </p>
            </div>

            <img
              src="/images/short-link.png"
              alt="A comparison of a long and shorter link"
              className="image"
            />

            <h4>Solo Projects</h4>
            <p>
              Several months into the role, I was tasked with producing a web
              form from scratch for one of the company's new campaigns, which
              would collect the user's personal and contact details, as well as
              a virtual signature (using a custom React component). This enabled
              us to transfer client traffic from an older form using third-party
              software to one which we could have more control over.
            </p>
            <p>
              A short time later, after positive feedback from the team on my
              solo work, I worked solo in the production of a brand new web form
              for funnelling potential clients for a car finance claim. This
              involved creating the front and back end of the site myself,
              sending client data to our CRM. This form was used during the
              launch of the claim.
            </p>

            <h4>Career Progression</h4>
            <p>
              A year into the role, our former lead developer left and I was
              offered the opportunity to step up in his place and take charge of
              all development and deployment processes. This was a huge
              responsibility but I saw it as a great chance to rapidly improve
              my skills in a higher-level role. Since then I have overseen CI/CD
              and maintained all of our deployed projects. During this time, I
              was also offered a place on an MSc Degree Apprenticeship course
              with an external company, in partnership with Northumbria
              University. This enabled me to study part-time alongside my role
              and earn a high level qualification whilst gaining valuable
              experience.
            </p>
          </div>
        )}
      </div>

      {/* Northcoders Section */}
      <div className="job">
        <div className="header">
          <h3>Trainee Full-Stack Developer @ Northcoders</h3>
          <p className="date">Jan 2024 – Apr 2024</p>
          <img
            src="/images/northcoders.png"
            alt="Northcoders logo"
            className="logo"
            height={100}
          />
        </div>

        <p>
          In 2024 I attended a software development course with Northcoders,
          learning the essential skills of full-stack JavaScript development
          through intense practical experience and group collaboration.
        </p>

        <button
          className="toggleButton"
          onClick={() => setShowMoreNorthcoders(!showMoreNorthcoders)}
        >
          {showMoreNorthcoders ? "Show Less" : "Show More"}
        </button>

        {showMoreNorthcoders && (
          <div className="expand">
            <p>
              The course lasted 13 weeks and was split into 4 major sections:
            </p>

            <ul className="list">
              <li>
                Using the command-line interface (CLI) for file and folder
                management
              </li>
              <li>
                Collaborative use of Git and GitHub for version control and
                teamwork
              </li>
              <li>
                Pair programming exercises to practice writing code with
                partners
              </li>
              <li>
                Unit testing using Jest and SuperTest to ensure code quality
              </li>
              <li>
                Building RESTful APIs with Express.js and interacting with
                databases
              </li>
              <li>Designing accessible front-end user interfaces with React</li>
              <li>
                Working on a group project, Trek-It Travel, involving a
                full-stack app
              </li>
            </ul>

            <p>
              My time at Northcoders was instrumental in launching my career in
              software development and gave me a solid foundation in the modern
              JavaScript ecosystem.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
