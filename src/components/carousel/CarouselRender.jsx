import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./images/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";//this is carousel module css style
import classes from "./caraousel.module.css";
function CaraouselRender() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img key={imageItemLink} src={imageItemLink} />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
}

export default CaraouselRender;