export default function About() {
  return (
    <section className="about-container">
      <h2 className="about-title">About</h2>

      <div className="about-layout">
        <div className="about-card professional-card">
          <h3 className="section-subtitle">Professional Background</h3>

          <p>
            I’m a passionate developer with a focus on building accessible,
            performant web apps that solve real-world problems. My interest
            in tech stems from an enthusiasm for new and rising technologies,
            and the ways in which we can use them to improve business
            systems.
          </p>

          <p>
            I enjoy using deductive processes to solve problems and building
            applications tailored to client needs. In 2024, I completed a
            software engineering bootcamp with Northcoders, where I gained
            industry-ready skills and transitioned into a full stack
            developer role.
          </p>

          <p>
            Since then, I've led projects as a sole developer and continued
            to refine my skills through both work and self-learning. With
            experience in a wide range of technologies and a background in
            computer science, my goal is to advance toward a senior
            developer/engineer position.
          </p>
        </div>

        <div className="about-images">
          <div className="about-image-wrapper">
            <img
              src="/images/coding.png"
              alt="Colorful code on a screen"
              className="image-card"
            />
          </div>

          <div className="about-image-wrapper">
            <img
              src="/images/bass.png"
              alt="Black bass guitar"
              className="image-card"
            />
          </div>

          <div className="about-image-wrapper">
            <img
              src="/images/malaga.jpg"
              alt="Malaga sunset"
              className="image-card"
            />
          </div>
        </div>

        <div className="about-card hobbies-card">
          <h3 className="section-subtitle">Hobbies & Interests</h3>

          <p>
            I'm a self-taught bass guitarist and have experience playing in
            several bands, which has sharpened my creativity, teamwork, and
            coordination. Playing different genres with friends and bandmates
            has improved my adaptability, while also giving me experience
            collaborating with others in the music industry and recording
            tracks.
          </p>

          <p>
            I enjoy travelling, exploring new places and learning about
            different cultures. I'm also an avid reader of both fiction and
            non-fiction, and I'm currently working on writing my first novel,
            a long-time goal of mine.
          </p>
        </div>
      </div>
    </section>
  );
}