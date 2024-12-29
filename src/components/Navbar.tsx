import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for detecting clicks outside
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate();

  // Function to scroll to a specific section
  const scrollToSection = (section: string) => {
    navigate("/");
    scroller.scrollTo(section, {
      duration: 0,
      smooth: true,
    });
  };

  // Close menu on outside click
  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Sumaya's World</Link>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
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
