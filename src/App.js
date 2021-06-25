import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Expedition from "./components/Expedition/Expedition";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import React from "react";
import RCCPage from "./components/RCCPage/RCCPage";
import ContactUs from "./components/ContactUs/ContactUs";
import Trek from "./components/Trek/Trek";
import OutdoorIndoor from './components/OutdoorIndoor/OutdoorIndoor';

function App() {
  return (
    <>
      <NavigationBar />
      <Trek />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
