import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
import Helmet from "react-helmet"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoLight from "./assets/img/logo-light.png";
import LogoDark from "./assets/img/logo-dark.png";
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdMenu,
  MdClose,
} from "react-icons/md";
import AboutUs from "./views/AboutUs";
import RWA from "./views/RWA"
import Home from "./views/Home";
import GetInvolved from "./views/GetInvolved";
import OurWork from "./views/OurWork";

// Google Tag Manager Setup https://github.com/alinemorelli/react-gtm
import TagManager from "react-gtm-module";
const tagManagerArgs = { gtmId: 'GTM-TPG6HBP' }
TagManager.initialize(tagManagerArgs)

// MailerLite Universal
const mailerLite = `<script>(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
.push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
ml('account', '186826');<script>`

function App() {
  const [isHeaderMobOpen, setIsHeaderMobOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <>
      <Helmet>
      ${mailerLite}
      </Helmet>
      <MainPage />
    </>
  );
}

export default App;
