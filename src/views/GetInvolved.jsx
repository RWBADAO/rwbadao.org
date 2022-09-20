import React from "react";
import "../styles/Globals.css";
import "../styles/views/AboutUs.css";
import LogoImg from "../assets/img/logo.png";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Header from "../components/Header";
import BronzeImg from "../assets/img/bronze.png";
import SilverImg from "../assets/img/silver.png";
import GoldImg from "../assets/img/gold.png";
import { MdCheck } from "react-icons/md";
import EmblemImg from "../assets/img/emblem.png";
import CommunitiesImg from "../assets/img/communities.png";
import DaoImg from "../assets/img/dao.png";
import MediaImg from "../assets/img/media.png";
import { FaDiscord, FaTwitter, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import Footer from "../components/Footer";

const GetInvolved = () => {
  return (
    <div className="app">
      <main className="about-page">
        <Header />
        <section className="page-heading-section">
          <div className="box">
            <div className="page-heading">
              <h2>get involved.</h2>
              <div></div>
            </div>
          </div>
        </section>
        <div className="box">
          <div className="text-content-box tcb-2">
            <h3>
              <span></span> Member Benefits<b>.</b>
            </h3>
            <br />
            <br />
            <br />
            <br />
            <div className="gi-text-grid">
              <div>
                <p className="mb-heading">
                  <img src={CommunitiesImg} alt="CommunitiesImg" />
                  <b>Community</b>
                </p>
                <br />
                <p>
                  RWBA hosts networking events both online and in real life
                  providing an opportunity to meet with industry peers. During
                  these events we discuss research presentations, new member
                  introductions, legal developments, technology breakthroughs
                  and the state of the ever evolving industry.
                </p>
              </div>
              <div>
                <p className="mb-heading">
                  <img src={MediaImg} alt="MediaImg" />
                  <b>Platform</b>
                </p>
                <br />
                <p>
                  The RWBA platform includes a jobs board to advertise
                  vacancies, an educational portal, member directory and
                  research papers. The platform enables us to communicate
                  directly and get technical, lega, environmental or industry
                  advice from an expert in that field.
                </p>
              </div>
              <div>
                <p className="mb-heading">
                  <img src={DaoImg} alt="DaoImg" />
                  <b>DAO</b>
                </p>
                <br />
                <p>
                  RWBA evolved from a community of blockchain enthusiasts and
                  our governance is based on a decentralized autonomous
                  organization. Members are allocated voting rights and can cast
                  their vote on proposals covering lobbying, ecosystem, grants,
                  treasury management and more to shape the future of the
                  association.
                </p>
                <br />
                <br />
                <p>
                  {" "}
                  <i>
                    We aim to provide as much value as possible to our community
                    members. If you need further help, advice or have an idea
                    for the association please do not hesitate to contact us.{" "}
                    <br />
                    Note that some benefits may be only available to specific
                    membership tiers.
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="divider"></div>
        </div>
        <section className="Become-member">
          <div className="box">
            <div className="become-member-content">
              <div className="section-heading-box">
                <div className="section-heading">
                  <h3>become a member.</h3>
                  <div></div>
                </div>
              </div>
              <p>
                Membership rates are charged on a per annum basis, voting rights
                and benefits expire if fees are not paid within a timely manner.
              </p>
              <div className="membership-packages">
                <div className="packages-content">
                  <h5 className="bronze">
                    <img src={BronzeImg} alt="BronzeImg" /> Bronze Member
                  </h5>
                  <p>
                    {" "}
                    <MdCheck /> Online Community
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Networking Events
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Virtual Events
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Jobs Board
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Educational Portal
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Certification
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Directory Listing
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> $1000 USDC per annum
                  </p>
                </div>
                <div className="packages-content">
                  <h5 className="silver">
                    <img src={SilverImg} alt="SilverImg" /> Silver Member
                  </h5>
                  <p>
                    {" "}
                    <b>Additionally:</b>
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Feature Members Profile
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Partnership Introductions
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Advice & Support
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Post Job Listings
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Carbon Credits
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Submit DAO Proposals
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> $4000 USDC per annum
                  </p>
                </div>
                <div className="packages-content">
                  <h5 className="gold">
                    <img src={GoldImg} alt="GoldImg" /> Gold Member
                  </h5>
                  <p>
                    {" "}
                    <b> Additionally:</b>
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Legal counsel
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Solidity/Rust advice
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Security Audit
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Gold Member Profile
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Promotional Interviews
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> Round Table Access
                  </p>
                  <p>
                    {" "}
                    <MdCheck /> $12000 USDC per annum
                  </p>
                </div>
              </div>
              <p className="p-p">
                To purchase a membership please complete the following:
                $GoogleFormsLink{" "}
              </p>
              <br />
              <p className="p-p">
                Fees are payable in USDC however in certain circumstances we can
                accept up to 20% in a project’s native governance tokens.
              </p>
              <button className="blue-btn">Become a Member</button>
            </div>
          </div>
        </section>
        <div className="divider"></div>
        <section className="contact-section">
          <div className="box">
            <div className="contact-content">
              <div className="section-heading-box">
                <div className="section-heading">
                  <h3>contact.</h3>
                  <div></div>
                </div>
              </div>
            </div>
            <p className="p-p">
              For more information and to contact a spokesperson for the
              association please fill in the form below:
            </p>
            <div className="form-grid">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
            </div>
            <p className="p-p">
              You can also reach out via the social channels
            </p>
            <div className="social-grid">
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
              <span>
                <FaDiscord />
              </span>
              <span>
                <FaMediumM />
              </span>
              <span>
                <FaDiscord />
              </span>
            </div>
          </div>
        </section>
        {/* <div className="box">
          <div className="divider"></div>
        </div> */}
        {/* <section className="certification-section">
          <div className="box">
            <div className="contact-content">
              <div className="section-heading-box">
                <div className="section-heading">
                  <h3>certification.</h3>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="text-content-box">
              <p>
                Members are encouraged to uphold the values of the association
                in regards to:-
              </p>
              <br /> <br />
              <ul>
                <li>Environmental impact</li>
                <li>Transparency & open source code</li>
                <li>Operating standards & ethics</li>
              </ul>
              <br />
              <br />
              <p>
                We provide certification for the members that share our values
                and encourage the use of our certification emblem on websites
                and promotional materials.
              </p>
              <img src={EmblemImg} alt="EmblemImg" />
            </div>
          </div>
        </section> */}
        <Footer />
      </main>
    </div>
  );
};

export default GetInvolved;
