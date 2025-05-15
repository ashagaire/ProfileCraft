import { Button } from "@mui/material";
import cvImage from "../assets/cv_image.jpg";

export default function Home() {

  return (
    <section id="home" className="py-8  md:py-20" >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div 
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-primary">Arjun Paudel</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Mechanical Engineer
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              A diligent professional with extensive skills in mechanical modeling, analysis, machine design, and technical documentation. Currently working with nuclear power plant systems and documentation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="custom-button" variant="contained" disabled={false}>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button  className="custom-button-outline" variant="outlined" disabled={false}>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div 
            className={`md:w-1/2 flex justify-center transition-all duration-1000`}
          >
            <img 
              src={cvImage} 
              alt="Arjun Paudel - Mechanical Engineer" 
              className="rounded-full w-64 h-64 object-fill border-4 border-white shadow-xl" 
              loading="eager"
            />
          </div>
        </div>
        
        <div 
          className={`mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 `}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">6+</div>
            <div className="text-gray-600">Technical Skills</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
}
