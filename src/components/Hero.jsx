import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
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
          max-w-6xl
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >


        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
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
              max-w-xl
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
              items-center
              gap-5
              mt-10
            "
          >

            <a
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


          </div>


        </motion.div>






        {/* Right Image */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            flex
            justify-center
          "
        >


          <div
            className="
              relative
            "
          >


            {/* Glow */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-blue-200
                blur-3xl
                opacity-70
              "
            />



            {/* Circle */}

            <div
              className="
                relative
                w-80
                h-80
                rounded-full
                bg-gradient-to-br
                from-blue-600
                to-indigo-600
                p-2
                shadow-xl
              "
            >


              <div
                className="
                  w-full
                  h-full
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
              >

                {/* Replace later with your photo */}

                <span className="text-8xl">
                  👩‍💻
                </span>


              </div>


            </div>


          </div>


        </motion.div>



      </div>


    </section>
  );
}


export default Hero;