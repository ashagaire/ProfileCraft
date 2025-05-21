import { Link as ScrollLink } from "react-scroll";
import { Button } from "@mui/material";

export default function Info() {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Hi, I'm <span className="text-primary">Arjun Paudel</span>
      </h2>
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        Mechanical Engineer
      </h3>
      <p className="text-lg text-gray-600 mb-8">
        A diligent professional with extensive skills in mechanical modeling,
        analysis, machine design, and technical documentation. Recently worked
        with nuclear power plant systems and documentation.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button className="custom-button" variant="contained" disabled={false}>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-65}>
            Get in Touch
          </ScrollLink>
        </Button>
        <Button
          className="custom-button-outline"
          variant="outlined"
          disabled={false}
        >
          <ScrollLink to="projects" smooth={true} duration={500} offset={-65}>
            View Projects
          </ScrollLink>
        </Button>
      </div>
    </>
  );
}
