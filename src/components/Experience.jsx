import { motion } from "framer-motion";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

function Experience() {

  const technologies = [
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
  ];


  const contributions = [
    "Developed frontend functionality using Thymeleaf, Tailwind CSS, and DaisyUI.",
    "Implemented backend features using Java and Spring Boot.",
    "Worked with role-based authentication and authorization using Spring Security.",
    "Contributed to user management, team administration, player handling, and dashboards.",
    "Improved forms with validation and better user experience.",
    "Performed debugging, testing, and improvement of existing workflows.",
    "Participated in documentation, planning, and GitHub workflows."
  ];


  const features = [
    "Trial training registration system",
    "Dynamic FAQ management",
    "Team and player administration",
    "Role-based dashboards",
    "External sports API integration",
    "Communication features"
  ];


  return (
    <section
      id="experience"
      className="py-24 bg-gray-50"
    >

      <div className="max-w-6xl mx-auto px-6">


        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7}}
          viewport={{once:true}}
        >


          <SectionTitle>
            LIA Experience
          </SectionTitle>



          <Card>


            {/* Header */}

            <div className="mb-10">

              <h3 className="
                text-3xl
                font-bold
                text-gray-900
              ">
                Full Stack Developer Intern
              </h3>


              <p className="
                mt-2
                text-blue-600
                font-medium
              ">
                YH LIA Internship - Full Stack Development
              </p>

            </div>



            {/* Description */}

            <p className="
              text-gray-600
              leading-8
              text-lg
              mb-10
            ">

              During my LIA period, I contributed to the development
              of a modern web application for managing FBK Balkan's
              sports activities. The platform was created to improve
              administration, communication, player management, and
              public information.

            </p>



            {/* Project Overview */}

            <div className="mb-10">

              <h4 className="
                text-xl
                font-bold
                text-gray-900
                mb-4
              ">
                Project Overview
              </h4>


              <p className="
                text-gray-600
                leading-7
              ">

                The application provides solutions for visitors,
                parents, coaches, and administrators through public
                pages, trial registration, team administration,
                dashboards, and external sports integrations.

              </p>


            </div>



            {/* Contributions */}

            <div className="mb-10">

              <h4 className="
                text-xl
                font-bold
                text-gray-900
                mb-5
              ">
                My Contributions
              </h4>


              <ul className="
                space-y-3
                text-gray-600
              ">

                {contributions.map((item,index)=>(
                  <li
                    key={index}
                    className="flex gap-3"
                  >

                    <span className="text-blue-600">
                      ✓
                    </span>

                    <span>
                      {item}
                    </span>

                  </li>
                ))}


              </ul>


            </div>




            {/* Features */}

            <div className="mb-10">


              <h4 className="
                text-xl
                font-bold
                text-gray-900
                mb-5
              ">
                Key Features Developed
              </h4>


              <div className="grid md:grid-cols-2 gap-4">


                {features.map((feature,index)=>(

                  <div
                    key={index}
                    className="
                    bg-gray-50
                    border
                    border-gray-200
                    rounded-xl
                    p-4
                    text-gray-600
                    "
                  >

                    {feature}

                  </div>

                ))}


              </div>


            </div>




            {/* Technologies */}


            <div>


              <h4 className="
                text-xl
                font-bold
                text-gray-900
                mb-5
              ">
                Technologies Used
              </h4>


              <div className="flex flex-wrap gap-3">


                {technologies.map((tech,index)=>(

                  <span
                    key={index}
                    className="
                    bg-blue-50
                    text-blue-700
                    border
                    border-blue-100
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    "
                  >

                    {tech}

                  </span>

                ))}


              </div>


            </div>



          </Card>


        </motion.div>


      </div>


    </section>
  );
}


export default Experience;