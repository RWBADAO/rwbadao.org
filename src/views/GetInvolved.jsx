import React from "react";
import "../styles/Globals.css";
import "../styles/views/AboutUs.css";
import LogoImg from "../assets/img/logo.png";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Header from "../components/Header";

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
        <section className="text-content">
          <div className="box">
            <div className="text-content-box">
              <h3>
                <span></span> Member Benefits<b>.</b>
              </h3>
              <br />
              <br />
              <p>
                <b>Community</b>
              </p>
              <br />
              <p>
                RWBA hosts networking events both online and in real life
                providing an opportunity to meet with industry peers. During
                these events we discuss research presentations, new member
                introductions, legal developments, technology breakthroughs and
                the state of the ever evolving industry.
              </p>
              <br />
              <br />
              <p>
                <b>Platform</b>
              </p>
              <br />
              <p>
                The RWBA platform includes a jobs board to advertise vacancies,
                an educational portal, member directory and research papers. The
                platform enables us to communicate directly and get technical,
                lega, environmental or industry advice from an expert in that
                field.
              </p>
              <br />
              <br />
              <p>
                <b>DAO</b>
              </p>
              <br />
              <p>
                RWBA evolved from a community of blockchain enthusiasts and our
                governance is based on a decentralized autonomous organization.
                Members are allocated voting rights and can cast their vote on
                proposals covering lobbying, ecosystem, grants, treasury
                management and more to shape the future of the association.
              </p>
              <br />
              <br />
              <p>
                {" "}
                <i>
                  We aim to provide as much value as possible to our community
                  members. If you need further help, advice or have an idea for
                  the association please do not hesitate to contact us. <br />
                  Note that some benefits may be only available to specific
                  membership tiers.
                </i>
              </p>
            </div>
          </div>
        </section>
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
                  <h5>Bronze Member</h5>
                  <p>- Online Community</p>
                  <p>- Networking Events</p>
                  <p>- Virtual Events</p>
                  <p>- Jobs Board</p>
                  <p>- Educational Portal</p>
                  <p>- Certification</p>
                  <p>- Directory Listing</p>
                </div>
                <div className="packages-content">
                  <h5>Silver Member</h5>
                  <p>- Additionally:</p>
                  <p>- Feature Members Profile</p>
                  <p>- Partnership Introductions</p>
                  <p>- Advice & Support</p>
                  <p>- Post Job Listings</p>
                  <p>- Carbon Credits</p>
                  <p>- Submit DAO Proposals</p>
                </div>
                <div className="packages-content">
                  <h5>Gold Member</h5>
                  <p>- Additionally:</p>
                  <p>- Legal counsel</p>
                  <p>- Solidity/Rust advice</p>
                  <p>- Security Audit</p>
                  <p>- Gold Member Profile</p>
                  <p>- Promotional Interviews</p>
                  <p>- Round Table Access</p>
                </div>
              </div>
              <p>
                To purchase a membership please complete the following:
                $GoogleFormsLink{" "}
              </p>
              <br />
              <br />
              <p>
                Fees are payable in USDC however in certain circumstances we can
                accept up to 20% in a project’s native governance tokens.
              </p>
              <button className="blue-btn">Become a Member</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GetInvolved;
