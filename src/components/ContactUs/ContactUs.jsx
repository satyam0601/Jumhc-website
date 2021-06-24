import React from "react";
import ContentContainer from "../Common/ContentContainer/ContentContainer";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function ContactUs() {
  return (
    <ContentContainer>
      <div className="contact-us-container">
        <div className="contact-info">
          <h1>JADAVPUR UNIVERSITY MOUNTAINEERING AND HIKING CLUB</h1>
          <p>
            1st floor, Amenities Centre Building, 188, Raja S.C.Mallick Road.
            Jadavpur University Main Campus, Kolkata 700 032.
          </p>
          <a href="#email">email@email.com</a>
          <p>Phone no: (+91)9872598343</p>
          <div className="social-media-handle">
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
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6088724384176!2d88.36699928718599!3d22.49392897505112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271fa1891d4fb%3A0x976d91508badd250!2sJadavpur%20University%20Mountaineering%20and%20Hiking%20Club!5e0!3m2!1sen!2sin!4v1624473005555!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </ContentContainer>
  );
}

export default ContactUs;
