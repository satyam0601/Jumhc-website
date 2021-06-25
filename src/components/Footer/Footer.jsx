import React from "react";
import "./Footer.css";
import Form from "../Common/Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="info">
          <h3>JADAVPUR UNIVERSITY MOUNTAINEERING AND HIKING CLUB</h3>
          <a href="#email">email123@email.com</a>
          <p>
            Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257)
            563-7401
          </p>
          <div className="social-media-handles">
            <a href="#ig-handle">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#fb-handle">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#yt-handle">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="#lin-handle">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </div>
        </div>
        <div className="contact-us">
          <Form />
        </div>
      </div>

      <div className="copyright">
        © 2021 Jadavpur University Mountaineering and hiking club
      </div>
    </div>
  );
}

export default Footer;
