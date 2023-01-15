import React from "react";
import { useState } from "react";
import "./Navbar.css";
import RequestButton from "../RequestButton/RequestButton";
import Logo from "../../img/logo.svg";
import IconHamburger from "../../img/icon-hamburger.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <img src={Logo} alt="" />
          <img
            className="icon-hamburger"
            src={IconHamburger}
            alt=""
            onClick={handleClick}
          />
        </div>
        <div
          className={`nav-menu ${menuOpen ? "open" : "closed"}`}
          onClick={handleClick}
        >
          <a className="nav-link" href="/#">
            Home
          </a>
          <a className="nav-link" href="/#">
            About
          </a>
          <a className="nav-link" href="/#">
            Contact
          </a>
          <a className="nav-link" href="/#">
            Blog
          </a>
          <a className="nav-link" href="/#">
            Careers
          </a>
        </div>
        <div className="nav-request">
          <RequestButton />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
