import React, { useState } from "react";
import Footer from "../components/Footer";
import "../styles/Globals.css";
import "../styles/views/Home.css";

import HeroImg from "../assets/img/hero-img-white.png";
import WWDImg1White from "../assets/img/wwd-img-1-white.png";
import WWDImg2White from "../assets/img/wwd-img-2-white.png";
import WWDImg3White from "../assets/img/wwd-img-3-white.png";
import TeamworkImg from "../assets/img/teamwork.png";
import LegalDocImg from "../assets/img/legal-document.png";
import LogoImg from "../assets/img/logo.png";
import LandxImg from "../assets/img/landx.png";
import MakerImg from "../assets/img/maker.png";
import TangibleImg from "../assets/img/tangible.png";
import { FaTwitter, FaDiscord, FaGlobe } from "react-icons/fa";
import { MdEast, MdWest } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "../components/Header";
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [isHeaderMobOpen, setIsHeaderMobOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <div className={`app ${isLightTheme ? "light-theme" : "dark-theme"}`}>
      <main className="home-page">
        <header>
          <div className="box">
            <div className="header-content">
              <div className="header-left">
                <Link to="/">
                  <img src={LogoImg} alt="" />
                </Link>
              </div>
              <div className="header-right">
                <Link to="/aboutus">About Us</Link>
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
                    <img src={LogoImg} alt="" />
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
                    <Link to="/aboutus">About Us</Link>
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
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </header>
        <section className="hero-section">
          <div className="box">
            <div className="hero-section-content">
              <div className="hero-left">
                <h1>
                  We Believe That The Future of Blockchain is <br />{" "}
                  <span>Real World Assets</span>
                </h1>
                <h2>
                  Our DAO unites groundbreaking projects that will shape a $200
                  trillion shared opportunity.
                </h2>
              </div>
              <div className="hero-right">
                <img src={HeroImg} alt="HeroImg" />
              </div>
            </div>
          </div>
        </section>
        <section className="what-we-do">
          <div className="box">
            <div className="wwd-content">
              <div className="section-heading-box">
                <div className="section-heading">
                  <h3>what we do.</h3>
                  <div></div>
                </div>
              </div>
              <div className="wwd-grid">
                <div className="wwd-line"></div>

                <div className="wwd-grid-card">
                  <h4>Build trust</h4>
                  <img src={WWDImg1White} alt="WWDImg1White" />
                  <p>
                    Build trust in innovative projects through certification,
                    community and financial support
                  </p>
                  <div className="wwd-line"></div>
                </div>
                <div className="wwd-grid-card">
                  <h4>Concentrate legal expertise</h4>
                  <img src={WWDImg2White} alt="WWDImg2White" />
                  <p>
                    Concentrate legal expertise and resources to solve legal
                    ambiguity around asset tokenization
                  </p>
                  <div className="wwd-line"></div>
                </div>
                <div className="wwd-grid-card">
                  <h4>Steer collaboration</h4>
                  <img src={WWDImg3White} alt="WWDImg3White" />
                  <p>
                    Steer collaboration of open technical standards to unlock
                    greater liquidity, accessibility and transparency
                  </p>
                  <div className="wwd-line"></div>
                </div>
              </div>
              <button className="blue-btn">Become a Member</button>
            </div>
          </div>
        </section>
        <section className="founding-members">
          <div className="box">
            <div className="section-heading-box">
              <div className="section-heading">
                <h3>founding members.</h3>
                <div></div>
              </div>
            </div>
            <div className="fm-grid-box-con">
              <div className="fm-grid-box">
                <div className="fm-arrow-box fm-prev">
                  <MdWest />
                </div>
                <div className="fm-grid-swiper">
                  <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={50}
                    className="mySwiper"
                    loop={true}
                    navigation={{
                      nextEl: ".fm-next",
                      prevEl: ".fm-prev",
                    }}
                    pagination={true}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                      700: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="fm-img-box">
                        <img src={LandxImg} alt="founding member img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="fm-img-box">
                        <img src={MakerImg} alt="founding member img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="fm-img-box">
                        <img src={TangibleImg} alt="founding member img" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="fm-arrow-box fm-next">
                  <MdEast />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="join-real-world">
          <div className="box">
            <div className="jrw-section">
              <div className="section-heading-box">
                <div className="section-heading">
                  <h3>Join the real world community.</h3>
                  <div></div>
                </div>
              </div>
              <p>
                Start learning more, connect with DAO members and make your
                contribution towards further tokenization of real world assets.
              </p>
              <div className="icons-box">
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
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
