import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import logoImage from "../assets/logo.png";
import { navLinks } from "../data/NavigationItems";
import CV from "./childComponents/CV";
import PreviewButton from "./childComponents/PreviewButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const hrefCV =
    "https://1drv.ms/b/c/3cd3ee4c6c17f4cd/EQ766Q1omRJIsYrqHi3lvJQBEGWmJ0Zi00JQwosbw7xiQg?e=eP2WT7";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8  py-4">
        <div className="flex items-center justify-between h-8 lg:h-10">
          <div className="flex items-center mr-2 ">
            <ScrollLink to="home" smooth={true} duration={500} offset={-100}>
              <img
                src={logoImage}
                alt="Arjun Paudel Logo"
                className="max-h-10 cursor-pointer"
              />
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden  md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
                className="nav-link font-medium"
              >
                {link.label}
              </ScrollLink>
            ))}
            <div className="hidden md:block lg:hidden">
              <PreviewButton href={hrefCV} />
            </div>
            <div className="hidden lg:block ">
              <CV />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
            style={{ top: "64px" }}
            onClick={toggleMenu}
          >
            <div
              className="block lg:hidden px-4 pb-4 bg-[#F8FAFC] shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-65}
                  className="block py-2 text-gray-700 hover:text-primary font-medium cursor-pointer border-b-2 border-gray-200 "
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </ScrollLink>
              ))}
              <div className="mt-4">
                <div>
                  <PreviewButton href={hrefCV} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
