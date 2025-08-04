export default function About() {
  return (
    <section className="about-container">
      <h2 className="about-title">About Me</h2>

      {/* Professional Summary */}
      <div className="about-card">
        <h3 className="section-subtitle">Background</h3>
        <p>
          I’m a passionate developer with a focus on building accessible,
          performant web apps that solve real-world problems.
        </p>
        <p>
          My interest in the tech industry stems from an enthusiasm for new and
          rising technologies, and the ways in which we can use them to improve
          business systems. I enjoy using deductive processes to solve problems
          and building applications tailored to client needs. In 2024, I
          completed a software development bootcamp with Northcoders, where I
          gained industry-ready skills and transitioned into a junior developer
          role.
        </p>
        <p>
          Since then, I've led projects as a sole developer and continued to
          refine my skills through both work and self-learning. With experience
          in a wide array of programming languages and a background in computer
          science, my goal is to advance toward a senior developer/engineer
          position.
        </p>
      </div>

      {/* Coding Images */}
      <div className="image-grid">
        <img
          src="/images/coding.png"
          alt="Colorful code on a screen"
          className="image-card"
        />
        <img
          src="/images/coding2.png"
          alt="Colorful code on another screen"
          className="image-card"
        />
      </div>

      {/* Personal Interests */}
      <div className="about-card">
        <h3 className="section-subtitle">Hobbies & Interests</h3>
        <p>
          I'm a self-taught bass guitarist and currently play in a band, which
          has sharpened my creativity, teamwork, and coordination. Some of my
          favourite bands include The Cure, The Smiths, Queen, Led Zeppelin,
          Nirvana, and Alice in Chains.
        </p>
        <p>
          I’m also an avid reader, especially of horror and thriller novels. I'm
          currently working on writing my first novel — a long-time goal of
          mine.
        </p>
      </div>

      {/* Personal Images */}
      <div className="image-grid personal">
        <img
          src="/images/bass.png"
          alt="Black bass guitar"
          className="image-card"
        />
        <img
          src="/images/shining.jpg"
          alt="The Shining by Stephen King"
          className="image-card"
        />
        <img
          src="/images/salemslot.jpg"
          alt="Salem's Lot by Stephen King"
          className="image-card"
        />
      </div>
    </section>
  );
}
