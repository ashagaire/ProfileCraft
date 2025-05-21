import { navLinks } from "../data/NavigationItems";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import SocialMedia from "./childComponents/SocialMedia";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import GameScoreDialog from "./childComponents/GameScoreDialog";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [open, setOpen] = useState(false);
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Arjun Paudel</h2>
            <p className="text-gray-400 max-w-md">
              A mechanical engineer specializing in design, analysis, and
              technical documentation for complex engineering systems.
            </p>
          </div>
          <SocialMedia textCss="text-gray-400 hover:text-white" />
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={1000}
                spy={true}
                offset={-70}
                className="footer-nav-link "
              >
                {link.label}
              </ScrollLink>
            ))}
            <>
              <SportsEsportsIcon
                fontSize="small"
                className="text-gray-400 hover:text-white"
                onClick={() => setOpen(true)}
                style={{ cursor: "pointer" }}
              />
              <GameScoreDialog open={open} onClose={() => setOpen(false)} />
            </>
          </nav>

          <div>
            <button className="custom-button-scroll-top">
              <ScrollLink
                key="home"
                to="home"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-70}
                className="footer-nav-link "
              >
                {FaArrowUp({ className: "text-l" })}
              </ScrollLink>
            </button>
          </div>
        </div>
        <div className="mt-4 pt-2 border-t border-gray-800 ">
          <p className="text-center text-gray-500">
            © copyright {currentYear} Arjun Paudel. <br /> Design and developed
            by{" "}
            <a target="_blank" href="http://ashagaire.com.np">
              ashagaire.com.np
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
