import React from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../images/logo.png";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();

    let query = e.target.query.value;
    navigate(`/search?query=${query}`);
  };

  return (
    <nav className="bg-black p-2">
      <div className="d-flex justify-content-around">
        <div className="d-flex justify-content-center align-items-center px-5">
          <a href="/">
            {/* <img src={logo} alt="SYT News Logo" width={150} height={50} /> */}
            <h1 className="text-light">
              <i>SYT</i>
            </h1>
          </a>
        </div>

        <div className="d-flex d-none d-lg-flex align-items-center flex-grow-1">
          <ul className="d-flex flex-wrap m-0 p-0 justify-content-evenly">
            <li className="">
              <Link to="/category/local" className="navbar-link">
                LOCAL
              </Link>
            </li>
            <li className="">
              <Link to="/category/global" className="navbar-link">
                GLOBAL
              </Link>
            </li>
            <li className="">
              <Link to="/category/sports" className="navbar-link">
                SPORTS
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-lg-grow-1 d-flex justify-content-center align-items-center">
          <form
            className="d-flex flex-grow-1 justify-content-end"
            onSubmit={onSearch}
          >
            <input
              id="query"
              style={{ width: "75%" }}
              className="p-1 border-dark bg-light text-dark rounded me-1"
              placeholder="Search"
            />
            <button type="submit" className="btn btn-secondary">
              <CiSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
