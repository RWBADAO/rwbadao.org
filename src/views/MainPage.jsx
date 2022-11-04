import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoLight from "../assets/img/logo-light.png";
import LogoDark from "../assets/img/logo-dark.png";
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdMenu,
  MdClose,
} from "react-icons/md";
import AboutUs from "./AboutUs";
import RWA from "./RWA";
import Home from "./Home";
import GetInvolved from "./GetInvolved";
import OurWork from "./OurWork";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
const MainPage = () => {
  const [isHeaderMobOpen, setIsHeaderMobOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <div className={`app ${isLightTheme ? "light-theme" : "dark-theme"}`}>
      <Switch>
        <header>
          <div className="box">
            <div className="header-content">
              <div className="header-left">
                <Link to="/">
                  <img className="light-el" src={LogoLight} alt="logo" />
                  <img className="dark-el" src={LogoDark} alt="logo" />
                </Link>
              </div>
              <div className="header-right">
                <div className="newsletter-top">
                  <div className="ml-embedded" data-form="neQEXd"></div>
                </div>
                <Link to="/aboutus">About Us</Link>
                <Link to="/rwa">RWA</Link>
                <Link to="/ourwork">Our Work</Link>
                <Link to="/getinvolved">Get Involved</Link>
                <div className="light-dark-switch-box">
                  <span
                    onClick={() => {
                      setIsLightTheme(true);
                    }}
                    className={`${
                      isLightTheme ? "active-theme" : "inactive-theme"
                    }`}
                  >
                    <MdOutlineLightMode />
                  </span>
                  <span
                    onClick={() => {
                      setIsLightTheme(false);
                    }}
                    className={`${
                      isLightTheme ? "inactive-theme" : "active-theme"
                    }`}
                  >
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
                    <span
                      onClick={() => {
                        setIsHeaderMobOpen(false);
                      }}
                    >
                      <Link to="/aboutus">About Us</Link>
                    </span>
                    <span
                      onClick={() => {
                        setIsHeaderMobOpen(false);
                      }}
                    >
                      <Link to="/rwa">RWA</Link>
                    </span>
                    <span
                      onClick={() => {
                        setIsHeaderMobOpen(false);
                      }}
                    >
                      <Link to="/ourwork">Our Work</Link>
                    </span>
                    <span
                      onClick={() => {
                        setIsHeaderMobOpen(false);
                      }}
                    >
                      <Link to="/getinvolved">Get Involved</Link>
                    </span>
                    <div className="light-dark-switch-box">
                      <span
                        onClick={() => {
                          setIsLightTheme(true);
                        }}
                        className={`${
                          isLightTheme ? "active-theme" : "inactive-theme"
                        }`}
                      >
                        <MdOutlineLightMode />
                      </span>
                      <span
                        onClick={() => {
                          setIsLightTheme(false);
                        }}
                        className={`${
                          isLightTheme ? "inactive-theme" : "active-theme"
                        }`}
                      >
                        <MdOutlineDarkMode />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/rwa" element={<RWA />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/ourwork" element={<OurWork />} />
        </Routes>
      </Switch>
    </div>
  );
};

export default MainPage;
