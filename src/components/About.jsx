/*import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.6}}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          About Me
        </h2>

        <p className="text-slate-400 leading-8">
          I'm a Full Stack Developer passionate about creating modern,
          responsive web applications.

          I enjoy building applications using React, Java, Spring Boot,
          REST APIs, MySQL and Tailwind CSS.

          My goal is to build clean, scalable software that provides a
          great user experience.
        </p>
      </motion.div>
    </section>
  );
}

export default About;*/
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8">
          About Me
        </h2>


        <div className="grid md:grid-cols-2 gap-10 items-start">


          {/* About Text */}
          <div className="text-slate-300 leading-8 space-y-5">

            <p>
              Hello, I'm Hadia, a Full Stack Developer who recently
              completed a YH education specializing in JavaScript
              development.
            </p>


            <p>
              During my education, I gained practical and theoretical
              knowledge in modern software development, including
              frontend development, backend development, databases,
              object-oriented programming, secure software development,
              testing, debugging, and agile development methods.
            </p>


            <p>
              I have experience building web applications using
              JavaScript, React, Java, Spring Boot, REST APIs, SQL
              databases, and modern frontend technologies. I enjoy
              creating clean, responsive, and user-friendly applications
              while focusing on quality, maintainability, and good
              development practices.
            </p>


            <p>
              In addition to my formal education, I have continued
              expanding my skills independently by learning technologies
              such as React, Thymeleaf, and Python. I enjoy exploring new
              tools and improving my ability to develop complete solutions
              from frontend interfaces to backend services.
            </p>


            <p>
              I am passionate about problem-solving, continuous learning,
              and working together with development teams to create
              reliable software solutions. I am currently looking for
              opportunities where I can contribute my skills, grow as a
              developer, and continue developing professionally.
            </p>

          </div>



          {/* Education Card */}
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">


            <h3 className="text-2xl font-semibold text-cyan-400 mb-5">
              Full Stack Developer Education
            </h3>


            <p className="text-slate-300 mb-5">
              YH Education - JavaScript Specialization
            </p>


            <ul className="space-y-3 text-slate-400">


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
                ✓ Testing, debugging, and version control
              </li>


            </ul>


          </div>


        </div>


      </motion.div>


    </section>
  );
}

export default About;