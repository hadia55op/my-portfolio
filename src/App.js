/*import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <Hero />

    </div>
  );
}

export default App;*/
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <About />
      <Experience />
      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;