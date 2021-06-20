import React from "react";
import Form from "../Form/Form";
import SocialFollow from "../SocialFollow/SocialFollow";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <box className="box">
      <h1 style={{ color: "#4EB1BA", marginTop: "-50px" }}>
        JADAVPUR UNIVERSITY MOUNTAINEERING AND HIKING CLUB
      </h1>
      <container className="container">
        <row>
          <column className="column">
            <Form />
          </column>
        </row>
        <SocialFollow />
      </container>
    </box>
  );
};

export default Footer;
