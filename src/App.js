import NavigationBar from "./components/NavigationBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./components/Home/Slider/Slider";
import AboutUs from "./components/Home/AboutUs/AboutUs";

function App() {
  return (
    <>
      <NavigationBar />
      <Slider />
      <AboutUs />
    </>
  );
}

export default App;
