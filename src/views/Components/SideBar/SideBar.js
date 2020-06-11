import React from "react";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

import "./SideBar.css";

const SideBar = ({ contactScroll, message }) => {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  return (
    <div id="mySidenav" className="sidenav">
      <div className="sidenav-container">
        <span className="close-btn" onClick={() => closeNav()}>
          <i className="fas fa-times"></i>
        </span>
        <div className="sidenav-items">
          <div className="sidenav-menu">
            <Scroll
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={30}
              onClick={() => closeNav()}
            >
              <Link to={"/"}>Beranda</Link>
            </Scroll>
          </div>
          <hr className="sidenav-line" />
          <div className="sidenav-menu">
            <Scroll
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="description"
              spy={true}
              smooth={true}
              offset={-50}
              duration={30}
              onClick={() => closeNav()}
            >
              <Link to={"/"}>Deskripsi</Link>
            </Scroll>
          </div>

          <hr className="sidenav-line" />
          <div className="sidenav-menu">
            <Scroll
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="configuration"
              spy={true}
              smooth={true}
              offset={-70}
              duration={30}
              onClick={() => closeNav()}
            >
              <Link to={"/"}>Konfigurasi</Link>
            </Scroll>
          </div>
          <hr className="sidenav-line" />
          <div className="sidenav-menu">
            <Scroll
              style={{ cursor: "pointer" }}
              activeClass="active"
              to={contactScroll}
              spy={true}
              smooth={true}
              offset={-50}
              duration={30}
              onClick={() => closeNav()}
            >
              <Link to={"/"}>Kontak</Link>
            </Scroll>
          </div>
        </div>
      </div>
      {message ? null : (
        <div className="sidenav-button">
          <Scroll
            activeClass="active"
            to="registration"
            spy={false}
            smooth={true}
            offset={0}
            duration={30}
          >
            <Link to={{ pathname: "/register", userFormActive: true }}>
              <button onClick={() => closeNav()}>Daftar I-RURAL</button>
            </Link>
          </Scroll>
        </div>
      )}
    </div>
  );
};

export default SideBar;
