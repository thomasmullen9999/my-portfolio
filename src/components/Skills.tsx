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
      "Python",
      "SQL",
      "HTML/CSS",
      "C#",
    ],
  },
  {
    title: "Frameworks/Libraries",
    skillNames: [
      "React",
      "Next.js",
      "Vue.js",
      "React Native",
      "Node.js",
      "Express.js",
      ".NET",
      "Flask",
      "Prisma",
    ],
  },
  {
    title: "Databases",
    skillNames: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
    ],
  },
  {
    title: "API/Web",
    skillNames: [
      "REST",
      "GraphQL",
      "Postman",
      "Insomnia",
    ],
  },
    {
    title: "Development Tools",
    skillNames: [
      "Git/GitHub",
      "Bitbucket",
      "Jira",
      "CI/CD",
      "Vercel",
      "Netlify",
      "Cloudflare",
      "Docker",
    ],
  },
  {
    title: "Testing & Soft Skills",
    skillNames: [
      "Jest",
      "Supertest",
      "Cypress",
      "TDD",
      "Pairing",
      "Comms",
      "SDLC",
      "Agile/SCRUM",
    ],
  },

];

const normaliseSkillName = (name: string) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
};

export default function Skills() {
  const getSkillsForCategory = (skillNames: string[]) => {
    const normalisedNames = skillNames.map(normaliseSkillName);

    return skills.filter((skill) =>
      normalisedNames.includes(normaliseSkillName(skill.name)),
    );
  };

  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>

      <div className="skills-categories">
        {categories.map(({ title, skillNames }) => {
          const categorySkills = getSkillsForCategory(skillNames);

          return (
            <div className="skills-category" key={title}>
              <h3 className="category-label">{title}</h3>

              <div className="skills-grid">
                {categorySkills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={36}
                      height={36}
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
}