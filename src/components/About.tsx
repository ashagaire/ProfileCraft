import { Button } from "@mui/material";
import { FaLinkedin, FaGithub, FaCertificate } from "react-icons/fa";
import profileImage from "../assets/profile_about.jpg";
import { Link as ScrollLink } from "react-scroll";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <img
              src={profileImage}
              alt="Arjun Paudel"
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square"
              loading="eager"
            />
          </div>

          <div className="md:w-3/5 md:pl-12">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Professional Background
            </h3>
            <p className="text-gray-700 mb-6">
              I am a Mechanical Engineer with expertise in design, analysis, and
              technical documentation. Currently serving as a Design Handover
              Engineer at the Olkiluoto Nuclear Power Plant, I specialize in
              technical documentation management, client communication, and
              engineering coordination.
            </p>

            <h3 className="text-2xl font-semibold text-primary mb-4">
              Education & Expertise
            </h3>
            <p className="text-gray-700 mb-6">
              I hold a Bachelor's degree in Mechanical Engineering and
              Production Technology from Saimaa University of Applied Sciences
              in Finland, graduating with a GPA of 4.2/5. My expertise includes
              mechanical modeling using SolidWorks, mathematical programming
              with MATLAB, PLC programming with FluidSIM, and advanced Excel
              applications.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Location</h4>
                <p className="text-gray-700">Finland</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-700">4+ Years</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Degree</h4>
                <p className="text-gray-700">
                  Bachelor's in Mechanical Engineering
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Languages</h4>
                <p className="text-gray-700">English, Finnish</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://www.linkedin.com/in/arjun-paudel-a39378318/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 flex items-center"
                aria-label="LinkedIn Profile"
              >
                {FaLinkedin({ className: "text-2xl mr-1" })}
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/arjunspaudel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 flex items-center"
                aria-label="GitHub Profile"
              >
                {FaGithub({ className: "text-2xl mr-1" })}
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-WJQTE6DU4V"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 flex items-center"
                aria-label="SolidWorks Certification"
              >
                {FaCertificate({ className: "text-2xl mr-1" })}
                <span className="text-sm">SolidWorks Certification</span>
              </a>
              <div className="ml-auto mt-4 md:mt-0">
                <Button
                  variant="contained"
                  color="primary"
                  className="custom-button"
                >
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-65}
                  >
                    Contact Me
                  </ScrollLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
