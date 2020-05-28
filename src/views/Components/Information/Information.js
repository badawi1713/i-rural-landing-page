import React from "react";

import "./Information.css";
import ConfigImage from "../../../assets/images/i-rural-config.jpg";

const Information = () => {
  return (
    <section id="description" className="information-section">
      <div className="information-container">
        <div className="information-content">
          <div className="image-information first-image"></div>
          <div className="text-information">
            <h1>#Internet Untuk Negeri</h1>
            <p>
              I-RURAL adalah layanan internet bagi pelanggan di area rural
              (pedesaaan/pegunungan/area yang belum terjangkau kabel fiber optik
              Telkom) yang disediakan oleh Telkom bekerjasama dengan ISP lain
              dengan infrastruktur fiber optik dan radio dengan harga yang
              terjangkau.
            </p>
          </div>
        </div>
        <div className="information-content reverse-direction">
          <div className="image-information second-image"></div>
          <div className="text-information">
            <h1>#Gotong Royong & Bekerjasama Membangun Negeri</h1>
            <p>
              I-RURAL disediakan dalam rangka turut serta membangun negeri
              dengan cara memperluas penetrasi internet ke area-area yang tidak
              terjangkau akses kabel sehingga pada akhirnya dapat meningkatkan
              kemudahan bagi masyarakat area rural mengakses dunia luar bagi
              peningkatan produktifitas kerja dan kesejahteraannya. Kecepatan
              akses sesuai pilihan pelanggan minimal up to 10 Mbps.
            </p>
          </div>
        </div>
        <section id="configuration">
          <div className="configuration-content">
            <div className="configuration-image">
              <img src={ConfigImage} alt="config-steps" />
            </div>
            <div className="configuration-steps">
              <h1>Rincian Biaya & Konfigurasi Network</h1>
              <div className="configuration-list">
                <p>Installasi</p>
                <p>
                  Biaya instalasi timbul saat pertama kali pasang. Biaya
                  instalasi terdiri dari komponen biaya pasang baru Indihome dan
                  biaya pasang antena radio. Biaya pasang antena radio ini
                  sesuai spesifikasi teknis yang diminta calon pelanggan dan
                  kondisi lapangan di lokasi calon pelanggan.
                </p>
              </div>
              <div className="configuration-list">
                <p>Bulanan</p>
                <p>
                  Biaya bulanan terdiri dari komponen biaya abonemen Indihome
                  (sesuai kecepatan yang dipilih pelanggan) dan biaya titip
                  modem di ISP.
                </p>
              </div>
              <div className="configuration-list">
                <p>Deposit Biaya Berlangganan 1 Bulan</p>
                <p>
                  Calon pelanggan diharuskan melakukan pembayaran deposit yang
                  besarnya sama dengan biaya bulanan (komponen abonemen
                  Indihome). Deposit ini bukan merupakan pembayaran tagihan
                  bulan pertama tetapi sebagai jaminan bila pelanggan
                  meninggalkan tunggakan dan deposit akan dikembalikan kepada
                  pelanggan bila berhenti berlangganan.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Information;
