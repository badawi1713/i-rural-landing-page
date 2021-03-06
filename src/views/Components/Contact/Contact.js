import React from "react";

import "./Contact.css";
import WhatsappIcon from "../../../assets/svg/whatsapp-logo.svg";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-number">
          <p>Kontak Kami : </p>
          <p>08112614565</p>
        </div>
        <div className="whatsapp-button">
          <button>
            <p>WHATSAPP</p>
            <img src={WhatsappIcon} alt="whatsapp-logo" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
