import React from "react";
import "../styles/components/header.css";
import LogoImg from "../assets/img/logo.png";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <div className="box">
        <div className="header-content">
          <div className="header-left">
            <img src={LogoImg} alt="" />
          </div>
          <div className="header-right">
            <a href="#">About Us</a>
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
    </header>
  );
};

export default Header;
