import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";
import banner5 from "../images/banner5.jpg";


function BannerSlider() {
  return (
    <Carousel fade controls={true} indicators={false} interval={4000} pause={false}>
      {[banner2, banner3, banner4, banner5].map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image}
            alt={`Banner ${index + 1}`}
            className="banner-img d-block w-100"
            loading="lazy"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BannerSlider;
