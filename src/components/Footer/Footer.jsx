import React from "react";

import "./Footer.css";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-top border-2 p-4">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-8 mb-4">
            <h3>Sign up to our newsletter</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <MdEmail className="mb-1" />
                &nbsp; Subscribe
              </button>
            </form>
          </div>
          <div className="col-sm">
            <h5>Contact us</h5>
            <div className="small">
              <address>
                Customer Relations, SYT <br />
                123, Yonge-Dundas Square <br />
                Toronto, ON <br />
                Canada, M5B 2R8
              </address>

              <p className="my-0">Toll free</p>
              <p>+1 (123)-456-7890</p>
            </div>
          </div>
          <div className="col-sm">
            <h5>Our socials</h5>
            <ul className="small m-0 p-0">
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com">X</a>
              </li>
              <li>
                <a href="https://youtube.com">YouTube</a>
              </li>
              <li>
                <a href="instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-start text-muted mt-2">
          ©2024 SYT News. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
