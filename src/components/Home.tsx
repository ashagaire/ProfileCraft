import cvImage from "../assets/cv_image.jpg";
import { Slide } from "@mui/material";
import Info from "./childComponents/Info";

export default function Home() {
  return (
    <section id="home" className="py-8 mt-20  md:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <Slide direction="right" in={true} timeout={1000}>
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Info />
            </div>
          </Slide>
          <Slide direction="left" in={true} timeout={1000}>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={cvImage}
                alt="Arjun Paudel - Mechanical Engineer"
                className="rounded-full w-64 h-64 object-fill border-4 border-white shadow-xl"
                loading="eager"
              />
            </div>
          </Slide>
        </div>

        <Slide direction="up" in={true} timeout={1000}>
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 ">
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
        </Slide>
      </div>
    </section>
  );
}
