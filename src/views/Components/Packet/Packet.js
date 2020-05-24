import React from "react";

import IndihomeLogo from "../../../assets/images/indihome-logo.png";
import BiznetLogo from "../../../assets/images/biznet-logo.png";
import MyRepublicLogo from "../../../assets/images/myrepublic-logo.png";

const Packet = () => {
  return (
    <section id="packet" className="packet-section">
      <div className="packet-container">
        <div className="packet-header">
          <h1>Paket Internet</h1>
        </div>
        <div className="product-container">
          <div className="product-card">
            <div className="price-info">
              <div className="speed-info">
                <h1>10</h1>
                <h2>Mbps</h2>
              </div>
              <h4>Mulai dari</h4>
              <h2>Rp 280.000</h2>
              <h5>*Belum biaya tambahan I-RURAL</h5>
            </div>
            <div className="isp-info">
              <img src={IndihomeLogo} alt="isp-logo" />
              <img src={BiznetLogo} alt="isp-logo" />
              <img src={MyRepublicLogo} alt="isp-logo" />
              <p>dan ISP Lainnya</p>
            </div>
          </div>
          <div className="product-card">
            <div className="price-info">
              <div className="speed-info">
                <h1>20</h1>
                <h2>Mbps</h2>
              </div>
              <h4>Mulai dari</h4>
              <h2>Rp 299.000</h2>
              <h5>*Belum biaya tambahan I-RURAL</h5>
            </div>
            <div className="isp-info">
              <img src={IndihomeLogo} alt="isp-logo" />
              <img src={BiznetLogo} alt="isp-logo" />
              <img src={MyRepublicLogo} alt="isp-logo" />
              <p>dan ISP Lainnya</p>
            </div>
          </div>
          <div className="product-card">
            <div className="price-info">
              <div className="speed-info">
                <h1>30</h1>
                <h2>Mbps</h2>
              </div>
              <h4>Mulai dari</h4>
              <h2>Rp 325.000</h2>
              <h5>*Belum biaya tambahan I-RURAL</h5>
            </div>
            <div className="isp-info">
              <img src={IndihomeLogo} alt="isp-logo" />
              <img src={BiznetLogo} alt="isp-logo" />
              <img src={MyRepublicLogo} alt="isp-logo" />
              <p>dan ISP Lainnya</p>
            </div>
          </div>
          <div className="product-card">
            <div className="speed-info">
              <h1>40</h1>
              <h2>Mbps</h2>
            </div>
            <div className="speed-info">
              <h1>50</h1>
              <h2>Mbps</h2>
            </div>
            <div className="speed-info">
              <h1>100</h1>
              <h2>Mbps</h2>
            </div>
            <p>dan Masih Banyak Lainnya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packet;
