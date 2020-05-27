import React from "react";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

import "./Navbar.css";

import Logo from "../../../assets/images/irural-logo.jpeg";

const Navbar = ({ openNav }) => {
  return (
    <nav>
      <section className="navbar-section">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={Logo} alt="navbar-logo.png" />
          </div>
          <div className="sidebar-button">
            <span onClick={openNav} id="navButton">
              <i className="fas fa-bars"></i>
            </span>
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <Scroll
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={30}
                >
                  <Link to={"/"}>Beranda</Link>
                </Scroll>
              </li>
              <li>
                <Scroll
                  activeClass="active"
                  to="description"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={30}
                >
                  <Link to={"/"}>Deskripsi</Link>
                </Scroll>
              </li>
              <li>
                <Scroll
                  activeClass="active"
                  to="configuration"
                  spy={true}
                  smooth={true}
                  offset={-130}
                  duration={30}
                >
                  <Link to={"/"}>Konfigurasi Network</Link>
                </Scroll>
              </li>
              <li>
                <Scroll
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={30}
                >
                  <Link to={"/"}>Kontak</Link>
                </Scroll>
              </li>
            </ul>
          </div>
          <div className="navbar-button">
            <Link to={"/register"}>
              <button>Daftar I-RURAL</button>
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
