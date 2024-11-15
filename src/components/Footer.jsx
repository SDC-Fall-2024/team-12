import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import whiteLogo from "../assets/whitelogo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-background">
        <div className="footer-container">
          <div className="footer-info-container">
            <img src={whiteLogo} className="logo-icon" />
            <div className="info-title">Note Sharing Website Name</div>
            <div className="info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              harum tenetur ex tempore pariatur reiciendis blanditiis, sapiente
              officiis provident repellat iste modi assumenda neque aliquam
              cumque. Cumque nihil eligendi iusto?
            </div>
          </div>
          <div className="footer-info-container">
            <div className="info-title">Browse</div>
            <div className="info">
              <Link to="/">Home</Link>
            </div>
            <div className="info">
              <Link to="/explore">Explore</Link>
            </div>
            <div className="info">
              <Link to="/about">About Us</Link>
            </div>
          </div>
          <div className="footer-info-container">
            <div className="info-title">Contact Us</div>
            <div className="info">beckwangthumboon@gmail.com</div>
          </div>
          <div className="footer-info-container">
            <div className="info-title">Feedback</div>
            <div className="info">
              If you've noticed any bugs or have some feedback for us, write
              your concerns here!
            </div>
            <textarea className="feedback-form" />
            <button className="feedback-submit-button">Submit</button>
          </div>
        </div>
        <hr></hr>
        <div className="legal-info-container">
          <div>Unaffiliated with UW Madison</div>
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
          <div>Courses Updated Fall 2024</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
