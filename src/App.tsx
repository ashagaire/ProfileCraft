import { Container, Box, Typography } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen ">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        {/* <div className="mt-20">
          <section id="asha" className="w-full -mt-20 ">
            <Asha />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div> */}
        {/* <Footer /> */}
        {/* <ToastContainer /> */}
      </div>
  );
}

export default App;
