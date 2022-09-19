import React from "react";
import "../styles/Globals.css";
import "../styles/views/AboutUs.css";
import LogoImg from "../assets/img/logo.png";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Header from "../components/Header";

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
        <section className="text-content">
          <div className="box">
            <div className="text-content-box">
              <h3>
                <span></span> Trust<b>.</b>
              </h3>
              <br />
              <ul>
                <li>
                  <span>1. </span> Certification - transparency, security and
                  ESG
                </li>
                <li>
                  <span>2. </span> Marketing
                </li>
                <li>
                  <span>3. </span> Research
                </li>
                <li>
                  <span>4. </span> Education
                </li>
                <li>
                  <span>5. </span> Directory listing
                </li>
                <li>
                  <span>6. </span> Funding and Grants
                </li>
              </ul>
            </div>
            <div className="text-content-box">
              <h3>
                <span></span> Collaboration<b>.</b>
              </h3>
              <br />
              <ul>
                <li>
                  <span>1. </span> Standards
                </li>
                <li>
                  <span>2. </span> Events
                </li>
                <li>
                  <span>3. </span> Training
                </li>
                <li>
                  <span>4. </span> Jobs listings
                </li>
              </ul>
            </div>
            <div className="text-content-box">
              <h3>
                <span></span> Legal<b>.</b>
              </h3>
              <br />
              <ul>
                <li>
                  <span>1. </span> Regulation tracking
                </li>
                <li>
                  <span>2. </span> Lobbying
                </li>
                <li>
                  <span>3. </span> Contract template and sample clauses
                </li>
                <li>
                  <span>4. </span> Supporting members facing legal challenges
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="box">
          <div className="divider"></div>
        </div>
        <section className="roadmap">
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
        </section>
      </main>
    </div>
  );
};

export default OurWork;
