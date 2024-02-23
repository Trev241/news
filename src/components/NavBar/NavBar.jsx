import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img
              src="/src/images/logo.png"
              alt="SYT News Logo"
              width={150}
              height={50}
            />
          </a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/news" className="navbar-link">
              News
            </a>
          </li>
          <li className="navbar-item">
            <a href="/sport" className="navbar-link">
              Sports
            </a>
          </li>
          <li className="navbar-item">
            <a href="/radio" className="navbar-link">
              Radio
            </a>
          </li>
          <li className="navbar-item">
            <a href="/tv" className="navbar-link">
              TV
            </a>
          </li>
          <li className="navbar-item">
            <a href="/trending" className="navbar-link">
              Trending
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              More
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
