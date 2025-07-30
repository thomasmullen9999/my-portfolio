"use client";

import React, { useEffect, useState } from "react";
import "./Navbar.css";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        width: "100%",
        padding: "1rem 2rem",
        backgroundColor: "#1a1a1a",
        color: "white",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="navbar-content">
        <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{
                  color: activeSection === id ? "#3b82f6" : "white", // highlight blue
                  fontWeight: activeSection === id ? "bold" : "normal",
                  transition: "color 0.2s ease",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
