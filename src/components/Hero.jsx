import { motion } from "framer-motion";
import Button from "./ui/Button";
function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
        pt-20
        bg-gradient-to-br
        from-white
        via-slate-50
        to-blue-50
      "
    >

      {/* Background Glow Effects */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
        "
      >

        <div
          className="
            absolute
            -top-52
            -right-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-200
            blur-[120px]
            opacity-30
          "
        />


        <div
          className="
            absolute
            bottom-0
            -left-32
            w-[350px]
            h-[350px]
            rounded-full
            bg-cyan-100
            blur-[120px]
            opacity-40
          "
        />

      </div>



      {/* Main Content */}

      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          px-6
          text-center
        "
      >

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >


          <p
            className="
              text-blue-600
              font-semibold
              uppercase
              tracking-widest
              mb-4
            "
          >
            Full Stack Developer
          </p>



          <h1
            className="
              text-5xl
              md:text-6xl
              font-extrabold
              text-gray-900
              leading-tight
            "
          >

            Hi, I'm
            <br />

            <span className="text-blue-600">
              Hadia Khalil
            </span>

          </h1>



          <p
            className="
              mt-6
              text-lg
              text-gray-600
              leading-8
              max-w-2xl
              mx-auto
            "
          >
            Full Stack Developer with YH education and practical LIA
            experience developing responsive web applications using React,
            Java, Spring Boot, SQL databases, REST APIs and agile
            development practices.
          </p>



          {/* Buttons */}

          <div
            className="
              flex
              justify-center
              flex-wrap
              gap-4
              mt-10
            "
          >

            <Button href="#projects">
              View Projects
            </Button>



            <Button
              href="#contact"
              variant="secondary"
            >
              Contact Me
            </Button>


          </div>



          {/* Social Links */}

          <div
            className="
              flex
              justify-center
              items-center
              gap-5
              mt-10
            "
          >

            {/*<a
              href="https://github.com/hadia55op"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                text-2xl
                text-gray-600
                hover:text-blue-600
                transition
              "
            >

              <FaGithub />

            </a>
*/}

          </div>


        </motion.div>


      </div>


    </section>
  );
}


export default Hero;