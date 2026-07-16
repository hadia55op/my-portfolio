import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10">
          LIA Experience
        </h2>


        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">


          <h3 className="text-2xl font-semibold mb-2">
            Full Stack Developer Intern
          </h3>


          <p className="text-slate-400 mb-6">
            YH LIA Internship - Full Stack Development
          </p>



          <p className="text-slate-300 leading-8 mb-6">

            During my LIA period, I contributed to the development of a
            modern web application for managing FBK Balkan's sports
            activities. The platform was designed to digitalize and
            streamline administration, communication, player management,
            and public information.

          </p>



          <h4 className="text-xl text-cyan-400 mb-4">
            Project Overview
          </h4>


          <p className="text-slate-400 leading-7 mb-6">

            The application provides solutions for visitors, parents,
            coaches, and administrators through public pages,
            trial training registration, team administration,
            role-based dashboards, and integrations with external
            sports systems.

          </p>



          <h4 className="text-xl text-cyan-400 mb-4">
            My Contributions
          </h4>


          <ul className="list-disc ml-6 text-slate-400 space-y-3">


            <li>
              Developed and improved frontend functionality using
              Thymeleaf, Tailwind CSS, DaisyUI.
            </li>


            <li>
              Implemented and improved backend features using
              Spring Boot and Java.
            </li>


            <li>
              Worked with role-based authentication and authorization
              using Spring Security.
            </li>


            <li>
              Contributed to user management, team administration,
              player handling, and dashboard functionality.
            </li>


            <li>
              Developed and improved forms with validation and better
              user experience, including trial training workflows.
            </li>


            <li>
              Worked with debugging, bug fixing, testing, and improving
              existing user flows across frontend and backend.
            </li>


            <li>
              Participated in documentation, task planning, and version
              control using GitHub workflow.
            </li>


          </ul>



          <h4 className="text-xl text-cyan-400 mt-8 mb-4">
            Key Features Developed
          </h4>


          <ul className="list-disc ml-6 text-slate-400 space-y-3">


            <li>
              Trial training registration system with follow-up logic
              and GDPR considerations.
            </li>


            <li>
              Dynamic FAQ management and public website content.
            </li>


            <li>
              Team and player administration features.
            </li>


            <li>
              Role-based dashboards for administrators and coaches.
            </li>


            <li>
              Integration with external sports data APIs for matches
              and results.
            </li>


            <li>
              Communication features for contacting parents and teams.
            </li>


          </ul>




          <h4 className="text-xl text-cyan-400 mt-8 mb-4">
            Technologies Used
          </h4>


          <div className="flex flex-wrap gap-3">


            {[
              "Java 21",
              "Spring Boot",
              "Spring Security",
              "Thymeleaf",
              "HTMX",
              "Tailwind CSS",
              "DaisyUI",
              "PostgreSQL",
              "SQLite",
              "REST API",
              "Maven",
              "GitHub",
              "CI/CD",
              "Render",
              "Supabase"
            ].map((tech, index) => (

              <span
                key={index}
                className="bg-slate-800 px-4 py-2 rounded-lg text-slate-300"
              >
                {tech}
              </span>

            ))}


          </div>


        </div>


      </motion.div>


    </section>
  );
}

export default Experience;