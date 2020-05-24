import React from "react";

import { Link } from "react-scroll";

import "./SideBar.css";

const SideBar = () => {
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
            <Link
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={30}
              onClick={() => closeNav()}
            >
              Beranda
            </Link>
          </div>
          <hr className="sidenav-line" />
          <div className="sidenav-menu">
            <Link
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="description"
              spy={true}
              smooth={true}
              offset={-50}
              duration={30}
              onClick={() => closeNav()}
            >
              Deskripsi
            </Link>
          </div>
          <hr className="sidenav-line" />
          <div className="sidenav-menu">
            <Link
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="packet"
              spy={true}
              smooth={true}
              offset={-50}
              duration={30}
              onClick={() => closeNav()}
            >
              Paket
            </Link>
          </div>
          <hr className="sidenav-line" />
          <div className="sidenav-menu">
            <Link
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="configuration"
              spy={true}
              smooth={true}
              offset={-50}
              duration={30}
              onClick={() => closeNav()}
            >
              Konfigurasi
            </Link>
          </div>
          <hr className="sidenav-line" />
          <div className="sidenav-menu">
            <Link
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={30}
              onClick={() => closeNav()}
            >
              Kontak
            </Link>
          </div>
        </div>
      </div>

      <div className="sidenav-button">
        <button>Daftar I-RURAL</button>
      </div>
    </div>
  );
};

export default SideBar;
