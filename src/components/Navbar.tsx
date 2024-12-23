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
      duration: 0,
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
            <div
              className="nav-item"
              onClick={() => scrollToSection("author-intro")}
            >
              Home
            </div>
          </li>
          <li>
            <div
              className="nav-item"
              onClick={() => scrollToSection("featured-books")}
            >
              Books
            </div>
          </li>
          <li>
            <div
              className="nav-item"
              onClick={() => scrollToSection("follow-sumaya")}
            >
              Follow Sumaya
            </div>
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
