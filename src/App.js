import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Expedition from "./components/Expedition/Expedition";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import React from "react";
import RCCPage from "./components/RCCPage/RCCPage";
import ContactUs from "./components/ContactUs/ContactUs";


function App() {
  return (
    <>
      <NavigationBar />
      <RCCPage />
      <Footer />
    </>
  );
}

export default App;
