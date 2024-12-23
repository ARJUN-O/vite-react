import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to scroll to a specific section
  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Sumaya's World</Link>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="section1" onClick={() => scrollToSection("author-intro")}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="section2"
              onClick={() => scrollToSection("featured-books")}
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="section3"
              onClick={() => scrollToSection("follow-sumaya")}
            >
              Follow Sumaya
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
