import React from "react";
import "../styles/Globals.css";
import "../styles/views/AboutUs.css";
import LogoImg from "../assets/img/logo.png";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrustImg from "../assets/img/trust.png";
import TeamworkImg from "../assets/img/teamwork.png";
import LegalDocImg from "../assets/img/legal-document.png";
import BadgeImg from "../assets/img/badge.png";

const OurWork = () => {
  return (
    <div className="app">
      <main className="about-page">
        <Header />
        <section className="page-heading-section">
          <div className="box">
            <div className="page-heading">
              <h2>our work.</h2>
              <div></div>
            </div>
          </div>
        </section>
        <div className="box">
          <section className="tcb-grid-box">
            <div className="tcb-grid">
              <div className="tcb-img">
                <img src={TrustImg} alt="LegalDocImg" />
              </div>
              <div className="text-content-box">
                <h3>
                  <span></span> Trust<b>.</b>
                </h3>
                <br />
                <ul>
                  <li>Certification - transparency, security and ESG</li>
                  <li>Marketing</li>
                  <li>Research</li>
                  <li>Education</li>
                  <li>Directory listing</li>
                  <li>Funding and Grants</li>
                </ul>
              </div>
            </div>
            <div className="tcb-grid">
              <div className="tcb-img">
                <img src={TeamworkImg} alt="LegalDocImg" />
              </div>
              <div className="text-content-box">
                <h3>
                  <span></span> Collaboration<b>.</b>
                </h3>
                <br />
                <ul>
                  <li>Standards</li>
                  <li>Events</li>
                  <li>Training</li>
                  <li>Jobs listings</li>
                </ul>
              </div>
            </div>
            <div className="tcb-grid">
              <div className="tcb-img">
                <img src={LegalDocImg} alt="LegalDocImg" />
              </div>
              <div className="text-content-box">
                <h3>
                  <span></span> Legal<b>.</b>
                </h3>
                <br />
                <ul>
                  <li>Regulation tracking</li>
                  <li>Lobbying</li>
                  <li>Contract template and sample clauses</li>
                  <li>Supporting members facing legal challenges</li>
                </ul>
              </div>
            </div>
            <div className="tcb-grid">
              <div className="tcb-img">
                <img src={BadgeImg} alt="BadgeImg" />
              </div>
              <div className="text-content-box">
                <h3>
                  <span></span> Best Practice & Standards
                  <b>.</b>
                </h3>
                <br />
                <ul>
                  <li>Research</li>
                  <li>Funding and Grants</li>
                  <li>Technical standards</li>
                  <li>Security best practice</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        {/* <div className="box">
          <div className="divider"></div>
        </div> */}
        {/* <section className="roadmap">
          <div className="box">
            <div className="roadmap-main-box">
              <div className="section-heading-box">
                <div className="section-heading">
                  <h3>roadmap.</h3>
                  <div></div>
                </div>
              </div>
              <div class="roadmap-content">
                <div class="road-map-line"></div>
                <div class="roadmap-box-left">
                  <div class="roadmap-box-content">
                    <div class="roadmap-text-box">
                      <h6>September 2022</h6>
                      <p>- Launch RWBA website</p>
                      <p>- Register and create content for social channels</p>
                      <p>- Create digital communication channels</p>
                      <p>- Complete invitations for founding members</p>
                      <p>- Establish governance mechanism</p>
                      <p>- Appoint a spokesperson</p>
                    </div>
                    <div class="roadmap-circle">1</div>
                  </div>
                </div>
                <div class="roadmap-box-right">
                  <div class="roadmap-box-content">
                    <div class="roadmap-circle">2</div>
                    <div class="roadmap-text-box">
                      <h6>October 2022</h6>
                      <p>- Start cross-promotion member announcements</p>
                      <p>- Develop marketing strategy plan</p>
                      <p>- Create RWBA Whitepaper</p>
                      <p>
                        - Develop first fundraising event (possibly RWBA token
                        launch)
                      </p>
                      <p>- Attract first new memberships</p>
                      <p>- Host first digital networking event</p>
                      <p>- Mint NFT POAPs</p>
                      <p>- Create RWBA jobs board</p>
                      <p>- Call to the community for DAO proposals</p>
                    </div>
                  </div>
                </div>
                <div class="roadmap-box-left">
                  <div class="roadmap-box-content">
                    <div class="roadmap-text-box">
                      <h6>November 2022</h6>
                      <p>- Create Research Priorities</p>
                      <p>- Conduct first in depth member project analysis</p>
                      <p>- Establish policy & ethics frameworks</p>
                      <p>- Create legal documentation template archive</p>
                      <p>- Set out lobbying action plan</p>
                      <p>- Create educational content & trading program</p>
                      <p>- Finalize and fund first DAO proposals</p>
                    </div>
                    <div class="roadmap-circle">3</div>
                  </div>
                </div>
                <div class="roadmap-box-right">
                  <div class="roadmap-box-content">
                    <div class="roadmap-circle">4</div>
                    <div class="roadmap-text-box">
                      <h6>December 2022</h6>
                      <p>- Publish first research paper</p>
                      <p>- Call for feedback from community members</p>
                      <p>- First IRL Networking Event (Location TBC.)</p>
                      <p>- 2022 RWBA Awards Presentation</p>
                      <p>- Set out plans and publish roadmap for 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <Footer />
      </main>
    </div>
  );
};

export default OurWork;
