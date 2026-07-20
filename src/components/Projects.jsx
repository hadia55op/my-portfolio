import { motion } from "framer-motion";
import projects from "../data/projects";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import Badge from "./ui/Badge";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-50"
    >

      <div className="max-w-6xl mx-auto px-6">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <SectionTitle>
            Projects
          </SectionTitle>


          <div className="
            grid
            md:grid-cols-2
            gap-8
          ">


            {projects.map((project, index) => (

              <Card key={index}>


                {/* Title */}

                <h3 className="
                  text-2xl
                  font-bold
                  text-gray-900
                ">
                  {project.title}
                </h3>


                <p className="
                  text-blue-600
                  font-medium
                  mt-2
                ">
                  {project.subtitle}
                </p>



                {/* Description */}

                <p className="
                  mt-5
                  text-gray-600
                  leading-7
                ">
                  {project.description}
                </p>




                {/* Features */}

                <div className="mt-6">


                  <h4 className="
                    text-gray-900
                    font-semibold
                    mb-3
                  ">
                    Features
                  </h4>


                  <div className="flex flex-wrap gap-2">


                    {project.features.map((feature) => (

                      <Badge key={feature}>
                        {feature}
                      </Badge>

                    ))}


                  </div>


                </div>





                {/* Technology */}

                <div className="mt-6">


                  <h4 className="
                    text-gray-900
                    font-semibold
                    mb-3
                  ">
                    Tech Stack
                  </h4>



                  <div className="flex flex-wrap gap-2">


                    {project.tech.map((tech) => (

                      <Badge
                        key={tech}
                        color="gray"
                      >
                        {tech}
                      </Badge>

                    ))}


                  </div>


                </div>





                {/* Button */}

                <div className="mt-8">


                  {project.github ? (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      inline-flex
                      items-center
                      justify-center
                      px-5
                      py-3
                      rounded-xl
                      bg-blue-600
                      text-white
                      font-semibold
                      hover:bg-blue-700
                      transition
                      "
                    >
                      View Repository
                    </a>

                  ) : (

                    <span
                      className="
                      inline-flex
                      px-5
                      py-3
                      rounded-xl
                      bg-gray-100
                      text-gray-500
                      border
                      border-gray-200
                      "
                    >
                      Repository Coming Soon
                    </span>

                  )}


                </div>



              </Card>

            ))}


          </div>


        </motion.div>


      </div>


    </section>
  );
}

export default Projects;