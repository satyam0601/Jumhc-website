import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import React from "react";
import Expedition from "./components/Expedition/Expedition";

document.body.style.width = "100vw";
document.body.style.overflowX = "hidden";

function App() {
  return (
    <>
      <NavigationBar />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
