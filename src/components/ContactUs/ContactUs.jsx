import React from "react";
import ContentContainer from "../Common/ContentContainer/ContentContainer";
import "./ContactUs.css";

function ContactUs() {
  return (
    <ContentContainer>
      <div className="contact-us-container">
        <div className="contact-info"></div>
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
