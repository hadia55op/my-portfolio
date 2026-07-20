import { motion } from "framer-motion";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="
      py-24
      bg-white
      "
    >

      <div className="max-w-6xl mx-auto px-6">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <SectionTitle>
            About Me
          </SectionTitle>


          <div className="
            grid
            lg:grid-cols-2
            gap-12
            items-start
          ">


            {/* Text */}

            <div className="
              space-y-6
              text-gray-600
              leading-8
              text-lg
            ">

              <p>
                Hello, I'm Hadia, a Full Stack Developer who recently
                completed a YH education specializing in JavaScript
                development.
              </p>


              <p>
                During my education, I gained practical and theoretical
                experience in modern software development, including
                frontend development, backend development, databases,
                object-oriented programming, testing, debugging, and
                agile development methods.
              </p>


              <p>
                I have experience building applications using
                JavaScript, React, Java, Spring Boot, REST APIs, and SQL
                databases. I enjoy creating clean, responsive, and
                maintainable solutions with a focus on good user
                experience.
              </p>


              <p>
                I continue developing my skills by exploring new
                technologies such as React, Thymeleaf, and Python.
                I enjoy solving problems and building complete
                solutions from frontend interfaces to backend services.
              </p>


            </div>



            {/* Education Card */}

            <Card>

              <h3 className="
                text-2xl
                font-bold
                text-gray-900
                mb-5
              ">
                Full Stack Developer Education
              </h3>


              <p className="
                text-blue-600
                font-medium
                mb-6
              ">
                YH Education - JavaScript Specialization
              </p>


              <ul className="
                space-y-4
                text-gray-600
              ">


                <li>
                  ✓ Frontend development with JavaScript and React
                </li>


                <li>
                  ✓ Backend development with Java and Spring Boot
                </li>


                <li>
                  ✓ REST API development
                </li>


                <li>
                  ✓ Database development and SQL
                </li>


                <li>
                  ✓ Object-oriented programming
                </li>


                <li>
                  ✓ Secure software development
                </li>


                <li>
                  ✓ Agile development methods
                </li>


                <li>
                  ✓ Testing and debugging
                </li>


              </ul>


            </Card>


          </div>


        </motion.div>


      </div>


    </section>
  );
}

export default About;