import React from "react";

import Carousel from 'react-bootstrap/Carousel';

function About(){
    return(
        <div style={{ display: 'block', width: 700, padding: 30 }}>
        <h4>React-Bootstrap Carousel Component</h4>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
  src="https://free4kwallpapers.com/uploads/originals/2020/10/24/cityscape-photography--boston--usa--overcast--city-lights-wallpaper.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <h3>Boston</h3>
              <p>City1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b448588320083.560bb1df94afa.jpg"
              alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Newyork</h3>
              <p>City2</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
}

export default About