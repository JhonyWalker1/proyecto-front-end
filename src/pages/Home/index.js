import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import cusco from "../../assets/Image/cusco.jpg";
import luna from "../../assets/Image/luna-ica.jpg";
import mcolor from "../../assets/Image/m-color.jpg";
import lima from "../../assets/Image/lima.jpg";
import huaca from "../../assets/Image/huaca.jpg";
import PopularRegion from "../Center/center";



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Home = () => {
  return (
    <div className="contenido-todo" >
      <Carousel breakPoints={breakPoints}>
        <Item>
          <img src={cusco} width={400} alt="" />
        </Item>
        <Item>
          <img src={luna} width={400} alt="" />
        </Item>
        <Item>
          <img src={mcolor} width={400} alt="" />
        </Item>
        <Item>
          <img src={lima} width={400} alt="" />
        </Item>
        <Item>
          <img src={huaca} width={400} alt="" height={400} />
        </Item>
      </Carousel>

      <PopularRegion />
    </div>
  );
};

export default Home;
