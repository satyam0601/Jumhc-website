import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Expedition from "./components/Expedition/Expedition";
import React from "react";
import RCCPage from "./components/RCCPage/RCCPage";

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
