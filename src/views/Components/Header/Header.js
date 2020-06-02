import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header id="home">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-title">
            <h1>Di Desa Di Kota Semua Bisa Internetan</h1>
          </div>
          <p>
            Web I-RURAL ini memfasilitasi pertemuan antara calon pengguna
            layanan internet di area rural (pedesaan/pegunungan/area yang belum
            terjangkau akses kabel fiber optik) dengan Telkom yang akan
            bekerjasama dengan ISP lain dalam memenuhi permintaan akses internet
            di area rural tersebut
          </p>
          <div className="hero-button">
            <Link to={{ pathname: "/register", userFormActive: true }}>
              <button>Daftar sebagai Pengguna</button>
            </Link>
            <Link to={{ pathname: "/register", userFormActive: false }}>
              <button>Daftar sebagai ISP</button>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
