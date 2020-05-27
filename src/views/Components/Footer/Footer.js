import React from "react";

import "./Footer.css";

import Logo from "../../../assets/images/irural-logo.jpeg";
import FacebookIcon from "../../../assets/svg/facebook-logo.svg";
import TwitterIcon from "../../../assets/svg/twitter-logo.svg";
import InstagramIcon from "../../../assets/svg/instagram-logo.svg";
import LinkedinIcon from "../../../assets/svg/linkedin-logo.svg";

const Footer = () => {
  return (
    <footer>
      <section className="footer-section">
        <div className="footer-container">
          <img src={Logo} alt="i-rural-footer-logo" />
          <div className="social-media-container">
            <img src={FacebookIcon} alt="fb-logo" />
            <img src={TwitterIcon} alt="twitter-logo" />
            <img src={LinkedinIcon} alt="linkedin-logo" />
            <img src={InstagramIcon} alt="instagram-logo" />
          </div>
          <p>&copy; 2020 I-RURAL - All right reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
