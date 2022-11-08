import React from "react";

// Styles
import "../styles/Globals.css";
import "../styles/components/footer.css";
import LogoLight from "../assets/img/logo-light.png";
import LogoDark from "../assets/img/logo-dark.png";
import IconLinkedIn from "../assets/icons/IconLinkedIn";
import { MdEast, MdNorth } from "react-icons/md";
import { FaTwitter, FaDiscord, FaGlobe, FaEnvelope } from "react-icons/fa";

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
          <div className="footer-grid-card-1">

            <iframe src="https://rwba.substack.com/embed" width="300" height="120" frameBorder="0" scrolling="no"></iframe>

            <div className="footer-icons-box">
              <a href="https://twitter.com/rwbaDAO">
                <FaTwitter />
              </a>
              <a href="https://discord.gg/827DYeV6qB">
                <FaDiscord />
              </a>
              <a href="mailto:info@rwbadao.org">
                <FaEnvelope />
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
