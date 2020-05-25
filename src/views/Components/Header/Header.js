import React from "react";

const Header = () => {
  return (
    <header id="home">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-title">
            <p>Di Desa Di Kota Semua Bisa Internetan</p>
          </div>
          <p>
            Web I-RURAL ini memfasilitasi pertemuan antara calon pengguna
            layanan internet di area rural (pedesaan/pegunungan/area yang belum
            terjangkau akses kabel fiber optik) dengan Telkom yang akan
            bekerjasama dengan ISP lain dalam memenuhi permintaan akses internet
            di area rural tersebut
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
