import React from "react";

const Header = () => {
  return (
    <header id="home">
      <section className="hero-section">
        <div className="hero-container">
          <h1>Di Desa di Kota Semua Bisa Internetan</h1>
          <p>
            I-Rural memfasilitasi pertemuan calon pengguna internet di area
            rural (pedesaaan/pegunungan, dll) dengan para penyedia layanan
            internet (Telkom dan ISP lain)
          </p>
          <div className="hero-button">
            <button>Daftar sebagai Pengguna</button>
            <button>Daftar sebagai ISP</button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
