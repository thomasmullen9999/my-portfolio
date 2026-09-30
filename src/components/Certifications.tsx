"use client";

import { useState } from "react";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(certifications[0]);

  return (
    <section className="certifications-section">
      <h2 className="certifications-title">Certifications</h2>

      <div className="certifications-container">
        <div className="certifications-grid" role="tablist">
          {certifications.map((cert) => {
            const isSelected = selectedCert.title === cert.title;

            return (
              <button
                key={cert.title}
                type="button"
                className={`certification-card ${
                  isSelected ? "active" : ""
                }`}
                onClick={() => setSelectedCert(cert)}
                role="tab"
                aria-selected={isSelected}
                aria-controls="certification-details"
              >
                <div className="certificate-image-wrapper">
                  <img
                    src={cert.imagesrc}
                    alt={`${cert.title} certificate`}
                    className="certificate-image"
                  />
                </div>

                <h3 className="certification-card-title">
                  {cert.title}
                </h3>

                <p className="certification-card-meta">
                  {cert.issuer} · {cert.date}
                </p>
              </button>
            );
          })}
        </div>

        <div
          id="certification-details"
          className="certification-details"
          role="tabpanel"
        >
          <div className="certification-detail-image-wrapper">
            <img
              src={selectedCert.imagesrc}
              alt={`${selectedCert.title} certificate`}
              className="certification-detail-image"
            />
          </div>

          <div className="certification-detail-content">
            <p className="certification-details-label">
              Selected certification
            </p>

            <h3 className="certification-details-title">
              {selectedCert.title}
            </h3>

            <p className="certification-details-meta">
              {selectedCert.issuer} · {selectedCert.date}
            </p>

            <div className="certification-details-description">
              {selectedCert.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {selectedCert.bullets && selectedCert.bullets.length > 0 && (
                <ul className="certification-details-list">
                  {selectedCert.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}