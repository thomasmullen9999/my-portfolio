"use client";

import React from "react";
import { skills } from "@/data/skills";
import "./Skills.css";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <Image
              src={skill.image}
              alt={skill.name}
              width={48}
              height={48}
              className="skill-icon"
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
