import React, { useState } from "react";
import "../styles/Globals.css";
import LogoLight from "../assets/img/logo-light.png";
import LogoDark from "../assets/img/logo-dark.png";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import EmblemImg from "../assets/img/emblem.png";
import Footer from "../components/Footer";
import { Bar } from "react-chartjs-2";
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdMenu,
  MdClose,
} from "react-icons/md";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

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

const RWA = () => {
  const [isHeaderMobOpen, setIsHeaderMobOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
  <main className="rwa-page">
    <section className="page-heading-section">
      <div className="box">
        <div className="page-heading">
        <h2>real world assets.</h2>
        <div></div>
        </div>
      </div>
      </section>
      <section className="home-text-con">
      <div className="box">
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

        <ul>
          <li>Commodities – gold, silver, diamonds, wheat, rice, copper</li>
          <li>Real estate – legal ownership of land, homes, and offices</li>
          <li>
          Stock or equity – crypto versions of traditional stocks or part
          of a private business
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
          <li>Linking an NFT (digital token) to a physical asset</li>
          <li>Allowing the trading of assets with NFTs</li>
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
          Increased accessibility - increasing the total addressable
          market and revenue opportunities for issuers of real-world
          assets
          </li>
          <li>Boost transparency of asset usage and market risk</li>
          <li>
          Equality – broaden financial access to the underbanked
          population underserved by traditional finance
          </li>
        </ul>
        <br />
        <br />
        </div>
        <div className="text-content-box no-padding">
        <h3>
          <span></span> The Tokenization opportunity<b>.</b>
        </h3>
        <br />
        <br />
        <p>
          The total size of tokenized illiquid assets, including real estate
          and natural resources could reach $16.1 trillion by 2030.
          <br />
          In a best-case scenario, that estimate goes up to US$68 trillion.
        </p>
        </div>
        <div className="home-chart-box">
        <h4>
          Tokenization of global iliquid assets estimated to be a $16
          Trillion business opportunity by 2030
        </h4>
        <div className="chart-box">
          <Bar options={options} data={data} />
        </div>
        </div>
      </div>
      </section>
    <Footer />
  </main>
  );
};

export default RWA;
