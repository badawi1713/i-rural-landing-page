import React from "react";

import ConfigImage from "../../../assets/images/i-rural-config.jpg";

const Configure = ({ configImage }) => {
  return (
    <section id="configuration" className="configuration-section">
      <div className="configuration-container">
        <div className="configuration-steps">
          <h1>Rincian Biaya & Konfigurasi Network</h1>
          <div className="configuration-list">
            <h2>Installasi</h2>
            <p>
              Biaya installasi terdiri dari biaya pasang baru Indihome dan biaya
              pasang antena radio yang besarnya biaya pasang antena radio ini
              sesuai spesifikasi teknis dan kondisi lapangan di lokasi
              pelanggan.
            </p>
          </div>
          <div className="configuration-list">
            <h2>Bulanan</h2>
            <p>
              Biaya bulanan terdiri dari komponen biaya abonemen Indihome
              (sesuai kecepatan yang dipilih pelanggan) dan biaya titip modem di
              ISP.
            </p>
          </div>
          <div className="configuration-list">
            <h2>Deposit Biaya 1 Bulan</h2>
            <p>
              Sebagai jaminan bila pelanggan meninggalkan tunggakan dan deposit
              akan dikembalikan kepada pelanggan bila berhenti berlangganan.
            </p>
          </div>
        </div>
        <div className="configuration-image">
          <img src={ConfigImage} alt="config-steps" />
        </div>
      </div>
    </section>
  );
};

export default Configure;
