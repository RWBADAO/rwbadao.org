import React from "react";
import "../styles/Globals.css";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="app">
      <main className="home-page">
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
            <div className="wwd-section">
              <h3 className="section-heading">WHAT WE DO</h3>
              <div className="wwd-grid">
                <div className="wwd-grid-card">
                  <h4>
                    <span>Build trust</span> in innovative projects through
                    certification, community and financial support
                  </h4>
                </div>
                <div className="wwd-grid-card">
                  <h4>
                    <span>Build trust</span> in innovative projects through
                    certification, community and financial support
                  </h4>
                </div>
                <div className="wwd-grid-card">
                  <h4>
                    <span>Concentrate legal expertise</span> and resources to
                    solve legal ambiguity around asset tokenization
                  </h4>
                </div>
                <div className="wwd-grid-card">
                  <h4>
                    <span>Steer collaboration</span> of open technical standards
                    to unlock greater liquidity, accessibility and transparency
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
