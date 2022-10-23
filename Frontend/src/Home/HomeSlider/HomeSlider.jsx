import React from "react";

import { Box, Image } from "@chakra-ui/react";
import Slider from 'react-slick';
import { useState } from "react";
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function HomeSlider() {
  const [slider, setSlider] = useState("");

  const cards = ["./1.jpg", "./2.jpg"];

  return (
    <Box>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Image src={url} key={index} />
        ))}
      </Slider>
    </Box>
  );
}

export default HomeSlider;
