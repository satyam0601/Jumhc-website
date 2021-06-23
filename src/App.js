import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import React from "react";
import Expedition from "./components/Expedition/Expedition";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";

function App() {
  return (
    <>
      <NavigationBar />
      <AboutUsPage />
      <Footer />
    </>
  );
}

export default App;
