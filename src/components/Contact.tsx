import "./Contact.css";

export default function Contact() {
  return (
    <footer className="contact-footer">
      <div className="contact-container">
        <h3 className="contact-heading">Get in Touch</h3>

        <div className="contact-links">
          <a
            href="mailto:thomasmullen9999@gmail.com"
            className="contact-link"
            aria-label="Send Email"
          >
            <span className="contact-icon" role="img" aria-hidden="true">
              📧
            </span>
            Email
          </a>
          <a
            href="https://github.com/thomasmullen9999"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="GitHub Profile"
          >
            <span className="contact-icon" role="img" aria-hidden="true">
              🐙
            </span>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-mullen-2591932b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="LinkedIn Profile"
          >
            <span className="contact-icon" role="img" aria-hidden="true">
              💼
            </span>
            LinkedIn
          </a>
        </div>

        <p className="contact-copy">&copy; 2025. All rights reserved.</p>
      </div>
    </footer>
  );
}
