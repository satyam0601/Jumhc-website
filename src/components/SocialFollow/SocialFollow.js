import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./SocialStyles.css";
export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3 style={{ color: "#fff" }}>Follow Us On</h3>
      <a href="https://www.facebook.com/JUMHC1966/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      <a
        href="https://www.instagram.com/jumhc1966/"
        className="instagramsocial"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
