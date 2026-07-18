function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24"
    >
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          Contact Me
        </h2>

        <p className="text-slate-400 mb-10">
          Interested in working together?
          Let's build something amazing.
        </p>

        <a
          href="mailto:hadizaidkhan@gmail.com"
          className="bg-cyan-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 transition"
        >
          Send Email
        </a>

      </div>
    </section>
  );
}

export default Contact;