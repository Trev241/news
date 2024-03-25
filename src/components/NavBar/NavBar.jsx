import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();

    let query = e.target.query.value;
    navigate(`/search?query=${query}`);
  };

  return (
    <nav className="bg-black p-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center navbar-logo">
            <a href="/">
              <img
                src="/src/images/logo.png"
                alt="SYT News Logo"
                width={150}
                height={50}
              />
            </a>
          </div>

          {/* <div className="col-lg-6 p-3">
            <ul className="d-flex flex-wrap m-0 p-0 justify-content-between">
              <li className="">
                <a href="/news" className="navbar-link">
                  News
                </a>
              </li>
              <li className="">
                <a href="/sport" className="navbar-link">
                  Sports
                </a>
              </li>
              <li className="">
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
          </div> */}

          <div className="col d-flex justify-content-center align-items-center">
            <form onSubmit={onSearch}>
              <input id="query" className="p-1" placeholder="Search" />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
