import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen ">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="mt-20 ">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>

        {/* 
          <section id="skills">
            <Skills />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="contact">
            <Contact />
          </section> */}
      </div>
      {/* <Footer /> */}
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
