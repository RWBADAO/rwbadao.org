import React from "react";

// Styles
import "../styles/Globals.css";
import "../styles/components/footer.css";
import LogoLight from "../assets/img/logo-light.png";
import LogoDark from "../assets/img/logo-dark.png";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import { MdEast, MdNorth } from "react-icons/md";
import { FaTwitter, FaDiscord, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="back-to-top">
        <MdNorth />
      </a>
      <div className="box">
        <div className="footer-grid">
          <div className="footer-grid-card-1">
            <img className="light-el" src={LogoLight} alt="logo" />
            <img className="dark-el" src={LogoDark} alt="logo" />
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
              <a href="https://twitter.com/rwbaDAO">
                <FaTwitter />
              </a>
              <a href="https://discord.gg/bewdyfhx">
                <FaDiscord />
              </a>
              <a href="https://rwbadao.org">
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-con">
          <p className="footer-p">© 2022 RWBA DAO</p>
          <div className="footer-links-box">

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
