import React from "react";
import { Link } from "react-router-dom";

import "./Message.css";

const Message = () => {
  return (
    <section className="waiting-section">
      <div className="waiting-container">
        <div className="img-illustration"></div>
        <h1>Terima Kasih Telah Mendaftar I-RURAL</h1>
        <p>
          Permintaan anda sedang diproses, customer service kami akan
          menghubungi anda setelah proses selesai
        </p>
        <div className="homepage-button">
          <Link to={{ pathname: "/" }}>
            <button>Kembali ke Homepage</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Message;
