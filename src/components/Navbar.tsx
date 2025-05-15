import { useState } from "react";
import { Button } from "@mui/material";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import logoImage from "../assets/logo.png";
import {navLinks} from "../data/NavigationItems";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
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
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                activeClass="active"
                className="nav-link font-medium"
              >
                {link.label}
              </ScrollLink>
            ))}
            <Button className="custom-button" variant="contained" disabled={false}>
              <a href="/ArjunPaudelCV.pdf" download className="inline-flex items-center">
                <span className="mr-2">Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </Button>
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
          <div className="md:hidden mt-4 pb-2">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                activeClass="active"
                className="block py-2 text-gray-700 hover:text-primary font-medium cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </ScrollLink>
            ))}
            <Button className="custom-button mt-2" variant="contained" color="primary" disabled={false} >
              <a href="/ArjunPaudelCV.pdf" download className="inline-flex items-center">
                <span className="mr-2">Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}