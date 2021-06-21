import React from "react";
import Form from "../Form/Form";
import SocialFollow from "../SocialFollow/SocialFollow";
import "./FooterStyles.css";
import CopyrightNotice from "react-copyright-notice-component";

const Footer = () => {
  return (
    <box className="box">
      <h1 className="heading1">JADAVPUR UNIVERSITY</h1>
      <h1 className="heading2">MOUNTAINEERING AND HIKING CLUB</h1>
      <container className="container">
        <row className="row">
          <column className="column">
            <Form />
          </column>
        </row>
        <row>
          <p className="para1">jumhc1966@gmail.com</p>
          <p className="para1">
            1st Floor, Amenities Centre, 188, Raja S.C.Mallick Road, Kolkata -
            700 032.
          </p>
        </row>
        <SocialFollow />
        <CopyrightNotice
          className="copyright"
          copyrightHolder="by Jadavpur University Mountaineering and Hiking Club"
        ></CopyrightNotice>
      </container>
    </box>
  );
};

export default Footer;
