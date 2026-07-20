import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

function Skills() {

  const skillGroups = [
    {
      title: "Frontend Development",
      skills: [
        "JavaScript",
        "React",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Thymeleaf",
        "HTMX"
      ]
    },

    {
      title: "Backend Development",
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "REST APIs",
        "Maven"
      ]
    },

    {
      title: "Database & Tools",
      skills: [
        "SQL",
        "SQLite",
        "PostgreSQL",
        "Git",
        "GitHub",
        "CI/CD"
      ]
    },

    {
      title: "Development Practices",
      skills: [
        "Object-Oriented Programming",
        "Agile Development",
        "Testing",
        "Debugging",
        "Secure Software Development"
      ]
    }
  ];


  return (
    <section
      id="skills"
      className="
      py-24
      bg-white
      "
    >

      <div className="max-w-6xl mx-auto px-6">


        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7}}
          viewport={{once:true}}
        >


          <SectionTitle>
            Skills
          </SectionTitle>



          <div className="
            grid
            md:grid-cols-2
            gap-8
          ">


            {skillGroups.map((group,index)=>(

              <Card key={index}>


                <h3 className="
                  text-2xl
                  font-bold
                  text-gray-900
                  mb-6
                ">
                  {group.title}
                </h3>



                <div className="
                  flex
                  flex-wrap
                  gap-3
                ">


                  {group.skills.map((skill)=>(

                    <span
                      key={skill}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-blue-50
                      text-blue-700
                      border
                      border-blue-100
                      text-sm
                      font-medium
                      hover:bg-blue-100
                      transition
                      "
                    >
                      {skill}
                    </span>

                  ))}


                </div>


              </Card>

            ))}


          </div>


        </motion.div>


      </div>


    </section>
  );
}


export default Skills;