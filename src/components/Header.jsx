import React, { useState } from "react";
import "../styles/components/header.css";
import LogoLight from "../assets/img/logo-light.png";
import LogoDark from "../assets/img/logo-dark.png";
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdMenu,
  MdClose,
} from "react-icons/md";

const Header = (props) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isHeaderMobOpen, setIsHeaderMobOpen] = useState(false);
  return (
    <header>
      <div className="box">
        <div className="header-content">
          <div className="header-left">
            <img className="light-el" src={LogoLight} alt="logo" />
            <img className="dark-el" src={LogoDark} alt="logo" />
          </div>
          <div className="header-right">
            <a href="#">About Us</a>
            <a href="#">RWA</a>
            <a href="#">Our Work</a>
            <a href="#">Get Involved</a>
            <div className="light-dark-switch-box">
              <span onClick={props.changeToLightTheme}>
                <MdOutlineLightMode />
              </span>
              <span onClick={props.changeToDarkTheme} className="active-theme">
                <MdOutlineDarkMode />
              </span>
            </div>
            <div
              className="header-icon-btn"
              onClick={() => {
                setIsHeaderMobOpen(true);
              }}
            >
              <MdMenu />
            </div>
          </div>
        </div>
      </div>
      {isHeaderMobOpen ? (
        <div className="header-mob">
          <div className="box">
            <div className="header-mob-content">
              <div className="header-mob-top">
                <img className="light-el" src={LogoLight} alt="logo" />
                <img className="dark-el" src={LogoDark} alt="logo" />
                <div
                  className="header-icon-btn"
                  onClick={() => {
                    setIsHeaderMobOpen(false);
                  }}
                >
                  <MdClose />
                </div>
              </div>
              <div className="header-mob-center">
                <a href="#">About Us</a>
                <a href="#">RWA</a>
                <a href="#">Our Work</a>
                <a href="#">Get Involved</a>
                <div className="light-dark-switch-box">
                  <span>
                    <MdOutlineLightMode />
                  </span>
                  <span className="active-theme">
                    <MdOutlineDarkMode />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
