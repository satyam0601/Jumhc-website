import React from "react";
import "./Expedition.css";
import BlogCard from "./BlogCard";
import ContentContainer from "../Common/ContentContainer/ContentContainer";

function Expedition() {
  return (
    <ContentContainer>
      <div className="exp-container">
        {/* <Slider /> */}
        <div className="exp-content">
          <h2 className="exp-heading">Expedition</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text every since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="blog-card-container ">
          <BlogCard>
            <img
          src="https://www.himalayan-treks.com/wp-content/uploads/2019/01/20181024_140649_Avedis.jpg"
          alt=""
        />
        <h1>Heading1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
        </p>
        </BlogCard>
          <BlogCard>
            <img
          src="https://www.adventurealternative.com/media/1309/nepal_everest-final-section-of-summit-ridge-cornice.jpg?width=500&height=375"
          alt=""
        />
        <h1>Heading2</h1>
        <p>
          dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
        </p></BlogCard>
        </div>
      </div>
    </ContentContainer>
  );
}
export default Expedition;
