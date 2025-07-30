// src/components/Contact.tsx
export default function Contact() {
  return (
    <section className="text-center my-20 px-4">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-400">
        Email me at{" "}
        <a
          href="mailto:thomasmullen9999@gmail.com"
          className="text-primary underline"
        >
          thomasmullen9999@gmail.com
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/thomasmullen9999">thomasmullen9999</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/thomas-mullen-2591932b2/">
          Thomas Mullen
        </a>
      </p>
    </section>
  );
}
