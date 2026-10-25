
import { motion } from "framer-motion";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

function About() {
  return (
    <section id="about" className="py-24 bg-white">
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

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* About Me */}
            <div className="space-y-6 text-gray-600 leading-8 text-lg">
              <p>
                Hello, I'm Hadia, a Junior Full Stack Developer
                who has completed a vocational higher education
                program in Full Stack Development with a
                specialization in JavaScript.
              </p>

              <p>
                During my education and LIA internship, I gained
                practical experience in developing web applications,
                working with frontend and backend technologies,
                databases, REST APIs, authentication, and
                secure application development.
              </p>

              <p>
                I have experience building applications using
                Java 21, Spring Boot, Spring Security, JavaScript,
                React, SQL, and REST APIs. During my LIA internship
                with FBK Balkan, I contributed to application
                features such as user management, team administration,
                role-based dashboards, form validation, and
                external API integrations.
              </p>

              <p>
                I am currently expanding my technical knowledge
                through ongoing studies in Cloud Native Computing
                at YH Akademin. My studies focus on cloud-native
                architecture, microservices, Docker, Kubernetes,
                Go, Python, and CI/CD practices.
              </p>

              <p>
                I enjoy solving technical problems, learning new
                technologies, and building reliable, maintainable
                software solutions. I am motivated to continue
                developing as a software engineer and contribute
                to a collaborative development team.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-6">

              <Card>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Cloud Native Computing
                </h3>

                <p className="text-blue-600 font-medium mb-4">
                  YH Akademin · In Progress
                </p>

                <p className="text-gray-600 leading-7 mb-5">
                  Currently expanding my knowledge of cloud-native
                  development, distributed applications, and
                  modern software delivery practices.
                </p>

                <ul className="space-y-3 text-gray-600">
                  <li>
                    ✓ Cloud-native architecture and microservices
                  </li>
                  <li>
                    ✓ Docker and containerization
                  </li>
                  <li>
                    ✓ Kubernetes and container orchestration
                  </li>
                  <li>
                    ✓ Go and Python for cloud-native development
                  </li>
                  <li>
                    ✓ CI/CD and automated delivery workflows
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Full Stack Developer
                </h3>

                <p className="text-blue-600 font-medium mb-4">
                  JavaScript Specialization · Completed 2026
                </p>

                <p className="text-gray-600 leading-7 mb-5">
                  Completed a vocational higher education program
                  focused on modern full-stack software development.
                </p>

                <ul className="space-y-3 text-gray-600">
                  <li>
                    ✓ Frontend development with JavaScript and React
                  </li>
                  <li>
                    ✓ Backend development with Java and Spring Boot
                  </li>
                  <li>
                    ✓ REST APIs and database development
                  </li>
                  <li>
                    ✓ Object-oriented programming
                  </li>
                  <li>
                    ✓ Software testing and debugging
                  </li>
                  <li>
                    ✓ Agile and secure software development
                  </li>
                </ul>
              </Card>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
