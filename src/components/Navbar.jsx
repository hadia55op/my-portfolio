import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Hadia<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/hadia55op"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>

          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">

          <div className="flex flex-col py-4">

            {links.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition"
              >
                {link.name}
              </a>

            ))}

          </div>

        </div>
      )}

    </header>
  );
}

export default Navbar;