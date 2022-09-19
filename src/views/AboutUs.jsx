import React from "react";
import "../styles/Globals.css";
import "../styles/views/AboutUs.css";
import LogoImg from "../assets/img/logo.png";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <div className="app">
      <main className="about-page">
        <Header />
        <section className="page-heading-section">
          <div className="box">
            <div className="page-heading">
              <h2>about us.</h2>
              <div></div>
            </div>
          </div>
        </section>
        <section className="text-content">
          <div className="box">
            <div className="text-content-box">
              <h3>
                <span></span> Mission<b>.</b>
              </h3>
              <br />
              <p>
                To support the transition of real world assets to tokenized
                economies on decentralized blockchains.
              </p>
            </div>
            <div className="text-content-box">
              <h3>
                <span></span> Philosophy<b>.</b>
              </h3>
              <br />
              <p>
                The real world blockchain association is set up to build shared
                infrastructure resulting in collective benefit. We nurture a
                community of developers, entrepreneurs and founders who have
                aligned goals and common ideals.
              </p>
              <br />
              <br />
              <p>
                {" "}
                Through the association we are able to create an industry
                network of thought leaders to push forward and realize our goals
                of bringing real world assets on-chain.
              </p>
              <br />
              <br />
              <br />
              <br />
              <p>
                <b>To achieve our mission, our DAO will:</b>
              </p>
              <br />
              <ul>
                <li>
                  <span>1. </span> Unite and represent a diverse mix of global
                  crypto projects focussed on real-world assets
                </li>
                <li>
                  <span>2. </span> Help set a better standard and brand for
                  crypto – trust, transparency, auditing
                </li>
                <li>
                  <span>3. </span> Legal expertise – concentrate expertise and
                  resources, fight legal battles, help the cause
                </li>
                <li>
                  <span>4. </span> Become a vehicle for investment of
                  traditional finance into the blockchain space
                </li>
                <li>
                  <span>5. </span> Highlight best practice in decentralized
                  organization stewardship
                </li>
                <li>
                  <span>6. </span> Take a leading role to support the
                  collaboration of open technical standards
                </li>
                <li>
                  <span>7. </span> Inspire, representative and support
                  real-world causes that revolutionize industries
                </li>
              </ul>
            </div>
            <div className="text-content-box">
              <h3>
                <span></span> What are real world assets<b>?</b>
              </h3>
              <br />
              <p>
                Tokenization of real world assets involves the digital
                representation of real world (usually physical) assets on a
                blockchain.
              </p>
              <br />
              <br />
              <br />
              <br />
              <p>
                <b>Popular examples include:</b>
              </p>
              <br />

              <ul className="dotted-ul">
                <li>
                  Commodities – gold, silver, diamonds, wheat, rice, copper
                </li>
                <li>
                  Real estate – legal ownership of land, homes, and offices
                </li>
                <li>
                  Stock or equity – crypto versions of traditional stocks or
                  part of a private business
                </li>
              </ul>
              <br />
              <br />
              <br />
              <br />
              <p>
                Cryptocurrencies such as Bitcoin or Ethereum would not be
                considered real world assets. However, stablecoins based on real
                world fiat currencies or gold are growing rapidly.
              </p>
              <br />
              <br />
              <br />
              <br />
              <p>
                <b>This process usually involves:</b>
              </p>
              <br />
              <ul>
                <li>
                  <span>1. </span> Linking an NFT (digital token) to a physical
                  asset
                </li>
                <li>
                  <span>2. </span> Allowing the trading of assets with NFTs
                </li>
              </ul>
            </div>
            <div className="text-content-box">
              <h3>
                <span></span> Why tokenize real world assets<b>?</b>
              </h3>
              <br />
              <br />
              <p>
                There are several advantages to bringing real-world assets onto
                the blockchain.
              </p>
              <br />
              <br />
              <br />
              <br />
              <p>
                {" "}
                <b>They include:</b>{" "}
              </p>
              <br />
              <ul>
                <li>
                  <span>1. </span>Increased accessibility - increasing the total
                  addressable market and revenue opportunities for issuers of
                  real-world assets
                </li>
                <li>
                  <span>2. </span> Boost transparency of asset usage and market
                  risk
                </li>
                <li>
                  <span>3. </span> Equality – broaden financial access to the
                  underbanked population underserved by traditional finance
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="box">
          <div className="divider"></div>
        </div>
        <section className="dao">
          <div className="box">
            <div className="dao-content">
              <div className="section-heading-box">
                <div className="section-heading">
                  <h3>dao.</h3>
                  <div></div>
                </div>
              </div>
              <div className="dao-p-box">
                <p>
                  We operate as a decentralized autonomous organization, or{" "}
                  <b>DAO.</b>
                  <br />
                  Compared to a traditional association or membership
                  organization, this means we are a community-led entity with no
                  central authority.
                </p>
              </div>
              <div className="dao-meaning-box">
                <h5>
                  <span>D</span> ecentralized = global, transparent &
                  uncensorable.
                </h5>
                <h5>
                  <span>A</span> utonomous = self-governing.
                </h5>
                <h5>
                  <span>O</span> rganization = coordination & collaboration
                  around shared objectives.
                </h5>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
