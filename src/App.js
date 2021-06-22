import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import React from "react";

document.body.style.width = "100vw";
document.body.style.overflowX = "hidden";

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
