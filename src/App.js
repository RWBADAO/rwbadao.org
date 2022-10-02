import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage";

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
import Home from "./views/Home";
import GetInvolved from "./views/GetInvolved";
import OurWork from "./views/OurWork";

// Google Tag Manager Setup https://github.com/alinemorelli/react-gtm
import TagManager from "react-gtm-module";
const tagManagerArgs = { gtmId: 'GTM-TPG6HBP' }
TagManager.initialize(tagManagerArgs)

function App() {
  const [isHeaderMobOpen, setIsHeaderMobOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
