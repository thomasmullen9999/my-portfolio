"use client";

import { useState } from "react";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(certifications[0]);

  return (
    <section className="certifications-section">
      <h2 className="certifications-title">Certifications</h2>

      <div className="certifications-container">
        {/* Certificate grid */}
        <div className="certifications-grid" role="tablist">
          {certifications.map((cert, index) => {
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

                <span className="certification-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected certificate details */}
        <div
          id="certification-details"
          className="certification-details"
          role="tabpanel"
        >
          <div className="certification-details-header">
            <div>
              <p className="certification-details-label">
                Selected certification
              </p>

              <h3 className="certification-details-title">
                {selectedCert.title}
              </h3>

              <p className="certification-details-meta">
                {selectedCert.issuer} · {selectedCert.date}
              </p>
            </div>
          </div>

          <p className="certification-details-description">
            {selectedCert.description}
          </p>
        </div>
      </div>
    </section>
  );
}