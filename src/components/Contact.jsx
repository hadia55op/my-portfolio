import { FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white"
    >

      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7}}
          viewport={{once:true}}
        >

          <SectionTitle>
            Contact Me
          </SectionTitle>


          <p className="text-gray-600 text-lg mb-8">
            I'm currently looking for opportunities where I can
            contribute as a Full Stack Developer.
          </p>


          <div
            className="
            flex
            flex-col
            items-center
            gap-4
            "
          >

            <div
              className="
              flex
              items-center
              gap-3
              text-gray-700
              "
            >

              <FaEnvelope className="text-blue-600"/>

              <a
                href="mailto:hadizaidkhan@gmail.com"
                className="
                hover:text-blue-600
                transition
                "
              >
                hadizaidkhan@gmail.com
              </a>

            </div>



            <Button href="mailto:hadizaidkhan@gmail.com">
              Send Email
            </Button>





          </div>


        </motion.div>

      </div>

    </section>
  );
}

export default Contact;