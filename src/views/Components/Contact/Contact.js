import React from "react";
import WhatsappIcon from "../../../assets/svg/whatsapp-logo.svg";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-number">
          <h2>Kontak Kami : </h2>
          <h1>08112614565</h1>
        </div>
        <div className="whatsapp-button">
          <p>WHATSAPP</p>
          <img src={WhatsappIcon} alt="whatsapp-logo" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
