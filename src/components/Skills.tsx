"use client";

import React from "react";
import { skills } from "@/data/skills";
import Image from "next/image";

const categories = [
  {
    title: "Languages",
    skillNames: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "C#",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skillNames: [
      "React.js",
      "Next.js",
      "Vue.js",
      "React Native",
      "Angular",
      "Node.js",
      "Express.js",
      "Flask",
      "Prisma",
      ".NET",
    ],
  },
  {
    title: "Databases",
    skillNames: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    title: "API & Web",
    skillNames: ["REST", "GraphQL", "Postman", "Insomnia"],
  },
  {
    title: "Testing",
    skillNames: [
      "Jest",
      "Supertest",
      "Cypress",
      "Test Driven Development (TDD)",
    ],
  },
  {
    title: "Tools & DevOps",
    skillNames: [
      "Git/GitHub",
      "CI/CD (GitHub Actions)",
      "Vercel",
      "Netlify",
      "Cloudflare",
      "Docker",
      "Bitbucket", 
      "Jira"
    ],
  },
  { 
    title: "Soft Skills/Methodologies",
    skillNames: [
      "Paired Programming", "Technical Communication", "SDLC", "Agile/SCRUM"
    ]
  }
];

const Skills = () => {
  const getSkillsForCategory = (skillNames: string[]) => {
    return skills.filter((skill) =>
      skillNames.some(
        (name) => skill.name.toLowerCase() === name.toLowerCase(),
      ),
    );
  };

  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-categories">
        {categories.map(({ title, skillNames }) => {
          const categorySkills = getSkillsForCategory(skillNames);
          if (categorySkills.length === 0) return null;

          return (
            <div key={title} className="skills-category">
              <h3 className="category-label">{title}</h3>
              <div className="skills-grid">
                {categorySkills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="skill-icon"
                    />
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
