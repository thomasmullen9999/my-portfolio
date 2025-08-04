import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="certifications-section">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert) => (
          <div key={cert.title} className="certification-card">
            <div className="certificate-image-wrapper">
              <img
                src={cert.imagesrc}
                alt={`${cert.title} certificate`}
                className="certificate-image"
              />
            </div>
            <div className="certification-text">
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-meta">
                {cert.issuer} | {cert.date}
              </p>
              <p className="certification-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
