import React from "react";

// Styles
import "../styles/Globals.css";
import "../styles/components/footer.css";
import LogoImg from "../assets/img/logo.png";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import { MdEast, MdNorth } from "react-icons/md";
import { FaTwitter, FaDiscord, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="back-to-top">
        <MdNorth />
      </div>
      <div className="box">
        <div className="footer-grid">
          <div className="footer-grid-card-1">
            <img src={LogoImg} alt="LogoImg" />
          </div>
          <div></div>
          <div className="footer-grid-card-4">
            <div className="footer-subscribe-box">
              <input type="email" placeholder="Sign up For Our Newsletter" />
              <button>
                <MdEast />
              </button>
            </div>
            <div className="footer-icons-box">
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaDiscord />
              </a>
              <a href="#">
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-con">
          <p className="footer-p">© 2022 RWBA DAO</p>
          <div className="footer-links-box">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
