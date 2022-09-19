import React from "react";
import Footer from "../components/Footer";
import "../styles/Globals.css";
import "../styles/views/Home.css";

import TrustImg from "../assets/img/trust.png";
import TeamworkImg from "../assets/img/teamwork.png";
import LegalDocImg from "../assets/img/legal-document.png";
import LogoImg from "../assets/img/logo.png";
import LandxImg from "../assets/img/landx.png";
import MakerImg from "../assets/img/maker.png";
import TangibleImg from "../assets/img/tangible.png";
import { FaTwitter, FaDiscord, FaGlobe } from "react-icons/fa";
import { MdEast, MdWest } from "react-icons/md";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="app">
      <main className="home-page">
        <Header />
        <section className="hero-section">
          <div className="box">
            <div className="hero-section-content">
              <div className="hero-left">
                <h1>
                  We Believe That The Future of Blockchain is{" "}
                  <span>Real World Assets</span>
                </h1>
                <h2>
                  Our DAO unites groundbreaking projects that will shape a $200
                  trillion shared opportunity.
                </h2>
              </div>
              <div className="hero-right"></div>
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
                  <h4>
                    <span>Build trust</span> <br />
                    <br /> Build trust in innovative projects through
                    certification, community and financial support
                  </h4>
                  <div className="wwd-line"></div>
                </div>
                <div className="wwd-grid-card">
                  <h4>
                    <span>Concentrate legal expertise</span> <br />
                    <br /> Concentrate legal expertise and resources to solve
                    legal ambiguity around asset tokenization
                  </h4>
                  <div className="wwd-line"></div>
                </div>
                <div className="wwd-grid-card">
                  <h4>
                    <span>Steer collaboration</span> <br />
                    <br /> Steer collaboration of open technical standards to
                    unlock greater liquidity, accessibility and transparency
                  </h4>
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
                    slidesPerView={"3"}
                    className="mySwiper"
                    loop={true}
                    navigation={{
                      nextEl: ".fm-next",
                      prevEl: ".fm-prev",
                    }}
                    pagination={true}
                    modules={[Navigation, Pagination]}
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
