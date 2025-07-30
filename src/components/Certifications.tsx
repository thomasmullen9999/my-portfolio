import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((cert) => (
          <div key={cert.title} className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-gray-400">
              {cert.issuer} | {cert.date}
            </p>
            <img width={400} src={cert.imagesrc}></img>
            <p className="text-gray-400">{cert.description}</p>
            <br></br>
          </div>
        ))}
      </div>
    </section>
  );
}
