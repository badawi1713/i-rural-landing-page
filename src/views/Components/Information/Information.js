import React from "react";

const Information = () => {
  return (
    <section id="description" className="information-section">
      <div className="information-container">
        <div className="information-content reverse-direction">
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
          <div className="image-information first-image"></div>
        </div>
        <div className="information-content">
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
          <div className="image-information second-image"></div>
        </div>
      </div>
    </section>
  );
};

export default Information;
