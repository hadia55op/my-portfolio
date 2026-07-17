import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 text-lg mb-4">
            Hello, I'm
          </p>


          <h1 className="text-5xl md:text-7xl font-bold mb-5">
            Hadia Khalil
          </h1>


          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
            Full Stack Developer
          </h2>


          <p className="text-slate-400 leading-7 max-w-xl mb-8">
            Full Stack Developer with a YH education and practical LIA experience.
            Experienced in developing modern web applications using React, Java,
            Spring Boot, databases, REST APIs, and agile development practices.
          </p>



          <div className="flex gap-4 flex-wrap">


            <a
              href="#projects"
              className="
              bg-cyan-500
              text-slate-950
              px-6
              py-3
              rounded-lg
              font-semibold
              hover:bg-cyan-400
              transition
              "
            >
              View Projects
            </a>



            <a
              href="#contact"
              className="
              border
              border-cyan-500
              px-6
              py-3
              rounded-lg
              hover:bg-cyan-500
              hover:text-black
              transition
              "
            >
              Contact Me
            </a>


          </div>



          <div className="flex gap-6 mt-8 text-2xl">

            <a
              href="https://github.com/hadia55op"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            {/*
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
            */}

          </div>


        </motion.div>





        {/* Right Side Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div
            className="
            w-72
            h-72
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-blue-600
            p-1
            "
          >

            <div
              className="
              w-full
              h-full
              rounded-full
              bg-slate-950
              flex
              items-center
              justify-center
              "
            >

              <span className="text-7xl">
                👨‍💻
              </span>


            </div>


          </div>


        </motion.div>


      </div>


    </section>
  );
}

export default Hero;