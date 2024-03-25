import React from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../images/logo.png";

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
              <img src={logo} alt="SYT News Logo" width={150} height={50} />
            </a>
          </div>

          <div className="col-lg-6 p-3">
            <ul className="d-flex flex-wrap m-0 p-0 justify-content-evenly">
              <li className="">
                <Link to="/category/local" className="navbar-link">
                  Local
                </Link>
              </li>
              <li className="">
                <Link to="/category/global" className="navbar-link">
                  Global
                </Link>
              </li>
              <li className="">
                <Link to="/category/sports" className="navbar-link">
                  Sports
                </Link>
              </li>
            </ul>
          </div>

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
