import React from "react";
import "../styles/Globals.css";
import "../styles/views/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="app">
      <div className="about-page">
        <div className="box">
          <div className="mission-para">
            <h3>Mission</h3>
            <p>
              To support the transition of real world assets to tokenized
              economies on decentralized blockchains.
            </p>
            <h3>Philosophy</h3>
            <p>
              The real world blockchain association is set up to build shared
              infrastructure resulting in collective benefit. We nurture a
              community of developers, entrepreneurs and founders who have
              aligned goals and common ideals. <br /> <br /> Through the
              association we are able to create an industry network of thought
              leaders in the space. Working together we can push forwards and
              further develop our goals of bringing real world assets on-chain.
            </p>
            <div className="ordered-list-box">
              <h5>The RWBA will:</h5>
              <ul>
                <li>
                  Unite and represent a diverse mix of global crypto projects
                  focussed on real-world assets
                </li>
                <li>
                  Help set a better standard and brand for crypto – trust,
                  transparency, auditing
                </li>
                <li>
                  Legal expertise – concentrate expertise and resources, fight
                  legal battles, help the cause
                </li>
                <li>
                  Become a vehicle for investment of traditional finance into
                  the blockchain space
                </li>
                <li>
                  Highlight best practice in decentralized organization
                  stewardship
                </li>
                <li>
                  Take a leading role to support the collaboration of open
                  technical standards
                </li>
                <li>
                  Inspire, representative and support real-world causes that
                  revolutionize industries{" "}
                </li>
              </ul>
            </div>
            <div className="unordered-list-box">
              <h5>What is a real real-world asset?</h5>
              <ul>
                <li>
                  {" "}
                  Commodities – gold, silver, diamonds, wheat, rice, copper
                </li>
                <li>
                  Real estate – legal ownership of land, homes, and offices
                </li>
                <li>
                  Stock or equity: crypto versions of traditional stocks or part
                  of a private business
                </li>
              </ul>
            </div>
            <p>
              There are many crypto projects that focus on representing
              real-world assets in digital form on a blockchain. This usually
              involves: <br /> Linking an NFT (digital token) to a physical
              asset <br />
              Allowing the trading of assets with NFTs
            </p>
          </div>
          <div className="dao-para">
            <h3>DAO</h3>
            <p>
              We operate as a decentralized autonomous organization, or{" "}
              <b>DAO.</b>
              <br />
              <br />
              Compared to a traditional association or membership organization,
              this means we are a community-led entity with no central
              authority.
            </p>
            <p>
              Smart contracts lay at the foundation of our governance and
              community members will collectively make critical decisions about
              our future.
              <br />
              <br /> This will help align the incentives of all members who can
              create and vote on proposals about the ongoing direction of the
              association
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
