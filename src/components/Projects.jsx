/*import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project,index)=>(

          <div
            key={index}
            className="bg-slate-900 rounded-xl p-6 hover:-translate-y-2 transition"
          >

            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-6">
              {project.description}
            </p>

            <div className="flex gap-4">

              <a
                href={project.github}
                className="text-cyan-400"
              >
                GitHub
              </a>

              <a
                href={project.live}
                className="text-cyan-400"
              >
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;*/
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white">
              {project.title}
            </h3>

            <p className="text-cyan-400 text-sm mt-1">
              {project.subtitle}
            </p>

            <p className="text-slate-400 mt-5 leading-7">
              {project.description}
            </p>

            {/* Features */}

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">
                Features
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}

            {/* Button */}

            <div className="mt-8">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-2 rounded-lg transition"
                >
                  GitHub Repository
                </a>
              ) : (
                <span className="inline-block bg-slate-800 text-slate-400 px-5 py-2 rounded-lg">
                  Repository Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;