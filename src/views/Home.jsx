import React, { useState } from "react";
import Footer from "../components/Footer";
import "../styles/Globals.css";
import "../styles/views/Home.css";
import "../styles/views/AboutUs.css";

import HeroImgWhite from "../assets/img/hero-img-white.png";
import HeroImgBlack from "../assets/img/hero-img-black.png";
import WWDImg1White from "../assets/img/wwd-img-1-white.png";
import WWDImg1Black from "../assets/img/wwd-img-1-black.png";
import WWDImg2White from "../assets/img/wwd-img-2-white.png";
import WWDImg2Black from "../assets/img/wwd-img-2-black.png";
import WWDImg3White from "../assets/img/wwd-img-3-white.png";
import WWDImg3Black from "../assets/img/wwd-img-3-black.png";
import TeamworkImg from "../assets/img/teamwork.png";
import LegalDocImg from "../assets/img/legal-document.png";
import LogoLight from "../assets/img/logo-light.png";
import LogoDark from "../assets/img/logo-dark.png";
import LandxImg from "../assets/img/landx.png";
import MakerImg from "../assets/img/maker.png";
import TangibleImg from "../assets/img/tangible.png";
import { FaTwitter, FaDiscord, FaGlobe, FaEnvelope } from "react-icons/fa";
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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import HeroImg from "../assets/img/HeroImg";
import WWDImg1 from "../assets/img/WWDImg1";
import WWDImg2 from "../assets/img/WWDImg2";
import WWDImg3 from "../assets/img/WWDImg3";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const labels = [
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Total Tokenized Market",
      data: [0.31, 0.6, 1.5, 3.1, 5.2, 7.6, 10.2, 13.0, 16.0],
      borderColor: "#01a5fb",
      backgroundColor: "#01a5fb",
      color: "var(red)",
    },
  ],
};

const Home = () => {
  const [isHeaderMobOpen, setIsHeaderMobOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <main className="home-page">
      {/* <header>
          <div className="box">
            <div className="header-content">
              <div className="header-left">
                <Link to="/">
                  <img className="light-el" src={LogoLight} alt="logo" />
                  <img className="dark-el" src={LogoDark} alt="logo" />
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
        </header> */}
      <section className="hero-section">
        <div className="box">
          <div className="hero-section-content">
            <div className="hero-left">
              <h1>
                We Believe That The Future of Blockchain is <br />{" "}
                <span>Real World Assets</span>
              </h1>
              <h2>
                Our DAO unites groundbreaking projects that will shape a $20+
                trillion shared opportunity.
              </h2>
            </div>
            <div className="hero-right">
              <HeroImg color="#fff" className="dark-el" />
              <HeroImg color="#101216" className="light-el" />
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
            <div className="wwd-box">
              <div className="wwd-box-card">
                <WWDImg1 className="light-el" color="#000" />
                <WWDImg1 className="dark-el" color="#fff" />

                <h4>Build trust</h4>
                <p>
                  Build trust in innovative projects through certification,
                  community and financial support
                </p>
              </div>
              <div className="wwd-box-card">
                <WWDImg2 className="light-el" color="#000" />
                <WWDImg2 className="dark-el" color="#fff" />
                <h4>Concentrate legal expertise</h4>
                <p>
                  Concentrate legal expertise and resources to solve legal
                  ambiguity around asset tokenization
                </p>
              </div>
              <div className="wwd-box-card">
                <WWDImg3 className="light-el" color="#000" />
                <WWDImg3 className="dark-el" color="#fff" />
                <h4>Steer collaboration</h4>
                <p>
                  Steer collaboration of open technical standards to unlock
                  greater liquidity, accessibility and transparency
                </p>
              </div>
            </div>
            <div className="df">
              <a
                target="_blank"
                href="https://app.daohaus.club/dao/0x1/0x627d18182eabc1d5d87e1446b802615f2d12a44e"
                className="blue-btn"
              >
                Become a Member
              </a>
            </div>
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
                  spaceBetween={250}
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
                      slidesPerView: 1,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="fm-img-box">
                      <img src={LandxImg} alt="founding member img" />
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
              </div>
            </div>
            <p>
              Connect with our community on <a href="https://twitter.com/rwbaDAO">Twitter</a> &amp; <a href="https://discord.gg/827DYeV6qB">Discord</a>
            </p>
            <br /><br />
            <p>
              If you are interested in joining the DAO then complete the application and a representative will contact you
            </p>
            <br /><br />
            <div className="form-container">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczmiZUxovRorbRp7nfbNQG9MeOLUj9LG4zgaUj9RMeCSiMRw/viewform?embedded=true" width="320" height="740" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>
            <p>
              Start learning more, connect with DAO members and make your
              contribution towards further tokenization of real world assets.
            </p>
            
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
