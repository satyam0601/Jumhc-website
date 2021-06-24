import React from "react";
import ContentContainer from "../Common/ContentContainer/ContentContainer";
import BlogCard from "../Expedition/BlogCard";
import "./Trek.css";

function Trek() {
  return (
    <ContentContainer>
      <div className="trek-container">
        <h1>Treks</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          sapiente aperiam, nesciunt nam ducimus veniam facilis aliquam
          consequatur quod fugit pariatur deleniti doloribus dolor minus labore
          architecto nemo sint illo quas necessitatibus! Beatae, qui voluptates
          ullam aspernatur voluptas optio corrupti quas, similique, veritatis
          omnis quibusdam magni? Asperiores minus aut quod corporis, animi dolor
          adipisci aspernatur! Nemo harum vel aliquam odit ipsam quaerat enim
          iure dolorum, asperiores, assumenda doloribus. Impedit dolores nam
          nemo,
        </p>
        <img
          src="https://indiahikes.com/wp-content/uploads/2016/05/Tarsar-Marsar-Marsar-Lake-Indiahikes-Raghavendra-SN.jpg"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          maiores quo libero maxime, error fugit in debitis delectus ad enim
          labore incidunt natus cumque corporis perferendis minus autem omnis
          eligendi porro rem id placeat tempore? Inventore dicta earum debitis
          sint.accusamus iure debitis placeat eveniet dolorum reiciendis,
          laboriosam totam, facilis id voluptatum explicabo. Ea perferendis
          placeat fugiat deleniti, a quia repudiandae maxime reiciendis esse
          praesentium, quos facere temporibus.
        </p>
        <div className="trek-blog-container">
          <BlogCard>
            <img
              src="https://indiahikes.com/wp-content/uploads/2017/01/Nanda-Ghunti-Indiahikes-Vishwajeet.jpg"
              alt=""
            />
            <h1>Heading1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis
              quae repellendus perferendis voluptatem, est debitis..
            </p>
          </BlogCard>
          <BlogCard>
            <img
              src="https://indiahikes.com/wp-content/uploads/2021/03/Dayara-Bugyal-Vismay-B-Akka-2nd-price-2048x1365.jpg"
              alt=""
            />
            <h1>Heading2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis
              quae repellendus perferendis voluptatem, est debitis..
            </p>
          </BlogCard>
          <BlogCard>
            <img
              src="https://indiahikes.com/wp-content/uploads/2019/11/Kedarkantha-Trek-Mit-Sheth-Snow-Trails.jpg"
              alt=""
            />
            <h1>Heading3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis
              quae repellendus perferendis voluptatem, est debitis..
            </p>
          </BlogCard>
          <BlogCard>
            <img
              src="https://indiahikes.com/wp-content/uploads/2016/06/Har-Ki-Dun-Indiahikes-Anirban-Banerjee.jpg"
              alt=""
            />
            <h1>Heading4</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis
              quae repellendus perferendis voluptatem, est debitis..
            </p>
          </BlogCard>
          <BlogCard>
            <img
              src="https://indiahikes.com/wp-content/uploads/2019/12/Deoriatal-Chandrashila-Avijit-Jamloki-Indiahikes-December-16th-2019-2.jpg"
              alt=""
            />
            <h1>Heading5</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis
              quae repellendus perferendis voluptatem, est debitis..
            </p>
          </BlogCard>
          <BlogCard>
            <img
              src="https://indiahikes.com/wp-content/uploads/2018/06/Phulara-Ridge-Indiahikes-Braham-Gairola.jpg"
              alt=""
            />
            <h1>Heading6</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis
              quae repellendus perferendis voluptatem, est debitis..
            </p>
          </BlogCard>
        </div>
      </div>
    </ContentContainer>
  );
}

export default Trek;
