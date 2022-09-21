import AboutUs from "./views/AboutUs";
import Home from "./views/Home";
import GetInvolved from "./views/GetInvolved";
import OurWork from "./views/OurWork";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <>
        <Switch>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
            <Route path="/ourwork" element={<OurWork />} />
          </Routes>
        </Switch>
      </>
    </>
  );
}

export default App;
