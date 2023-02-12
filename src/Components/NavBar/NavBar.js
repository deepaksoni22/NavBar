import React from "react";
import "./NavBar.css";
import { useState } from "react";
import {
  FaFacebook,
  FaHamburger,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { DiApple } from "react-icons/di";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <Link to="/">
              {" "}
              <DiApple />
            </Link>
          </h2>
        </div>
        <div className={mobileMenu ? "mobile-menu" : "menu-link"}>
          {/* menu-Contents */}
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <a href="..." onClick={() => setMobileMenu(!mobileMenu)}>
            <FaHamburger />
          </a>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="...">
                <FaFacebook className="facebook" />
              </a>
            </li>
            <li>
              <a href="...">
                <FaInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a href="...">
                <FaLinkedin className="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
