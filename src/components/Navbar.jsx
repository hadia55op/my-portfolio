import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">

        </h1>


        <div className="hidden md:flex items-center gap-8 text-slate-300">

          <a href="#about" className="hover:text-cyan-400">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>

        </div>


     <div className="flex gap-4 text-xl">

       <a
         href="https://github.com/hadia55op"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="GitHub Profile"
         className="hover:text-cyan-400"
       >
         <FaGithub />
       </a>

       {/*
       <a
         href="https://www.linkedin.com/in/your-linkedin-profile/"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="LinkedIn Profile"
         className="hover:text-cyan-400"
       >
         <FaLinkedin />
       </a>
       */}

     </div>


      </div>

    </nav>
  );
}

export default Navbar;